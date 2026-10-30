import type { THeroContent } from "@/type/hero";
import { formatNewline } from "@/utils/text";

export const CenterTitleHero = ({ title, desc }: THeroContent) => {
  return (
    <div className="w-full h-full px-4 sm:px-6 md:px-[15vw] pb-[48vw] sm:pb-[42vw] md:pb-[17.5vw] text-center flex flex-col gap-y-6 sm:gap-y-9 md:gap-y-12 items-center justify-center">
      <h1 className="heading-2xl md:text-[9.7vw] tracking-[-0.06em] font-medium leading-[0.95] whitespace-pre-line">
        {formatNewline(title)}
      </h1>
      <h2 className="heading-xs max-w-150 text-balance">{desc}</h2>
    </div>
  );
};
