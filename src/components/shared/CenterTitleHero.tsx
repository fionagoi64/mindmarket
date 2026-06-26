import type { THeroContent } from "@/type/hero";
import { formatNewline } from "@/utils/text";

export const CenterTitleHero = ({ title, desc }: THeroContent) => {
  return (
    <div className="w-full px-12 text-center flex flex-col gap-y-10 items-center justify-center">
      <h1 className="text-[180px] mt-6.5 tracking-[-0.06em] font-medium leading-[0.95] whitespace-pre-line">
        {formatNewline(title)}
      </h1>
      <p className="text-lg font-bold max-w-100">{desc}</p>
    </div>
  );
};
