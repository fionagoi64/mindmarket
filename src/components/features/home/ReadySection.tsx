import { RiveAnimation } from "@/components/shared/RiveAnimation";
import { FEATURES } from "@/constants/feature";
import { useState } from "react";
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

export const ReadySection = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`group relative block rounded-b-lg bg-green py-fluid-4xl ${
        isHovered ? "is-active" : ""
      }`}
    >
      <div className="container relative z-10">
        <div className="grid grid-cols-6 gap-gutter md:grid-cols-16">
          <div className="col-span-full md:col-start-2 md:col-span-14">
            <p className="heading-2xl text-center">
              Ready when
              <br />
              you are!
            </p>
            <div className="mt-fluid-2xl flex flex-col items-center gap-6">
              <p className="heading-xs max-w-100 text-center text-balance md:max-w-140">
                Whether you’re launching in one market or ten, we’re here to
                make your research simple, smart, and human from day one. Let’s
                talk about your next project.
              </p>
              <Link
                to="/contact-us"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
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
            <div className="body-md mt-60 grid gap-gutter max-md:hidden md:grid-cols-3">
              {FEATURES.map((item) => (
                <div
                  key={item}
                  className="text-center"
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute top-[-100vh] bottom-0 left-0 w-[56%] overflow-clip max-md:hidden">
        <div className="sticky top-0 flex h-screen w-full items-end">
          <RiveAnimation
            src="pop-up-girl"
            autoplay
            className={`aspect-[1979/1570] transform transition-transform duration-300 ease-(--ease-smooth) md:w-[56vw] ${
              isHovered ? "translate-y-[12%]" : "translate-y-[100%]"
            }`}
          />
        </div>
      </div>
    </div>
  );
};
