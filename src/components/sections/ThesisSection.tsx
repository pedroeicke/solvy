import { content } from "@/content";
import Reveal from "@/components/motion/Reveal";

// ============================================================
// THESIS / "Nosso movimento" — manifesto centralizado: laurels (ramos de
// louro em SVG) flanqueando o tagline + linha de números do Solvy embaixo.
// Tema dark Solvy; fundo = vídeo movimentbg.mp4. EncaixeMotif preservado
// no projeto (não usado aqui).
// ============================================================

const GRAD_TEXT = {
  backgroundImage: "linear-gradient(90deg, #027ee2 0%, #00a7f4 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
} as const;

// Ramo de louro (public/royalty.svg). O SVG tem fill escuro fixo, então uso
// CSS mask pra recolorir com a cor do tema (bg-current). `flip` espelha pra
// usar o mesmo ramo no lado direito.
export default function ThesisSection() {
  const { thesis } = content;
  const [before, after] = thesis.title.split(thesis.highlight);

  return (
    // z-10 + margem negativa (--overlap): a seção "sobe" e SOBREPÕE o Hero
    // (pinado) ao rolar — efeito de cortina sobre o vídeo.
    <section
      id="virada"
      aria-labelledby="virada-title"
      className="relative z-10 mt-[calc(var(--overlap)*-1)] overflow-hidden bg-bg py-24 md:py-36 [--overlap:0vh] md:[--overlap:90vh]"
    >
      {/* glow sutil de fundo */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 h-[520px] w-[920px] -translate-x-1/2 rounded-full opacity-[0.16] blur-[160px]"
        style={{
          background:
            "radial-gradient(closest-side, rgba(0,167,244,0.5), transparent)",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 md:px-10">
        {/* eyebrow */}
        <Reveal
          as="p"
          className="text-center text-xs uppercase tracking-[0.28em] text-blue-light"
        >
          {thesis.label}
        </Reveal>

        {/* laurels flanqueando o tagline central */}
        <Reveal y={36} className="mt-10">
          <div className="flex items-center justify-center gap-5 md:gap-9">
            <span
              aria-hidden
              className="inline-block shrink-0 select-none text-6xl font-light leading-none text-blue-light/55 md:text-8xl"
              style={{ transform: "translateY(-12px) scaleY(1.3)" }}
            >
              {"<"}
            </span>
            <h2
              id="virada-title"
              className="max-w-2xl text-center text-[clamp(1.5rem,3.2vw,2.75rem)] font-light leading-[1.15] tracking-[-0.01em] text-fg"
            >
              {before}
              <span style={GRAD_TEXT}>{thesis.highlight}</span>
              {after}
            </h2>
            <span
              aria-hidden
              className="inline-block shrink-0 select-none text-6xl font-light leading-none text-blue-light/55 md:text-8xl"
              style={{ transform: "translateY(-12px) scaleY(1.3)" }}
            >
              {">"}
            </span>
          </div>
        </Reveal>

        {/* body curto, centralizado */}
        <Reveal delay={0.12}>
          <p className="mx-auto mt-8 max-w-2xl text-center text-lead leading-relaxed text-muted">
            {thesis.body}
          </p>
        </Reveal>

        {/* números do Solvy em linha */}
        <div className="mt-16 flex flex-wrap items-start justify-center gap-x-16 gap-y-10 md:mt-20 md:gap-x-24">
          {thesis.stats.map((s, i) => (
            <Reveal key={s.label} delay={0.1 + i * 0.08}>
              <div className="text-center">
                <div className="text-5xl font-light tracking-tight text-fg md:text-6xl">
                  {s.value}
                </div>
                <div className="mt-3 text-xs uppercase tracking-[0.22em] text-muted">
                  {s.label}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
