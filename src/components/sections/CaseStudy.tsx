import { motion } from "framer-motion";
import { caseStudy } from "../../data/content";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { lineRise, stagger } from "../../lib/motion";

/** In-view masked word reveal for pivotal lines. */
function MaskedWords({ text, className = "" }: { text: string; className?: string }) {
  const words = text.split(" ");
  return (
    <motion.p
      variants={stagger(0.035)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-90px" }}
      className={className}
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <span className="inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-bottom">
            <motion.span variants={lineRise} className="inline-block will-change-transform">
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </motion.p>
  );
}

function Detail({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-3 font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-accent">
        {heading}
      </h4>
      {children}
    </div>
  );
}

export function CaseStudy() {
  return (
    <section id="case-study" className="border-t border-line pt-28 md:pt-40">
      <Container>
        <SectionHeading index="03" eyebrow={caseStudy.meta} title="Ola Electric · Case Study" />

        <MaskedWords
          text={caseStudy.hook}
          className="mt-14 max-w-4xl font-display text-3xl font-medium leading-[1.15] tracking-tightest text-ink md:text-4xl lg:text-[2.75rem]"
        />

        <div className="mt-16 grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="flex flex-col gap-10">
            <Detail heading={caseStudy.context.heading}>
              <p className="text-base leading-relaxed text-ink/80 text-balance">
                {caseStudy.context.body}
              </p>
            </Detail>

            <Detail heading="What I worked on">
              <ul className="flex flex-col">
                {caseStudy.workedOn.map((item, i) => (
                  <Reveal
                    as="li"
                    key={item}
                    delay={i * 0.03}
                    className="flex items-baseline gap-4 border-b border-line py-3 text-sm leading-relaxed text-ink/75 last:border-b-0"
                  >
                    <span className="font-mono text-[10px] text-accent/80 tabular-nums" aria-hidden>
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {item}
                  </Reveal>
                ))}
              </ul>
            </Detail>
          </div>

          <div className="flex flex-col gap-10">
            <Detail heading={caseStudy.enjoyed.heading}>
              <p className="text-base leading-relaxed text-ink/80 text-balance">
                {caseStudy.enjoyed.body}
              </p>
              <p className="mt-3 border-l-2 border-accent/70 pl-4 text-base font-medium italic text-ink/90">
                {caseStudy.enjoyed.punch}
              </p>
            </Detail>

            <Detail heading="By the end">
              <ul className="flex flex-col gap-4">
                {caseStudy.byTheEnd.map((item, i) => (
                  <Reveal
                    as="li"
                    key={item}
                    delay={i * 0.05}
                    className="rounded-2xl border border-line bg-surface px-5 py-4 text-sm leading-relaxed text-ink/85"
                  >
                    {item}
                  </Reveal>
                ))}
              </ul>
            </Detail>
          </div>
        </div>

      </Container>

      {/* The moment gets the whole screen: an inverted, full-bleed band. */}
      <div className="relative mt-24 overflow-hidden bg-ink py-20 md:py-28">
        <span
          className="pointer-events-none absolute -top-14 left-[6%] select-none font-display text-[16rem] leading-none text-accent/20"
          aria-hidden
        >
          "
        </span>
        <Container className="relative">
          <Reveal>
            <h4 className="mb-8 font-mono text-[11px] font-medium uppercase tracking-[0.3em] text-accent">
              {caseStudy.moment.heading}
            </h4>
          </Reveal>
          <MaskedWords
            text={caseStudy.moment.quote}
            className="max-w-4xl font-display text-2xl font-medium leading-[1.25] text-paper text-balance md:text-4xl md:leading-[1.2]"
          />
        </Container>
      </div>
    </section>
  );
}
