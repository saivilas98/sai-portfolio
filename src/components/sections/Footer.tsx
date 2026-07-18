import { footer, profile } from "../../data/content";
import { easeOut } from "../../lib/motion";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

const endTitle = {
  hidden: { opacity: 0, scale: 0.94 },
  show: { opacity: 1, scale: 1, transition: { duration: 1.2, ease: easeOut } },
};

export function Footer() {
  return (
    <footer className="overflow-hidden border-t border-line pt-16">
      {/* Closing card: the name settles into place, monumental and outlined,
          like an end title answering the preloader's opening one. */}
      <Reveal variants={endTitle}>
        <p
          className="text-outline select-none whitespace-nowrap text-center font-display text-[13vw] font-bold leading-none tracking-tightest"
          aria-hidden
        >
          {profile.name}
        </p>
      </Reveal>

      <Container className="flex flex-col items-center justify-between gap-3 py-10 sm:flex-row">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">{footer}</p>
        <a
          href="#top"
          className="font-mono text-xs uppercase tracking-[0.15em] text-muted transition-colors hover:text-accent"
        >
          Back to top ↑
        </a>
      </Container>
    </footer>
  );
}
