import TestimonialsBlock from "@/components/sections/TestimonialsSection";

// ============================================================
// PROOF — agora só os DEPOIMENTOS ("O que dizem"): iPhone + marquees.
// Os números ("Solvy em números") foram removidos a pedido.
// ============================================================

export default function ProofSection() {
  return (
    <section
      id="prova"
      aria-label="Depoimentos"
      className="relative isolate overflow-hidden bg-bg py-20 md:py-24"
    >
      {/* Imagem de fundo da seção + overlay. */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-60"
          style={{ backgroundImage: "url('/fundodep.png')" }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-bg via-bg/55 to-bg" />
      </div>

      <TestimonialsBlock />
    </section>
  );
}
