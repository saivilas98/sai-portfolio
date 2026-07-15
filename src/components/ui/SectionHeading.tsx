import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  index,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  index?: string;
}) {
  const alignment = align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <div className={`flex flex-col gap-4 ${alignment} max-w-2xl`}>
      <Reveal>
        <span className="inline-flex items-center gap-3 font-mono text-xs font-medium uppercase tracking-[0.25em] text-muted">
          {index && <span className="text-ink">{index}</span>}
          <span className="h-px w-6 bg-line" aria-hidden />
          {eyebrow}
        </span>
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl md:text-4xl lg:text-[2.75rem] font-medium leading-[1.12] text-ink text-balance">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.1}>
          <p className="text-muted text-base md:text-lg leading-relaxed text-balance">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
