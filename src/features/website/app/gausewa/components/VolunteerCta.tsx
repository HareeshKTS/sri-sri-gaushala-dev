import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ManyCows } from "@/assets/website_assets";
import { EASE, VIEWPORT, fadeBottom, fadeLeft, fadeRight, popIn, stagger } from "@/shared/animations/WebsiteAnimations";

export function VolunteerCta() {
  const VOLUNTEER_DATA = {
    title1: "Become a Gau Sevak",
    title2: "Volunteer With Us",
    description: "Join our family of compassionate volunteers and make a real difference in the lives of India's native cows. At Sri Sri Gaushala, your time and care help provide a loving home, support sustainable farming, and uplift rural communities. Whether you can lend a hand daily or just a few hours a week, every act of service counts.",
    buttonLabel: "Volunteer now",
    buttonHref: "#volunteer",
    image: ManyCows,
  };

  // Reveal the herd photo only when it is BOTH scrolled into view AND fully loaded,
  // so it never fades in empty and then pops.
  const herdRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const inView = useInView(herdRef, { once: true, amount: 0.2 });
  const [loaded, setLoaded] = useState(false);
  const showHerd = inView && loaded;

  useEffect(() => {
    // image may already be cached → onLoad won't fire
    if (imgRef.current?.complete) setLoaded(true);
  }, []);

  return (
    <div id="volunteer" className="pt-4 sm:pt-8 font-saira  flex flex-col items-center justify-center">
      <motion.div
        variants={stagger(0.14)}
        initial="hidden"
        whileInView="show"
        viewport={VIEWPORT}
        className=" text-center max-w-[90%]"
      >
        <h2 className={`text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl text-[#67aa41]`}>
          <motion.span variants={fadeLeft} className="block">{VOLUNTEER_DATA.title1}</motion.span>
          <motion.span variants={fadeRight} className="block">{VOLUNTEER_DATA.title2}</motion.span>
        </h2>
        <motion.p variants={fadeBottom} className={`mt-5 max-w-[100%] text-xs leading-relaxed sm:text-[13px] text-[#67aa41] font-gotham`}>{VOLUNTEER_DATA.description}</motion.p>

        <motion.div
          variants={popIn}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="mt-8 inline-block"
        >
          <Button
            asChild
            className="group h-9 cursor-pointer touchable-opacity rounded-none bg-[#5ba233] px-6 text-xs font-medium uppercase tracking-wide text-white shadow-md hover:bg-[#4a8a28]"
          >
            <p>
              {VOLUNTEER_DATA.buttonLabel}
              <ArrowUpRight className="ml-1 size-4 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </p>
          </Button>
        </motion.div>
      </motion.div>

      <motion.div
        ref={herdRef}
        initial={{ opacity: 0, y: 24 }}
        animate={showHerd ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
        transition={{ duration: 0.9, ease: EASE }}
        className="relative mt-4 w-full max-w-[100%] overflow-hidden transform-gpu will-change-transform"
      >
        <img
          ref={imgRef}
          src={VOLUNTEER_DATA.image}
          alt=""
          decoding="async"
          onLoad={() => setLoaded(true)}
          className="h-[170px] w-full object-cover object-center sm:h-[240px] lg:h-[320px]"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/6 bg-gradient-to-t from-[#fffcf6] to-transparent" />
      </motion.div>
    </div>
  )
}