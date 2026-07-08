import { footer } from "../../data/content";
import { Container } from "../ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-line py-10">
      <Container className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-muted">{footer}</p>
        <a
          href="#top"
          className="font-mono text-xs uppercase tracking-[0.15em] text-muted hover:text-ink transition-colors"
        >
          Back to top ↑
        </a>
      </Container>
    </footer>
  );
}
