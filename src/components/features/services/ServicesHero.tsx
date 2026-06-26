import { RiveAnimation } from "@/components/shared/RiveAnimation";

export const ServicesHero = () => {
  return (
    <div className="h-[calc(100vh-4.2rem)] w-full relative z-2">
      {/* Climber Group */}
      <div className="absolute top-0 -right-30 w-[800px] h-[800px] pointer-events-none">
        <RiveAnimation
          src="climber"
          width={800}
          height={800}
          className="absolute inset-0 -scale-x-100"
        />
        {/* Climber SVGs positioned relative to climber container */}
        <img
          src="/images/services/climber-plance-trace.svg"
          alt="Climber plane trace"
          className="absolute top-[13%] left-[10%] w-[149px] h-[48px]"
        />
        <img
          src="/images/services/climber-plane.svg"
          alt="Climber paper airplane"
          className="absolute top-[20%] left-[-10%] w-[145px] h-[165px]"
        />
        <img
          src="/images/services/climber-shape.svg"
          alt="Climber decorative shape"
          className="absolute top-[42%] left-[15%] w-[73px] h-[96px]"
        />
      </div>

      {/* Shrug Group */}
      <div className="absolute bottom-0 left-0 -mb-90 -ml-20 w-[750px] h-[750px] pointer-events-none">
        <RiveAnimation
          src="shrug"
          width={750}
          height={750}
          className="absolute inset-0 -scale-x-100"
        />
        {/* Shrug plane positioned relative to shrug container */}
        <img
          src="/images/services/shrug-plane.svg"
          alt="Shrug paper airplane"
          className="absolute top-[-10%] left-[80%] w-[185px] h-[158px]"
        />
      </div>

      <div className="absolute flex bottom-0 mb-10 w-full">
        <div className="w-1/2" />
        <p className="w-1/2 max-w-125">
          At MindMarket, we specialise in global qualitative research that helps
          brands make smarter, faster decisions. Whether you're refining a
          product, exploring new markets, or launching a campaign, our custom
          research services deliver the clarity you need — without the
          complexity.
        </p>
      </div>
    </div>
  );
};
