import type { CSSProperties } from "react";
import { content } from "@/content";
import Reveal from "@/components/motion/Reveal";
import GlowCard from "@/components/ui/GlowCard";

// ============================================================
// TESTIMONIALS / "O que dizem" — portado do PS26 (Pregoeiros Summit):
// iPhone mockup central (tela em gradiente azul) + 2 marquees de cards
// passando POR CIMA do phone (animate-scroll-left/right em globals.css).
// Cores adaptadas ao Solvy (blue/blue-light); conteúdo = clientes Solvy.
// Renderizado como bloco no topo da ProofSection ("Solvy em números").
// ============================================================

type Item = { quote: string; name: string; role: string };

// Iniciais a partir do nome (até 2 palavras): "Werson A." -> "WA".
const initials = (name: string) =>
  name
    .split(/\s+/)
    .slice(0, 2)
    .map((w) => w[0]?.toUpperCase() ?? "")
    .join("");

// Gradiente da "tela" do iPhone (mesmo azul vivo dos cards de números).
const PHONE_SCREEN_BG =
  "linear-gradient(155deg, #124ba3 0%, #1FA9FF 50%, #5BC0FF 100%)";

// Card pequeno (passa por cima do phone nas marquees).
function TestimonialCard({ name, role, quote }: Item) {
  return (
    <GlowCard className="flex h-[180px] w-[300px] shrink-0 flex-col gap-3 rounded-2xl border border-white/20 bg-white/[0.1] p-4 backdrop-blur-xl sm:w-[360px] sm:p-5">
      <div className="flex items-center gap-3">
        <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full bg-blue/40 text-sm font-bold text-white ring-1 ring-blue-light/50">
          {initials(name)}
        </span>
        <span className="min-w-0">
          <span className="block truncate text-[15px] font-semibold text-white">
            {name}
          </span>
          <span className="block truncate text-xs text-white/70">{role}</span>
        </span>
      </div>
      <blockquote className="line-clamp-4 text-sm leading-relaxed text-white/90">
        “{quote}”
      </blockquote>
    </GlowCard>
  );
}

function MarqueeRow({
  items,
  direction,
  duration,
}: {
  items: readonly Item[];
  direction: "left" | "right";
  duration: number;
}) {
  // Track duplicado pro loop costurar sem salto (translateX -50%).
  const doubled = [...items, ...items];
  return (
    <div className="relative w-full overflow-hidden">
      <div
        className={`flex w-max items-center gap-5 will-change-transform ${
          direction === "left" ? "animate-scroll-left" : "animate-scroll-right"
        }`}
        style={{ ["--duration" as string]: `${duration}s` } as CSSProperties}
      >
        {doubled.map((t, i) => (
          <TestimonialCard key={`${t.name}-${i}`} {...t} />
        ))}
      </div>
    </div>
  );
}

// iPhone mockup — tela com badge + título + subtítulo (sobre os clientes Solvy).
function PhoneMockup() {
  return (
    <div className="relative mx-auto h-[640px] w-[300px] sm:h-[740px] sm:w-[360px] md:h-[820px] md:w-[400px]">
      {/* Corpo do phone */}
      <div className="relative h-full w-full rounded-[72px] border-[10px] border-[#0a0a22] bg-[#0a0a22]">
        {/* Tela */}
        <div
          className="relative h-full w-full overflow-hidden rounded-[60px] px-7 pt-16"
          style={{ background: PHONE_SCREEN_BG }}
        >
          {/* Dynamic Island */}
          <div
            aria-hidden
            className="absolute left-1/2 top-4 z-20 h-8 w-32 -translate-x-1/2 rounded-full bg-black"
          />

          {/* Conteúdo da tela: badge + título + subtítulo */}
          <div className="relative z-10 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3.5 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-white">
                Depoimentos
              </span>
            </div>

            <h3 className="mt-8 text-[28px] font-extrabold leading-[1.05] text-white">
              O QUE OS CLIENTES
              <br />
              DIZEM DA SOLVY
            </h3>
            <p className="mt-3 text-[13px] text-white/85">
              Relatos de quem já construiu com a gente
            </p>
          </div>

          {/* Home indicator */}
          <div
            aria-hidden
            className="absolute bottom-3 left-1/2 z-20 h-1.5 w-28 -translate-x-1/2 rounded-full bg-white/35"
          />
        </div>
      </div>

      {/* Botões físicos laterais */}
      <span
        aria-hidden
        className="absolute -left-[3px] top-[150px] h-14 w-[3px] rounded-l-sm bg-[#1a1a3a]"
      />
      <span
        aria-hidden
        className="absolute -left-[3px] top-[220px] h-24 w-[3px] rounded-l-sm bg-[#1a1a3a]"
      />
      <span
        aria-hidden
        className="absolute -right-[3px] top-[180px] h-32 w-[3px] rounded-r-sm bg-[#1a1a3a]"
      />
    </div>
  );
}

export default function TestimonialsBlock() {
  const { testimonials } = content;
  const items: readonly Item[] = testimonials.items;

  // 2 linhas com remix pra variação visual entre elas.
  const row1 = items;
  const row2 = [...items.slice(4), ...items.slice(0, 4)];

  return (
    <div id="depoimentos" aria-labelledby="depoimentos-title">
      {/* Header dos feedbacks */}
      <div className="mx-auto max-w-[1240px] px-6 text-center">
        <Reveal
          as="p"
          className="text-xs font-medium uppercase tracking-[0.28em] text-blue-light"
        >
          {testimonials.label}
        </Reveal>
        <Reveal delay={0.05}>
          <h2
            id="depoimentos-title"
            className="display-tight mx-auto mt-6 max-w-3xl text-[clamp(1.8rem,4vw,3.25rem)] leading-[1.05] tracking-[-0.02em] text-fg"
          >
            {testimonials.title}
          </h2>
        </Reveal>
      </div>

      {/* Palco: phone no centro (z-0) + 2 marquees POR CIMA (z-10) */}
      <div className="relative mt-16 md:mt-20">
        <div className="relative z-0 flex justify-center px-6">
          <Reveal>
            <PhoneMockup />
          </Reveal>
        </div>

        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 z-10 flex flex-col gap-5"
          style={{ top: "40%" }}
        >
          <MarqueeRow items={row1} direction="left" duration={50} />
          <MarqueeRow items={row2} direction="right" duration={60} />
        </div>
      </div>
    </div>
  );
}
