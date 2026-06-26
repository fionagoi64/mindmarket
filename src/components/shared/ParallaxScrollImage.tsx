import { useRef } from "react";
import { motion, useScroll, useTransform, useSpring } from "motion/react";
import { cn } from "@/utils/cn";

export interface AnimatedImageProps {
  src?: string;
  alt?: string;
  className?: string;
  height?: string; // e.g., "50vh", "500px"
  parallaxSpeed?: number; // range from -0.6 to 0.6. Default: 0.15. Positive moves up, negative moves down
}

export const ParallaxScrollImage = ({
  src = "/images/about-us.avif",
  alt = "MindMarket visual",
  className,
  height = "60vh",
  parallaxSpeed = 0.08,
}: AnimatedImageProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // 1. Scroll-linked Parallax
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Smooth raw scroll progress with spring physics
  const smoothProgress = useSpring(scrollYProgress, {
    damping: 25,
    stiffness: 90,
    mass: 0.25,
  });

  // Map scroll progress to vertical parallax offset
  const speed = Math.min(Math.max(parallaxSpeed, -0.6), 0.6);
  const imgHeight = `${100 + Math.abs(speed) * 2 * 100}%`;
  const imgTop = `${-Math.abs(speed) * 100}%`;

  const yRange =
    speed >= 0
      ? [`${-speed * 100}%`, `${speed * 100}%`]
      : [`${-speed * 100}%`, `${speed * 100}%`].reverse();

  const y = useTransform(smoothProgress, [0, 1], yRange);

  return (
    <div
      ref={containerRef}
      className={cn("w-full flex items-center justify-center", className)}
    >
      <div
        className="relative w-full overflow-hidden select-none rounded-3xl"
        style={{ height }}
      >
        {/* Parallax Image */}
        <motion.img
          src={src}
          alt={alt}
          className="absolute left-0 w-full object-cover select-none pointer-events-none"
          style={{
            height: imgHeight,
            top: imgTop,
            y,
          }}
        />
      </div>
    </div>
  );
};
