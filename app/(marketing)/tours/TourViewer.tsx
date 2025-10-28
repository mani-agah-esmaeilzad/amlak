"use client";

import { useEffect, useRef } from "react";

declare global {
  interface Window {
    pannellum?: {
      viewer: (
        container: HTMLElement,
        options: {
          type: "equirectangular";
          panorama: string;
          autoLoad?: boolean;
          title?: string;
          author?: string;
          showZoomCtrl?: boolean;
          compass?: boolean;
          hotSpots?: Array<{
            pitch: number;
            yaw: number;
            type: string;
            text?: string;
          }>;
        }
      ) => { destroy: () => void };
    };
  }
}

const scriptUrl = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.js";
const styleUrl = "https://cdn.jsdelivr.net/npm/pannellum@2.5.6/build/pannellum.css";

function ensureAsset(tagId: string, create: () => HTMLElement) {
  if (typeof document === "undefined") return;
  if (!document.getElementById(tagId)) {
    const element = create();
    element.id = tagId;
    document.head.appendChild(element);
  }
}

export function TourViewer({
  image,
  title,
  hotspots,
}: {
  image: string;
  title: string;
  hotspots?: Array<{ pitch: number; yaw: number; text: string; type?: string }>;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    ensureAsset("pannellum-style", () => {
      const link = document.createElement("link");
      link.rel = "stylesheet";
      link.href = styleUrl;
      return link;
    });

    ensureAsset("pannellum-script", () => {
      const script = document.createElement("script");
      script.src = scriptUrl;
      script.async = true;
      return script;
    });
  }, []);

  useEffect(() => {
    let viewer: { destroy: () => void } | undefined;

    function init() {
      if (!containerRef.current || !window.pannellum?.viewer) return;
      viewer = window.pannellum.viewer(containerRef.current, {
        type: "equirectangular",
        panorama: image,
        autoLoad: true,
        showZoomCtrl: false,
        compass: false,
        title,
        hotSpots: hotspots,
      });
    }

    if (window.pannellum?.viewer) {
      init();
    } else {
      const interval = setInterval(() => {
        if (window.pannellum?.viewer) {
          clearInterval(interval);
          init();
        }
      }, 200);

      return () => clearInterval(interval);
    }

    return () => {
      viewer?.destroy();
    };
  }, [hotspots, image, title]);

  return <div ref={containerRef} className="h-[420px] w-full overflow-hidden rounded-3xl border border-white/10" />;
}
