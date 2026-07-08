import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, profile } from "../../data/content";
import { useActiveSection } from "../../lib/useActiveSection";
import { Container } from "../ui/Container";

const sectionIds = nav.map((item) => item.href.replace("#", ""));

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    function onScroll() {
      setScrolled(window.scrollY > 12);
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-paper/85 backdrop-blur-md border-b border-line" : "bg-transparent"
      }`}
    >
      <Container className="flex h-20 items-center justify-between">
        <a
          href="#top"
          className="font-display text-lg font-medium tracking-tight text-ink"
        >
          {profile.shortName}<span className="text-muted">.</span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {nav.map((item) => {
            const id = item.href.replace("#", "");
            const isActive = active === id;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`underline-reveal font-mono text-xs uppercase tracking-[0.2em] transition-colors ${
                  isActive ? "text-ink is-active" : "text-muted hover:text-ink"
                }`}
              >
                {item.label}
              </a>
            );
          })}
        </nav>

        <a
          href="#contact"
          className="hidden md:inline-flex items-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-white"
        >
          Let's talk
        </a>

        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          className="md:hidden text-ink"
          onClick={() => setMobileOpen((v) => !v)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </Container>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden bg-paper border-b border-line"
          >
            <Container className="flex flex-col gap-1 py-4">
              {nav.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className="rounded-lg px-3 py-3 text-base font-medium text-ink/80 hover:bg-surface hover:text-ink transition-colors"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMobileOpen(false)}
                className="mt-2 inline-flex items-center justify-center rounded-full bg-ink px-5 py-3 text-sm font-medium text-paper"
              >
                Let's talk
              </a>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
