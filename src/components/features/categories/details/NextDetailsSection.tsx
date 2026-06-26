import { motion } from "motion/react";
import { Link } from "react-router-dom";

type TNextDetailsSection = {
  title: string;
  to: string;
  src: string;
  category: "method" | "sector";
};

export const NextDetailsSection = ({
  title,
  to,
  src,
  category,
}: TNextDetailsSection) => {
  return (
    <Link to={to} className="flex">
      <div className="flex items-center gap-6 max-w-lg md:max-w-2xl">
        {/* Fixed size container with hidden overflow for the parallax image */}
        <div className="w-24 h-24 md:w-32 md:h-32 overflow-hidden rounded-2xl border border-black/10 relative">
          <motion.img
            src={src}
            alt={title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-140"
          />
        </div>
        <div className="text-left">
          <span className="font-mono text-xs md:text-sm font-bold tracking-[0.2em] text-black/50 uppercase block mb-1">
            Next {category}
          </span>
          <h4 className="text-xl md:text-3xl font-bold tracking-tight line-clamp-2 group-hover:text-[#aa3bff] transition-colors duration-300">
            {title}
          </h4>
        </div>
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-black/10 bg-transparent group-hover:bg-[#aa3bff] group-hover:border-[#aa3bff] text-black group-hover:text-white transition-all duration-300 shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 48 48"
          strokeWidth={2}
          stroke="currentColor"
          className="w-5 h-5 transform transition-transform duration-300 group-hover:translate-x-0.5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </div>
    </Link>
  );
};
