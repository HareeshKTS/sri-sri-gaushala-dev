import { motion } from "motion/react";
import { CtaButton } from "./CtaButton";
import { fadeLeft,  reveal, slideIn, stagger } from "@/shared/website_shared_cmpnts/animations/WebsiteAnimations";
import { Sri_Sri_Image } from "@/assets/website_assets";

export function DonateSection() {
  const DONATE = {
    title: "Donate & Support",
    subtitle: "Every Donation Creates a Ripple of Goodness",
    description:
      "Your generosity helps us provide a loving home for over 1,600 indigenous cows, empower rural and tribal farmers, and nurture a sustainable future. Every donation supports cow care, traditional farming, and the well-being of our dedicated Gau Sevaks. Together, we can preserve India's heritage, protect our cows, and uplift communities—one act of kindness at a time.",
    highlight: "Join us in this journey of service and tradition. Donate today to make a real difference.",
    quote:
      "The cow is the symbol of Ahimsa (non-violence) and the giver of life. She is essential to agriculture, bringing prosperity and enhancing the health of the land.",
    buttonLabel: "Donate now",
    buttonTo:'/donate',
    image: Sri_Sri_Image,
  };
  return (
    <section className="relative overflow-hidden py-6 md:py-10">
      <div aria-hidden className="pointer-events-none absolute -left-24 top-10 h-64 w-64 rounded-full bg-white" />
      <div aria-hidden className="pointer-events-none absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-white" />

      <div className="relative mx-auto grid max-w-6xl items-stretch gap-8 px-4 md:grid-cols-2 lg:gap-14">
        <motion.div variants={stagger(0.14)} {...reveal} className="flex flex-col">
          <motion.h2 variants={fadeLeft} className="text-center font-saira text-3xl font-bold text-[#b76e00] sm:text-4xl">
            {DONATE.title}
          </motion.h2>
          <motion.h3 variants={fadeLeft} className="mt-3 text-center font-saira text-base font-bold text-[#67aa41] sm:text-lg">
            {DONATE.subtitle}
          </motion.h3>
          <motion.p variants={fadeLeft} className="mt-5 font-gotham text-sm leading-relaxed text-[#67aa41] sm:text-[13px]">
            {DONATE.description}
          </motion.p>
          <motion.p variants={fadeLeft} className="mt-4 font-gotham text-sm font-bold leading-relaxed text-[#67aa41] sm:text-[13px]">
            {DONATE.highlight}
          </motion.p>
          <motion.p variants={fadeLeft} className="mt-6 text-center font-saira text-xs italic leading-relaxed text-[#67aa41]">
            “{DONATE.quote}”
          </motion.p>
          <motion.div variants={fadeLeft} className="mt-auto pt-4 flex justify-center md:justify-start">
            <CtaButton to={DONATE.buttonTo}>{DONATE.buttonLabel}</CtaButton>
          </motion.div>
        </motion.div>
        <motion.div variants={slideIn(1)} {...reveal} className="overflow-hidden rounded-4xl shadow-md">
          <img src={DONATE.image} alt="" loading="lazy" decoding="async" className="h-80 w-full object-cover sm:h-120  md:min-h-20" />
        </motion.div>
      </div>
    </section>
  );
}
