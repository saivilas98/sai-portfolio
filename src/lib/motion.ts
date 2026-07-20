import type { Variants } from "framer-motion";

export const easeOut = [0.16, 1, 0.3, 1] as const;
export const easeInOut = [0.83, 0, 0.17, 1] as const;

/** Layered entrance: rise, sharpen, settle — never a plain fade. */
export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 26, scale: 0.985, filter: "blur(6px)" },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
    transition: { duration: 0.9, ease: easeOut },
  },
};

/** A hairline that draws itself across. */
export const drawLine: Variants = {
  hidden: { scaleX: 0 },
  show: {
    scaleX: 1,
    transition: { duration: 1, ease: easeOut },
  },
};

/** Word-by-word masked rise used by headline moments. */
export const lineRise: Variants = {
  hidden: { y: "112%" },
  show: {
    y: "0%",
    transition: { duration: 1, ease: easeOut },
  },
};

export const stagger = (staggerChildren = 0.1, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});
