import { motion } from "motion/react";
import { EASE } from "./animations/WebsiteAnimations";
interface Props {
  image:any
  badge: string;
  quote: string;
  IsVideo?:boolean
}
const HeroBannerSection = ({ image, badge, quote, IsVideo=false}: Props) => {
  return (
    <section className="relative w-full overflow-hidden">
      {
        IsVideo?(
          <motion.video
            src={image}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            initial={{ scale: 1.14 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.3, ease: EASE }}
            aria-hidden="true"
            className="pointer-events-none block h-[300px] w-full object-cover sm:h-[75vh] lg:h-[85vh]"
          />
        ):(
            <motion.img
              src={image}
              alt="banner_image"
              initial={{ scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.8, ease: EASE }}
              className="min-h-[300px] w-full object-cover sm:h-[75vh] lg:h-[90vh]"
            />
        )
      }
      <motion.div
        initial={{ x: -140, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.4 }}
        className="banner-badge-clip absolute left-0 top-4 bg-[#b76e00] font-saira py-1.5 pl-5 pr-10 text-lg font-medium uppercase tracking-wide text-white sm:top-6 sm:py-2.5 sm:pl-8 sm:pr-14 sm:text-2xl"
      >
        {badge}
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: EASE, delay: 0.7 }}
        className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent px-6 pb-3 pt-14 font-gotham sm:pb-5"
      >
        <p className="mx-auto max-w-lg text-center text-xs leading-snug text-white md:max-w-lg md:text-sm lg:max-w-xl lg:text-lg">
          “{quote}”
        </p>
      </motion.div>
    </section>
  );
};
export default HeroBannerSection;
