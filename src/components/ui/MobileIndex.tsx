import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import type { Chapter } from "./ChapterNav";

/** Bottom-anchored notebook index for small screens, replacing the tab rail. */
export function MobileIndex({ chapters }: { chapters: Chapter[] }) {
  const [open, setOpen] = useState(false);

  const scrollTo = (id: string) => {
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="fixed bottom-4 left-1/2 z-40 -translate-x-1/2 md:hidden">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 12, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 12, scale: 0.96 }}
            transition={{ duration: 0.2 }}
            className="absolute bottom-14 left-1/2 mb-1 w-60 -translate-x-1/2 rounded-lg bg-card p-2 paper-edge"
          >
            {chapters.map((c) => (
              <button
                key={c.id}
                onClick={() => scrollTo(c.id)}
                className="flex w-full items-center gap-2 rounded-md px-3 py-2 text-left font-note text-sm text-graphite hover:bg-paper-alt"
              >
                <span className="font-mono text-[0.65rem] text-muted">{c.no}</span>
                {c.label}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen((v) => !v)}
        className="rounded-full border border-line bg-card px-5 py-2.5 font-hand text-lg text-ink paper-edge"
      >
        {open ? "Close" : "Index ✎"}
      </button>
    </div>
  );
}
