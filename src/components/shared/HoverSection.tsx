import {
  AnimatedButton,
  type TAnimatedButton,
} from "@/components/shared/AnimatedButton";
import { RiveAnimation } from "@/components/shared/RiveAnimation";
import { motion } from "motion/react";
import { useState, type ReactNode } from "react";

export type THoverSectionProps = {
  title?: string;
  text?: string;
  button?: TAnimatedButton;
  leftImage?: ReactNode;
  rightImage?: ReactNode;
};

export const HoverSection = ({
  title,
  text = "Get in touch with us to run your next qualitative research project smoothly.",
  button,

  leftImage = <RiveAnimation src="trumpeter-1" width={320} height={320} />,
  rightImage = <RiveAnimation src="trumpeter-2" width={320} height={320} />,
}: THoverSectionProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Merge default purple button styles with custom props
  const defaultButton: TAnimatedButton = {
    to: "/contact",
    button: {
      text: "Get in Touch",
      bgColor: "bg-[#aa3bff] hover:bg-[#922ce6] text-white",
    },
    arrow: {
      bgColor: "bg-[#aa3bff]",
    },
  };

  const finalButton: TAnimatedButton = {
    ...defaultButton,
    ...button,
    button: {
      ...defaultButton.button,
      ...button?.button,
    },
    arrow: {
      ...defaultButton.arrow,
      ...button?.arrow,
    },
  };

  return (
    <div className="relative flex flex-col items-center justify-center min-h-[75vh] px-6 py-16 overflow-hidden w-full text-center">
      {/* Background/Surrounding content */}
      <div className="relative z-10 flex flex-col items-center max-w-2xl gap-8">
        {title && (
          <h2 className="text-4xl md:text-6xl font-bold tracking-tight text-[#2c2e2a] leading-tight">
            {title}
          </h2>
        )}
        <p className="heading-md text-[#2B2E2A] max-w-[calc(0.25rem*150)] text-center text-balance">
          {text}
        </p>

        {/* Hover trigger container around AnimatedButton */}
        {finalButton.button?.text && (
          <div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="mt-4"
          >
            <AnimatedButton {...finalButton} />
          </div>
        )}
      </div>

      {/* Left Column (Renders ReactNode) */}
      {leftImage && (
        <div className="absolute left-[-50px] md:left-[5%] bottom-[-20px] md:bottom-[10%] z-5 pointer-events-none transition-all duration-700 ease-out">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              x: -100,
            }}
            animate={
              isHovered
                ? { opacity: 1, scale: 1, x: 0 }
                : {
                    opacity: 0,
                    scale: 0.8,
                    x: -100,
                  }
            }
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          >
            {leftImage}
          </motion.div>
        </div>
      )}

      {/* Right Column (Renders ReactNode) */}
      {rightImage && (
        <div className="absolute right-[-50px] md:right-[5%] bottom-[-20px] md:bottom-[10%] z-5 pointer-events-none transition-all duration-700 ease-out">
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8,
              x: 100,
            }}
            animate={
              isHovered
                ? { opacity: 1, scale: 1, x: 0 }
                : {
                    opacity: 0,
                    scale: 0.8,
                    x: 100,
                  }
            }
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 15,
            }}
          >
            {rightImage}
          </motion.div>
        </div>
      )}
    </div>
  );
};
