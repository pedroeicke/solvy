"use client";

import { motion, useReducedMotion } from "framer-motion";
import Button from "@/components/ui/Button";

// ============================================================
// METHOD — substitui o antigo "6 sintomas" (ProblemSection).
// Foco em qualidade/metodo (sem mencionar tamanho do time).
// ============================================================

type Item = {
  number: string;
  title: string;
  desc: string;
};

const ITEMS: Item[] = [
  {
    number: "01",
    title: "Quem decide está na sala",
    desc:
      "Arquitetura, código e produto saem da mesma cabeça. Decisões técnicas acontecem em horas, não em sprints.",
  },
  {
    number: "02",
    title: "Código que dura mais que o contrato",
    desc:
      "Stack moderna, documentada, manutenível. Vocês não ficam reféns de quem escreveu.",
  },
  {
    number: "03",
    title: "Escopo claro, evolução real",
    desc:
      "Priorização prática, entregas iterativas e decisões transparentes do início ao fim.",
  },
  {
    number: "04",
    title: "Construção com parceria",
    desc:
      "Você fala com quem resolve. Ajustes, decisões e alinhamento sem ruído.",
  },
];

// Easing usado em todas as reveals da secao (curva "soft-out" suave)
const EASE = [0.16, 1, 0.3, 1] as const;

export default function Method() {
  const reduce = useReducedMotion();

  return (
    <section
      id="metodo"
      aria-labelledby="metodo-headline"
      className="relative overflow-hidden bg-bg"
    >
      {/* Aurora glow sutil: top-direita (principal) + bottom-esquerda (balanco) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(45vw 38vh at 92% 12%, rgba(0,167,244,0.12), transparent 60%), radial-gradient(40vw 32vh at 8% 92%, rgba(2,126,226,0.08), transparent 60%)",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-32 md:px-10 md:py-48">
        {/* EYEBROW */}
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-blue">
          Método
        </p>

        {/* HEADLINE */}
        <motion.h2
          id="metodo-headline"
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mt-4 max-w-4xl text-mega font-display font-medium leading-[1.05] text-fg"
        >
          Como a Solvy trabalha
        </motion.h2>

        {/* SUBHEAD */}
        <motion.p
          initial={reduce ? false : { opacity: 0, y: 16 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
          className="mt-8 max-w-2xl text-xl text-muted md:text-2xl"
        >
          Software sob medida não é teoria. É método.
        </motion.p>

        {/* GRID DE 4 ITENS — 1 coluna mobile, 2 colunas desktop */}
        <div className="mt-24 grid grid-cols-1 gap-8 md:grid-cols-2">
          {ITEMS.map((it, i) => (
            <motion.article
              key={it.number}
              initial={reduce ? false : { opacity: 0, y: 24 }}
              whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: EASE,
              }}
              className={[
                "group rounded-lg border border-faint/20 bg-bg-2/30 p-8 md:p-10",
                // hover: borda azul + inner glow sutil
                "transition-[border-color,box-shadow] duration-300 ease-out",
                "hover:border-blue/40 hover:shadow-[inset_0_1px_0_0_rgba(0,167,244,0.08),0_0_36px_-8px_rgba(0,167,244,0.18)]",
              ].join(" ")}
            >
              {/* numero - decorativo, escondido do screen reader */}
              <span
                aria-hidden
                className="font-display text-3xl text-blue/80"
              >
                {it.number}
              </span>

              <h3 className="mt-6 font-display text-2xl font-medium leading-tight text-fg md:text-3xl">
                {it.title}
              </h3>

              <p className="mt-4 text-base leading-relaxed text-muted md:text-lg">
                {it.desc}
              </p>
            </motion.article>
          ))}
        </div>

        {/* CLOSING + CTA */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 24 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="mx-auto mt-32 max-w-3xl text-center"
        >
          <p className="font-display text-3xl text-fg md:text-4xl">
            Cada projeto começa com uma conversa franca.
          </p>
          <div className="mt-8 flex justify-center">
            <Button href="#contato" variant="primary">
              Falar sobre meu projeto
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
