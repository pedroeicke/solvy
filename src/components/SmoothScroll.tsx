"use client";

import { ReactLenis, useLenis } from "lenis/react";
import { useEffect } from "react";
import { ScrollTrigger } from "@/lib/gsap";

function Sync() {
  // ReactLenis ja roda o proprio rAF (autoRaf). NAO driblar via gsap.ticker
  // (double-rAF trava o scroll). Apenas sincroniza o ScrollTrigger.
  const lenis = useLenis(() => ScrollTrigger.update());

  useEffect(() => {
    // Reload sempre no topo: evita o scroll-jack do hero calcular
    // progresso > 0 e esconder o texto ("aparece e some").
    if ("scrollRestoration" in history) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (!lenis) return;
    lenis.scrollTo(0, { immediate: true });
    ScrollTrigger.refresh();
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [lenis]);

  return null;
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return (
    <ReactLenis
      root
      options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}
    >
      <Sync />
      {children}
    </ReactLenis>
  );
}
