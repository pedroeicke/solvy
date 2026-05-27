import Hero from "@/components/sections/Hero";
import Manifesto from "@/components/sections/Manifesto";
import Method from "@/components/sections/Method";
import Interlude from "@/components/sections/Interlude";
import Construimos from "@/components/sections/Construimos";
import Cases from "@/components/sections/Cases";
import Processo from "@/components/sections/Processo";
import Socios from "@/components/sections/Socios";
import Stack from "@/components/sections/Stack";
import FinalCTA from "@/components/sections/FinalCTA";
import { content } from "@/content";

// ============================================================
// PAGE — 6 atos narrativos.
// Ato 1: Apresentacao  → Hero + Manifesto
// Ato 2: Metodo        → Method + Interlude #1
// Ato 3: Escopo        → Construimos + Cases
// Ato 4: Processo      → Processo
// Ato 5: Confianca     → Socios + Interlude #2
// Ato 6: Fechamento    → Stack + FinalCTA
// ============================================================

export default function Home() {
  const i1 = content.interludio1;
  const i2 = content.interludio2;

  return (
    <>
      {/* ATO 1 — APRESENTAÇÃO */}
      <Hero />
      <Manifesto />

      {/* ATO 2 — MÉTODO */}
      <Method />
      <Interlude
        image={i1.image}
        imageAlt={i1.imageAlt}
        quote={i1.quote}
        attribution={i1.attribution}
      />

      {/* ATO 3 — ESCOPO */}
      <Construimos />
      <Cases />

      {/* ATO 4 — PROCESSO */}
      <Processo />

      {/* ATO 5 — CONFIANÇA */}
      <Socios />
      <Interlude
        image={i2.image}
        imageAlt={i2.imageAlt}
        quote={i2.quote}
      />

      {/* ATO 6 — FECHAMENTO */}
      <Stack />
      <FinalCTA />
    </>
  );
}
