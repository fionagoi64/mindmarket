import type { THeroContent } from "@/type/hero";
import { formatNewline } from "@/utils/text";

export const LeftTitleHero = ({
  title,
  desc,
}: THeroContent) => {
  return (
    <div className="w-full pl-30 flex flex-col">
      <h1 className="text-[30px] font-bold">
        {title}
      </h1>
      <p className="text-[180px] mt-6.5 tracking-[-0.06em] font-medium leading-[0.95] whitespace-pre-line">
        {formatNewline(desc)}
      </p>
    </div>
  );
};
