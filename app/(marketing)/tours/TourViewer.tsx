"use client";

import { useEffect, useRef } from "react";

type Hotspot = { pitch: number; yaw: number; text: string };

const FOV = 75;
const NEAR = 0.1;
const FAR = 1000;

function toRadians(degrees: number) {
  return (degrees * Math.PI) / 180;
}

function createSphereGeometry(segments = 64, rings = 32, radius = 1) {
  const positions: number[] = [];
  const uvs: number[] = [];
  const indices: number[] = [];

  for (let y = 0; y <= rings; y += 1) {
    const v = y / rings;
    const theta = v * Math.PI;
    const sinTheta = Math.sin(theta);
    const cosTheta = Math.cos(theta);

    for (let x = 0; x <= segments; x += 1) {
      const u = x / segments;
      const phi = u * Math.PI * 2;
      const sinPhi = Math.sin(phi);
      const cosPhi = Math.cos(phi);

      // invert the sphere so that we render from the inside
      const px = -radius * sinTheta * cosPhi;
      const py = radius * cosTheta;
      const pz = radius * sinTheta * sinPhi;

      positions.push(px, py, pz);
      uvs.push(u, 1 - v);
    }
  }

  const columns = segments + 1;
  for (let y = 0; y < rings; y += 1) {
    for (let x = 0; x < segments; x += 1) {
      const a = y * columns + x;
      const b = a + columns;
      const c = b + 1;
      const d = a + 1;
      indices.push(a, b, d);
      indices.push(b, c, d);
    }
  }

  return {
    positions: new Float32Array(positions),
    uvs: new Float32Array(uvs),
    indices: new Uint16Array(indices),
  };
}

function createIdentityMatrix() {
  const matrix = new Float32Array(16);
  matrix[0] = 1;
  matrix[5] = 1;
  matrix[10] = 1;
  matrix[15] = 1;
  return matrix;
}

function multiplyMatrices(out: Float32Array, a: Float32Array, b: Float32Array) {
  const a00 = a[0];
  const a01 = a[4];
  const a02 = a[8];
  const a03 = a[12];
  const a10 = a[1];
  const a11 = a[5];
  const a12 = a[9];
  const a13 = a[13];
  const a20 = a[2];
  const a21 = a[6];
  const a22 = a[10];
  const a23 = a[14];
  const a30 = a[3];
  const a31 = a[7];
  const a32 = a[11];
  const a33 = a[15];

  const b00 = b[0];
  const b01 = b[4];
  const b02 = b[8];
  const b03 = b[12];
  const b10 = b[1];
  const b11 = b[5];
  const b12 = b[9];
  const b13 = b[13];
  const b20 = b[2];
  const b21 = b[6];
  const b22 = b[10];
  const b23 = b[14];
  const b30 = b[3];
  const b31 = b[7];
  const b32 = b[11];
  const b33 = b[15];

  out[0] = a00 * b00 + a01 * b10 + a02 * b20 + a03 * b30;
  out[4] = a00 * b01 + a01 * b11 + a02 * b21 + a03 * b31;
  out[8] = a00 * b02 + a01 * b12 + a02 * b22 + a03 * b32;
  out[12] = a00 * b03 + a01 * b13 + a02 * b23 + a03 * b33;

  out[1] = a10 * b00 + a11 * b10 + a12 * b20 + a13 * b30;
  out[5] = a10 * b01 + a11 * b11 + a12 * b21 + a13 * b31;
  out[9] = a10 * b02 + a11 * b12 + a12 * b22 + a13 * b32;
  out[13] = a10 * b03 + a11 * b13 + a12 * b23 + a13 * b33;

  out[2] = a20 * b00 + a21 * b10 + a22 * b20 + a23 * b30;
  out[6] = a20 * b01 + a21 * b11 + a22 * b21 + a23 * b31;
  out[10] = a20 * b02 + a21 * b12 + a22 * b22 + a23 * b32;
  out[14] = a20 * b03 + a21 * b13 + a22 * b23 + a23 * b33;

  out[3] = a30 * b00 + a31 * b10 + a32 * b20 + a33 * b30;
  out[7] = a30 * b01 + a31 * b11 + a32 * b21 + a33 * b31;
  out[11] = a30 * b02 + a31 * b12 + a32 * b22 + a33 * b32;
  out[15] = a30 * b03 + a31 * b13 + a32 * b23 + a33 * b33;
}

