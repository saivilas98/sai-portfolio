import { motion, useScroll, useSpring } from "framer-motion";

/** A thin accent rule across the very top of the viewport, tracking read progress through the page — a filmstrip counter for the whole story. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 300, damping: 40, mass: 0.2 });

  return (
    <motion.div
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[70] h-[2px] origin-left bg-accent"
      aria-hidden
    />
  );
}
