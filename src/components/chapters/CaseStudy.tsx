import { motion } from "framer-motion";
import { caseStudy } from "../../data/content";
import { PageHeading } from "../ui/PageHeading";
import { Divider } from "../doodles/Divider";
import { Highlight } from "../doodles/Marks";

export function CaseStudy() {
  return (
    <section id="case-study" className="relative bg-paper-alt/50 px-6 py-24 md:py-32">
      <div className="mx-auto max-w-content">
        <PageHeading no="Ch. 06" title="A closer look" subtitle={caseStudy.meta} />

        <motion.p
          className="max-w-2xl font-hand text-3xl leading-snug text-ink sm:text-4xl"
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          {caseStudy.hook}
        </motion.p>

        <div className="mt-14 grid gap-14 md:grid-cols-[1fr_1fr] md:gap-16">
          <div className="space-y-10">
            <div>
              <p className="font-note text-xs uppercase tracking-[0.2em] text-muted">{caseStudy.context.heading}</p>
              <Divider className="my-3 w-20" />
              <p className="font-serif text-[0.98rem] leading-relaxed text-graphite">{caseStudy.context.body}</p>
            </div>

            <div>
              <p className="font-note text-xs uppercase tracking-[0.2em] text-muted">What I worked on</p>
              <Divider className="my-3 w-20" />
              <ul className="space-y-2">
                {caseStudy.workedOn.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 font-serif text-[0.95rem] leading-snug text-graphite">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-marker/70" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="space-y-10">
            <div>
              <p className="font-note text-xs uppercase tracking-[0.2em] text-muted">{caseStudy.enjoyed.heading}</p>
              <Divider className="my-3 w-20" />
              <p className="font-serif text-[0.98rem] leading-relaxed text-graphite">{caseStudy.enjoyed.body}</p>
              <p className="relative mt-3 inline-block font-hand text-2xl text-ink">
                <Highlight />
                {caseStudy.enjoyed.punch}
              </p>
            </div>

            <div>
              <p className="font-note text-xs uppercase tracking-[0.2em] text-muted">By the end</p>
              <Divider className="my-3 w-20" />
              <ul className="space-y-2">
                {caseStudy.byTheEnd.map((item) => (
                  <li key={item} className="font-serif text-[0.95rem] leading-snug text-graphite">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <motion.blockquote
          className="relative mx-auto mt-16 max-w-2xl border-l-2 border-marker/60 bg-card p-6 pl-7 font-hand text-2xl leading-snug text-ink paper-edge sm:text-3xl"
          style={{ rotate: -0.6 }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
        >
          <p className="mb-2 font-mono text-xs uppercase tracking-[0.2em] text-marker">{caseStudy.moment.heading}</p>
          &ldquo;{caseStudy.moment.quote}&rdquo;
        </motion.blockquote>
      </div>
    </section>
  );
}
