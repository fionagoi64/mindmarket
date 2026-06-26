import { motion } from "motion/react";
import type { SVGProps } from "react";

interface TAnimatedDivider extends SVGProps<SVGSVGElement> {
  strokeWidth?: number | string;
}

export const AnimatedDivider = ({
  className,
  ...props
}: TAnimatedDivider) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1041 91"
      fill="none"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      <motion.path
        d="M8.25 14.4153C341.5 114.337 578 83.7584 653.25 53.837C730.975 22.9316 681.5 -12.7416 603.5 22.8369C526.809 57.8185 548.5 143.837 1032.75 14.4153"
        stroke="#8ED462"
        strokeWidth={15}
        strokeLinecap="round"
        vectorEffect="non-scaling-stroke"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{
          duration: 0.5,
          ease: "easeInOut",
        }}
      />
    </svg>
  );
};
