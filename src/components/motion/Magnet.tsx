"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "@/lib/gsap";
import { cn } from "@/lib/utils";

// ============================================================
// MAGNET — wrapper magnético pra CTAs. O filho interno é puxado em
// direção ao cursor quando ele entra no `range`. Elastic no retorno.
// Desabilita em touch e reduced-motion (renderiza children sem efeito).
// Aceita data-* e outros atributos de div via passthrough (ex:
// data-cursor="hover").
// ============================================================

type Props = {
  children: ReactNode;
  strength?: number;
  range?: number;
} & React.ComponentPropsWithoutRef<"div">;

export default function Magnet({
  children,
  strength = 0.35,
  range = 120,
  className,
  ...rest
}: Props) {
  const wrap = useRef<HTMLDivElement>(null);
  const inner = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const coarse = window.matchMedia("(pointer: coarse)").matches;
    const reduce = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (coarse || reduce) return; // sem efeito; children renderiza normal

    const w = wrap.current;
    const el = inner.current;
    if (!w || !el) return;

    const xTo = gsap.quickTo(el, "x", {
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
    });
    const yTo = gsap.quickTo(el, "y", {
      duration: 0.6,
      ease: "elastic.out(1, 0.4)",
    });

    const onMove = (e: MouseEvent) => {
      const r = w.getBoundingClientRect();
      const cx = r.left + r.width / 2;
      const cy = r.top + r.height / 2;
      const dx = e.clientX - cx;
      const dy = e.clientY - cy;
      if (Math.hypot(dx, dy) < range) {
        xTo(dx * strength);
        yTo(dy * strength);
      } else {
        xTo(0);
        yTo(0);
      }
    };

    const reset = () => {
      xTo(0);
      yTo(0);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    w.addEventListener("mouseleave", reset);

    return () => {
      window.removeEventListener("mousemove", onMove);
      w.removeEventListener("mouseleave", reset);
    };
  }, [strength, range]);

  return (
    <div ref={wrap} className={cn("inline-block", className)} {...rest}>
      <div ref={inner} className="inline-block">
        {children}
      </div>
    </div>
  );
}
