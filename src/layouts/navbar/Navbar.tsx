import { Logo } from "@/layouts/navbar/Logo";
import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { menuItem } from "@/constants/menuItem";
import { GetQuoteButton } from "@/layouts/navbar/GetQuoteButton";

export const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState<
    (typeof menuItem)[number] | null
  >(null);

  const mainNavItems = menuItem.slice(0, 4);

  return (
    <div className="fixed top-4 left-0 right-0 z-50">
      <div className="mx-auto w-full max-w-300 px-4 flex items-stretch gap-5 h-15 md:h-16.5">
        <nav
          className="relative flex flex-1 bg-white justify-between rounded-base px-4 items-stretch"
          onMouseLeave={() => {
            setActiveMenu(null);
          }}
        >
          <Logo />

          <div className="flex gap-2.5">
            {/* DESKTOP LINKS */}
            <menu className="hidden md:flex items-stretch gap-2">
              {mainNavItems.map((item) => (
                <li
                  key={item.name}
                  className="flex items-stretch relative"
                  onMouseEnter={() => {
                    setActiveMenu(item);
                  }}
                  onMouseLeave={() => {
                    setActiveMenu(null);
                  }}
                >
                  <button
                    type="button"
                    className="relative z-10 flex items-center gap-1 px-4 transition-colors font-medium h-full group cursor-pointer"
                  >
                    <motion.div
                      className="absolute inset-y-3 inset-x-0 bg-cream rounded-full -z-10"
                      initial={{
                        scale: 0,
                        opacity: 0,
                      }}
                      animate={
                        activeMenu?.name === item.name
                          ? {
                              scale: 1,
                              opacity: 1,
                            }
                          : {
                              scale: 0,
                              opacity: 0,
                            }
                      }
                      transition={{
                        type: "spring",
                        bounce: 0.3,
                        duration: 0.5,
                      }}
                    />
                    {item.name}

                    {item.children && item.children.length > 0 && (
                      <motion.div
                        animate={{
                          rotate: activeMenu?.name === item.name ? 180 : 0,
                        }}
                        className="flex items-center justify-center ml-1"
                      >
                        <ChevronDown size={16} />
                      </motion.div>
                    )}
                  </button>
                </li>
              ))}
            </menu>

            {/* ACTION BUTTONS & HAMBURGER */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                className="hidden sm:flex md:hidden items-center bg-cream font-medium rounded-base px-4 py-2 text-sm cursor-pointer"
              >
                Get a quote
              </button>

              <button
                type="button"
                aria-label="Open menu"
                onMouseEnter={() => {
                  setActiveMenu(null);
                }}
                className="c-menu-desktop_button"
              >
                <span className="sr-only">Open menu</span>
                <span className="c-icon c-menu-desktop_button_icon -open">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 22 22"
                    className="svg-menu-burger"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path fill="currentColor" d="M3 7h16M3 14h16" />
                  </svg>
                </span>
                <span className="c-icon c-menu-desktop_button_icon -close">
                  <svg
                    width="1em"
                    height="1em"
                    viewBox="0 0 22 22"
                    className="svg-menu-chevron"
                    aria-hidden="true"
                    focusable="false"
                  >
                    <path fill="none" d="m4.8 7.9 6.2 6.2 6.2-6.2" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </nav>

        <div className="hidden md:flex items-stretch">
          <GetQuoteButton />
        </div>
      </div>
    </div>
  );
};
