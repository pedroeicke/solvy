"use client";

import { useEffect, type CSSProperties, type ReactNode } from "react";

// ============================================================
// GlowCard — borda com spotlight/glow que segue o cursor.
// Portado do PS26 (components/ui/GlowCard). Wrapper "leve": não
// impõe layout/padding, o consumidor controla via className/style.
// hue 199 ≈ #00a7f4 = blue-light da Solvy (mesmo tom do PS26).
//
// O cursor é lido por UM ÚNICO listener global (escreve --x/--y em
// :root, que todos os [data-glow] herdam) — barato mesmo com muitos
// cards na página. Ref-counted: liga no 1º card, desliga no último.
// ============================================================

type Props = {
  children: ReactNode;
  className?: string;
  style?: CSSProperties;
};

let mounted = 0;
let onMove: ((e: PointerEvent) => void) | null = null;

function attachPointer() {
  if (typeof document === "undefined") return;
  mounted += 1;
  if (onMove) return;
  onMove = (e: PointerEvent) => {
    const r = document.documentElement;
    r.style.setProperty("--x", e.clientX.toFixed(2));
    r.style.setProperty("--y", e.clientY.toFixed(2));
    r.style.setProperty("--xp", (e.clientX / window.innerWidth).toFixed(3));
    r.style.setProperty("--yp", (e.clientY / window.innerHeight).toFixed(3));
  };
  document.addEventListener("pointermove", onMove, { passive: true });
}

function detachPointer() {
  mounted -= 1;
  if (mounted <= 0 && onMove) {
    document.removeEventListener("pointermove", onMove);
    onMove = null;
    mounted = 0;
  }
}

const STYLES_ID = "glow-card-styles";
const GLOW_STYLES = `
  [data-glow] {
    --border-size: calc(var(--border, 1) * 1px);
    --spotlight-size: calc(var(--size, 260) * 1px);
    --hue: calc(var(--base) + (var(--xp, 0) * var(--spread, 0)));
  }
  [data-glow]::before,
  [data-glow]::after {
    pointer-events: none;
    content: "";
    position: absolute;
    inset: calc(var(--border-size) * -1);
    border: var(--border-size) solid transparent;
    border-radius: inherit;
    background-attachment: fixed;
    background-size: calc(100% + (2 * var(--border-size))) calc(100% + (2 * var(--border-size)));
    background-repeat: no-repeat;
    background-position: 50% 50%;
    -webkit-mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
    -webkit-mask-clip: padding-box, border-box;
    -webkit-mask-composite: source-in;
    mask: linear-gradient(transparent, transparent), linear-gradient(white, white);
    mask-clip: padding-box, border-box;
    mask-composite: intersect;
  }
  [data-glow]::before {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.75) calc(var(--spotlight-size) * 0.75) at
      calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(var(--hue, 199) calc(var(--saturation, 100) * 1%) calc(var(--lightness, 55) * 1%) / var(--border-spot-opacity, 0.95)), transparent 100%);
    filter: brightness(1.8);
  }
  [data-glow]::after {
    background-image: radial-gradient(
      calc(var(--spotlight-size) * 0.5) calc(var(--spotlight-size) * 0.5) at
      calc(var(--x, 0) * 1px) calc(var(--y, 0) * 1px),
      hsl(0 100% 100% / var(--border-light-opacity, 0.55)), transparent 100%);
  }
  [data-glow] [data-glow] {
    position: absolute;
    inset: 0;
    will-change: filter;
    opacity: var(--outer, 1);
    border-radius: inherit;
    border-width: calc(var(--border-size) * 20);
    filter: blur(calc(var(--border-size) * 10));
    background: none;
    pointer-events: none;
    border: none;
  }
  [data-glow] > [data-glow]::before {
    inset: -10px;
    border-width: 10px;
  }
`;

let stylesInjected = false;

export function GlowCard({ children, className, style }: Props) {
  useEffect(() => {
    if (!stylesInjected && typeof document !== "undefined") {
      if (!document.getElementById(STYLES_ID)) {
        const s = document.createElement("style");
        s.id = STYLES_ID;
        s.textContent = GLOW_STYLES;
        document.head.appendChild(s);
      }
      stylesInjected = true;
    }
    attachPointer();
    return () => detachPointer();
  }, []);

  // #00a7f4 ≈ hsl(199, 100%, 48%) — varia levemente no eixo X (spread 30)
  const glowVars: CSSProperties = {
    ["--base" as string]: "199",
    ["--spread" as string]: "30",
    ["--border" as string]: "1.5",
    ["--saturation" as string]: "100",
    ["--lightness" as string]: "55",
    ["--bg-spot-opacity" as string]: "0.12",
    ["--border-spot-opacity" as string]: "0.95",
    ["--border-light-opacity" as string]: "0.55",
    ["--size" as string]: "260",
    ["--outer" as string]: "1",
  };

  return (
    <div
      data-glow
      className={className}
      style={{
        ...glowVars,
        ...style,
        position: "relative",
        touchAction: "none",
      }}
    >
      <div data-glow />
      {children}
    </div>
  );
}

export default GlowCard;
