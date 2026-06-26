import { AboutUsContent } from "@/components/features/about-us/AboutUsContent";
import { CenterTitleHero } from "@/components/shared/CenterTitleHero";
import { StackingLayout } from "@/layouts/StackingLayout";

export const AboutUsPage = () => {
  return (
    <StackingLayout
      backgroundColor="#F4F1E4"
      heroSection={
        <CenterTitleHero
          title="We are\nMindMarket"
          desc="MindMarket is a global qualitative research agency that helps brands connect with real people — in every market, and on their terms."
        />
      }
      contentSection={<AboutUsContent />}
    />
  );
};
