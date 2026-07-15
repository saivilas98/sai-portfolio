import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { projectLearnings, projects, type Project } from "../../data/content";
import { PageHeading } from "../ui/PageHeading";
import { Polaroid } from "../ui/Polaroid";
import { StickyNote } from "../ui/StickyNote";
import { Divider } from "../doodles/Divider";

function ProjectEntry({ project, index }: { project: Project; index: number }) {
  const reverse = index % 2 === 1;
  return (
    <motion.article
      className="relative border-t border-line pt-14 first:border-t-0 first:pt-0"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
    >
      <div className={`grid gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-14 ${reverse ? "md:[&>*:first-child]:order-2" : ""}`}>
        <div className="flex flex-wrap items-start justify-center gap-4 sm:justify-start">
          {project.images.slice(0, 2).map((img, i) => (
            <Polaroid
              key={img.src}
              src={img.src}
              alt={img.alt}
              rotate={i === 0 ? -4 : 3}
              className={i === 1 ? "mt-8" : ""}
            />
          ))}
        </div>

        <div>
          <span className="font-mono text-xs uppercase tracking-[0.25em] text-muted">
            {String(index + 1).padStart(2, "0")} · {project.detail.eyebrow}
          </span>
          <h3 className="mt-2 font-hand text-4xl leading-none text-ink sm:text-5xl">{project.name}</h3>
          <p className="mt-2 font-serif text-base italic text-graphite">{project.tagline}</p>

          <Divider className="my-5 w-32" />

          <div className="space-y-4">
            {project.detail.paragraphs.map((p) => (
              <p key={p} className="font-serif text-[0.98rem] leading-relaxed text-graphite">
                {p}
              </p>
            ))}
          </div>

          {(project.detail.cut || project.detail.kept) && (
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              {project.detail.kept && (
                <div>
                  <p className="font-note text-xs uppercase tracking-wider text-sage">Kept</p>
                  <p className="mt-1 font-serif text-sm leading-relaxed text-graphite">{project.detail.kept}</p>
                </div>
              )}
              {project.detail.cut && (
                <div>
                  <p className="font-note text-xs uppercase tracking-wider text-muted">Cut</p>
                  <p className="mt-1 font-serif text-sm leading-relaxed text-muted line-through decoration-muted/50">
                    {project.detail.cut}
                  </p>
                </div>
              )}
            </div>
          )}

          <div className="mt-7 flex flex-wrap items-end justify-between gap-6">
            <StickyNote color={index % 2 === 0 ? "yellow" : "sage"} rotate={reverse ? 2 : -2}>
              {projectLearnings[project.id]}
            </StickyNote>

            <a
              href={project.url}
              target="_blank"
              rel="noreferrer"
              className="group inline-flex items-center gap-1.5 font-note text-sm text-ink underline-reveal"
            >
              Visit {project.name}
              <ArrowUpRight size={16} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-content">
        <PageHeading
          no="Ch. 05"
          title="Projects"
          subtitle="Four weekend builds. Each one taught me something the last one couldn't."
        />
        <div className="space-y-16 md:space-y-24">
          {projects.map((project, i) => (
            <ProjectEntry key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
