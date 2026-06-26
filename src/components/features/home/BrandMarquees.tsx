import { MarqueeRows } from "@/components/shared/MarqueeBlock";

const BRANDS_ROW_1 = [
  {
    name: "Google",
    icon: "🌐",
    bgColor: "bg-[#4285F4]/10",
    textColor: "text-[#4285F4]",
  },
  {
    name: "Meta",
    icon: "♾️",
    bgColor: "bg-[#0668E1]/10",
    textColor: "text-[#0668E1]",
  },
  {
    name: "Microsoft",
    icon: "💻",
    bgColor: "bg-[#F25022]/10",
    textColor: "text-[#F25022]",
  },
  {
    name: "Amazon",
    icon: "📦",
    bgColor: "bg-[#FF9900]/10",
    textColor: "text-[#FF9900]",
  },
  {
    name: "Netflix",
    icon: "🎬",
    bgColor: "bg-[#E50914]/10",
    textColor: "text-[#E50914]",
  },
  {
    name: "Apple",
    icon: "🍎",
    bgColor: "bg-black/5",
    textColor: "text-black/85",
  },
];

const BRANDS_ROW_2 = [
  {
    name: "Spotify",
    icon: "🎵",
    bgColor: "bg-[#1DB954]/10",
    textColor: "text-[#1DB954]",
  },
  {
    name: "Uber",
    icon: "🚗",
    bgColor: "bg-black/5",
    textColor: "text-black/85",
  },
  {
    name: "Airbnb",
    icon: "🏡",
    bgColor: "bg-[#FF5A5F]/10",
    textColor: "text-[#FF5A5F]",
  },
  {
    name: "Slack",
    icon: "💬",
    bgColor: "bg-[#4A154B]/10",
    textColor: "text-[#4A154B]",
  },
  {
    name: "Stripe",
    icon: "💳",
    bgColor: "bg-[#635BFF]/10",
    textColor: "text-[#635BFF]",
  },
  {
    name: "Zoom",
    icon: "📹",
    bgColor: "bg-[#2D8CFF]/10",
    textColor: "text-[#2D8CFF]",
  },
];

const BRANDS_ROW_3 = [
  {
    name: "Nike",
    icon: "✔️",
    bgColor: "bg-black/5",
    textColor: "text-black/85",
  },
  {
    name: "IKEA",
    icon: "🇸🇪",
    bgColor: "bg-[#0051BA]/10",
    textColor: "text-[#FFDA1A]",
  },
  {
    name: "Sephora",
    icon: "💄",
    bgColor: "bg-black/5",
    textColor: "text-[#FF007A]",
  },
  {
    name: "Lego",
    icon: "🧱",
    bgColor: "bg-[#E3000B]/10",
    textColor: "text-[#FFD400]",
  },
  {
    name: "Coca-Cola",
    icon: "🥤",
    bgColor: "bg-[#F40009]/10",
    textColor: "text-[#F40009]",
  },
  {
    name: "Adidas",
    icon: "👟",
    bgColor: "bg-black/5",
    textColor: "text-black/85",
  },
];

export const BrandMarquees = () => {
  return (
    <MarqueeRows
      rowsData={[BRANDS_ROW_1, BRANDS_ROW_2, BRANDS_ROW_3]}
      renderItem={(brand, index) => (
        <div
          key={index}
          className="shrink-0 flex items-center gap-4 bg-white/60 backdrop-blur-md border border-black/5 pl-3 pr-6 py-2.5 rounded-full shadow-sm hover:border-[#8DD462]/30 hover:shadow-md transition-all duration-300 cursor-pointer"
        >
          {/* Circle Icon Container */}
          <div
            className={`w-10 h-10 rounded-full flex items-center justify-center text-lg shadow-inner ${brand.bgColor} ${brand.textColor}`}
          >
            {brand.icon}
          </div>
          {/* Brand Name Text */}
          <span className="text-lg font-semibold text-[#08060d] tracking-tight">
            {brand.name}
          </span>
        </div>
      )}
    />
  );
};
