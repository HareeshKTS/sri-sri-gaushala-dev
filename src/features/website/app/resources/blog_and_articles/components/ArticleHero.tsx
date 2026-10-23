import { motion } from "motion/react";
import { EASE, fadeBottom, stagger } from "@/shared/website_shared_cmpnts/animations/WebsiteAnimations";

interface Props {
  image: string;
  title: string;
}

/** Article banner: photo + the title over a dark fade at the bottom. */
export function ArticleHero({ image, title }: Props) {
  return (
    <section className="relative w-full overflow-hidden">
      <motion.img
        src={image}
        alt=""
        initial={{ scale: 1}}
        animate={{ scale: 1 }}
        transition={{ duration: 1.6, ease: EASE }}
        className="h-[260px] w-full object-cover sm:h-[360px] lg:h-[520px]"
      />

      <motion.div
        variants={stagger(0.15, 0.3)}
        initial="hidden"
        animate="show"
        className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent px-5 pb-5 pt-24 sm:pb-6"
      >
        <motion.h1
          variants={fadeBottom}
          className="mx-auto font-sansation max-w-[85%] text-center  text-lg font-medium uppercase leading-tight text-white [text-shadow:0_2px_8px_rgba(0,0,0,0.5)] sm:text-3xl lg:text-5xl"
        >
          {title}
        </motion.h1>
      </motion.div>
    </section>
  );
}


