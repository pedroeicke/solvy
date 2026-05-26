"use client";

import { useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { content } from "@/content";
import Reveal from "@/components/motion/Reveal";

const TICKS = Array.from({ length: 11 });

export default function ServicesSection() {
  const root = useRef<HTMLElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const { services } = content;
  const items = services.items;

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
          }
        },
      });
      return () => st.kill();
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="servicos"
      className="relative overflow-hidden border-t border-line bg-bg py-28 md:py-40"
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
                {/* seta */}
                <span
                  aria-hidden
                  className="shrink-0 transition-all duration-500"
                  style={{
                    color: on ? "var(--solvy-blue-light)" : "var(--solvy-faint)",
                    transform: on ? "rotate(0deg) scale(1.1)" : "rotate(0deg)",
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    className="h-6 w-6 md:h-9 md:w-9"
                  >
                    <path
                      d={on ? "M12 4v15M12 19l-6-6M12 19l6-6" : "M7 7h10v10M17 7L7 17"}
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>

                {/* nome + desc */}
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
                  <div
                    className="overflow-hidden transition-all duration-500"
                    style={{
                      maxHeight: on ? 64 : 0,
                      opacity: on ? 1 : 0,
                    }}
                  >
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted md:text-base">
                      {s.desc}
                    </p>
                  </div>
                </div>

                {/* numero + regua */}
                <div className="hidden shrink-0 items-center gap-6 md:flex">
                  <div
                    className="flex items-end gap-[3px] transition-opacity duration-500"
                    style={{ opacity: on ? 1 : 0.3 }}
                  >
                    {TICKS.map((_, t) => {
                      const center = t === 5;
                      return (
                        <span
                          key={t}
                          className="w-px transition-all duration-500"
                          style={{
                            height: center && on ? 26 : t % 5 === 0 ? 16 : 9,
                            background:
                              center && on
                                ? "var(--solvy-blue-light)"
                                : "var(--solvy-line-strong)",
                          }}
                        />
                      );
                    })}
                  </div>
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
    </section>
  );
}
