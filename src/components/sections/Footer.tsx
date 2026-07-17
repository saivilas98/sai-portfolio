import { footer, profile } from "../../data/content";
import { Container } from "../ui/Container";
import { Reveal } from "../ui/Reveal";

export function Footer() {
  return (
    <footer className="overflow-hidden border-t border-line pt-16">
      {/* Closing card: the name, monumental and outlined, like an end title. */}
      <Reveal>
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
