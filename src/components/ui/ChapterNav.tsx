import { motion } from "framer-motion";
import { useActiveSection } from "../../lib/useActiveSection";

export type Chapter = { id: string; label: string; no: string };

const tabColors = [
  "bg-[#E8C77E]",
  "bg-[#D9A48C]",
  "bg-[#A9BF9E]",
  "bg-[#9CB8D0]",
  "bg-[#CBA9D6]",
  "bg-[#E8C77E]",
  "bg-[#D9A48C]",
  "bg-[#A9BF9E]",
];

/** Right-edge notebook tabs — the primary navigation, styled like a book's index tabs. */
export function ChapterNav({ chapters }: { chapters: Chapter[] }) {
  const active = useActiveSection(chapters.map((c) => c.id));

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      aria-label="Chapters"
      className="fixed right-0 top-1/2 z-40 hidden -translate-y-1/2 flex-col gap-1.5 md:flex"
    >
      {chapters.map((chapter, i) => {
        const isActive = active === chapter.id;
        return (
          <motion.button
            key={chapter.id}
            onClick={() => scrollTo(chapter.id)}
            className={`group flex items-center gap-2 rounded-l-md py-2 pl-3.5 text-left font-note text-[0.72rem] leading-none tracking-wide text-ink/70 shadow-[-2px_2px_5px_rgb(0_0_0_/_0.12)] transition-[padding,width] duration-300 ${tabColors[i % tabColors.length]}`}
            style={{ paddingRight: isActive ? "14px" : "8px" }}
            whileHover={{ paddingRight: 14, x: -2 }}
            animate={{ x: isActive ? -6 : 0 }}
          >
            <span className="font-mono text-[0.6rem] text-ink/50">{chapter.no}</span>
            <span
              className={`overflow-hidden whitespace-nowrap transition-all duration-300 ${
                isActive ? "max-w-[10rem] opacity-100" : "max-w-0 opacity-0 group-hover:max-w-[10rem] group-hover:opacity-100"
              }`}
            >
              {chapter.label}
            </span>
          </motion.button>
        );
      })}
    </nav>
  );
}
