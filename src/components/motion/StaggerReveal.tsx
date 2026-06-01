"use client";

import { createElement, useRef, type ReactNode, type ElementType } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

// ============================================================
// STAGGER REVEAL — anima os FILHOS DIRETOS em sequência (não o bloco).
// Mesmo padrão do Reveal: immediateRender:true (esconde já no mount, sem flash)
// + scrollTrigger once. Sem JS o "from" nunca é aplicado, então fica visível.
// NÃO está aplicado em nenhuma seção ainda — só o primitivo.
// ============================================================

export default function StaggerReveal({
  children,
  stagger = 0.08,
  y = 24,
  blur = true,
  start = "top 82%",
  className,
  as = "div",
}: {
  children: ReactNode;
  stagger?: number;
  y?: number;
  blur?: boolean;
  start?: string;
  className?: string;
  as?: ElementType;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!ref.current) return;
      const targets = gsap.utils.toArray<HTMLElement>(
        Array.from(ref.current.children)
      );
      if (!targets.length) return;

      gsap.fromTo(
        targets,
        { autoAlpha: 0, y, filter: blur ? "blur(8px)" : "blur(0px)" },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.9,
          ease: "expo.out",
          stagger,
          immediateRender: true,
          overwrite: "auto",
          scrollTrigger: { trigger: ref.current, start, once: true },
        }
      );
    },
    { scope: ref }
  );

  return createElement(as, { ref, className }, children);
}
