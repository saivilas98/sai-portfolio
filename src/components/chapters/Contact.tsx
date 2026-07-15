import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { contact, footer, profile } from "../../data/content";
import { PageHeading } from "../ui/PageHeading";
import { StarMark } from "../doodles/Marks";
import { Tape } from "../doodles/Tape";

function LinkedinMark({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.71h.05c.53-1 1.83-2.06 3.77-2.06 4.03 0 4.78 2.65 4.78 6.1V21h-4v-5.6c0-1.34-.02-3.06-1.87-3.06-1.87 0-2.16 1.46-2.16 2.96V21h-4V9Z" />
    </svg>
  );
}

function InstagramMark({ size = 16 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

const links = [
  { label: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", href: profile.linkedin, icon: LinkedinMark },
  { label: "Instagram", href: profile.instagram, icon: InstagramMark },
];

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-ink px-6 py-28 text-paper md:py-36">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="relative mx-auto max-w-content text-center">
        <PageHeading no="Ch. 08 · Last page" title="Let's talk" align="center" />

        <div className="mx-auto max-w-lg space-y-3">
          {contact.lines.map((line) => (
            <p key={line} className="font-serif text-lg leading-relaxed text-paper/80">
              {line}
            </p>
          ))}
        </div>

        <motion.div
          className="relative mx-auto mt-12 w-fit bg-card px-8 py-7 text-ink paper-edge"
          style={{ rotate: -1.5 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.6 }}
        >
          <Tape className="-top-4 left-1/2 -translate-x-1/2" rotate={-3} width={90} />
          <StarMark className="absolute -right-6 -top-6 h-10 w-10 -rotate-12 text-marker" />
          <p className="font-hand text-2xl text-ink">{profile.name}</p>
          <p className="font-serif text-sm text-muted">{profile.role}</p>
          <div className="mt-5 flex flex-col items-start gap-3">
            {links.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="group flex items-center gap-2 font-note text-[0.95rem] text-graphite underline-reveal"
              >
                <Icon size={16} />
                {label}
              </a>
            ))}
          </div>
        </motion.div>

        <a
          href={profile.resumeUrl}
          target="_blank"
          rel="noreferrer"
          className="mt-12 inline-flex items-center gap-2 rounded-full border border-paper/30 px-6 py-2.5 font-note text-sm text-paper transition-colors hover:bg-paper hover:text-ink"
        >
          Read the resume
        </a>

        <p className="mt-20 font-mono text-xs uppercase tracking-[0.25em] text-paper/40">{footer}</p>
      </div>
    </section>
  );
}
