import type { RefObject } from "react";

type TTimelinePaths = {
  desktopMainPathRef: RefObject<SVGPathElement | null>;
  desktopSecondaryPathRef: RefObject<SVGPathElement | null>;
  desktopShadowPathRef: RefObject<SVGPathElement | null>;
  mobileMainPathRef: RefObject<SVGPathElement | null>;
  mobileSecondaryPathRef: RefObject<SVGPathElement | null>;
  mobileShadowPathRef: RefObject<SVGPathElement | null>;
};

export const TimelinePaths = ({
  desktopMainPathRef,
  desktopSecondaryPathRef,
  desktopShadowPathRef,
  mobileMainPathRef,
  mobileSecondaryPathRef,
  mobileShadowPathRef,
}: TTimelinePaths) => (
  <>
    <svg aria-hidden="true" focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1944.2 6151.5" className="absolute inset-0 h-full w-full max-md:hidden" id="desktop-svg" preserveAspectRatio="none">
      <path ref={desktopMainPathRef} fill="none" stroke="#8ED462" strokeLinecap="round" strokeWidth="500" d="M1085 250c-868 126.5-961 907-29.5 1453S1397 3353 733 3318s-606-718-53.6-808" id="main-path" />
      <linearGradient id="path-gradient" x1="1020.4" x2="1550.5" y1="2766.3" y2="3624.5" gradientTransform="matrix(1 0 0 -1 -242 5807.4)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#8ED462" />
        <stop offset=".3" stopColor="#378e43" />
        <stop offset=".7" stopColor="#439745" />
        <stop offset="1" stopColor="#8ED462" />
      </linearGradient>
      <path ref={desktopShadowPathRef} fill="none" stroke="url(#path-gradient)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="500" d="M1055.5 1703C1987 2249 1397 3353 733 3318" opacity="0" id="shadow-path" style={{ transition: "opacity 0.5s ease-in-out" }} />
      <path ref={desktopSecondaryPathRef} fill="none" stroke="#8ED462" strokeLinecap="round" strokeWidth="500" d="M679.3 2510c552.3-90 1689.3 743.4 475.6 1689-985 767.5-234 1313-234 1702.5" id="secondary-path" style={{ zIndex: 3 }} />
    </svg>
    <svg aria-hidden="true" focusable="false" id="mobile-svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 847.9 4471" preserveAspectRatio="none" className="mr-[-64%] ml-[-50%] max-md:block max-md:aspect-[847/4471] sm:mr-[-54%] sm:ml-[-45%] md:hidden">
      <path ref={mobileMainPathRef} id="mobile-main-path" fill="none" stroke="#8ED462" strokeWidth="250" strokeLinecap="round" d="M508,131.1c-474,11.9-357.9,671.3-49,1079.1,308.8,407.8,263,1206.2-79.6,1206.2s-335.9-596.5-5.8-603.4" />
      <linearGradient id="mobile-shadow-grad" gradientUnits="userSpaceOnUse" x1="208.1258" y1="2481.6191" x2="627.7878" y2="2783.1492" gradientTransform="matrix(1 0 0 -1 0 4470.0039)">
        <stop offset="0" stopColor="#8ED462" />
        <stop offset="0.3317" stopColor="#368D32" />
        <stop offset="0.7356" stopColor="#439739" />
        <stop offset="1" stopColor="#8ED462" />
      </linearGradient>
      <path ref={mobileShadowPathRef} id="mobile-shadow-path" fill="none" stroke="url(#mobile-shadow-grad)" strokeWidth="250" strokeLinecap="round" strokeLinejoin="round" opacity="0" d="M459,1210.2c308.8,407.8,265.5,1206.2-81.5,1206.2" style={{ transition: "opacity 0.5s ease-in-out" }} />
      <path ref={mobileSecondaryPathRef} id="mobile-overlap-end" fill="none" stroke="#8ED462" strokeWidth="250" strokeLinecap="round" d="M373.6,1813c1.9,0,3.9-0.1,5.8-0.1c335.8,0,514.9,555.2,112.5,1261.5c-326.6,573.2-77.6,980.7-77.6,1271.6" />
    </svg>
  </>
);
