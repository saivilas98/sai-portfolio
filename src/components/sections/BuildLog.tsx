import { motion } from "framer-motion";
import { Check, Circle, Loader2 } from "lucide-react";
import { buildLog } from "../../data/content";
import { Container } from "../ui/Container";
import { CountUp } from "../ui/CountUp";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { easeOut } from "../../lib/motion";

const statusIcon = {
  shipped: <Check size={14} className="text-accent" />,
  "in-progress": (
    <Loader2
      size={14}
      className="animate-spin text-muted motion-reduce:animate-none"
      style={{ animationDuration: "2.5s" }}
    />
  ),
  coming: <Circle size={10} className="text-line" />,
};

export function BuildLog() {
  const percent = Math.round((buildLog.shipped / buildLog.total) * 100);

  return (
    <section className="border-t border-line py-28 md:py-40">
      <Container>
        <SectionHeading eyebrow="Build Log" title="Six products. Slowly, honestly." />

        <Reveal
          delay={0.08}
          className="mt-14 rounded-3xl border border-line bg-surface p-7 font-mono sm:p-10"
        >
          <div className="flex flex-col divide-y divide-line">
            {buildLog.entries.map((entry, i) => (
              <div
                key={entry.label}
                className="flex items-center justify-between py-4 first:pt-0 last:pb-0"
              >
                <span className="flex items-baseline gap-4">
                  <span className="text-[10px] text-muted/70 tabular-nums" aria-hidden>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className={`text-sm ${entry.status === "coming" ? "text-muted" : "text-ink"}`}>
                    {entry.label}
                  </span>
                </span>
                <span className="flex items-center gap-2 text-xs uppercase tracking-[0.15em] text-muted">
                  {entry.status.replace("-", " ")}
                  {statusIcon[entry.status]}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-10">
            <div className="mb-2 flex items-center justify-between text-xs uppercase tracking-[0.15em] text-muted">
              <span>Progress</span>
              <span className="tabular-nums">
                <CountUp value={String(buildLog.shipped)} /> / {buildLog.total}
              </span>
            </div>
            <div className="h-1.5 w-full overflow-hidden rounded-full border border-line bg-paper">
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: percent / 100 }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: easeOut, delay: 0.2 }}
                className="h-full origin-left rounded-full bg-accent"
              />
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
