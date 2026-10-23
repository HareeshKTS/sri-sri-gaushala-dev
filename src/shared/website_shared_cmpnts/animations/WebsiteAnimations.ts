import type { Variants } from "motion/react";

/**
 * EASE — the "feel" of every animation (a cubic-bezier curve).
 * UI effect: starts fast and settles slowly at the end, so things glide softly into place
 * instead of stopping abruptly. Change the 4 numbers to change the feel on ALL animations
 * that use it (e.g. [0.4, 0, 0.2, 1] = more standard/neutral).
 */
export const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];

/**
 * VIEWPORT — the rule for "when is an element considered scrolled into view".
 *  - once: true    → the animation plays only the FIRST time; it doesn't replay when you scroll back up.
 *  - amount: 0.25  → it starts when 25% of the element is visible on screen.
 * UI effect: bigger `amount` = animation starts later (element must be more visible);
 * smaller = starts earlier. For very tall sections use a smaller value (~0.15) so it always triggers.
 */
export const VIEWPORT = { once: true, amount: 0.25 } as const;

/**
 * reveal — a ready-made set of props: "start hidden, play `show` when scrolled into view".
 * Usage: <motion.div variants={fadeUp} {...reveal}> ... </motion.div>
 * UI effect: the element stays invisible (in its `hidden` state) until the user scrolls to it,
 * then animates in once. Without it you must write initial / whileInView / viewport yourself.
 */
export const reveal = { initial: "hidden", whileInView: "show", viewport: VIEWPORT } as const;


/**
 * slideIn(dir) — fade in while sliding sideways 60px. It's a FUNCTION: you choose the side.
 *   slideIn(-1) → comes from the LEFT and slides right into place
 *   slideIn(1)  → comes from the RIGHT and slides left into place
 * UI effect: used for side-by-side layouts, e.g. image slides in from one side while the text
 * rises. Duration 0.8s. Supports a delay: <motion.div variants={slideIn(-1)} custom={0.3}>.
 */
export const slideIn = (dir: -1 | 1 = -1): Variants => ({
  hidden: { opacity: 0, x: dir * 60 },
  show: (delay: number = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.8, ease: EASE, delay },
  }),
});

/**
 * stagger(gap, startDelay) — makes CHILDREN play one after another instead of all together.
 * It does not move anything itself; put it on the PARENT, and put a variant (fadeUp, popIn…)
 * on each child:
 *     <motion.ul variants={stagger(0.1)} {...reveal}>
 *       <motion.li variants={fadeUp}>…</motion.li>   ← appears first
 *       <motion.li variants={fadeUp}>…</motion.li>   ← 0.1s later
 *     </motion.ul>
 *  - staggerChildren (default 0.12s): the pause between each child.
 *  - delayChildren   (default 0s):    wait before the FIRST child starts.
 * UI effect: lists, stat cards, headings + paragraph appear in a smooth cascade.
 */
export const stagger = (staggerChildren = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  show: { transition: { staggerChildren, delayChildren } },
});

/**
 * popIn — fade in while growing from 85% to 100% size, with a small springy bounce.
 * UI effect: the element "pops" into place. Good for buttons, badges, stat cards and
 * small images (not for large photos — scaling big images can look jumpy).
 * The spring (stiffness 260, damping 20) controls the bounce: lower damping = bouncier.
 */
export const popIn: Variants = {
  hidden: { opacity: 0, scale: 0.85 },
  show: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 260, damping: 20 } },
};

/**
 * fadeLeft — fade in while moving 60px from the LEFT to its place (slow: 1.2s).
 * UI effect: same direction as slideIn(-1) but slower and calmer. Use it for large blocks
 * (big images, hero text columns) that should enter gracefully.
 * Note: no `custom` delay support (use slideIn if you need a delay).
 */
export const fadeLeft: Variants = {
  hidden: { opacity: 0, x: -60 },
  show: { opacity: 1, x: 0, transition: { duration: 1.2, ease: EASE } },
};

/**
 * fadeBottom — fade in while rising 45px from below (slow: 1.4s).
 * UI effect: like fadeUp but with a longer travel and a slower, more cinematic entrance.
 * Use it for big sections/images; use fadeUp for small text so it doesn't feel sluggish.
 * Note: no `custom` delay support.
 */
export const fadeBottom: Variants = {
  hidden: { opacity: 0, y: 45 },
  show: { opacity: 1, y: 0, transition: { duration: 1.4, ease: EASE } },
};

/**
 * fadeRight — fade in while moving 60px from the RIGHT to its place (slow: 1.4s).
 * UI effect: the mirror of fadeLeft. Pair them for two-column layouts: left column
 * with fadeLeft, right column with fadeRight, so both glide in toward the center.
 * Note: no `custom` delay support.
 */
export const fadeRight: Variants = {
  hidden: { opacity: 0, x: 60 },
  show: { opacity: 1, x: 0, transition: { duration: 1.4, ease: EASE } },
};