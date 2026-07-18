import { ArrowUpRight, FileText } from "lucide-react";
import { profile, resume } from "../../data/content";
import { Container } from "../ui/Container";
import { MagneticButton } from "../ui/MagneticButton";
import { Reveal } from "../ui/Reveal";

export function Resume() {
  return (
    <section className="border-t border-line py-28 md:py-40">
      <Container>
        <Reveal className="grid grid-cols-1 items-center gap-12 rounded-3xl border border-line bg-surface p-7 sm:p-10 md:p-14 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.3em] text-accent">
              <FileText size={14} /> Resume
            </p>
            <h3 className="font-display text-3xl font-medium tracking-tightest text-ink text-balance md:text-4xl">
              Everything above, in one page.
            </h3>
            <p className="mt-3 text-sm text-muted">{resume.updated}</p>
            <MagneticButton
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              variant="primary"
              className="mt-8"
            >
              View resume
              <ArrowUpRight size={16} />
            </MagneticButton>
          </div>

          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2">
            <div>
              <h4 className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-muted">
                Experience
              </h4>
              <ul className="flex flex-col gap-3">
                {resume.experience.map((item) => (
                  <li
                    key={item}
                    className="border-b border-line pb-3 text-sm leading-relaxed text-ink/80 last:border-b-0 last:pb-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-muted">
                Education
              </h4>
              <ul className="flex flex-col gap-3">
                {resume.education.map((item) => (
                  <li
                    key={item}
                    className="border-b border-line pb-3 text-sm leading-relaxed text-ink/80 last:border-b-0 last:pb-0"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
