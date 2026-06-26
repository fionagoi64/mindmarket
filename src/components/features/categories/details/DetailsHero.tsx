import type { THeroContent } from "@/type/hero";

export const DetailsHeroDesc = ({
  desc,
}: Pick<THeroContent, "desc">) => {
  return (
    <section className="h-[calc(100vh-4.2rem)] w-full relative z-2">
      <p className="absolute bottom-0 right-0 max-w-125 mb-10 text-lg leading-relaxed font-medium whitespace-pre-line">
        {desc}
      </p>
    </section>
  );
};
