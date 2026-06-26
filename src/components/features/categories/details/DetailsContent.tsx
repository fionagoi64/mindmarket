import { DetailsHero } from "@/components/features/categories/details/DetailsHeroDesc";
import { DetailsSidebar } from "@/components/features/categories/details/DetailsSidebar";
import { NextDetailsSection } from "@/components/features/categories/details/NextDetailsSection";
import { getCategoryDetails } from "@/constants/getCategoryDetails";
import { menuItem } from "@/constants/menuItem";
import { ROUTE } from "@/constants/route";
import { useScroll } from "motion/react";
import {
  useRef,
  type ComponentType,
} from "react";

type TDetailsContentProps = {
  type: "methodology" | "sectors";
  details: {
    slug: string;
    title: string;
    heroDesc: string;
    heroImage: string;
    content: ComponentType;
  };
};

export const DetailsContent = ({
  type,
  details,
}: TDetailsContentProps) => {
  const Content = details.content;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const currentMenu = menuItem.find(
    (item) =>
      item.path ===
      (type === "sectors"
        ? ROUTE.SECTOR
        : ROUTE.METHODOLOGY),
  );

  const children = currentMenu?.children || [];
  const currentIndex = children.findIndex(
    (child) => child.slug === details.slug,
  );

  const nextIndex =
    currentIndex !== -1
      ? (currentIndex + 1) % children.length
      : 0;
  const nextChild = children[nextIndex];
  const nextDetails = nextChild
    ? getCategoryDetails(
        type,
        nextChild.slug,
        nextChild.name,
      )
    : details;

  return (
    <>
      {/* Floating progress widget in the bottom-left corner */}

      <DetailsHero desc={details.heroDesc} />
      <section
        ref={ref}
        className="relative z-3 bg-[#f5f1e4] rounded-[50px] py-16 md:py-24 px-6 md:px-12 lg:px-24 flex flex-col md:flex-row gap-12 text-black"
      >
        <DetailsSidebar
          type={type}
          details={details}
          scrollYProgress={scrollYProgress}
        />

        <div className="flex-1 flex flex-col gap-6 text-black/85 leading-relaxed text-[17px]">
          <Content />
        </div>
      </section>

      {nextChild && (
        <NextDetailsSection
          title={nextChild.name}
          to={`/${type === "sectors" ? "sectors" : "methodology"}/${nextChild.slug}`}
          src={nextDetails.heroImage}
          category={
            type === "sectors"
              ? "sector"
              : "method"
          }
        />
      )}
    </>
  );
};
