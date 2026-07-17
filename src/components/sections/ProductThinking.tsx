import { Compass, Eye, Radar, Search } from "lucide-react";
import { productThinking } from "../../data/content";
import type { ThinkingIcon } from "../../data/content";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { TiltCard } from "../ui/TiltCard";

const icons: Record<ThinkingIcon, typeof Radar> = {
  radar: Radar,
  search: Search,
  eye: Eye,
  compass: Compass,
};

export function ProductThinking() {
  return (
    <section className="border-t border-line py-28 md:py-40">
      <Container>
        <SectionHeading
          index="04"
          eyebrow="Work in progress"
          title="Product Thinking"
          description={productThinking.intro}
        />

        <div className="spotlight-group mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {productThinking.categories.map((category, i) => {
            const Icon = icons[category.icon];
            return (
              <Reveal key={category.title} delay={i * 0.06}>
                <TiltCard className="card-lift group relative flex h-full flex-col gap-4 overflow-hidden rounded-2xl border border-line bg-surface p-7">
                  <div className="flex items-center justify-between">
                    <Icon size={20} className="text-accent" />
                    <span className="rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                      Coming soon
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-medium text-ink">{category.title}</h3>
                  <p className="text-sm leading-relaxed text-muted">{category.description}</p>
                </TiltCard>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
