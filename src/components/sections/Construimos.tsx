"use client";

import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/content";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import DisplayHeading from "@/components/ui/DisplayHeading";
import EditorialQuote from "@/components/ui/EditorialQuote";
import AuroraBackground from "@/components/ui/AuroraBackground";
import { EASE_OUT } from "@/lib/animations";

// ============================================================
// CONSTRUIMOS — 6 categorias com icones.
// Quiasma "Projetos descritos pela funcao. Nao pela stack."
// Grid 2 colunas desktop / 1 coluna mobile.
//
// ICONES: por enquanto SVG geometricos na paleta Solvy (placeholders
// coerentes). Quando a IA gerar os 6 PNGs 3D, basta colocar em
// /public/icons-3d/<icon-name>.png que o componente prefere o PNG.
// ============================================================

type IconName =
  | "sistemas-internos"
  | "plataformas-portais"
  | "dashboards"
  | "automacoes"
  | "produtos-digitais"
  | "recuperacao";

// SVG placeholders por icon name. Cores na paleta Solvy.
function IconPlaceholder({ name }: { name: string }) {
  const blue = "#027ee2";
  const cyan = "#00a7f4";
  const stroke = 1.6;
  const common = { stroke, fill: "none", strokeLinecap: "round" as const, strokeLinejoin: "round" as const };

  switch (name as IconName) {
    case "sistemas-internos":
      // Dois blocos se encaixando (puzzle)
      return (
        <svg viewBox="0 0 80 80" className="h-full w-full">
          <defs>
            <linearGradient id="ic-sis" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={blue} />
              <stop offset="100%" stopColor={cyan} />
            </linearGradient>
          </defs>
          <rect x="10" y="14" width="30" height="22" rx="4" fill="url(#ic-sis)" opacity="0.85" />
          <rect x="40" y="22" width="30" height="22" rx="4" stroke={cyan} {...common} />
          <rect x="22" y="46" width="30" height="22" rx="4" stroke={cyan} {...common} />
        </svg>
      );
    case "plataformas-portais":
      // Tela retangular com seta entrando da esquerda
      return (
        <svg viewBox="0 0 80 80" className="h-full w-full">
          <rect x="22" y="16" width="44" height="48" rx="4" stroke={cyan} {...common} />
          <line x1="22" y1="26" x2="66" y2="26" stroke={cyan} {...common} />
          <circle cx="27" cy="21" r="1.2" fill={cyan} />
          <circle cx="31" cy="21" r="1.2" fill={cyan} />
          <path d="M8 40 L20 40 M14 34 L20 40 L14 46" stroke={blue} strokeWidth="2" {...common} />
        </svg>
      );
    case "dashboards":
      // Barras ascendentes
      return (
        <svg viewBox="0 0 80 80" className="h-full w-full">
          <rect x="14" y="50" width="10" height="16" rx="2" fill={cyan} opacity="0.5" />
          <rect x="28" y="40" width="10" height="26" rx="2" fill={cyan} opacity="0.7" />
          <rect x="42" y="30" width="10" height="36" rx="2" fill={cyan} opacity="0.85" />
          <rect x="56" y="20" width="10" height="46" rx="2" fill={blue} />
          <line x1="10" y1="68" x2="70" y2="68" stroke={cyan} strokeWidth="1.2" />
        </svg>
      );
    case "automacoes":
      // Dois nodes conectados por arc
      return (
        <svg viewBox="0 0 80 80" className="h-full w-full">
          <path d="M18 24 Q40 4 62 24 Q40 44 18 24 Z" fill="none" stroke={cyan} {...common} opacity="0" />
          <path d="M22 28 Q40 12 58 28" stroke={cyan} strokeWidth="1.6" fill="none" strokeDasharray="3 3" />
          <path d="M22 52 Q40 68 58 52" stroke={blue} strokeWidth="1.6" fill="none" strokeDasharray="3 3" />
          <circle cx="22" cy="40" r="9" fill={blue} />
          <circle cx="58" cy="40" r="9" stroke={cyan} {...common} />
          <circle cx="58" cy="40" r="3" fill={cyan} />
        </svg>
      );
    case "produtos-digitais":
      // Cubo 3D com elemento orbitando
      return (
        <svg viewBox="0 0 80 80" className="h-full w-full">
          <defs>
            <linearGradient id="ic-pro" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor={blue} />
              <stop offset="100%" stopColor={cyan} />
            </linearGradient>
          </defs>
          {/* face frontal */}
          <path d="M22 30 L48 30 L48 56 L22 56 Z" fill="url(#ic-pro)" opacity="0.85" />
          {/* face topo */}
          <path d="M22 30 L36 22 L62 22 L48 30 Z" fill={cyan} opacity="0.55" />
          {/* face direita */}
          <path d="M48 30 L62 22 L62 48 L48 56 Z" fill={blue} opacity="0.7" />
          {/* orbita */}
          <circle cx="62" cy="58" r="4" fill={cyan} />
        </svg>
      );
    case "recuperacao":
      // Seta circular (refresh)
      return (
        <svg viewBox="0 0 80 80" className="h-full w-full">
          <path
            d="M58 25 A22 22 0 1 0 64 50"
            stroke={cyan}
            strokeWidth="2.4"
            fill="none"
            strokeLinecap="round"
          />
          <path d="M50 18 L60 25 L52 32" stroke={cyan} strokeWidth="2.4" fill="none" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="40" cy="40" r="6" fill={blue} />
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 80 80" className="h-full w-full">
          <rect x="16" y="16" width="48" height="48" rx="8" stroke={cyan} {...common} />
        </svg>
      );
  }
}

