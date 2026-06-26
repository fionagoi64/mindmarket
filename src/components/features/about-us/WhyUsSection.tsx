import { MediaTextBlock } from "@/components/shared/MediaTextBlock";
import { Slides } from "@/components/shared/SlidesBlock";
import { WavyText } from "@/components/shared/WavyText";
import { NETWORK_SLIDES } from "@/constants/network";

export const WhyUsSection = () => {
  return (
    <div>
      <h2>
        Why Brands
        <br />
        <WavyText text="Trust" /> MindMarket
      </h2>
      <MediaTextBlock
        src={""}
        alt={""}
        desc="We’ve built MindMarket around three core principles: clarity, consistency, and care. That starts with your own dedicated project manager, who handles every detail of your study — from the first kickoff call to the final delivery. You’re never passed from vendor to vendor. Behind them is a trusted global network of in-market researchers and moderators who understand the cultural context, not just the language. And because we operate with a lean, boutique structure, our clients get big-agency results without the bloat."
      />
      <Slides title="What Sets Us Apart" slides={NETWORK_SLIDES} />
    </div>
  );
};
