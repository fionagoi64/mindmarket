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

  // Scale the hero from 1 to 0.8 over the first viewport of scrolling
  const heroScale = useTransform(scrollY, [0, 800], [1, 0.8]);

  // Charcoal overlay fading from transparent (0) to 40% opacity (0.4) as the user scrolls
  const overlayOpacity = useTransform(scrollY, [0, 800], [0, 0.4]);

  return (
    <div className="relative w-full bg-[#F4F1E4]">
      {/* Spacer in normal flow */}
      <div className="h-svh w-full pointer-events-none" />

      {/* HERO - sticky in background for the top 200svh */}
      <div className="absolute top-0 left-0 w-full h-[200svh] z-1 pointer-events-none">
        <div
          className="sticky top-0 h-svh w-full overflow-hidden"
          style={{ backgroundColor }}
        >
          <motion.section
            className="w-full h-full pt-24 md:pt-36 max-md:!scale-100"
            style={{
              scale: heroScale,
            }}
          >
            <div className="pointer-events-auto h-full w-full">
              {heroSection}
            </div>
          </motion.section>

          {hasOverlay && (
            <motion.div
              style={{ opacity: overlayOpacity }}
              className="absolute inset-0 bg-[#2c2e2a] pointer-events-none z-10 max-md:hidden"
            />
          )}
        </div>
      </div>

      {/* CONTENT - scrolls over hero */}
      <div className="relative z-10 w-full mt-[-100svh]">{contentSection}</div>
    </div>
  );
};
