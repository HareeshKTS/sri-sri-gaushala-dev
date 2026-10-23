import { motion, type Variants } from "motion/react";
import { EalderCow, FarmerImage,PreserveBreed } from "@/assets/website_assets";
import { EASE, fadeBottom, fadeRight, stagger } from "@/shared/website_shared_cmpnts/animations/WebsiteAnimations";

interface Activity {
  id: string;
  title: string;
  description: string;
  image: string;
}
const cardVariants = (reverse: boolean) => {
  const dir = reverse ? 1 : -1;

  const image: Variants = {
    hidden: { opacity: 0, x: dir * 60 },
    show: { opacity: 1, x: 0, transition: { duration: 0.8, ease: EASE } },
  };
  const bar: Variants = {
    hidden: { clipPath: reverse ? "inset(0% 0% 0% 100%)" : "inset(0% 100% 0% 0%)" },
    show: { clipPath: "inset(0% 0% 0% 0%)", transition: { duration: 0.9, ease: EASE, delay: 0.25 } },
  };
  const text: Variants = {
    hidden: { opacity: 0, x: -dir * 24 },
    show: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE, delay: 0.6 } },
  };
  return { image, bar, text };
};



export function KeyActivities() {
  const ACTIVITIES: Activity[] = [
    {
      id: "support-farmers",
      title: "Support Farmers",
      description: "We gift purebred cows and Nandi bulls to rural and tribal farmers, helping them revive traditional farming and become self-reliant. Training in natural, cow-based agriculture is also provided",
      image: FarmerImage,
    },
    {
      id: "elderly-cows",
      title: "Care for Elderly Cows",
      description: "Elderly and injured cows receive special attention, with dedicated spaces for rest, nutrition, and gentle care.",
      image: EalderCow,
    },
    {
      id: "indigenous-breeds",
      title: "Preserve Indigenous Breeds",
      description: "We provide a safe, natural home for Indian cows like Gir, Kankrej, Sahiwal, Ongole, and more. Our cows are never forced for milk or labor—they live freely and are cared for with love",
      image: PreserveBreed,
    },
  ];
  return (
    <section className="py-6 md:py-10 font-saira">
      {/* heading: the two lines rise one after the other */}
      <motion.h2
        variants={stagger(0.15)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.6 }}
        className={`text-center text-3xl font-bold leading-tight sm:text-4xl`}
      >
        <motion.span variants={fadeBottom} className={`block text-[#d2a45e]`}>Gausewa</motion.span>
        <motion.span variants={fadeRight} className={`block text-[#67aa41]`}>Our Key Activities</motion.span>
      </motion.h2>

      <div className="mx-auto mt-8 flex max-w-[90%] flex-col gap-8  sm:mt-12 sm:gap-10 lg:gap-12 ">
        {ACTIVITIES.map((activity, i) => {
          const reverse = i % 2 === 1
          const v = cardVariants(reverse)
          return (
            <motion.div
              key={activity.id}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.35 }}
              className={`group flex flex-col  md:items-center gap-0 ${reverse ? "md:flex-row-reverse" : "md:flex-row"}`}
            >
              <motion.div
                variants={v.image}
                className="relative z-10 h-48 w-full overflow-hidden rounded-none shadow-md sm:h-56 md:h-[150px] md:w-[300px] md:shrink-0 md:rounded-xl lg:h-[180px] lg:w-[340px]"
              >
                <img
                  src={activity?.image}
                  alt={activity?.title}
                  loading="lazy"
                  className="h-full w-full object- transition-transform duration-700 ease-out scale-105 hover:scale-108"
                />
              </motion.div>

              <motion.div
                variants={v.bar}
                className={[
                  "min-w-0 flex-1 rounded-none px-5 py-4 md:rounded-none md:py-7",
                  reverse
                    ? "bg-gradient-to-l from-[#b76e00]/50 via-[#efdcc0]/80 to-transparent md:-ml-[calc(50vw-50%)] md:-mr-6 md:pl-6 md:pr-14 md:text-right"
                    : "bg-gradient-to-r from-[#b76e00]/50 via-[#efdcc0]/80 to-transparent md:-ml-6 md:-mr-[calc(50vw-50%)] md:pl-14 md:pr-6",
                ].join(" ")}
              >
                <motion.div variants={v.text} className={reverse ? "md:ml-auto md:max-w-2xl" : "md:max-w-2xl"}>
                  <h3 className={`text-base font-bold sm:text-lg text-[#67aa41]`}>{activity?.title}</h3>
                  <p className={`mt-1 text-xs leading-relaxed sm:text-[14px] text-[#67aa41]`}>{activity?.description}</p>
                </motion.div>
              </motion.div>
            </motion.div>
          )
        })}
      </div>
    </section>
  );
}
