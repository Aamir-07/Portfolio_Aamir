"use client";

import { useEffect, useRef, useState } from "react";

type Point = { x: number; y: number };

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * t;
}

export function CustomCursor() {
  const [enabled, setEnabled] = useState(false);
  const target = useRef<Point>({ x: 0, y: 0 });
  const smooth = useRef<Point>({ x: 0, y: 0 });
  const lag = useRef<Point>({ x: 0, y: 0 });
  const raf = useRef<number>(0);
  const pressingRef = useRef(false);
  const linkRef = useRef(false);

  useEffect(() => {
    const coarse = window.matchMedia("(pointer: coarse)");
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (coarse.matches || reduce.matches) return;
    setEnabled(true);
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const root = document.documentElement;
    root.classList.add("custom-cursor-active");

    const el = document.getElementById("custom-cursor-root");
    const syncDom = () => {
      if (!el) return;
      const s = smooth.current;
      const l = lag.current;
      el.style.setProperty("--cx", `${s.x}px`);
      el.style.setProperty("--cy", `${s.y}px`);
      el.style.setProperty("--lx", `${l.x}px`);
      el.style.setProperty("--ly", `${l.y}px`);
      el.dataset.pressing = pressingRef.current ? "1" : "0";
      el.dataset.link = linkRef.current ? "1" : "0";
    };

    const tick = () => {
      const t = target.current;
      const s = smooth.current;
      const l = lag.current;
      s.x = lerp(s.x, t.x, 0.42);
      s.y = lerp(s.y, t.y, 0.42);
      l.x = lerp(l.x, t.x, 0.12);
      l.y = lerp(l.y, t.y, 0.12);
      syncDom();
      raf.current = requestAnimationFrame(tick);
    };

    const onMove = (e: MouseEvent) => {
      target.current = { x: e.clientX, y: e.clientY };
    };

    const onDown = () => {
      pressingRef.current = true;
    };
    const onUp = () => {
      pressingRef.current = false;
    };

    const onOver = (e: MouseEvent) => {
      const hit = (e.target as HTMLElement)?.closest?.(
        "a, button, [role='button'], input, textarea, select, .hero-chip-magnetic, .project-card, .nav-link",
      );
      linkRef.current = !!hit;
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("mousedown", onDown);
    window.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver);
    raf.current = requestAnimationFrame(tick);

    return () => {
      root.classList.remove("custom-cursor-active");
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mousedown", onDown);
      window.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      cancelAnimationFrame(raf.current);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div id="custom-cursor-root" className="custom-cursor" aria-hidden>
      <span className="custom-cursor-cross custom-cursor-cross-h" />
      <span className="custom-cursor-cross custom-cursor-cross-v" />
      <span className="custom-cursor-ring" />
      <span className="custom-cursor-core" />
    </div>
  );
}
