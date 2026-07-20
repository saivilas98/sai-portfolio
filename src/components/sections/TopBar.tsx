import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { nav, profile } from "../../data/content";
import { useActiveSection } from "../../lib/useActiveSection";
import { Container } from "../ui/Container";
import { ThemeToggle } from "../ui/ThemeToggle";
import { easeInOut, easeOut, lineRise, stagger } from "../../lib/motion";

const sectionIds = nav.map((item) => item.href.replace("#", ""));

export function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const active = useActiveSection(sectionIds);

  // Recede while reading downward; return the moment the visitor looks back up.
  useEffect(() => {
    let lastY = window.scrollY;
    function onScroll() {
      const y = window.scrollY;
      setScrolled(y > 12);
      setHidden(y > 220 && y > lastY);
      lastY = y;
    }
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          scrolled
            ? "border-b border-line bg-paper/70 backdrop-blur-xl backdrop-saturate-150"
            : "bg-transparent"
        } ${hidden && !menuOpen ? "-translate-y-full" : "translate-y-0"}`}
      >
        <Container
          className={`flex items-center justify-between transition-[height] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            scrolled ? "h-16" : "h-[4.5rem]"
          }`}
        >
          <a
            href="#top"
            className="whitespace-nowrap font-display text-base font-medium tracking-tight text-ink sm:text-lg"
          >
            {profile.name}
          </a>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
            {nav.map((item) => {
              const id = item.href.replace("#", "");
              const isActive = active === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  className={`group relative font-mono text-xs uppercase tracking-[0.2em] transition-colors ${
                    isActive ? "text-ink" : "text-muted hover:text-ink"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      transition={{ type: "spring", stiffness: 380, damping: 32 }}
                      className="absolute -left-3 top-1/2 h-1 w-1 -translate-y-1/2 rounded-full bg-accent"
                      aria-hidden
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </nav>

          <div className="flex items-center gap-3">
            <ThemeToggle />
            <a
              href="#contact"
              className="hidden items-center rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-paper transition-colors hover:bg-accent md:inline-flex"
            >
              Let's talk
            </a>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              className="text-ink md:hidden"
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </Container>
      </header>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4, ease: easeInOut }}
            className="fixed inset-0 z-40 flex flex-col justify-center bg-paper md:hidden"
          >
            <Container>
              <motion.nav
                variants={stagger(0.07, 0.1)}
                initial="hidden"
                animate="show"
                className="flex flex-col gap-2"
                aria-label="Menu"
              >
                {nav.map((item, i) => (
                  <span key={item.href} className="overflow-hidden">
                    <motion.a
                      variants={lineRise}
                      href={item.href}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-baseline gap-4 py-1 font-display text-4xl font-medium tracking-tight text-ink"
                    >
                      <span className="font-mono text-xs tracking-[0.2em] text-accent">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      {item.label}
                    </motion.a>
                  </span>
                ))}
              </motion.nav>

              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: easeOut, delay: 0.45 }}
                className="mt-12 flex flex-col gap-4"
              >
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex w-fit items-center rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper"
                >
                  Let's talk
                </a>
                <a
                  href={`mailto:${profile.email}`}
                  className="font-mono text-xs uppercase tracking-[0.15em] text-muted"
                >
                  {profile.email}
                </a>
              </motion.div>
            </Container>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
