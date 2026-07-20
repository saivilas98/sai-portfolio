import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { ArrowDown, ArrowUpRight, FileText, Link2, Mail } from "lucide-react";
import { hero, heroEducation, heroMetrics, profile } from "../../data/content";
import { Container } from "../ui/Container";
import { CountUp } from "../ui/CountUp";
import { EducationChip } from "../ui/EducationChip";
import { MagneticButton } from "../ui/MagneticButton";
import { drawLine, easeOut, fadeUp, lineRise, stagger } from "../../lib/motion";

function MaskedHeadline({ text }: { text: string }) {
  const words = text.split(" ");
  return (
    <motion.h1
      variants={stagger(0.06)}
      className="font-display text-[2.6rem] leading-[1.05] tracking-tightest text-ink sm:text-[3.6rem] lg:text-[4.4rem] xl:text-[5rem]"
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
    </motion.h1>
  );
}

export function Hero({ started }: { started: boolean }) {
  const sectionRef = useRef<HTMLElement>(null);
  const portraitRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: portraitRef,
    offset: ["start end", "end start"],
  });
  const parallaxY = useTransform(scrollYProgress, [0, 1], [26, -26]);

  // The camera pulls away: hero content recedes and dims as you leave it.
  const { scrollYProgress: exitProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const exitY = useTransform(exitProgress, [0, 1], [0, 90]);
  const exitOpacity = useTransform(exitProgress, [0, 0.85], [1, 0.15]);

  return (
    <section ref={sectionRef} id="top" className="relative overflow-hidden">
      <motion.div
        variants={stagger(0.09, 0.05)}
        initial="hidden"
        animate={started ? "show" : "hidden"}
        style={prefersReducedMotion ? undefined : { y: exitY, opacity: exitOpacity }}
      >
        <Container className="grid min-h-screen grid-cols-1 items-center gap-14 pt-32 pb-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <motion.p
              variants={fadeUp}
              className="mb-6 font-mono text-sm uppercase tracking-[0.3em] text-accent sm:text-base"
            >
              Hi, I'm Sai
            </motion.p>

            <MaskedHeadline text={profile.tagline} />

            <motion.span
              variants={drawLine}
              className="mt-7 block h-px w-24 origin-left bg-accent"
              aria-hidden
            />

            <motion.p
              variants={fadeUp}
              className="mt-6 max-w-lg text-lg italic leading-relaxed text-muted text-balance"
            >
              {hero.lead}
            </motion.p>

            <motion.div variants={fadeUp} className="mt-8 flex max-w-xl flex-col gap-3">
              {hero.timeline.map((entry) => (
                <p
                  key={entry.label}
                  className="grid grid-cols-[6.5rem_1fr] gap-4 text-[0.95rem] leading-relaxed text-ink/70"
                >
                  <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent/90 pt-1">
                    {entry.label}
                  </span>
                  <span>{entry.text}</span>
                </p>
              ))}
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-3">
              {heroEducation.map((entry) => (
                <EducationChip
                  key={entry.institution}
                  institution={entry.institution}
                  detail={entry.detail}
                />
              ))}
              <span className="inline-flex items-center gap-2.5 rounded-full border border-line bg-surface px-4 py-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping motion-reduce:animate-none rounded-full bg-accent/70 opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.2em] text-muted">
                  {profile.status} &middot; {profile.location}
                </span>
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="mt-10 flex flex-wrap items-center gap-4">
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
              variants={fadeUp}
              className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3"
            >
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
              >
                <FileText size={14} /> Resume
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
              >
                <Link2 size={14} /> LinkedIn
              </a>
              <a
                href={`mailto:${profile.email}`}
                className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
              >
                <Mail size={14} /> Say hello
              </a>
            </motion.div>
          </div>

          <motion.div
            ref={portraitRef}
            variants={{
              hidden: { opacity: 0, scale: 0.95 },
              show: {
                opacity: 1,
                scale: 1,
                transition: { duration: 1.1, ease: easeOut },
              },
            }}
            className="relative mx-auto w-full max-w-sm lg:max-w-none"
          >
            {/* Crop marks frame the portrait like a film still. */}
            <span className="absolute -left-3 -top-3 h-6 w-6 border-l border-t border-accent/70" aria-hidden />
            <span className="absolute -right-3 -top-3 h-6 w-6 border-r border-t border-accent/70" aria-hidden />
            <span className="absolute -bottom-3 -left-3 h-6 w-6 border-b border-l border-accent/70" aria-hidden />
            <span className="absolute -bottom-3 -right-3 h-6 w-6 border-b border-r border-accent/70" aria-hidden />

            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl border border-line bg-surface grayscale">
              <motion.img
                src="/profile.jpg"
                alt={profile.name}
                style={prefersReducedMotion ? undefined : { y: parallaxY, scale: 1.08 }}
                className="h-full w-full object-cover will-change-transform"
              />
              <div
                className="absolute inset-0"
                style={{ boxShadow: "inset 0 0 90px 24px rgb(var(--shadow-rgb) / 0.45)" }}
                aria-hidden
              />
              <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" aria-hidden />
            </div>
          </motion.div>
        </Container>

        <motion.div variants={fadeUp} className="border-t border-line">
          <Container className="grid grid-cols-2 md:grid-cols-4">
            {heroMetrics.map((metric, i) => {
              // 2-col mobile grid: the right column carries a left rule, the
              // second row carries a top rule. 4-col desktop grid: every
              // cell but the first carries a left rule and no top rule.
              const onRightCol = i % 2 === 1;
              const onSecondRow = i >= 2;
              const border = [
                onRightCol ? "border-l border-line pl-6" : "pl-0",
                onSecondRow ? "border-t border-line md:border-t-0" : "",
                i > 0 ? "md:border-l md:border-line md:pl-10" : "md:border-l-0 md:pl-0",
              ].join(" ");

              return (
                <div key={metric.label} className={`flex flex-col gap-1.5 py-8 pr-4 ${border}`}>
                  <span className="font-display text-3xl font-medium text-ink md:text-4xl">
                    <CountUp value={metric.value} />
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-[0.15em] text-muted">
                    {metric.label}
                  </span>
                </div>
              );
            })}
          </Container>
        </motion.div>
      </motion.div>

      <motion.a
        href="#journey"
        initial={{ opacity: 0 }}
        animate={{ opacity: started ? 1 : 0 }}
        transition={{ duration: 0.6, delay: 1.4 }}
        className="absolute bottom-40 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted transition-colors hover:text-accent md:flex"
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
