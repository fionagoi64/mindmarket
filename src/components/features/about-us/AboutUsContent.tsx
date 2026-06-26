import { AboutUsHero } from "@/components/features/about-us/AboutUsHero";
import { DifferenceSection } from "@/components/features/about-us/DifferenceSection";
import { ProcessSection } from "@/components/features/about-us/ProcessSection";
import { TeamSection } from "@/components/features/about-us/TeamSection";
import { WhyUsSection } from "@/components/features/about-us/WhyUsSection";
import { HoverSection } from "@/components/shared/HoverSection";
import { TextReveal } from "@/components/shared/TextReveal";

export const AboutUsContent = () => {
  return (
    <>
      <AboutUsHero />
      <div className="relative z-3">
        <div className="bg-[#8DD462] rounded-[50px] py-24">
          <TextReveal paragraph="Our mission is to make international research feel simple, efficient, and deeply human. We blend cultural intelligence with operational precision to deliver insights that move business forward. With a lean, expert-led model and a truly global network, we’re not just here to manage research — we’re here to help you make smarter decisions through deep, nuanced understanding." />
          <WhyUsSection />
        </div>
        <ProcessSection />
        <DifferenceSection />
        <TeamSection />
        <HoverSection />
      </div>
    </>
  );
};
