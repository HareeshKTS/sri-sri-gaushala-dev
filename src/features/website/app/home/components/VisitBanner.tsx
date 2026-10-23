import { motion } from "motion/react";
import { CtaButton } from "./CtaButton";

import { GaushalaPlantVideo } from "@/assets/website_assets";
import { fadeBottom, reveal, stagger } from "@/shared/website_shared_cmpnts/animations/WebsiteAnimations";

export function VisitBanner() {
  const VISIT_BANNER = {
    video: GaushalaPlantVideo,
    title: "WHERE COMPASSION MEETS SUSTAINABLE FARMING",
    buttonLabel: "Visit us",
    buttonTo: "visit-us",
  };
  return (
    <section className="relative w-full overflow-hidden py-4">
      {/* Background video */}
      <video
        src={VISIT_BANNER.video}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        aria-hidden="true"
        className="h-[320px] w-full object-cover sm:h-[430px] lg:h-[580px] pointer-events-none"
      />

      {/* Dark gradient overlay */}
      <div className="absolute inset-x-0 bottom-4 bg-gradient-to-t from-black/85 via-black/45 to-transparent pb-4 pt-28 sm:pb-6">
        <motion.div
          variants={stagger(0.14)}
          {...reveal}
          className="mx-auto max-w-6xl px-4 sm:px-8 lg:px-14"
        >
          <motion.div variants={fadeBottom}>
            <CtaButton to={VISIT_BANNER.buttonTo}>
              {VISIT_BANNER.buttonLabel}
            </CtaButton>
          </motion.div>

          <motion.h2
            variants={fadeBottom}
            className="mt-3 max-w-3xl font-sansation text-2xl font-bold uppercase leading-tight text-white sm:text-4xl lg:text-5xl"
          >
            {VISIT_BANNER.title}
          </motion.h2>
        </motion.div>
      </div>
    </section>
  );
}