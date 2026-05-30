"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { content } from "@/content";
import Reveal from "@/components/motion/Reveal";
import GlassIcon from "@/components/ui/GlassIcon";

// ============================================================
// SERVICES — lista vertical 01-05 com detecção do item central no
// scroll (mecânica preservada). Mudanças: (1) a setinha do item
// ativo virou uma BOLHA GLASS compacta (GlassIcon reusado, versão
// menor que a do ProcessSection), overlay ÚNICO pinado no centro da
// linha ativa — troca de glyph com fade+scale (AnimatePresence
// mode="wait" => nunca duas bolhas visíveis). (2) desc rica + frase-
// gatilho por serviço (ver content.services.items).
// ============================================================

const BUBBLE_SIZE = "clamp(72px, 9vw, 108px)"; // compacta (vs gigante do Process)
const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function ServicesSection() {
  const root = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const [activeY, setActiveY] = useState(0);
  const reduce = useReducedMotion();
  const { services } = content;
  const items = services.items;

  // Centro vertical da linha ativa relativo ao wrapper, via offsetTop/
  // offsetHeight (scroll-independente: a bolha rola junto com a lista).
  const measure = useCallback((idx: number) => {
    const rows = listRef.current?.querySelectorAll<HTMLLIElement>(".sv-row");
    const li = rows?.[idx];
    if (!li) return;
    setActiveY(li.offsetTop + li.offsetHeight / 2);
  }, []);

  useGSAP(
    () => {
      gsap.to(".sv-label", {
        xPercent: 10,
        ease: "none",
        scrollTrigger: {
          trigger: root.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.from(".sv-row", {
        yPercent: 18,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.06,
        ease: "expo.out",
        immediateRender: false,
        scrollTrigger: { trigger: listRef.current, start: "top 80%" },
      });

      const st = ScrollTrigger.create({
        trigger: listRef.current,
        start: "top center",
        end: "bottom center",
        onUpdate: () => {
          const rows = listRef.current?.querySelectorAll(".sv-row");
          if (!rows || !rows.length) return;
          const mid = window.innerHeight / 2;
          let best = 0;
          let bestD = Infinity;
          rows.forEach((r, i) => {
            const b = r.getBoundingClientRect();
            const d = Math.abs(b.top + b.height / 2 - mid);
            if (d < bestD) {
              bestD = d;
              best = i;
            }
          });
          if (best !== activeRef.current) {
            activeRef.current = best;
            setActive(best);
            measure(best);
          }
        },
      });
      return () => st.kill();
    },
    { scope: root }
  );

  // Medida inicial + re-medida no resize (clamp/vw mudam de tamanho).
  useEffect(() => {
    measure(activeRef.current);
    const onResize = () => measure(activeRef.current);
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measure]);

  // Re-mede depois que a desc termina de expandir (linha muda de altura).
  useEffect(() => {
    if (reduce) {
      measure(active);
      return;
    }
    const id = window.setTimeout(() => measure(active), 380);
    return () => window.clearTimeout(id);
  }, [active, reduce, measure]);

  return (
    <section
      ref={root}
      id="servicos"
      className="relative overflow-hidden bg-bg py-28 md:py-40"
    >
      <span className="sv-label section-label-bg absolute right-0 top-10 text-[22vw]">
        SERVIÇOS
      </span>

      <div className="relative mx-auto mb-16 max-w-[1240px] px-6 md:mb-24 md:px-10">
        <Reveal as="div">
          <p className="mb-6 text-xs uppercase tracking-[0.28em] text-blue-light">
            {services.label}
          </p>
          <h2 className="display-tight max-w-2xl text-giant text-fg">
            {services.title}
          </h2>
        </Reveal>
      </div>

      {/* wrapper relativo: lista + overlay da bolha (HTML válido: ul só com li) */}
      <div className="relative">
        <ul ref={listRef} className="relative">
          {items.map((s, i) => {
            const on = i === active;
            return (
              <li
                key={s.title}
                className="sv-row group relative cursor-default border-b border-line first:border-t"
              >
                {/* banda ativa full-bleed */}
                <span
                  aria-hidden
                  className="pointer-events-none absolute inset-0 transition-opacity duration-500"
                  style={{
                    opacity: on ? 1 : 0,
                    background:
                      "linear-gradient(90deg, rgba(0,167,244,0.06), rgba(2,126,226,0.025) 55%, transparent)",
                  }}
                />
                <div className="relative mx-auto flex max-w-[1240px] items-center gap-5 px-6 py-7 md:gap-12 md:px-10 md:py-10">
                  {/* slot do ícone — reserva a largura da bolha (overlay único acima) */}
                  <span
                    aria-hidden
                    className="block shrink-0"
                    style={{ width: BUBBLE_SIZE }}
                  />

                  {/* nome + gancho (colapsado, sempre) + desc rica (expandido) */}
                  <div className="min-w-0 flex-1">
                    <h3
                      className="display-tight font-medium tracking-tight transition-colors duration-500"
                      style={{
                        fontSize: "clamp(1.6rem, 4.4vw, 3.6rem)",
                        color: on ? "var(--solvy-fg)" : "var(--solvy-faint)",
                      }}
                    >
                      {s.title}
                    </h3>
                    {/* gancho (Colapsado) — sempre visível; brilha no ativo */}
                    <p
                      className="mt-2 max-w-2xl text-sm leading-relaxed transition-colors duration-500 md:mt-3 md:text-base"
                      style={{
                        color: on
                          ? "var(--solvy-blue-light)"
                          : "var(--solvy-muted)",
                      }}
                    >
                      {s.trigger}
                    </p>
                    {/* parágrafo (Expandido) + resultado (↳) — revela no ativo */}
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

                  {/* numero */}
                  <div className="hidden shrink-0 items-center md:flex">
                    <span
                      className="font-display text-lg tabular-nums transition-colors duration-500"
                      style={{
                        color: on ? "var(--solvy-fg)" : "var(--solvy-faint)",
                      }}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>

        {/* BOLHA GLASS — overlay único pinado no centro da linha ativa.
            Alinhada ao slot do ícone (mesma largura + mesmo container). */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0"
          style={{
            top: activeY,
            transition: reduce ? "none" : "top 500ms cubic-bezier(0.16,1,0.3,1)",
          }}
        >
          <div className="mx-auto flex max-w-[1240px] px-6 md:px-10">
            <div
              className="grid -translate-y-1/2 place-items-center"
              style={{ width: BUBBLE_SIZE }}
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={active}
                  initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.5 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.5 }}
                  transition={{ duration: 0.34, ease: EASE }}
                >
                  <GlassIcon i={items[active].iconIndex} size={BUBBLE_SIZE} />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
