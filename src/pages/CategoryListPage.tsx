import { CategoriesContent } from "@/components/features/categories/CategoriesContent";
import { LeftTitleHero } from "@/components/shared/LeftTitleHero";
import { menuItem } from "@/constants/menuItem";
import { StackingLayout } from "@/layouts/StackingLayout";
import { useParams } from "react-router-dom";

export const CategoryListPage = () => {
  const { type } = useParams();

  const currentMenu = menuItem.find((item) => item.path === `/${type}`);

  const isSector = type === "sectors";

  const title =
    currentMenu?.name || (isSector ? "Industry Sectors" : "Methodology");
  const desc = isSector ? "Speak their language" : "One brief. One team.";
  const items = currentMenu?.children || [];

  return (
    <StackingLayout
      backgroundColor={isSector ? "#2093FF" : "#F8D312"}
      heroSection={<LeftTitleHero title={title} desc={desc} />}
      contentSection={
        <CategoriesContent
          type={isSector ? "sectors" : "methodology"}
          items={items}
        />
      }
    />
  );
};
