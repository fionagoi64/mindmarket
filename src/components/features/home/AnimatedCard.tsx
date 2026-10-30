import { motion, useInView, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { Link } from "react-router-dom";

type TCardColor = "red" | "yellow" | "blue" | "pink";

type TAnimatedCard = {
  title: string;
  desc: string;
  to: string;
  buttonLabel?: string;
  color?: TCardColor;
};

const COLOR_MAP: Record<TCardColor, { bgVar: string; btnClass: string }> = {
  red: { bgVar: "var(--color-red)", btnClass: "button-red" },
  yellow: { bgVar: "var(--color-yellow)", btnClass: "button-yellow" },
  blue: { bgVar: "var(--color-blue)", btnClass: "button-blue" },
  pink: { bgVar: "var(--color-pink)", btnClass: "button-pink" },
};

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

export const AnimatedCard = ({
  title,
  desc,
  to,
  buttonLabel = "Services",
  color = "red",
}: TAnimatedCard) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const { bgVar, btnClass } = COLOR_MAP[color];

  return (
    <motion.div
      ref={ref}
      style={{ y }}
      className="c-homepage-timeline-cards"
    >
      <div className={`c-tile-animated ${isInView ? "is-inview" : ""}`}>
        <div
          className="c-tile-animated_bg -colored"
          style={{ "--color-bg": bgVar } as React.CSSProperties}
        />
        <div className="c-tile-animated_bg -white" />
        <div className="c-tile-animated_inner">
          <h3 className="c-tile-animated_title">{title}</h3>
          <p className="c-tile-animated_description">{desc}</p>
          <div className="c-tile-animated_cta">
            <Link
              to={to}
              className={`c-button ${btnClass} button-primary`}
            >
              <span className="c-button_icon -hover">
                <span className="c-icon">
                  <ArrowRightSvg />
                </span>
              </span>
              <span className="c-button_label">{buttonLabel}</span>
              <span className="c-button_icon -default">
                <span className="c-icon">
                  <ArrowRightSvg />
                </span>
              </span>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};
