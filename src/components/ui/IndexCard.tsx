import { motion } from "framer-motion";
import type { ReactNode } from "react";

/** A ruled index-card block, used for lists of short notes (product thinking, beliefs). */
export function IndexCard({
  children,
  rotate = 0,
  className = "",
}: {
  children: ReactNode;
  rotate?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={`relative bg-card p-5 paper-edge ruled-paper lift-on-hover ${className}`}
      style={{ rotate }}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5 }}
    >
      <span
        aria-hidden
        className="absolute left-5 top-0 h-full w-px bg-marker/25"
      />
      {children}
    </motion.div>
  );
}
