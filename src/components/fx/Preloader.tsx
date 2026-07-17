import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { profile } from "../../data/content";
import { easeInOut } from "../../lib/motion";

/**
 * Opening title card: a quiet count to 100, then the stage opens as a
 * split shutter — top half lifts, bottom half drops. `onReveal` fires as
 * the shutter opens so the hero can enter underneath it.
 */
export function Preloader({ onReveal }: { onReveal: () => void }) {
  const prefersReducedMotion = useReducedMotion();
  const [count, setCount] = useState(0);
  const [open, setOpen] = useState(false);
  const revealed = useRef(false);

  const reveal = () => {
    if (revealed.current) return;
    revealed.current = true;
    onReveal();
  };

  useEffect(() => {
    if (prefersReducedMotion) {
      setOpen(true);
      reveal();
      return;
    }

    document.documentElement.style.overflow = "hidden";
    const start = performance.now();
    const duration = 1150;
    let raf = 0;

    let hold = 0;
    const tick = (now: number) => {
      const p = Math.min(1, (now - start) / duration);
      setCount(Math.round((1 - Math.pow(1 - p, 3)) * 100));
      if (p < 1) {
        raf = requestAnimationFrame(tick);
      } else {
        // A brief beat at 100 before the shutter opens — arrival, not escape.
        hold = window.setTimeout(() => {
          setOpen(true);
          reveal();
        }, 180);
      }
    };

    raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(hold);
      document.documentElement.style.overflow = "";
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [prefersReducedMotion]);

  return (
    <AnimatePresence onExitComplete={() => (document.documentElement.style.overflow = "")}>
      {!open && (
        <div className="fixed inset-0 z-[90]" aria-hidden>
          <motion.div
            key="shutter-top"
            exit={{ y: "-100%" }}
            transition={{ duration: 0.9, ease: easeInOut }}
            className="absolute inset-x-0 top-0 h-1/2 bg-paper"
          />
          <motion.div
            key="shutter-bottom"
            exit={{ y: "100%" }}
            transition={{ duration: 0.9, ease: easeInOut }}
            className="absolute inset-x-0 bottom-0 h-1/2 bg-paper"
          />
          <motion.div
            key="title-card"
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="font-display text-lg font-medium tracking-tight text-ink"
            >
              {profile.name}
            </motion.p>
            <p className="mt-3 font-mono text-xs tracking-[0.3em] text-muted tabular-nums">
              {String(count).padStart(3, "0")}
            </p>
            <div className="mt-6 h-px w-40 overflow-hidden bg-line">
              <div
                className="h-full origin-left bg-accent transition-transform duration-100 ease-linear"
                style={{ transform: `scaleX(${count / 100})` }}
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
