import { ROUTE } from "@/constants/route";

const methodology = [
  {
    name: "Online Bulletin Boards",
    slug: "online-bulletin-board",
  },
  {
    name: "Focus Groups, Dyads & Triads",
    slug: "focus-groups",
  },
  {
    name: "Taste Testing",
    slug: "taste-testing-market-research",
  },
  {
    name: "Central Location Testing",
    slug: "central-location-testing",
  },
  {
    name: "Customer Intercept Research",
    slug: "customer-intercept-research",
  },
  {
    name: "Mystery Shopping",
    slug: "mystery-shopping",
  },
  {
    name: "Shop-Along Research",
    slug: "shop-along-market-research",
  },
  { name: "UX Research", slug: "ux-research" },
  {
    name: "In-Depth Interviews",
    slug: "in-depth-interviews",
  },
  {
    name: "Ethnographic Research",
    slug: "ethnographic-research",
  },
];

const sector = [
  {
    name: "Automotive Market Research",
    slug: "automotive-market-research",
  },
  {
    name: "Technology Market Research",
    slug: "technology-market-research",
  },
  {
    name: "Sports Market Research",
    slug: "sports-market-research",
  },
  {
    name: "Gaming Market Research",
    slug: "gaming-market-research",
  },
  {
    name: "FMCG Market Research",
    slug: "fmcg-market-research",
  },
  {
    name: "Food & Beverage Market Research",
    slug: "food-beverage-market-research",
  },
  {
    name: "Financial Services Market Research",
    slug: "financial-market-research",
  },
  {
    name: "Beauty & Cosmetics Market Research",
    slug: "beauty-cosmetics",
  },
  {
    name: "Crypto & Web3 Market Research",
    slug: "crypto-market-research",
  },
  {
    name: "Hospitality Market Research",
    slug: "hospitality-market-research",
  },
  {
    name: "Research for Consulting Firms",
    slug: "consulting-firms",
  },
  {
    name: "Pharmaceutical & Medical Device Market Research",
    slug: "pharmaceutical-medical-device-market-research",
  },
];

export const menuItem = [
  { name: "Services", path: ROUTE.SERVICES },
  {
    name: "Methodology",
    path: ROUTE.METHODOLOGY,
    children: methodology,
  },
  {
    name: "Industry Sectors",
    path: ROUTE.SECTOR,
    children: sector,
  },
  { name: "Network", path: ROUTE.NETWORK },
  { name: "About Us", path: ROUTE.ABOUT_US },
  { name: "Insights", path: ROUTE.ARTICLES },
  { name: "Contact", path: ROUTE.CONTACT_US },
  { name: "Privacy", path: ROUTE.CONTACT_US },
];
