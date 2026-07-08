import { productThinking } from "../../data/content";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";

export function ProductThinking() {
  return (
    <section className="py-28 md:py-36 border-t border-line">
      <Container>
        <SectionHeading
          index="04"
          eyebrow="Work in progress"
          title="🧠 Product Thinking"
          description={productThinking.intro}
        />

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5">
          {productThinking.categories.map((category, i) => (
            <Reveal
              key={category.title}
              delay={i * 0.06}
              className="group relative flex flex-col gap-3 overflow-hidden rounded-2xl border border-line bg-surface p-7 transition-colors duration-300 hover:border-ink/30"
            >
              <div className="flex items-center justify-between">
                <span className="text-2xl">{category.emoji}</span>
                <span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                  Coming soon
                </span>
              </div>
              <h3 className="font-display text-lg font-medium text-ink">{category.title}</h3>
              <p className="text-sm leading-relaxed text-muted">{category.description}</p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
