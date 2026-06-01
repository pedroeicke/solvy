"use client";

import type React from "react";

interface ShinyButtonProps {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit";
  className?: string;
  /** mostra a setinha ↗ (default true) */
  arrow?: boolean;
}

// Botão com "fluxo de luz": conic-gradient girando na borda + shimmer interno.
// Estilo em globals.css (.shiny-cta), recolorido pro azul Solvy. Portado do
// PS26 RJ. Renderiza <a> quando recebe href, senão <button>.
export default function ShinyButton({
  children,
  href,
  onClick,
  type = "button",
  className = "",
  arrow = true,
}: ShinyButtonProps) {
  const cls = `shiny-cta ${className}`.trim();
  const inner = (
    <span>
      {children}
      {arrow && <span aria-hidden>↗</span>}
    </span>
  );

  if (href) {
    return (
      <a href={href} className={cls} onClick={onClick}>
        {inner}
      </a>
    );
  }
  return (
    <button type={type} className={cls} onClick={onClick}>
      {inner}
    </button>
  );
}
