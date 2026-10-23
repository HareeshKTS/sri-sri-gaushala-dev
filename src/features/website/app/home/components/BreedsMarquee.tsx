import { useEffect, useRef } from "react";
import { motion, useAnimationFrame, useMotionValue, useReducedMotion } from "motion/react";
import { CtaButton } from "./CtaButton";
import { SectionHeading } from "./SectionHeading";
import { fadeBottom } from "@/shared/website_shared_cmpnts/animations/WebsiteAnimations";
import { ManyCows } from "@/assets/website_assets";

interface BreedTile {
  id: string;
  image: string;
  alt: string;
}
const tiles = (prefix: string, n: number): BreedTile[] =>
  Array.from({ length: n }, (_, i) => ({ id: `${prefix}-${i}`, image: ManyCows, alt: `Indigenous breed ${i + 1}` }));

const BREEDS = {
  title: "Know the Breeds",
  rows: [tiles("r1", 7), tiles("r2", 7)] as [BreedTile[], BreedTile[]],
  cowTo: `/breeds?type=cows`,
  bullTo: `/breeds?type=bulls`,
};
function MarqueeRow({ tiles, reverse = false, speed = 40 }: { tiles: BreedTile[]; reverse?: boolean; speed?: number }) {
  const x = useMotionValue(0);
  const trackRef = useRef<HTMLDivElement>(null);
  const halfRef = useRef(0);
  const pausedRef = useRef(false);
  const reduce = useReducedMotion();
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    const measure = () => {
      halfRef.current = el.offsetWidth / 2;
      if (reverse && x.get() === 0) x.set(-halfRef.current);
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, [reverse, x, tiles]);

  useAnimationFrame((_, delta) => {
    const half = halfRef.current;
    if (reduce || pausedRef.current || !half) return;
    let next = x.get() + (reverse ? 1 : -1) * ((speed * delta) / 1000);
    if (next <= -half) next += half;
    if (next > 0) next -= half;
    x.set(next);
  });

  const group = [...tiles, ...tiles];

  return (
    <div
      className="overflow-hidden"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <motion.div ref={trackRef} style={{ x }} className="flex w-max">
        {[0, 1].map((g) => (
          <div key={g} className="flex shrink-0 gap-2 pr-2" aria-hidden={g === 1}>
            {group.map((t, i) => (
              <img
                key={`${g}-${t.id}-${i}`}
                src={t.image}
                alt={g === 0 ? t.alt : ""}
                loading="lazy"
                decoding="async"
                draggable={false}
                className="h-28 w-44 shrink-0  object-cover sm:h-36 sm:w-56 shadow-md border"
              />
            ))}
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function BreedsMarquee() {
  return (
    <section className="py-3 md:py-8">
      <SectionHeading>{BREEDS.title}</SectionHeading>
      <div className="mt-8 space-y-2">
        <MarqueeRow tiles={BREEDS.rows[0]} speed={35} />
        <MarqueeRow tiles={BREEDS.rows[1]} speed={35} reverse />
      </div>
      <motion.div
        variants={fadeBottom}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.8 }}
        className="mt-6 flex justify-center gap-3"
      >
        <CtaButton to={BREEDS.cowTo}>Cow</CtaButton>
        <CtaButton to={BREEDS.bullTo}>Bull</CtaButton>
      </motion.div>
    </section>
  );
}
