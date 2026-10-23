import { motion } from "motion/react";
import {
  GurudevBgImage,
  GururudevCenterImage1,
  GururudevCenterImage2,
  GururudevCenterImage3,
  GururudevLeftImage,
  GururudevRightImage,
} from "@/assets/website_assets";
import { fadeBottom, fadeLeft, fadeRight, popIn, reveal, slideIn, stagger } from "@/shared/website_shared_cmpnts/animations/WebsiteAnimations";

function Inspiration() {
  return (
    <section className="w-[95%] relative max-w-[1400px] mx-auto mt-3 md:mt-16 2xl:max-w-[1700px] py-4">
      <div className="absolute bottom-0 z-10">
        <img className="w-full" src={GurudevBgImage} alt="" aria-hidden loading="lazy" decoding="async" />
      </div>

      <div
        className="relative z-20
      grid
      grid-cols-1
      lg:grid-cols-[250px_minmax(0,1fr)_250px]
      xl:grid-cols-[300px_minmax(0,1fr)_300px]
       2xl:grid-cols-[300px_minmax(0,1fr)_350px]
      gap-4 xl:gap-6
      items-stretch
    "
      >
        <div className="hidden lg:block">
          <motion.img
            variants={slideIn(-1)}
            {...reveal}
            className="
          w-full
          h-full
          min-h-[500px]
          max-h-[650px]
          object-cover
          rounded-[20px]
        "
            src={GururudevLeftImage}
            alt="Gurudev"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="min-w-0 flex flex-col justify-between">
          <motion.div variants={stagger(0.15)} {...reveal} className="text-center">
            <motion.p
              variants={fadeLeft}
              className="
            font-saira
            text-3xl sm:text-4xl xl:text-5xl
            text-[#d2a45e]
            font-bold
          "
            >
              Gurudev
            </motion.p>

            <motion.p
              variants={fadeRight}
              className="
            font-saira
            text-3xl sm:text-4xl xl:text-5xl
            font-bold
            text-[#67aa41]
            mt-2 xl:mt-4
          "
            >
              Our Inspiration
            </motion.p>

            <motion.p
              variants={fadeLeft}
              className="
            py-3 xl:py-4
            px-2
            font-gotham
            text-sm sm:text-base xl:text-lg 
            leading-relaxed
            text-[#67aa41]
            text-justify sm:text-center
          "
            >
              Sri Sri Gaushala is deeply inspired by the vision of Gurudev Sri Sri
              Ravi Shankar, a globally revered spiritual leader and humanitarian.
              As the founder of the Art of Living Foundation, Gurudev has dedicated
              his life to spreading the values of peace, compassion, and service.
              The Art of Living Foundation, present in over 150 countries, has
              touched millions of lives through its programs on meditation, yoga,
              and stress-free living. Gurudev’s teachings remind us that true
              service lies in caring for all living beings and in nurturing the
              environment that sustains us.
            </motion.p>
          </motion.div>
          <motion.div
            variants={stagger(0.15)}
            {...reveal}
            className="
          grid
          grid-cols-3
          gap-2 sm:gap-4
          mt-5 lg:mt-8
          h-full
        "
          >
            <motion.img
              variants={popIn}
              className="
            w-full
            aspect-square
            h-full
            object-cover
            rounded-[16px]
          "
              src={GururudevCenterImage1}
              alt="Gurudev with cow"
              loading="lazy"
              decoding="async"
            />
            <div className="flex items-end">
              <motion.img
                variants={popIn}
                className="
            w-full
            aspect-square  xl:h-[150px]
             2xl:h-[220px]
             flex justify-end
            object-cover
            rounded-[16px]
          "
                src={GururudevCenterImage2}
                alt="Gurudev with cows"
                loading="lazy"
                decoding="async"
              />
            </div>
            <motion.img
              variants={popIn}
              className="
            w-full
            aspect-square
            h-full
            object-cover
            rounded-[16px]
          "
              src={GururudevCenterImage3}
              alt="Gurudev with cow"
              loading="lazy"
              decoding="async"
            />
          </motion.div>
        </div>
        <div className="hidden lg:block">
          <motion.img
            variants={slideIn(1)}
            {...reveal}
            className="
          w-full
          h-full
          min-h-[500px]
          max-h-[650px]
          object-cover
          rounded-[20px]
        "
            src={GururudevRightImage}
            alt="Gurudev"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <motion.div variants={stagger(0.15)} {...reveal} className="relative z-20 grid grid-cols-2 gap-3 mt-5 lg:hidden">
        <motion.img
          variants={fadeBottom}
          className="aspect-square
            lg:h-full w-full lg:w-auto object-cover rounded-[20px]"
          src={GururudevLeftImage}
          alt="Gurudev"
          loading="lazy"
          decoding="async"
        />
        <motion.img
          variants={fadeBottom}
          className="aspect-square
            lg:h-full w-full lg:w-auto object-cover rounded-[20px]"
          src={GururudevRightImage}
          alt="Gurudev"
          loading="lazy"
          decoding="async"
        />
      </motion.div>
    </section>
  );
}
export default Inspiration;