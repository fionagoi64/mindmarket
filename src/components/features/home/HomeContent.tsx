import { CardSection } from "@/components/features/home/CardSection";
import { GallerySection } from "@/components/features/home/GallerySection";
import { ReadySection } from "@/components/features/home/ReadySection";
import { ScrollPathSection } from "@/components/features/home/ScrollPathSection";
import { ParallaxScrollImage } from "@/components/shared/ParallaxScrollImage";
export const HomeContent = () => {
  return (
    <>
      <ScrollPathSection />
      <ReadySection />
      <ParallaxScrollImage
        src="/images/about-us.avif"
        alt="About MindMarket"
        height="65vh"
      />
      <CardSection />
      <GallerySection />
    </>
  );
};
