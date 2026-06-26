import { AnimatedCard } from "@/components/features/home/AnimatedCard";
import { AnimatedButton } from "@/components/shared/AnimatedButton";
import { RiveAnimation } from "@/components/shared/RiveAnimation";

export const ScrollPathSection = () => {
  return (
    <section className="bg-transparent">
      {/* PART 1: Sticky Illustration + Scrolling Paragraph Container */}
      <div className="relative w-full h-[150vh] bg-transparent">
        {/* Sticky wrapper for the Rive illustration */}
        <div className="sticky top-0 h-svh w-full flex items-end justify-center pointer-events-none z-20">
          <div className="w-full max-w-[780px] aspect-[16/10] pointer-events-auto translate-y-[20%]">
            <RiveAnimation src="three-people" width={780} height={490} />
          </div>
        </div>

        {/* Scrolling content layer (slides over the sticky illustration) */}
        <div className="absolute inset-0 z-10 pointer-events-none flex flex-col justify-end">
          <div className="w-full bg-[#F4F1E4] rounded-t-[50px] pt-36 pb-24 px-6 md:px-12 lg:px-24 pointer-events-auto">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-12 items-start justify-between">
              <div className="w-full md:w-1/2 flex flex-col gap-8">
                <p className="text-xl md:text-2xl lg:text-[26px] font-medium text-[#2c2e2a] leading-relaxed tracking-tight">
                  MindMarket delivers global qualitative market research through
                  real people who understand local cultures. We connect you with
                  the voices that matter—wherever they are—to help you make
                  smarter, faster business decisions with confidence.
                </p>

                <AnimatedButton />
              </div>

              <div className="w-full md:w-1/2" />
            </div>
          </div>
        </div>
      </div>

      {/* PART 2: Climber, Cards, and Animations */}
      <div className="w-full bg-[#F4F1E4] relative z-10 pb-24">
        <div className="w-full px-6 md:px-12 lg:px-24 max-w-6xl mx-auto flex flex-col gap-24">
          {/* Row 1: Climber on Left, Card on Right */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 w-full">
            <div className="w-full md:w-1/2 flex justify-start">
              <RiveAnimation
                src="climber"
                width={650}
                height={650}
                className="w-full h-auto max-w-[450px]"
              />
            </div>
            <div className="w-full md:w-1/2 flex justify-end">
              <AnimatedCard
                title="No more chaos."
                desc="Managing multiple vendors, juggling time zones, translating insights across cultures — it adds up fast. At MindMarket, we bring it all under one roof. No misalignment, no friction, just seamless collaboration from start to finish."
                to="/services"
              />
            </div>
          </div>

          {/* Row 2: Card on Left, Shrug on Right */}
          <div className="flex flex-col md:flex-row justify-between items-center gap-12 w-full">
            <div className="w-full md:w-1/2 flex justify-start">
              <AnimatedCard
                title="Local understanding."
                desc="Our global network of in-market researchers and moderators understand cultural nuances, not just the language. We help you connect with real people in their own context, delivering insights that are authentic and actionable."
                to="/network"
              />
            </div>
            <div className="w-full md:w-1/2 flex justify-end">
              <RiveAnimation
                src="shrug"
                width={650}
                height={650}
                className="w-full h-auto max-w-[450px]"
              />
            </div>
          </div>

          {/* Row 3: Card in the Center */}
          <div className="w-full flex justify-center mt-12">
            <AnimatedCard
              title="Dedicated support."
              desc="With a single point of contact handling every detail of your study — from the initial kickoff call to the final insights report — you get the premium results of a big agency with the personalized care of a boutique consultancy."
              to="/about-us"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
