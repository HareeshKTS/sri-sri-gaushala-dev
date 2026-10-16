import { motion } from "motion/react";
import { BlogBannerImage } from "@/assets/website_assets";
import { EASE } from "@/shared/animations/WebsiteAnimations";

interface Props {
  badge: string;
  quote: string;
}
const HeroBanner = ({badge, quote }: Props) => {
  return (
    <section className="relative w-full overflow-hidden">
      {/* slow zoom-out on load */}
      <motion.img
        src={BlogBannerImage}
        alt=""
        initial={{ scale: 1.14 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.3, ease: EASE }}
        className="min-h-[300px] w-full object-cover sm:h-[75vh] lg:h-[85vh]"
      />

      {/* badge slides in from the left */}
      <motion.div
        initial={{ x: -140, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
        className={`banner-badge-clip absolute left-0 top-4 bg-[#b76e00] uppercase font-saira py-1.5 pl-5 pr-10 text-lg font-medium tracking-wide text-white sm:top-6 sm:py-2.5 sm:pl-8 sm:pr-14 sm:text-2xl`}
      >
        {badge}
      </motion.div>

      {/* quote fades up last */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.5 }}
        className="absolute inset-x-0 bottom-0 bg-gradient-to-t font-gotham from-black/70 via-black/30 to-transparent px-6 pb-3 pt-14 sm:pb-5"
      >
        <p className="mx-auto max-w-lg text-center  leading-snug text-white  text-xs md:text-sm lg:text-lg md:max-w-lg lg:max-w-xl">
          “{quote}”
        </p>
      </motion.div>
    </section>
  )
}
export default HeroBanner
