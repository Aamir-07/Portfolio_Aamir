import { useEffect, useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useActiveSection } from "../hooks/useActiveSection";
import { ThemeToggle } from "./ThemeToggle";

const links = [
  { id: "highlights", label: "Highlights" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "education", label: "Education" },
  { id: "life", label: "Beyond" },
  { id: "contact", label: "Contact" },
] as const;

const sectionIds = ["top", ...links.map((l) => l.id)] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const active = useActiveSection(sectionIds);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  const desktopLinks = useMemo(() => links, []);

  return (
    <motion.header
      className={`nav-shell ${scrolled ? "nav-scrolled" : ""}`}
      initial={{ y: -24, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      <nav className="nav-inner">
        <button type="button" className="nav-brand" onClick={() => scrollTo("top")}>
          <span className="nav-dot" />
          Aamir Husain
        </button>

        <div className="nav-spacer desktop-only" aria-hidden />

        <ul className="nav-links desktop-only">
          {desktopLinks.map((l) => (
            <li key={l.id}>
              <button
                type="button"
                className={`nav-link ${active === l.id ? "nav-link-active" : ""}`}
                onClick={() => scrollTo(l.id)}
              >
                {l.label}
                {active === l.id ? <span className="nav-pill" /> : null}
              </button>
            </li>
          ))}
        </ul>

        <div className="nav-end">
          <ThemeToggle />
          <button
            type="button"
            className="nav-toggle mobile-only"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="nav-drawer mobile-only"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28 }}
          >
            {links.map((l, i) => (
              <motion.button
                key={l.id}
                type="button"
                className={`nav-drawer-link ${active === l.id ? "nav-drawer-active" : ""}`}
                initial={{ opacity: 0, x: -12 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.04 * i }}
                onClick={() => scrollTo(l.id)}
              >
                {l.label}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
