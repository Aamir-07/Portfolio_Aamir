import { type ReactNode, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

type Props = { children: ReactNode; className?: string };

export function TiltCard({ children, className = "" }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const srx = useSpring(rx, { stiffness: 280, damping: 30, mass: 0.4 });
  const sry = useSpring(ry, { stiffness: 280, damping: 30, mass: 0.4 });

  const onMove = (e: React.MouseEvent) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ry.set(px * 10);
    rx.set(py * -10);
  };

  const reset = () => {
    rx.set(0);
    ry.set(0);
  };

  return (
    <div className={`tilt-perspective ${className}`.trim()}>
      <motion.div
        ref={ref}
        className="tilt-surface"
        onMouseMove={onMove}
        onMouseLeave={reset}
        style={{ rotateX: srx, rotateY: sry, transformStyle: "preserve-3d" }}
      >
        {children}
      </motion.div>
    </div>
  );
}
