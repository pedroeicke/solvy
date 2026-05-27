"use client";

import { motion, useReducedMotion } from "framer-motion";
import { content } from "@/content";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import DisplayHeading from "@/components/ui/DisplayHeading";
import EditorialQuote from "@/components/ui/EditorialQuote";
import AuroraBackground from "@/components/ui/AuroraBackground";
import { EASE_OUT } from "@/lib/animations";

// ============================================================
// SOCIOS — Pedro + Neto com fotos editoriais 4:5.
// Placeholders pras fotos enquanto a IA nao gera (mostra gradiente
// + iniciais). Quando colar /team/pedro.jpg e /team/neto.jpg, a img
// carrega e cobre o placeholder.
// ============================================================

export default function Socios() {
  const reduce = useReducedMotion();
  const s = content.socios;

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24, filter: "blur(8px)" },
          whileInView: { opacity: 1, y: 0, filter: "blur(0px)" },
          viewport: { once: true, margin: "-80px" },
          transition: {
            duration: 0.7,
            delay,
            ease: EASE_OUT as unknown as number[],
          },
        };

  return (
    <section
      id="socios"
      aria-labelledby="socios-headline"
      className="relative overflow-hidden bg-bg py-32 md:py-48"
    >
      <AuroraBackground variant="subtle" />

      <Container className="relative">
        <Eyebrow>{s.eyebrow}</Eyebrow>

        <motion.div {...fade(0)} className="mt-4 max-w-4xl">
          <DisplayHeading id="socios-headline" as="h2" size="display">
            {s.headline}
          </DisplayHeading>
        </motion.div>

        <motion.div {...fade(0.15)} className="mt-8 max-w-2xl">
          <EditorialQuote>{s.editorial}</EditorialQuote>
        </motion.div>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          {s.pessoas.map((p, i) => (
            <motion.article
              key={p.nome}
              {...fade(0.25 + i * 0.1)}
              className="group overflow-hidden rounded-xl border border-faint/20 bg-bg-2/30"
            >
              {/* Foto 4:5 */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-bg-2">
                {/* placeholder visual */}
                <div
                  aria-hidden
                  className="absolute inset-0 grid place-items-center text-faint/30"
                  style={{
                    background:
                      "radial-gradient(70% 70% at 60% 30%, rgba(0,167,244,0.18), transparent 70%), radial-gradient(60% 60% at 30% 70%, rgba(2,126,226,0.12), transparent 70%), #0a0c12",
                  }}
                >
                  <span className="text-7xl font-medium">
                    {p.nome.charAt(0)}
                  </span>
                </div>
                {/* foto real (sobrepoe se existir) */}
                <img
                  src={p.foto}
                  alt={`${p.nome} — ${p.cargo}`}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display =
                      "none";
                  }}
                />
              </div>

              {/* Texto */}
              <div className="p-8">
                <h3 className="font-display text-2xl font-medium text-fg md:text-3xl">
                  {p.nome}
                </h3>
                <p className="mt-1 text-base text-muted">{p.cargo}</p>
                <p className="mt-6 text-sm leading-relaxed text-fg/80">
                  {p.bio}
                </p>
                <a
                  href={p.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] text-blue-light transition-opacity hover:opacity-80"
                >
                  LinkedIn
                  <span aria-hidden>↗</span>
                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </Container>
    </section>
  );
}
