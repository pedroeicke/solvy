"use client";

import { useRef } from "react";
import { content } from "@/content";
import Reveal from "@/components/motion/Reveal";
import EncaixeMotif from "@/components/ui/EncaixeMotif";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";

const GRAD_TEXT = {
  backgroundImage: "linear-gradient(90deg, #027ee2 0%, #00a7f4 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
  color: "transparent",
} as const;

export default function ThesisSection() {
  const { thesis } = content;
  const [before, after] = thesis.title.split(thesis.highlight);
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.to(".thesis-motif", {
          rotate: 14,
          yPercent: -6,
          ease: "none",
          scrollTrigger: {
            trigger: root.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="virada"
      className="relative overflow-hidden py-32 md:py-48"
    >
      <div className="mx-auto grid max-w-[1240px] items-center gap-16 px-6 md:grid-cols-[1.1fr_1fr] md:gap-20 md:px-10">
        <div>
          <Reveal as="p" className="mb-10 text-xs uppercase tracking-[0.28em] text-blue-light">
            {thesis.label}
          </Reveal>
          <Reveal y={50}>
            <h2 className="display-tight text-huge text-fg">
              {before}
              <span style={GRAD_TEXT}>{thesis.highlight}</span>
              {after}
            </h2>
          </Reveal>
          <Reveal as="p" delay={0.1} className="mt-9 max-w-xl text-lead leading-relaxed text-muted">
            {thesis.body}
          </Reveal>

          {/* citacao de densidade */}
          <Reveal delay={0.18}>
            <figure className="relative mt-12 max-w-xl">
              <div
                aria-hidden
                className="absolute left-0 top-0 h-full w-px"
                style={{
                  background:
                    "linear-gradient(180deg, rgba(0,167,244,0.7) 0%, rgba(2,126,226,0.25) 100%)",
                }}
              />
              <blockquote className="display-tight pl-6 text-2xl font-medium leading-snug tracking-tight text-fg md:text-3xl">
                Antes da primeira linha de código,{" "}
                <span style={GRAD_TEXT}>vêm 4 conversas.</span>
              </blockquote>
            </figure>
          </Reveal>
        </div>

        {/* motif maior + parallax/rotacao no scroll */}
        <div className="flex justify-center">
          <div className="thesis-motif will-change-transform">
            <EncaixeMotif className="h-72 w-72 md:h-[clamp(360px,40vw,560px)] md:w-[clamp(360px,40vw,560px)]" />
          </div>
        </div>
      </div>
    </section>
  );
}
