"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { content } from "@/content";
import Reveal from "@/components/motion/Reveal";

// ============================================================
// PORTFOLIO — accordion hover-expand (estilo referência do Pedro).
// Desktop: item ativo expande (flex 6), inativos viram lombada (flex 1)
//          com título na vertical.
// Mobile/touch: stack de cards normais.
// Dados vêm de content.portfolio.items (imagens reais em /cases).
// ============================================================

const EASE = [0.16, 1, 0.3, 1] as const; // power2.out

export default function PortfolioSection() {
  const { portfolio } = content;
  const items = portfolio.items;

  const [active, setActive] = useState(0);
  const [isTouch, setIsTouch] = useState(false);

  // Detecta touch (hover indisponível) → cai pro stack mobile
  useEffect(() => {
    const mq = window.matchMedia("(hover: none)");
    setIsTouch(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsTouch(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-headline"
      className="relative overflow-hidden bg-bg px-6 py-24 md:px-10 md:py-40"
    >
      {/* Aurora glow sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 600px at 80% 20%, rgba(0,167,244,0.08), transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-[1240px]">
        {/* HEADER */}
        <p className="mb-4 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-blue-light">
          <span className="h-px w-7 bg-blue-light/60" />
          {portfolio.label}
        </p>
        <Reveal as="h2" y={30} className="display-tight text-giant text-fg">
          <span id="portfolio-headline">{portfolio.title}</span>
        </Reveal>
        <Reveal
          as="p"
          delay={0.1}
          className="mt-6 max-w-2xl text-lead leading-relaxed text-muted"
        >
          {portfolio.body}
        </Reveal>

        {/* ============ DESKTOP: accordion hover-expand ============ */}
        {!isTouch && (
          <div className="mt-16 hidden h-[520px] w-full gap-3 md:flex">
            {items.map((item, index) => {
              const isActive = active === index;
              return (
                <motion.a
                  key={item.name}
                  href={item.href || undefined}
                  aria-label={`${item.name} — ${item.role}`}
                  className="group relative cursor-pointer overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-light"
                  onMouseEnter={() => setActive(index)}
                  onFocus={() => setActive(index)}
                  animate={{ flex: isActive ? 6 : 1 }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  {/* Imagem de fundo */}
                  <div
                    className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                    style={{
                      backgroundImage: `url("${item.src}")`,
                      backgroundColor: "#0a4a86",
                    }}
                  />

                  {/* Overlay escuro — mais forte quando inativo */}
                  <motion.div
                    aria-hidden
                    className="absolute inset-0 bg-bg"
                    animate={{ opacity: isActive ? 0.25 : 0.7 }}
                    transition={{ duration: 0.6, ease: EASE }}
                  />

                  {/* Gradiente base pra legibilidade */}
                  <div
                    aria-hidden
                    className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
                    style={{
                      background:
                        "linear-gradient(to top, rgba(3,3,5,0.92), transparent)",
                    }}
                  />

                  {/* Glow cyan no canto quando ativo */}
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute inset-0"
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{ duration: 0.6, ease: EASE }}
                    style={{
                      background:
                        "radial-gradient(circle at top left, rgba(0,167,244,0.18), transparent 50%)",
                    }}
                  />

                  {/* Conteúdo expandido */}
                  <motion.div
                    className="absolute inset-0 flex flex-col justify-end p-6"
                    animate={{ opacity: isActive ? 1 : 0 }}
                    transition={{
                      duration: 0.4,
                      delay: isActive ? 0.15 : 0,
                      ease: EASE,
                    }}
                  >
                    <p className="mb-2 whitespace-nowrap text-xs uppercase tracking-widest text-blue-light">
                      {item.role}
                    </p>
                    <h3 className="display-tight whitespace-nowrap text-2xl font-medium text-fg lg:text-3xl">
                      {item.name}
                    </h3>
                    <p className="mt-3 max-w-md text-sm leading-relaxed text-muted">
                      {item.description}
                    </p>
                  </motion.div>

                  {/* Título vertical (lombada) quando inativo */}
                  <motion.div
                    aria-hidden
                    className="pointer-events-none absolute inset-0 flex items-end justify-center pb-6"
                    animate={{ opacity: isActive ? 0 : 1 }}
                    transition={{ duration: 0.4, ease: EASE }}
                  >
                    <span
                      className="display-tight whitespace-nowrap text-sm text-fg/80"
                      style={{
                        writingMode: "vertical-rl",
                        transform: "rotate(180deg)",
                      }}
                    >
                      {item.name}
                    </span>
                  </motion.div>
                </motion.a>
              );
            })}
          </div>
        )}

        {/* ============ MOBILE / TOUCH: stack ============ */}
        <div
          className={
            isTouch
              ? "mt-12 grid grid-cols-1 gap-4"
              : "mt-12 grid grid-cols-1 gap-4 md:hidden"
          }
        >
          {items.map((item) => {
            return (
              <a
                key={item.name}
                href={item.href || undefined}
                aria-label={`${item.name} — ${item.role}`}
                className="relative block h-56 overflow-hidden rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-light"
              >
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage: `url("${item.src}")`,
                    backgroundColor: "#0a4a86",
                  }}
                />
                <div aria-hidden className="absolute inset-0 bg-bg/50" />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-2/3"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(3,3,5,0.92), transparent)",
                  }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0"
                  style={{
                    background:
                      "radial-gradient(circle at top left, rgba(0,167,244,0.12), transparent 55%)",
                  }}
                />
                <div className="absolute inset-0 flex flex-col justify-end p-5">
                  <p className="mb-1.5 text-xs uppercase tracking-widest text-blue-light">
                    {item.role}
                  </p>
                  <h3 className="display-tight text-xl font-medium text-fg">
                    {item.name}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {item.description}
                  </p>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
