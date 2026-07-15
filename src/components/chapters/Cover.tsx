import { motion } from "framer-motion";
import { profile, hero } from "../../data/content";
import { Tape } from "../doodles/Tape";
import { ArrowMark, CircleMark, StarMark } from "../doodles/Marks";
import { Stamp } from "../ui/Stamp";

export function Cover() {
  return (
    <section id="cover" className="relative overflow-hidden px-6 pb-24 pt-28 md:pt-36">
      <div className="mx-auto grid max-w-content items-center gap-14 md:grid-cols-[1.2fr_0.8fr] md:gap-8">
        <div className="relative">
          <motion.p
            className="font-mono text-xs uppercase tracking-[0.3em] text-muted"
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {new Date().toLocaleDateString("en-US", { month: "long", year: "numeric" })} · Notebook No. 04
          </motion.p>

          <h1 className="relative mt-4 font-hand text-[3.6rem] font-semibold leading-[0.9] text-ink sm:text-7xl md:text-8xl">
            <motion.span
              className="block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              {profile.name.split(" ")[0]}
            </motion.span>
            <motion.span
              className="relative block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              {profile.name.split(" ").slice(1).join(" ")}
              <CircleMark className="-right-6 -top-6 h-16 w-32 text-marker/70 sm:-right-10 sm:h-20 sm:w-40" />
            </motion.span>
          </h1>

          <motion.div
            className="mt-6 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <Stamp>{profile.status}</Stamp>
            <span className="font-serif text-sm text-muted">{profile.role} · {profile.location}</span>
          </motion.div>

          <motion.p
            className="mt-8 max-w-md font-serif text-lg leading-relaxed text-graphite md:text-xl"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            &ldquo;{profile.tagline}&rdquo;
          </motion.p>
          <p className="mt-2 max-w-md font-serif text-base leading-relaxed text-muted">
            Problems {hero.lead}
          </p>

          <motion.div
            className="relative mt-10 inline-flex"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.9 }}
          >
            <a
              href="#who"
              className="group inline-flex items-center gap-2 font-note text-base text-ink"
            >
              Open the notebook
              <ArrowMark className="relative -top-1 h-5 w-9 text-ink transition-transform group-hover:translate-x-1" />
            </a>
          </motion.div>
        </div>

        <motion.div
          className="relative mx-auto w-full max-w-[300px]"
          initial={{ opacity: 0, rotate: -6, y: 30 }}
          animate={{ opacity: 1, rotate: -3, y: 0 }}
          whileHover={{ rotate: 0, scale: 1.02 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="relative bg-card p-3 pb-8 paper-edge">
            <Tape className="-top-4 left-8" rotate={-8} width={78} />
            <Tape className="-bottom-3 right-4" rotate={6} width={64} variant="kraft" />
            <div className="overflow-hidden bg-paper-alt">
              <img
                src="/profile.jpg"
                alt={profile.name}
                className="aspect-[4/5] w-full object-cover"
              />
            </div>
            <p className="mt-3 text-center font-hand text-2xl text-graphite">that's me, mid-thought</p>
          </div>
          <StarMark className="absolute -left-9 top-4 h-8 w-8 text-marker/60" />
        </motion.div>
      </div>
    </section>
  );
}
