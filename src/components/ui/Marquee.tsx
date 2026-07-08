export function Marquee({ items }: { items: string[] }) {
  const content = [...items, ...items];

  return (
    <div className="relative overflow-hidden border-y border-line bg-surface py-5" aria-hidden>
      <div className="marquee-track flex w-max items-center gap-10 whitespace-nowrap">
        {content.map((item, i) => (
          <span
            key={i}
            className="flex items-center gap-10 font-mono text-sm uppercase tracking-[0.25em] text-muted"
          >
            {item}
            <span className="text-line">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
