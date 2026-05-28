"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { content } from "@/content";

// ============================================================
// NAV OVERLAY — fullscreen hamburger nav (estilo Hover.dev).
// Fechado: quadrado 80x80 com gradiente Solvy no canto sup. direito.
// Aberto : painel expande pra tela toda (inset 16px) com logo,
//          links grandes (stagger), socials e CTA de contato.
// Cores: gradiente Solvy #027ee2 → #00a7f4 (no lugar do violet original).
// ============================================================

const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
const PANEL_BG = "linear-gradient(to bottom right, #027ee2, #00a7f4)";

const SOCIALS = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/pedroeicke",
    path: "M4.98 3.5C4.98 4.88 3.87 6 2.5 6S.02 4.88.02 3.5C.02 2.12 1.13 1 2.5 1s2.48 1.12 2.48 2.5zM5 8H0v16h5V8zm7.98 0H8.02v16h4.96v-8.4c0-4.67 6.02-5.05 6.02 0V24H24V13.85c0-7.84-8.96-7.55-11.02-3.69V8z",
  },
  {
    label: "Instagram",
    href: "https://instagram.com",
    path: "M12 2.16c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.17 15.58 2.16 15.2 2.16 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.17 8.8 2.16 12 2.16zM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63c-.79.3-1.46.72-2.12 1.38C1.35 2.68.94 3.35.63 4.14.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91.3.79.72 1.46 1.38 2.12.66.66 1.33 1.07 2.12 1.38.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.86 5.86 0 0 0 2.12-1.38 5.86 5.86 0 0 0 1.38-2.12c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.86 5.86 0 0 0-1.38-2.12A5.86 5.86 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.4-10.85a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0z",
  },
];

export default function NavOverlay() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(false);
  const links = content.header.nav;

  return (
    <>
      {/* Painel gradiente que redimensiona */}
      <motion.div
        aria-hidden
        className="fixed right-4 top-4 z-[100] rounded-xl shadow-lg shadow-blue-deep/30"
        style={{ background: PANEL_BG }}
        initial={false}
        animate={{
          width: active ? "calc(100% - 32px)" : 80,
          height: active ? "calc(100vh - 32px)" : 80,
        }}
        transition={{
          duration: reduce ? 0 : 0.55,
          ease: EASE,
        }}
      />

      {/* Conteúdo do nav (só monta quando aberto) */}
      <AnimatePresence>
        {active && (
          <motion.nav
            className="fixed right-4 top-4 z-[110] h-[calc(100vh-32px)] w-[calc(100%-32px)] overflow-hidden"
            initial="closed"
            animate="open"
            exit="closed"
          >
            {/* Logo (canto sup. esquerdo) */}
            <motion.a
              href="#top"
              onClick={() => setActive(false)}
              className="grid h-20 w-20 place-content-center rounded-br-xl rounded-tl-xl bg-bg transition-colors hover:bg-bg-2"
              variants={{
                open: { opacity: 1, transition: { delay: 0.2 } },
                closed: { opacity: 0 },
              }}
            >
              <Image
                src="/brand/logobranca.png"
                alt="Solvy"
                width={48}
                height={20}
                className="h-5 w-auto"
              />
            </motion.a>

            {/* Links grandes (stagger) */}
            <motion.div
              className="space-y-3 p-8 pl-4 md:space-y-4 md:p-12 md:pl-20"
              variants={{
                open: {
                  transition: { staggerChildren: 0.08, delayChildren: 0.2 },
                },
                closed: {},
              }}
            >
              {links.map((l) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setActive(false)}
                  className="block text-4xl font-semibold lowercase text-white/60 transition-colors hover:text-white md:text-7xl"
                  variants={{
                    open: { opacity: 1, y: 0 },
                    closed: { opacity: 0, y: 8 },
                  }}
                  transition={{ duration: 0.5, ease: EASE }}
                >
                  {l.label}.
                </motion.a>
              ))}
            </motion.div>

            {/* Socials (canto inf. esquerdo) */}
            <div className="absolute bottom-6 left-6 flex gap-4 md:flex-col">
              {SOCIALS.map((s, i) => (
                <motion.a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  variants={{
                    open: { opacity: 1, transition: { delay: 0.4 + i * 0.08 } },
                    closed: { opacity: 0 },
                  }}
                >
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 text-white transition-colors hover:text-blue-deep"
                    aria-hidden
                  >
                    <path d={s.path} />
                  </svg>
                </motion.a>
              ))}
            </div>

            {/* CTA contato (canto inf. direito) */}
            <motion.a
              href="#contato"
              onClick={() => setActive(false)}
              className="absolute bottom-4 right-4 flex items-center gap-2 rounded-full bg-blue-deep px-5 py-3 text-lg uppercase tracking-wide text-white/90 transition-colors hover:bg-bg hover:text-blue-light md:px-6 md:text-xl"
              variants={{
                open: { opacity: 1, transition: { delay: 0.45 } },
                closed: { opacity: 0 },
              }}
            >
              <span className="hidden md:block">{content.header.cta}</span>
              <span className="md:hidden">Contato</span>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-4 w-4"
                aria-hidden
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </motion.a>
          </motion.nav>
        )}
      </AnimatePresence>

      {/* Botão hambúrguer (sempre por cima) */}
      <button
        onClick={() => setActive((v) => !v)}
        aria-label={active ? "Fechar menu" : "Abrir menu"}
        aria-expanded={active}
        className="group fixed right-4 top-4 z-[120] h-20 w-20 rounded-xl bg-white/0 transition-colors hover:bg-white/10"
      >
        {/* linha superior */}
        <motion.span
          className="absolute left-1/2 block h-1 bg-white"
          animate={
            active
              ? { top: "50%", width: 40, rotate: 45, x: "-50%", y: "-50%" }
              : { top: "35%", width: 40, rotate: 0, x: "-50%", y: "-50%" }
          }
          transition={{ duration: reduce ? 0 : 0.35, ease: EASE }}
        />
        {/* linha do meio */}
        <motion.span
          className="absolute left-1/2 block h-1 bg-white"
          animate={
            active
              ? { top: "50%", width: 40, rotate: -45, x: "-50%", y: "-50%" }
              : { top: "50%", width: 40, rotate: 0, x: "-50%", y: "-50%" }
          }
          transition={{ duration: reduce ? 0 : 0.35, ease: EASE }}
        />
        {/* linha inferior curta */}
        <motion.span
          className="absolute block h-1 bg-white"
          animate={
            active
              ? { bottom: "50%", left: "50%", width: 20, rotate: 45, x: "-50%", y: "50%" }
              : { bottom: "35%", left: "calc(50% + 10px)", width: 20, rotate: 0, x: "-50%", y: "50%" }
          }
          transition={{ duration: reduce ? 0 : 0.35, ease: EASE }}
        />
      </button>
    </>
  );
}
