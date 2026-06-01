"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { content } from "@/content";
import GlassIcon from "@/components/ui/GlassIcon";

// ============================================================
// SERVICES — lista vertical 01-05 em ACCORDION CLICÁVEL (sem scroll).
// Clicar no título abre/fecha a caixa: o item aberto mostra o ÍCONE GLASS
// (fade), o parágrafo e o ↳ resultado. Chevron gira pra indicar.
// ============================================================

const BUBBLE_SIZE = "clamp(64px, 8vw, 96px)";

export default function ServicesSection() {
  const [active, setActive] = useState(0);
  const { services } = content;
  const items = services.items;

  return (
    <section
      id="servicos"
      className="relative overflow-hidden bg-bg py-28 md:py-40"
    >
      <div className="relative mx-auto mb-16 max-w-[1240px] px-6 md:mb-24 md:px-10">
        <p className="mb-6 text-xs uppercase tracking-[0.28em] text-blue-light">
          {services.label}
        </p>
        <h2 className="display-tight max-w-2xl text-giant text-fg">
          {services.title}
        </h2>
      </div>

      <ul className="relative">
        {items.map((s, i) => {
          const on = i === active;
          return (
            <li
              key={s.title}
              className="sv-row group relative border-b border-line first:border-t"
            >
              {/* banda do item aberto */}
              <span
                aria-hidden
                className="pointer-events-none absolute inset-0 transition-opacity duration-500"
                style={{
                  opacity: on ? 1 : 0,
                  background:
                    "linear-gradient(90deg, rgba(0,167,244,0.06), rgba(2,126,226,0.025) 55%, transparent)",
                }}
              />
              <div className="relative mx-auto flex max-w-[1240px] items-start gap-5 px-6 py-7 md:gap-10 md:px-10 md:py-10">
                {/* ÍCONE — só na caixa aberta (fade). Slot reserva largura. */}
                <div
                  className="shrink-0 transition-opacity duration-500"
                  style={{ width: BUBBLE_SIZE, opacity: on ? 1 : 0 }}
                >
                  <GlassIcon i={s.iconIndex} size={BUBBLE_SIZE} />
                </div>

                <div className="min-w-0 flex-1">
                  {/* GATILHO CLICÁVEL — abre/fecha */}
                  <button
                    type="button"
                    onClick={() => setActive(on ? -1 : i)}
                    aria-expanded={on}
                    className="block w-full cursor-pointer text-left"
                  >
                    <h3
                      className="display-tight font-medium tracking-tight transition-colors duration-300"
                      style={{
                        fontSize: "clamp(1.6rem, 4.4vw, 3.6rem)",
                        color: on ? "var(--solvy-fg)" : "var(--solvy-faint)",
                      }}
                    >
                      {s.title}
                    </h3>
                    <p
                      className="mt-2 max-w-2xl text-sm leading-relaxed transition-colors duration-300 md:mt-3 md:text-base"
                      style={{
                        color: on
                          ? "var(--solvy-blue-light)"
                          : "var(--solvy-muted)",
                      }}
                    >
                      {s.trigger}
                    </p>
                  </button>

                  {/* CORPO — expande no item aberto */}
                  <div
                    className="overflow-hidden transition-all duration-500"
                    style={{ maxHeight: on ? 520 : 0, opacity: on ? 1 : 0 }}
                  >
                    <p className="mt-4 max-w-2xl text-sm leading-relaxed text-muted md:text-base">
                      {s.desc}
                    </p>
                    <p className="mt-3.5 flex max-w-2xl items-start gap-2 text-sm font-medium text-blue-light">
                      <span aria-hidden className="text-blue-light/70">
                        ↳
                      </span>
                      <span>{s.result}</span>
                    </p>
                  </div>
                </div>

                {/* número + chevron (indica clique) */}
                <div className="hidden shrink-0 flex-col items-end gap-3 md:flex">
                  <span
                    className="font-display text-lg tabular-nums transition-colors duration-300"
                    style={{
                      color: on ? "var(--solvy-fg)" : "var(--solvy-faint)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <ChevronDown
                    aria-hidden
                    className="h-5 w-5 transition-transform duration-300"
                    style={{
                      transform: on ? "rotate(180deg)" : "none",
                      color: on
                        ? "var(--solvy-blue-light)"
                        : "var(--solvy-faint)",
                    }}
                  />
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
