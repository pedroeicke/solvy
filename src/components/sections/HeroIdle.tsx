"use client";

import { useEffect, useRef } from "react";

// Camadas do parallax do final do video.
// PNGs em /public/hero-layers/.
// Ordem (back -> front), com intensidade de parallax crescente:
//  base   : composite de fundo, sem parallax (z 0)
//  ceu    : ceu/montanhas distantes  (parallax bem leve)
//  pedraesquerda + pedradireita : pedras laterais (medio)
//  caverna: entrada da caverna no centro (medio-forte)
//  homem  : silhueta do homem no foreground (forte)
//  arvore : galho/arvore em frente (mais forte)
const LAYERS = [
  { src: "/hero-layers/base.png", strength: 0, scale: 1.0 },
  { src: "/hero-layers/ceu.png", strength: 8, scale: 1.03 },
  { src: "/hero-layers/caverna.png", strength: 18, scale: 1.05 },
  { src: "/hero-layers/homem.png", strength: 28, scale: 1.06 },
  { src: "/hero-layers/arvore.png", strength: 36, scale: 1.08 },
];

export default function HeroIdle({ fadeOut = 0 }: { fadeOut?: number }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const layerRefs = useRef<(HTMLImageElement | null)[]>([]);
  const target = useRef({ x: 0, y: 0 }); // -1..1 (mouse)
  const current = useRef({ x: 0, y: 0 }); // lerped
  const rafId = useRef<number | null>(null);

  // Captura mouse global, normaliza pra -1..1 baseado no rect do root
  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      const rect = rootRef.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      target.current.x = (e.clientX - cx) / (rect.width / 2);
      target.current.y = (e.clientY - cy) / (rect.height / 2);
    };

    // Touch fallback pra mobile
    const onTouch = (e: TouchEvent) => {
      const t = e.touches[0];
      if (!t) return;
      const rect = rootRef.current?.getBoundingClientRect();
      if (!rect) return;
      const cx = rect.left + rect.width / 2;
      const cy = rect.top + rect.height / 2;
      target.current.x = (t.clientX - cx) / (rect.width / 2);
      target.current.y = (t.clientY - cy) / (rect.height / 2);
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    window.addEventListener("touchmove", onTouch, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("touchmove", onTouch);
    };
  }, []);

  // Loop rAF: lerp current -> target, aplica transform em cada layer
  useEffect(() => {
    const tick = () => {
      // Lerp suave (0.08 = inertia)
      current.current.x += (target.current.x - current.current.x) * 0.08;
      current.current.y += (target.current.y - current.current.y) * 0.08;

      const cx = current.current.x;
      const cy = current.current.y;

      for (let i = 0; i < LAYERS.length; i++) {
        const el = layerRefs.current[i];
        if (!el) continue;
        const { strength, scale } = LAYERS[i];
        // Move oposto ao mouse pra dar sensacao de profundidade
        const tx = -cx * strength;
        const ty = -cy * strength * 0.6; // Y menos sensivel que X
        el.style.transform = `translate3d(${tx}px, ${ty}px, 0) scale(${scale})`;
      }

      rafId.current = requestAnimationFrame(tick);
    };

    rafId.current = requestAnimationFrame(tick);
    return () => {
      if (rafId.current !== null) cancelAnimationFrame(rafId.current);
    };
  }, []);

  return (
    <div
      ref={rootRef}
      aria-hidden
      className="absolute inset-0 overflow-hidden"
      style={{ opacity: 1 - fadeOut }}
    >
      {LAYERS.map((layer, i) => (
        <img
          key={layer.src}
          ref={(el) => {
            layerRefs.current[i] = el;
          }}
          src={layer.src}
          alt=""
          className="absolute inset-0 h-full w-full object-cover pointer-events-none select-none"
          style={{
            willChange: "transform",
            transform: `translate3d(0,0,0) scale(${layer.scale})`,
          }}
          draggable={false}
        />
      ))}
    </div>
  );
}
