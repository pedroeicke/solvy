"use client";

import Image from "next/image";
import dynamic from "next/dynamic";
import ScrollCue from "@/components/motion/ScrollCue";

const ColorBends = dynamic(() => import("@/components/ColorBends"), {
  ssr: false,
});

// Hero MOBILE — versão ESTÁTICA (sem vídeo, sem pin, sem scroll-jacking),
// fiel à ideia do desktop em duas telas:
//   TELA 1: logo sobre o color blend (ColorBends)
//   TELA 2: a cena (base.png — homem na frente da montanha) + a frase
// A imagem é a base.png (composite único) DE PROPÓSITO: nada de parallax,
// que estragaria a experiência no mobile. O "Nosso movimento" vem depois.

const ICON_A =
  "M299.71,134.71l.08,114.61c0,12.16-8.27,27.63-18.39,34.37l-96.5,64.25c-14.28,9.51-33.86,6.46-47.46-2.1l-15.66-9.85c-2.4-1.51-3.78-4.22-3.59-7.05.16-2.44,1.47-4.65,3.52-5.98l89.88-58.09,40.07-26.63c11.2-7.45,16.11-21.16,15.6-34.19-.5-12.82-7.51-25.18-18.99-32.04l-55.99-33.42c-12.63-7.54-13.34-29.2-1.73-38.72,12-9.84,24.84-17.42,37.78-25.85,3.95-2.57,9.03-2.63,12.98-.05l34.55,22.59c12.76,8.34,23.87,21.12,23.88,38.15Z";
const ICON_B =
  "M140.35,265.01c-.02-7.5-2.97-14.9-9.44-19.59-14.23-10.3-28.57-18.47-43.03-27.3-7.28-4.45-13.08-8.94-17.84-16.13-7.29-11.01-8.99-24.08-4.46-36.61,4.1-11.34,11.91-18.31,21.61-24.8l118.32-79.22c2.52-1.69,3.97-4.65,3.77-7.75v-.11c-.12-1.89-1.09-3.61-2.62-4.65l-14.61-9.94c-4.05-2.76-8.48-4.96-13.2-6.31-11.11-3.16-23.65-2.3-33.53,3.92L42.19,101.5c-12.72,8.01-23.66,19.48-23.65,36.07l.09,113.7c.01,14.52,10.36,25.17,21.29,31.93l46.28,28.63c2.88,1.78,5.99,1.87,8.69-.04l32.61-23.2c7.68-5.47,12.88-14.15,12.85-23.58Z";
const WORDMARK =
  "M570.26,190.52c-11.22-5.44-23.5-8.58-36.3-9.52l-58.28-4.26c-18.11-1.32-39.9-3.6-41.29-19.79-1.25-14.62,11.98-21.94,27.26-24.52,20.9-3.53,41.54-3.45,62.34.58,15.49,3,29.31,11.43,30.43,27.93l33.14-.02c.27-33.54-29.59-50.68-60.88-55.98-46.09-7.8-127.13-3.28-127.26,52.64-.08,34.34,32.14,44.47,63.57,46.72l61.61,4.41c12.88.92,29.96,4.83,32.78,15.35,9.31,34.79-63.9,33.5-96.23,27.5-8.5-1.58-15.9-5.07-22.81-9.7-4.7-5.34-6.88-11.29-8.1-18.98l-34.8-.04c.7,33.76,26.3,49.73,57.22,55.56,34.36,6.48,83.68,6.34,114.49-9.1,17.87-8.96,27.65-26.09,25.98-46.01-1.21-14.41-9.54-26.3-22.86-32.76ZM1114.9,107.5l37.52.12-88.98,170.11-38.54.39-54.2-102.86-35-67.77,38.23.1,70.53,138.72,42.46-83.64,27.99-55.18ZM872.14,32.48l35.26.04-.29,245.69-35.26-.04.29-245.69ZM1384.78,107.69l-13.15,27.84-80.62,164.43c-6.6,13.45-13.67,24.87-24.16,34.34-25.18,22.75-61.66,20.3-93.6,11.57l-.05-31.38c16.83,5.66,33.41,9.05,50.81,6,19.95-3.5,31.96-22.98,39.34-41.39l-88.4-171.41,38.12-.29,56.59,113.01,12.9,26.01,66.06-138.93,36.16.19ZM752.21,103.68c-35.23-4.57-76.74-.81-104.45,21.94-19.67,16.15-28.57,40.16-28.56,65.43.02,43.89,20.44,73.55,62.7,85.67,31.3,8.97,74.17,7.78,104.94-5.74,39.17-17.2,52.65-55.72,46.77-96.33-6.04-41.73-41.02-65.75-81.41-70.98ZM794.71,218.27c-14.55,35.56-66.05,39.49-100.33,29.88-16.29-4.56-30.06-15.39-35.53-31.57-5.1-15.09-5.15-31.66-.42-46.93,5.08-16.42,18.59-28.18,35.14-33.07,37.17-10.98,91.75-5.2,103.22,35.61,4.27,15.19,3.93,31.4-2.07,46.07Z";

