"use client";

import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/content";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import EditorialQuote from "@/components/ui/EditorialQuote";
import HairlineDivider from "@/components/ui/HairlineDivider";
import MetadataLabel from "@/components/ui/MetadataLabel";
import AuroraBackground from "@/components/ui/AuroraBackground";
import { EASE_OUT } from "@/lib/animations";

// ============================================================
// STACK — principios + tecnologias em TEXTO (nao logos coloridos).
// ============================================================

export default function Stack() {
  const reduce = useReducedMotion();
  const s = content.stack;

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
      id="stack"
      aria-labelledby="stack-headline"
      className="relative overflow-hidden bg-bg py-32 md:py-48"
    >
      <AuroraBackground variant="subtle" />

      <Container className="relative">
        <Eyebrow>{s.eyebrow}</Eyebrow>

        <div className="mt-12 grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
          {/* PRINCIPIOS */}
          <motion.div {...fade(0)}>
            <MetadataLabel>Princípios</MetadataLabel>
            <ul id="stack-headline" className="mt-8 space-y-6">
              {s.principios.map((p) => (
                <li
                  key={p}
                  className="font-display text-2xl font-medium leading-tight text-fg md:text-3xl"
                >
                  {p}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* TECNOLOGIAS */}
          <motion.div {...fade(0.15)}>
            <MetadataLabel>Construído com</MetadataLabel>
            <ul className="mt-8 space-y-3">
              {s.tecnologias.map((t) => (
                <li
                  key={t}
                  className="text-sm uppercase tracking-[0.16em] text-fg/90"
                >
                  {t}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <HairlineDivider className="mt-20 mx-auto w-24" />

        <motion.div
          {...fade(0.3)}
          className="mt-12 text-center"
        >
          <EditorialQuote size="large" className="mx-auto max-w-2xl">
            {s.closing}
          </EditorialQuote>
        </motion.div>
      </Container>
    </section>
  );
}
