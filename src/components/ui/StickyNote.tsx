import { motion } from "framer-motion";
import type { ReactNode } from "react";

type StickyNoteProps = {
  children: ReactNode;
  color?: "yellow" | "sage" | "paper";
  rotate?: number;
  className?: string;
};

const colors = {
  yellow: "bg-[#F5E6A8]",
  sage: "bg-[#DDE3CC]",
  paper: "bg-card",
};

/** A small sticky-note styled block that idles with a faint paper-breathing motion. */
export function StickyNote({ children, color = "yellow", rotate = -2, className = "" }: StickyNoteProps) {
  return (
    <motion.div
      data-cursor-lift
      className={`relative w-fit max-w-xs p-4 font-note text-[0.95rem] leading-snug text-graphite shadow-[0_10px_18px_-10px_rgb(0_0_0_/_0.35)] ${colors[color]} ${className}`}
      initial={{ opacity: 0, y: 12, rotate: rotate - 3 }}
      whileInView={{
        opacity: 1,
        y: [0, -3, 0],
        rotate: [rotate, rotate + 0.8, rotate],
      }}
      whileHover={{ rotate: 0, y: -4, scale: 1.03 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        opacity: { duration: 0.5 },
        y: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
        rotate: { duration: 4.5, repeat: Infinity, ease: "easeInOut" },
      }}
    >
      {children}
    </motion.div>
  );
}
