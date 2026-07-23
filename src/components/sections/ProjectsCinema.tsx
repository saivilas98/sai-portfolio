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
import { ArrowUpRight } from "lucide-react";
import { projectLearnings, projects, type Project } from "../../data/content";
import { drawLine } from "../../lib/motion";
import { Container } from "../ui/Container";
import { PhoneFrame } from "../ui/PhoneFrame";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { Toggle } from "../ui/Toggle";

function ProjectStory({ project }: { project: Project }) {
  const learning = projectLearnings[project.id];
  return (
    <div className="flex flex-col gap-4 text-sm leading-relaxed text-ink/75">
      <div className="flex flex-col gap-2.5">
        {project.detail.paragraphs.map((p) => (
          <p key={p}>{p}</p>
        ))}
      </div>
      {(project.detail.cut || project.detail.kept) && (
        <div className="flex flex-col gap-2 border-t border-line pt-4">
          {project.detail.cut && (
            <p>
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                Cut —{" "}
              </span>
              {project.detail.cut}
            </p>
          )}
          {project.detail.kept && (
            <p>
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                {project.detail.cut ? "Kept" : "Features"} —{" "}
              </span>
              {project.detail.kept}
            </p>
          )}
        </div>
      )}
      {learning && <p className="border-l-2 border-accent/60 pl-3 italic text-ink/60">{learning}</p>}
    </div>
  );
}

function VisitLink({ project }: { project: Project }) {
  return (
    <a
      href={project.url}
      target="_blank"
      rel="noreferrer"
      className="group inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink transition-colors hover:text-accent"
    >
      <span className="underline-reveal is-active">Visit {project.name}</span>
      <ArrowUpRight
        size={14}
        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
      />
    </a>
  );
}

/** One full-viewport scene inside the horizontal reel. Racks into focus as it
 *  arrives on stage; neighbours soften and recede rather than sitting flat. */
function CinemaSlide({
  project,
  index,
  total,
  progress,
}: {
  project: Project;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const drift = useTransform(progress, [(index - 1) / total, (index + 1) / total], [70, -70]);
  const slowDrift = useTransform(drift, (v) => v * 0.55);
  const fastDrift = useTransform(drift, (v) => v * 1.25);
  const copyLag = useTransform(progress, [(index - 1) / total, (index + 1) / total], [60, -60]);

  // Rack focus: distance from this slide's stage position drives scale,
  // opacity and blur, so the reel reads like a lens pulling focus between
  // scenes instead of a flat filmstrip.
  const distance = useTransform(progress, (p) => Math.abs(p * (total - 1) - index));
  const scale = useTransform(distance, [0, 1], [1, 0.93]);
  const opacity = useTransform(distance, [0, 1], [1, 0.35]);
  const blurPx = useTransform(distance, [0, 0.5, 1], [0, 1.5, 5]);
  const filter = useTransform(blurPx, (b) => `blur(${b}px)`);

  return (
    <div className="relative flex h-full w-screen flex-none items-center">
      {/* Ghost numeral anchors each scene like a slate. */}
      <span
        className="text-outline pointer-events-none absolute right-[4%] top-1/2 -translate-y-1/2 select-none font-display text-[22rem] font-bold leading-none opacity-60"
        aria-hidden
      >
        {index + 1}
      </span>
      <div
        className="pointer-events-none absolute right-[8%] top-1/2 h-[34rem] w-[34rem] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(var(--color-accent)/0.07),transparent_65%)]"
        aria-hidden
      />

      <motion.div
        style={{ scale, opacity, filter }}
        className="relative mx-auto grid w-full max-w-content grid-cols-[1fr_1fr] items-center gap-12 px-10 will-change-transform xl:px-6"
      >
        <motion.div style={{ x: copyLag }} className="flex min-h-0 flex-col gap-5">
          <p className="font-mono text-xs tracking-[0.25em] text-accent" aria-hidden>
            {String(index + 1).padStart(2, "0")} / {String(total).padStart(2, "0")}
          </p>
          <div>
            <h3 className="font-display text-4xl font-medium leading-[1.05] tracking-tightest text-ink xl:text-5xl">
              {project.name}
            </h3>
            <motion.span
              variants={drawLine}
              initial="hidden"
              animate="show"
              className="mt-4 block h-px w-14 origin-left bg-accent/60"
              aria-hidden
            />
            <p className="mt-4 max-w-md text-base text-muted text-balance">{project.tagline}</p>
          </div>
          <div className="mt-2 max-w-lg border-t border-line pt-5">
            <p className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
              {project.toggleLabel}
            </p>
            <ProjectStory project={project} />
          </div>
          <VisitLink project={project} />
        </motion.div>

        <div className="flex items-center justify-center gap-5">
          <PhoneFrame
            src={project.images[0].src}
            alt={project.images[0].alt}
            y={slowDrift}
            rotate={-4}
            className="mt-16"
          />
          <PhoneFrame
            src={project.images[1].src}
            alt={project.images[1].alt}
            y={drift}
            rotate={0}
            className="-mt-8"
          />
          <PhoneFrame
            src={project.images[2].src}
            alt={project.images[2].alt}
            y={fastDrift}
            rotate={4}
            className="mt-10"
          />
        </div>
      </motion.div>
    </div>
  );
}

/** Desktop: vertical scroll drives a pinned horizontal travel through all four products. */
function CinemaReel() {
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
            <CinemaSlide
              key={project.id}
              project={project}
              index={index}
              total={projects.length}
              progress={scrollYProgress}
            />
          ))}
        </motion.div>

        {/* Reel counter + chapter markers, pinned to the bottom of the stage. */}
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
              {String(current + 1).padStart(2, "0")} — {String(projects.length).padStart(2, "0")}
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

