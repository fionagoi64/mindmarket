import { HomeContent } from "@/components/features/home/HomeContent";
import { CenterTitleHero } from "@/components/shared/CenterTitleHero";
import { StackingLayout } from "@/layouts/StackingLayout";

export const HomePage = () => {
  return (
    <StackingLayout
      hasOverlay
      backgroundColor="#8DD462"
      heroSection={
        <CenterTitleHero
          title="Real human\ninsights"
          desc="One global partner"
        />
      }
      contentSection={<HomeContent />}
    />
  );
};
