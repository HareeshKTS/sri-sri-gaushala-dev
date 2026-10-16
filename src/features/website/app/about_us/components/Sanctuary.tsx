import { Link } from "react-router";
import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { SanctuaryVideo } from "@/assets/website_assets";
import { fadeLeft, reveal, stagger } from "@/shared/animations/WebsiteAnimations";
 
function Sanctuary() {
  const reduce = useReducedMotion();

  return (
    <section className="relative mt-6">
      <video
        src={SanctuaryVideo}
        className="w-full h-[350px] lg:h-[750px] object-cover"
        autoPlay={!reduce}
        preload="metadata"
        muted
        loop
        playsInline
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_bottom,rgba(46,125,50,0)_17%,rgba(46,125,50,0)_17%,#000)]" />
      <motion.div variants={stagger(0.15)} {...reveal} className="absolute bottom-10 md:bottom-16 px-3 sm:px-6 md:px-24">
        <motion.div variants={fadeLeft}>
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }} className="inline-block">
            <Link
              to={'/visit_us'}
              className="group inline-flex items-center gap-3 sm:gap-5 bg-[#68ad45] px-2 sm:px-6 py-2 sm:py-3 text-white transition-colors hover:bg-[#579638] my-6"
            >
              <span className="font-saira sm:text-lg tracking-wide">VISIT US</span>
              <ArrowUpRight
                size={28}
                strokeWidth={2}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </Link>
          </motion.div>
        </motion.div>
        <p className="text-xl sm:text-3xl lg:text-5xl 2xl:text-7xl tracking-[2px] sm:tracking-[8px] text-white font-sansation uppercase font-bold">
          <motion.span variants={fadeLeft} className="block">A Sanctuary of Compassion,</motion.span>
          <motion.span variants={fadeLeft} className="block">Culture and Care</motion.span>
        </p>
      </motion.div>
    </section>
  );
}

export default Sanctuary;
