import { ImageMarquees } from "@/components/features/about-us/ImageMarquees";
import { MarqueeBlock } from "@/components/shared/MarqueeBlock";
import { TextBlock } from "@/components/shared/TextBlock";
import { WavyText } from "@/components/shared/WavyText";
import { formatNewline } from "@/utils/text";
import { Plus } from "lucide-react";

const TEAM = [
  { name: "Sina/nSalah", position: "Founder & CEO" },
  { name: "Kais B.H./nSalah", position: "" },
  { name: "Nydia Villarce/nLombardero", position: "" },
];

export const TeamSection = () => {
  return (
    <section>
      <TextBlock
        title={{
          position: "start",
          text: (
            <>
              The People Behind <WavyText text="Behind" />
              <br />
              the Insights
            </>
          ),
        }}
        desc={
          "At the heart of MindMarket is a diverse, passionate team of researchers, strategists, and business leaders committed to making a difference. We draw experience from across Europe, Northern Africa, Latin America, Asia, and beyond — combining deep industry expertise with a genuine desire to support our clients. We believe great research is built on collaboration, empathy, and shared vision. That’s why we’re involved in every step of your project, from initial brief to final insights./n/nEvery member of our team is equipped with the tools, cultural knowledge, and strategic mindset to guide your project with confidence. And we don’t just aim for deliverables — we aim for real impact. When you work with us, you’re joining a community of professionals who care about the work and the outcome."
        }
      />
      {TEAM.map((people, idx) => {
        return (
          <div key={idx}>
            <h2>{formatNewline(people.name)}</h2>
            <p>{people.position}</p>

            <div className="rounded-full bg-yellow-300">
              <Plus />
            </div>
          </div>
        );
      })}

      <MarqueeBlock>
        <ImageMarquees />
      </MarqueeBlock>
    </section>
  );
};
