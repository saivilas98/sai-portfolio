import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";
import { easeOut, fadeUp } from "../../lib/motion";

export function Reveal({
  children,
  className = "",
  variants = fadeUp,
  delay = 0,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  variants?: Variants;
  delay?: number;
  as?: "div" | "li";
}) {
  const MotionTag = motion[Tag];
  return (
    <MotionTag
      className={className}
      variants={variants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, ease: easeOut, delay }}
    >
      {children}
    </MotionTag>
  );
}
