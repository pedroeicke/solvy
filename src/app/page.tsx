import Hero from "@/components/sections/HeroRoot";
import ThesisSection from "@/components/sections/ThesisSection";
import ServicesSection from "@/components/sections/ServicesSection";
import MetodoHorizontal from "@/components/sections/MetodoHorizontal";
import ProcessSection from "@/components/sections/ProcessSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ProofSection from "@/components/sections/ProofSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import FoundersSection from "@/components/sections/FoundersSection";
import FinalCTA from "@/components/sections/FinalCTA";

// Removidos do fluxo (redundância de argumento): ProjectTypesSection,
// ProposalMethodSection, ComparisonSection. Arquivos preservados em
// src/components/sections/.

export default function Home() {
  return (
    <>
      {/* 1 — abertura */}
      <Hero />

      {/* 2 — a virada conceitual (cortina sobe sobre o Hero pinado: precisa
          vir LOGO depois do Hero) */}
      <ThesisSection />

      {/* 3 — o que construímos (o "o quê" concreto, logo após a tese) */}
      <ServicesSection />

      {/* 4 — como a Solvy trabalha: princípios... */}
      <MetodoHorizontal />

      {/* 5 — ...e o passo a passo (mesmo tema "como", agora juntos) */}
      <ProcessSection />

      {/* 6 — bloco de PROVA: portfólio... */}
      <PortfolioSection />

      {/* 7 — ...números... */}
      <ProofSection />

      {/* 8 — ...e quem confia (logos) */}
      <TrustedBySection />

      {/* 9 — sócios = redução de risco */}
      <FoundersSection />

      {/* 10 — fechamento */}
      <FinalCTA />
    </>
  );
}
