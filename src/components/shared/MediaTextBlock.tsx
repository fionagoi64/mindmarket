type TMediaTextBlock = {
  src: string;
  alt: string;
  desc: string;
};

export const MediaTextBlock = ({ src, alt, desc }: TMediaTextBlock) => {
  return (
    <div className="flex flex-col lg:flex-row gap-12 mt-24">
      <div className="w-1/2">
        <img
          src={src}
          alt={alt}
          className="w-[355px] h-auto rounded-3xl object-cover"
        />
      </div>

      <div className="w-1/2">
        <p className="text-lg md:text-xl leading-relaxed text-black/80">
          {desc}
        </p>
      </div>
    </div>
  );
};
