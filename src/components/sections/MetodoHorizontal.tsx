"use client";

import { useRef, useLayoutEffect, useState } from "react";
import Image from "next/image";
import { gsap } from "@/lib/gsap"; // já registra ScrollTrigger (guard de SSR)

/* ------------------------------------------------------------------ */
/*  Dados dos princípios                                               */
/*  visual3d: caminho do PNG 3D (transparente). Se vazio/erro, usa o   */
/*  glyph SVG de fallback — assim a seção funciona ANTES dos 3D.       */
/* ------------------------------------------------------------------ */
interface Principio {
  num: string;
  titulo: string[]; // linhas do título
  desc: string;
  tag: string; // frase editorial (Newsreader italic)
  visual3d?: string; // ex: '/icons-3d/decisao.png'
  glyph: React.ReactNode; // fallback SVG
  glowFrom: string; // cor do glow do card
}

const Glyph = ({ d }: { d: React.ReactNode }) => (
  <svg
    viewBox="0 0 100 100"
    fill="none"
    strokeWidth={2}
    className="h-[55%] w-[55%]"
  >
    {d}
  </svg>
);

const principios: Principio[] = [
  {
    num: "01",
    titulo: ["Quem decide", "está na sala."],
    desc: "Arquitetura, código e produto saem da mesma cabeça. Decisões técnicas acontecem em horas, não em sprints.",
    tag: "— Sem intermediário entre a ideia e a entrega.",
    visual3d: "/icons-3d/decisao.png",
    glowFrom: "rgba(10,246,248,0.22)",
    glyph: (
      <Glyph
        d={
          <>
            <circle cx="50" cy="50" r="14" stroke="#0AF6F8" />
            <circle cx="50" cy="18" r="6" stroke="#0AF6F8" />
            <circle cx="80" cy="68" r="6" stroke="#0AF6F8" />
            <circle cx="20" cy="68" r="6" stroke="#0AF6F8" />
            <line x1="50" y1="36" x2="50" y2="24" stroke="#0AF6F8" />
            <line x1="62" y1="58" x2="75" y2="65" stroke="#0AF6F8" />
            <line x1="38" y1="58" x2="25" y2="65" stroke="#0AF6F8" />
          </>
        }
      />
    ),
  },
  {
    num: "02",
    titulo: ["Código que dura", "mais que o contrato."],
    desc: "Stack moderna, documentada, manutenível. Vocês não ficam reféns de quem escreveu.",
    tag: "— Construído pra durar, não pra entregar e sumir.",
    visual3d: "/icons-3d/codigo.png",
    glowFrom: "rgba(6,102,166,0.28)",
    glyph: (
      <Glyph
        d={
          <>
            <polygon
              points="50,15 80,32 80,68 50,85 20,68 20,32"
              stroke="#0AF6F8"
            />
            <polygon
              points="50,30 67,40 67,60 50,70 33,60 33,40"
              stroke="#0AF6F8"
            />
          </>
        }
      />
    ),
  },
  {
    num: "03",
    titulo: ["Escopo claro,", "evolução real."],
    desc: "Priorização prática, entregas iterativas e decisões transparentes do início ao fim.",
    tag: "— Você sempre sabe onde o projeto está.",
    visual3d: "/icons-3d/escopo.png",
    glowFrom: "rgba(10,246,248,0.20)",
    glyph: (
      <Glyph
        d={
          <>
            <rect x="18" y="62" width="16" height="20" rx="2" stroke="#0AF6F8" />
            <rect x="42" y="46" width="16" height="36" rx="2" stroke="#0AF6F8" />
            <rect x="66" y="28" width="16" height="54" rx="2" stroke="#0AF6F8" />
            <path
              d="M20 58 L48 40 L74 22"
              stroke="#0AF6F8"
              strokeDasharray="3 3"
            />
          </>
        }
      />
    ),
  },
  {
    num: "04",
    titulo: ["Construção", "com parceria."],
    desc: "Você fala com quem resolve. Ajustes, decisões e alinhamento sem ruído.",
    tag: "— Um time só, do briefing ao deploy.",
    visual3d: "/icons-3d/parceria.png",
    glowFrom: "rgba(6,102,166,0.30)",
    glyph: (
      <Glyph
        d={
          <>
            <path
              d="M50 30 C35 30 30 45 30 55 C30 68 40 74 50 74"
              stroke="#0AF6F8"
            />
            <path
              d="M50 30 C65 30 70 45 70 55 C70 68 60 74 50 74"
              stroke="#0AF6F8"
            />
            <circle cx="50" cy="52" r="6" stroke="#0AF6F8" />
          </>
        }
      />
    ),
  },
];

