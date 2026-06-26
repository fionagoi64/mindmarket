import { AnimatedDivider } from "@/components/features/categories/details/AnimatedDivider";
import { FAQAccordion } from "@/components/features/categories/details/FAQAccordion";

export const OnlineBulletInBoard = () => {
  return (
    <>
      <p>
        Picture this: authentic conversations with
        your target audience unfolding naturally
        over days or weeks, revealing insights
        you'd never capture in a two-hour focus
        group. That's the brilliant simplicity of
        online bulletin board market research –
        and it's transforming how businesses
        understand their customers worldwide.
      </p>

      <p>
        At MindMarket, we've perfected the art of
        running market research online communities
        (MROCs) across every corner of the globe.
        Whether you need insights from Tokyo
        teenagers or Berlin business owners, we
        handle the complexity whilst you enjoy the
        revelations.
      </p>

      <AnimatedDivider className="w-full my-8" />

      <h2 className="text-2xl font-bold mt-12 mb-4 text-black first:mt-0">
        What Makes Online Bulletin Boards So
        Powerful?
      </h2>

      <p>
        Online bulletin boards (OBBs) are like
        having a continuous conversation with your
        customers – but better. Participants log
        in when it suits them, share their honest
        thoughts, respond to each other, and build
        on ideas over time. It's{" "}
        <strong>
          asynchronous market research
        </strong>{" "}
        at its finest, giving you the depth of
        ethnography with the efficiency of
        digital.
      </p>

      <p>
        Think of it as the perfect middle ground
        between a quick survey and an intensive
        focus group. You get:
      </p>

      <ul className="list-disc pl-6 my-4 flex flex-col gap-2">
        <li className="text-black/85">
          Time for reflection – participants think
          before they respond, leading to richer
          insights
        </li>
        <li className="text-black/85">
          Natural behaviour – people engage from
          their comfort zones, being more
          authentic
        </li>
        <li className="text-black/85">
          Evolving discussions – ideas build and
          develop as participants interact
        </li>
        <li className="text-black/85">
          Global reach – connect with anyone,
          anywhere, without travel costs
        </li>
      </ul>

      <p>
        The beauty? Whilst traditional research
        methodologies force participants into
        artificial settings, digital bulletin
        board research meets them where they are –
        at home, at work, or on the go.
      </p>

      <AnimatedDivider className="w-full my-8" />

      <h2 className="text-2xl font-bold mt-12 mb-4 text-black">
        How Online Bulletin Boards Actually Work
        (Without the Hassle)
      </h2>
      <p>
        Let's demystify the process. Running
        successful OBB research doesn't have to be
        complicated – especially when you've got
        the right partner handling the details.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-3 text-black">
        The Setup Phase
      </h3>
      <p>
        First, we recruit participants who
        genuinely match your criteria. Not just
        demographically, but people who are
        engaged and articulate. We then create
        your branded online space where the magic
        happens – think of it as your private
        research community.
      </p>

      <h3 className="text-xl font-bold mt-8 mb-3 text-black">
        The Active Research Period
      </h3>
      <p>
        Over typically 3-7 days (though we've run
        successful studies for up to 4 weeks),
        participants:
      </p>

      <ul className="list-disc pl-6 my-4 flex flex-col gap-2">
        <li className="text-black/85">
          Respond to carefully crafted questions
          that evolve based on emerging themes
        </li>
        <li className="text-black/85">
          Complete engaging activities like photo
          diaries, video responses, or product
          trials
        </li>
        <li className="text-black/85">
          Interact with other participants
          building on each other's ideas
        </li>
        <li className="text-black/85">
          Engage with skilled moderators who probe
          deeper into interesting responses
        </li>
      </ul>

      <h3>The Insight Delivery</h3>
      <p>
        Here's where we shine. Instead of drowning
        you in transcripts, we deliver:
      </p>

      <ul className="list-disc pl-6 my-4 flex flex-col gap-2">
        <li className="text-black/85">
          Synthesised findings that answer your
          actual business questions
        </li>
        <li className="text-black/85">
          Rich examples including quotes, images,
          and videos that bring insights to life
        </li>
        <li className="text-black/85">
          Actionable recommendations you can
          implement immediately
        </li>
        <li className="text-black/85">
          Raw data access for your own deep dives
          when needed
        </li>
      </ul>

      <p className="mt-6">
        According to the Market Research Society,
        digital qualitative methods like OBBs are
        now considered best practice for capturing
        authentic consumer voices across diverse
        markets.
      </p>

      <FAQAccordion
        faqs={[
          {
            question:
              "What is the typical size of an Online Bulletin Board?",
            answer:
              "Online Bulletin Boards usually have 15 to 30 participants, allowing for deep qualitative interaction while keeping the group manageable and highly interactive.",
          },
          {
            question:
              "How do you ensure participants stay active over several days?",
            answer:
              "We use gamified activities, regular moderator prompts, push notifications, and progressive incentives to maintain high engagement throughout the study.",
          },
        ]}
      />
    </>
  );
};
