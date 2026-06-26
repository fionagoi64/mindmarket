import { AnimatedButton } from "@/components/shared/AnimatedButton";
import { WavyText } from "@/components/shared/WavyText";
import {
  CONTACT_EMAIL,
  CONTACT_LOCATIONS,
} from "@/constants/footer";
import { menuItem } from "@/constants/menuItem";
import { ROUTE } from "@/constants/route";

export const Footer = () => {
  const col1 = menuItem.slice(0, 5);
  const col2 = menuItem.slice(5);

  return (
    <footer className="flex min-h-svh flex-col justify-between overflow-hidden rounded-[35px] bg-yellow py-[clamp(3.5rem,5vw,5rem)] gap-y-12 pt-[clamp(3.5rem, 2.9783rem + 2.6087vw, 5rem)] pb-9 p-5">
      {/* 1. TOP SECTION: CTA & NAV */}
      <div className="grid grid-cols-6 md:grid-cols-16 gap-gutter">
        <div className="col-span-full md:col-start-2 md:col-span-14 grid md:grid-cols-14 gap-y-10 ">
          {/* Left: CTA */}
          <div className="md:col-span-6 xl:col-span-4">
            <p className="max-md:text-[clamp(1.5rem, 1.413rem + .4348vw, 1.75rem)] max-w-[450px] tracking-[-0.06em] font-medium leading-[1.2]">
              Have a project in mind?? We'd love
              to hear what you're working on and
              show you how we can help. Whether
              you're exploring a new market or
              launching your next product, we're
              ready when you are.
            </p>
            <div className="mt-4">
              <AnimatedButton
                button={{ text: "Get a quote" }}
                to={ROUTE.CONTACT_US}
                arrow={{ bgColor: "bg-yellow" }}
              />
            </div>
          </div>

          {/* Right: Navigation */}
          <nav className="md:col-span-6 md:col-start-9 xl:col-span-4 xl:col-start-11 grid grid-cols-2 gap-x-gutter">
            <ul className="flex flex-col gap-y-2">
              {col1.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="hover:underline"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-y-2">
              {col2.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.path}
                    className="hover:underline"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <li>
                <button className="cursor-pointer text-left hover:underline">
                  Cookie Preferences
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* 2. BRANDING & CONTACT */}
      <div className="grid grid-cols-6 md:grid-cols-16 gap-gutter mt-auto">
        <div className="col-span-full md:col-start-2 md:col-span-14 border-t lg:border-none border-charcoal/20 pt-10 grid lg:grid-cols-14 gap-y-12">
          <div className="lg:col-span-7">
            <h2 className="font-medium leading-[0.95] tracking-[-0.06em] text-[clamp(3.6rem,12vw,10.8rem)]">
              Let’s <br />
              <WavyText text="Connect" />
            </h2>
          </div>

          <div className="lg:col-span-4 lg:col-start-11 flex flex-col gap-y-6">
            {CONTACT_LOCATIONS.map((loc) => (
              <p
                key={loc.city}
                className="text-charcoal/60"
              >
                <strong className="text-black">
                  {loc.city}
                </strong>
                <br />
                <a
                  href={loc.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {loc.addressLine1}
                </a>
                <br />
                <a
                  href={loc.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {loc.addressLine2}
                </a>
                <br />
                {loc.hours}
              </p>
            ))}

            <strong className="text-black">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline "
              >
                {CONTACT_EMAIL}
              </a>
            </strong>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-6 md:grid-cols-16 gap-gutter mt-auto">
        <div className="col-span-full md:col-start-2 md:col-span-14 border-t lg:border-none border-charcoal/20 pt-10 grid lg:grid-cols-14 gap-y-12">
          <div className="lg:col-span-7">
            <span className="text-sm opacity-60 lg:col-span-7">
              Copyright ©{" "}
              {new Date().getFullYear()}{" "}
              MindMarket International
            </span>
          </div>

          <div className="lg:col-span-4 lg:col-start-11 flex justify-between">
            <img
              src="/images/esomar-logo.webp"
              alt="ESOMAR"
              className="h-6 w-auto grayscale hover:grayscale-0 transition-all"
            />
            <a
              href="https://linkedin.com"
              className="text-sm font-medium hover:underline"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
