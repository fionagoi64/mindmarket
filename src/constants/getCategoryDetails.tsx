import {
  methodologyDetails,
  type TCategoryDetails,
} from "./methodologyDetails";
import { sectorDetails } from "./sectorDetails";

export type { TCategoryDetails };

export const getCategoryDetails = (
  type: string,
  slug: string,
  name?: string,
): TCategoryDetails => {
  const isSector = type === "sectors";
  const details = isSector
    ? sectorDetails[slug]
    : methodologyDetails[slug];

  if (details) {
    return details;
  }

  // Fallback in case a slug is missing
  const formattedName =
    name ||
    slug
      .replace(/-/g, " ")
      .replace(/\b\w/g, (c) => c.toUpperCase());
  return {
    slug,
    title: `${formattedName}: Premium Insights & Strategic Intelligence`,
    heroDesc: `Explore how we apply specialized qualitative research and bespoke consumer studies to help you gain critical, actionable insights for ${formattedName}.`,
    heroImage: isSector
      ? "/images/industry-sectors.avif"
      : "/images/methodology.avif",
    content: () => (
      <div>{formattedName} Details Content</div>
    ),
  };
};
