import { ArrowUpRight } from "lucide-react";
import { projectLearnings, projects, type Project } from "../../data/content";
import { Container } from "../ui/Container";
import { PhoneFrame } from "../ui/PhoneFrame";
import { Reveal } from "../ui/Reveal";
import { SectionHeading } from "../ui/SectionHeading";
import { Toggle } from "../ui/Toggle";

function ProjectRow({ project, index }: { project: Project; index: number }) {
  const reversed = index % 2 === 1;
  const learning = projectLearnings[project.id];

  return (
    <Reveal className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 rounded-[1.75rem] border border-line bg-surface p-7 sm:p-10 md:p-12">
      <div className={`lg:col-span-6 flex flex-col gap-5 ${reversed ? "lg:order-2" : "lg:order-1"}`}>
        <div>
          <h3 className="font-display text-2xl md:text-3xl font-medium leading-tight text-ink text-balance">
            {project.name}
          </h3>
          <p className="mt-2 text-base text-muted text-balance">{project.tagline}</p>
        </div>

        <div>
          <Toggle label={project.toggleLabel}>
            <div className="flex flex-col gap-3 text-sm leading-relaxed text-ink/75">
              {project.detail.paragraphs.map((p) => (
                <p key={p}>{p}</p>
              ))}
              {project.detail.cut && (
                <p>
                  <span className="text-muted">What I cut: </span>
                  {project.detail.cut}
                </p>
              )}
              {project.detail.kept && (
                <p>
                  <span className="text-muted">
                    {project.detail.cut ? "What stayed: " : "Features: "}
                  </span>
                  {project.detail.kept}
                </p>
              )}
              {learning && (
                <p className="mt-1 italic text-ink/60">{learning}</p>
              )}
            </div>
          </Toggle>
        </div>

        <a
          href={project.url}
          target="_blank"
          rel="noreferrer"
          className="group mt-2 inline-flex w-fit items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-ink"
        >
          <span className="underline-reveal is-active">Visit {project.name}</span>
          <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </a>
      </div>

      <div className={`lg:col-span-6 flex items-center justify-center gap-4 overflow-x-auto py-2 ${reversed ? "lg:order-1" : "lg:order-2"}`}>
        {project.images.map((image, i) => (
          <PhoneFrame key={image.src} src={image.src} alt={image.alt} delay={i * 0.08} />
        ))}
      </div>
    </Reveal>
  );
}

export function Projects() {
  return (
    <section id="work" className="py-28 md:py-36 border-t border-line">
      <Container>
        <SectionHeading
          index="02"
          eyebrow="Things I've Built"
          title="Products born from everyday problems."
          description="Each started with user pain, evolved through iterations, and shipped with a focus on simplicity over feature count."
        />

        <div className="mt-16 flex flex-col gap-10">
          {projects.map((project, index) => (
            <ProjectRow project={project} index={index} key={project.id} />
          ))}
        </div>
      </Container>
    </section>
  );
}