function createPerspectiveMatrix(out: Float32Array, fovRad: number, aspect: number, near: number, far: number) {
  const f = 1 / Math.tan(fovRad / 2);
  out[0] = f / aspect;
  out[1] = 0;
  out[2] = 0;
  out[3] = 0;

  out[4] = 0;
  out[5] = f;
  out[6] = 0;
  out[7] = 0;

  out[8] = 0;
  out[9] = 0;
  out[10] = (far + near) / (near - far);
  out[11] = -1;

  out[12] = 0;
  out[13] = 0;
  out[14] = (2 * far * near) / (near - far);
  out[15] = 0;
}

function normalizeVector(vector: [number, number, number]) {
  const [x, y, z] = vector;
  const length = Math.hypot(x, y, z) || 1;
  return [x / length, y / length, z / length] as [number, number, number];
}

function subtractVectors(a: [number, number, number], b: [number, number, number]) {
  return [a[0] - b[0], a[1] - b[1], a[2] - b[2]] as [number, number, number];
}

function cross(a: [number, number, number], b: [number, number, number]) {
  return [
    a[1] * b[2] - a[2] * b[1],
    a[2] * b[0] - a[0] * b[2],
    a[0] * b[1] - a[1] * b[0],
  ] as [number, number, number];
}

function dot(a: [number, number, number], b: [number, number, number]) {
  return a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
}

function lookAt(out: Float32Array, eye: [number, number, number], target: [number, number, number], up: [number, number, number]) {
  const zAxis = normalizeVector(subtractVectors(eye, target));
  let xAxis = cross(up, zAxis);
  const xLength = Math.hypot(xAxis[0], xAxis[1], xAxis[2]);
  if (xLength < 1e-5) {
    xAxis = cross([0, 0, 1], zAxis);
  }
  xAxis = normalizeVector(xAxis);
  const yAxis = cross(zAxis, xAxis);

  out[0] = xAxis[0];
  out[1] = yAxis[0];
  out[2] = zAxis[0];
  out[3] = 0;
  out[4] = xAxis[1];
  out[5] = yAxis[1];
  out[6] = zAxis[1];
  out[7] = 0;
  out[8] = xAxis[2];
  out[9] = yAxis[2];
  out[10] = zAxis[2];
  out[11] = 0;
  out[12] = -dot(xAxis, eye);
  out[13] = -dot(yAxis, eye);
  out[14] = -dot(zAxis, eye);
  out[15] = 1;
}

function vectorFromAngles(pitch: number, yaw: number) {
  const pitchRad = toRadians(pitch);
  const yawRad = toRadians(yaw);
  const x = Math.cos(pitchRad) * Math.sin(yawRad);
  const y = Math.sin(pitchRad);
  const z = Math.cos(pitchRad) * Math.cos(yawRad);
  return [x, y, z] as [number, number, number];
}

