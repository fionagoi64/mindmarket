import { RiveAnimation } from "@/components/shared/RiveAnimation";
import { TextBlock } from "@/components/shared/TextBlock";
import { WavyText } from "@/components/shared/WavyText";

export const DifferenceSection = () => {
  return (
    <section>
      <TextBlock
        title={{
          position: "start",
          text: (
            <>
              Not a Typical <br />
              <WavyText text="Research" /> Agency
            </>
          ),
        }}
        desc={
          "We started MindMarket because we were tired of the way global research was being done: too many layers, too much chaos, not enough meaning. We’ve replaced outdated, fragmented models with something more agile, personal, and effective. Our team doesn’t just coordinate vendors — we are the team. That means faster timelines, more consistent results, and insights that actually reflect the people you’re trying to understand. We work in time zones that suit you, using tools that adapt to your needs — not the other way around."
        }
      />

      <div className="flex p-10 bg-white rounded-2xl">
        <div className="w-1/2 flex flex-col gap-y-2">
          <RiveAnimation width={40} height={40} src={""} />
          <div>Traditional Approach</div>
          <ul className="flex flex-col gap-y-2 ">
            <li className="border-b">Vendor hand-offs & silos</li>
            <li className="border-b">Generic, translated responses</li>
            <li className="border-b">Long timelines, high costs</li>
            <li className="border-b">Big teams, low accountability</li>
          </ul>
        </div>
        <div className="w-1/2 flex flex-col gap-y-2">
          <RiveAnimation width={40} height={40} src={""} />
          <div>MindMarket Approach</div>
          <ul className="flex flex-col gap-y-2 ">
            <li className="border-b">Single, dedicated point of contact</li>
            <li className="border-b">
              Culturally fluent, in-context moderation
            </li>
            <li className="border-b">Lean, fast, cost-effective delivery</li>
            <li className="border-b">Agile experts, full ownership</li>
          </ul>
        </div>
      </div>
    </section>
  );
};
