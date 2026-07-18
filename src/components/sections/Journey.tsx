import { useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { BarChart3, Briefcase, GraduationCap, Rocket, Target } from "lucide-react";
import { journey } from "../../data/content";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import type { JourneyEntry, JourneyIcon } from "../../data/content";

const icons: Record<JourneyIcon, typeof GraduationCap> = {
  "graduation-cap": GraduationCap,
  briefcase: Briefcase,
  rocket: Rocket,
  "bar-chart-3": BarChart3,
  target: Target,
};

function PhaseMarker({ label }: { label: string }) {
  return (
    <Reveal className="relative flex justify-start md:justify-center">
      <span className="z-10 -ml-1.5 inline-flex rounded-full border border-accent/40 bg-paper px-4 py-1.5 font-mono text-xs uppercase tracking-[0.25em] text-accent md:ml-0">
        {label}
      </span>
    </Reveal>
  );
}

function Stop({ entry, index }: { entry: JourneyEntry; index: number }) {
  const Icon = icons[entry.icon];
  const left = index % 2 === 0;

  return (
    <Reveal as="li" className="relative grid grid-cols-[1.5rem_1fr] gap-5 md:grid-cols-2 md:gap-0">
      {/* Node on the spine: pops into place as the story arrives at it. */}
      <motion.span
        initial={{ scale: 0.4, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        viewport={{ once: true, margin: "-90px" }}
        transition={{ type: "spring", stiffness: 320, damping: 16 }}
        className="absolute -left-[0.5rem] top-1 z-10 flex h-7 w-7 items-center justify-center rounded-full border border-line bg-surface text-accent md:left-1/2 md:-translate-x-1/2"
        aria-hidden
      >
        <Icon size={12} />
      </motion.span>

      <span className="md:hidden" aria-hidden />
      <div
        className={`max-w-md ${
          left
            ? "md:col-start-1 md:pr-14 md:text-right md:justify-self-end"
            : "md:col-start-2 md:pl-14 md:text-left"
        }`}
      >
        <h3 className="font-display text-lg font-medium text-ink md:text-xl">{entry.title}</h3>
        <p className="mt-1.5 text-sm leading-relaxed text-muted">{entry.detail}</p>
      </div>
    </Reveal>
  );
}

export function Journey() {
  const spineRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: spineRef,
    offset: ["start 0.75", "end 0.45"],
  });
  const drawn = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });

  const stops: { kind: "marker" | "entry"; label?: string; entry?: JourneyEntry }[] = [
    { kind: "marker", label: "The Foundation" },
    ...journey.foundation.map((entry) => ({ kind: "entry" as const, entry })),
    { kind: "marker", label: "The Pivot" },
    ...journey.pivot.map((entry) => ({ kind: "entry" as const, entry })),
  ];

  let entryIndex = -1;

  return (
    <section id="journey" className="border-t border-line py-28 md:py-40">
      <Container>
        <SectionHeading
          index="01"
          eyebrow="My Journey"
          title="Every turn taught me something."
          description={journey.context}
        />

        <div ref={spineRef} className="relative mt-20">
          {/* Spine: a faint rule the story draws over as you travel it. */}
          <div
            className="absolute inset-y-0 left-[0.35rem] w-px bg-line md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />
          <motion.div
            style={{ scaleY: drawn }}
            className="absolute inset-y-0 left-[0.35rem] w-px origin-top bg-accent md:left-1/2 md:-translate-x-1/2"
            aria-hidden
          />

          <ol className="flex flex-col gap-12 md:gap-16">
            {stops.map((stop) => {
              if (stop.kind === "marker") {
                return <PhaseMarker key={stop.label} label={stop.label!} />;
              }
              entryIndex += 1;
              return <Stop key={stop.entry!.title} entry={stop.entry!} index={entryIndex} />;
            })}
          </ol>
        </div>
      </Container>
    </section>
  );
}
