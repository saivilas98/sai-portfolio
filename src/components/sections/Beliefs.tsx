import { beliefs } from "../../data/content";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { TiltCard } from "../ui/TiltCard";

export function Beliefs() {
  return (
    <section id="beliefs" className="border-t border-line py-28 md:py-40">
      <Container>
        <SectionHeading index="06" eyebrow="What I Believe" title="A short, growing manifesto." />

        <div className="spotlight-group mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {beliefs.map((belief, i) => (
            <Reveal key={belief.statement} delay={i * 0.05}>
              <TiltCard className="card-lift flex h-full flex-col gap-3 rounded-2xl border border-line bg-surface p-7">
                <span className="font-mono text-xs text-accent/90 tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="font-display text-xl font-medium leading-snug text-ink text-balance">
                  {belief.statement}
                </h3>
                <p className="text-sm leading-relaxed text-muted">{belief.support}</p>
              </TiltCard>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
