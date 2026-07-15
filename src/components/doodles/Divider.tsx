import { motion } from "framer-motion";

/** A single hand-drawn wavy line, used to separate notebook entries. */
export function Divider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 16"
      preserveAspectRatio="none"
      className={`h-4 w-full text-line ${className}`}
      fill="none"
    >
      <motion.path
        d="M2 8C60 3 100 13 160 8C220 3 260 13 320 8C380 3 420 13 480 8C520 5 560 11 598 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        initial={{ pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-40px" }}
        transition={{ duration: 1, ease: "easeInOut" }}
      />
    </svg>
  );
}
