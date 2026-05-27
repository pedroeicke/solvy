"use client";

import { motion, useReducedMotion } from "framer-motion";
import EditorialQuote from "@/components/ui/EditorialQuote";
import AuroraBackground from "@/components/ui/AuroraBackground";
import { EASE_OUT } from "@/lib/animations";

// ============================================================
// INTERLUDE — pausa fotografica 80vh.
// Foto editorial full-bleed + quote em Newsreader italic centralizado.
// Componente generico: passa image, quote, alt.
//
// PLACEHOLDER MODE: se a imagem nao existe (ex: /photos/interlude-1.jpg
// ainda nao foi gerada), renderiza um gradiente escuro + label discreto
// "[FOTO EDITORIAL]" no canto. Pra trocar pra foto real, basta colocar
// o arquivo no /public.
// ============================================================

type Props = {
  image: string;
  imageAlt: string;
  quote: string;
  attribution?: string;
  side?: "left" | "right" | "center"; // posicao do texto sobre a foto
};

export default function Interlude({
  image,
  imageAlt,
  quote,
  attribution,
  side = "center",
}: Props) {
  const reduce = useReducedMotion();

  const sideClass =
    side === "left"
      ? "items-start text-left"
      : side === "right"
      ? "items-end text-right"
      : "items-center text-center";

  return (
    <section
      aria-label={imageAlt}
      className="relative flex h-[80vh] min-h-[560px] overflow-hidden bg-bg"
    >
      <AuroraBackground variant="editorial" />

      {/* Imagem: usamos <img> com onError pra cair pro placeholder se 404 */}
      <motion.img
        src={image}
        alt={imageAlt}
        initial={reduce ? false : { opacity: 0, scale: 1.04 }}
        whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 1.2, ease: EASE_OUT as unknown as number[] }}
        className="absolute inset-0 h-full w-full object-cover"
        loading="lazy"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />

      {/* fade preto nas bordas pra suportar texto sobreposto */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(3,3,5,0.6) 0%, rgba(3,3,5,0.2) 30%, rgba(3,3,5,0.2) 70%, rgba(3,3,5,0.8) 100%), linear-gradient(90deg, rgba(3,3,5,0.5) 0%, rgba(3,3,5,0) 30%, rgba(3,3,5,0) 70%, rgba(3,3,5,0.5) 100%)",
        }}
      />

      {/* Quote centralizado */}
      <div
        className={`relative z-10 mx-auto flex w-full max-w-4xl flex-col justify-center px-6 ${sideClass}`}
      >
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 12 }}
          whileInView={reduce ? undefined : { opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{
            duration: 0.9,
            delay: 0.3,
            ease: EASE_OUT as unknown as number[],
          }}
        >
          <EditorialQuote size="large">{quote}</EditorialQuote>
          {attribution && (
            <p className="mt-6 text-xs uppercase tracking-[0.18em] text-muted">
              {attribution}
            </p>
          )}
        </motion.div>
      </div>

      {/* Marcador discreto pra desenvolvimento - some quando a img carrega */}
      <span
        aria-hidden
        className="pointer-events-none absolute bottom-4 left-4 z-20 select-none rounded px-2 py-1 text-[10px] uppercase tracking-widest text-faint/60"
      >
        [foto editorial]
      </span>
    </section>
  );
}
