import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

/** A small trailing ink-nib cursor for fine-pointer devices. Purely decorative, never blocks clicks. */
export function PenCursor() {
  const [enabled, setEnabled] = useState(false);
  const [hovering, setHovering] = useState(false);
  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  const springX = useSpring(x, { damping: 28, stiffness: 400, mass: 0.4 });
  const springY = useSpring(y, { damping: 28, stiffness: 400, mass: 0.4 });
  const trailX = useSpring(x, { damping: 30, stiffness: 120, mass: 0.6 });
  const trailY = useSpring(y, { damping: 30, stiffness: 120, mass: 0.6 });

  useEffect(() => {
    const fine = window.matchMedia("(pointer: fine)").matches;
    setEnabled(fine);
    if (!fine) return;

    const move = (e: MouseEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      const target = e.target as HTMLElement;
      setHovering(Boolean(target.closest("a, button, [data-cursor-lift]")));
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [x, y]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-[999] mix-blend-multiply" aria-hidden>
      <motion.div
        className="absolute rounded-full bg-marker/25"
        style={{ x: trailX, y: trailY, translateX: "-50%", translateY: "-50%", width: 22, height: 22 }}
        animate={{ scale: hovering ? 1.6 : 1 }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className="absolute rounded-full bg-marker"
        style={{ x: springX, y: springY, translateX: "-50%", translateY: "-50%", width: 5, height: 5 }}
      />
    </div>
  );
}