export function TourViewer({ image, title, hotspots }: { image?: string; title: string; hotspots?: Hotspot[] }) {
  const canvasHostRef = useRef<HTMLDivElement | null>(null);
  const hotspotLayerRef = useRef<HTMLDivElement | null>(null);
  const statusRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const statusElement = statusRef.current;
    const hostElement = canvasHostRef.current;
    if (!hostElement) return;

    const canvas = document.createElement("canvas");
    canvas.style.position = "absolute";
    canvas.style.inset = "0";
    canvas.style.width = "100%";
    canvas.style.height = "100%";
    hostElement.appendChild(canvas);

    const gl = canvas.getContext("webgl");
    if (!gl) {
      if (statusElement) {
        statusElement.textContent = "مرورگر شما از WebGL پشتیبانی نمی‌کند";
      }
      canvas.remove();
      return;
    }

    let yaw = 0;
    let pitch = 0;
    let animationFrame = 0;
    let textureLoaded = false;
    let isPointerDown = false;
    let startX = 0;
    let startY = 0;
    let startYaw = 0;
    let startPitch = 0;

    let vertexBuffer: WebGLBuffer | null = null;
    let uvBuffer: WebGLBuffer | null = null;
    let indexBuffer: WebGLBuffer | null = null;
    let texture: WebGLTexture | null = null;
    let program: WebGLProgram | null = null;

    const hotspotElements: HTMLElement[] = [];

    const cleanupHotspots = () => {
      hotspotElements.splice(0, hotspotElements.length).forEach((element) => element.remove());
    };

    if (hotspots?.length && hotspotLayerRef.current) {
      hotspots.forEach((spot) => {
        const element = document.createElement("div");
        element.className =
          "absolute rounded-full bg-cyan-400/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow-lg shadow-cyan-500/30 transition-all duration-200";
        element.textContent = spot.text;
        element.style.opacity = "0";
        hotspotLayerRef.current!.appendChild(element);
        hotspotElements.push(element);
      });
    }

    const vertexShaderSource = `
      attribute vec3 position;
      attribute vec2 uv;
      uniform mat4 uMatrix;
      varying vec2 vUv;
      void main() {
        vUv = vec2(1.0 - uv.x, uv.y);
        gl_Position = uMatrix * vec4(position, 1.0);
      }
    `;

    const fragmentShaderSource = `
      precision mediump float;
      varying vec2 vUv;
      uniform sampler2D uTexture;
      void main() {
        gl_FragColor = texture2D(uTexture, vUv);
      }
    `;

    const compileShader = (type: number, source: string) => {
      const shader = gl.createShader(type);
      if (!shader) return null;
      gl.shaderSource(shader, source);
      gl.compileShader(shader);
      if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
        console.error(gl.getShaderInfoLog(shader));
        gl.deleteShader(shader);
        return null;
      }
      return shader;
    };

    const vertexShader = compileShader(gl.VERTEX_SHADER, vertexShaderSource);
    const fragmentShader = compileShader(gl.FRAGMENT_SHADER, fragmentShaderSource);

    if (!vertexShader || !fragmentShader) {
      if (statusElement) {
        statusElement.textContent = "خطا در آماده‌سازی پیش‌نمایش";
      }
      gl.deleteShader(vertexShader!);
      gl.deleteShader(fragmentShader!);
      canvas.remove();
      cleanupHotspots();
      return;
    }

    program = gl.createProgram();
    if (!program) {
      if (statusElement) {
        statusElement.textContent = "امکان ساخت برنامه گرافیکی وجود ندارد";
      }
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      canvas.remove();
      cleanupHotspots();
      return;
    }

    gl.attachShader(program, vertexShader);
    gl.attachShader(program, fragmentShader);
    gl.linkProgram(program);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      console.error(gl.getProgramInfoLog(program));
      if (statusElement) {
        statusElement.textContent = "خطا در راه‌اندازی رندر سه‌بعدی";
      }
      gl.deleteProgram(program);
      gl.deleteShader(vertexShader);
      gl.deleteShader(fragmentShader);
      canvas.remove();
      cleanupHotspots();
      return;
    }

    gl.deleteShader(vertexShader);
    gl.deleteShader(fragmentShader);

    const { positions, uvs, indices } = createSphereGeometry();

    vertexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, positions, gl.STATIC_DRAW);

    uvBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
    gl.bufferData(gl.ARRAY_BUFFER, uvs, gl.STATIC_DRAW);

    indexBuffer = gl.createBuffer();
    gl.bindBuffer(gl.ELEMENT_ARRAY_BUFFER, indexBuffer);
    gl.bufferData(gl.ELEMENT_ARRAY_BUFFER, indices, gl.STATIC_DRAW);

    const positionLocation = gl.getAttribLocation(program, "position");
    const uvLocation = gl.getAttribLocation(program, "uv");
    const matrixLocation = gl.getUniformLocation(program, "uMatrix");
    const textureLocation = gl.getUniformLocation(program, "uTexture");

    gl.enableVertexAttribArray(positionLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, vertexBuffer);
    gl.vertexAttribPointer(positionLocation, 3, gl.FLOAT, false, 0, 0);

    gl.enableVertexAttribArray(uvLocation);
    gl.bindBuffer(gl.ARRAY_BUFFER, uvBuffer);
    gl.vertexAttribPointer(uvLocation, 2, gl.FLOAT, false, 0, 0);

    gl.useProgram(program);
    gl.uniform1i(textureLocation, 0);

    texture = gl.createTexture();
    gl.bindTexture(gl.TEXTURE_2D, texture);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_S, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_WRAP_T, gl.CLAMP_TO_EDGE);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MIN_FILTER, gl.LINEAR);
    gl.texParameteri(gl.TEXTURE_2D, gl.TEXTURE_MAG_FILTER, gl.LINEAR);

    const applyTexture = (source: CanvasImageSource) => {
      gl.bindTexture(gl.TEXTURE_2D, texture);
      gl.pixelStorei(gl.UNPACK_FLIP_Y_WEBGL, 0);
      gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, gl.RGBA, gl.UNSIGNED_BYTE, source);
      textureLoaded = true;
      if (statusElement) {
        statusElement.classList.add("hidden");
      }
    };

    const applyFallbackTexture = () => {
      const gradientCanvas = document.createElement("canvas");
      gradientCanvas.width = 1024;
      gradientCanvas.height = 512;
      const ctx = gradientCanvas.getContext("2d");
      if (!ctx) {
        if (statusElement) {
          statusElement.textContent = "امکان نمایش تور نمونه وجود ندارد";
        }
        return;
      }
      const gradient = ctx.createLinearGradient(0, 0, 0, gradientCanvas.height);
      gradient.addColorStop(0, "#0f172a");
      gradient.addColorStop(0.4, "#1e293b");
      gradient.addColorStop(1, "#0f172a");
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, gradientCanvas.width, gradientCanvas.height);

      ctx.fillStyle = "rgba(14, 116, 144, 0.45)";
      for (let i = 0; i < 6; i += 1) {
        const startX = 120 + i * 150;
        const windowHeight = 180 + ((i % 3) * 15 - 20);
        ctx.fillRect(startX, 220 - windowHeight / 2, 90, windowHeight);
      }

      ctx.fillStyle = "rgba(100, 116, 139, 0.3)";
      for (let i = 0; i < 5; i += 1) {
        const centerX = gradientCanvas.width * (0.2 + i * 0.16);
        const radius = 120 + i * 18;
        ctx.beginPath();
        ctx.arc(centerX, gradientCanvas.height - 40, radius, Math.PI, Math.PI * 2);
        ctx.fill();
      }

      applyTexture(gradientCanvas);
    };

    if (image) {
      const imageElement = new Image();
      imageElement.crossOrigin = "anonymous";
      imageElement.src = image;
      imageElement.onload = () => {
        applyTexture(imageElement);
      };
      imageElement.onerror = () => {
        applyFallbackTexture();
        if (statusElement) {
          statusElement.textContent = "پیش‌نمایش با تصویر جایگزین نمایش داده شد";
        }
      };
    } else {
      applyFallbackTexture();
    }

    const projectionMatrix = createIdentityMatrix();
    const viewMatrix = createIdentityMatrix();
    const viewProjectionMatrix = createIdentityMatrix();

    const updateProjection = () => {
      const width = hostElement.clientWidth;
      const height = hostElement.clientHeight || 1;
      const dpr = window.devicePixelRatio || 1;
      canvas.width = Math.floor(width * dpr);
      canvas.height = Math.floor(height * dpr);
      gl.viewport(0, 0, canvas.width, canvas.height);
      const aspect = width / height;
      createPerspectiveMatrix(projectionMatrix, toRadians(FOV), aspect, NEAR, FAR);
    };

    const updateHotspotPositions = () => {
      if (!hotspots?.length || !hotspotLayerRef.current) return;
      const width = hostElement.clientWidth;
      const height = hostElement.clientHeight || 1;
      const aspect = width / height;
      const forward = normalizeVector(vectorFromAngles(pitch, yaw));
      const worldUp: [number, number, number] = [0, 1, 0];
      let right = cross(worldUp, forward);
      if (Math.hypot(right[0], right[1], right[2]) < 1e-5) {
        right = cross([0, 0, 1], forward);
      }
      right = normalizeVector(right);
      const up = normalizeVector(cross(forward, right));

      const fovRad = toRadians(FOV);
      const verticalFov = 2 * Math.atan(Math.tan(fovRad / 2) / aspect);

      hotspots.forEach((spot, index) => {
        const element = hotspotElements[index];
        if (!element) return;
        const vector = normalizeVector(vectorFromAngles(spot.pitch, spot.yaw));
        const dx = dot(vector, right);
        const dy = dot(vector, up);
        const dz = dot(vector, forward);
        if (dz <= 0) {
          element.style.opacity = "0";
          return;
        }

        const ndcX = (dx / dz) / Math.tan(fovRad / 2);
        const ndcY = (dy / dz) / Math.tan(verticalFov / 2);

        if (Math.abs(ndcX) > 1 || Math.abs(ndcY) > 1) {
          element.style.opacity = "0";
          return;
        }

        const left = (ndcX * 0.5 + 0.5) * width;
        const top = (-ndcY * 0.5 + 0.5) * height;
        element.style.transform = `translate(-50%, -50%) translate(${left}px, ${top}px)`;
        element.style.opacity = "1";
      });
    };

    const render = () => {
      if (!textureLoaded) {
        animationFrame = requestAnimationFrame(render);
        return;
      }

      const forward = normalizeVector(vectorFromAngles(pitch, yaw));
      const cameraPosition: [number, number, number] = [0, 0, 0];
      const target: [number, number, number] = [
        cameraPosition[0] + forward[0],
        cameraPosition[1] + forward[1],
        cameraPosition[2] + forward[2],
      ];
      lookAt(viewMatrix, cameraPosition, target, [0, 1, 0]);
      multiplyMatrices(viewProjectionMatrix, projectionMatrix, viewMatrix);

      gl.clearColor(0, 0, 0, 1);
      gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
      gl.uniformMatrix4fv(matrixLocation, false, viewProjectionMatrix);
      gl.drawElements(gl.TRIANGLES, indices.length, gl.UNSIGNED_SHORT, 0);

      updateHotspotPositions();
      animationFrame = requestAnimationFrame(render);
    };

    const handleResize = () => {
      updateProjection();
      updateHotspotPositions();
    };

    const handlePointerDown = (event: PointerEvent) => {
      isPointerDown = true;
      startX = event.clientX;
      startY = event.clientY;
      startYaw = yaw;
      startPitch = pitch;
      canvas.setPointerCapture(event.pointerId);
    };

    const handlePointerMove = (event: PointerEvent) => {
      if (!isPointerDown) return;
      const deltaX = event.clientX - startX;
      const deltaY = event.clientY - startY;
      yaw = startYaw - deltaX * 0.1;
      pitch = startPitch - deltaY * 0.1;
      const limit = 89;
      if (pitch > limit) pitch = limit;
      if (pitch < -limit) pitch = -limit;
      updateHotspotPositions();
    };

    const handlePointerUp = (event: PointerEvent) => {
      isPointerDown = false;
      if (canvas.hasPointerCapture(event.pointerId)) {
        canvas.releasePointerCapture(event.pointerId);
      }
    };

    const handlePointerLeave = () => {
      isPointerDown = false;
    };

    updateProjection();
    updateHotspotPositions();
    window.addEventListener("resize", handleResize);
    canvas.addEventListener("pointerdown", handlePointerDown);
    canvas.addEventListener("pointermove", handlePointerMove);
    canvas.addEventListener("pointerup", handlePointerUp);
    canvas.addEventListener("pointerleave", handlePointerLeave);

    gl.enable(gl.DEPTH_TEST);
    gl.disable(gl.CULL_FACE);

    animationFrame = requestAnimationFrame(render);

    return () => {
      cancelAnimationFrame(animationFrame);
      window.removeEventListener("resize", handleResize);
      canvas.removeEventListener("pointerdown", handlePointerDown);
      canvas.removeEventListener("pointermove", handlePointerMove);
      canvas.removeEventListener("pointerup", handlePointerUp);
      canvas.removeEventListener("pointerleave", handlePointerLeave);
      canvas.remove();
      cleanupHotspots();
      if (statusElement) {
        statusElement.classList.remove("hidden");
        statusElement.textContent = "در حال بارگذاری تور نمونه...";
      }
      if (program) gl.deleteProgram(program);
      if (vertexBuffer) gl.deleteBuffer(vertexBuffer);
      if (uvBuffer) gl.deleteBuffer(uvBuffer);
      if (indexBuffer) gl.deleteBuffer(indexBuffer);
      if (texture) gl.deleteTexture(texture);
    };
  }, [hotspots, image]);

  return (
    <div className="relative h-[420px] w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-950">
      <div ref={canvasHostRef} className="relative h-full w-full" />
      <div ref={hotspotLayerRef} className="pointer-events-none absolute inset-0" />
      <div className="pointer-events-none absolute left-4 top-4 rounded-full bg-slate-900/80 px-4 py-2 text-xs font-semibold text-white/90 shadow-lg">
        {title}
      </div>
      <div
        ref={statusRef}
        className="pointer-events-none absolute inset-0 flex items-center justify-center text-sm font-medium text-slate-200"
      >
        در حال بارگذاری تور نمونه...
      </div>
    </div>
  );
}
