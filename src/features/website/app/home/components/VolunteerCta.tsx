import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";
import { CtaButton } from "./CtaButton";
import { EASE, fadeBottom, fadeLeft, fadeRight,  reveal, stagger } from "@/shared/website_shared_cmpnts/animations/WebsiteAnimations";
import { ManyCows } from "@/assets/website_assets";

export function VolunteerCta() {
  const herdRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);
  const inView = useInView(herdRef, { once: true, amount: 0.2 });
  const [loaded, setLoaded] = useState(false);
  const show = inView && loaded;
  useEffect(() => {
    if (imgRef.current?.complete) setLoaded(true);
  }, []);
  const VOLUNTEER = {
    title: ["Become a Gau Sevak", "Volunteer With Us"],
    description:"Join our family of compassionate volunteers and make a real difference in the lives of India's native cows. At Sri Sri Gaushala, your time and care help provide a loving home, support sustainable farming, and uplift rural communities. Whether you can lend a hand daily or just a few hours a week, every act of service counts.",
    buttonLabel: "Volunteer now",
    buttonTo: '/volunteer',
    image: ManyCows,
  };
  return (
    <div className="flex flex-col items-center justify-center pt-4 font-saira sm:pt-6">
      <motion.div variants={stagger(0.14)} {...reveal} className="max-w-[90%] text-center">
        <h2 className="text-3xl font-bold leading-tight text-[#67aa41] sm:text-4xl lg:text-5xl">
          {VOLUNTEER.title.map((l) => (
            <motion.span key={l} variants={fadeLeft} className="block">
              {l}
            </motion.span>
          ))}
        </h2>
        <motion.p variants={fadeRight} className="mt-5 font-gotham text-sm leading-relaxed text-[#67aa41] sm:text-[13px]">
          {VOLUNTEER.description}
        </motion.p>
        <motion.div variants={fadeBottom} className="mt-8">
          <CtaButton to={VOLUNTEER.buttonTo}>{VOLUNTEER.buttonLabel}</CtaButton>
        </motion.div>
      </motion.div>

      <motion.div
        ref={herdRef}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={show ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
        transition={{ duration: 1.2, ease: EASE }}
        style={{ transformOrigin: "50% 100%" }}
        className="relative mt-4 w-full max-w-[100%] transform-gpu overflow-hidden will-change-transform [backface-visibility:hidden]"
      >
        <img
          ref={imgRef}
          src={VOLUNTEER.image}
          alt=""
          decoding="async"
          onLoad={() => setLoaded(true)}
          className="h-[250px] w-full object-cover object-center sm:h-[350px] lg:h-[400px]"
        />
        <div className="absolute inset-x-0 bottom-0 h-2/6 bg-gradient-to-t from-[#fffcf6] to-transparent" />
      </motion.div>
    </div>
  );
}
