import { RiveAnimation } from "@/components/shared/RiveAnimation";

export const IndustrySectorHero = () => {
  return (
    <div className="h-[calc(100vh-4.2rem)] w-full relative z-2">
      <RiveAnimation
        width={650}
        height={650}
        src="scientist"
        className="absolute top-10 -right-20"
      />

      <RiveAnimation
        src="gamer"
        width={620}
        height={620}
        className="absolute bottom-0 left-0 -mb-60 -ml-20"
      />

      <div className="absolute flex bottom-0 mb-10 w-full">
        <div className="w-1/2" />
        <p className="w-1/2 max-w-125">
          At MindMarket, we help you uncover the
          insights that matter most — no matter
          your industry. With deep experience
          across a wide range of sectors, we
          understand the unique challenges and
          nuances each market brings. Whether
          you’re short on time, resources, or
          local context, we act as your research
          partner offering practical,
          cost-effective solutions tailored to
          your goals.
        </p>
      </div>
    </div>
  );
};
