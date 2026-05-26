"use client";

import { createElement, useRef, type ReactNode, type ElementType } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

// Reveal cinematografico via GSAP+ScrollTrigger.
// Classe .gsap-reveal + html.js garante fallback visivel sem JS.
export default function Reveal({
  children,
  as = "div",
  className,
  y = 60,
  delay = 0,
  blur = false,
  start = "top 82%",
}: {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  y?: number;
  delay?: number;
  blur?: boolean;
  start?: string;
}) {
  const ref = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      // immediateRender:false -> NAO esconde ate o trigger ativar.
      // Conteudo fica visivel por padrao; nunca trava invisivel.
      gsap.fromTo(
        ref.current,
        { autoAlpha: 0, y, filter: blur ? "blur(14px)" : "blur(0px)" },
        {
          autoAlpha: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 1.1,
          delay,
          ease: "expo.out",
          immediateRender: false,
          overwrite: "auto",
          scrollTrigger: { trigger: ref.current, start, once: true },
        }
      );
    },
    { scope: ref }
  );

  return createElement(
    as,
    { ref, className: cn("gsap-reveal", className) },
    children
  );
}
