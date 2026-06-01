"use client";

import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/content";

// ============================================================
// TRUSTED BY — "Quem confia na Solvy". Faixa de logos rolando com
// fade lateral (mask-image) + hover. Layout inspirado no PS26 TrustedBy
// mas SEM o LogoLoop pesado: track flex duplicado + framer animate.
// Tema dark Solvy. Logos placeholder (ver content.trusted.note).
// ============================================================

const FADE_MASK =
  "linear-gradient(to right, transparent 0%, #000 8%, #000 92%, transparent 100%)";

export default function TrustedBySection() {
  const reduce = useReducedMotion();
  const { trusted } = content;

  // Duplicado pra loop contínuo (x: 0% -> -50% volta ao início sem salto).
  const loop = [...trusted.logos, ...trusted.logos];

  return (
    <section
      id="confianca"
      aria-labelledby="confianca-title"
      className="relative overflow-hidden bg-bg-2 py-20 md:py-28"
    >
      {/* glow discreto no topo */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-40"
        style={{
          background:
            "radial-gradient(60% 100% at 50% 0%, rgba(0,167,244,0.10), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-6 text-center">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-blue-light">
          {trusted.label}
        </p>
        <h2
          id="confianca-title"
          className="display-tight mx-auto mt-4 max-w-3xl text-[1.45rem] leading-[1.2] sm:text-giant sm:leading-[1.08] text-fg"
        >
          {trusted.title}
        </h2>
      </div>

      {/* faixa rolante */}
      <div
        className="relative mt-14 md:mt-16"
        style={{ maskImage: FADE_MASK, WebkitMaskImage: FADE_MASK }}
      >
        <motion.div
          className="flex w-max items-center gap-12 md:gap-16"
          animate={reduce ? undefined : { x: ["0%", "-50%"] }}
          transition={
            reduce
              ? undefined
              : { duration: 25, ease: "linear", repeat: Infinity }
          }
        >
          {loop.map((logo, i) => (
            // background-image num box FIXO: escala o SVG via bg-contain (sem o
            // bug de tamanho-zero do next/image com SVG) e SEMPRE renderiza.
            // mono => brightness-0+invert deixa branco (logo escuro). Sem mono,
            // mostra o original (ilustração que fica ruim chapada de branco).
            <div
              key={`${logo.src}-${i}`}
              role="img"
              aria-label={logo.alt}
              className={`h-16 w-[200px] shrink-0 bg-contain bg-center bg-no-repeat opacity-80 transition-opacity duration-300 hover:opacity-100 md:h-24 md:w-[260px] ${
                logo.mono ? "brightness-0 invert" : ""
              }`}
              style={{ backgroundImage: `url("${logo.src}")` }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
