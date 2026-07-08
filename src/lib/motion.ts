import type { Variants } from "framer-motion";

export const easeOut = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: easeOut },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { duration: 0.8, ease: easeOut },
  },
};

export const stagger = (staggerChildren = 0.12, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren, delayChildren },
  },
});

export const scaleReveal: Variants = {
  hidden: { opacity: 0, scale: 0.96 },
  show: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.8, ease: easeOut },
  },
};
