import { Compass, Eye, Radar, Search } from "lucide-react";
import { beliefs, productThinking, type ThinkingIcon } from "../../data/content";
import { PageHeading } from "../ui/PageHeading";
import { IndexCard } from "../ui/IndexCard";
import { Divider } from "../doodles/Divider";

const icons: Record<ThinkingIcon, typeof Radar> = { radar: Radar, search: Search, eye: Eye, compass: Compass };

export function Notebook() {
  return (
    <section id="notebook" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-content">
        <PageHeading no="Ch. 07" title="Notes to self" subtitle={productThinking.intro} />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {productThinking.categories.map((c, i) => {
            const Icon = icons[c.icon];
            return (
              <IndexCard key={c.title} rotate={(i % 2 === 0 ? -1 : 1) * 0.7}>
                <Icon size={20} strokeWidth={1.6} className="text-marker" />
                <h3 className="mt-3 font-hand text-2xl leading-none text-ink">{c.title}</h3>
                <p className="mt-2 font-serif text-sm leading-relaxed text-graphite">{c.description}</p>
              </IndexCard>
            );
          })}
        </div>

        <div className="mt-24">
          <p className="mb-8 font-note text-xs uppercase tracking-[0.2em] text-muted">Things I believe, for now</p>
          <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
            {beliefs.map((b, i) => (
              <div key={b.statement} className="relative">
                <p className="font-hand text-3xl leading-tight text-ink">{b.statement}</p>
                <p className="mt-1.5 font-serif text-sm text-muted">{b.support}</p>
                {i < beliefs.length - 1 && <Divider className="mt-6 w-full opacity-60 sm:hidden" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
