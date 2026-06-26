import {
  motion,
  type TargetAndTransition,
} from "motion/react";

interface WavyTextProps {
  text: string;
  color?: string;
  duration?: number;
  frequency?: number;
  thickness?: number;
}

export const WavyText = ({
  text,
  color = "#8ed462",
  duration = 3,
  frequency = 1,
  thickness = 18,
}: WavyTextProps) => {
  const waveWidth = 108 / frequency;

  const waveSvg = `url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 108 34.4'><path d='M0,9.8c27,0,27,14.7,54,14.7s27-14.7,54-14.7' fill='none' stroke='black' stroke-width='${thickness}'/></svg>")`;

  return (
    <span className="relative inline-block text-inherit">
      {text}
      <motion.span
        className="absolute pointer-events-none"
        style={{
          left: "0.08em",
          right: "-0.05em",
          bottom: "-32px",
          height: "35px",
          backgroundColor: color,
          WebkitMaskImage: waveSvg,
          maskImage: waveSvg,
          WebkitMaskRepeat: "repeat-x",
          maskRepeat: "repeat-x",
          WebkitMaskSize: `${waveWidth}px 35px`,
          maskSize: `${waveWidth}px 35px`,
        }}
        animate={
          {
            WebkitMaskPosition: [
              "0px 0px",
              `-${waveWidth}px 0px`,
            ],
            maskPosition: [
              "0px 0px",
              `-${waveWidth}px 0px`,
            ],
          } as TargetAndTransition
        }
        transition={{
          duration,
          ease: "linear",
          repeat: Infinity,
        }}
      />
    </span>
  );
};
