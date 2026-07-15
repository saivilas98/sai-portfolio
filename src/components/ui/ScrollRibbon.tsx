import { motion, useScroll, useSpring } from "framer-motion";

/** A hand-inked ribbon-bookmark that grows down the left edge as you move through the notebook. */
export function ScrollRibbon() {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.3 });

  return (
    <div className="fixed left-0 top-0 z-40 hidden h-full w-[5px] md:block">
      <motion.div
        className="h-full w-full origin-top rounded-b-full bg-marker/80"
        style={{ scaleY }}
      />
    </div>
  );
}
