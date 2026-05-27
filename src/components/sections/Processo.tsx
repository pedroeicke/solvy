"use client";

import { useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import { content } from "@/content";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import DisplayHeading from "@/components/ui/DisplayHeading";
import EditorialQuote from "@/components/ui/EditorialQuote";
import MetadataLabel from "@/components/ui/MetadataLabel";
import AuroraBackground from "@/components/ui/AuroraBackground";
import { EASE_OUT } from "@/lib/animations";

// ============================================================
// PROCESSO — timeline com 6 etapas.
// Desktop: timeline horizontal com beam azul percorrendo conforme scroll.
// Mobile : timeline vertical.
// Sustentacao (06) marcada como opcional (linha pontilhada).
// ============================================================

export default function Processo() {
  const reduce = useReducedMotion();
  const p = content.processo;
  const beamRef = useRef<SVGRectElement>(null);
  const sectionRef = useRef<HTMLElement>(null);

  // Beam horizontal cresce com scroll (so desktop)
  useGSAP(
    () => {
      if (!beamRef.current || !sectionRef.current) return;
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.to(beamRef.current, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom 80%",
            scrub: 0.5,
          },
        });
        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });
      return () => mm.revert();
    },
    { scope: sectionRef }
  );

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: {
            duration: 0.6,
            delay,
            ease: EASE_OUT as unknown as number[],
          },
        };

  return (
    <section
      ref={sectionRef}
      id="processo"
      aria-labelledby="processo-headline"
      className="relative overflow-hidden bg-bg py-32 md:py-48"
    >
      <AuroraBackground variant="subtle" />

      <Container className="relative">
        <Eyebrow>{p.eyebrow}</Eyebrow>

        <motion.div {...fade(0)} className="mt-4 max-w-4xl">
          <DisplayHeading id="processo-headline" as="h2" size="display">
            {p.headline}
          </DisplayHeading>
        </motion.div>

        {/* DESKTOP — timeline horizontal */}
        <div className="mt-20 hidden md:block">
          <div className="relative">
            {/* trilho cinza (background) */}
            <div
              aria-hidden
              className="absolute left-0 right-0 top-8 h-px bg-faint/30"
            />
            {/* beam azul que cresce com scroll */}
            <svg
              aria-hidden
              className="pointer-events-none absolute left-0 right-0 top-8 h-px w-full"
              preserveAspectRatio="none"
            >
              <rect
                ref={beamRef}
                x="0"
                y="0"
                width="100%"
                height="1"
                fill="#00a7f4"
                style={{ transformOrigin: "left center", transform: "scaleX(0)" }}
              />
            </svg>

            {/* 6 etapas */}
            <ol className="relative grid grid-cols-6 gap-4">
              {p.etapas.map((e, i) => (
                <motion.li
                  key={e.numero}
                  {...fade(0.1 + i * 0.08)}
                  className="flex flex-col items-center text-center"
                >
                  {/* circulo numerado */}
                  <div
                    className={[
                      "relative grid h-16 w-16 place-items-center rounded-full border-2 bg-bg",
                      e.opcional
                        ? "border-faint/40 border-dashed"
                        : "border-blue-light/60",
                    ].join(" ")}
                    style={{
                      boxShadow: e.opcional
                        ? "none"
                        : "0 0 24px -8px rgba(0,167,244,0.5)",
                    }}
                  >
                    <span className="font-display text-lg font-medium text-blue-light">
                      {e.numero}
                    </span>
                  </div>

                  <h3 className="mt-6 font-display text-lg font-medium leading-tight text-fg">
                    {e.titulo}
                  </h3>
                  <MetadataLabel className="mt-2 block">
                    {e.duracao}
                  </MetadataLabel>
                  <p className="mt-4 text-xs leading-relaxed text-muted">
                    {e.descricao}
                  </p>
                </motion.li>
              ))}
            </ol>
          </div>
        </div>

        {/* MOBILE — timeline vertical */}
        <ol className="mt-16 space-y-12 md:hidden">
          {p.etapas.map((e, i) => (
            <motion.li
              key={e.numero}
              {...fade(0.05 + i * 0.06)}
              className="relative flex gap-6"
            >
              {/* trilho vertical */}
              {i < p.etapas.length - 1 && (
                <div
                  aria-hidden
                  className={`absolute left-8 top-16 bottom-[-3rem] w-px ${
                    e.opcional ? "bg-faint/20" : "bg-blue-light/40"
                  }`}
                />
              )}
              {/* circulo */}
              <div
                className={[
                  "relative z-10 grid h-16 w-16 shrink-0 place-items-center rounded-full border-2 bg-bg",
                  e.opcional
                    ? "border-faint/40 border-dashed"
                    : "border-blue-light/60",
                ].join(" ")}
              >
                <span className="font-display text-lg font-medium text-blue-light">
                  {e.numero}
                </span>
              </div>
              <div className="flex-1 pt-1">
                <h3 className="font-display text-xl font-medium text-fg">
                  {e.titulo}
                </h3>
                <MetadataLabel className="mt-1 block">
                  {e.duracao}
                </MetadataLabel>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {e.descricao}
                </p>
              </div>
            </motion.li>
          ))}
        </ol>

        {/* closing editorial */}
        <motion.div {...fade(0.2)} className="mt-20 max-w-2xl">
          <EditorialQuote>{p.closing}</EditorialQuote>
        </motion.div>
      </Container>
    </section>
  );
}
