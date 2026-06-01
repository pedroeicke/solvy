"use client";

import { useEffect, useState } from "react";
import HeroDesktop from "./Hero";
import HeroMobile from "./HeroMobile";

// Decide qual Hero renderiza:
//  - <768px  → HeroMobile (estático, leve, sem pin/vídeo/WebGL)
//  - >=768px → HeroDesktop (Hero.tsx completo, INTOCADO)
// Enquanto não sabe (1º frame/SSR), segura um placeholder da MESMA altura
// (h-screen) pra não dar layout shift nem montar o Hero pesado à toa.
export default function HeroRoot() {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, []);

  if (isMobile === null) {
    return <section id="top" aria-hidden className="h-screen w-full bg-bg" />;
  }
  return isMobile ? <HeroMobile /> : <HeroDesktop />;
}
