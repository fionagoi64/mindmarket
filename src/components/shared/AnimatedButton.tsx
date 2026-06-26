import { cn } from "@/utils/cn";
import { ChevronRight } from "lucide-react";
import {
  AnimatePresence,
  motion,
} from "motion/react";
import { useState } from "react";
import { Link, type To } from "react-router-dom";

export type TAnimatedButton = {
  to?: To;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  form?: string;
  onClick?: React.MouseEventHandler<
    HTMLButtonElement | HTMLAnchorElement
  >;
  button?: {
    bgColor?: string;
    text: string;
  };
  arrow?: {
    bgColor?: string;
  };
};

export const AnimatedButton = ({
  to,
  type,
  disabled,
  form,
  onClick,
  button,
  arrow,
}: TAnimatedButton) => {
  const [isHovered, setIsHovered] =
    useState(false);

  const btnBg = button?.bgColor || "bg-white";
  const btnText = button?.text || "Button Text";
  const arrowBg = arrow?.bgColor || "bg-white";
  const arrowPosition = isHovered
    ? "leading"
    : "trailing";

  const content = (
    <>
      <motion.span
        layout
        transition={{
          type: "spring",
          stiffness: 420,
          damping: 32,
        }}
        className="select-none px-2 text-(--button-font-size) font-medium"
      >
        {btnText}
      </motion.span>

      <AnimatePresence
        mode="popLayout"
        initial={false}
      >
        <motion.div
          key={arrowPosition}
          layout
          initial={{
            scale: 0.3,
            rotate: -35,
            opacity: 0,
            x: isHovered ? 18 : -18,
          }}
          animate={{
            scale: 1,
            rotate: 0,
            opacity: 1,
            x: 0,
          }}
          exit={{
            scale: 0.3,
            rotate: 35,
            opacity: 0,
            x: isHovered ? -18 : 18,
          }}
          transition={{
            type: "spring",
            stiffness: 480,
            damping: 30,
          }}
          className={cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-full",
            arrowBg,
          )}
        >
          <ChevronRight
            className="h-4 w-4"
            strokeWidth={3}
          />
        </motion.div>
      </AnimatePresence>
    </>
  );

  const commonProps = {
    onMouseEnter: () =>
      !disabled && setIsHovered(true),
    onMouseLeave: () =>
      !disabled && setIsHovered(false),
    onFocus: () =>
      !disabled && setIsHovered(true),
    onBlur: () =>
      !disabled && setIsHovered(false),
    className: cn(
      "group relative inline-flex min-h-15 w-auto items-center justify-center gap-2 overflow-hidden rounded-base p-2.5 transition-opacity",
      btnBg,
      isHovered ? "flex-row-reverse" : "flex-row",
      disabled
        ? "opacity-50 cursor-not-allowed"
        : "cursor-pointer",
    ),
  };

  return (
    <motion.div
      layout
      whileTap={
        disabled ? undefined : { scale: 0.98 }
      }
      transition={{
        type: "spring",
        stiffness: 420,
        damping: 32,
      }}
    >
      {to ? (
        <Link
          to={to}
          onClick={
            onClick as React.MouseEventHandler<HTMLAnchorElement>
          }
          {...commonProps}
        >
          {content}
        </Link>
      ) : (
        <button
          type={type || "submit"}
          disabled={disabled}
          form={form}
          onClick={
            onClick as React.MouseEventHandler<HTMLButtonElement>
          }
          {...commonProps}
        >
          {content}
        </button>
      )}
    </motion.div>
  );
};
