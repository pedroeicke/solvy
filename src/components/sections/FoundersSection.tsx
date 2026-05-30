"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/content";

// ============================================================
// FOUNDERS / "Quem constrói" — SLIDER de sócios em split 50/50
// full-bleed (réplica do layout de depoimento de referência):
//   ESQUERDA: emblema Solvy girando + frase grande + nome/cargo +
//             botões anterior/próximo (outline + preenchido).
//   DIREITA : foto full-bleed encostando na borda (arredondada só à
//             esquerda) + card translúcido na base (nome + trabalhos).
// Crossfade via framer-motion. Tema dark Solvy. Sem deps novas.
// ============================================================

// Emblema: anel de texto girando com o ícone da Solvy no centro.
function SpinningEmblem({ spin }: { spin: boolean }) {
  return (
    <div className="relative h-20 w-20 md:h-28 md:w-28">
      <svg
        viewBox="0 0 120 120"
        aria-hidden
        className={`h-full w-full text-fg/55 ${
          spin ? "animate-spin [animation-duration:16s]" : ""
        }`}
      >
        <defs>
          <path
            id="founder-ring"
            d="M60,60 m-44,0 a44,44 0 1,1 88,0 a44,44 0 1,1 -88,0"
          />
        </defs>
        {/* Mesma fonte/estilo da ScrollCue: TT Commons (sem font-brand/
            font-display), tracking 0.2em e separador "•". textLength =
            circunferência (2·π·44 ≈ 276) fecha o anel sem buraco. */}
        <text fill="currentColor" className="text-[8.5px] uppercase tracking-[0.2em]">
          <textPath
            href="#founder-ring"
            textLength="276"
            lengthAdjust="spacingAndGlyphs"
          >
            {` SOLVY • STUDIO • `.repeat(2)}
          </textPath>
        </text>
      </svg>
      <span className="absolute inset-0 grid place-items-center">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="/brand/icon.svg" alt="" aria-hidden className="h-7 w-7 md:h-10 md:w-10" />
      </span>
    </div>
  );
}

export default function FoundersSection() {
  const { founders } = content;
  const people = founders.people;
  const reduce = useReducedMotion();

  const [i, setI] = useState(0);
  const p = people[i];
  const go = (dir: number) =>
    setI((v) => (v + dir + people.length) % people.length);

  const enter = (extra: object) => (reduce ? false : { opacity: 0, ...extra });

  return (
    <section
      id="socios"
      aria-labelledby="socios-title"
      className="relative w-full overflow-hidden bg-bg"
    >
      <div className="flex flex-col md:h-[920px] md:flex-row">
        {/* ESQUERDA */}
        <div className="flex w-full flex-col justify-center gap-10 px-8 py-20 md:w-1/2 md:gap-14 md:py-24 md:pl-16 md:pr-10 lg:pl-24 xl:pl-32">
          <div className="flex flex-col gap-7">
            <p className="text-[0.7rem] uppercase tracking-[0.3em] text-blue-light">
              {founders.label}
            </p>
            <SpinningEmblem spin={!reduce} />
          </div>

          <motion.div
            key={i}
            initial={enter({ y: 16 })}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
          >
            <p
              id="socios-title"
              className="max-w-[640px] font-display font-normal leading-[1.3] text-fg"
              style={{ fontSize: "clamp(1.6rem, 2.8vw, 2.5rem)" }}
            >
              {p.bio}
            </p>
            <div className="mt-8">
              <p className="text-lg font-medium text-fg">{p.name}</p>
              <p className="mt-1 text-base text-muted">{p.role}</p>
            </div>
          </motion.div>

          {/* navegação: anterior + próximo */}
          <div className="flex items-center gap-4">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Sócio anterior"
              className="grid h-14 w-14 place-items-center rounded-full border border-white/30 transition-colors duration-300 hover:border-white/60"
            >
              <svg
                width="18"
                height="18"
                viewBox="-1 -1 16 17"
                fill="none"
                aria-hidden
              >
                <path
                  d="M14 7.53125H0M0 7.53125L7 14.5312M0 7.53125L7 0.53125"
                  stroke="white"
                  strokeOpacity="0.55"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Próximo sócio"
              className="grid h-14 w-14 place-items-center rounded-full bg-blue-light text-bg shadow-[0_0_26px_rgba(0,167,244,0.4)] transition-transform duration-300 hover:scale-110"
            >
              <svg
                width="18"
                height="18"
                viewBox="-1 -1 16 17"
                fill="none"
                aria-hidden
              >
                <path
                  d="M0 7.53125H14M14 7.53125L7 0.53125M14 7.53125L7 14.5312"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* DIREITA — foto full-bleed + card */}
        <div className="relative h-[70vh] w-full overflow-hidden rounded-none bg-bg-2 md:h-full md:w-1/2 md:rounded-l-3xl">
          <motion.div
            key={i}
            initial={enter({ scale: 1.04 })}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={p.image}
              alt={`${p.name} — ${p.role}`}
              fill
              sizes="(min-width: 768px) 50vw, 100vw"
              quality={90}
              className="object-cover object-top"
              priority={i === 0}
            />
            <div
              aria-hidden
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent"
            />

            {/* card translúcido com nome + trabalhos */}
            <div className="absolute inset-x-5 bottom-5 rounded-2xl bg-black/55 p-5 backdrop-blur-md md:inset-x-auto md:bottom-8 md:left-8 md:w-[560px] md:max-w-[calc(100%-4rem)] md:p-6">
              <p
                className="font-display font-medium leading-none text-fg"
                style={{ fontSize: "clamp(1.6rem, 2.6vw, 2.5rem)" }}
              >
                {p.name}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-white/80 md:text-base">
                {p.work}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
