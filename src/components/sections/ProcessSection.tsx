"use client";

import { useRef, useState } from "react";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { content } from "@/content";
import GlassIcon from "@/components/ui/GlassIcon";
import ScrollCue from "@/components/motion/ScrollCue";

export default function ProcessSection() {
  const root = useRef<HTMLElement>(null);
  const activeRef = useRef(0);
  const [active, setActive] = useState(0);
  const { process } = content;
  const steps = process.steps;

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const st = ScrollTrigger.create({
          trigger: root.current,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
          onUpdate: (self) => {
            const idx = Math.min(
              steps.length - 1,
              Math.floor(self.progress * steps.length * 0.999)
            );
            if (idx !== activeRef.current) {
              activeRef.current = idx;
              setActive(idx);
            }
          },
        });
        return () => st.kill();
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="processo"
      className="relative bg-bg"
      style={{ height: `${steps.length * 55 + 80}vh` }}
    >
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <span className="section-label-bg absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-[24vw]">
          PROCESSO
        </span>

        {/* DESKTOP — estilo Etapas WebHub */}
        <div className="relative mx-auto hidden w-full max-w-[1240px] grid-cols-[auto_1fr_auto] items-center gap-12 px-10 md:grid lg:gap-20">
          {/* numeros grandes */}
          <ol className="flex flex-col gap-3">
            {steps.map((s, i) => (
              <li
                key={s.n}
                className="font-display font-medium leading-none tracking-tight transition-all duration-500"
                style={{
                  fontSize: "clamp(2.4rem, 4.4vw, 4.5rem)",
                  color: i === active ? "var(--solvy-fg)" : "var(--solvy-faint)",
                  opacity: i === active ? 1 : 0.35,
                }}
              >
                {s.n}
              </li>
            ))}
          </ol>

          {/* icone glass central (troca por etapa) */}
          <div className="relative mx-auto grid h-[clamp(260px,30vw,440px)] w-full place-items-center">
            {steps.map((s, i) => (
              <div
                key={s.n}
                className="absolute inset-0 grid place-items-center transition-all duration-700"
                style={{
                  opacity: i === active ? 1 : 0,
                  transform: i === active ? "scale(1)" : "scale(0.82)",
                  pointerEvents: "none",
                }}
              >
                <GlassIcon i={i} />
              </div>
            ))}
          </div>

          {/* conteudo da etapa */}
          <div className="relative w-[clamp(260px,26vw,380px)] text-right">
            <p className="mb-5 text-xs uppercase tracking-[0.28em] text-blue-light">
              {process.label} · {steps[active].n}/{String(steps.length).padStart(2, "0")}
            </p>
            <div className="relative min-h-[clamp(180px,26vh,260px)]">
              {steps.map((s, i) => (
                <div
                  key={s.n}
                  className="absolute inset-0 transition-all duration-500"
                  style={{
                    opacity: i === active ? 1 : 0,
                    transform: i === active ? "translateY(0)" : "translateY(16px)",
                  }}
                >
                  <h3 className="display-tight text-huge text-fg">{s.name}</h3>
                  <p className="mt-5 leading-relaxed text-muted md:text-lead">
                    {s.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* MOBILE — lista simples */}
        <div className="mx-auto w-full max-w-xl space-y-14 px-6 md:hidden">
          <p className="text-xs uppercase tracking-[0.28em] text-blue-light">
            {process.label}
          </p>
          {steps.map((s) => (
            <div key={s.n}>
              <p className="text-xs uppercase tracking-[0.2em] text-blue-light">
                {s.n}
              </p>
              <h3 className="mt-1 font-display text-2xl font-medium tracking-tight">
                {s.name}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="absolute bottom-8 right-8 hidden md:block">
          <ScrollCue />
        </div>
      </div>
    </section>
  );
}
