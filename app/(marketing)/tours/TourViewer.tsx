"use client";

import { useEffect, useRef } from "react";

type Vector3Like = {
  x: number;
  y: number;
  z: number;
  set: (x: number, y: number, z: number) => Vector3Like;
  project: (camera: CameraLike) => void;
};

type CameraLike = {
  aspect: number;
  position: { set: (x: number, y: number, z: number) => void };
  updateProjectionMatrix: () => void;
};

type WebGLRendererLike = {
  domElement: HTMLCanvasElement;
  setPixelRatio: (value: number) => void;
  setSize: (width: number, height: number) => void;
  render: (scene: SceneLike, camera: CameraLike) => void;
  dispose: () => void;
};

type SceneLike = {
  add: (object: MeshLike) => void;
};

type GeometryLike = {
  scale: (x: number, y: number, z: number) => void;
  dispose: () => void;
};

type MaterialLike = {
  dispose: () => void;
};

type TextureLike = {
  dispose: () => void;
};

type MeshLike = unknown;

type TextureLoaderLike = {
  setCrossOrigin: (value: string) => void;
  load: (
    url: string,
    onLoad: (texture: TextureLike) => void,
    onProgress?: (event: unknown) => void,
    onError?: (event: unknown) => void
  ) => void;
};

type OrbitControlsLike = {
  enableDamping: boolean;
  dampingFactor: number;
  enableZoom: boolean;
  enablePan: boolean;
  rotateSpeed: number;
  target: { set: (x: number, y: number, z: number) => void };
  update: () => void;
  dispose: () => void;
};

type ThreeGlobal = {
  MathUtils: { degToRad: (deg: number) => number };
  Vector3: new () => Vector3Like;
  Scene: new () => SceneLike;
  PerspectiveCamera: new (
    fov: number,
    aspect: number,
    near: number,
    far: number
  ) => CameraLike;
  WebGLRenderer: new (options?: { antialias?: boolean }) => WebGLRendererLike;
  SphereGeometry: new (radius: number, widthSegments: number, heightSegments: number) => GeometryLike;
  MeshBasicMaterial: new (options: { map: TextureLike }) => MaterialLike;
  Mesh: new (geometry: GeometryLike, material: MaterialLike) => MeshLike;
  TextureLoader: new () => TextureLoaderLike;
  OrbitControls?: new (camera: CameraLike, domElement: HTMLElement) => OrbitControlsLike;
};

declare global {
  interface Window {
    THREE?: ThreeGlobal;
  }
}

const THREE_SCRIPT = "https://cdn.jsdelivr.net/npm/three@0.162.0/build/three.min.js";
const THREE_ORBIT = "https://cdn.jsdelivr.net/npm/three@0.162.0/examples/js/controls/OrbitControls.js";

type Hotspot = { pitch: number; yaw: number; text: string };

function loadScript(id: string, src: string) {
  return new Promise<void>((resolve, reject) => {
    if (typeof document === "undefined") {
      resolve();
      return;
    }

    const existing = document.getElementById(id) as HTMLScriptElement | null;
    if (existing) {
      if (existing.getAttribute("data-loaded") === "true") {
        resolve();
        return;
      }

      existing.addEventListener("load", () => resolve(), { once: true });
      existing.addEventListener("error", () => reject(new Error(`failed to load ${src}`)), {
        once: true,
      });
      return;
    }

    const script = document.createElement("script");
    script.crossOrigin = "anonymous";
    script.src = src;
    script.async = true;
    script.id = id;
    script.onload = () => {
      script.setAttribute("data-loaded", "true");
      resolve();
    };
    script.onerror = () => reject(new Error(`failed to load ${src}`));
    document.head.appendChild(script);
  });
}

