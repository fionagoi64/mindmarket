import { ServicesContent } from "@/components/features/services/ServicesContent";
import { LeftTitleHero } from "@/components/shared/LeftTitleHero";
import { StackingLayout } from "@/layouts/StackingLayout";

export const ServicesPage = () => {
  return (
    <StackingLayout
      backgroundColor="#FF5C46"
      heroSection={<LeftTitleHero title="Services" desc="No more\nchaos." />}
      contentSection={<ServicesContent />}
    />
  );
};
