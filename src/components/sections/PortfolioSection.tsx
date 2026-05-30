import { content } from "@/content";
import Reveal from "@/components/motion/Reveal";
import Skiper35 from "@/components/Skiper35";

// ============================================================
// PORTFOLIO — "O que já fizemos". Cabeçalho + galeria hover-expand
// (componente Skiper35, alimentado por content.portfolio.items).
// ============================================================

export default function PortfolioSection() {
  const { portfolio } = content;

  return (
    <section
      id="portfolio"
      aria-labelledby="portfolio-headline"
      className="relative overflow-hidden bg-bg py-24 md:py-40"
    >
      {/* Aurora glow sutil */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(900px 600px at 80% 20%, rgba(0,167,244,0.08), transparent 60%)",
        }}
      />

      {/* HEADER — centralizado, sem subtítulo ("o trabalho fala por si") */}
      <div className="relative mx-auto w-full max-w-[1240px] px-6 text-center md:px-10">
        <p className="text-xs font-medium uppercase tracking-[0.28em] text-blue-light">
          {portfolio.label}
        </p>
        <Reveal y={30}>
          <h2
            id="portfolio-headline"
            className="display-tight mt-5 text-giant text-fg"
          >
            {portfolio.title}
          </h2>
        </Reveal>
      </div>

      {/* GALERIA — Skiper35 (hover expand), PONTA A PONTA (full-bleed) */}
      <div className="relative mt-16 w-full">
        <Skiper35 />
      </div>
    </section>
  );
}
