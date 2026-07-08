import { journey } from "../../data/content";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import type { JourneyEntry } from "../../data/content";

function TimelineColumn({ label, entries }: { label: string; entries: JourneyEntry[] }) {
  return (
    <div>
      <Reveal>
        <p className="mb-6 font-mono text-xs uppercase tracking-[0.25em] text-muted">{label}</p>
      </Reveal>
      <ol className="relative flex flex-col gap-8 border-l border-line pl-8">
        {entries.map((entry, i) => (
          <Reveal as="li" key={entry.title} delay={i * 0.06} className="relative">
            <span className="absolute -left-[2.55rem] top-1 flex h-5 w-5 items-center justify-center rounded-full border border-line bg-surface text-xs">
              {entry.emoji}
            </span>
            <h3 className="font-display text-lg font-medium text-ink">{entry.title}</h3>
            <p className="mt-1.5 text-sm leading-relaxed text-muted">{entry.detail}</p>
          </Reveal>
        ))}
      </ol>
    </div>
  );
}

export function Journey() {
  return (
    <section id="journey" className="py-28 md:py-36 border-t border-line">
      <Container>
        <SectionHeading
          index="01"
          eyebrow="My Journey"
          title="Every turn taught me something."
          description={journey.context}
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-16">
          <TimelineColumn label="The Foundation" entries={journey.foundation} />
          <TimelineColumn label="The Pivot" entries={journey.pivot} />
        </div>
      </Container>
    </section>
  );
}
