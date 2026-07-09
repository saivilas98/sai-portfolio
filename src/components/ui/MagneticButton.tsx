import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  className?: string;
  target?: string;
  rel?: string;
};

export function MagneticButton({
  children,
  href,
  variant = "primary",
  className = "",
  target,
  rel,
}: MagneticButtonProps) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 200, damping: 15, mass: 0.3 });
  const springY = useSpring(y, { stiffness: 200, damping: 15, mass: 0.3 });

  function handleMouseMove(event: MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    const relX = event.clientX - rect.left - rect.width / 2;
    const relY = event.clientY - rect.top - rect.height / 2;
    x.set(relX * 0.25);
    y.set(relY * 0.4);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const base =
    "group inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow,opacity] duration-300 ease-out";
  const styles =
    variant === "primary"
      ? "bg-ink text-paper shadow-[0_8px_20px_-12px_rgba(0,0,0,0.5)] hover:shadow-[0_18px_36px_-14px_rgba(0,0,0,0.55)] hover:opacity-90"
      : "bg-transparent text-ink border border-line hover:border-ink hover:bg-ink/[0.03] hover:shadow-[0_10px_28px_-18px_rgba(0,0,0,0.35)]";

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 420, damping: 24 }}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </motion.a>
  );
}
