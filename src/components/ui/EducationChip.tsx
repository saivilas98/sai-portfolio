import { AnimatePresence, motion } from "framer-motion";
import { GraduationCap } from "lucide-react";
import { useState } from "react";
import { easeOut } from "../../lib/motion";

type EducationChipProps = {
  institution: string;
  detail: string;
};

export function EducationChip({ institution, detail }: EducationChipProps) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative inline-flex"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.button
        type="button"
        onFocus={() => setHovered(true)}
        onBlur={() => setHovered(false)}
        whileHover={{ y: -2 }}
        transition={{ type: "spring", stiffness: 320, damping: 20 }}
        className="inline-flex cursor-help items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 font-mono text-xs uppercase tracking-[0.15em] text-muted transition-colors duration-300 hover:border-accent/50 hover:text-ink"
        data-cursor
      >
        <GraduationCap size={13} className="text-accent" />
        {institution}
      </motion.button>

      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ opacity: 0, y: 6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 4, scale: 0.97 }}
            transition={{ duration: 0.22, ease: easeOut }}
            className="pointer-events-none absolute bottom-full left-1/2 z-20 mb-2.5 w-max -translate-x-1/2 rounded-xl border border-line bg-surface/95 px-4 py-2 font-mono text-[0.7rem] tracking-[0.05em] text-ink/85 shadow-[0_20px_50px_-25px_rgb(var(--shadow-rgb)/0.8)] backdrop-blur-md"
          >
            {detail}
            <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-line bg-surface/95" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
