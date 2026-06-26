import {
  AnimatedButton,
  type TAnimatedButton,
} from "@/components/shared/AnimatedButton";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

type TAnimatedCard = {
  title: string;
  desc: string;
  to: TAnimatedButton["to"];
  button?: TAnimatedButton["button"];
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
} as const;

const layerVariants = {
  hidden: { scale: 0.8, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: [0.175, 0.885, 0.32, 1.1],
    },
  },
} as const;

export const AnimatedCard = ({
  title,
  desc,
  to,
  button,
}: TAnimatedCard) => {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Maps scroll progress through viewport to y translation.
  // By using [80, -80], when scrolling down (progress 0 -> 1), y changes from positive (down) to negative (up).
  // This causes the card to move UP faster than the page scroll.
  // When scrolling up (progress 1 -> 0), y changes from negative to positive, causing the card to move DOWN.
  const y = useTransform(scrollYProgress, [0, 1], [80, -80]);

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      className="relative w-full max-w-137 aspect-4/3 flex items-center justify-center"
    >
      <motion.div
        variants={layerVariants}
        className="absolute inset-0 bg-coral shadow-lg"
      />

      <motion.div
        variants={layerVariants}
        className="absolute inset-0 bg-white p-10 shadow-xl flex flex-col justify-center space-y-4"
      >
        <h2 className="text-4xl font-bold text-gray-900">
          {title}
        </h2>
        <p className="text-gray-600 text-xl">
          {desc}
        </p>
        <div className="pt-2">
          <AnimatedButton
            to={to}
            button={button}
          />
        </div>
      </motion.div>
    </motion.div>
  );
};
