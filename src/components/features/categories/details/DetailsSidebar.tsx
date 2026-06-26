import { RiveAnimation } from "@/components/shared/RiveAnimation";
import { menuItem } from "@/constants/menuItem";
import { ROUTE } from "@/constants/route";
import { ChevronLeft } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useState } from "react";
import { Link } from "react-router-dom";

type TDetailsSidebarProps = {
  type: "methodology" | "sectors";
  details: {
    slug: string;
    title: string;
  };
  scrollYProgress: MotionValue<number>;
};

export const DetailsSidebar = ({
  type,
  details,
  scrollYProgress,
}: TDetailsSidebarProps) => {
  const [isComplete, setIsComplete] =
    useState(false);

  const currentMenu = menuItem.find(
    (item) =>
      item.path ===
      (type === "sectors"
        ? ROUTE.SECTOR
        : ROUTE.METHODOLOGY),
  );

  // Map the scroll progress:
  // - 0 (start): 0vh (directly under the link)
  // - 0.15 to 0.85 (scroll/middle): 55vh (space between, stays at the bottom of viewport)
  // - 1 (end): 0vh (meets the title at the end of content)
  const y = useTransform(
    scrollYProgress,
    [0, 0.15, 0.85, 1],
    ["0vh", "55vh", "55vh", "0vh"],
  );

  useMotionValueEvent(
    scrollYProgress,
    "change",
    (latest) => {
      setIsComplete(latest >= 0.99);
    },
  );

  return (
    <aside className="w-full md:w-1/4 sticky top-24 self-start flex flex-col gap-4">
      <Link
        to={
          type === "sectors"
            ? "/sectors"
            : "/methodology"
        }
        className="flex items-center gap-1.5 font-semibold text-[#aa3bff] hover:text-[#aa3bff]/80 transition-colors duration-300 w-fit"
      >
        <ChevronLeft className="w-5 h-5" />
        <span>
          {type === "sectors"
            ? "See all sectors"
            : "See all methods"}
        </span>
      </Link>
      <h3 className="text-xl font-bold tracking-tight text-black/50 uppercase font-mono mt-4">
        {type === "sectors" ? "Sector" : "Method"}
      </h3>
      <p className="text-2xl md:text-3xl font-bold leading-tight">
        {currentMenu?.children?.find(
          (c) => c.slug === details.slug,
        )?.name || details.title}
      </p>

      {/* Progress Widget nested in the sidebar with dynamic scroll translation */}
      <motion.div
        style={{ y }}
        className="w-12 h-12 mt-6 flex items-center justify-center"
      >
        <AnimatePresence mode="wait">
          {!isComplete ? (
            <motion.div
              key="progress-circle"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.8 }}
              className="relative w-full h-full"
            >
              <svg
                className="w-full h-full"
                viewBox="0 0 48 48"
              >
                <path
                  d="M24 4 a20 20 0 1 1 0 40 a20 20 0 1 1 0 -40"
                  fill="none"
                  className="stroke-black/10"
                  strokeWidth="3.5"
                />
                <motion.path
                  d="M24 4 a20 20 0 1 1 0 40 a20 20 0 1 1 0 -40"
                  fill="none"
                  className="stroke-[#aa3bff]"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                  style={{
                    pathLength: scrollYProgress,
                  }}
                />
              </svg>
            </motion.div>
          ) : (
            <motion.div
              key="avatar"
              initial={{ opacity: 0, scale: 0.3 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.3 }}
              className="flex items-center justify-center"
            >
              <RiveAnimation
                src="success"
                height={60}
                width={60}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </aside>
  );
};
