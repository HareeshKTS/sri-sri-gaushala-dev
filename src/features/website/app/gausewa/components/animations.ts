import type { Variants } from "motion/react";
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
export const VIEWPORT = { once: true, amount: 0.25 } as const;

/** Fade + rise. Pass `custom={delayInSeconds}` to delay it. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: EASE, delay },
  }),
};

/** Parent that staggers its children (children just need `variants` — no initial/animate). */
export const stagger = (staggerChildren = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

/** Soft spring pop (used for the CTA button). */
export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 260, damping: 20 },
  },
};
