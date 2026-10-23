import { motion } from "motion/react";
import { CtaButton } from "./CtaButton";
import { AboutUsBannerImage } from "@/assets/website_assets";
import { fadeRight,reveal, slideIn, stagger } from "@/shared/website_shared_cmpnts/animations/WebsiteAnimations";

export function WhoWeAre() {
  const WHO_WE_ARE = {
    image: AboutUsBannerImage,
    title: "Who we are",
    subtitle: ["Where Every Cow is Family,", "Every Life is Sacred"],
    description:
      "Nestled in the heart of India's spiritual landscape, Sri Sri Gaushala is more than a shelter-it is a sanctuary of compassion, tradition and service. Our journey began in 2002 with just two cows and a simple intention: to protect, nurture, and celebrate India's indigenous cow breeds. Over the years, this humble beginning blossomed into a vibrant mission, now home to over 1,600 cows from 19 different native breeds, each living freely and lovingly cared for in a natural, peaceful environment",
    quote: "Caring for cows is not just a tradition–it is a path to peace, prosperity and spiritual fulfillment.",
    buttonLabel: "Know more",
    buttonTo: '/about-us',
  };
  return (
    <section className="relative overflow-hidden py-8 md:py-14">
      <div className="relative mx-auto flex flex-col-reverse items-center gap-8 px-4 md:grid md:max-w-[85%] md:grid-cols-[1.2fr_1fr] lg:gap-14">
          <motion.div variants={slideIn(-1)} {...reveal} className="overflow-hidden rounded-xl shadow-md">
            <img src={WHO_WE_ARE.image} alt="" loading="lazy" decoding="async" className="h-72 w-full object-cover sm:h-96 md:h-[440px]" />
          </motion.div>

        <motion.div variants={stagger(0.15)} {...reveal} className="flex flex-col">
          <motion.h2 variants={fadeRight} className="font-saira text-center md:text-left  font-bold text-[#b76e00] text-4xl">
            {WHO_WE_ARE.title}
          </motion.h2>
          <motion.h3 variants={fadeRight} className="mt-3 font-saira text-2xl font-bold text-center md:text-left leading-tight text-[#67aa41] sm:text-2xl">
            {WHO_WE_ARE.subtitle.map((l) => (
              <span key={l} className="block">
                {l}
              </span>
            ))}
          </motion.h3>
          <motion.p variants={fadeRight} className="mt-5 font-gotham text-sm text-center md:text-left leading-relaxed text-[#67aa41] sm:text-[14px]">
            {WHO_WE_ARE.description}
          </motion.p>
          <motion.p variants={fadeRight} className="mt-3 md:mt-5 text-center font-saira text-sm italic leading-relaxed text-[#67aa41]">
            “{WHO_WE_ARE.quote}”
          </motion.p>
          <motion.div variants={fadeRight} className="mt-4 flex justify-center md:justify-end">
            <CtaButton to={WHO_WE_ARE.buttonTo}>{WHO_WE_ARE.buttonLabel}</CtaButton>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
