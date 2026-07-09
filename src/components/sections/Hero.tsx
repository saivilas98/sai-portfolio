import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileText, Link2, Mail } from "lucide-react";
import { hero, heroEducation, profile } from "../../data/content";
import { Container } from "../ui/Container";
import { EducationChip } from "../ui/EducationChip";
import { MagneticButton } from "../ui/MagneticButton";
import { MetricBadge } from "../ui/MetricBadge";
import { easeOut } from "../../lib/motion";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden pt-32 pb-16 grid-texture"
    >
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            "radial-gradient(55% 50% at 82% 12%, rgb(var(--glow-rgb) / 0.08), transparent 65%), radial-gradient(45% 40% at 5% 90%, rgb(var(--glow-rgb) / 0.05), transparent 60%)",
        }}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 bg-paper"
        style={{ maskImage: "radial-gradient(120% 100% at 50% 0%, black, transparent)" }}
        aria-hidden
      />

      <Container className="grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut }}
            className="font-mono text-base uppercase tracking-[0.25em] text-muted mb-5"
          >
            Hi, I'm Sai
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: easeOut, delay: 0.08 }}
            className="font-display text-[2.2rem] leading-[1.15] tracking-tightest text-ink sm:text-[3.3rem] lg:text-[3.7rem] text-balance"
          >
            {profile.tagline}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: easeOut, delay: 0.16 }}
            className="mt-5 max-w-lg text-lg italic leading-relaxed text-muted text-balance"
          >
            {hero.lead}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: easeOut, delay: 0.22 }}
            className="mt-6 flex flex-col gap-2.5 max-w-lg text-[0.95rem] leading-relaxed text-ink/70"
          >
            {hero.timeline.map((entry) => (
              <p key={entry.label}>
                <span className="font-medium text-ink">{entry.label}:</span> {entry.text}
              </p>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.28 }}
            className="mt-12 flex flex-wrap items-center gap-3"
          >
            {heroEducation.map((entry) => (
              <EducationChip
                key={entry.institution}
                institution={entry.institution}
                detail={entry.detail}
              />
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: easeOut, delay: 0.34 }}
            className="mt-5 inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ink/60 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-ink" />
            </span>
            <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {profile.status} &middot; {profile.location}
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, ease: easeOut, delay: 0.4 }}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <MagneticButton href="#work" variant="primary">
              Explore my work
              <ArrowUpRight
                size={16}
                className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </MagneticButton>
            <MagneticButton href="#contact" variant="secondary">
              Get in touch
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.75, ease: easeOut, delay: 0.46 }}
            className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3"
          >
            <a
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted hover:text-ink transition-colors"
            >
              <FileText size={14} /> Resume
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted hover:text-ink transition-colors"
            >
              <Link2 size={14} /> LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted hover:text-ink transition-colors"
            >
              <Mail size={14} /> Say hello
            </a>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: easeOut, delay: 0.15 }}
          className="relative mx-auto w-full max-w-sm lg:max-w-none"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-line bg-surface grayscale">
            <img
              src="/profile.jpg"
              alt={profile.name}
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ boxShadow: "inset 0 0 80px 20px rgba(0,0,0,0.35)" }}
              aria-hidden
            />
          </div>

          <MetricBadge className="absolute -bottom-6 -left-6" offset={0} revealDelay={0.6} />
          <MetricBadge className="absolute -top-6 -right-4" offset={2} revealDelay={0.75} />
        </motion.div>
      </Container>

      <motion.a
        href="#journey"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted hover:text-ink transition-colors md:flex"
        aria-label="Scroll to Journey section"
      >
        <span className="font-mono text-xs uppercase tracking-[0.2em]">Scroll</span>
        <motion.span
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
        >
          <ArrowDown size={16} />
        </motion.span>
      </motion.a>
    </section>
  );
}