const VB_W = 1403.32;
const VB_H = 384.62;

export default function HeroMobile() {
  return (
    <section id="top" className="relative w-full bg-bg">
      {/* TELA 1 — logo sobre o COLOR BLEND (ColorBends), igual à abertura do desktop */}
      <div className="relative flex h-[100svh] min-h-[560px] flex-col items-center justify-center overflow-hidden px-6">
        <div aria-hidden className="absolute inset-0">
          {/* halo base (mesmo do desktop) */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(70vw 50vh at 70% 25%, rgba(0,167,244,0.22), transparent 60%), radial-gradient(60vw 50vh at 25% 80%, rgba(2,126,226,0.20), transparent 60%), #030305",
            }}
          />
          {/* color blend WebGL (cores do Hero) */}
          <div className="absolute inset-0">
            <ColorBends
              colors={["#012a4a", "#027ee2", "#00a7f4", "#0a4a86"]}
              rotation={90}
              speed={0.16}
              scale={1.35}
              frequency={0.5}
              warpStrength={1}
              mouseInfluence={0}
              parallax={0}
              noise={0}
              iterations={2}
              intensity={1}
              bandWidth={5}
              transparent
            />
          </div>
          {/* vinheta pra costurar as bordas */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 72% 58% at 50% 50%, transparent 32%, rgba(3,3,5,0.5) 78%, #030305 100%)",
            }}
          />
        </div>

        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          className="relative h-auto w-[80vw] max-w-[440px]"
          fill="#ffffff"
          aria-label="Solvy"
        >
          <g>
            <path d={ICON_A} />
            <path d={ICON_B} />
          </g>
          <path d={WORDMARK} />
        </svg>

        <div className="absolute bottom-7 left-1/2 -translate-x-1/2">
          <ScrollCue />
        </div>
      </div>

      {/* TELA 2 — a CENA (base.png, imagem única, SEM parallax) + a frase */}
      <div className="relative flex h-[100svh] min-h-[560px] flex-col items-center justify-center overflow-hidden px-6">
        <div aria-hidden className="absolute inset-0">
          <Image
            src="/hero-layers/base-hero.jpg"
            alt=""
            fill
            priority
            unoptimized
            sizes="100vw"
            className="object-cover"
          />
          {/* SEM escurecimento por cima — só uma costura sutil na base pra
              emendar com a próxima seção. A frase fica legível pelo text-shadow. */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to bottom, transparent 0%, transparent 74%, rgba(3,3,5,0.88) 100%)",
            }}
          />
        </div>

        <h1
          className="relative max-w-[18ch] text-center font-display text-[clamp(1.5rem,7vw,2.1rem)] leading-[1.12] text-fg"
          style={{
            textShadow:
              "0 2px 26px rgba(0,0,0,0.92), 0 0 12px rgba(0,0,0,0.85), 0 1px 4px rgba(0,0,0,0.9)",
          }}
        >
          O software se adapta à sua operação. Não o{" "}
          <span style={{ color: "var(--solvy-blue-light)" }}>contrário</span>.
        </h1>
      </div>
    </section>
  );
}
