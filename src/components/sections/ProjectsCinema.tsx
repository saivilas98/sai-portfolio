import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projectLearnings, projects, type Project } from "../../data/content";
import { Container } from "../ui/Container";
import { PhoneFrame } from "../ui/PhoneFrame";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { easeOut } from "../../lib/motion";

type Step = { title: string; body: React.ReactNode };

/** Each project's toggleLabel ("The idea · What I cut · What I learned")
 *  names the acts of its story. */
function buildSteps(project: Project): Step[] {
  const labels = project.toggleLabel.split("·").map((s) => s.trim());
  const learning = projectLearnings[project.id];

  const steps: Step[] = [
    {
      title: labels[0] ?? project.detail.eyebrow,
      body: (
        <div className="flex flex-col gap-3">
          {project.detail.paragraphs.map((p) => (
            <p key={p}>{p}</p>
          ))}
        </div>
      ),
    },
    {
      title: labels[1] ?? "Decisions",
      body: (
        <div className="flex flex-col gap-4">
          {project.detail.cut && (
            <div>
              <p className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                Cut
              </p>
              <p>{project.detail.cut}</p>
            </div>
          )}
          {project.detail.kept && (
            <div>
              <p className="mb-1.5 font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                {project.detail.cut ? "Kept" : "Features"}
              </p>
              <p>{project.detail.kept}</p>
            </div>
          )}
        </div>
      ),
    },
    {
      title: labels[2] ?? "What I learned",
      body: learning ? <p className="italic text-ink/70">{learning}</p> : null,
    },
  ];

  return steps.filter((s) => s.body !== null);
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

/** One story act. The hairline spine warms to accent while its act is live. */
function StoryStep({
  step,
  index,
  active,
}: {
  step: Step;
  index: number;
  active: boolean;
}) {
  return (
    <div
      className={`relative flex flex-col justify-center border-l py-10 pl-7 transition-colors duration-500 md:pl-9 lg:min-h-[44vh] ${
        active ? "border-accent/70" : "border-line"
      }`}
    >
      <p
        className={`font-mono text-[11px] tracking-[0.25em] transition-colors duration-500 ${
          active ? "text-accent" : "text-muted"
        }`}
        aria-hidden
      >
        {String(index + 1).padStart(2, "0")}
      </p>
      <h4 className="mt-2 font-display text-xl font-medium tracking-tight text-ink md:text-2xl">
        {step.title}
      </h4>
      <div className="mt-4 max-w-lg text-[0.95rem] leading-relaxed text-ink/75">{step.body}</div>
    </div>
  );
}

/** Sticky device: the screen changes as the story advances beside it. */
function ScreenStage({ project, active }: { project: Project; active: number }) {
  const image = project.images[Math.min(active, project.images.length - 1)];

  return (
    <div className="relative flex flex-col items-center gap-7">
      {/* Pool of light grounding the device. */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgb(var(--color-accent)/0.10),transparent_62%)]"
        aria-hidden
      />

      <div className="relative aspect-[9/19.3] w-[230px] overflow-hidden rounded-[1.7rem] border border-line bg-black shadow-[0_48px_90px_-36px_rgb(var(--shadow-rgb)/0.8)] xl:w-[250px]">
        <div
          className="absolute left-1/2 top-0 z-10 h-5 w-24 -translate-x-1/2 rounded-b-2xl bg-black"
          aria-hidden
        />
        <AnimatePresence mode="popLayout" initial={false}>
          <motion.img
            key={image.src}
            src={image.src}
            alt={image.alt}
            loading="lazy"
            decoding="async"
            width={250}
            height={536}
            initial={{ opacity: 0, y: 26, scale: 1.02 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.55, ease: easeOut }}
            className="h-full w-full object-cover object-top"
          />
        </AnimatePresence>
        <div
          className="pointer-events-none absolute inset-0 rounded-[1.7rem] ring-1 ring-inset ring-white/5"
          aria-hidden
        />
      </div>

      {/* Which screen is on stage. */}
      <div className="relative flex items-center gap-2" aria-hidden>
        {project.images.map((img, i) => (
          <span
            key={img.src}
            className={`h-1 rounded-full transition-all duration-500 ${
              i === active ? "w-6 bg-accent" : "w-1.5 bg-line"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

/** One product, told as a launch story: acts on one side, the living screen on the other. */
function ProjectStory({ project, index }: { project: Project; index: number }) {
  const steps = buildSteps(project);
  const stepsRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const { scrollYProgress } = useScroll({
    target: stepsRef,
    offset: ["start 0.55", "end 0.55"],
  });

  useMotionValueEvent(scrollYProgress, "change", (v) => {
    setActive(Math.min(steps.length - 1, Math.max(0, Math.floor(v * steps.length))));
  });

  const flipped = index % 2 === 1;

  return (
    <article className="border-t border-line py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-20">
          <div className={flipped ? "lg:order-2" : ""}>
            <Reveal>
              <p className="font-mono text-xs tracking-[0.25em] text-accent" aria-hidden>
                {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")}
              </p>
              <h3 className="mt-4 font-display text-4xl font-medium leading-[1.05] tracking-tightest text-ink md:text-5xl">
                {project.name}
              </h3>
              <p className="mt-4 max-w-md text-base leading-relaxed text-muted text-balance md:text-lg">
                {project.tagline}
              </p>
            </Reveal>

            {/* Mobile: the screens ride a snap rail under the header. */}
            <div className="snap-rail -mx-6 mt-8 flex items-center gap-4 overflow-x-auto px-6 py-2 md:-mx-10 md:px-10 lg:hidden">
              {project.images.map((image) => (
                <PhoneFrame key={image.src} src={image.src} alt={image.alt} />
              ))}
            </div>

            <div ref={stepsRef} className="mt-8 flex flex-col lg:mt-12">
              {steps.map((step, i) => (
                <StoryStep key={step.title} step={step} index={i} active={i === active} />
              ))}
            </div>

            <div className="mt-8">
              <VisitLink project={project} />
            </div>
          </div>

          <div className={`relative hidden lg:block ${flipped ? "lg:order-1" : ""}`}>
            <div className="sticky top-24 flex h-[calc(100vh-6rem)] items-center justify-center">
              <ScreenStage project={project} active={active} />
            </div>
          </div>
        </div>
      </Container>
    </article>
  );
}

export function ProjectsCinema() {
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

      <div className="mt-16 md:mt-24">
        {projects.map((project, index) => (
          <ProjectStory key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
}
