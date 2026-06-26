import { useEffect, useRef } from "react";

const NUM_DOTS = 15;

export default function TrailingCursor() {
  const dotsRef = useRef([]);
  const mouseRef = useRef({ x: -200, y: -200 });
  const rafRef = useRef(null);
  const containerRef = useRef(null);
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const ringPosRef = useRef({ x: -200, y: -200 });

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // ── Leading cursor dot (snaps instantly) ──────────────────────
    const cursorDot = document.createElement("div");
    cursorDot.classList.add("cursor-head-dot");
    container.appendChild(cursorDot);
    cursorDotRef.current = cursorDot;

    // ── Outer ring (follows with slight lag) ──────────────────────
    const cursorRing = document.createElement("div");
    cursorRing.classList.add("cursor-head-ring");
    container.appendChild(cursorRing);
    cursorRingRef.current = cursorRing;

    // ── Trailing dots ─────────────────────────────────────────────
    const dots = [];
    for (let i = 0; i < NUM_DOTS; i++) {
      const el = document.createElement("div");
      el.classList.add("cursor-trail-dot");
      el.style.opacity = String((1 - i / NUM_DOTS) * 0.85);
      el.style.scale = String(1 - i * 0.04);
      container.appendChild(el);
      dots.push({ element: el, x: -200, y: -200 });
    }
    dotsRef.current = dots;

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
      // Snap the dot to exact cursor position immediately
      cursorDot.style.left = e.clientX + "px";
      cursorDot.style.top  = e.clientY + "px";
    };
    window.addEventListener("mousemove", onMouseMove);

    // Scale ring on click
    const onMouseDown = () => cursorRing.classList.add("cursor-ring-click");
    const onMouseUp   = () => cursorRing.classList.remove("cursor-ring-click");
    window.addEventListener("mousedown", onMouseDown);
    window.addEventListener("mouseup",   onMouseUp);

    const animate = () => {
      // Ring lags slightly behind cursor
      const rx = ringPosRef.current;
      rx.x += (mouseRef.current.x - rx.x) * 0.15;
      rx.y += (mouseRef.current.y - rx.y) * 0.15;
      cursorRing.style.left = rx.x + "px";
      cursorRing.style.top  = rx.y + "px";

      // Trailing dots
      let x = mouseRef.current.x;
      let y = mouseRef.current.y;
      dotsRef.current.forEach((dot) => {
        dot.x += (x - dot.x) * 0.35;
        dot.y += (y - dot.y) * 0.35;
        dot.element.style.left = dot.x + "px";
        dot.element.style.top  = dot.y + "px";
        x = dot.x;
        y = dot.y;
      });

      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mousedown", onMouseDown);
      window.removeEventListener("mouseup",   onMouseUp);
      cancelAnimationFrame(rafRef.current);
      dotsRef.current.forEach((dot) => dot.element.remove());
      dotsRef.current = [];
      cursorDot.remove();
      cursorRing.remove();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      id="cursor-container"
      aria-hidden="true"
    />
  );
}
