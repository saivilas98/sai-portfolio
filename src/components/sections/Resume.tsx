import { Download, FileText } from "lucide-react";
import { profile, resume } from "../../data/content";
import { Container } from "../ui/Container";
import { MagneticButton } from "../ui/MagneticButton";
import { Reveal } from "../ui/Reveal";

export function Resume() {
  return (
    <section className="py-28 md:py-36 border-t border-line">
      <Container>
        <Reveal className="grid grid-cols-1 lg:grid-cols-[0.9fr_1.1fr] gap-12 rounded-[1.75rem] border border-line bg-surface p-7 sm:p-10 md:p-14 items-center">
          <div>
            <p className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.25em] text-muted mb-4">
              <FileText size={14} /> Resume
            </p>
            <h3 className="font-display text-3xl font-medium text-ink text-balance">
              Everything above, in one page.
            </h3>
            <p className="mt-3 text-sm text-muted">{resume.updated}</p>
            <MagneticButton href={profile.resumeUrl} target="_blank" rel="noreferrer" variant="primary" className="mt-8">
              Download
              <Download size={16} />
            </MagneticButton>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">
                Experience
              </h4>
              <ul className="flex flex-col gap-3">
                {resume.experience.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-ink/80">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-[0.2em] text-muted mb-4">
                Education
              </h4>
              <ul className="flex flex-col gap-3">
                {resume.education.map((item) => (
                  <li key={item} className="text-sm leading-relaxed text-ink/80">
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
