import { Reveal } from "./Reveal";

/**
 * Chapter opener: an oversized outlined numeral sits behind the title,
 * giving each section the feel of a film act.
 */
export function SectionHeading({
  eyebrow,
  title,
  description,
  index,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  index?: string;
}) {
  return (
    <div className="relative max-w-3xl">
      {index && (
        <span
          className="ghost-number pointer-events-none absolute -top-14 -left-3 select-none font-display text-[9rem] font-bold leading-none md:-top-20 md:-left-6 md:text-[13rem]"
          aria-hidden
        >
          {index}
        </span>
      )}
      <div className="relative flex flex-col gap-5">
        <Reveal>
          <span className="inline-flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.3em] text-accent">
            <span className="h-px w-8 bg-accent/60" aria-hidden />
            {eyebrow}
          </span>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="font-display text-4xl md:text-5xl lg:text-[3.4rem] font-medium leading-[1.06] tracking-tightest text-ink text-balance">
            {title}
          </h2>
        </Reveal>
        {description && (
          <Reveal delay={0.12}>
            <p className="max-w-2xl text-muted text-base md:text-lg leading-relaxed text-balance">
              {description}
            </p>
          </Reveal>
        )}
      </div>
    </div>
  );
}
