import { CategoriesContent } from "@/components/features/categories/CategoriesContent";
import { LeftTitleHero } from "@/components/shared/LeftTitleHero";
import { menuItem } from "@/constants/menuItem";
import { ROUTE } from "@/constants/route";
import { StackingLayout } from "@/layouts/StackingLayout";

export const IndustrySectorsPage = () => {
  const currentMenu = menuItem.find((item) => item.path === ROUTE.SECTOR);

  const items = currentMenu?.children || [];

  return (
    <StackingLayout
      backgroundColor="#2093FF"
      heroSection={
        <LeftTitleHero title="Industry Sectors" desc="Speak their language" />
      }
      contentSection={<CategoriesContent type="sectors" items={items} />}
    />
  );
};
