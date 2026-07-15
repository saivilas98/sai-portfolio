import { motion, useReducedMotion } from "framer-motion";
import { useEffect, useState } from "react";

/** A one-time "first page" reveal: a pen signs itself in, then the cover page is torn away upward. */
export function IntroReveal() {
  const reduce = useReducedMotion();
  const [stage, setStage] = useState<"drawing" | "lifting" | "gone">(reduce ? "gone" : "drawing");

  useEffect(() => {
    if (reduce) return;
    const t = setTimeout(() => setStage("lifting"), 1500);
    return () => clearTimeout(t);
  }, [reduce]);

  if (stage === "gone") return null;

  return (
    <motion.div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-paper"
      initial={{ y: 0 }}
      animate={{ y: stage === "lifting" ? "-100%" : 0 }}
      transition={{ duration: 0.8, ease: [0.65, 0, 0.35, 1] }}
      onAnimationComplete={() => {
        if (stage === "lifting") setStage("gone");
      }}
      style={{ pointerEvents: stage === "lifting" ? "none" : "auto" }}
    >
      <div className="flex flex-col items-center gap-3">
        <svg viewBox="0 0 220 90" className="h-16 w-40 text-ink sm:h-20 sm:w-48" fill="none">
          <motion.path
            d="M10 60C24 30 34 22 44 42C50 55 44 66 34 60C28 56 34 40 52 34C70 28 78 42 70 54C64 63 76 44 96 34C112 26 118 40 108 50C124 34 140 24 156 30C170 35 164 50 150 52C168 48 186 36 204 40"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 1.1, ease: "easeInOut" }}
          />
        </svg>
        <motion.p
          className="font-hand text-2xl text-muted"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.4 }}
        >
          opening the notebook…
        </motion.p>
      </div>
      <div
        className="absolute inset-x-0 bottom-[-1px] h-4 torn-edge bg-paper"
        style={{ filter: "drop-shadow(0 6px 10px rgb(0 0 0 / 0.15))" }}
      />
    </motion.div>
  );
}
