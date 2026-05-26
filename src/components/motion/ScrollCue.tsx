"use client";

import { useId } from "react";

// Indicador circular girando "ROLE A PÁGINA" — assinatura WebHub.
export default function ScrollCue({ label = "ROLE A PÁGINA" }: { label?: string }) {
  const id = useId().replace(/:/g, "");
  const text = ` ${label} • `.repeat(2);
  // Circunferencia do circulo (raio 36): 2π × 36 ≈ 226. Com font/tracking
  // originais 2 reps tem largura natural ~256 -> textLength=226 forca o
  // ajuste. lengthAdjust=spacingAndGlyphs distribui a compressao
  // UNIFORMEMENTE entre letras e espacamento (~88%), sem espremer so os
  // espacos (que e o que cramped o bullet com lengthAdjust=spacing).
  return (
    <div className="relative h-24 w-24 select-none md:h-28 md:w-28" aria-hidden>
      <svg viewBox="0 0 100 100" className="h-full w-full animate-[spin_16s_linear_infinite]">
        <defs>
          <path id={`c-${id}`} d="M50,50 m-36,0 a36,36 0 1,1 72,0 a36,36 0 1,1 -72,0" />
        </defs>
        <text className="fill-muted text-[7.5px] uppercase tracking-[0.2em]">
          <textPath
            href={`#c-${id}`}
            textLength="226"
            lengthAdjust="spacingAndGlyphs"
          >
            {text}
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 flex items-center justify-center text-blue-light">
        <svg width="15" height="15" viewBox="0 0 24 24" fill="none">
          <path
            d="M12 5v14M6 13l6 6 6-6"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
    </div>
  );
}
