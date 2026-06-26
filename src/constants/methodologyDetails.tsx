import type { ComponentType } from "react";
import { OnlineBulletInBoard } from "@/components/features/categories/methodology/OnlineBulletInBoard";
import { FocusGroups } from "@/components/features/categories/methodology/FocusGroups";
import { TasteTesting } from "@/components/features/categories/methodology/TasteTesting";
import { CentralLocationTesting } from "@/components/features/categories/methodology/CentralLocationTesting";
import { CustomerIntercept } from "@/components/features/categories/methodology/CustomerIntercept";
import { MysteryShopping } from "@/components/features/categories/methodology/MysteryShopping";
import { ShopAlong } from "@/components/features/categories/methodology/ShopAlong";
import { UxResearch } from "@/components/features/categories/methodology/UxResearch";
import { IndepthInterviews } from "@/components/features/categories/methodology/IndepthInterviews";
import { EthnographicResearch } from "@/components/features/categories/methodology/EthnographicResearch";

export type TCategoryDetails = {
  slug: string;
  title: string;
  heroDesc: string;
  heroImage: string;
  content: ComponentType;
};

export const methodologyDetails: Record<
  string,
  TCategoryDetails
> = {
  "online-bulletin-board": {
    slug: "online-bulletin-board",
    title:
      "Online Bulletin Boards: Your Gateway to Rich, Authentic Market Research Insights",
    heroDesc:
      "Discover how online bulletin boards are revolutionising qualitative research – giving participants time to think, reflect, and share insights that actually matter. From Tokyo to Toronto, we're making global research brilliantly simple.",
    heroImage: "/images/methodology.avif",
    content: OnlineBulletInBoard,
  },
  "focus-groups": {
    slug: "focus-groups",
    title:
      "Focus Groups: Capturing Real-time Consumer Interaction & Group Dynamics",
    heroDesc:
      "Unlock the power of real-time human connection. Through expert moderating and carefully curated group interactions, we reveal the genuine attitudes and core motivations driving consumer behavior.",
    heroImage: "/images/methodology.avif",
    content: FocusGroups,
  },
  "taste-testing-market-research": {
    slug: "taste-testing-market-research",
    title:
      "Taste Testing: Premium Insights & Strategic Intelligence",
    heroDesc:
      "Explore how we apply specialized qualitative research and bespoke consumer studies to help you gain critical, actionable insights for Taste Testing.",
    heroImage: "/images/methodology.avif",
    content: TasteTesting,
  },
  "central-location-testing": {
    slug: "central-location-testing",
    title:
      "Central Location Testing: Premium Insights & Strategic Intelligence",
    heroDesc:
      "Explore how we apply specialized qualitative research and bespoke consumer studies to help you gain critical, actionable insights for Central Location Testing.",
    heroImage: "/images/methodology.avif",
    content: CentralLocationTesting,
  },
  "customer-intercept-research": {
    slug: "customer-intercept-research",
    title:
      "Customer Intercept Research: Premium Insights & Strategic Intelligence",
    heroDesc:
      "Explore how we apply specialized qualitative research and bespoke consumer studies to help you gain critical, actionable insights for Customer Intercept Research.",
    heroImage: "/images/methodology.avif",
    content: CustomerIntercept,
  },
  "mystery-shopping": {
    slug: "mystery-shopping",
    title:
      "Mystery Shopping: Premium Insights & Strategic Intelligence",
    heroDesc:
      "Explore how we apply specialized qualitative research and bespoke consumer studies to help you gain critical, actionable insights for Mystery Shopping.",
    heroImage: "/images/methodology.avif",
    content: MysteryShopping,
  },
  "shop-along-market-research": {
    slug: "shop-along-market-research",
    title:
      "Shop-Along Research: Premium Insights & Strategic Intelligence",
    heroDesc:
      "Explore how we apply specialized qualitative research and bespoke consumer studies to help you gain critical, actionable insights for Shop-Along Research.",
    heroImage: "/images/methodology.avif",
    content: ShopAlong,
  },
  "ux-research": {
    slug: "ux-research",
    title:
      "UX Research: Premium Insights & Strategic Intelligence",
    heroDesc:
      "Explore how we apply specialized qualitative research and bespoke consumer studies to help you gain critical, actionable insights for UX Research.",
    heroImage: "/images/methodology.avif",
    content: UxResearch,
  },
  "in-depth-interviews": {
    slug: "in-depth-interviews",
    title:
      "In-Depth Interviews: Premium Insights & Strategic Intelligence",
    heroDesc:
      "Explore how we apply specialized qualitative research and bespoke consumer studies to help you gain critical, actionable insights for In-Depth Interviews.",
    heroImage: "/images/methodology.avif",
    content: IndepthInterviews,
  },
  "ethnographic-research": {
    slug: "ethnographic-research",
    title:
      "Ethnographic Research: Premium Insights & Strategic Intelligence",
    heroDesc:
      "Explore how we apply specialized qualitative research and bespoke consumer studies to help you gain critical, actionable insights for Ethnographic Research.",
    heroImage: "/images/methodology.avif",
    content: EthnographicResearch,
  },
};
