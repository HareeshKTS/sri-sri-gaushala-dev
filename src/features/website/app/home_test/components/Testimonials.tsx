import { useCallback, useEffect, useMemo, useState } from "react";
import { motion, useReducedMotion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { SectionHeading } from "./SectionHeading";
import { fadeBottom } from "@/shared/animations/WebsiteAnimations";
import { AboutUsBannerImage, BreedsBannerImage, GalleryBannerImage, home_banner, OtherGaushalaBannerImage } from "@/assets/website_assets";

interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
}
export function Testimonials() {


const TESTIMONIALS = {
  title: "Testimonials",
  items: [
    { id: "t1", name: "Mika Singh", role: "Indian singer rapper, musician and actor", image: BreedsBannerImage },
    { id: "t2", name: "Jacqueline Fernandez", role: "Bollywood Actress", image: AboutUsBannerImage },
   { id: "t3", name: "Abobaker Mojadidi", role: "Leader and Socio-political Activist in Afghanistan", image:home_banner },
    { id: "t4", name: "Name Surname", role: "Designation", image: OtherGaushalaBannerImage },
    { id: "t5", name: "Name Surname", role: "Designation", image: GalleryBannerImage },
  ] as Testimonial[],
};


  const reduce = useReducedMotion();
  const plugins = useMemo(
    () => (reduce ? [] : [Autoplay({ delay: 3500, stopOnInteraction: false, stopOnMouseEnter: true })]),
    [reduce]
  );
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" }, plugins);
  const [selected, setSelected] = useState(0);
  const [snapCount, setSnapCount] = useState(0);

  const sync = useCallback(() => {
    if (!emblaApi) return;
    setSelected(emblaApi.selectedScrollSnap());
    setSnapCount(emblaApi.scrollSnapList().length);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    sync();
    emblaApi.on("select", sync).on("reInit", sync);
    return () => {
      emblaApi.off("select", sync).off("reInit", sync);
    };
  }, [emblaApi, sync]);

  return (
    <section className="py-8">
      <SectionHeading>{TESTIMONIALS.title}</SectionHeading>
      <motion.div
        variants={fadeBottom}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        className="mx-auto mt-6 md:max-w-[85%] px-2"
        role="region"
        aria-roledescription="carousel"
        aria-label="Testimonials"
      >
        <div ref={emblaRef} className="overflow-hidden py-4">
          <div className="flex">
            {TESTIMONIALS.items.map((t, i) => {
              const active = i === selected;
              return (
                <div
                  key={t.id}
                  role="group"
                  aria-roledescription="slide"
                  aria-label={`${i + 1} of ${TESTIMONIALS.items.length}`}
                  className="min-w-0 flex-[0_0_72%] px-2 sm:flex-[0_0_46%] lg:flex-[0_0_38%]"
                >
                  <figure
                    className={`relative aspect-[8/10] overflow-hidden rounded-lg shadow-md transition-all duration-500 ease-out sm:aspect-[7/8] ${
                      active ? "scale-100 opacity-100" : "scale-90 opacity-60"
                    }`}
                  >
                    <img src={t.image} alt={t.name} loading="lazy" decoding="async" draggable={false} className="h-full w-full object-cover" />
                    <figcaption className="absolute inset-x-0 bottom-6 bg-white/10 px-3 py-1.5 text-center backdrop-blur-sm ">
                      <p className="font-saira text-[11px] font-semibold text-white sm:text-xs">{t.name}</p>
                      <p className="font-saira text-[9px] leading-tight text-white sm:text-[10px]">{t.role}</p>
                    </figcaption>
                  </figure>
                </div>
              );
            })}
          </div>
        </div>

        <div className="mt-3 flex justify-center gap-2" role="tablist" aria-label="Choose testimonial">
          {Array.from({ length: snapCount }).map((_, i) => (
            <motion.button
              key={i}
              type="button"
              role="tab"
              aria-selected={i === selected}
              aria-label={`Go to testimonial ${i + 1}`}
              onClick={() => emblaApi?.scrollTo(i)}
              animate={{ scale: i === selected ? 1.3 : 1 }}
              className={`size-2 cursor-pointer rounded-full transition-colors duration-300 ${
                i === selected ? "bg-[#67aa41]" : "bg-neutral-300 hover:bg-neutral-400"
              }`}
            />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
