"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValue,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { content } from "@/content";
import Reveal from "@/components/motion/Reveal";

// ============================================================
// PROCESS — "Como trabalhamos". NARRATIVA FIXA (pinned) com a MARCA
// SENDO CONSTRUÍDA pelo processo. Esquerda STICKY: o emblema Solvy começa
// CINZA/vazio e ENCHE de branco (de baixo pra cima) + anel de progresso,
// AMBOS amarrados às FASES de verdade (não a uma fração mágica do scroll):
// cada fase mede o próprio scroll e o preenchimento = (fases passadas +
// fração da atual) / (total - 1) → 100% AO ENTRAR no Sustentar e trava
// cheio. Texto da fase troca por crossfade. Direita: passos como LISTA
// EDITORIAL (fios finos, sem cards). Tema dark Solvy.
// ============================================================

const EASE = [0.16, 1, 0.3, 1] as const;

// Peso de cada fase no preenchimento (somam 1 = 100% no fim):
// 0→50% (Entender) · 50→75% (Construir) · 75→100% (Sustentar).
const FILL_WEIGHTS = [0.5, 0.25, 0.25];

// Paths do emblema Solvy (public/brand/icon.svg, viewBox 0 0 320 384).
const EMBLEM_P1 =
  "M299.71,134.71l.08,114.61c0,12.16-8.27,27.63-18.39,34.37l-96.5,64.25c-14.28,9.51-33.86,6.46-47.46-2.1l-15.66-9.85c-2.4-1.51-3.78-4.22-3.59-7.05.16-2.44,1.47-4.65,3.52-5.98l89.88-58.09,40.07-26.63c11.2-7.45,16.11-21.16,15.6-34.19-.5-12.82-7.51-25.18-18.99-32.04l-55.99-33.42c-12.63-7.54-13.34-29.2-1.73-38.72,12-9.84,24.84-17.42,37.78-25.85,3.95-2.57,9.03-2.63,12.98-.05l34.55,22.59c12.76,8.34,23.87,21.12,23.88,38.15Z";
const EMBLEM_P2 =
  "M140.35,265.01c-.02-7.5-2.97-14.9-9.44-19.59-14.23-10.3-28.57-18.47-43.03-27.3-7.28-4.45-13.08-8.94-17.84-16.13-7.29-11.01-8.99-24.08-4.46-36.61,4.1-11.34,11.91-18.31,21.61-24.8l118.32-79.22c2.52-1.69,3.97-4.65,3.77-7.75v-.11c-.12-1.89-1.09-3.61-2.62-4.65l-14.61-9.94c-4.05-2.76-8.48-4.96-13.2-6.31-11.11-3.16-23.65-2.3-33.53,3.92L42.19,101.5c-12.72,8.01-23.66,19.48-23.65,36.07l.09,113.7c.01,14.52,10.36,25.17,21.29,31.93l46.28,28.63c2.88,1.78,5.99,1.87,8.69-.04l32.61-23.2c7.68-5.47,12.88-14.15,12.85-23.58Z";

