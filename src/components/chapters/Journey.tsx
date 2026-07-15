import { motion } from "framer-motion";
import { BarChart3, Briefcase, GraduationCap, Rocket, Target } from "lucide-react";
import { journey, type JourneyEntry, type JourneyIcon } from "../../data/content";
import { PageHeading } from "../ui/PageHeading";

const icons: Record<JourneyIcon, typeof GraduationCap> = {
  "graduation-cap": GraduationCap,
  briefcase: Briefcase,
  rocket: Rocket,
  "bar-chart-3": BarChart3,
  target: Target,
};

function Stop({ entry, index, final }: { entry: JourneyEntry; index: number; final?: boolean }) {
  const Icon = icons[entry.icon];
  return (
    <motion.div
      className="relative flex gap-4 pb-10 last:pb-0"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay: (index % 4) * 0.06 }}
    >
      <div className="relative flex flex-col items-center">
        <span
          className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 ${
            final ? "border-marker bg-marker text-paper" : "border-ink/70 bg-card text-ink"
          }`}
        >
          <Icon size={18} strokeWidth={1.75} />
        </span>
        <span className="mt-1 flex-1 border-l-2 border-dotted border-line last:hidden" />
      </div>
      <div className="pb-2">
        <h3 className="font-hand text-2xl leading-none text-ink">{entry.title}</h3>
        <p className="mt-1.5 max-w-sm font-serif text-[0.95rem] leading-relaxed text-graphite">{entry.detail}</p>
      </div>
    </motion.div>
  );
}

export function Journey() {
  return (
    <section id="journey" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-content">
        <PageHeading no="Ch. 03" title="The journey" subtitle={journey.context} />

        <div className="grid gap-16 md:grid-cols-2">
          <div>
            <p className="mb-6 font-note text-xs uppercase tracking-[0.2em] text-muted">Foundation</p>
            {journey.foundation.map((entry, i) => (
              <Stop key={entry.title} entry={entry} index={i} />
            ))}
          </div>
          <div>
            <p className="mb-6 font-note text-xs uppercase tracking-[0.2em] text-muted">The pivot</p>
            {journey.pivot.map((entry, i) => (
              <Stop key={entry.title} entry={entry} index={i} final={i === journey.pivot.length - 1} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
