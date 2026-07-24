import { motion } from "framer-motion";

/** A minimal app-window chrome for landscape screenshots — the desktop/game
 *  counterpart to PhoneFrame's mobile shell. */
export function WindowFrame({
  src,
  alt,
  className = "",
}: {
  src: string;
  alt: string;
  className?: string;
}) {
  return (
    <motion.div
      whileHover={{ scale: 1.015 }}
      transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative overflow-hidden rounded-xl border border-line bg-black shadow-[0_40px_80px_-32px_rgb(var(--shadow-rgb)/0.75)] transition-shadow duration-500 group-hover:shadow-[0_48px_96px_-32px_rgb(var(--shadow-rgb)/0.85)] ${className}`}
    >
      <div className="flex h-8 items-center gap-1.5 border-b border-white/5 bg-white/[0.03] px-4">
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
        <span className="h-2.5 w-2.5 rounded-full bg-white/15" />
      </div>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        width={1280}
        height={900}
        className="aspect-[16/10] w-full object-cover object-top"
      />
      <div
        className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-white/5"
        aria-hidden
      />
    </motion.div>
  );
}
