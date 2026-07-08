import { ArrowUpRight, AtSign, Link2, Mail } from "lucide-react";
import { contact, profile } from "../../data/content";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

const links = [
  {
    label: "Email",
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "/in/saivilas98",
    href: profile.linkedin,
    icon: Link2,
  },
  {
    label: "Instagram",
    value: "@saivilas98",
    href: profile.instagram,
    icon: AtSign,
  },
];

export function Contact() {
  return (
    <section id="contact" className="py-28 md:py-36 border-t border-line">
      <Container>
        <div className="rounded-[2rem] bg-ink px-8 py-16 sm:px-16 md:py-24 text-center relative overflow-hidden">
          <div
            className="pointer-events-none absolute inset-0 grid-texture opacity-40"
            style={{ filter: "invert(1)" }}
            aria-hidden
          />

          <Reveal className="relative">
            <span className="font-mono text-xs uppercase tracking-[0.25em] text-paper/50">
              {contact.eyebrow}
            </span>
            <h2 className="mt-5 font-display text-3xl sm:text-4xl md:text-5xl font-medium text-paper text-balance max-w-2xl mx-auto leading-[1.15]">
              {contact.lines[0]}
            </h2>
            <p className="mt-5 max-w-xl mx-auto text-paper/60 text-base md:text-lg leading-relaxed text-balance">
              {contact.lines[1]}
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3.5 text-sm font-medium text-ink transition-opacity hover:opacity-90"
              >
                Email me
                <ArrowUpRight size={16} />
              </a>
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-paper/25 px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:border-paper"
              >
                Download resume
              </a>
            </div>

            <div className="mt-12 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
              {links.map(({ label, value, href, icon: Icon }) => (
                <a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel={label !== "Email" ? "noreferrer" : undefined}
                  className="inline-flex items-center gap-2 text-sm text-paper/60 hover:text-paper transition-colors"
                >
                  <Icon size={16} />
                  {value}
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
