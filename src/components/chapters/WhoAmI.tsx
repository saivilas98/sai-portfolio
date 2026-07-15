import { motion } from "framer-motion";
import { hero, heroEducation } from "../../data/content";
import { PageHeading } from "../ui/PageHeading";
import { Divider } from "../doodles/Divider";
import { PaperclipMark } from "../doodles/Marks";

export function WhoAmI() {
  return (
    <section id="who" className="relative bg-paper-alt/50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-content">
        <PageHeading no="Ch. 02" title="Who am I" subtitle="A few honest lines, written the way I'd say them out loud." />

        <div className="grid gap-14 md:grid-cols-[1fr_1fr] md:gap-20">
          <div className="space-y-8">
            {hero.timeline.map((entry, i) => (
              <motion.div
                key={entry.label}
                className="relative pl-6"
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <span className="absolute left-0 top-2 h-2 w-2 rounded-full bg-marker" />
                <span className="absolute left-[3px] top-4 bottom-[-1.5rem] w-px bg-line last:hidden" />
                <h3 className="font-hand text-2xl text-ink">{entry.label}</h3>
                <p className="mt-1 max-w-md font-serif text-[0.98rem] leading-relaxed text-graphite">
                  {entry.text}
                </p>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="relative bg-card p-6 paper-edge md:mt-4"
            initial={{ opacity: 0, rotate: 3, y: 20 }}
            whileInView={{ opacity: 1, rotate: 1.5, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6 }}
          >
            <PaperclipMark className="-left-3 -top-6 h-14 w-8 -rotate-12" />
            <p className="font-note text-xs uppercase tracking-[0.2em] text-muted">Education</p>
            <Divider className="mt-2 mb-4 w-24" />
            <ul className="space-y-5">
              {heroEducation.map((e) => (
                <li key={e.institution}>
                  <p className="font-hand text-2xl leading-none text-ink">{e.institution}</p>
                  <p className="mt-1.5 font-serif text-sm text-muted">{e.detail}</p>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
