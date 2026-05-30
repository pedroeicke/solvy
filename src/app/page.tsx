import Hero from "@/components/sections/Hero";
import ThesisSection from "@/components/sections/ThesisSection";
import MetodoHorizontal from "@/components/sections/MetodoHorizontal";
import ServicesSection from "@/components/sections/ServicesSection";
import ProofSection from "@/components/sections/ProofSection";
import TrustedBySection from "@/components/sections/TrustedBySection";
import ProcessSection from "@/components/sections/ProcessSection";
import FoundersSection from "@/components/sections/FoundersSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import FinalCTA from "@/components/sections/FinalCTA";

// Removidos do fluxo (redundância de argumento): ProjectTypesSection,
// ProposalMethodSection, ComparisonSection. Arquivos preservados em
// src/components/sections/.

export default function Home() {
  return (
    <>
      {/* 1 — abertura */}
      <Hero />

      {/* 2 — a virada conceitual */}
      <ThesisSection />

      {/* 3 — princípios de como trabalhamos (redução de risco + motion) */}
      <MetodoHorizontal />

      {/* 4 — o que construímos */}
      <ServicesSection />

      {/* 5 — prova (Solvy em números + feedbacks na mesma seção) */}
      <ProofSection />

      {/* 6 — quem confia (faixa de logos) */}
      <TrustedBySection />

      {/* 7 — como trabalhamos */}
      <ProcessSection />

      {/* 7 — projetos */}
      <PortfolioSection />

      {/* 8 — sócios = redução de risco */}
      <FoundersSection />

      {/* 9 — fechamento */}
      <FinalCTA />
    </>
  );
}
