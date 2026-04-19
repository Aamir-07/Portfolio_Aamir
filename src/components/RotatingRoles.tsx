import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";

type Props = { phrases: readonly string[]; intervalMs?: number };

export function RotatingRoles({ phrases, intervalMs = 2800 }: Props) {
  const [i, setI] = useState(0);

  useEffect(() => {
    if (phrases.length <= 1) return;
    const t = window.setInterval(() => setI((n) => (n + 1) % phrases.length), intervalMs);
    return () => window.clearInterval(t);
  }, [phrases.length, intervalMs]);

  const text = phrases[i] ?? "";

  return (
    <span className="rotating-wrap" aria-live="polite">
      <AnimatePresence mode="wait">
        <motion.span
          key={text}
          className="rotating-text gradient-text"
          initial={{ opacity: 0, y: 14, filter: "blur(6px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -12, filter: "blur(4px)" }}
          transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        >
          {text}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}
