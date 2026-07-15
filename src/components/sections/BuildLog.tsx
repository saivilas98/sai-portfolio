import { motion } from "framer-motion";
import { Check, Circle, Loader2 } from "lucide-react";
import { buildLog } from "../../data/content";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

const statusIcon = {
  shipped: <Check size={14} className="text-ink" />,
  "in-progress": <Loader2 size={14} className="text-muted animate-spin" style={{ animationDuration: "2.5s" }} />,
  coming: <Circle size={10} className="text-line" />,
};

export function BuildLog() {
  const percent = Math.round((buildLog.shipped / buildLog.total) * 100);

  return (
    <section className="py-28 md:py-36 border-t border-line">
      <Container>
        <SectionHeading index="05" eyebrow="Build Log" title="Six products. Slowly, honestly." />

        <Reveal delay={0.08} className="mt-12 rounded-[1.75rem] border border-line bg-surface p-7 sm:p-10 font-mono">
          <div className="flex flex-col divide-y divide-line">
            {buildLog.entries.map((entry) => (
              <div key={entry.label} className="flex items-center justify-between py-4 first:pt-0 last:pb-0">
                <span className={`text-sm ${entry.status === "coming" ? "text-muted" : "text-ink"}`}>
                  {entry.label}
                </span>
                <span className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted">
                  {entry.status.replace("-", " ")}
                  {statusIcon[entry.status]}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <div className="flex items-center justify-between mb-2 text-xs uppercase tracking-[0.15em] text-muted">
              <span>Progress</span>
              <span>
                {buildLog.shipped} / {buildLog.total}
              </span>
            </div>
            <div className="h-2 w-full overflow-hidden rounded-full bg-paper border border-line">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: `${percent}%` }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className="h-full rounded-full bg-ink"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
