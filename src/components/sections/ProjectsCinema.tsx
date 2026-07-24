import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { ArrowUpRight, Code2 } from "lucide-react";
import {
  featuredExhibits,
  forgeSeries,
  projects,
  projectsIntro,
  type FeaturedExhibit,
  type Project,
  type ProjectStatus,
} from "../../data/content";
import { drawLine } from "../../lib/motion";
import { Container } from "../ui/Container";
import { PhoneFrame } from "../ui/PhoneFrame";
import { ProjectModal } from "../ui/ProjectModal";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { WindowFrame } from "../ui/WindowFrame";

function CategoryPill({ category }: { category: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
      {category}
    </span>
  );
}

function StatusPill({ status }: { status: ProjectStatus }) {
  if (status === "Live") {
    return (
      <span className="inline-flex items-center gap-2 rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-accent">
        <span className="relative flex h-1.5 w-1.5">
          <span className="absolute inline-flex h-full w-full animate-ping motion-reduce:animate-none rounded-full bg-accent/70 opacity-75" />
          <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
        </span>
        Live
      </span>
    );
  }
  return (
    <span className="inline-flex items-center rounded-full border border-line px-3 py-1 font-mono text-[10px] uppercase tracking-[0.18em] text-muted">
      {status}
    </span>
  );
}

