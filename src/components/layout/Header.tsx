"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { content } from "@/content";
import ShinyButton from "@/components/ui/ShinyButton";
import { cn } from "@/lib/utils";

// ============================================================
// HEADER — TRANSFORMA com o scroll.
//  • TOPO (Hero): barra aberta, full-width, FORA da pill — logo num lado,
//    links no outro (desktop: links + CTA; mobile: links).
//  • AO ROLAR: colapsa numa PILL flutuante e centralizada.
//      - desktop: pill com logo + links + CTA (sem hambúrguer).
//      - mobile:  pill com logo + hambúrguer; o menu abre na LATERAL DIREITA.
//    Na Hero o menu não existe (links já à mostra) — só "abre" depois do scroll.
// ============================================================

const EASE = [0.16, 1, 0.3, 1] as const;

export default function Header() {
  const { nav, cta } = content.header;
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 56);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Escape fecha
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <header className="fixed inset-x-0 top-0 z-50">
        <div
          className={cn(
            "mx-auto flex items-center justify-between transition-all duration-500 ease-out",
            scrolled
              ? "mt-3 w-[calc(100%-1.5rem)] max-w-[920px] rounded-full border border-white/12 bg-bg/70 py-2 pl-6 pr-3 shadow-[0_10px_34px_-12px_rgba(0,0,0,0.7)] backdrop-blur-xl md:mt-4"
              : "mt-0 max-w-[1240px] rounded-none border border-transparent bg-transparent px-6 py-5 md:px-10"
          )}
        >
          {/* LOGO */}
          <a
            href="#top"
            aria-label="Solvy"
            className="flex shrink-0 items-center"
            onClick={() => setOpen(false)}
          >
            <Image
              src="/brand/logobranca.png"
              alt="Solvy"
              width={128}
              height={36}
              priority
              className="h-7 w-auto"
            />
          </a>

          {/* DESKTOP — links sempre visíveis (topo e pill) */}
          <nav className="hidden items-center gap-9 md:flex">
            {nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="whitespace-nowrap text-sm text-fg/80 transition-colors hover:text-fg"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* DESKTOP — CTA sempre visível */}
          <div className="hidden md:block">
            <ShinyButton href="#contato" className="shiny-cta--sm">
              {cta}
            </ShinyButton>
          </div>

          {/* MOBILE: hambúrguer (3 linhas → X) — no topo (barra aberta) e na pill */}
          <button
            type="button"
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="grid h-9 w-9 place-items-center rounded-full text-fg transition hover:bg-white/10 md:hidden"
          >
            <span aria-hidden className="relative block h-3.5 w-5">
              <span
                className={cn(
                  "absolute left-0 block h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-out",
                  open ? "top-1/2 -translate-y-1/2 rotate-45" : "top-0"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 top-1/2 block h-[2px] w-full -translate-y-1/2 rounded-full bg-current transition-opacity duration-200",
                  open ? "opacity-0" : "opacity-100"
                )}
              />
              <span
                className={cn(
                  "absolute left-0 block h-[2px] w-full rounded-full bg-current transition-all duration-300 ease-out",
                  open ? "top-1/2 -translate-y-1/2 -rotate-45" : "bottom-0"
                )}
              />
            </span>
          </button>
        </div>
      </header>

      {/* MENU FULLSCREEN (mobile) — cobre a tela inteira ao tocar nas 3 listras.
          z-40 (abaixo do header z-50), então a logo + X ficam por cima/clicáveis. */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            className="fixed inset-0 z-40 flex flex-col bg-bg/95 backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-1 flex-col justify-center gap-1 px-7">
              {nav.map((l, i) => (
                <motion.a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  initial={{ opacity: 0, y: 18 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.4, ease: EASE }}
                  className="flex items-center justify-between border-b border-line/60 py-5 text-[1.9rem] font-light tracking-tight text-fg"
                >
                  <span>{l.label}</span>
                  <span aria-hidden className="text-base text-blue-light/70">
                    ↗
                  </span>
                </motion.a>
              ))}
            </nav>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.34, duration: 0.4, ease: EASE }}
              className="px-7 pb-12"
            >
              <ShinyButton
                href="#contato"
                className="w-full"
                onClick={() => setOpen(false)}
              >
                {cta}
              </ShinyButton>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
