import { useState } from "react";
import { ChevronDown } from "lucide-react";
import {
  motion,
  AnimatePresence,
} from "motion/react";

type TFAQItem = {
  question: string;
  answer: string;
};

type TFAQAccordionProps = {
  faqs: TFAQItem[];
};

export const FAQAccordion = ({
  faqs,
}: TFAQAccordionProps) => {
  const [openIndex, setOpenIndex] = useState<
    number | null
  >(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className="mt-16 border-t border-black/10">
      <h3 className="text-2xl font-bold mt-8 mb-6">
        Frequently Asked Questions
      </h3>
      <div className="flex flex-col gap-2">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border-b border-black/10 pb-4"
            >
              <button
                type="button"
                onClick={() =>
                  setOpenIndex(
                    isOpen ? null : index,
                  )
                }
                className="w-full flex justify-between items-center text-left py-3 font-semibold text-lg hover:text-[#aa3bff] transition-colors duration-300"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transform transition-transform duration-300 shrink-0 ml-4 ${
                    isOpen
                      ? "rotate-180 text-[#aa3bff]"
                      : "text-black/50"
                  }`}
                />
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{
                      height: 0,
                      opacity: 0,
                    }}
                    animate={{
                      height: "auto",
                      opacity: 1,
                    }}
                    exit={{
                      height: 0,
                      opacity: 0,
                    }}
                    transition={{
                      duration: 0.25,
                      ease: "easeInOut",
                    }}
                    className="overflow-hidden"
                  >
                    <p className="pt-2 text-black/70 leading-relaxed">
                      {faq.answer}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </div>
  );
};
