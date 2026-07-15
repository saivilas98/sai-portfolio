import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** A rubber-stamp styled badge, used for status labels. */
export function Stamp({ children, rotate = -6 }: { children: ReactNode; rotate?: number }) {
  return (
    <motion.div
      className="inline-flex items-center gap-2 rounded-sm border-2 border-marker/70 px-3 py-1 font-mono text-[0.68rem] font-medium uppercase tracking-[0.18em] text-marker"
      style={{ rotate }}
      initial={{ opacity: 0, scale: 1.4 }}
      animate={{ opacity: 0.85, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-marker" />
      {children}
    </motion.div>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line bg-card px-3 py-1 font-mono text-[0.68rem] uppercase tracking-[0.1em] text-muted">
      {children}
    </span>
  );
}
