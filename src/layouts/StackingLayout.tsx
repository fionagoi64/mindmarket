import { motion, useScroll, useTransform } from "motion/react";
import { type ReactNode } from "react";

type TStackingLayout = {
  backgroundColor: string;
  heroSection?: ReactNode;
  contentSection?: ReactNode;
  hasOverlay?: boolean;
};

export const StackingLayout = ({
  backgroundColor,
  heroSection,
  contentSection,
  hasOverlay = false,
}: TStackingLayout) => {
  const { scrollY } = useScroll();

  // Scale and fade the hero over the first 600px of scrolling
  const heroScale = useTransform(scrollY, [0, 600], [1, 0.9]);
  const heroOpacity = useTransform(scrollY, [0, 600], [1, 0]);

  // Black overlay fading from transparent (0) to 60% opacity (0.6) as the user scrolls
  const overlayOpacity = useTransform(scrollY, [0, 600], [0, 0.3]);

  return (
    <div className="relative w-full">
      {/* HERO - sticky in background */}
      <div
        className="sticky top-0 h-svh w-full overflow-hidden z-1 pointer-events-none"
        style={{ backgroundColor }}
      >
        <motion.section
          className="w-full h-full pt-36"
          style={{
            scale: heroScale,
            opacity: heroOpacity,
          }}
        >
          <div className="pointer-events-auto h-full w-full">{heroSection}</div>
        </motion.section>

        {hasOverlay && (
          <motion.div
            style={{ opacity: overlayOpacity }}
            className="absolute inset-0 bg-black pointer-events-none z-10"
          />
        )}
      </div>

      {/* CONTENT - scrolls over hero */}
      <div className="relative z-10 w-full mt-[-100svh]">{contentSection}</div>
    </div>
  );
};
