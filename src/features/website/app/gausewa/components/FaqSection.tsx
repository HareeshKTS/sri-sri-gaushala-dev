import { motion } from "motion/react";
import { Minus, Plus } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { fadeBottom, fadeLeft } from "@/shared/animations/WebsiteAnimations";

interface Faq {
  id: string;
  question: string;
  answer: string;
}
export function FaqSection() {

  const FAQS_DATA: Faq[] = [
    {
      id: "what-is",
      question: "What is Sri Sri Gaushala?",
      answer:
        "Sri Sri Gaushala is a community-focused initiative dedicated to the protection, care, and promotion of indigenous Indian cow breeds. We also promote the benefits of A2 milk and natural cow-based products.",
    },
    {
      id: "contribute",
      question: "How can I contribute to Sri Sri Gaushala?",
      answer:
        "You can volunteer your time, sponsor the care of a cow, or donate fodder and supplies. Reach out to our team to find the option that suits you.",
    },
    {
      id: "adopt",
      question: "Can I adopt a cow at Sri Sri Gaushala?",
      answer:
        "Yes. You can sponsor a cow's care and visit it at the gaushala. Contact us to learn about the adoption process.",
    },
    {
      id: "visits",
      question: "Are school or college visits allowed?",
      answer:
        "Yes, group visits are welcome. Please contact us in advance so we can arrange a suitable time and guide.",
    },
  ];


  return (
    <section className="relative overflow-hidden ">
      <div aria-hidden className="pointer-events-none absolute -right-24 top-40 h-72 w-72 rounded-full bg-[#fffcf6] blur-2xl" />

      <motion.h2
        variants={fadeLeft}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        className={`relative text-center  text-2xl font-bold text-[#d19f5b] sm:text-4xl px-3xl`}
      >
        Frequently Asked Questions
      </motion.h2>
      <Accordion
        type="single"
        collapsible
        defaultValue={FAQS_DATA[0]?.id}
        className="relative mx-auto mt-3 max-w-[85%] border-t border-[#034006]/30 sm:mt-8 pt-6"
      >
        {FAQS_DATA.map((faq, i) => (
          // each row rises in, slightly after the one above it
          <motion.div
            key={faq.id}
            variants={fadeBottom}
            custom={i * 0.08}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <AccordionItem value={faq.id} className="border-b border-[#034006]/30 last:border-b">
              <AccordionTrigger
                className="group items-center gap-4 py-4 text-sm font-bold text-neutral-900 transition-colors hover:no-underline data-[state=open]:text-[#c2670a] sm:text-[15px] [&>svg]:!hidden"
              >
                {faq.question}
                {/* + rotates away while − rotates in (both stacked in the same spot) */}
                <span className="relative ml-auto size-5 shrink-0">
                  <Plus className="absolute inset-0 size-5 cursor-pointer text-black transition-all duration-300 group-data-[state=open]:rotate-90 group-data-[state=open]:opacity-0" />
                  <Minus className="absolute inset-0 size-5 -rotate-90 cursor-pointer text-black opacity-0 transition-all duration-300 group-data-[state=open]:rotate-0 group-data-[state=open]:opacity-100" />
                </span>
              </AccordionTrigger>
              <AccordionContent className="px-3 md:px-6 text-[13px] leading-relaxed text-neutral-700">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          </motion.div>
        ))}
      </Accordion>
      <div className="w-full h-8 bg-gradient-to-b from-[#f6efdc]/70 to-[#fff]" />
    </section>
  );
}
