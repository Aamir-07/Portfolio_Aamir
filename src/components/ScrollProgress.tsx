import { useEffect } from "react";
import { motion, useSpring } from "framer-motion";

export function ScrollProgress() {
  const spring = useSpring(0, { stiffness: 120, damping: 28, mass: 0.35 });

  useEffect(() => {
    const onScroll = () => {
      const el = document.documentElement;
      const t = el.scrollTop / Math.max(1, el.scrollHeight - el.clientHeight);
      spring.set(Math.min(1, Math.max(0, t)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [spring]);

  return (
    <div className="scroll-progress-track" aria-hidden>
      <motion.div className="scroll-progress-fill" style={{ scaleX: spring, transformOrigin: "0% 50%" }} />
    </div>
  );
}
