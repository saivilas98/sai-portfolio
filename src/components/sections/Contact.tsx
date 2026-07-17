import { motion } from "framer-motion";
import { ArrowUpRight, AtSign, Link2, Mail, MapPin } from "lucide-react";
import { contact, profile } from "../../data/content";
import { Container } from "../ui/Container";
import { MagneticButton } from "../ui/MagneticButton";
import { Reveal } from "../ui/Reveal";
import { lineRise, stagger } from "../../lib/motion";

const links = [
  { label: "Email", value: profile.email, href: `mailto:${profile.email}`, icon: Mail },
  { label: "LinkedIn", value: "/in/saivilas98", href: profile.linkedin, icon: Link2 },
  { label: "Instagram", value: "@saivilas98", href: profile.instagram, icon: AtSign },
];

function MaskedFinale({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <motion.h2
      variants={stagger(0.04)}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-120px" }}
      className="mx-auto max-w-4xl font-display text-4xl font-medium leading-[1.08] tracking-tightest text-ink sm:text-5xl md:text-6xl"
    >
      {words.map((word, i) => (
        <span key={`${word}-${i}`}>
          <span className="inline-block overflow-hidden pb-[0.14em] -mb-[0.14em] align-bottom">
            <motion.span variants={lineRise} className="inline-block will-change-transform">
              {word}
            </motion.span>
          </span>
          {i < words.length - 1 ? " " : ""}
        </span>
      ))}
    </motion.h2>
  );
}

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden border-t border-line">
      {/* Final pool of stage light. */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 55% at 50% 62%, rgb(var(--color-accent) / 0.07), transparent 70%)",
        }}
        aria-hidden
      />

      <Container className="relative flex min-h-[92vh] flex-col items-center justify-center py-28 text-center">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.35em] text-accent">
            {contact.eyebrow}
          </span>
        </Reveal>

        <div className="mt-8">
          <MaskedFinale text={contact.lines[0]} />
        </div>

        <Reveal delay={0.15}>
          <p className="mx-auto mt-7 max-w-xl text-base leading-relaxed text-muted text-balance md:text-lg">
            {contact.lines[1]}
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-12 flex flex-wrap items-center justify-center gap-4">
          <MagneticButton href={`mailto:${profile.email}`} variant="primary" size="lg">
            Email me
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </MagneticButton>
          <MagneticButton
            href={profile.resumeUrl}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
          >
            Download resume
          </MagneticButton>
        </Reveal>

        <Reveal delay={0.25} className="mt-14 flex flex-wrap items-center justify-center gap-x-10 gap-y-4">
          {links.map(({ label, value, href, icon: Icon }) => (
            <a
              key={label}
              href={href}
              target={label !== "Email" ? "_blank" : undefined}
              rel={label !== "Email" ? "noreferrer" : undefined}
              className="inline-flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
            >
              <Icon size={16} />
              {value}
            </a>
          ))}
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mt-10 inline-flex items-center gap-2 font-mono text-[11px] uppercase tracking-[0.15em] text-muted/80">
            <MapPin size={12} className="text-accent/80" />
            Currently based in Hyderabad, India
          </p>
        </Reveal>
      </Container>
    </section>
  );
}
