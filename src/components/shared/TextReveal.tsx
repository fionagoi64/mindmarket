import {
  motion,
  useScroll,
  useTransform,
  type MotionValue,
} from "motion/react";
import { useRef } from "react";

interface WordProps {
  word: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const Word = ({ word, progress, range }: WordProps) => {
  const opacity = useTransform(progress, range, [0.08, 1]);
  return (
    <motion.span style={{ opacity }} className="relative mr-2">
      {word}
    </motion.span>
  );
};

export const TextReveal = ({
  paragraph,
  className = "",
  offset = ["start 88%", "start 48%"] as const,
}: {
  paragraph: string;
  className?: string;
  offset?: Parameters<typeof useScroll>[0]["offset"];
}) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset,
  });

  const words = paragraph.split(" ");

  return (
    <p
      ref={containerRef}
      className={`flex flex-wrap mx-auto px-6 lg:px-20 text-[clamp(1.5rem,3vw,3rem)] font-medium leading-[1.3] text-charcoal ${className}`}
    >
      {words.map((word, idx) => {
        const start = idx / words.length;
        const end = (idx + 1) / words.length;
        return (
          <Word
            key={idx}
            word={word}
            progress={scrollYProgress}
            range={[start, end]}
          />
        );
      })}
    </p>
  );
};
