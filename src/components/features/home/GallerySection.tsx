import { BrandMarquees } from "@/components/features/home/BrandMarquees";
import { MarqueeBlock } from "@/components/shared/MarqueeBlock";

export const GallerySection = () => {
  return (
    <div>
      <MarqueeBlock title="Brands that choose MindMarket">
        <BrandMarquees />
      </MarqueeBlock>
    </div>
  );
};
