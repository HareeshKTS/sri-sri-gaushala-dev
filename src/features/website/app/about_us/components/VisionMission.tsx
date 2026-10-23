import { motion, type Variants } from "motion/react";
import { EASE, fadeLeft, fadeRight, reveal } from "@/shared/website_shared_cmpnts/animations/WebsiteAnimations";

const visionArray = [
  { text: "Establish Gau Purna Sthapana to strengthen the nation." },
  { text: "Promote Gau Samvardhan, Sanrakshan, and Panchgavya Research Development Centers.." },
  { text: "Develop 10,000 indigenous cows (Gaudhan) in India." },
  { text: "Enable all ashrams to start Gaushalas, with donations directed to one SSGT." },
  { text: "Focus on developing 38 different breeds in various Art of Living ashrams." },
  { text: "Promote Cow and Eco Tourism." },
];

const MissionArray = [
  { text: "Implement Panchgavya-based measures to enhance ethical values, mental, and physical health in humans." },
  { text: "Encourage farmers to adopt Panchgavya-based Sri Sri Natural Farming and indigenous cow breeding." },
  { text: "Guide farmers to breed and maintain at least one indigenous cow in their families.." },
  { text: "Achieve worldwide welfare of human society by promoting a lifestyle rooted in Indian values and traditions." },
  { text: "Ensure the Gaushala operates in a sustainable and profitable manner." },
];

const cardVariants = (dir: -1 | 1): Variants => ({
  hidden: { opacity: 0, x: dir * 60 },
  show: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASE, staggerChildren: 0.1, delayChildren: 0.25 },
  },
});

const bulletVariants: Variants = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { type: "spring", stiffness: 400, damping: 18 } },
};

interface CardProps {
  title: string;
  items: { text: string }[];
  gapClass: string;
  dir: -1 | 1;
  varients?:any
}

function ListCard({ title, items, gapClass, dir,varients }: CardProps) {
  return (
    <motion.div
      variants={cardVariants(dir)}
      {...reveal}
      className="shadow-[0_7px_29px_rgba(100,100,111,0.2)] rounded-md sm:w-1/2 px-3 sm:px-8 py-6 pb-0"
    >
      <motion.p variants={fadeLeft} className="text-[#67aa41] font-saira font-bold pb-4 text-2xl">
        {title}
      </motion.p>
      {items.map((item) => (
        <motion.div key={item.text} variants={varients} className={`flex ${gapClass} mb-3 font-sansation text-sm sm:text-sm`}>
          <motion.span variants={bulletVariants} className="mt-1.5 block h-3 w-3 shrink-0">
            <span className="block h-full w-full rotate-45 bg-[#68ad45]" />
          </motion.span>
          {item.text}
        </motion.div>
      ))}
    </motion.div>
  );
}
function VisionMission() {
  return (
    <section className="flex flex-col sm:flex-row justify-between gap-6 px-4 md:px-8 xl:px-8 2xl:px-28 pt-8 pb-5">
      <ListCard title="Our Vision" items={visionArray} gapClass="gap-3 sm:gap-8" dir={-1} varients={fadeLeft}/>
      <ListCard title="Our Mission" items={MissionArray} gapClass="gap-3 sm:gap-6" dir={1} varients={fadeRight} />
    </section>
  );
}

export default VisionMission;
