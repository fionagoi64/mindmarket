import { ChevronRight } from "lucide-react";
import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { useMediaQuery } from "@/hooks/useMediaQuery";

type TArticleButtonProps = {
  title: string;
  src: string;
  alt: string;
};

type TService = {
  title: string;
  desc: string;
  src: string;
  button?: TArticleButtonProps;
};

type TServiceListProps = {
  data: TService[];
};

const ArticleButton = ({ title, src, alt }: TArticleButtonProps) => {
  return (
    <button
      type="button"
      className="flex items-stretch bg-white rounded-3xl p-4 gap-4 text-left max-w-[420px] shadow-sm hover:shadow-md hover:scale-[1.01] active:scale-[0.99] transition-all duration-300 border border-black/5 group cursor-pointer mt-12 self-start"
    >
      <div className="flex flex-col justify-between flex-1 pr-2 py-1">
        <p className="text-sm md:text-base font-semibold text-[#08060d] line-clamp-3 leading-snug tracking-tight group-hover:text-black">
          {title}
        </p>
        <span className="text-sm font-bold text-[#2c2e2a]/60 mt-4 flex items-center gap-1 group-hover:text-black transition-colors select-none">
          Read
          <ChevronRight className="w-4 h-4 stroke-[2.5]" />
        </span>
      </div>

      <img
        src={src}
        alt={alt}
        className="w-24 h-24 md:w-28 md:h-28 object-cover rounded-2xl shrink-0 select-none pointer-events-none"
      />
    </button>
  );
};

const ImageRevealItem = ({
  item,
  index,
}: {
  item: TService;
  index: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Track the scroll progress of this specific row container relative to the viewport
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Calculate starting rotation: odd items (1-based index 1, 3, etc. -> index 0, 2) rotate from left (-6)
  // Even items (1-based index 2, 4, etc. -> index 1, 3) rotate from right (+6)
  const isEven = (index + 1) % 2 === 0;
  const startRotate = isEven ? 12 : -12;

  const isDesktop = useMediaQuery("(min-width: 994px)");

  // Map the scroll progress to rotate and y (going up) only, without scale and opacity
  const scrollRotate = useTransform(
    scrollYProgress,
    [0, 0.45],
    [startRotate, 0],
  );
  const scrollY = useTransform(scrollYProgress, [0, 0.45], [450, 0]); // Slide up as it scrolls into view

  const rotate = isDesktop ? scrollRotate : 0;
  const y = isDesktop ? scrollY : 0;

  return (
    <div
      ref={containerRef}
      className="border-b border-black/10 last:border-b-0 w-full min-h-[705px] py-[clamp(5rem,3.9565rem+5.2174vw,8rem)] flex items-center"
    >
      <div className="flex flex-col sm:flex-row w-full max-w-[90vw] mx-auto px-6 md:px-12 lg:px-24 gap-12 items-stretch">
        {/* Left Column - Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-between py-2 min-h-[350px]">
          <h3 className="text-4xl md:text-5xl lg:text-[54px] font-bold text-[#08060d] tracking-tight leading-tight">
            {item.title}
          </h3>
          <p className="text-lg md:text-xl text-[#2c2e2a]/80 leading-relaxed max-w-lg mt-6">
            {item.desc}
          </p>

          {item.button && <ArticleButton {...item.button} />}
        </div>

        {/* Right Column - Animated Image container */}
        <div className="w-full lg:w-1/2 flex items-center justify-center overflow-visible">
          <motion.div
            style={{ rotate, y }}
            className="w-full aspect-[4/3] rounded-[32px] overflow-hidden shadow-lg origin-center bg-gray-100"
          >
            <img
              src={item.src}
              alt={item.title}
              className="w-full h-full object-cover select-none pointer-events-none"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export const ImageRevealList = ({ data }: TServiceListProps) => {
  return data.map((item, idx) => (
    <ImageRevealItem key={item.title} item={item} index={idx} />
  ));
};
