import { motion } from "motion/react";
import { CountUp } from "./CountUp";
import { EASE, fadeBottom, fadeLeft, popIn, stagger } from "@/shared/animations/WebsiteAnimations";
import { home_banner } from "@/assets/website_assets";

export function HomeHero() {
  const HERO = {
    image: home_banner,
    title: ["A PEACEFUL HOME FOR", "INDIA'S INDIGENOUS COWS"],
    description:"A peaceful home for India's native cows—where every life is cherished, every tradition honored and service meets love. Welcome to Sri Sri Gaushala, a sanctuary of compassion and care.",
    stats: [
      { value: 20, suffix: "", label: "Pure Indian Breeds" },
      { value: 80, suffix: "+", label: "Dedicated Gausewaks" },
      { value: 25, suffix: "+", label: "Hectares Of Grazing Land" },
      { value: 1600, suffix: "+", label: "Indigenous Cows" },
      { value: 24, suffix: "", label: "Years Of Service" },
    ],
  };
  return (

<section className="px-3 pt-3 sm:px-4">
      <div className="relative isolate flex h-[380px] md:h-[85vh] flex-col overflow-hidden rounded-xs md:rounded-sm font-sansation">
    {/* Background image */}
    <motion.img
      src={home_banner}
      alt=""
      initial={{ scale: 1.16 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.3, ease: EASE }}
      className="absolute inset-0 -z-20 h-full w-full object-cover"
    />

    {/* Optional overlay for text readability */}
    <div className="absolute inset-0 -z-10 bg-black/25" />

    {/* Banner content */}
        <div className="flex flex-1 flex-col justify-end gap-8 p-5 sm:gap-12">
          {/* Title and description slide in from left */}
          <motion.div
            variants={stagger(0.2, 0.3)}
            initial="hidden"
            animate="show"
          >
            <h1 className="font-gotham text-2xl font-semibold uppercase leading-tight text-white sm:text-4xl lg:text-5xl">
              {HERO.title.map((line, index) => (
                <motion.span
                  key={line}
                  variants={fadeBottom}
                  transition={{ delay: index * 0.15 }}
                  className="block"
                >
                  {line}
                </motion.span>
              ))}
            </h1>

            <motion.p
              variants={fadeLeft}
              className="mt-3 max-w-md font-sansation text-xs leading-relaxed text-white/90 sm:text-sm lg:max-w-lg"
            >
              {HERO.description}
            </motion.p>
          </motion.div>

          {/* Stats slide in from left */}
          <motion.div
            variants={stagger(0.2, 0.5)}
            initial="hidden"
            animate="show"
            className="hidden grid-cols-2 gap-2 sm:gap-3 md:grid md:grid-cols-5"
          >
            {HERO.stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={fadeLeft}
                className={`rounded-md border-2 border-dashed border-white/80 bg-white/60 px-2 py-3 text-center backdrop-blur-[2px] sm:py-4 ${i === HERO.stats.length - 1
                    ? "col-span-2 md:col-span-1"
                    : ""
                  }`}
              >
                <p className="font-saira text-2xl font-bold text-[#1d7a22] sm:text-3xl lg:text-4xl">
                  <CountUp value={stat.value} suffix={stat.suffix} />
                </p>

                <p className="mt-0.5 font-saira text-[12px] font-bold text-[#1d7a22] sm:text-[11px]">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
  </div>
      <motion.div
        variants={stagger(0.1, 0.3)}
        initial="hidden"
        animate="show"
        className="grid grid-cols-2 gap-2 sm:gap-3 md:grid-cols-5 mt-6 md:hidden"
      >
        {HERO.stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            variants={popIn}
            className={`rounded-md border-2 border-dashed border-[#1d7a22]/80 bg-[#1d7a22]/30 px-2 py-3 text-center backdrop-blur-[2px] sm:py-4 ${i === HERO.stats.length - 1
                ? "col-span-2 md:col-span-1" : ""} `}
          >
            <p className="font-saira text-2xl font-bold text-[#1d7a22] sm:text-3xl lg:text-4xl">
              <CountUp value={stat.value} suffix={stat.suffix} />
            </p>

            <p className="mt-0.5 font-saira text-[12px] font-bold text-[#1d7a22] sm:text-[11px]">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </motion.div>
</section>
  );
}
