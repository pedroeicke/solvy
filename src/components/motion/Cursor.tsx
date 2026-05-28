"use client";

import { useEffect, useRef } from "react";
import { gsap } from "@/lib/gsap";

// ============================================================
// CURSOR — cursor custom (anel + ponto), GSAP puro (quickTo).
// Anel segue com lag; ponto segue rápido. Estados por data-attribute
// do alvo sob o cursor. Esconde em touch e reduced-motion (cursor
// nativo permanece). Montar UMA vez no layout.
// ============================================================

type CursorState = "default" | "hover" | "view";

export default function Cursor() {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const labelRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    // Touch ou reduced-motion: não monta o efeito; cursor nativo fica.
    if (coarse || reduce) return;

    const ring = ringRef.current;
    const dot = dotRef.current;
    const label = labelRef.current;
    if (!ring || !dot || !label) return;

    const root = document.documentElement;
    root.style.cursor = "none";

    gsap.set([ring, dot], { xPercent: -50, yPercent: -50, autoAlpha: 0 });

    const xR = gsap.quickTo(ring, "x", { duration: 0.55, ease: "power3.out" });
    const yR = gsap.quickTo(ring, "y", { duration: 0.55, ease: "power3.out" });
    const xD = gsap.quickTo(dot, "x", { duration: 0.12, ease: "power3.out" });
    const yD = gsap.quickTo(dot, "y", { duration: 0.12, ease: "power3.out" });

    let state: CursorState = "default";
    let shown = false;

    const apply = (next: CursorState) => {
      if (next === state) return;
      state = next;
      const scale = next === "view" ? 3.2 : next === "hover" ? 2.4 : 1;
      const borderColor =
        next === "default" ? "rgba(255,255,255,0.25)" : "#00a7f4";
      gsap.to(ring, { scale, borderColor, duration: 0.3, ease: "power3.out" });
      gsap.to(label, {
        autoAlpha: next === "view" ? 1 : 0,
        duration: 0.2,
      });
    };

    const onMove = (e: MouseEvent) => {
      if (!shown) {
        shown = true;
        gsap.to([ring, dot], { autoAlpha: 1, duration: 0.25 });
      }
      xR(e.clientX);
      yR(e.clientY);
      xD(e.clientX);
      yD(e.clientY);

      const el = e.target as Element | null;
      if (el?.closest('[data-cursor="view"]')) apply("view");
      else if (el?.closest('a, button, [data-cursor="hover"]')) apply("hover");
      else apply("default");
    };

    window.addEventListener("mousemove", onMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      root.style.cursor = "";
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="solvy-cursor-ring" style={{ opacity: 0 }} aria-hidden>
        <span ref={labelRef} className="solvy-cursor-label">
          VER
        </span>
      </div>
      <div ref={dotRef} className="solvy-cursor-dot" style={{ opacity: 0 }} aria-hidden />
    </>
  );
}
