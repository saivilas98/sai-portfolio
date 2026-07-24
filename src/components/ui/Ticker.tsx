function Row({ items, reverse = false }: { items: string[]; reverse?: boolean }) {
  const content = [...items, ...items];
  return (
    <div className="marquee-mask">
      <div
        className={`${reverse ? "marquee-track-rev" : "marquee-track"} flex w-max items-center gap-10 whitespace-nowrap will-change-transform`}
      >
        {content.map((item, i) => (
          <span
            key={i}
            className={`flex items-center gap-10 font-display text-base font-medium uppercase tracking-[0.12em] md:text-lg ${
              reverse ? "text-outline" : "text-ink/80"
            }`}
          >
            {item}
            <span className={reverse ? "text-line" : "text-accent"} style={{ WebkitTextStroke: 0 }}>
              ✦
            </span>
          </span>
        ))}
      </div>
    </div>
  );
}

/** Two counter-rotating rows — solid over outlined — tilted a degree off level. */
export function Ticker({ items }: { items: string[] }) {
  return (
    <div className="relative -my-4 py-4" aria-hidden>
      <div className="marquee-shell -rotate-1 space-y-2 border-y border-line bg-surface py-4">
        <Row items={items} />
        <Row items={items} reverse />
      </div>
    </div>
  );
}
