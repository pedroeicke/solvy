import { content } from "@/content";
import Reveal from "@/components/motion/Reveal";

// ============================================================
// COMPARISON — "Por que sob medida". Versão EDITORIAL: cortamos a
// tabela genérico×sob-medida (abstração + redundância — a seção de
// serviços já MOSTRA isso). Sobrou a tese + o quiasmo, que é a tese do
// site inteiro: "a operação trabalha pro sistema ↔ o sistema trabalha
// pra você". Linha genérica apagada (muted), linha sob-medida acesa (fg).
// ============================================================

export default function ComparisonSection() {
  const { comparison } = content;
  return (
    <section
      id="comparacao"
      className="relative overflow-hidden bg-bg-2 py-28 md:py-40"
    >
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <Reveal
          as="p"
          className="mb-8 text-xs uppercase tracking-[0.28em] text-blue-light"
        >
          {comparison.label}
        </Reveal>
        <Reveal
          as="h2"
          y={50}
          className="display-tight max-w-4xl text-giant text-fg"
        >
          {comparison.title}
        </Reveal>

        {/* quiasmo — clímax do argumento. Estrutura paralela + contraste de
            cor (apagado → aceso) faz o espelho "operação↔sistema" pousar. */}
        <div className="mt-14 max-w-3xl md:mt-20">
          <Reveal
            as="p"
            delay={0.1}
            className="display-tight text-2xl leading-[1.35] tracking-tight text-muted md:text-[2rem]"
          >
            {comparison.generic}
          </Reveal>
          <Reveal
            as="p"
            delay={0.18}
            className="display-tight mt-3 text-2xl leading-[1.35] tracking-tight text-fg md:text-[2rem]"
          >
            {comparison.custom}
          </Reveal>
        </div>
      </div>
    </section>
  );
}
