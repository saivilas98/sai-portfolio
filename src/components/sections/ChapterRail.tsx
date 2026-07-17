import { nav } from "../../data/content";
import { useActiveSection } from "../../lib/useActiveSection";

const sectionIds = nav.map((item) => item.href.replace("#", ""));

/** Fixed chapter index on wide screens: numerals light up as the story advances. */
export function ChapterRail() {
  const active = useActiveSection(sectionIds);

  return (
    <nav
      aria-label="Chapters"
      className="fixed right-7 top-1/2 z-[45] hidden -translate-y-1/2 flex-col items-end gap-4 xl:flex"
    >
      {nav.map((item, i) => {
        const id = item.href.replace("#", "");
        const isActive = active === id;
        return (
          <a
            key={item.href}
            href={item.href}
            className="group flex items-center gap-2.5"
            aria-current={isActive ? "true" : undefined}
          >
            <span
              className={`font-mono text-[10px] uppercase tracking-[0.2em] transition-all duration-300 ${
                isActive
                  ? "translate-x-0 text-ink opacity-100"
                  : "translate-x-1 text-muted opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
              }`}
            >
              {item.label}
            </span>
            <span
              className={`font-mono text-[10px] tabular-nums transition-colors duration-300 ${
                isActive ? "text-accent" : "text-muted/60 group-hover:text-muted"
              }`}
            >
              {String(i + 1).padStart(2, "0")}
            </span>
            <span
              className={`h-px transition-all duration-300 ${
                isActive ? "w-6 bg-accent" : "w-3 bg-line group-hover:bg-muted"
              }`}
              aria-hidden
            />
          </a>
        );
      })}
    </nav>
  );
}
