"use client";

import { useId } from "react";
import {
  Bot,
  Globe,
  Layers,
  LifeBuoy,
  Workflow,
  type LucideIcon,
} from "lucide-react";

// Icone "glass" (vidro fosco) — CSS/SVG, sem WebGL. Hexagono com
// efeito de bolha + brilho/contorno. Pontas ARREDONDADAS via clipPath
// SVG (objectBoundingBox, escala com o tamanho).
// Glyphs agora vêm da lucide-react: TODOS arredondados por design
// (stroke-linecap/linejoin round + raios generosos).
const ROUND_HEX =
  "M0.6038,0.0603 L0.8263,0.1897 Q0.93,0.25 0.93,0.37 L0.93,0.63 " +
  "Q0.93,0.75 0.8263,0.8103 L0.6038,0.9397 Q0.5,1 0.3963,0.9397 " +
  "L0.1738,0.8103 Q0.07,0.75 0.07,0.63 L0.07,0.37 Q0.07,0.25 0.1738,0.1897 " +
  "L0.3963,0.0603 Q0.5,0 0.6038,0.0603 Z";

// Mapa por iconIndex usado em content.services.items:
// 0 Workflow · 1 Layers · 2 Bot · 3 LifeBuoy · 4 Globe.
const GLYPHS: LucideIcon[] = [Workflow, Layers, Bot, LifeBuoy, Globe];

function Glyph({ i }: { i: number }) {
  const Cmp = GLYPHS[i] ?? GLYPHS[0];
  return <Cmp className="h-1/2 w-1/2 text-white" strokeWidth={1.6} />;
}

// size: largura/altura da placa (default = versão gigante do ProcessSection).
// Passar um valor compacto (ex.: clamp p/ ~80-110px) reusa o mesmo vidro menor.
export default function GlassIcon({
  i,
  size = "clamp(220px,26vw,360px)",
}: {
  i: number;
  size?: string;
}) {
  const cid = useId();
  const clipId = `solvy-hex-${cid}`;
  const clip = `url(#${clipId})`;

  return (
    <div className="glass-float relative grid place-items-center">
      {/* clipPath do hexágono arredondado (escala com a placa) */}
      <svg
        aria-hidden
        width="0"
        height="0"
        className="absolute"
        style={{ pointerEvents: "none" }}
      >
        <defs>
          <clipPath id={clipId} clipPathUnits="objectBoundingBox">
            <path d={ROUND_HEX} />
          </clipPath>
        </defs>
      </svg>

      {/* glow atras (cores da Hero — azul Solvy, sem roxo) */}
      <div
        aria-hidden
        className="absolute inset-[-22%] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0,167,244,0.50), rgba(2,126,226,0.22) 45%, transparent 70%)",
        }}
      />
      {/* placa de vidro hexagonal (pontas arredondadas) */}
      <div
        className="relative grid place-items-center"
        style={{
          width: size,
          height: size,
          clipPath: clip,
          WebkitClipPath: clip,
          // efeito BOLHA (estilo PS26): diagonal 135° com cantos azul-claro
          // (sheen) e corpo azul navy luminoso — nas cores da Hero Solvy.
          background:
            "linear-gradient(135deg, rgba(0,167,244,0.42) 0%, #0a3a63 24%, #073152 50%, #0a3a63 76%, rgba(0,167,244,0.42) 100%)",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          // rim crisp (contorno) + luz no topo + profundidade azul embaixo
          boxShadow:
            "inset 0 0 0 1px rgba(255,255,255,0.28), inset 0 6px 18px rgba(255,255,255,0.16), inset 0 -16px 44px rgba(2,126,226,0.42)",
        }}
      >
        {/* contorno (rim) claro */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            clipPath: clip,
            WebkitClipPath: clip,
            border: "1px solid rgba(255,255,255,0.38)",
          }}
        />
        {/* sheen do topo — luz da bolha vindo de cima */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            clipPath: clip,
            WebkitClipPath: clip,
            background:
              "linear-gradient(180deg, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.07) 14%, transparent 34%)",
          }}
        />
        {/* brilho difuso de apoio (halo suave) */}
        <div
          aria-hidden
          className="absolute left-[10%] top-[6%] h-[40%] w-[58%] rounded-full opacity-50 blur-2xl"
          style={{ background: "rgba(255,255,255,0.3)" }}
        />
        {/* glint — brilho especular concentrado (reflexo da bolha) */}
        <div
          aria-hidden
          className="absolute left-[15%] top-[9%] h-[26%] w-[46%] blur-[2px]"
          style={{
            borderRadius: "50%",
            background:
              "radial-gradient(closest-side, rgba(255,255,255,0.85), rgba(255,255,255,0) 75%)",
          }}
        />
        <Glyph i={i} />
      </div>

      <style>{`
        .glass-float{ animation: glassfloat 7s ease-in-out infinite; }
        @keyframes glassfloat{
          0%,100%{ transform: translateY(-8px) rotate(-1deg); }
          50%{ transform: translateY(8px) rotate(1deg); }
        }
        @media (prefers-reduced-motion: reduce){
          .glass-float{ animation: none; }
        }
      `}</style>
    </div>
  );
}
