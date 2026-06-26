import type { TImageTitleHero } from "@/type/hero";

export const ImageTitleHero = ({
  src,
  alt,
  title,
}: TImageTitleHero) => {
  return (
    <div className="flex w-full h-full items-stretch justify-between gap-12 lg:gap-24 pb-20 px-6 md:px-12 lg:px-24">
      {/* Left Column: Vertical Image */}
      <div className="w-[28%] min-w-[240px] md:min-w-[280px] self-end flex items-end pt-16 md:pt-24">
        <img
          src={src}
          alt={alt}
          className="w-full aspect-[4/5] md:aspect-[3/4] max-h-[52svh] object-cover rounded-[2.5rem]"
        />
      </div>

      {/* Right Column: Title */}
      <div className="flex-1 max-w-[68%] self-start pt-4 lg:pt-8 text-left">
        <h1 className="text-[clamp(2.2rem,4.5vw,5.2rem)] font-semibold leading-[1.05] tracking-tight text-[#2c2e2a]">
          {title}
        </h1>
      </div>
    </div>
  );
};
