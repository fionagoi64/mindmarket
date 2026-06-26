import { FeatureList } from "@/components/shared/FeatureList";
import { HoverSection } from "@/components/shared/HoverSection";
import { FEATURES } from "@/constants/feature";

export const ReadySection = () => {
  return (
    <div className="bg-[#8DD462]">
      <HoverSection />
      <FeatureList data={FEATURES} />
    </div>
  );
};
