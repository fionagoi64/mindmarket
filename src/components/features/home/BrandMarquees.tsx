import { MarqueeRows } from "@/components/shared/MarqueeBlock";

type TBrandItem = {
  name: string;
  logo: string;
};

const BRANDS_ROW_1: TBrandItem[] = [
  { name: "Discord", logo: "/images/brands/discord.svg" },
  { name: "Paypal", logo: "/images/brands/paypal.png" },
  { name: "Walmart", logo: "/images/brands/walmart.png" },
  { name: "Moët & Chandon", logo: "/images/brands/moet-chandon.png" },
  { name: "Coinbase", logo: "/images/brands/coinbase.png" },
  { name: "Airbnb", logo: "/images/brands/airbnb.png" },
  { name: "Apple", logo: "/images/brands/apple.webp" },
  { name: "Epiphany", logo: "/images/brands/epiphany.jpeg" },
];

const BRANDS_ROW_2: TBrandItem[] = [
  { name: "Google", logo: "/images/brands/google.png" },
  { name: "YouTube", logo: "/images/brands/youtube.png" },
  { name: "Uber", logo: "/images/brands/uber.png" },
  { name: "Meta", logo: "/images/brands/meta.png" },
  { name: "Citizens Bank", logo: "/images/brands/citizens-bank.svg" },
  { name: "American Express", logo: "/images/brands/american-express.png" },
  { name: "Pernod Ricard", logo: "/images/brands/pernod-ricard.png" },
];

const BRANDS_ROW_3: TBrandItem[] = [
  { name: "Amazon", logo: "/images/brands/amazon.svg" },
  { name: "WhatsApp", logo: "/images/brands/whatsapp.png" },
  { name: "NielsenIQ", logo: "/images/brands/nielseniq.png" },
  { name: "HP", logo: "/images/brands/hp.png" },
  { name: "AnswerLab", logo: "/images/brands/answerlab.png" },
  { name: "Starbucks", logo: "/images/brands/starbucks.png" },
  { name: "The July", logo: "/images/brands/the-july.jpeg" },
];

export const BrandMarquees = () => {
  return (
    <MarqueeRows
      rowsData={[BRANDS_ROW_1, BRANDS_ROW_2, BRANDS_ROW_3]}
      speed={1.2}
      renderItem={(brand, index) => (
        <div
          key={`${brand.name}-${index}`}
          className="c-brands-section_item shrink-0"
        >
          <div className="c-brands-section_item_visual">
            <img
              src={brand.logo}
              alt={brand.name}
              loading="lazy"
            />
          </div>
          <p className="c-brands-section_item_title">{brand.name}</p>
        </div>
      )}
    />
  );
};
