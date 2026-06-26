import { DetailsContent } from "@/components/features/categories/details/DetailsContent";
import { ImageTitleHero } from "@/components/features/categories/details/ImageTitleHero";
import { getCategoryDetails } from "@/constants/getCategoryDetails";
import { menuItem } from "@/constants/menuItem";
import { StackingLayout } from "@/layouts/StackingLayout";
import {
  Navigate,
  useParams,
} from "react-router-dom";

export const CategoryDetailPage = () => {
  const { type, slug } = useParams();

  const currentMenu = menuItem.find(
    (item) => item.path === `/${type}`,
  );

  const currentChild =
    currentMenu?.children?.find(
      (child) => child.slug === slug,
    );

  if (
    !currentMenu ||
    !currentChild ||
    !slug ||
    !type
  ) {
    return <Navigate to="/" replace />;
  }

  const details = getCategoryDetails(
    type,
    slug,
    currentChild.name,
  );

  return (
    <StackingLayout
      backgroundColor="#E0DBCE"
      heroSection={
        <ImageTitleHero
          src={details.heroImage}
          alt={currentChild.name}
          title={details.title}
        />
      }
      contentSection={
        <DetailsContent
          type={
            type === "sectors"
              ? "sectors"
              : "methodology"
          }
          details={details}
        />
      }
    />
  );
};
