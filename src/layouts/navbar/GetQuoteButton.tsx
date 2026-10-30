import { Avatar } from "@/layouts/navbar/Avatar";
import { motion } from "motion/react";
import { useState } from "react";

export const GetQuoteButton = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      type="button"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative flex items-center rounded-base h-full px-4 cursor-pointer gap-2.5 overflow-hidden"
    >
      {/* 1. Base Layer (Background of the button) */}
      <div className="absolute inset-0 bg-white -z-20" />

      {/* 2. The Animated "Expanding Square" Layer */}
      <motion.div
        className="absolute inset-0 bg-yellow -z-10 rounded-t-base"
        initial={{ scale: 0, opacity: 0 }}
        animate={
          isHovered ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
        }
        style={{
          originY: 1, // Anchors to bottom
          originX: 0.5, // Anchors to center horizontally
        }}
        transition={{
          type: "spring",
          stiffness: 250,
          damping: 25,
        }}
      />

      {/* 3. Content */}
      <span className="relative font-semibold text-gray-700">Get a quote</span>
      <Avatar isHovered={isHovered} />
    </button>
  );
};