export function TourViewer({ image, title, hotspots }: { image: string; title: string; hotspots?: Hotspot[] }) {
  const canvasHostRef = useRef<HTMLDivElement | null>(null);
  const hotspotLayerRef = useRef<HTMLDivElement | null>(null);
  const statusRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const statusElement = statusRef.current;
    let renderer: WebGLRendererLike | null = null;
    let camera: CameraLike | null = null;
    let controls: OrbitControlsLike | null = null;
    let animationFrame = 0;
    let texture: TextureLike | null = null;
    let sphereGeometry: GeometryLike | null = null;
    let sphereMaterial: MaterialLike | null = null;
    let hotspotElements: HTMLElement[] = [];

    const cleanupHotspots = () => {
      hotspotElements.forEach((element) => element.remove());
      hotspotElements = [];
    };

    const updateHotspotPositions = () => {
      if (!window.THREE || !hotspots?.length || !camera || !renderer) return;
      const THREE = window.THREE;
      const rendererElement = renderer.domElement;
      const width = rendererElement.clientWidth;
      const height = rendererElement.clientHeight;

      hotspots.forEach((spot, index) => {
        const element = hotspotElements[index];
        if (!element) return;

        const pitchRad = THREE.MathUtils.degToRad(spot.pitch);
        const yawRad = THREE.MathUtils.degToRad(spot.yaw);

        const vector = new THREE.Vector3();
        const x = Math.cos(pitchRad) * Math.sin(yawRad);
        const y = Math.sin(pitchRad);
        const z = Math.cos(pitchRad) * Math.cos(yawRad);
        vector.set(x, y, z);
        vector.project(camera);

        if (vector.z > 1) {
          element.style.opacity = "0";
          return;
        }

        const left = (vector.x * 0.5 + 0.5) * width;
        const top = (-vector.y * 0.5 + 0.5) * height;
        element.style.transform = `translate(-50%, -50%) translate(${left}px, ${top}px)`;
        element.style.opacity = "1";
      });
    };

    async function init() {
      try {
        await loadScript("three-base", THREE_SCRIPT);
        await loadScript("three-orbit", THREE_ORBIT);
      } catch (error) {
        console.error(error);
        if (statusRef.current) {
          statusRef.current.textContent = "خطا در بارگذاری پیش‌نمایش سه‌بعدی";
        }
        return;
      }

      if (!window.THREE || !canvasHostRef.current) return;

      const THREE = window.THREE;

      if (!THREE.OrbitControls) {
        if (statusRef.current) {
          statusRef.current.textContent = "کنترل‌های تعاملی در دسترس نیستند";
        }
        return;
      }

      const hostElement = canvasHostRef.current;
      const { clientWidth, clientHeight } = hostElement;
      const rendererInstance = new THREE.WebGLRenderer({ antialias: true });
      rendererInstance.setPixelRatio(window.devicePixelRatio);
      rendererInstance.setSize(clientWidth, clientHeight);
      rendererInstance.domElement.style.position = "absolute";
      rendererInstance.domElement.style.inset = "0";
      rendererInstance.domElement.style.width = "100%";
      rendererInstance.domElement.style.height = "100%";
      hostElement.appendChild(rendererInstance.domElement);
      renderer = rendererInstance;

      const sceneInstance = new THREE.Scene();

      const cameraInstance = new THREE.PerspectiveCamera(75, clientWidth / clientHeight, 0.1, 1000);
      cameraInstance.position.set(0, 0, 0.01);
      camera = cameraInstance;

      const controlsInstance = new THREE.OrbitControls(cameraInstance, rendererInstance.domElement);
      controlsInstance.enableDamping = true;
      controlsInstance.dampingFactor = 0.05;
      controlsInstance.enableZoom = false;
      controlsInstance.enablePan = false;
      controlsInstance.rotateSpeed = 0.35;
      controlsInstance.target.set(0, 0, 0);
      controlsInstance.update();
      controls = controlsInstance;

      const textureLoader = new THREE.TextureLoader();
      textureLoader.setCrossOrigin("anonymous");
      textureLoader.load(
        image,
        (loadedTexture: TextureLike) => {
          texture = loadedTexture;

          const geometryInstance = new THREE.SphereGeometry(500, 64, 64);
          geometryInstance.scale(-1, 1, 1);
          sphereGeometry = geometryInstance;

          const materialInstance = new THREE.MeshBasicMaterial({ map: texture });
          sphereMaterial = materialInstance;

          const sphere = new THREE.Mesh(geometryInstance, materialInstance);
          sceneInstance.add(sphere);

          if (statusRef.current) {
            statusRef.current.classList.add("hidden");
          }

          if (hotspots?.length && hotspotLayerRef.current) {
            cleanupHotspots();
            hotspotElements = hotspots.map((spot) => {
              const element = document.createElement("div");
              element.className =
                "absolute rounded-full bg-cyan-400/90 px-3 py-1 text-xs font-semibold text-slate-900 shadow-lg shadow-cyan-500/30 transition-all duration-200";
              element.textContent = spot.text;
              element.style.opacity = "0";
              hotspotLayerRef.current!.appendChild(element);
              return element;
            });
          }

          const renderLoop = () => {
            if (!controlsInstance || !rendererInstance || !sceneInstance || !cameraInstance) return;
            controlsInstance.update();
            rendererInstance.render(sceneInstance, cameraInstance);
            updateHotspotPositions();
            animationFrame = requestAnimationFrame(renderLoop);
          };

          renderLoop();
        },
        undefined,
        () => {
          if (statusRef.current) {
            statusRef.current.textContent = "امکان بارگذاری تصویر ۳۶۰ وجود ندارد";
          }
        }
      );

      const handleResize = () => {
        if (!canvasHostRef.current || !renderer || !camera) return;
        const { clientWidth: width, clientHeight: height } = canvasHostRef.current;
        renderer.setSize(width, height);
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        updateHotspotPositions();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }

    const resizeCleanupPromise = init();

    return () => {
      cleanupHotspots();
      if (statusElement) {
        statusElement.classList.remove("hidden");
        statusElement.textContent = "در حال بارگذاری تور نمونه...";
      }
      resizeCleanupPromise?.then((cleanup) => cleanup?.());
      if (animationFrame) cancelAnimationFrame(animationFrame);
      controls?.dispose();
      if (renderer) {
        renderer.dispose();
        renderer.domElement.remove();
      }
      sphereGeometry?.dispose();
      sphereMaterial?.dispose();
      texture?.dispose();
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