function TechTags({ tech }: { tech: string[] }) {
  return (
    <ul className="flex flex-wrap gap-2">
      {tech.map((t) => (
        <li
          key={t}
          className="rounded-md border border-line px-2.5 py-1 font-mono text-[10px] uppercase tracking-[0.1em] text-muted"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}

function ExhibitLinks({ liveUrl, githubUrl, name }: { liveUrl?: string; githubUrl?: string; name: string }) {
  if (!liveUrl && !githubUrl) return null;
  return (
    <div className="flex flex-wrap items-center gap-6">
      {liveUrl && (
        <a
          href={liveUrl}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:text-accent"
        >
          <span className="underline-reveal is-active">Visit {name}</span>
          <ArrowUpRight
            size={14}
            className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </a>
      )}
      {githubUrl && (
        <a
          href={githubUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
        >
          <Code2 size={14} /> Source
        </a>
      )}
    </div>
  );
}

/** Full-width exhibit: image on one side, the story on the other. */
function FeatureExhibit({ exhibit, index }: { exhibit: FeaturedExhibit; index: number }) {
  const [primary, secondary] = exhibit.images;

  return (
    <article className="grid grid-cols-1 items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <Reveal className="relative">
        <WindowFrame src={primary.src} alt={primary.alt} />
        {secondary && (
          <div className="absolute -bottom-8 -right-6 hidden w-[42%] sm:block md:-right-10">
            <WindowFrame src={secondary.src} alt={secondary.alt} className="shadow-[0_30px_60px_-24px_rgb(var(--shadow-rgb)/0.8)]" />
          </div>
        )}
      </Reveal>

      <Reveal delay={0.1}>
        <p className="font-mono text-xs tracking-[0.25em] text-accent" aria-hidden>
          {String(index).padStart(2, "0")} / {String(featuredExhibits.length).padStart(2, "0")}
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-2">
          <CategoryPill category={exhibit.category} />
          <StatusPill status={exhibit.status} />
        </div>
        <h3 className="mt-5 font-display text-3xl font-medium leading-[1.05] tracking-tightest text-ink md:text-4xl">
          {exhibit.name}
        </h3>
        <motion.span
          variants={drawLine}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="mt-4 block h-px w-14 origin-left bg-accent/60"
          aria-hidden
        />
        <p className="mt-4 max-w-md text-base leading-relaxed text-muted text-balance">
          {exhibit.tagline}
        </p>

        <div className="mt-6 flex flex-col gap-3 border-t border-line pt-6 text-sm leading-relaxed text-ink/75">
          {exhibit.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>

        <p className="mt-5 border-l-2 border-accent/60 pl-3 text-sm italic text-ink/60">{exhibit.why}</p>

        <div className="mt-6">
          <TechTags tech={exhibit.tech} />
        </div>

        <div className="mt-7">
          <ExhibitLinks liveUrl={exhibit.liveUrl} githubUrl={exhibit.githubUrl} name={exhibit.name} />
        </div>
      </Reveal>
    </article>
  );
}

/** Paired exhibit: a smaller, denser card for the two-up row. */
function CompactExhibit({ exhibit, index }: { exhibit: FeaturedExhibit; index: number }) {
  return (
    <Reveal delay={index * 0.05} className="lit card-lift flex h-full flex-col rounded-2xl border border-line bg-surface p-6 sm:p-7">
      <WindowFrame src={exhibit.images[0].src} alt={exhibit.images[0].alt} />

      <div className="mt-6 flex flex-wrap items-center gap-2">
        <CategoryPill category={exhibit.category} />
        <StatusPill status={exhibit.status} />
      </div>
      <h3 className="mt-4 font-display text-2xl font-medium tracking-tightest text-ink">{exhibit.name}</h3>
      <p className="mt-2 text-sm leading-relaxed text-muted text-balance">{exhibit.tagline}</p>
      <p className="mt-4 border-l-2 border-accent/60 pl-3 text-sm italic text-ink/60">{exhibit.why}</p>

      <div className="mt-5">
        <TechTags tech={exhibit.tech} />
      </div>

      <div className="mt-6">
        <ExhibitLinks liveUrl={exhibit.liveUrl} githubUrl={exhibit.githubUrl} name={exhibit.name} />
      </div>
    </Reveal>
  );
}

/** One Forge app, full-viewport, inside the horizontal reel. */
function ForgeSlide({
  project,
  index,
  total,
  progress,
  onOpen,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
  onOpen: (id: string) => void;
}) {
  const drift = useTransform(progress, [(index - 1) / total, (index + 1) / total], [70, -70]);
  const slowDrift = useTransform(drift, (v) => v * 0.55);
  const fastDrift = useTransform(drift, (v) => v * 1.25);
  const copyLag = useTransform(progress, [(index - 1) / total, (index + 1) / total], [60, -60]);

  return (
    <div className="relative flex h-full w-screen flex-none items-center">
      <span
        className="text-outline pointer-events-none absolute right-[4%] top-1/2 -translate-y-1/2 select-none font-display text-[18rem] font-bold leading-none opacity-60"
        aria-hidden
      >
        {index + 1}
      </span>
      <div
        className="pointer-events-none absolute right-[8%] top-1/2 h-[30rem] w-[30rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(var(--color-accent)/0.07),transparent_65%)]"
        aria-hidden
      />

      <div className="relative mx-auto grid w-full max-w-content grid-cols-[1fr_1fr] items-center gap-12 px-10 xl:px-6">
        <motion.div style={{ x: copyLag }} className="flex min-h-0 flex-col gap-5">
          <p className="font-mono text-xs tracking-[0.25em] text-accent" aria-hidden>
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
          <div className="flex flex-wrap items-center gap-2">
            <CategoryPill category={project.category} />
            <StatusPill status={project.status} />
          </div>
          <div>
            <h3 className="font-display text-4xl font-medium leading-[1.05] tracking-tightest text-ink xl:text-5xl">
              {project.name}
            </h3>
            <p className="mt-3 max-w-md text-base text-muted text-balance">{project.tagline}</p>
          </div>
          <p className="max-w-md border-l-2 border-accent/60 pl-3 text-sm italic text-ink/60">{project.why}</p>

          <div className="flex flex-wrap items-center gap-6">
            <button
              type="button"
              onClick={() => onOpen(project.id)}
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:text-accent"
            >
              <span className="underline-reveal is-active">See the full story</span>
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </button>
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
            >
              Visit
              <ArrowUpRight
                size={14}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </motion.div>

        <div className="flex items-center justify-center gap-5">
          <PhoneFrame
            src={project.images[0].src}
            alt={project.images[0].alt}
            y={slowDrift}
            rotate={-4}
            className="mt-16"
          />
          <PhoneFrame src={project.images[1].src} alt={project.images[1].alt} y={drift} rotate={0} className="-mt-8" />
          <PhoneFrame
            src={project.images[2].src}
            alt={project.images[2].alt}
            y={fastDrift}
            rotate={4}
            className="mt-10"
          />
        </div>
      </div>
    </div>
  );
}

/** Desktop: vertical scroll drives a pinned horizontal travel through the four Forge apps. */
function ForgeReel({ onOpen }: { onOpen: (id: string) => void }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const { scrollYProgress } = useScroll({ target: trackRef });
  const x = useTransform(scrollYProgress, [0, 1], ["0vw", `-${(projects.length - 1) * 100}vw`]);

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setCurrent(Math.min(projects.length - 1, Math.floor(v * projects.length)));
  });

  function goTo(index: number) {
    const el = trackRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const trackTop = rect.top + window.scrollY;
    const scrollable = el.offsetHeight - window.innerHeight;
    const target = trackTop + (index / (projects.length - 1)) * scrollable;
    window.scrollTo({ top: target, behavior: "smooth" });
  }

  return (
    <div ref={trackRef} className="relative" style={{ height: `${projects.length * 100}vh` }}>
      <div className="sticky top-0 flex h-screen flex-col overflow-hidden">
        <motion.div style={{ x }} className="flex min-h-0 flex-1 will-change-transform">
          {projects.map((project, index) => (
            <ForgeSlide
              key={project.id}
              project={project}
              index={index}
              total={projects.length}
              progress={scrollYProgress}
              onOpen={onOpen}
            />
          ))}
        </motion.div>

        <div className="mx-auto w-full max-w-content px-10 pb-8 xl:px-6">
          <div className="mb-3 flex items-baseline justify-between font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
            <span className="relative block h-[1.1em] overflow-hidden text-ink">
              <AnimatePresence mode="popLayout" initial={false}>
                <motion.span
                  key={projects[current].id}
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  exit={{ y: "-110%" }}
                  transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  {projects[current].name}
                </motion.span>
              </AnimatePresence>
            </span>
            <span aria-hidden>
              {String(current + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
            </span>
          </div>
          <div className="flex items-center gap-2">
            {projects.map((project, i) => (
              <button
                key={project.id}
                type="button"
                onClick={() => goTo(i)}
                aria-label={`Go to ${project.name}`}
                aria-current={i === current}
                className="group flex-1 py-2"
              >
                <span
                  className={`block h-[3px] w-full rounded-full transition-colors duration-500 ${
                    i <= current ? "bg-accent" : "bg-line group-hover:bg-muted/60"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

/** Mobile & reduced-motion: each Forge app is a card with a snap rail of its three real screens. */
function ForgeSceneCard({
  project,
  index,
  onOpen,
}: {
  project: Project;
  index: number;
  onOpen: (id: string) => void;
}) {
  return (
    <Reveal className="card-lift rounded-3xl border border-line bg-surface p-6 sm:p-8">
      <p className="mb-3 font-mono text-xs tracking-[0.25em] text-accent" aria-hidden>
        {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
      </p>
      <div className="flex flex-wrap items-center gap-2">
        <CategoryPill category={project.category} />
        <StatusPill status={project.status} />
      </div>
      <h3 className="mt-4 font-display text-3xl font-medium leading-tight tracking-tightest text-ink">
        {project.name}
      </h3>
      <p className="mt-2 text-base text-muted text-balance">{project.tagline}</p>
      <p className="mt-3 border-l-2 border-accent/60 pl-3 text-sm italic text-ink/60">{project.why}</p>

      <div className="snap-rail -mx-6 mt-6 flex items-center gap-4 overflow-x-auto px-6 py-2 sm:-mx-8 sm:px-8">
        {project.images.map((image) => (
          <PhoneFrame key={image.src} src={image.src} alt={image.alt} />
        ))}
      </div>

      <div className="mt-5 flex flex-wrap items-center gap-6">
        <button
          type="button"
          onClick={() => onOpen(project.id)}
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:text-accent"
        >
          <span className="underline-reveal is-active">See the full story</span>
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </button>
        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="group inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
        >
          Visit
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>
    </Reveal>
  );
}

function ForgeSeriesSection({ onOpen }: { onOpen: (id: string) => void }) {
  const prefersReducedMotion = useReducedMotion();
  const pinned = !prefersReducedMotion;

  return (
    <div className="border-t border-line bg-surface/50 py-20 md:py-28">
      <Container>
        <Reveal>
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-accent">{forgeSeries.eyebrow}</p>
          <p className="mt-4 max-w-2xl font-display text-2xl font-medium leading-snug tracking-tight text-ink md:text-3xl text-balance">
            {forgeSeries.statement}
          </p>
        </Reveal>
      </Container>

      {pinned ? (
        <>
          <div className="hidden lg:block">
            <ForgeReel onOpen={onOpen} />
          </div>
          <Container className="mt-14 flex flex-col gap-8 lg:hidden">
            {projects.map((project, i) => (
              <ForgeSceneCard key={project.id} project={project} index={i} onOpen={onOpen} />
            ))}
          </Container>
        </>
      ) : (
        <Container className="mt-14 flex flex-col gap-8">
          {projects.map((project, i) => (
            <ForgeSceneCard key={project.id} project={project} index={i} onOpen={onOpen} />
          ))}
        </Container>
      )}
    </div>
  );
}

export function ProjectsCinema() {
  const [fragments, shadowProtocol, numberHunt, shiba] = featuredExhibits;
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeProject = projects.find((p) => p.id === activeId) ?? null;

  return (
    <section id="work" className="border-t border-line pt-28 md:pt-40">
      <Container>
        <SectionHeading
          index="02"
          eyebrow={projectsIntro.eyebrow}
          title={projectsIntro.title}
          description={projectsIntro.description}
        />
      </Container>

      <div className="mt-20 md:mt-28">
        <ForgeSeriesSection onOpen={setActiveId} />
      </div>

      <Container className="mt-28 flex flex-col gap-28 pb-8 md:mt-36 md:gap-36">
        <FeatureExhibit exhibit={fragments} index={1} />

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <CompactExhibit exhibit={shadowProtocol} index={2} />
          <CompactExhibit exhibit={numberHunt} index={3} />
          <CompactExhibit exhibit={shiba} index={4} />
        </div>
      </Container>

      <ProjectModal project={activeProject} onClose={() => setActiveId(null)} />
    </section>
  );
}
