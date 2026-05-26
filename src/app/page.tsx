import Hero from "@/components/sections/Hero";
import ProblemSection from "@/components/sections/ProblemSection";
import ThesisSection from "@/components/sections/ThesisSection";
import ServicesSection from "@/components/sections/ServicesSection";
import ProcessSection from "@/components/sections/ProcessSection";
import ComparisonSection from "@/components/sections/ComparisonSection";
import FoundersSection from "@/components/sections/FoundersSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ProjectTypesSection from "@/components/sections/ProjectTypesSection";
import ProposalMethodSection from "@/components/sections/ProposalMethodSection";
import FinalCTA from "@/components/sections/FinalCTA";

export default function Home() {
  return (
    <>
      <Hero />
      <ProblemSection />
      <ThesisSection />
      <ServicesSection />
      <ProcessSection />
      <ComparisonSection />
      <FoundersSection />
      <PortfolioSection />
      <ProjectTypesSection />
      <ProposalMethodSection />
      <FinalCTA />
    </>
  );
}
