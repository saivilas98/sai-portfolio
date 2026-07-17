import { motion, useMotionValue, useSpring } from "framer-motion";
import type { ReactNode, MouseEvent } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  href: string;
  variant?: "primary" | "secondary";
  size?: "md" | "lg";
  className?: string;
  target?: string;
  rel?: string;
};

export function MagneticButton({
  children,
  href,
  variant = "primary",
  size = "md",
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
    x.set((event.clientX - rect.left - rect.width / 2) * 0.25);
    y.set((event.clientY - rect.top - rect.height / 2) * 0.4);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  const base =
    "group inline-flex items-center justify-center gap-2.5 rounded-full font-medium whitespace-nowrap transition-[color,background-color,border-color,box-shadow] duration-300 ease-out";
  const sizes = size === "lg" ? "px-10 py-5 text-base" : "px-8 py-4 text-sm";
  const styles =
    variant === "primary"
      ? "bg-ink text-paper hover:bg-accent hover:text-paper shadow-[0_12px_32px_-16px_rgb(var(--shadow-rgb)/0.65)] hover:shadow-[0_18px_44px_-18px_rgb(var(--shadow-rgb)/0.7)]"
      : "bg-transparent text-ink border border-line hover:border-accent/60 hover:bg-accent/5 hover:text-accent";

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
      className={`${base} ${sizes} ${styles} ${className}`}
    >
      {/* Label rolls up on hover; a twin rises to take its place. */}
      <span className="relative overflow-hidden">
        <span className="flex items-center justify-center gap-2.5 motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:-translate-y-[115%]">
          {children}
        </span>
        <span
          aria-hidden
          className="absolute inset-0 flex translate-y-[115%] items-center justify-center gap-2.5 motion-safe:transition-transform motion-safe:duration-500 motion-safe:ease-[cubic-bezier(0.16,1,0.3,1)] motion-safe:group-hover:translate-y-0"
        >
          {children}
        </span>
      </span>
    </motion.a>
  );
}
