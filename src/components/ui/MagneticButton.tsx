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
    "inline-flex items-center justify-center gap-2 rounded-full px-7 py-3.5 text-sm font-medium transition-colors duration-300 whitespace-nowrap";
  const styles =
    variant === "primary"
      ? "bg-ink text-paper hover:bg-white"
      : "bg-transparent text-ink border border-line hover:border-ink";

  return (
    <motion.a
      href={href}
      target={target}
      rel={rel}
      style={{ x: springX, y: springY }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </motion.a>
  );
}
