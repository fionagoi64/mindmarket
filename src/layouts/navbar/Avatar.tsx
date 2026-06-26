import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useRef } from "react";
import hair from "/images/extra-hair.svg";
import mouth from "/images/mouth.svg";

interface AvatarProps {
  isHovered?: boolean;
}

export const Avatar = ({
  isHovered = false,
}: AvatarProps) => {
  const containerRef =
    useRef<HTMLDivElement>(null);

  // Motion values for target position
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring configuration
  const springConfig = {
    damping: 25,
    stiffness: 220,
    mass: 0.5,
  };
  const translateX = useSpring(
    mouseX,
    springConfig,
  );
  const translateY = useSpring(
    mouseY,
    springConfig,
  );

  // Map normalized translation [-4.5, 4.5] to actual pixel offsets
  // For X axis: hair shifts up to 4px left/right, mouth shifts up to 5px
  const hairX = useTransform(
    translateX,
    [-4.5, 4.5],
    [-8, 8],
  );
  const mouthX = useTransform(
    translateX,
    [-4.5, 4.5],
    [-8, 8],
  );

  // For Y axis:
  // - When looking all the way up (translateY = -4.5), the hair translates by -14px.
  //   Combined with initial -mt-4.5 (-18px), this reaches the maximum offset of -mt-8 (-32px).
  // - When looking all the way down (translateY = 4.5), the hair translates down by +4px.
  const hairY = useTransform(
    translateY,
    [-4.5, 0, 4.5],
    [-25, 0, 4],
  );
  const mouthY = useTransform(
    translateY,
    [-4.5, 0, 4.5],
    [-23, 0, 3],
  );

  useEffect(() => {
    const handleMouseMove = (
      event: MouseEvent,
    ) => {
      if (!containerRef.current) return;

      const rect =
        containerRef.current.getBoundingClientRect();
      const avatarCenterX =
        rect.left + rect.width / 2;
      const avatarCenterY =
        rect.top + rect.height / 2;

      const dx = event.clientX - avatarCenterX;
      const dy = event.clientY - avatarCenterY;
      const distance = Math.max(
        1,
        Math.sqrt(dx * dx + dy * dy),
      );

      // Max translation in pixels (capped for a subtle aesthetic)
      const maxShift = 4.5;
      // Reach max shift at 150px away
      const intensity = Math.min(
        distance / 150,
        1,
      );
      const angle = Math.atan2(dy, dx);

      mouseX.set(
        Math.cos(angle) * maxShift * intensity,
      );
      mouseY.set(
        Math.sin(angle) * maxShift * intensity,
      );
    };

    const handleMouseLeave = () => {
      // Return to center when mouse leaves viewport
      mouseX.set(0);
      mouseY.set(0);
    };

    window.addEventListener(
      "mousemove",
      handleMouseMove,
    );
    document.addEventListener(
      "mouseleave",
      handleMouseLeave,
    );

    return () => {
      window.removeEventListener(
        "mousemove",
        handleMouseMove,
      );
      document.removeEventListener(
        "mouseleave",
        handleMouseLeave,
      );
    };
  }, [mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="bg-[#00A3FF] h-10 w-10 rounded-full flex flex-col items-center justify-center overflow-hidden border-none relative select-none pointer-events-none"
    >
      <motion.img
        src={hair}
        aria-hidden="true"
        className="-mt-8 w-16 h-auto max-w-none shrink-0 select-none pointer-events-none"
        style={{ x: hairX, y: hairY }}
        // animate={{
        //   scale: isHovered ? 1.05 : 1,
        // }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />
      <motion.img
        src={mouth}
        aria-hidden="true"
        className="select-none pointer-events-none w-4 h-auto shrink-0 mt-[3px]"
        style={{ x: mouthX, y: mouthY }}
        animate={{
          scale: isHovered ? 1.25 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 20,
        }}
      />
    </div>
  );
};
