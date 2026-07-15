import { beliefs } from "../../data/content";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function Beliefs() {
  return (
    <section id="beliefs" className="py-28 md:py-36 border-t border-line">
      <Container>
        <SectionHeading index="06" eyebrow="What I Believe" title="A short, growing manifesto." />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {beliefs.map((belief, i) => (
            <Reveal
              key={belief.statement}
              delay={i * 0.05}
              className="flex flex-col gap-3 rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-ink/30"
            >
              <span className="font-mono text-xs text-muted">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="font-display text-xl font-medium leading-snug text-ink text-balance">
                {belief.statement}
              </h3>
              <p className="text-sm leading-relaxed text-muted">{belief.support}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
