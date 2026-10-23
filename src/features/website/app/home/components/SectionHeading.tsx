import type { ReactNode } from "react";
import { motion } from "motion/react";
import { fadeBottom } from "@/shared/website_shared_cmpnts/animations/WebsiteAnimations";

/** Gold centered section title that rises in when scrolled to. */
export function SectionHeading({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <motion.h2
      variants={fadeBottom}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.6 }}
      className={`text-center font-saira text-3xl font-bold text-[#d2a45e] sm:text-4xl ${className}`}
    >
      {children}
    </motion.h2>
  );
}
