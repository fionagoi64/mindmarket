import { RiveAnimation } from "@/components/shared/RiveAnimation";

export const MethodologyHero = () => {
  return (
    <div className="h-[calc(100vh-4.2rem)] w-full relative z-2">
      <RiveAnimation
        src="trumpeter-1"
        className="absolute top-20 right-50 -scale-x-100"
      />
      <RiveAnimation
        src="trumpeter-2"
        className="absolute top-56 -right-18 -scale-x-100"
      />
      <RiveAnimation
        src="composer"
        width={650}
        height={650}
        className="absolute bottom-0 left-0 -scale-x-100 -mb-40 -ml-32"
      />
      <div className="absolute flex bottom-0 mb-10 w-full">
        <div className="w-1/2" />
        <p className="w-1/2 max-w-125">
          We use a selection of methods and
          innovative techniques to build the
          insights you need to power your
          business. Our team of experts will work
          closely with you to design a research
          programme that delivers the insights you
          need - and we also offer a range of
          behavioural research services too!
        </p>
      </div>
    </div>
  );
};
