import { motion } from "framer-motion";

const drawTransition = { duration: 0.9, ease: "easeInOut" as const };
const viewport = { once: true, margin: "-60px" };

/** A loose ink circle, used to circle a word or highlight a stat. */
export function CircleMark({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 160 70" className={`pointer-events-none absolute ${className}`} fill="none">
      <motion.path
        d="M22 40C18 20 40 8 75 7C118 6 148 16 150 36C152 56 120 64 80 63C42 62 14 54 20 38"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={viewport}
        transition={drawTransition}
      />
    </svg>
  );
}

/** A small curved arrow, used to point from an annotation toward its subject. */
export function ArrowMark({
  className = "",
  color = "currentColor",
  flip = false,
}: {
  className?: string;
  color?: string;
  flip?: boolean;
}) {
  return (
    <svg
      viewBox="0 0 90 60"
      className={`pointer-events-none absolute ${className}`}
      style={flip ? { transform: "scaleX(-1)" } : undefined}
      fill="none"
    >
      <motion.path
        d="M4 6C20 10 40 28 58 46"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={viewport}
        transition={drawTransition}
      />
      <motion.path
        d="M40 42L58 46L54 28"
        stroke={color}
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={viewport}
        transition={{ ...drawTransition, delay: 0.7 }}
      />
    </svg>
  );
}

/** A marker-style highlight swiped behind a word or phrase. */
export function Highlight({ className = "", color = "rgb(var(--color-marker) / 0.28)" }: { className?: string; color?: string }) {
  return (
    <motion.span
      aria-hidden
      className={`absolute inset-x-[-4%] bottom-0 -z-10 h-[38%] ${className}`}
      style={{ background: color, borderRadius: "2px 6px 3px 7px" }}
      initial={{ scaleX: 0 }}
      whileInView={{ scaleX: 1 }}
      viewport={viewport}
      transition={{ duration: 0.55, ease: "easeOut" }}
    />
  );
}

/** A small hand-drawn star, used as a decorative flourish. */
export function StarMark({ className = "", color = "currentColor" }: { className?: string; color?: string }) {
  return (
    <svg viewBox="0 0 40 40" className={`pointer-events-none ${className}`} fill="none">
      <path
        d="M20 3L23 17L37 20L23 23L20 37L17 23L3 20L17 17L20 3Z"
        stroke={color}
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/** A pushpin, rendered as a small layered SVG for pinning photos or cards. */
export function Pin({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 28 28" className={`pointer-events-none absolute drop-shadow-sm ${className}`}>
      <circle cx="14" cy="11" r="7" fill="rgb(var(--color-marker))" />
      <circle cx="11.5" cy="8.5" r="2" fill="rgb(255 255 255 / 0.55)" />
      <path d="M13 17L14 25" stroke="rgb(var(--color-graphite))" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/** A paperclip, rendered as a small SVG for attaching a card to a page. */
export function PaperclipMark({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 30 60" className={`pointer-events-none absolute drop-shadow ${className}`} fill="none">
      <path
        d="M8 12C8 6 14 2 19 4C24 6 25 12 25 17V42C25 48 21 52 15 52C9 52 5 48 5 42V19C5 16 7 14 10 14C13 14 15 16 15 19V40"
        stroke="rgb(var(--color-muted))"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}
