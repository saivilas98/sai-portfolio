import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X } from "lucide-react";
import type { Project } from "../../data/content";
import { easeOut } from "../../lib/motion";
import { PhoneFrame } from "./PhoneFrame";

function Field({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-2 font-mono text-[11px] font-medium uppercase tracking-[0.2em] text-accent">
        {heading}
      </p>
      <p className="text-sm leading-relaxed text-ink/80">{children}</p>
    </div>
  );
}

/** The PM-thinking deep dive behind a Forge app: persona, problem, and how
 *  scope decisions actually got made, not just the shipped feature list. */
export function ProjectModal({ project, onClose }: { project: Project | null; onClose: () => void }) {
  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    document.documentElement.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.documentElement.style.overflow = "";
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <motion.div
          className="fixed inset-0 z-[95] flex items-end justify-center p-0 sm:items-center sm:p-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="absolute inset-0 bg-ink/55 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden
          />

          <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby="project-modal-title"
            initial={{ opacity: 0, scale: 0.96, y: 24 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.97, y: 12 }}
            transition={{ duration: 0.4, ease: easeOut }}
            className="glass relative flex max-h-[92vh] w-full max-w-3xl flex-col overflow-hidden rounded-t-[2rem] border border-line sm:max-h-[88vh] sm:rounded-[2rem]"
          >
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="absolute right-5 top-5 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-line bg-paper/80 text-ink backdrop-blur transition-colors hover:border-accent/60 hover:text-accent"
            >
              <X size={16} />
            </button>

            <div className="overflow-y-auto p-7 sm:p-10">
              <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted">
                {project.category}
              </p>
              <h3 id="project-modal-title" className="mt-3 font-display text-3xl font-medium tracking-tightest text-ink md:text-4xl">
                {project.name}
              </h3>
              <p className="mt-3 max-w-lg text-base leading-relaxed text-muted text-balance">
                {project.tagline}
              </p>

              <div className="snap-rail -mx-7 mt-8 flex items-center gap-4 overflow-x-auto px-7 py-2 sm:-mx-10 sm:px-10">
                {project.images.map((image) => (
                  <PhoneFrame key={image.src} src={image.src} alt={image.alt} />
                ))}
              </div>

              <div className="mt-10 grid grid-cols-1 gap-8 border-t border-line pt-8 sm:grid-cols-2">
                <Field heading="Who it's for">{project.pm.persona}</Field>
                <Field heading="The problem">{project.pm.problem}</Field>
              </div>

              <div className="mt-8">
                <Field heading="How I prioritized">{project.pm.approach}</Field>
              </div>

              {(project.detail.cut || project.detail.kept) && (
                <div className="mt-8 grid grid-cols-1 gap-6 rounded-2xl border border-line bg-surface/60 p-6 sm:grid-cols-2">
                  {project.detail.cut && (
                    <div>
                      <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                        Cut
                      </p>
                      <p className="text-sm leading-relaxed text-ink/75">{project.detail.cut}</p>
                    </div>
                  )}
                  {project.detail.kept && (
                    <div>
                      <p className="mb-1.5 font-mono text-[10px] uppercase tracking-[0.15em] text-muted">
                        {project.detail.cut ? "Kept" : "Features"}
                      </p>
                      <p className="text-sm leading-relaxed text-ink/75">{project.detail.kept}</p>
                    </div>
                  )}
                </div>
              )}

              <div className="mt-8 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-8">
                <p className="max-w-sm text-sm italic text-ink/60">{project.why}</p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex flex-none items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-medium text-paper transition-colors hover:bg-accent"
                >
                  Visit {project.name}
                  <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
