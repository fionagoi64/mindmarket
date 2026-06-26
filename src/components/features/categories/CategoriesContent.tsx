import { IndustrySectorHero } from "@/components/features/categories/industry-sector/IndustrySectorHero";
import { ListLinkHover } from "@/components/features/categories/ListLinkHover";
import { MethodologyHero } from "@/components/features/categories/methodology/MethodologyHero";
import { HoverSection } from "@/components/shared/HoverSection";
import { MediaTextBlock } from "@/components/shared/MediaTextBlock";
import { ParallaxScrollImage } from "@/components/shared/ParallaxScrollImage";

type TCategoryItem = {
  name: string;
  slug: string;
};

type TCategoriesContentProps = {
  type: "methodology" | "sectors";
  items: TCategoryItem[];
};

export const CategoriesContent = ({ type, items }: TCategoriesContentProps) => {
  const columnSize = 6;

  const columns = Array.from(
    {
      length: Math.ceil(items.length / columnSize),
    },
    (_, i) => items.slice(i * columnSize, (i + 1) * columnSize),
  );

  return (
    <>
      {type === "sectors" ? <IndustrySectorHero /> : <MethodologyHero />}

      <section className="relative z-3 bg-[#f5f1e4] rounded-[50px] py-16 md:py-24 text-black px-6 md:px-12 lg:px-24">
        <div className="max-w-6xl mx-auto">
          <div className="mb-12 md:mb-16">
            <span className="font-mono text-xs md:text-sm font-bold tracking-[0.2em] text-black/50 uppercase">
              {type === "sectors" ? "Industries We Serve" : "Our Methodologies"}
            </span>

            <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold mt-2 md:mt-3 tracking-tight">
              {type === "sectors"
                ? "Expertise across sectors"
                : "Tailored approaches for insights"}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 border-b border-black/10">
            {columns.map((column, columnIndex) => (
              <div key={columnIndex}>
                {column.map((item, itemIndex) => (
                  <ListLinkHover
                    key={item.slug}
                    index={columnIndex * columnSize + itemIndex + 1}
                    name={item.name}
                    to={`/${type === "sectors" ? "sectors" : "methodology"}/${item.slug}`}
                  />
                ))}
              </div>
            ))}
          </div>

          <MediaTextBlock src={""} alt={""} desc={""} />
        </div>
      </section>
      <ParallaxScrollImage
        src="/images/about-us.avif"
        alt="About MindMarket"
        height="65vh"
      />
      <HoverSection />
    </>
  );
};
