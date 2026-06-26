import { cn } from "@/utils/cn";
import { formatNewline } from "@/utils/text";
import type { ReactNode } from "react";

type TMediaTextBlock = {
  title: {
    position: "start" | "center";
    text: ReactNode | string;
  };
  desc: string;
};

export const TextBlock = ({ title, desc }: TMediaTextBlock) => {
  return (
    <div className="flex flex-col lg:flex-row gap-12 mt-24">
      <div
        className={cn(
          "w-full lg:w-1/2 flex flex-col",
          `justify-${title.position}`,
        )}
      >
        {title.text}
      </div>

      <div className="w-full flex items-center">
        <p className="text-lg md:text-xl leading-relaxed text-black/80">
          {formatNewline(desc)}
        </p>
      </div>
    </div>
  );
};
