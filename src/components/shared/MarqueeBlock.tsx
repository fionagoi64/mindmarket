import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from "motion/react";
import { useRef } from "react";

interface MarqueeRowProps {
  children: React.ReactNode;
  direction: "left" | "right";
  speed: number; // Percentage per second (e.g. 1.5% of width per second)
  className?: string;
}

// Seamlessly wrap translate value between -50% and 0%
const wrap = (min: number, max: number, v: number) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export const MarqueeRow = ({
  children,
  direction,
  speed,
  className = "",
}: MarqueeRowProps) => {
  // baseX holds the base offset percentage (wrapping at -25%)
  const baseX = useMotionValue(direction === "left" ? 0 : -25);

  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });

  // Map scroll velocity to a factor:
  // - Negative velocity (scrolling up) increases speed in original direction (velocityFactor > 0)
  // - Positive velocity (scrolling down) reverses the direction (velocityFactor < 0)
  const velocityFactor = useTransform(smoothVelocity, [1000, -1000], [-5, 5], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-25, 0, v)}%`);

  const directionFactor = useRef<number>(direction === "left" ? -1 : 1);

  useAnimationFrame((_time, delta) => {
    // Calculate distance to move in this frame (delta is in ms)
    let moveBy = directionFactor.current * speed * (delta / 1000);

    // Multiply movement speed and direction based on the current scroll velocity
    const currentVelocityFactor = velocityFactor.get();
    moveBy += moveBy * currentVelocityFactor;

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="relative w-full overflow-hidden py-2">
      <motion.div
        className={`flex gap-6 min-w-full cursor-pointer ${className}`}
        style={{ x }}
      >
        {children}
        {children}
        {children}
        {children}
      </motion.div>
    </div>
  );
};

interface MarqueeBlockProps {
  title?: React.ReactNode;
  subtitle?: React.ReactNode;
  children?: React.ReactNode;
}

interface MarqueeRowsProps<T> {
  rowsData: T[][];
  renderItem: (item: T, index: number) => React.ReactNode;
  speed?: number;
}

export const MarqueeRows = <T,>({
  rowsData,
  renderItem,
  speed = 2.0,
}: MarqueeRowsProps<T>) => {
  return (
    <>
      {rowsData.map((rowItems, rowIdx) => {
        const direction = rowIdx % 2 === 0 ? "left" : "right";

        return (
          <MarqueeRow key={rowIdx} direction={direction} speed={speed}>
            {rowItems.map((item, idx) => renderItem(item, idx))}
          </MarqueeRow>
        );
      })}
    </>
  );
};

export const MarqueeBlock = ({
  title,
  subtitle,
  children,
}: MarqueeBlockProps) => {
  return (
    <section className="relative w-full py-24 overflow-hidden">
      {/* Centered Intro Text */}
      {(title || subtitle) && (
        <div className="max-w-4xl mx-auto text-center px-6 mb-16">
          {title && (
            <h2 className="text-4xl sm:text-5xl font-semibold text-[#08060d] tracking-tight leading-[1.1] mb-6">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-lg sm:text-xl text-[#2c2e2a]/80 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* Marquee Carousel Rows Container */}
      <div className="relative w-full flex flex-col gap-4">{children}</div>
    </section>
  );
};
