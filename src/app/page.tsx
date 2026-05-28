import Hero from "@/components/sections/Hero";
import ThesisSection from "@/components/sections/ThesisSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProofSection from "@/components/sections/ProofSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import FoundersSection from "@/components/sections/FoundersSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ProposalMethodSection from "@/components/sections/ProposalMethodSection";
import FinalCTA from "@/components/sections/FinalCTA";

// Removidos do fluxo (redundância de argumento): MetodoHorizontal, ProjectTypes.
// Arquivos preservados em src/components/sections/ pra reavaliação.

export default function Home() {
  return (
    <>
      {/* 1 — abertura */}
      <Hero />

      {/* 2 — a virada conceitual */}
      <ThesisSection />

      {/* 3 — o que construímos */}
      <ServicesSection />

      {/* 4 — prova */}
      <ProofSection />

      {/* 5 — como trabalhamos */}
      <ProcessSection />

      {/* 6 — projetos */}
      <PortfolioSection />

      {/* 7 — sócios = redução de risco */}
      <FoundersSection />

      {/* 8 — por que sob medida (selo final do argumento) */}
      <ComparisonSection />

      {/* 9 — método de proposta (perto do fechamento) */}
      <ProposalMethodSection />

      {/* 10 — fechamento */}
      <FinalCTA />
    </>
  );
}
