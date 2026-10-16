import { motion } from "motion/react";
import { fadeBottom, fadeLeft, fadeRight, reveal, stagger } from "@/shared/animations/WebsiteAnimations";

function WhoWeAre() {
  return (
    <section className="mt-8 w-[90%] mx-auto  ">
      <motion.div variants={stagger(0.15)} {...reveal} className="text-center">
        <motion.p variants={fadeBottom} className="font-saira text-3xl md:text-4xl 2xl:text-6xl font-bold text-[#d2a45e]">
          Who we are
        </motion.p>
        <motion.p
          variants={fadeLeft}
          className="font-saira text-2xl md:text-4xl 2xl:text-6xl font-bold text-[#67aa41] py-2 pt-4 "
        >
          Where Every Cow is Family, Every Life is Sacred
        </motion.p>

        <motion.div variants={fadeRight} className="text-justify sm:text-center pt-4 ">
          <p className="font-sansation text-sm md:text-lg text-[#67aa41]">
            Nestled in the heart of India’s spiritual landscape, Sri Sri Gaushala is more than a shelter-it is a sanctuary of compassion, tradition and service.
            Our journey began in 2002 with just two cows and a simple intention: to protect, nurture, and celebrate India’s indigenous cow breeds.
            Over the years, this humble beginning blossomed into a vibrant mission, now home to over 1,600 cows from 19 different native breeds, each living freely and lovingly cared for in a natural, peaceful environment
          </p>
        </motion.div>

        <motion.p variants={fadeLeft} className="font-saira italic text-sm md:text-lg text-[#67aa41] pt-6">
          “Caring for cows is not just a tradition-it is a path to peace, prosperity and spiritual fulfillment.”
        </motion.p>
      </motion.div>
    </section>
  );
}

export default WhoWeAre;
