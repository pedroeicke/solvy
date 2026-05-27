"use client";

import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/content";
import Container from "@/components/ui/Container";
import EditorialQuote from "@/components/ui/EditorialQuote";
import HairlineDivider from "@/components/ui/HairlineDivider";
import AuroraBackground from "@/components/ui/AuroraBackground";
import { EASE_OUT } from "@/lib/animations";

// ============================================================
// MANIFESTO — pausa cinematografica 100vh logo apos o Hero.
// Frase em 2 linhas + hairline + subhead em Newsreader italic.
// "Você não deve se adaptar ao software." (muted, menor)
// "O software deve se adaptar a você." (mega, fg, "você" em azul)
// ============================================================

export default function Manifesto() {
  const reduce = useReducedMotion();
  const m = content.manifesto;

  // Aplica destaque "você" → <span text-blue>. Procura no headline.
  const renderHeadline = () => {
    const re = new RegExp(`\\b${m.highlight}\\b`, "i");
    const match = m.headline.match(re);
    if (!match || match.index === undefined)
      return <>{m.headline}</>;
    const before = m.headline.slice(0, match.index);
    const word = m.headline.slice(match.index, match.index + match[0].length);
    const after = m.headline.slice(match.index + match[0].length);
    return (
      <>
        {before}
        <motion.span
          className="text-blue"
          animate={
            reduce
              ? undefined
              : { opacity: [0.85, 1, 0.85] }
          }
          transition={
            reduce
              ? undefined
              : {
                  duration: 3,
                  ease: "easeInOut",
                  repeat: Infinity,
                }
          }
        >
          {word}
        </motion.span>
        {after}
      </>
    );
  };

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24, filter: "blur(8px)" },
          whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
          viewport: { once: true, margin: "-80px" },
          transition: { duration: 0.8, delay, ease: EASE_OUT as unknown as number[] },
        };

  return (
    <section
      id="manifesto"
      aria-labelledby="manifesto-headline"
      className="relative flex min-h-screen items-center overflow-hidden bg-bg"
    >
      <AuroraBackground variant="subtle" />

      <Container className="relative py-32">
        {/* preface — menor, muted */}
        <motion.p
          {...fade(0)}
          className="text-[clamp(1.5rem,3.4vw,3.25rem)] font-medium leading-[1.15] text-muted"
        >
          {m.preface}
        </motion.p>

        {/* headline — mega, fg, "você" em azul + pulse */}
        <motion.h2
          id="manifesto-headline"
          {...fade(0.2)}
          className="mt-6 max-w-[18ch] text-[clamp(2.75rem,7.5vw,7.5rem)] font-semibold leading-[1.02] tracking-[-0.025em] text-fg"
        >
          {renderHeadline()}
        </motion.h2>

        {/* hairline desenhando do centro pra fora */}
        <motion.div
          initial={reduce ? false : { scaleX: 0, opacity: 0 }}
          whileInView={reduce ? undefined : { scaleX: 1, opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.5, ease: EASE_OUT as unknown as number[] }}
          className="mt-14 origin-center"
          style={{ transformOrigin: "left center" }}
        >
          <HairlineDivider className="w-16" />
        </motion.div>

        {/* subhead — Newsreader italic, muted */}
        <motion.div {...fade(0.6)} className="mt-10 max-w-xl">
          <EditorialQuote size="large" className="!text-muted">
            {m.subhead}
          </EditorialQuote>
        </motion.div>
      </Container>
    </section>
  );
}
