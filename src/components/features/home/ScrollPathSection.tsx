import { AnimatedCard } from "@/components/features/home/AnimatedCard";
import { TimelinePaths } from "@/components/features/home/TimelinePaths";
import { RiveAnimation } from "@/components/shared/RiveAnimation";
import { useMotionValueEvent, useScroll } from "motion/react";
import { useCallback, useEffect, useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";

const ArrowRightSvg = () => (
  <svg
    width="1em"
    height="1em"
    viewBox="0 0 20 20"
    className="svg-arrow-right"
    aria-hidden="true"
    focusable="false"
  >
    <path fill="none" d="m8 14 4-4-4-4" />
  </svg>
);

const initializeSvgPath = (
  main: SVGPathElement | null,
  secondary: SVGPathElement | null,
  shadow: SVGPathElement | null,
  initialDrawFraction: number,
) => {
  if (!main || !secondary || !shadow) return;

  const mainLength = main.getTotalLength();
  const secondaryLength = secondary.getTotalLength();
  if (!mainLength || !secondaryLength) return;

  main.style.strokeDasharray = `${mainLength}`;
  main.style.strokeDashoffset = `${mainLength * (1 - initialDrawFraction)}`;
  secondary.style.strokeDasharray = `${secondaryLength}`;
  secondary.style.strokeDashoffset = `${secondaryLength}`;
  shadow.style.opacity = "0";
};

export const ScrollPathSection = () => {
  const introRef = useRef<HTMLDivElement>(null);
  const pathContainerRef = useRef<HTMLDivElement>(null);
  const timelineEndRef = useRef<HTMLDivElement>(null);

  const desktopMainPathRef = useRef<SVGPathElement>(null);
  const desktopSecondaryPathRef = useRef<SVGPathElement>(null);
  const desktopShadowPathRef = useRef<SVGPathElement>(null);

  const mobileMainPathRef = useRef<SVGPathElement>(null);
  const mobileSecondaryPathRef = useRef<SVGPathElement>(null);
  const mobileShadowPathRef = useRef<SVGPathElement>(null);

  const plane1Ref = useRef<HTMLImageElement>(null);
  const plane2Ref = useRef<HTMLImageElement>(null);

  const { scrollYProgress: introProgress } = useScroll({
    target: introRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(introProgress, "change", (v) => {
    if (introRef.current) {
      introRef.current.style.setProperty("--progress", String(v));
    }
  });

  const { scrollYProgress: pathProgress } = useScroll({
    target: pathContainerRef,
    offset: ["start end", "end end"],
  });

  useLayoutEffect(() => {
    initializeSvgPath(
      desktopMainPathRef.current,
      desktopSecondaryPathRef.current,
      desktopShadowPathRef.current,
      0.05,
    );
    initializeSvgPath(
      mobileMainPathRef.current,
      mobileSecondaryPathRef.current,
      mobileShadowPathRef.current,
      0.001,
    );
  }, []);

  const updateAllPaths = useCallback((progress: number) => {
    const updateSvgPaths = (
      main: SVGPathElement | null,
      secondary: SVGPathElement | null,
      shadow: SVGPathElement | null,
      shadowMaxOpacity: string,
      initialDrawFraction: number,
      splitPoint: number,
    ) => {
      if (!main || !secondary || !shadow) return;
      const mainLen = main.getTotalLength();
      const secLen = secondary.getTotalLength();
      if (!mainLen || !secLen) return;

      main.style.strokeDasharray = `${mainLen}`;
      secondary.style.strokeDasharray = `${secLen}`;

      if (progress <= splitPoint) {
        const localP = (progress / splitPoint) ** 1.8;
        const drawn = initialDrawFraction + (1 - initialDrawFraction) * localP;
        main.style.strokeDashoffset = `${mainLen * (1 - drawn)}`;
        secondary.style.strokeDashoffset = `${secLen}`;
        shadow.style.opacity = "0";
      } else {
        const localP = (progress - splitPoint) / (1 - splitPoint);
        main.style.strokeDashoffset = "0";
        shadow.style.opacity = shadowMaxOpacity;
        secondary.style.strokeDashoffset = `${secLen * (1 - localP)}`;
      }
    };

    updateSvgPaths(
      desktopMainPathRef.current,
      desktopSecondaryPathRef.current,
      desktopShadowPathRef.current,
      "1",
      0.05,
      0.474,
    );
    updateSvgPaths(
      mobileMainPathRef.current,
      mobileSecondaryPathRef.current,
      mobileShadowPathRef.current,
      "0.5",
      0.001,
      0.5,
    );

    if (plane1Ref.current) {
      const p1 = Math.min(1, Math.max(0, (progress - 0.05) / 0.25));
      plane1Ref.current.style.setProperty("--progress", String(p1));
    }
    if (plane2Ref.current) {
      const p2 = Math.min(1, Math.max(0, (progress - 0.1) / 0.25));
      plane2Ref.current.style.setProperty("--progress", String(p2));
    }
  }, []);

  useEffect(() => {
    updateAllPaths(pathProgress.get());
    const handleResize = () => updateAllPaths(pathProgress.get());
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [pathProgress, updateAllPaths]);

  useMotionValueEvent(pathProgress, "change", (progress) => {
    updateAllPaths(progress);
  });

  const { scrollYProgress: endProgress } = useScroll({
    target: timelineEndRef,
    offset: ["start end", "end start"],
  });

  useMotionValueEvent(endProgress, "change", (v) => {
    if (timelineEndRef.current) {
      timelineEndRef.current.style.setProperty("--progress", String(v));
    }
  });

  return (
    <div className="c-homepage-timeline mt-[100svh]">
      <div ref={introRef} className="c-homepage-timeline_intro">
        <div className="c-homepage-timeline_intro_illustration_wrap">
          <div className="c-homepage-timeline_intro_illustration_sticky">
            <div className="c-homepage-timeline_intro_illustration transform-element">
              <div className="c-homepage-timeline_intro_illustration_inner">
                <RiveAnimation
                  src="three-people"
                  autoplay
                  reveal
                  className="c-homepage-timeline_intro_illustration_canvas"
                />
                <img
                  src="/timeline/hero-background-illustration.svg"
                  alt=""
                  className="c-homepage-timeline_intro_illustration_background"
                  width="971"
                  height="540"
                  aria-hidden="true"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="container relative z-[1]">
          <div className="grid grid-cols-6 gap-gutter md:grid-cols-16">
            <div className="col-span-full md:col-start-2 md:col-span-14">
              <div className="grid md:grid-cols-14">
                <div className="flex flex-col gap-9 md:col-start-1 md:col-end-8 md:max-w-175">
                  <p className="md:heading-xs max-md:heading-sm text-balance">
                    MindMarket delivers global qualitative market research
                    through real people who understand local cultures. We
                    connect you with the voices that matter— wherever they are —
                    to help you make smarter, faster business decisions with
                    confidence.
                  </p>
                  <div>
                    <Link
                      to="/contact-us"
                      className="c-button button-green button-secondary"
                    >
                      <span className="c-button_icon -hover">
                        <span className="c-icon">
                          <ArrowRightSvg />
                        </span>
                      </span>
                      <span className="c-button_label">Get a quote</span>
                      <span className="c-button_icon -default">
                        <span className="c-icon">
                          <ArrowRightSvg />
                        </span>
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="c-homepage-timeline_intro_ghost" />
      </div>

      {/* PART 2: Winding Timeline Path, Cards, Rive Animations & Floating SVGs */}
      <div className="relative overflow-hidden">
        {/* 4 Timeline Cards (must be children 1-4 for nth-child positioning) */}
        <AnimatedCard
          title="No more chaos."
          desc="Managing multiple vendors, juggling time zones, translating insights across cultures — it adds up fast. At MindMarket, we bring it all under one roof. No misalignment, no friction, just seamless collaboration from start to finish."
          to="/services"
          buttonLabel="Services"
          color="red"
        />
        <AnimatedCard
          title="One brief. One team."
          desc="You brief us once and we take it from there. From methodology design and recruitment to local moderation and reporting, everything is managed by a single point of contact who leads your study from start to finish. You get clear updates, fast turnarounds, and high-quality insights—without compromise."
          to="/methodology"
          buttonLabel="Methodology"
          color="yellow"
        />
        <AnimatedCard
          title="Speak their language."
          desc="From gaming to fintech, hospitality to consumer goods, each industry speaks its own language. Our in-market experts don’t just understand people, they understand the context. We bring cultural insight shaped by the sector you’re in, so your message hits home in every market."
          to="/sectors"
          buttonLabel="Industry Sectors"
          color="blue"
        />
        <AnimatedCard
          title="Global, for real."
          desc="Whether you’re researching one market or launching in ten, we scale with you. One partner. Global reach. Consistent quality. Our global network spans regions and industries, giving you on-demand access to the right participants in the right places, without starting from scratch."
          to="/network"
          buttonLabel="Our Network"
          color="pink"
        />

        {/* 8 Mid-Timeline Rive Animations */}
        <RiveAnimation
          src="climber"
          autoplay
          reveal
          className="pointer-events-none absolute z-10 aspect-[1000/1225] max-md:top-[2.8%] max-md:left-[-16%] max-md:w-[68%] md:top-[10%] md:left-[-3.2%] md:w-[43%]"
        />
        <RiveAnimation
          src="shrug"
          autoplay
          reveal
          className="pointer-events-none absolute z-10 aspect-[1153/1188] max-md:top-[20%] max-md:right-[-3%] max-md:w-[72%] max-sm:right-[-6.5%] md:top-[19%] md:right-[5%] md:w-[45%]"
        />
        <RiveAnimation
          src="composer"
          autoplay
          reveal
          className="pointer-events-none absolute z-[3] aspect-[1000/1151] max-md:top-[35.5%] max-md:right-[-15.5%] max-md:w-[68%] md:top-[32%] md:right-[-5%] md:w-[40%]"
        />
        <RiveAnimation
          src="trumpeter-1"
          autoplay
          reveal
          className="pointer-events-none absolute z-10 aspect-[808/738] max-md:top-[38%] max-md:left-[-7%] max-md:w-[56%] md:top-[33.4%] md:left-[14%] md:w-[32%] xl:w-[29%]"
        />
        <RiveAnimation
          src="trumpeter-2"
          autoplay
          reveal
          className="pointer-events-none absolute z-above aspect-square max-md:top-[41.5%] max-md:left-[-4%] max-md:w-[54%] md:top-[35.5%] md:left-[-2%] md:w-[32%] xl:w-[29%]"
        />
        <RiveAnimation
          src="gamer"
          autoplay
          reveal
          className="pointer-events-none absolute z-10 aspect-square max-md:top-[55.5%] max-md:left-[-3%] max-md:w-[72%] md:top-[45.35%] md:left-[11.5%] md:w-[31%] xl:top-[44.7%] xl:left-[10%] xl:w-[33.5%]"
        />
        <RiveAnimation
          src="scientist"
          autoplay
          reveal
          revealTranslateX="10%"
          className="pointer-events-none absolute right-[0] z-above aspect-[1000/1271] max-md:top-[61%] max-md:w-[68%] md:top-[53%] md:w-[34%]"
        />
        <RiveAnimation
          src="soccer"
          autoplay
          reveal
          className="pointer-events-none absolute z-above aspect-[1789/1438] max-md:top-[81%] max-md:right-[-5%] max-md:w-[100%] md:top-[63%] md:left-[-3.5%] md:w-[56.5%]"
        />

        {/* Decorative Timeline SVGs */}
        <img
          src="/timeline/clock.svg"
          alt=""
          className="absolute z-above max-md:top-[1.5%] max-md:left-[15%] max-md:hidden max-md:w-[16%] md:top-[5%] md:left-[13%] md:w-[10%]"
          width="203"
          height="210"
          aria-hidden="true"
        />
        <img
          src="/timeline/clock-shape.svg"
          alt=""
          className="absolute top-[2%] left-[8%] z-10 w-[30%] max-md:hidden"
          width="533"
          height="537"
          aria-hidden="true"
        />
        <img
          src="/timeline/clock-shape-mobile.svg"
          alt=""
          className="absolute top-[1%] left-[8%] z-10 md:hidden w-[40%]"
          width="222"
          height="190"
          aria-hidden="true"
        />
        <img
          src="/timeline/folder.svg"
          alt=""
          className="absolute z-above max-md:top-[20%] max-md:left-[16%] max-md:w-[20%] md:top-[22%] md:left-[40%] md:w-[12%]"
          width="256"
          height="215"
          aria-hidden="true"
        />
        <img
          src="/timeline/folder-shape.svg"
          alt=""
          className="absolute z-above max-md:top-[17%] max-md:left-[-18%] max-md:w-[42%] md:top-[15%] md:left-[19%] md:w-[25%]"
          width="209"
          height="445"
          aria-hidden="true"
        />
        <img
          ref={plane1Ref}
          src="/timeline/plane-1.svg"
          alt=""
          className="transform-element absolute z-10 max-md:top-[4.5%] max-md:left-[50%] max-md:w-[12%] max-md:transform-none! md:top-[11%] md:left-[31%] md:w-[6%]"
          width="137"
          height="173"
          style={
            {
              "--tx-start": "-10px",
              "--tx-end": "10px",
              "--ty-start": "-10px",
              "--ty-end": "60px",
              "--rot-start": "-10deg",
              "--rot-end": "10deg",
            } as React.CSSProperties
          }
          aria-hidden="true"
        />
        <img
          ref={plane2Ref}
          src="/timeline/plane-2.svg"
          alt=""
          className="transform-element absolute z-above max-md:top-[8.5%] max-md:right-[1%] max-md:w-[16%] max-md:transform-none! md:top-[19%] md:left-[46%] md:w-[8%]"
          width="178"
          height="122"
          style={
            {
              "--tx-start": "-30px",
              "--tx-end": "40px",
              "--ty-start": "-40px",
              "--ty-end": "40px",
              "--rot-start": "10deg",
              "--rot-end": "-10deg",
            } as React.CSSProperties
          }
          aria-hidden="true"
        />
        <img
          src="/timeline/plane-trace.svg"
          alt=""
          className="absolute z-10 max-md:top-[2.9%] max-md:left-[28%] max-md:w-[50%] md:top-[9%] md:left-[22%] md:w-[23%]"
          width="430"
          height="542"
          aria-hidden="true"
        />
        <img
          src="/timeline/sheet.svg"
          alt=""
          className="absolute z-above max-md:top-[19%] max-md:left-[2%] max-md:w-[18%] md:top-[20%] md:left-[32%] md:w-[10%]"
          width="213"
          height="167"
          aria-hidden="true"
        />
        <img
          src="/timeline/composer-shape.svg"
          alt=""
          className="absolute top-[26%] right-[9%] z-10 w-[38%] max-md:hidden"
          width="751"
          height="515"
          aria-hidden="true"
        />
        <img
          src="/timeline/composer-shape-2.svg"
          alt=""
          className="absolute top-[26%] right-[9%] z-above w-[38%] max-md:hidden"
          width="751"
          height="515"
          aria-hidden="true"
        />
        <img
          src="/timeline/music-note-1.svg"
          alt=""
          className="pointer-events-none absolute max-md:top-[36.5%] max-md:left-[16%] max-md:w-[12%] md:top-[34%] md:left-[9%] md:w-[5%] xl:w-[6.5%]"
          width="113"
          height="97"
          aria-hidden="true"
        />
        <img
          src="/timeline/music-note-2.svg"
          alt=""
          className="absolute z-above max-md:top-[40%] max-md:left-[46%] max-md:w-[14%] md:top-[38%] md:left-[48%] md:w-[6%] xl:w-[7%]"
          width="141"
          height="172"
          aria-hidden="true"
        />
        <img
          src="/timeline/music-note-3.svg"
          alt=""
          className="absolute z-above max-md:top-[43%] max-md:left-[52%] max-md:w-[13.5%] md:top-[42%] md:left-[52%] md:w-[6%] xl:w-[7.3%]"
          width="157"
          height="179"
          aria-hidden="true"
        />
        <img
          src="/timeline/trumper-shape.svg"
          alt=""
          className="absolute z-above max-md:top-[45%] max-md:right-[10%] max-md:w-[25%] md:top-[42%] md:left-[28%] md:w-[12%]"
          width="301"
          height="73"
          aria-hidden="true"
        />
        <img
          src="/timeline/gamer-shape.svg"
          alt=""
          className="absolute z-above max-md:top-[57.5%] max-md:left-[-5%] max-md:w-[24%] md:top-[47%] md:left-[4%] md:w-[10%]"
          width="194"
          height="434"
          aria-hidden="true"
        />
        <img
          src="/timeline/joystick.svg"
          alt=""
          className="pointer-events-none absolute z-10 max-md:top-[53%] max-md:right-[2%] max-md:w-[18%] md:top-[55.5%] md:left-[40%] md:w-[7%]"
          width="154"
          height="192"
          aria-hidden="true"
        />
        <img
          src="/timeline/joystick-shape.svg"
          alt=""
          className="absolute z-above max-md:top-[56%] max-md:right-[-2%] max-md:w-[26%] md:top-[55%] md:left-[53%] md:w-[11%]"
          width="237"
          height="229"
          aria-hidden="true"
        />
        <img
          src="/timeline/soccer-circle.svg"
          alt=""
          className="absolute z-above max-md:top-[78%] max-md:right-[28%] max-md:w-[9%] md:top-[66%] md:right-[18%] md:w-[3%]"
          width="83"
          height="83"
          aria-hidden="true"
        />
        <img
          src="/timeline/soccer-shape-1.svg"
          alt=""
          className="absolute z-above max-md:top-[68%] max-md:right-[50%] max-md:w-[4%] md:top-[60%] md:right-[33%] md:w-[1.5%]"
          width="31"
          height="76"
          aria-hidden="true"
        />
        <img
          src="/timeline/soccer-shape-2.svg"
          alt=""
          className="absolute z-above max-md:hidden md:top-[64%] md:right-[44%] md:w-[8%]"
          width="160"
          height="148"
          aria-hidden="true"
        />
        <img
          src="/timeline/soccer-shape-3.svg"
          alt=""
          className="absolute z-above max-md:top-[78.5%] max-md:right-[51%] max-md:w-[16%] md:top-[66.5%] md:right-[41%] md:w-[7%]"
          width="184"
          height="211"
          aria-hidden="true"
        />
        <img
          src="/timeline/soccer-shape-4.svg"
          alt=""
          className="absolute z-above max-md:top-[87.75%] max-md:right-[18%] max-md:w-[27%] md:top-[76%] md:right-[62%] md:w-[12%]"
          width="292"
          height="184"
          aria-hidden="true"
        />
        <img
          src="/timeline/soccer-trace.svg"
          alt=""
          className="absolute z-above max-md:top-[83.5%] max-md:right-[-5%] max-md:w-[44%] md:top-[69%] md:right-[49%] md:w-[18%]"
          width="409"
          height="432"
          aria-hidden="true"
        />
        <img
          src="/timeline/soccer-circle-2.svg"
          alt=""
          className="absolute z-above max-md:top-[84%] max-md:left-[45%] max-md:w-[3%] md:top-[70%] md:left-[19%] md:w-[1%]"
          width="31"
          height="75"
          aria-hidden="true"
        />

        {/* Winding Timeline SVG Path */}
        <div
          ref={pathContainerRef}
          className="c-homepage-timeline_path md:aspect-[1944.2/6151.5]"
        >
          <TimelinePaths
            desktopMainPathRef={desktopMainPathRef}
            desktopSecondaryPathRef={desktopSecondaryPathRef}
            desktopShadowPathRef={desktopShadowPathRef}
            mobileMainPathRef={mobileMainPathRef}
            mobileSecondaryPathRef={mobileSecondaryPathRef}
            mobileShadowPathRef={mobileShadowPathRef}
          />
        </div>

        {/* PART 3: Timeline End (Binoculars, Unicycle, Basketball Player, Clouds & Hills) */}
        <div ref={timelineEndRef} className="c-homepage-timeline_end">
          <RiveAnimation
            src="binoculars"
            autoplay
            reveal
            className="pointer-events-none absolute z-10 aspect-[1789/1438] max-md:right-[-16%] max-md:bottom-[2%] max-md:w-[73%] md:right-[-8.5%] md:bottom-[2%] md:w-[60%]"
          />
          <RiveAnimation
            src="unicycle"
            autoplay
            reveal
            className="pointer-events-none absolute z-10 aspect-[1694/1594] max-md:bottom-[8%] max-md:left-[16%] max-md:w-[70%] md:bottom-[5%] md:left-[22%] md:w-[54%]"
          />
          <RiveAnimation
            src="basketball-player"
            autoplay
            reveal
            className="pointer-events-none absolute z-10 aspect-[1608/1608] max-md:bottom-[4%] max-md:left-[-15%] max-md:w-[58%] md:bottom-[10%] md:left-[-5%] md:w-[44%]"
          />
          <img
            src="/timeline/timeline_end_cloud_1.svg"
            alt=""
            className="c-homepage-timeline_end_cloud_1"
            width="517"
            height="104"
            aria-hidden="true"
          />
          <img
            src="/timeline/timeline_end_cloud_2.svg"
            alt=""
            className="c-homepage-timeline_end_cloud_2"
            width="247"
            height="58"
            aria-hidden="true"
          />
          <img
            src="/timeline/timeline_end_cloud_3.svg"
            alt=""
            className="c-homepage-timeline_end_cloud_3"
            width="372"
            height="75"
            aria-hidden="true"
          />
          <img
            src="/timeline/timeline_end_cloud_4.svg"
            alt=""
            className="c-homepage-timeline_end_cloud_4"
            width="173"
            height="40"
            aria-hidden="true"
          />
          <img
            src="/timeline/timeline_end_cloud_5.svg"
            alt=""
            className="c-homepage-timeline_end_cloud_5"
            width="108"
            height="34"
            aria-hidden="true"
          />
          <img
            src="/timeline/timeline-end-green-back.svg"
            alt=""
            className="c-homepage-timeline_end_green_back z-0"
            width="1512"
            height="432"
            aria-hidden="true"
          />
          <img
            src="/timeline/timeline-end-green-middle.svg"
            alt=""
            className="c-homepage-timeline_end_green_middle z-20"
            width="1512"
            height="215"
            aria-hidden="true"
          />
          <img
            src="/timeline/timeline-end-green-front.svg"
            alt=""
            className="c-homepage-timeline_end_green_front z-30"
            width="1512"
            height="285"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );
};