// Emblema que ENCHE de branco + anel de progresso, ligados a `progress` (0→1).
function ProgressEmblem({ progress }: { progress: MotionValue<number> }) {
  const R = 70;
  const C = 2 * Math.PI * R;
  const ringOffset = useTransform(progress, [0, 1], [C, 0]);
  const fillY = useTransform(progress, [0, 1], [384, 0]);
  const fillH = useTransform(progress, [0, 1], [0, 384]);
  const glow = useTransform(progress, [0, 1], [0.12, 0.75]);

  return (
    <div className="relative h-[200px] w-[200px]">
      {/* glow atrás (intensifica conforme enche) */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 rounded-full blur-[70px]"
        style={{
          opacity: glow,
          background:
            "radial-gradient(closest-side, rgba(0,167,244,0.5), transparent)",
        }}
      />

      {/* anel de progresso */}
      <svg viewBox="0 0 200 200" className="absolute inset-0 -rotate-90">
        <defs>
          <linearGradient id="solvy-ring" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#00a7f4" />
            <stop offset="100%" stopColor="#027ee2" />
          </linearGradient>
        </defs>
        <circle
          cx="100"
          cy="100"
          r={R}
          fill="none"
          stroke="rgba(255,255,255,0.08)"
          strokeWidth="2"
        />
        <motion.circle
          cx="100"
          cy="100"
          r={R}
          fill="none"
          stroke="url(#solvy-ring)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeDasharray={C}
          style={{ strokeDashoffset: ringOffset }}
        />
      </svg>

      {/* emblema: base cinza (vazio) + preenchimento BRANCO que sobe */}
      <div className="absolute inset-0 grid place-items-center">
        <svg
          viewBox="0 0 320 384"
          className="h-[82px] w-auto overflow-visible"
          aria-hidden
        >
          <defs>
            <clipPath id="solvy-emblem-clip">
              <path d={EMBLEM_P1} />
              <path d={EMBLEM_P2} />
            </clipPath>
          </defs>

          {/* base cinza-fantasma (emblema "vazio") */}
          <path d={EMBLEM_P1} fill="rgba(255,255,255,0.14)" />
          <path d={EMBLEM_P2} fill="rgba(255,255,255,0.14)" />

          {/* preenchimento BRANCO que sobe, recortado pela forma do emblema */}
          <motion.rect
            x="0"
            width="320"
            y={fillY}
            height={fillH}
            fill="#ffffff"
            clipPath="url(#solvy-emblem-clip)"
          />
        </svg>
      </div>
    </div>
  );
}

type Movement = (typeof content)["process"]["movements"][number];
type Step = (typeof content)["process"]["steps"][number];

// Um grupo por fase: mede o PRÓPRIO scroll (start→end no centro da tela) e
// reporta a fração pro pai somar.
function PhaseGroup({
  index,
  movement,
  mvSteps,
  isLast,
  registerRef,
  onProgress,
}: {
  index: number;
  movement: Movement;
  mvSteps: Step[];
  isLast: boolean;
  registerRef: (index: number, el: HTMLDivElement | null) => void;
  onProgress: (index: number, v: number) => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    // última fase: completa o fill 100% no CENTRO (onde alinha com o passo),
    // não no fim — assim a logo já está cheia no frame de encerramento.
    offset: isLast
      ? ["start center", "center center"]
      : ["start center", "end center"],
  });

  useEffect(() => {
    registerRef(index, ref.current);
  }, [registerRef, index]);

  useMotionValueEvent(scrollYProgress, "change", (v) => onProgress(index, v));

  return (
    <div
      ref={ref}
      data-index={index}
      className={`flex flex-col justify-center py-6 ${
        isLast ? "md:py-[12vh]" : "md:min-h-[78vh] md:py-0"
      }`}
    >
      {/* cabeçalho da fase — só mobile (no desktop a esquerda mostra) */}
      <div className="mb-8 flex items-baseline gap-4 md:hidden">
        <span className="font-mono text-sm tabular-nums text-blue-light/70">
          {movement.n}
        </span>
        <h3 className="display-tight text-3xl text-fg">{movement.key}</h3>
      </div>

      <div>
        {mvSteps.map((s, i) => (
          <Reveal key={s.n} y={28} delay={i * 0.05}>
            <div className="group border-t border-line/70 py-7 transition-colors duration-300 hover:border-blue/40 md:py-8">
              <div className="flex items-baseline gap-5">
                <span className="font-mono text-sm tabular-nums text-blue-light/60 transition-colors duration-300 group-hover:text-blue-light">
                  {s.n}
                </span>
                <div className="min-w-0">
                  <h4 className="display-tight text-2xl text-fg md:text-[1.75rem]">
                    {s.name}
                  </h4>
                  <p className="mt-2.5 max-w-md leading-relaxed text-muted">
                    {s.desc}
                  </p>
                  <p className="mt-3.5 flex items-start gap-2 text-sm font-medium text-blue-light">
                    <span aria-hidden className="text-blue-light/70">
                      ↳
                    </span>
                    <span>{s.result}</span>
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}

export default function ProcessSection() {
  const { process } = content;
  const { movements, steps } = process;
  const reduce = useReducedMotion();
  const total = movements.length;

  const [active, setActive] = useState(0);
  const groupRefs = useRef<(HTMLDivElement | null)[]>([]);

  // preenchimento global (0→1) somando a fração de cada fase.
  const fill = useMotionValue(0);
  const progresses = useRef<number[]>(movements.map(() => 0));

  const registerRef = useCallback((index: number, el: HTMLDivElement | null) => {
    groupRefs.current[index] = el;
  }, []);

  const handleProgress = useCallback(
    (index: number, v: number) => {
      progresses.current[index] = v;
      // soma ponderada: como as fases enchem em sequência, isso vira a curva
      // 0→50% (Entender) → 75% (Construir) → 100% (Sustentar).
      let f = 0;
      for (let i = 0; i < progresses.current.length; i++) {
        f += (FILL_WEIGHTS[i] ?? 1 / total) * progresses.current[i];
      }
      fill.set(Math.min(1, f));
    },
    [fill, total]
  );

  // fase ativa (texto/dots) — banda fina no centro da viewport.
  useEffect(() => {
    const els = groupRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!els.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.index);
            if (!Number.isNaN(i)) setActive(i);
          }
        }
      },
      { rootMargin: "-50% 0px -50% 0px", threshold: 0 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const mv = movements[active];
  // última fase: o painel SOBE ~145px (termina mais pra cima no frame final),
  // sem colar no header durante o resto do scroll. Ligado ao fill (sobe só
  // quando a marca enche, no Sustentar).
  const riseY = useTransform(fill, [0.75, 1], [0, -90]);

  return (
    <section id="processo" className="relative bg-bg py-28 md:py-40">
      {/* glow atmosférico sutil no topo */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px]"
        style={{
          background:
            "radial-gradient(720px 420px at 50% 0%, rgba(0,167,244,0.1), transparent 70%)",
        }}
      />

      <div className="relative mx-auto max-w-[1240px] px-6 md:px-10">
        {/* header da seção */}
        <Reveal
          as="p"
          className="text-xs uppercase tracking-[0.28em] text-blue-light"
        >
          {process.label}
        </Reveal>
        <Reveal y={40} blur>
          <h2 className="display-tight mt-6 max-w-2xl text-giant text-fg">
            {process.title}
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted md:text-lg">
            {process.intro}
          </p>
        </Reveal>

        {/* narrativa: esquerda sticky (a marca enche) · direita rola */}
        <div className="mt-16 grid grid-cols-1 md:mt-24 md:grid-cols-12 md:gap-12">
          {/* ESQUERDA — sticky, só desktop */}
          <div className="hidden md:col-span-5 md:block lg:col-span-4">
            <motion.div
              className="sticky top-40 flex flex-col items-start"
              style={{ y: riseY }}
            >
              <ProgressEmblem progress={fill} />

              <AnimatePresence mode="wait">
                <motion.div
                  key={active}
                  initial={reduce ? false : { opacity: 0, y: 14 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduce ? undefined : { opacity: 0, y: -14 }}
                  transition={{ duration: 0.4, ease: EASE }}
                  className="mt-8"
                >
                  <span className="text-[0.7rem] uppercase tracking-[0.3em] text-blue-light/70">
                    Movimento {mv.n} / {String(total).padStart(2, "0")}
                  </span>
                  <h3
                    className="display-tight mt-3 text-fg"
                    style={{ fontSize: "clamp(2.5rem, 4.4vw, 4rem)" }}
                  >
                    {mv.key}
                  </h3>
                  <p className="mt-4 max-w-xs text-base leading-relaxed text-muted">
                    {mv.lead}
                  </p>
                </motion.div>
              </AnimatePresence>

              {/* trilha de fases (indicador) */}
              <div className="mt-8 flex items-center gap-3">
                {movements.map((m, i) => (
                  <span
                    key={m.key}
                    className={`h-1.5 rounded-full transition-all duration-500 ${
                      i === active
                        ? "w-8 bg-blue-light"
                        : i < active
                          ? "w-3 bg-blue/50"
                          : "w-3 bg-white/15"
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </div>

          {/* DIREITA — passos rolam, agrupados por fase */}
          <div className="md:col-span-7 lg:col-span-8">
            {movements.map((m, mi) => (
              <PhaseGroup
                key={m.key}
                index={mi}
                movement={m}
                mvSteps={steps.filter((s) => s.phase === m.key)}
                isLast={mi === movements.length - 1}
                registerRef={registerRef}
                onProgress={handleProgress}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
