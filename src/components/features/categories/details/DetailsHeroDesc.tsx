import type { THeroContent } from "@/type/hero";
import { formatNewline } from "@/utils/text";

export const DetailsHero = ({
  desc,
}: Pick<THeroContent, "desc">) => {
  return (
    <section className="h-[calc(100vh-4.2rem)] w-full relative z-2">
      <div className="absolute flex bottom-0 mb-10 w-full">
        <div className="w-2/3" />
        <p className="flex-1 max-w-83.75 mb-[clamp(1rem,.8261rem +.8696vw,1.5rem)] text-lg leading-relaxed font-medium whitespace-pre-line">
          {formatNewline(desc)}
        </p>
      </div>
    </section>
  );
};
