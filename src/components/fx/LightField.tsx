import { useEffect } from "react";
import { motion, useMotionValue, useReducedMotion, useSpring } from "framer-motion";

/** Warm stage light that drifts toward the pointer, everywhere on the page. */
function PointerGlow() {
  const x = useMotionValue(-600);
  const y = useMotionValue(-600);
  const sx = useSpring(x, { stiffness: 40, damping: 18, mass: 0.8 });
  const sy = useSpring(y, { stiffness: 40, damping: 18, mass: 0.8 });
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    x.set(window.innerWidth * 0.68);
    y.set(window.innerHeight * 0.3);
    if (prefersReducedMotion || !window.matchMedia("(pointer: fine)").matches) return;
    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
    };
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, [x, y, prefersReducedMotion]);

  return (
    <motion.div
      style={{ x: sx, y: sy }}
      className="absolute left-0 top-0 h-[44rem] w-[44rem] -translate-x-1/2 -translate-y-1/2 rounded-full"
      aria-hidden
    >
      <div className="h-full w-full rounded-full bg-[radial-gradient(circle,rgb(var(--color-accent)/0.07),transparent_62%)]" />
    </motion.div>
  );
}

/**
 * The room the site lives in: two soft pools of light drifting almost
 * imperceptibly, plus a glow that leans toward the pointer. Keeps the page
 * feeling alive even when nothing else moves.
 */
export function LightField() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden>
      <div className="light-blob light-blob-a" />
      <div className="light-blob light-blob-b" />
      <PointerGlow />
    </div>
  );
}
