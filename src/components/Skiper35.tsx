"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { content } from "@/content";

// ============================================================
// Skiper35 — "Hover expand" (Skiper UI). Painéis horizontais que
// expandem em LARGURA no hover/foco (spring), revelando a imagem do
// case; os colapsados mostram só o título rotacionado (-90°) + a
// categoria quando ativo. Mecânica original do Skiper35, adaptada ao
// tema dark Solvy e alimentada por content.portfolio.items (cases
// reais). Mobile cai num stack (a versão oficial não trata mobile).
// ============================================================

type SkiperItem = {
  name: string;
  role: string;
  description: string;
  src: string;
  href?: string;
  alt?: string;
};

// Painel colapsado = base fixa; o ativo cresce (flexGrow) e preenche a
// largura toda da tela -> galeria ponta a ponta em qualquer resolução.
const COLLAPSED = "4rem";

export default function Skiper35({
  items = content.portfolio.items,
}: {
  items?: readonly SkiperItem[];
}) {
  const [active, setActive] = useState(0);

  return (
    <>
      {/* DESKTOP — expand horizontal (mecânica original do Skiper35) */}
      <div className="hidden h-[80vh] w-full overflow-hidden md:block">
        <div className="flex h-full w-full">
          {items.map((p, i) => {
            const isActive = active === i;
            return (
              <motion.a
                key={p.name}
                href={p.href || undefined}
                aria-label={`${p.name} — ${p.role}`}
                onHoverStart={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                animate={{ flexGrow: isActive ? 1 : 0 }}
                transition={{ type: "spring", stiffness: 120, damping: 20 }}
                style={{ height: "100%", flexBasis: COLLAPSED, flexShrink: 0 }}
                className="relative h-full cursor-pointer border-r border-line last:border-r-0 focus:outline-none"
              >
                {/* imagem do case (revelada quando ativo) */}
                <motion.div
                  animate={{ opacity: isActive ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full p-[1.2vw] md:pl-[3.5vw]"
                >
                  <div className="relative h-full w-full overflow-hidden rounded-xl border border-line">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={p.src}
                      alt={p.alt || p.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                </motion.div>

                {/* título vertical (-90°) + categoria quando ativo */}
                <div
                  className="display-tight absolute bottom-0 left-[2vw] flex w-[calc(80vh_-_2.6vw)] origin-[0_50%] -rotate-90 justify-between pr-5 text-[2vw] font-medium leading-[2.6vw] tracking-[-0.03em]"
                  style={{
                    color: isActive
                      ? "var(--solvy-fg)"
                      : "rgba(247,249,252,0.3)",
                  }}
                >
                  <p className="whitespace-nowrap">{p.name}</p>
                  <AnimatePresence>
                    {isActive && (
                      <motion.p
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        transition={{ duration: 0.3 }}
                        className="whitespace-nowrap text-blue-light"
                      >
                        {p.role}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </motion.a>
            );
          })}
        </div>
      </div>

      {/* MOBILE / TOUCH — lista com a imagem que EXPANDE no item ativo
          (tap no nome abre/troca). Inativos ficam só com o nome esmaecido. */}
      <ul className="px-6 md:hidden">
        {items.map((item, i) => {
          const on = active === i;
          return (
            <li
              key={item.name}
              className="border-b border-line first:border-t"
            >
              {/* imagem do case — expande quando ativo */}
              <div
                className="overflow-hidden transition-all duration-500 ease-out"
                style={{ maxHeight: on ? 420 : 0, opacity: on ? 1 : 0 }}
              >
                {item.href ? (
                  <a
                    href={item.href}
                    aria-label={`${item.name} — abrir projeto`}
                    className="mt-5 block overflow-hidden rounded-2xl border border-line"
                  >
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.src}
                      alt={item.alt || item.name}
                      className="h-[280px] w-full object-cover object-top"
                    />
                  </a>
                ) : (
                  <div className="mt-5 overflow-hidden rounded-2xl border border-line">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={item.src}
                      alt={item.alt || item.name}
                      className="h-[280px] w-full object-cover object-top"
                    />
                  </div>
                )}
              </div>

              {/* nome (toggle) + categoria quando ativo */}
              <button
                type="button"
                onClick={() => setActive(on ? -1 : i)}
                aria-expanded={on}
                className="block w-full cursor-pointer py-5 text-left"
              >
                <h3
                  className="display-tight text-[1.7rem] font-medium leading-tight tracking-tight transition-colors duration-300"
                  style={{
                    color: on ? "var(--solvy-fg)" : "rgba(247,249,252,0.32)",
                  }}
                >
                  {item.name}
                </h3>
                {on && (
                  <p className="mt-2 text-xs uppercase tracking-[0.2em] text-blue-light">
                    {item.role}
                  </p>
                )}
              </button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
