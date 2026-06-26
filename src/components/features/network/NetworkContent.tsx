import { GlobeSpin } from "@/components/features/network/GlobeSpin";
import { HoverSection } from "@/components/shared/HoverSection";
import { ImageRevealList } from "@/components/shared/ImageRevealList";
import { MediaTextBlock } from "@/components/shared/MediaTextBlock";
import { RiveAnimation } from "@/components/shared/RiveAnimation";
import { Slides } from "@/components/shared/SlidesBlock";
import { TextBlock } from "@/components/shared/TextBlock";
import { TextReveal } from "@/components/shared/TextReveal";
import { NETWORK_LIST, NETWORK_SLIDES } from "@/constants/network";

export const NetworkContent = () => {
  return (
    <div className="bg-[#F4F1E4] ">
      <TextReveal
        offset={["start 300px", "start 50px"]}
        paragraph="At MindMarket, we're more than just a market research agency — we're your dedicated partner in uncovering the authentic voices that drive innovation and shape tomorrow's success stories. Our global network spans key markets across Europe, the Middle East, Asia, the Americas, and beyond, providing you with seamless access to consumer insights that empower strategic decision-making and business growth."
      />
      <MediaTextBlock
        src="/images/network/network.webp"
        alt="MindMarket Global Network"
        desc="Whether you’re launching in Tokyo, São Paulo, or Stockholm, MindMarket is already there."
      />
      <GlobeSpin />
      <Slides title="A Unified Network" slides={NETWORK_SLIDES} />
      <TextBlock
        title={{
          position: "center",
          text: "Our Network",
        }}
        desc=" Whether you're exploring established
        economies or emerging markets, testing new
        product concepts or refining your customer
        experience, our global network delivers
        insights that drive meaningful business
        outcomes:"
      />
      <section className="bg-[#E0DBCE] rounded-[50px] flex flex-col">
        <ImageRevealList data={NETWORK_LIST} />
      </section>
      <HoverSection
        text="Get in touch with us to run your next qualitative research project smoothly."
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
    </div>
  );
};
