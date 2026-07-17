import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

/**
 * Animates the numeric part of a metric ("50+" counts 0→50, keeping the "+")
 * the first time it scrolls into view.
 */
export function CountUp({ value, duration = 1100 }: { value: string; duration?: number }) {
  // `value.match(...)` returns a fresh array identity every render, so the
  // effect keys off the parsed primitives below — never the match itself —
  // or a re-render anywhere upstream would restart the count from zero.
  const match = value.match(/^(\d+)(.*)$/);
  const hasMatch = Boolean(match);
  const target = match ? parseInt(match[1], 10) : 0;
  const suffix = match ? match[2] : "";

  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const prefersReducedMotion = useReducedMotion();
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || !hasMatch) return;
    if (prefersReducedMotion) {
      setN(target);
      return;
    }
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setN(Math.round((1 - Math.pow(1 - p, 3)) * target));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, hasMatch, target, duration, prefersReducedMotion]);

  if (!hasMatch) return <span ref={ref}>{value}</span>;

  return (
    <span ref={ref} className="tabular-nums">
      {n}
      {suffix}
    </span>
  );
}