const glows = [
  "radial-gradient(1000px 800px at 75% 50%, rgba(10,246,248,0.12), transparent 60%)",
  "radial-gradient(1000px 800px at 70% 45%, rgba(6,102,166,0.16), transparent 60%)",
  "radial-gradient(1000px 800px at 78% 55%, rgba(10,246,248,0.10), transparent 60%)",
  "radial-gradient(1000px 800px at 72% 50%, rgba(6,102,166,0.18), transparent 60%)",
];

export default function MetodoHorizontal() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);
  const tiltRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [active, setActive] = useState(0);
  const [hasImg, setHasImg] = useState<boolean[]>(principios.map(() => true));

  // ---- GSAP: pin + scroll horizontal com scrub ----
  useLayoutEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const totalShift = () => -(track.scrollWidth - window.innerWidth);

      const tween = gsap.to(track, {
        x: totalShift,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${track.scrollWidth - window.innerWidth}`,
          scrub: 0.8,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (self) => {
            const idx = Math.min(
              principios.length - 1,
              Math.round(self.progress * (principios.length - 1))
            );
            setActive(idx);
            if (glowRef.current) glowRef.current.style.background = glows[idx];
          },
        },
      });

      return () => {
        tween.scrollTrigger?.kill();
        tween.kill();
      };
    }, section);

    return () => ctx.revert();
  }, []);

  // ---- Tilt no mouse (desktop) ----
  useLayoutEffect(() => {
    if (!window.matchMedia("(hover: hover)").matches) return;
    const handler = (e: MouseEvent) => {
      const cx = (e.clientX / window.innerWidth - 0.5) * 2;
      const cy = (e.clientY / window.innerHeight - 0.5) * 2;
      tiltRefs.current.forEach((t) => {
        if (t)
          t.style.transform = `rotateY(${cx * 9}deg) rotateX(${-cy * 9}deg)`;
      });
    };
    window.addEventListener("mousemove", handler);
    return () => window.removeEventListener("mousemove", handler);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="metodo"
      aria-label="Método — Como a Solvy trabalha"
      className="relative bg-[#030306]"
    >
      {/* DESKTOP / TABLET: experiência pinada horizontal */}
      <div className="relative hidden h-screen overflow-hidden md:block">
        {/* glow de fundo que muda por princípio */}
        <div
          ref={glowRef}
          aria-hidden
          className="pointer-events-none absolute inset-0 z-0 transition-[background] duration-700"
          style={{ background: glows[0] }}
        />

        {/* topbar */}
        <div className="relative z-10 flex items-center justify-between px-[clamp(1.5rem,4vw,4rem)] pt-8">
          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#0AF6F8]">
            Método — Como a Solvy trabalha
          </span>
          <span className="text-sm tracking-[0.1em] text-[#8b93a3] tabular-nums">
            <b className="font-semibold text-[#f7f9fc]">
              {String(active + 1).padStart(2, "0")}
            </b>{" "}
            / 04
          </span>
        </div>

        {/* trilho horizontal */}
        <div
          ref={trackRef}
          className="absolute left-0 top-0 flex h-screen will-change-transform"
          style={{ width: `${principios.length * 100}vw` }}
        >
          {principios.map((p, i) => (
            <article
              key={p.num}
              className="relative grid h-screen w-screen items-center gap-8 px-[clamp(1.5rem,5vw,6rem)]"
              style={{ gridTemplateColumns: "1.1fr 0.9fr" }}
            >
              {/* número fantasma */}
              <span
                aria-hidden
                className="pointer-events-none absolute left-[clamp(1rem,3vw,3rem)] top-1/2 -translate-y-1/2 select-none font-bold leading-none"
                style={{
                  fontSize: "clamp(16rem, 34vw, 42rem)",
                  color: "transparent",
                  WebkitTextStroke: "1.5px rgba(255,255,255,0.05)",
                }}
              >
                {p.num}
              </span>

              {/* texto */}
              <div className="relative z-10 max-w-2xl">
                <span className="mb-5 block text-base font-semibold tracking-[0.1em] text-[#0AF6F8]">
                  Princípio {p.num}
                </span>
                <h2
                  className="mb-6 font-medium leading-[1.02] tracking-[-0.02em] text-[#f7f9fc]"
                  style={{ fontSize: "clamp(2.2rem, 4.2vw, 4.4rem)" }}
                >
                  {p.titulo.map((line, k) => (
                    <span key={k} className="block">
                      {line}
                    </span>
                  ))}
                </h2>
                <p
                  className="max-w-lg leading-[1.55] text-[#8b93a3]"
                  style={{ fontSize: "clamp(1rem, 1.3vw, 1.3rem)" }}
                >
                  {p.desc}
                </p>
                <p className="serif mt-8 text-[1.05rem] italic text-[#4c5260]">
                  {p.tag}
                </p>
              </div>

              {/* visual 3D / glass card */}
              <div className="relative z-[5] flex h-3/5 items-center justify-center [perspective:1000px]">
                <div
                  ref={(el) => {
                    tiltRefs.current[i] = el;
                  }}
                  className="relative aspect-square w-full max-w-[420px] transition-transform duration-200 ease-out [transform-style:preserve-3d]"
                >
                  {/* card de vidro premium */}
                  <div
                    className="absolute inset-0 overflow-hidden rounded-[28px] border"
                    style={{
                      background:
                        "linear-gradient(145deg, rgba(10,246,248,0.08), rgba(6,102,166,0.04))",
                      borderColor: "rgba(10,246,248,0.18)",
                      boxShadow:
                        "inset 0 1px 1px rgba(255,255,255,0.08), 0 30px 80px rgba(0,0,0,0.6), 0 0 60px rgba(10,246,248,0.10)",
                      backdropFilter: "blur(2px)",
                    }}
                  >
                    {/* glow interno do card */}
                    <div
                      aria-hidden
                      className="absolute -inset-1/2"
                      style={{
                        background: `radial-gradient(circle at 30% 30%, ${p.glowFrom}, transparent 45%)`,
                      }}
                    />
                  </div>

                  {/* elemento 3D ou fallback SVG */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {p.visual3d && hasImg[i] ? (
                      <Image
                        src={p.visual3d}
                        alt=""
                        width={300}
                        height={300}
                        className="h-3/5 w-3/5 object-contain drop-shadow-[0_10px_30px_rgba(10,246,248,0.25)]"
                        onError={() =>
                          setHasImg((prev) => {
                            const n = [...prev];
                            n[i] = false;
                            return n;
                          })
                        }
                      />
                    ) : (
                      p.glyph
                    )}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* barra de progresso */}
        <div className="absolute bottom-0 left-0 z-10 flex w-full gap-2 px-[clamp(1.5rem,4vw,4rem)] pb-10">
          {principios.map((_, i) => (
            <div
              key={i}
              className="relative h-0.5 flex-1 overflow-hidden rounded bg-white/10"
            >
              <i
                className="absolute inset-0 origin-left rounded transition-transform duration-300"
                style={{
                  background: "linear-gradient(90deg, #0666A6, #0AF6F8)",
                  transform: i <= active ? "scaleX(1)" : "scaleX(0)",
                  opacity: i < active ? 0.4 : 1,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* MOBILE: stack vertical */}
      <div className="md:hidden">
        <div className="sticky top-0 z-10 bg-[#030306]/80 px-6 py-5 backdrop-blur-md">
          <span className="text-[0.72rem] font-semibold uppercase tracking-[0.18em] text-[#0AF6F8]">
            Método — Como a Solvy trabalha
          </span>
        </div>
        {principios.map((p, i) => (
          <article
            key={p.num}
            className="relative flex min-h-[88vh] flex-col justify-center gap-10 px-6 py-24"
          >
            <span
              aria-hidden
              className="pointer-events-none absolute left-4 top-12 select-none text-[10rem] font-bold leading-none"
              style={{
                color: "transparent",
                WebkitTextStroke: "1px rgba(255,255,255,0.05)",
              }}
            >
              {p.num}
            </span>

            {/* visual */}
            <div className="relative flex h-64 items-center justify-center [perspective:1000px]">
              <div className="relative aspect-square h-full max-w-[260px]">
                <div
                  className="absolute inset-0 overflow-hidden rounded-3xl border"
                  style={{
                    background:
                      "linear-gradient(145deg, rgba(10,246,248,0.08), rgba(6,102,166,0.04))",
                    borderColor: "rgba(10,246,248,0.18)",
                    boxShadow:
                      "inset 0 1px 1px rgba(255,255,255,0.08), 0 20px 60px rgba(0,0,0,0.6), 0 0 50px rgba(10,246,248,0.10)",
                  }}
                >
                  <div
                    aria-hidden
                    className="absolute -inset-1/2"
                    style={{
                      background: `radial-gradient(circle at 30% 30%, ${p.glowFrom}, transparent 45%)`,
                    }}
                  />
                </div>
                <div className="absolute inset-0 flex items-center justify-center">
                  {p.visual3d && hasImg[i] ? (
                    <Image
                      src={p.visual3d}
                      alt=""
                      width={200}
                      height={200}
                      className="h-3/5 w-3/5 object-contain"
                    />
                  ) : (
                    p.glyph
                  )}
                </div>
              </div>
            </div>

            {/* texto */}
            <div className="relative z-10">
              <span className="mb-3 block text-sm font-semibold tracking-[0.1em] text-[#0AF6F8]">
                Princípio {p.num}
              </span>
              <h2 className="mb-4 text-4xl font-medium leading-[1.05] tracking-[-0.02em] text-[#f7f9fc]">
                {p.titulo.join(" ")}
              </h2>
              <p className="text-lg leading-relaxed text-[#8b93a3]">{p.desc}</p>
              <p className="serif mt-6 text-base italic text-[#4c5260]">
                {p.tag}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
