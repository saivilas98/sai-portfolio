import { caseStudy } from "../../data/content";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function CaseStudy() {
  return (
    <section id="case-study" className="py-28 md:py-36 border-t border-line">
      <Container>
        <SectionHeading index="03" eyebrow={caseStudy.meta} title="🚀 Ola Electric — Case Study" />

        <Reveal delay={0.05} className="mt-10 rounded-[1.75rem] border border-line bg-surface p-7 sm:p-10 md:p-14">
          <p className="font-display text-2xl md:text-3xl font-medium leading-snug text-ink text-balance max-w-3xl">
            {caseStudy.hook}
          </p>

          <div className="mt-14 grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="flex flex-col gap-8">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-3">
                  {caseStudy.context.heading}
                </h4>
                <p className="text-base leading-relaxed text-ink/80 text-balance">
                  {caseStudy.context.body}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-3">
                  What I worked on
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {caseStudy.workedOn.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/75">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-ink/40" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-col gap-8">
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-3">
                  {caseStudy.enjoyed.heading}
                </h4>
                <p className="text-base leading-relaxed text-ink/80 text-balance">
                  {caseStudy.enjoyed.body}
                </p>
                <p className="mt-2 text-base font-medium italic text-ink/90">
                  {caseStudy.enjoyed.punch}
                </p>
              </div>

              <div>
                <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-3">
                  By the end
                </h4>
                <ul className="flex flex-col gap-2.5">
                  {caseStudy.byTheEnd.map((item) => (
                    <li key={item} className="flex gap-3 text-sm leading-relaxed text-ink/75">
                      <span className="mt-2 h-1 w-1 flex-none rounded-full bg-ink/40" aria-hidden />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          <Reveal
            delay={0.1}
            className="mt-14 rounded-2xl bg-paper border border-line px-6 py-8 sm:px-10 sm:py-10"
          >
            <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">
              {caseStudy.moment.heading}
            </h4>
            <p className="font-display text-xl md:text-2xl leading-snug text-ink text-balance">
              "{caseStudy.moment.quote}"
            </p>
          </Reveal>
        </Reveal>
      </Container>
    </section>
  );
}
