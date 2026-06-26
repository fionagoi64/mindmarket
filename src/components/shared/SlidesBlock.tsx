import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef } from "react";

type TSlideItem = {
  title: string;
  desc: string;
};

type TSlides = {
  title: string;
  slides?: TSlideItem[];
};

export const Slides = ({ title, slides = [] }: TSlides) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const isDownRef = useRef(false);
  const startXRef = useRef(0);
  const scrollLeftRef = useRef(0);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      // Ensure smooth behavior is on for button navigation
      scrollRef.current.style.scrollBehavior = "smooth";
      // Card width (420px) + Gap (24px)
      const scrollAmount = 444;
      const newScrollLeft =
        direction === "left"
          ? scrollRef.current.scrollLeft - scrollAmount
          : scrollRef.current.scrollLeft + scrollAmount;

      scrollRef.current.scrollTo({
        left: newScrollLeft,
      });
    }
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    isDownRef.current = true;
    if (scrollRef.current) {
      scrollRef.current.style.scrollBehavior = "auto"; // Disable smooth scroll for instant drag feedback
      startXRef.current = e.pageX - scrollRef.current.offsetLeft;
      scrollLeftRef.current = scrollRef.current.scrollLeft;
    }
  };

  const handleMouseLeave = () => {
    if (isDownRef.current && scrollRef.current) {
      scrollRef.current.style.scrollBehavior = "smooth";
    }
    isDownRef.current = false;
  };

  const handleMouseUp = () => {
    if (isDownRef.current && scrollRef.current) {
      scrollRef.current.style.scrollBehavior = "smooth";
    }
    isDownRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDownRef.current || !scrollRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollRef.current.offsetLeft;
    const walk = (x - startXRef.current) * 1.5; // Scroll speed multiplier
    scrollRef.current.scrollLeft = scrollLeftRef.current - walk;
  };

  return (
    <div className="w-full py-16 px-6 md:px-12 lg:px-24">
      {/* Header Row */}
      <div className="flex justify-between items-center mb-10">
        <h3 className="text-3xl md:text-4xl lg:text-[42px] font-bold text-[#2c2e2a] tracking-tight leading-tight select-none">
          {title}
        </h3>

        {/* Navigation Buttons */}
        <div className="flex gap-3 shrink-0">
          <button
            onClick={() => scroll("left")}
            aria-label="Previous Slide"
            className="w-12 h-12 rounded-full bg-[#FFE600] flex items-center justify-center text-[#2c2e2a] transition-all duration-300 shadow-sm cursor-pointer select-none"
          >
            <ChevronLeft className="w-6 h-6 stroke-[2.5]" />
          </button>
          <button
            onClick={() => scroll("right")}
            aria-label="Next Slide"
            className="w-12 h-12 rounded-full bg-[#FFE600] flex items-center justify-center text-[#2c2e2a]  transition-all duration-300 shadow-sm cursor-pointer select-none"
          >
            <ChevronRight className="w-6 h-6 stroke-[2.5]" />
          </button>
        </div>
      </div>

      {/* Cards Track */}
      <div
        ref={scrollRef}
        onMouseDown={handleMouseDown}
        onMouseLeave={handleMouseLeave}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
        className="flex gap-6 overflow-hidden scrollbar-none scroll-smooth pb-4 -mx-6 px-6 md:-mx-12 md:px-12 lg:-mx-24 lg:px-24 cursor-grab active:cursor-grabbing select-none"
        style={{
          msOverflowStyle: "none",
          scrollbarWidth: "none",
        }}
      >
        {/* Style block to hide scrollbars */}
        <style
          dangerouslySetInnerHTML={{
            __html: `
          div::-webkit-scrollbar {
            display: none !important;
          }
        `,
          }}
        />

        {slides.map((slide, idx) => (
          <div
            key={idx}
            className="w-[85vw] sm:w-[380px] md:w-[420px] h-[360px] md:h-[400px] flex-shrink-0 bg-white rounded-[32px] p-8 md:p-10 flex flex-col justify-between text-left border border-black/5 shadow-sm transition-all duration-300"
          >
            <h4 className="text-2xl md:text-3xl font-semibold text-[#08060d] leading-tight tracking-tight">
              {slide.title}
            </h4>
            <p className="text-base md:text-lg text-[#2c2e2a]/75 leading-relaxed font-normal">
              {slide.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
