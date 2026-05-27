/**
 * Presets de Framer Motion compartilhados.
 * Single source of truth pra entrada de elementos no viewport, stagger e
 * reveals editoriais. Mantem ritmo coerente em todas as secoes.
 *
 * REGRAS GERAIS (do design doc):
 *  - Easing power2.out: [0.16, 1, 0.3, 1]
 *  - Duracoes 600ms+ (lenta antes de rapida, sem bounce/spring)
 *  - Stagger generoso: 100-150ms entre filhos
 *  - Animar transform, opacity, filter (blur). NUNCA bg, border, shadow.
 */

import type { Variants, Transition, MotionProps } from "framer-motion";

export const EASE_OUT = [0.16, 1, 0.3, 1] as const;

/** Entrada vertical sutil com clearing de blur. Use em headlines/blocks. */
export const fadeUpIn: MotionProps = {
  initial: { opacity: 0, y: 24, filter: "blur(8px)" },
  whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
  viewport: { once: true, margin: "-100px" },
  transition: { duration: 0.6, ease: EASE_OUT as unknown as number[] },
};

/** Container que faz stagger nos filhos. Use junto com fadeUpIn nos itens. */
export const staggerContainer: MotionProps = {
  initial: "hidden",
  whileInView: "visible",
  viewport: { once: true, margin: "-100px" },
};

/** Variants pra usar como filho de um staggerContainer. */
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 24, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: EASE_OUT as unknown as number[] },
  },
};

/** Reveal mais lento, pra blocos editoriais (Manifesto, interlúdios). */
export const editorialReveal: MotionProps = {
  initial: { opacity: 0, y: 12 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-50px" },
  transition: { duration: 0.8, ease: EASE_OUT as unknown as number[] },
};

/** Transition base pra hovers em cards. */
export const cardHoverTransition: Transition = {
  duration: 0.3,
  ease: "easeOut",
};

/** Helper: gera variants de stagger com delay customizavel. */
export function makeStaggerContainer(
  staggerChildren = 0.1,
  delayChildren = 0
): Variants {
  return {
    hidden: {},
    visible: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  };
}
