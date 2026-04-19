import { useEffect, useState } from "react";

export function useActiveSection(sectionIds: readonly string[]) {
  const [active, setActive] = useState(sectionIds[0] ?? "top");

  useEffect(() => {
    const measure = () => {
      const marker = window.scrollY + Math.min(160, window.innerHeight * 0.22);
      let current = sectionIds[0] ?? "top";

      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.getBoundingClientRect().top + window.scrollY;
        if (top <= marker) current = id;
      }

      setActive(current);
    };

    measure();
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => {
      window.removeEventListener("scroll", measure);
      window.removeEventListener("resize", measure);
    };
  }, [sectionIds]);

  return active;
}
