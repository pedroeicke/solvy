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
    // Pin-spacer já criado (useGSAP da Hero roda em layout-effect, antes deste
    // passive-effect) → libera a seção-cortina sem risco de sobreposição.
    document.documentElement.classList.add("solvy-ready");
    const onResize = () => ScrollTrigger.refresh();
    window.addEventListener("resize", onResize);
    // Links "/#secao" vindos de outra página (ex.: /privacidade) ou do próprio menu: depois do reset
    // para o topo e do refresh dos pins, rola até a seção pedida.
    const irParaHash = () => {
      const id = decodeURIComponent(window.location.hash.slice(1));
      const alvo = id ? document.getElementById(id) : null;
      if (alvo) lenis.scrollTo(alvo);
    };
    const inicial = window.setTimeout(irParaHash, 350);
    window.addEventListener("hashchange", irParaHash);
    // Na própria home, clique em "/#secao" rola com o Lenis (o salto nativo briga com o scroll suave).
    const onClick = (e: MouseEvent) => {
      const link = (e.target as HTMLElement | null)?.closest?.("a[href^='/#'], a[href^='#']");
      if (!link) return;
      const href = link.getAttribute("href") || "";
      // "/#secao" só é desta página na home; "#secao" é sempre da página atual (ex.: índice da /privacidade).
      if (href.startsWith("/#") && window.location.pathname !== "/") return;
      const id = decodeURIComponent(href.split("#")[1] || "");
      const alvo = id ? document.getElementById(id) : null;
      if (!alvo) return;
      e.preventDefault();
      history.pushState(null, "", `${window.location.pathname}#${id}`);
      lenis.scrollTo(alvo, { offset: -96 });
    };
    document.addEventListener("click", onClick);
    return () => {
      window.clearTimeout(inicial);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("hashchange", irParaHash);
      document.removeEventListener("click", onClick);
    };
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
