import { AudienceParallaxSection } from "@/components/features/home/AudienceParallaxSection";
import { CardSection } from "@/components/features/home/CardSection";
import { GallerySection } from "@/components/features/home/GallerySection";
import { ReadySection } from "@/components/features/home/ReadySection";
import { ScrollPathSection } from "@/components/features/home/ScrollPathSection";

export const HomeContent = () => {
  return (
    <>
      <ScrollPathSection />
      <ReadySection />
      <AudienceParallaxSection />
      <CardSection />
      <GallerySection />
    </>
  );
};
