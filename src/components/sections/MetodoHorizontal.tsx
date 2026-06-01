"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import AnimatedGradient from "@/components/AnimatedGradient";
import {
  ArrowUpRight,
  Code2,
  Handshake,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";
import { content } from "@/content";
import GlowCard from "@/components/ui/GlowCard";
import { useMediaQuery } from "@/lib/useMediaQuery";

// ============================================================
// MÉTODO — "Como a Solvy trabalha". Reaproveita metodo.principios num
// painel IMERSIVO full-bleed (estilo do card de "comunidade"): fundo
// cobrindo a seção + título grande sobreposto (light) com seta + grid
// ASSIMÉTRICO 4 col × 2 linhas:
//   col1/linha2 = tile de imagem (badge)   · col1/linha1 = vazio (fundo)
//   col2 = 2 cards                          · col3/linha1 = card destaque
//   col3/linha2 = vazio (fundo)             · col4 = card alto (row-span-2)
// Cards centralizados, sem número (igual à referência). Fundo =
// ColorBends (mesh azul do Hero) -> trocável por foto/vídeo full-bleed.
// Tema dark/azul Solvy. Ícones lucide. Entrada via framer whileInView.
// ============================================================

const EASE = [0.16, 1, 0.3, 1] as const;

// Ícones por iconIndex: 0 pessoa · 1 código · 2 escopo/alvo · 3 parceria.
const M_ICONS: LucideIcon[] = [Users, Code2, Target, Handshake];

type Principio = (typeof content)["metodo"]["principios"][number];

function FeatureCard({
  p,
  highlight = false,
  className = "",
}: {
  p: Principio;
  highlight?: boolean;
  className?: string;
}) {
  const Icon = M_ICONS[p.iconIndex] ?? Users;
  return (
    <GlowCard
      className={`group flex h-full min-h-[210px] flex-col items-center rounded-2xl border p-7 text-center transition-colors duration-300 ${
        highlight
          ? "border-transparent bg-fg text-bg"
          : "border-white/10 bg-white/[0.03] text-fg backdrop-blur-md hover:border-white/20"
      } ${className}`}
    >
      <span
        className={`mb-5 grid h-14 w-14 shrink-0 place-items-center rounded-full ${
          highlight
            ? "bg-blue/10 text-blue"
            : "bg-gradient-to-br from-blue to-blue-deep text-white"
        }`}
      >
        <Icon className="h-6 w-6" strokeWidth={1.75} />
      </span>
      <h4 className="mb-3 font-display text-xl font-medium tracking-tight">
        {p.title}
      </h4>
      <p
        className={`text-sm leading-relaxed ${
          highlight ? "text-bg" : "text-fg"
        }`}
      >
        {p.desc}
      </p>
    </GlowCard>
  );
}

export default function MetodoHorizontal() {
  const { metodo } = content;
  const p = metodo.principios;
  const reduce = useReducedMotion();
  const isMobile = useMediaQuery("(max-width: 767px)");

  const reveal = (i: number) => ({
    initial: reduce ? false : { opacity: 0, y: 24 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, amount: 0.2 },
    transition: { duration: 0.6, ease: EASE, delay: i * 0.08 },
  });

  return (
    <section
      id="metodo"
      aria-label="Método — Como a Solvy trabalha"
      className="relative overflow-hidden bg-bg"
    >
      {/* FUNDO IMERSIVO — gradiente animado WebGL (AnimatedGradient) com as
          cores do Solvy + azul piscina. A diagonal sup-ESQ ↔ inf-DIR é
          escurecida e o topo/base protegidos pra legibilidade. */}
      <div aria-hidden className="absolute inset-0">
        {/* base estática (sempre): fallback do mobile + base do desktop */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(85% 60% at 72% 28%, rgba(2,126,226,0.38), transparent 60%), radial-gradient(70% 60% at 18% 82%, rgba(7,219,220,0.20), transparent 60%), #030305",
          }}
        />
        {/* Gradiente animado WebGL — no desktop E no mobile. No mobile vai mais
            leve: pixel ratio limitado a 1.5 + metade das iterações de swirl
            (8 vs 16). Fallback = base estática acima, se o WebGL cair. */}
        <AnimatedGradient
          style={{ zIndex: 0 }}
          maxPixelRatio={isMobile ? 1.5 : undefined}
          config={{
            preset: "custom",
            color1: "#030305",
            color2: "#027ee2",
            color3: "#07DBDC",
            rotation: -50,
            proportion: 1,
            scale: 0.01,
            speed: 6,
            distortion: 0,
            swirl: 50,
            swirlIterations: isMobile ? 8 : 16,
            softness: 47,
            offset: -299,
            shape: "Checks",
            shapeSize: 45,
          }}
        />

        {/* escurece levemente a diagonal sup-ESQ ↔ inf-DIR */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(3,3,5,0.8) 0%, rgba(3,3,5,0.22) 24%, transparent 50%, rgba(3,3,5,0.22) 76%, rgba(3,3,5,0.8) 100%)",
          }}
        />
        {/* protege o título (topo) e costura a base com a próxima seção */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(3,3,5,0.45) 0%, transparent 15%), linear-gradient(to top, var(--solvy-bg) 0%, transparent 14%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-[1420px] px-6 py-20 md:px-10 md:py-28">
        {/* HEADER DESKTOP (composição editorial original — md+, INTOCADO) */}
        <div className="hidden md:block">
          <div className="flex items-center justify-end gap-4">
            <h2 className="display-tight text-right text-[clamp(2.25rem,6vw,5rem)] font-light leading-[0.95] tracking-tight text-fg">
              Como a Solvy
            </h2>
            <a
              href="#contato"
              aria-label={metodo.cta}
              className="grid h-14 w-14 shrink-0 place-items-center rounded-full border border-white/30 text-fg backdrop-blur-sm transition hover:border-blue-light/60 hover:bg-white/10"
            >
              <ArrowUpRight className="h-6 w-6" strokeWidth={1.75} />
            </a>
          </div>

          <div className="mt-4 flex items-center gap-6">
            <span className="text-right text-[20px] font-semibold uppercase leading-tight tracking-[0.2em] text-blue-light/80">
              Menos
              <br />
              intermediário
              <br />
              Sob medida
            </span>
            <h3 className="display-tight text-[clamp(2rem,7vw,6rem)] font-light leading-[0.9] tracking-tight text-fg">
              trabalha
            </h3>
          </div>
        </div>

        {/* HEADER MOBILE — editorial igual ref "AI CREATORS": "Como a Solvy" +
            seta (centralizada) no topo; eyebrow JUSTIFICADO À DIREITA + "trabalha"
            embaixo. */}
        <div className="md:hidden">
          <div className="flex items-center justify-between gap-3 pr-[6%]">
            <h2 className="display-tight text-[clamp(2rem,9.5vw,2.6rem)] font-light leading-[1] tracking-tight text-fg">
              Como a Solvy
            </h2>
            <a
              href="#contato"
              aria-label={metodo.cta}
              className="grid h-12 w-12 shrink-0 place-items-center rounded-full border border-white/25 text-fg backdrop-blur-sm"
            >
              <ArrowUpRight className="h-5 w-5" strokeWidth={1.5} />
            </a>
          </div>
          <div className="mt-3 flex items-center gap-3 pr-[6%]">
            <span className="flex-1 text-right text-[0.65rem] font-semibold uppercase leading-[1.4] tracking-[0.16em] text-blue-light/80">
              Menos
              <br />
              intermediário
              <br />
              Sob medida
            </span>
            <h3 className="display-tight text-[clamp(2rem,9.5vw,2.6rem)] font-light leading-[0.95] tracking-tight text-fg">
              trabalha
            </h3>
          </div>
        </div>

        {/* GRID 4×2 — mesma montagem da referência "Comunidade":
            col1 = badge (pill) + imagem coladas no rodapé · col2 = 2 cards
            empilhados · col3 = card BRANCO só na linha de cima (resto respira
            o fundo) · col4 = card alto ocupando as 2 linhas */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:mt-16 lg:grid-cols-[repeat(4,317px)] lg:grid-rows-[minmax(232px,auto)_minmax(232px,auto)] lg:justify-center">
          {/* col1 — pill "Sob medida" centralizada (acima) + tile de imagem */}
          <motion.div
            {...reveal(0)}
            className="flex flex-col justify-end gap-4 sm:col-span-2 lg:col-span-1 lg:col-start-1 lg:row-start-1 lg:row-span-2"
          >
            <span className="inline-flex h-[35px] w-[140px] items-center justify-center self-center rounded-full border border-white/30 bg-white/[0.06] text-[0.7rem] font-semibold uppercase tracking-wider text-fg backdrop-blur-md">
              Sob medida
            </span>
            <div className="relative h-[232px] w-full overflow-hidden rounded-2xl">
              <Image
                src="/igmmedida.png"
                alt=""
                fill
                sizes="(min-width:1024px) 25vw, 100vw"
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* col2 — duas cards empilhadas (glass) */}
          <motion.div {...reveal(1)} className="lg:col-start-2 lg:row-start-1">
            <FeatureCard p={p[0]} />
          </motion.div>
          <motion.div {...reveal(2)} className="lg:col-start-2 lg:row-start-2">
            <FeatureCard p={p[1]} />
          </motion.div>

          {/* col3 — card BRANCO (destaque) · 232 de altura; largura = track 317px */}
          <motion.div
            {...reveal(3)}
            className="lg:col-start-3 lg:row-start-1"
          >
            <FeatureCard p={p[2]} highlight />
          </motion.div>

          {/* col4 — card alto ocupando as 2 linhas */}
          <motion.div
            {...reveal(4)}
            className="lg:col-start-4 lg:row-start-1 lg:row-span-2"
          >
            <FeatureCard p={p[3]} className="justify-end pb-12" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
