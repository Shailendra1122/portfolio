import { useEffect, useRef } from "react";

const NUM_DOTS = 15;

export default function TrailingCursor() {
  const dotsRef = useRef([]);
  const mouseRef = useRef({ x: -200, y: -200 });
  const rafRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Create dot elements
    const dots = [];
    for (let i = 0; i < NUM_DOTS; i++) {
      const el = document.createElement("div");
      el.classList.add("cursor-trail-dot");
      el.style.opacity = String(1 - i / NUM_DOTS);
      el.style.scale = String(1 - i * 0.04);
      container.appendChild(el);
      dots.push({ element: el, x: -200, y: -200 });
    }
    dotsRef.current = dots;

    const onMouseMove = (e) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouseMove);

    const animate = () => {
      let x = mouseRef.current.x;
      let y = mouseRef.current.y;

      dotsRef.current.forEach((dot) => {
        dot.x += (x - dot.x) * 0.35;
        dot.y += (y - dot.y) * 0.35;
        dot.element.style.left = dot.x + "px";
        dot.element.style.top = dot.y + "px";
        x = dot.x;
        y = dot.y;
      });

      rafRef.current = requestAnimationFrame(animate);
    };
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
      // Clean up dot elements
      dotsRef.current.forEach((dot) => dot.element.remove());
      dotsRef.current = [];
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
