import { ROUTE } from "@/constants/route";
import { Logo } from "@/layouts/navbar/Logo";
import {
  AnimatePresence,
  motion,
} from "motion/react";
import {
  ChevronDown,
  ChevronRight,
  Equal,
  X,
} from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { menuItem } from "@/constants/menuItem";
import { GetQuoteButton } from "@/layouts/navbar/GetQuoteButton";

const getSlug = (name: string) =>
  name.toLowerCase().replace(/\s+/g, "-");

const dropdownVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: 20,
    transition: { duration: 0.2, ease: "easeIn" },
  },
} as const;

const accordionVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.3 },
  },
  exit: {
    height: 0,
    opacity: 0,
    transition: { duration: 0.2 },
  },
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.06,
      delayChildren: 0.1,
    },
  },
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
      ease: [0.22, 1, 0.36, 1],
    },
  },
} as const;

export const Navbar = () => {
  const isMobile = useMediaQuery(
    "(max-width: 1023px)",
  );

  const [activeMenu, setActiveMenu] = useState<
    (typeof menuItem)[number] | null
  >(null);

  const [mobileOpen, setMobileOpen] =
    useState(false);
  const [hamburgerHover, setHamburgerHover] =
    useState(false);

  // Reset state during render when switching between mobile/desktop breakpoints
  const [prevIsMobile, setPrevIsMobile] =
    useState(isMobile);
  if (isMobile !== prevIsMobile) {
    setPrevIsMobile(isMobile);
    setMobileOpen(false);
    setActiveMenu(null);
    setHamburgerHover(false);
  }

  const mainNavItems = menuItem.slice(0, 4);
  const extraNavItems = menuItem.slice(4, 7);
  const mobileNavItems = menuItem.slice(0, 6);
  const contactItem = menuItem[6];

  const handleNavItemClick = (
    item: (typeof menuItem)[number],
    e: React.MouseEvent,
  ) => {
    if (
      isMobile &&
      item.children &&
      item.children.length > 0
    ) {
      e.preventDefault();
      setActiveMenu(
        activeMenu?.name === item.name
          ? null
          : item,
      );
    } else {
      setMobileOpen(false);
      setActiveMenu(null);
    }
  };

  const handleHamburgerClick = () => {
    if (!isMobile) return;
    setMobileOpen(!mobileOpen);
    setActiveMenu(null);
  };

  return (
    <div className="fixed top-4 left-0 right-0 z-50">
      <div className="mx-auto w-full max-w-300 px-4 flex items-stretch gap-5 h-15 lg:h-16.5">
        <nav
          className="relative flex flex-1 bg-white justify-between rounded-base px-4 items-stretch"
          onMouseLeave={() => {
            if (!isMobile) {
              setActiveMenu(null);
              setHamburgerHover(false);
            }
          }}
        >
          <Logo to={ROUTE.HOME} />

          <div className="flex gap-2.5">
            {/* DESKTOP LINKS */}
            <menu className="hidden lg:flex items-stretch gap-2">
              {mainNavItems.map((item) => (
                <li
                  key={item.name}
                  className="flex items-stretch relative"
                  onMouseEnter={() => {
                    if (!isMobile) {
                      setActiveMenu(item);
                      setHamburgerHover(false);
                    }
                  }}
                >
                  <Link
                    to={item.path}
                    className="relative z-10 flex items-center gap-1 px-4 transition-colors font-medium h-full group"
                  >
                    <motion.div
                      className="absolute inset-y-3 inset-x-0 bg-cream rounded-full -z-10"
                      initial={{
                        scale: 0,
                        opacity: 0,
                      }}
                      animate={
                        activeMenu?.name ===
                        item.name
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

                    {item.children &&
                      item.children.length >
                        0 && (
                        <motion.div
                          animate={{
                            rotate:
                              activeMenu?.name ===
                              item.name
                                ? 180
                                : 0,
                          }}
                          className="flex items-center justify-center ml-1"
                        >
                          <ChevronDown
                            size={16}
                          />
                        </motion.div>
                      )}
                  </Link>
                </li>
              ))}
            </menu>

            {/* ACTION BUTTONS & HAMBURGER */}
            <div className="flex items-center gap-3">
              <Link
                to={ROUTE.CONTACT_US}
                className="hidden sm:flex lg:hidden items-center bg-cream font-medium rounded-base px-4 py-2 text-sm"
              >
                Get a quote
              </Link>

              <button
                onClick={handleHamburgerClick}
                onMouseEnter={() => {
                  if (!mobileOpen && !isMobile) {
                    setHamburgerHover(true);
                    setActiveMenu(null);
                  }
                }}
                className={`h-10 w-10 bg-primary rounded-full flex items-center justify-center transition-all active:scale-90 
                ${!isMobile ? "cursor-default pointer-events-none lg:pointer-events-auto" : "cursor-pointer"}`}
              >
                {mobileOpen ? (
                  <X size={20} />
                ) : hamburgerHover &&
                  !isMobile ? (
                  <ChevronDown size={20} />
                ) : (
                  <Equal size={20} />
                )}
              </button>
            </div>
          </div>

          <AnimatePresence>
            {/* DESKTOP EXTRA DROPDOWN */}
            {hamburgerHover &&
              !isMobile &&
              !activeMenu && (
                <motion.div
                  key="extra-menu"
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-0 w-full pt-2 hidden lg:block"
                >
                  <div className="bg-white shadow-2xl rounded-2xl p-3 flex gap-6 border border-gray-100">
                    {extraNavItems.map((item) => (
                      <Link
                        key={item.name}
                        to={item.path}
                        className="group relative flex-1 aspect-4/5 max-w-[370px] rounded-xl overflow-hidden max-h-[435px] bg-gray-100"
                        onClick={() =>
                          setHamburgerHover(false)
                        }
                      >
                        <img
                          src={`/images/${getSlug(item.name)}.avif`}
                          alt={item.name}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />

                        <div className="absolute bottom-4 left-4 right-4 flex justify-between items-center ">
                          <span className="font-medium text-sm">
                            {item.name}
                          </span>

                          <div className="bg-white/20 backdrop-blur-md h-7 w-7 rounded-full flex items-center justify-center">
                            <ChevronRight
                              size={14}
                            />
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              )}

            {/* DESKTOP MEGA MENU */}
            {!isMobile &&
              activeMenu?.children && (
                <motion.div
                  key={activeMenu.name}
                  variants={dropdownVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className="absolute top-full left-0 w-full pt-2 hidden lg:block"
                >
                  <div className="bg-white shadow-2xl rounded-2xl p-8 flex gap-2.5 border border-gray-100">
                    <Link
                      to={activeMenu.path}
                      className="group relative flex-1 aspect-4/5 max-w-[370px] rounded-xl overflow-hidden max-h-[435px] bg-gray-100"
                    >
                      <img
                        src={`/images/${getSlug(activeMenu.name)}.avif`}
                        alt={activeMenu.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />

                      <div className="absolute bottom-5 left-5 right-5 flex justify-between items-center">
                        <span className="text-lg font-bold">
                          {activeMenu.name}
                        </span>

                        <div className="bg-white h-10 w-10 rounded-full flex items-center justify-center">
                          <ChevronRight
                            size={20}
                          />
                        </div>
                      </div>
                    </Link>

                    <div className="flex-1">
                      <motion.ul
                        variants={
                          containerVariants
                        }
                        initial="hidden"
                        animate="visible"
                        className="grid grid-cols-2 gap-x-8 gap-y-3"
                      >
                        {activeMenu.children.map(
                          (child) => (
                            <motion.li
                              key={child.slug}
                              variants={
                                itemVariants
                              }
                            >
                              <Link
                                to={`${activeMenu.path}/${child.slug}`}
                                className="flex items-center justify-between py-2 border-b border-gray-50 hover:translate-x-1 transition-all group"
                                onClick={() =>
                                  setActiveMenu(
                                    null,
                                  )
                                }
                              >
                                {child.name}

                                <ChevronRight
                                  size={14}
                                  className="opacity-0 group-hover:opacity-100"
                                />
                              </Link>
                            </motion.li>
                          ),
                        )}
                      </motion.ul>
                    </div>
                  </div>
                </motion.div>
              )}

            {/* MOBILE MENU */}
            {mobileOpen && isMobile && (
              <motion.div
                variants={dropdownVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="absolute top-full left-0 w-full pt-2 lg:hidden flex flex-col gap-2"
              >
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-white rounded-base p-2 border border-gray-100 overflow-hidden"
                >
                  {mobileNavItems.map((item) => {
                    const isExpanded =
                      activeMenu?.name ===
                      item.name;
                    return (
                      <motion.div
                        key={item.name}
                        variants={itemVariants}
                        className="border-b last:border-0 border-gray-50"
                      >
                        <Link
                          to={item.path}
                          className="flex items-center justify-between px-4 py-4 font-semibold rounded-lg"
                          onClick={(e) =>
                            handleNavItemClick(
                              item,
                              e,
                            )
                          }
                        >
                          {item.name}
                          {item.children &&
                            item.children.length >
                              0 && (
                              <motion.div
                                animate={{
                                  rotate:
                                    isExpanded
                                      ? 180
                                      : 0,
                                }}
                              >
                                <ChevronDown
                                  size={18}
                                />
                              </motion.div>
                            )}
                        </Link>

                        <AnimatePresence>
                          {isExpanded &&
                            item.children && (
                              <motion.ul
                                variants={
                                  accordionVariants
                                }
                                initial="hidden"
                                animate="visible"
                                exit="exit"
                                className="overflow-hidden mx-2 mb-2 rounded-base bg-gray-50/50"
                              >
                                <motion.div
                                  variants={
                                    containerVariants
                                  }
                                  initial="hidden"
                                  animate="visible"
                                >
                                  {item.children.map(
                                    (child) => (
                                      <li
                                        key={
                                          child.slug
                                        }
                                      >
                                        <Link
                                          to={`${item.path}/${child.slug}`}
                                          className="block px-6 py-3 text-sm"
                                          onClick={() =>
                                            setMobileOpen(
                                              false,
                                            )
                                          }
                                        >
                                          {
                                            child.name
                                          }
                                        </Link>
                                      </li>
                                    ),
                                  )}
                                </motion.div>
                              </motion.ul>
                            )}
                        </AnimatePresence>
                      </motion.div>
                    );
                  })}
                </motion.div>
                <motion.div
                  variants={itemVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-white rounded-base p-2 border border-gray-100"
                >
                  <Link
                    to={contactItem.path}
                    className="flex items-center justify-between px-4 py-4 font-bold group"
                    onClick={() =>
                      setMobileOpen(false)
                    }
                  >
                    {contactItem.name}
                    <div className="bg-yellow p-1 rounded-full group-active:translate-x-1 transition-transform">
                      <img
                        src="/images/contact.svg"
                        alt="contact"
                        className="h-10 w-10"
                      />
                    </div>
                  </Link>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </nav>

        <div className="hidden lg:flex items-stretch">
          <GetQuoteButton />
        </div>
      </div>
    </div>
  );
};
