import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageHeading({
  no,
  title,
  subtitle,
  align = "left",
}: {
  no: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "left" | "center";
}) {
  return (
    <div className={`mb-10 md:mb-14 ${align === "center" ? "text-center" : ""}`}>
      <motion.span
        className="font-mono text-xs uppercase tracking-[0.3em] text-muted"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        {no}
      </motion.span>
      <motion.h2
        className="mt-1 font-hand text-5xl font-semibold leading-[0.95] text-ink sm:text-6xl md:text-7xl"
        initial={{ opacity: 0, y: 14 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.55 }}
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          className={`mt-3 max-w-xl font-serif text-base text-graphite md:text-lg ${align === "center" ? "mx-auto" : ""}`}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}
