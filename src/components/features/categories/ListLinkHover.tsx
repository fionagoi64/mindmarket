import { ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

type TListLinkHoverProps = {
  index: number;
  name: string;
  to: string;
};

export const ListLinkHover = ({
  index,
  name,
  to,
}: TListLinkHoverProps) => {
  const formattedIndex = String(index).padStart(
    2,
    "0",
  );

  return (
    <Link
      to={to}
      className="group flex items-center justify-between py-6 md:py-8 border-t border-black/10 hover:border-black/20 transition-all duration-300 hover:pl-4"
    >
      <div className="flex items-baseline gap-4 md:gap-8">
        <span className="font-mono text-xs md:text-sm font-semibold tracking-wider text-black/40 group-hover:text-[#aa3bff] transition-colors duration-300">
          {formattedIndex}
        </span>
        <span className="text-xl md:text-3xl lg:text-[34px] font-medium tracking-tight text-black group-hover:text-[#aa3bff] transition-colors duration-300">
          {name}
        </span>
      </div>
      <div className="flex h-10 w-10 md:h-12 md:w-12 items-center justify-center rounded-full border border-black/10 bg-transparent group-hover:bg-[#aa3bff] group-hover:border-[#aa3bff] text-black group-hover:text-white transition-all duration-300 shrink-0">
        <ChevronRight className="h-4 w-4 md:h-5 md:w-5 transform transition-transform duration-300 group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
};
