import { ServiceCards } from "@/components/features/services/ServiceCards";
import { ServicesHero } from "@/components/features/services/ServicesHero";
import { HoverSection } from "@/components/shared/HoverSection";
import { ImageRevealList } from "@/components/shared/ImageRevealList";
import { RiveAnimation } from "@/components/shared/RiveAnimation";
import { ROUTE } from "@/constants/route";
import { CARDS, SERVICES_LIST } from "@/constants/services";

export const ServicesContent = () => {
  return (
    <>
      <ServicesHero />

      <div className="relative z-3 rounded-t-[50px] bg-white">
        <section className="bg-[#F4F1E4] rounded-[50px] p-24">
          <ServiceCards data={CARDS} />
        </section>

        <section className="bg-[#E0DBCE] rounded-[50px] flex flex-col">
          <ImageRevealList data={SERVICES_LIST} />
          <HoverSection
            text="Discover the tools we use to get you there."
            button={{
              to: ROUTE.METHODOLOGY,
              button: {
                text: "Methodology",
                bgColor: "bg-[#F5E211] hover:bg-[#d9c90f] text-[#2c2e2a]",
              },
              arrow: {
                bgColor: "bg-white",
              },
            }}
            leftImage={
              <RiveAnimation
                src="composer"
                width={650}
                height={650}
                className=" -scale-x-100 -mb-50"
              />
            }
            rightImage={
              <div>
                <RiveAnimation src="trumpeter-1" className="-scale-x-100" />
                <RiveAnimation src="trumpeter-2" className="-scale-x-100" />
              </div>
            }
          />
        </section>
      </div>
    </>
  );
};
