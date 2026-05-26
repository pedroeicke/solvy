import { content } from "@/content";
import Reveal from "@/components/motion/Reveal";

export default function FoundersSection() {
  const { founders } = content;
  return (
    <section id="socios" className="relative overflow-hidden py-32 md:py-48">
      <div className="mx-auto grid max-w-[1240px] gap-16 px-6 md:grid-cols-[1fr_1fr] md:gap-24 md:px-10">
        <div>
          <Reveal as="p" className="mb-8 text-xs uppercase tracking-[0.28em] text-blue-light">
            {founders.label}
          </Reveal>
          <Reveal as="h2" y={50} className="display-tight text-giant text-fg">
            {founders.title}
          </Reveal>
          <Reveal as="p" delay={0.1} className="mt-9 max-w-md text-lead leading-relaxed text-muted">
            {founders.body}
          </Reveal>
        </div>

        <div className="flex flex-col gap-5">
          {founders.people.map((p, i) => (
            <Reveal
              key={p.name}
              delay={i * 0.12}
              className="flex items-start gap-6 rounded-2xl border border-line bg-bg-2 p-8 transition-colors duration-500 hover:border-blue/35"
            >
              <span className="grid h-16 w-16 shrink-0 place-items-center rounded-2xl border border-blue/30 bg-blue/10 font-display text-2xl font-medium text-blue-light">
                {p.name[0]}
              </span>
              <div>
                <h3 className="font-display text-2xl font-medium tracking-tight">
                  {p.name}
                </h3>
                <p className="mt-1 text-sm text-blue-light">{p.role}</p>
                <p className="mt-3 text-sm leading-relaxed text-muted">{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
