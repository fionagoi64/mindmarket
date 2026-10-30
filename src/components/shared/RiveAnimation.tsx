import { Rive } from "@rive-app/react-canvas";
import { useCallback, useEffect, useRef, useState } from "react";

type TRiveAnimation = {
  src: string;
  autoplay?: boolean;
  width?: number | string;
  height?: number | string;
  className?: string;
  reveal?: boolean;
  revealTranslateX?: string;
};

export const RiveAnimation = ({
  src,
  autoplay = true,
  width,
  height,
  className = "",
  reveal = false,
  revealTranslateX = "0%",
}: TRiveAnimation) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const riveRef = useRef<Rive | null>(null);
  const [inView, setInView] = useState(!reveal);

  const resizeCanvas = useCallback(() => {
    const container = containerRef.current;
    const canvas = canvasRef.current;
    const rive = riveRef.current;
    if (!container || !canvas || !rive) return;

    const rect = container.getBoundingClientRect();
    const layoutWidth = container.offsetWidth || rect.width;
    const layoutHeight = container.offsetHeight || rect.height;
    if (layoutWidth <= 0 || layoutHeight <= 0) return;

    const dpr = Math.min(Math.max(window.devicePixelRatio || 1, 2), 3);
    const targetWidth = Math.round(layoutWidth * dpr);
    const targetHeight = Math.round(layoutHeight * dpr);

    if (canvas.width !== targetWidth || canvas.height !== targetHeight) {
      canvas.width = targetWidth;
      canvas.height = targetHeight;
    }
    rive.resizeToCanvas();
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas || !src) return;

    const riveInstance = new Rive({
      src: `/rive/${src}.riv`,
      canvas,
      autoplay,
      useOffscreenRenderer: true,
      onLoad: () => {
        resizeCanvas();
        if (autoplay) {
          riveInstance.startRendering();
          riveInstance.play();
        }
      },
    });

    riveRef.current = riveInstance;

    return () => {
      riveRef.current = null;
      riveInstance.cleanup();
    };
  }, [src, autoplay, resizeCanvas]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const resizeObserver = new ResizeObserver(() => {
      resizeCanvas();
    });
    resizeObserver.observe(el);

    const intersectionObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const rive = riveRef.current;
          if (entry.isIntersecting) {
            setInView(true);
            resizeCanvas();
            if (rive) {
              rive.startRendering();
              if (autoplay) {
                rive.play();
              }
            }
          } else if (rive) {
            rive.stopRendering();
          }
        });
      },
      { threshold: 0.01 },
    );

    intersectionObserver.observe(el);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      resizeObserver.disconnect();
      intersectionObserver.disconnect();
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [autoplay, resizeCanvas]);

  const hasCssSizing =
    className.includes("aspect-") ||
    className.includes("c-homepage-timeline") ||
    className.includes("c-deluxe-callout") ||
    className.includes("w-") ||
    className.includes("h-");

  const style: React.CSSProperties = {};
  if (width !== undefined) {
    style.width = width;
  } else if (!hasCssSizing) {
    style.width = 400;
  }
  if (height !== undefined) {
    style.height = height;
  } else if (!hasCssSizing) {
    style.height = 400;
  }

  const hasPositionClass =
    className.includes("absolute") ||
    className.includes("fixed") ||
    className.includes("sticky") ||
    className.includes("relative");

  return (
    <div
      ref={containerRef}
      style={style}
      className={`${hasPositionClass ? "" : "relative "} ${className}`.trim()}
    >
      <div
        className="absolute inset-0 h-full w-full transition-[transform,opacity] duration-700 ease-(--ease-bounce)"
        style={
          reveal
            ? {
                opacity: inView ? 1 : 0,
                transform: inView
                  ? "translate3d(0%, 0px, 0) scale(1)"
                  : `translate3d(${revealTranslateX}, 60px, 0) scale(0.75)`,
              }
            : undefined
        }
      >
        <canvas ref={canvasRef} className="block h-full w-full" />
      </div>
    </div>
  );
};
