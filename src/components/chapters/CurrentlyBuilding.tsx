import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { buildLog } from "../../data/content";
import { PageHeading } from "../ui/PageHeading";

const statusStyle = {
  shipped: { label: "shipped", dot: "bg-sage" },
  "in-progress": { label: "in progress", dot: "bg-marker" },
  coming: { label: "coming up", dot: "bg-muted" },
} as const;

export function CurrentlyBuilding() {
  return (
    <section id="building" className="relative bg-paper-alt/50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-content">
        <PageHeading
          no="Ch. 04"
          title="Currently building"
          subtitle={`${buildLog.shipped} of ${buildLog.total} shipped. The rest are in the works.`}
        />

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-6">
          {buildLog.entries.map((entry, i) => {
            const s = statusStyle[entry.status];
            return (
              <motion.div
                key={entry.label}
                className="relative flex aspect-square flex-col items-center justify-center gap-2 bg-card p-3 text-center paper-edge lift-on-hover"
                style={{ rotate: (i % 2 === 0 ? -1 : 1) * (1 + (i % 3)) }}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                {entry.status === "shipped" ? (
                  <span className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-sage text-sage">
                    <Check size={16} strokeWidth={2.5} />
                  </span>
                ) : (
                  <span className={`h-2.5 w-2.5 rounded-full ${s.dot}`} />
                )}
                <span className="font-hand text-lg leading-none text-ink">{entry.label}</span>
                <span className="font-mono text-[0.62rem] uppercase tracking-wider text-muted">{s.label}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
