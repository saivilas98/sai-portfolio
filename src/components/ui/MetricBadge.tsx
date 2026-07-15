import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { heroMetrics } from "../../data/content";
import { easeOut } from "../../lib/motion";

export function MetricBadge({
  className = "",
  offset = 0,
  revealDelay = 0.6,
  intervalMs = 3600,
}: {
  className?: string;
  offset?: number;
  revealDelay?: number;
  intervalMs?: number;
}) {
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setTick((t) => t + 1);
    }, intervalMs);
    return () => clearInterval(id);
  }, [intervalMs]);

  const metric = heroMetrics[(tick + offset) % heroMetrics.length];

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: easeOut, delay: revealDelay }}
      className={`hidden rounded-2xl border border-line bg-surface px-5 py-4 shadow-[0_20px_50px_-25px_rgba(0,0,0,0.8)] sm:block ${className}`}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={metric.value + metric.label}
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -6 }}
          transition={{ duration: 0.35, ease: easeOut }}
        >
          <p className="text-2xl font-display font-medium text-ink">{metric.value}</p>
          <p className="text-xs text-muted whitespace-nowrap">{metric.label}</p>
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
}
