import { LOCATIONS } from "@/constants/globe";
import {
  animate,
  type AnimationPlaybackControls,
  motion,
  useMotionValue,
  useScroll,
  useTransform,
} from "motion/react";
import { useEffect, useRef, useState } from "react";

type TLocation = {
  name: string;
  x: number;
  y: number;
  onHoverChange: (hovered: boolean) => void;
};

const Pin = ({ name, x, y, onHoverChange }: TLocation) => {
  const [isHovered, setIsHovered] = useState(false);
  const tooltipClass = y < 50 ? "top-full mt-2" : "bottom-full mb-2";

  const handleMouseEnter = () => {
    setIsHovered(true);
    onHoverChange(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    onHoverChange(false);
  };

  return (
    <div
      className="absolute -translate-x-1/2 -translate-y-1/2 z-10 group"
      style={{
        left: `${x}%`,
        top: `${y}%`,
      }}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Normal Blue Circle */}
      <div className="h-5 w-5 rounded-full bg-[#00A3FF] shadow-sm cursor-pointer hover:scale-110 transition-transform" />

      {/* Tooltip */}
      {isHovered && (
        <div
          className={`absolute left-1/2 -translate-x-1/2 ${tooltipClass} bg-white px-3 py-1.5 rounded-lg shadow-lg whitespace-nowrap text-xs md:text-sm font-medium text-[#2c2e2a] flex items-center gap-1.5 z-20 pointer-events-none`}
        >
          <span className="w-2 h-2 rounded-full bg-[#00A3FF]"></span>
          {name}
        </div>
      )}
    </div>
  );
};

export const GlobeSpin = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLImageElement>(null);
  const [isPinHovered, setIsPinHovered] = useState(false);
  const [mapWidth, setMapWidth] = useState(0);

  const x = useMotionValue(0);
  const animationRef = useRef<AnimationPlaybackControls | null>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1.5]);

  // Measure map width dynamically on load, resizing, or layout changes
  useEffect(() => {
    if (!mapRef.current) return;

    const measure = () => {
      if (mapRef.current) {
        setMapWidth(
          mapRef.current.getBoundingClientRect().width ||
            mapRef.current.offsetWidth,
        );
      }
    };

    const observer = new ResizeObserver(() => {
      measure();
    });

    observer.observe(mapRef.current);
    measure(); // Measure initially

    return () => {
      observer.disconnect();
    };
  }, []);

  // Create infinite scroll animation when mapWidth is measured
  useEffect(() => {
    if (mapWidth === 0) return;

    const controls = animate(x, [0, -mapWidth], {
      ease: "linear",
      duration: 35,
      repeat: Infinity,
    });
    animationRef.current = controls;

    // Apply current hover state immediately if created while hovered
    if (isPinHovered) {
      controls.pause();
    }

    return () => controls.stop();
  }, [mapWidth]);

  // Pause or play the animation based on pin hover state
  useEffect(() => {
    if (animationRef.current) {
      if (isPinHovered) {
        animationRef.current.pause();
      } else {
        animationRef.current.play();
      }
    }
  }, [isPinHovered]);

  return (
    <section
      ref={containerRef}
      className="w-full pt-24 pb-48 sm:pb-60 md:pb-80 flex flex-col items-center justify-center bg-[#F4F1E4] overflow-hidden"
    >
      {/* Spinning Globe Wrapper with scroll-driven scale */}
      <motion.div
        style={{ scale }}
        className="relative w-96 h-96 sm:w-[500px] sm:h-[500px] md:w-[600px] md:h-[600px] rounded-full overflow-hidden bg-[#E0DBCE] flex items-center justify-start"
      >
        {/* Repeating sliding map with Framer Motion coordinates */}
        <motion.div className="flex h-[160%] shrink-0" style={{ x }}>
          {/* Map Wrapper 1 */}
          <div className="relative h-full shrink-0">
            <img
              ref={mapRef}
              src="/images/map.svg"
              alt="World Map"
              className="h-full w-auto pointer-events-none select-none opacity-85"
            />
            {LOCATIONS.map((loc) => (
              <Pin
                key={loc.name}
                name={loc.name}
                x={loc.x}
                y={loc.y}
                onHoverChange={setIsPinHovered}
              />
            ))}
          </div>

          {/* Map Wrapper 2 */}
          <div className="relative h-full shrink-0">
            <img
              src="/images/map.svg"
              alt="World Map"
              className="h-full w-auto pointer-events-none select-none opacity-85"
            />
            {LOCATIONS.map((loc) => (
              <Pin
                key={`${loc.name}-dup`}
                name={loc.name}
                x={loc.x}
                y={loc.y}
                onHoverChange={setIsPinHovered}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};
