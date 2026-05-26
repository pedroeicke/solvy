import { content } from "@/content";
import Reveal from "@/components/motion/Reveal";

export default function ProposalMethodSection() {
  const { proposal } = content;
  return (
    <section className="relative overflow-hidden py-32 md:py-44">
      <div className="mx-auto max-w-4xl px-6 text-center md:px-10">
        <Reveal as="p" className="mb-8 text-xs uppercase tracking-[0.28em] text-blue-light">
          {proposal.label}
        </Reveal>
        <Reveal as="h2" y={50} className="display-tight text-giant text-fg">
          {proposal.title}
        </Reveal>
        <Reveal
          as="p"
          delay={0.12}
          className="mx-auto mt-9 max-w-2xl text-balance text-lead leading-relaxed text-muted"
        >
          {proposal.body}
        </Reveal>
      </div>
    </section>
  );
}
