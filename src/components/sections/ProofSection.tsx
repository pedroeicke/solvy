"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { content } from "@/content";

// ============================================================
// PROOF — Zona de Prova. Faixa horizontal com 4 métricas em
// count-up no scroll (GSAP puro, sem lib de count-up).
// Os números vêm de content.proof.stats (PLACEHOLDER — ver proof.note).
// ============================================================

// Formata respeitando casas decimais do valor-alvo + sufixo (pt-BR).
function formatValue(n: number, target: number, suffix: string): string {
  const dec = Number.isInteger(target)
    ? 0
    : target.toString().split(".")[1]?.length ?? 0;
  return (
    n.toLocaleString("pt-BR", {
      minimumFractionDigits: dec,
      maximumFractionDigits: dec,
    }) + suffix
  );
}

export default function ProofSection() {
  const root = useRef<HTMLElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);
  const { proof } = content;

  useGSAP(
    () => {
      const reduce = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;

      proof.stats.forEach((stat, i) => {
        const el = numRefs.current[i];
        if (!el) return;

        // Reduced-motion: mostra o valor final direto, sem contar.
        if (reduce) {
          el.textContent = formatValue(stat.value, stat.value, stat.suffix);
          return;
        }

        // Reseta pra 0 antes de animar (useGSAP roda em layout-effect,
        // então não há flash do valor final no SSR).
        el.textContent = formatValue(0, stat.value, stat.suffix);

        const obj = { n: 0 };
        gsap.to(obj, {
          n: stat.value,
          duration: 1.6,
          ease: "power2.out",
          scrollTrigger: {
            trigger: root.current,
            start: "top 80%",
            once: true,
          },
          onUpdate: () => {
            el.textContent = formatValue(obj.n, stat.value, stat.suffix);
          },
        });
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="prova"
      aria-labelledby="prova-title"
      className="relative border-y border-line bg-bg-2 py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-blue-light">
          {proof.label}
        </p>
        <h2
          id="prova-title"
          className="display-tight mt-4 max-w-3xl text-huge text-fg"
        >
          {proof.title}
        </h2>

        <dl className="mt-16 grid grid-cols-2 gap-x-8 gap-y-12 md:mt-20 md:grid-cols-4">
          {proof.stats.map((stat, i) => (
            <div key={stat.label}>
              <dt>
                <span
                  ref={(el) => {
                    numRefs.current[i] = el;
                  }}
                  className="display-tight block text-[clamp(2.5rem,6vw,5rem)] font-medium leading-none text-fg tabular-nums"
                >
                  {formatValue(stat.value, stat.value, stat.suffix)}
                </span>
              </dt>
              <dd className="mt-4 max-w-[18ch] text-sm leading-snug text-muted">
                {stat.label}
              </dd>
            </div>
          ))}
        </dl>

        {/* Lembrete de dev: números ainda são placeholder (proof.note).
            Não aparece em produção. */}
        {process.env.NODE_ENV === "development" && (
          <p className="mt-10 text-xs italic text-faint/60">{proof.note}</p>
        )}
      </div>
    </section>
  );
}