/** Mobile & reduced-motion: each product is a scene card with a snap rail of screens. */
function SceneCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal className="card-lift rounded-3xl border border-line bg-surface p-6 sm:p-8">
      <p className="mb-3 font-mono text-xs tracking-[0.25em] text-accent" aria-hidden>
        {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
      </p>
      <h3 className="font-display text-3xl font-medium leading-tight tracking-tightest text-ink">
        {project.name}
      </h3>
      <p className="mt-2 text-base text-muted text-balance">{project.tagline}</p>

      <div className="snap-rail -mx-6 mt-6 flex items-center gap-4 overflow-x-auto px-6 py-2 sm:-mx-8 sm:px-8">
        {project.images.map((image) => (
          <PhoneFrame key={image.src} src={image.src} alt={image.alt} />
        ))}
      </div>

      <div className="mt-5">
        <Toggle label={project.toggleLabel}>
          <ProjectStory project={project} />
        </Toggle>
      </div>

      <div className="mt-4">
        <VisitLink project={project} />
      </div>
    </Reveal>
  );
}

export function ProjectsCinema() {
  const prefersReducedMotion = useReducedMotion();
  const pinned = !prefersReducedMotion;

  return (
    <section id="work" className="border-t border-line pt-28 md:pt-40">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="Things I've Built"
          title="Products born from everyday problems."
          description="Each started with user pain, evolved through iterations, and shipped with a focus on simplicity over feature count."
        />
      </Container>

      {pinned ? (
        <>
          <div className="hidden lg:block">
            <CinemaReel />
          </div>
          <Container className="mt-14 flex flex-col gap-8 pb-20 lg:hidden">
            {projects.map((project, index) => (
              <SceneCard key={project.id} project={project} index={index} />
            ))}
          </Container>
        </>
      ) : (
        <Container className="mt-14 flex flex-col gap-8 pb-20">
          {projects.map((project, index) => (
            <SceneCard key={project.id} project={project} index={index} />
          ))}
        </Container>
      )}
    </section>
  );
}
