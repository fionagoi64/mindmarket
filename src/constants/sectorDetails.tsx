import type { ComponentType } from "react";
import { Automotive } from "@/components/features/categories/industry-sector/Automotive";
import { BeautyNCosmetics } from "@/components/features/categories/industry-sector/BeautyNCosmetics";
import { Consulting } from "@/components/features/categories/industry-sector/Consulting";
import { Crypto } from "@/components/features/categories/industry-sector/Crypto";
import { FMCG } from "@/components/features/categories/industry-sector/FMCG";
import { FinancialServices } from "@/components/features/categories/industry-sector/FinancialServices";
import { FoodNBeverage } from "@/components/features/categories/industry-sector/FoodNBeverage";
import { Gaming } from "@/components/features/categories/industry-sector/Gaming";
import { Hospitality } from "@/components/features/categories/industry-sector/Hospitality";
import { Pharmaceutical } from "@/components/features/categories/industry-sector/Pharmaceutical";
import { Sports } from "@/components/features/categories/industry-sector/Sports";
import { Technology } from "@/components/features/categories/industry-sector/Technology";

export type TCategoryDetails = {
  slug: string;
  title: string;
  heroDesc: string;
  heroImage: string;
  content: ComponentType;
};

export const sectorDetails: Record<
  string,
  TCategoryDetails
> = {
  "automotive-market-research": {
    slug: "automotive-market-research",
    title:
      "Automotive Market Research: Navigating the Future of Mobility",
    heroDesc:
      "Drive your automotive strategies forward. From EV adoption barriers to dealership experiences and connected-car tech, we connect you with drivers, fleet managers, and buyers worldwide.",
    heroImage: "/images/industry-sectors.avif",
    content: Automotive,
  },
  "technology-market-research": {
    slug: "technology-market-research",
    title:
      "Technology Market Research: Unlocking Insights in SaaS, AI, and Tech Hardware",
    heroDesc:
      "Stay ahead in a fast-moving market. From SaaS usability testing to developer surveys and enterprise software decisions, we connect you with the tech decision makers driving innovation.",
    heroImage: "/images/industry-sectors.avif",
    content: Technology,
  },
  "sports-market-research": {
    slug: "sports-market-research",
    title:
      "Sports Market Research: Premium Insights & Strategic Intelligence",
    heroDesc:
      "Explore how we apply specialized qualitative research and bespoke consumer studies to help you gain critical, actionable insights for Sports Market Research.",
    heroImage: "/images/industry-sectors.avif",
    content: Sports,
  },
  "gaming-market-research": {
    slug: "gaming-market-research",
    title:
      "Gaming Market Research: Premium Insights & Strategic Intelligence",
    heroDesc:
      "Explore how we apply specialized qualitative research and bespoke consumer studies to help you gain critical, actionable insights for Gaming Market Research.",
    heroImage: "/images/industry-sectors.avif",
    content: Gaming,
  },
  "fmcg-market-research": {
    slug: "fmcg-market-research",
    title:
      "FMCG Market Research: Premium Insights & Strategic Intelligence",
    heroDesc:
      "Explore how we apply specialized qualitative research and bespoke consumer studies to help you gain critical, actionable insights for FMCG Market Research.",
    heroImage: "/images/industry-sectors.avif",
    content: FMCG,
  },
  "food-beverage-market-research": {
    slug: "food-beverage-market-research",
    title:
      "Food & Beverage Market Research: Premium Insights & Strategic Intelligence",
    heroDesc:
      "Explore how we apply specialized qualitative research and bespoke consumer studies to help you gain critical, actionable insights for Food & Beverage Market Research.",
    heroImage: "/images/industry-sectors.avif",
    content: FoodNBeverage,
  },
  "financial-market-research": {
    slug: "financial-market-research",
    title:
      "Financial Services Market Research: Premium Insights & Strategic Intelligence",
    heroDesc:
      "Explore how we apply specialized qualitative research and bespoke consumer studies to help you gain critical, actionable insights for Financial Services Market Research.",
    heroImage: "/images/industry-sectors.avif",
    content: FinancialServices,
  },
  "beauty-cosmetics": {
    slug: "beauty-cosmetics",
    title:
      "Beauty & Cosmetics Market Research: Premium Insights & Strategic Intelligence",
    heroDesc:
      "Explore how we apply specialized qualitative research and bespoke consumer studies to help you gain critical, actionable insights for Beauty & Cosmetics Market Research.",
    heroImage: "/images/industry-sectors.avif",
    content: BeautyNCosmetics,
  },
  "crypto-market-research": {
    slug: "crypto-market-research",
    title:
      "Crypto & Web3 Market Research: Premium Insights & Strategic Intelligence",
    heroDesc:
      "Explore how we apply specialized qualitative research and bespoke consumer studies to help you gain critical, actionable insights for Crypto & Web3 Market Research.",
    heroImage: "/images/industry-sectors.avif",
    content: Crypto,
  },
  "hospitality-market-research": {
    slug: "hospitality-market-research",
    title:
      "Hospitality Market Research: Premium Insights & Strategic Intelligence",
    heroDesc:
      "Explore how we apply specialized qualitative research and bespoke consumer studies to help you gain critical, actionable insights for Hospitality Market Research.",
    heroImage: "/images/industry-sectors.avif",
    content: Hospitality,
  },
  "consulting-firms": {
    slug: "consulting-firms",
    title:
      "Research for Consulting Firms: Premium Insights & Strategic Intelligence",
    heroDesc:
      "Explore how we apply specialized qualitative research and bespoke consumer studies to help you gain critical, actionable insights for Research for Consulting Firms.",
    heroImage: "/images/industry-sectors.avif",
    content: Consulting,
  },
  "pharmaceutical-medical-device-market-research":
    {
      slug: "pharmaceutical-medical-device-market-research",
      title:
        "Pharmaceutical & Medical Device Market Research: Premium Insights & Strategic Intelligence",
      heroDesc:
        "Explore how we apply specialized qualitative research and bespoke consumer studies to help you gain critical, actionable insights for Pharmaceutical & Medical Device Market Research.",
      heroImage: "/images/industry-sectors.avif",
      content: Pharmaceutical,
    },
};
