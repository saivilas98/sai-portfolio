import { motion, type MotionValue } from "framer-motion";

export function PhoneFrame({
  src,
  alt,
  y,
  rotate = 0,
  className = "",
}: {
  src: string;
  alt: string;
  /** Optional scroll-linked drift (used inside the cinema reel). */
  y?: MotionValue<number>;
  rotate?: number;
  className?: string;
}) {
  return (
    <motion.div
      style={{ y, rotate }}
      whileHover={{ scale: 1.03, rotate: 0 }}
      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
      className={`group relative flex-none ${className}`}
    >
      <div className="relative aspect-[9/19.3] w-[190px] overflow-hidden rounded-[1.6rem] border border-line bg-black shadow-[0_40px_80px_-32px_rgb(var(--shadow-rgb)/0.75)] transition-shadow duration-500 group-hover:shadow-[0_48px_96px_-32px_rgb(var(--shadow-rgb)/0.85)] sm:w-[210px] xl:w-[225px]">
        <div
          className="absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-black"
          aria-hidden
        />
        <img
          src={src}
          alt={alt}
          loading="lazy"
          decoding="async"
          width={210}
          height={450}
          className="h-full w-full object-cover object-top"
        />
        <div
          className="pointer-events-none absolute inset-0 rounded-[1.6rem] ring-1 ring-inset ring-white/5"
          aria-hidden
        />
      </div>
    </motion.div>
  );
}