function IconOrPNG({ name }: { name: string }) {
  // Tenta carregar PNG 3D; cai pro placeholder SVG se falhar
  return (
    <div className="relative h-20 w-20">
      <div className="absolute inset-0">
        <IconPlaceholder name={name} />
      </div>
      <img
        src={`/icons-3d/${name}.png`}
        alt=""
        aria-hidden
        className="absolute inset-0 h-full w-full object-contain"
        loading="lazy"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
    </div>
  );
}

export default function Construimos() {
  const reduce = useReducedMotion();
  const s = content.services;

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24, filter: "blur(8px)" },
          whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
          viewport: { once: true, margin: "-100px" },
          transition: {
            duration: 0.6,
            delay,
            ease: EASE_OUT as unknown as number[],
          },
        };

  // Quiasma: divide o title em 2 linhas pelo "."
  const titleParts = s.title.split(/(?<=\.)\s+/);

  return (
    <section
      id="construimos"
      aria-labelledby="construimos-headline"
      className="relative overflow-hidden bg-bg py-32 md:py-48"
    >
      <AuroraBackground variant="subtle" />

      <Container className="relative">
        <Eyebrow>{s.label}</Eyebrow>

        <motion.div {...fade(0)} className="mt-4 max-w-4xl">
          <DisplayHeading id="construimos-headline" as="h2" size="display">
            {titleParts[0]}
            {titleParts[1] && (
              <>
                <br />
                <span className="text-muted">{titleParts[1]}</span>
              </>
            )}
          </DisplayHeading>
        </motion.div>

        <motion.div {...fade(0.15)} className="mt-8 max-w-2xl">
          <EditorialQuote>Sem hype, sem buzzword.</EditorialQuote>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          {s.items.map((it, i) => (
            <motion.article
              key={it.title}
              {...fade(0.2 + i * 0.08)}
              className={[
                "group rounded-xl border border-faint/20 bg-bg-2/30 p-8 md:p-10",
                "transition-[border-color,box-shadow] duration-300 ease-out",
                "hover:border-blue/40 hover:shadow-[inset_0_1px_0_0_rgba(0,167,244,0.08),0_0_36px_-8px_rgba(0,167,244,0.18)]",
              ].join(" ")}
            >
              <motion.div
                whileHover={reduce ? undefined : { rotate: 6, scale: 1.05 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="origin-center"
              >
                <IconOrPNG name={it.icon ?? "sistemas-internos"} />
              </motion.div>

              <h3 className="mt-6 font-display text-2xl font-medium leading-tight text-fg md:text-3xl">
                {it.title}
              </h3>

              <p className="mt-3 text-base leading-relaxed text-muted md:text-lg">
                {it.desc}
              </p>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
