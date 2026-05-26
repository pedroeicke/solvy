"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { content } from "@/content";
import Reveal from "@/components/motion/Reveal";

export default function PortfolioSection() {
  const root = useRef<HTMLElement>(null);
  const { portfolio } = content;

  useGSAP(
    () => {
      const cards = gsap.utils.toArray<HTMLElement>(".pf-card");
      const isMobile = window.matchMedia("(max-width: 767px)").matches;
      const startScale = isMobile ? 0.85 : 0.72;

      cards.forEach((card) => {
        const media = card.querySelector<HTMLElement>(".pf-media");
        if (!media) return;

        gsap.fromTo(
          card,
          { scale: startScale, force3D: true },
          {
            scale: 1,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 90%",
              end: "top 35%",
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );

        gsap.fromTo(
          media,
          { filter: "saturate(0%)" },
          {
            filter: "saturate(100%)",
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              end: "top 40%",
              scrub: true,
              invalidateOnRefresh: true,
            },
          }
        );
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="portfolio"
      className="relative overflow-hidden border-t border-line bg-bg py-32 md:py-48"
    >
      <span className="section-label-bg absolute left-0 top-12 text-[20vw]">
        PROJETOS
      </span>

      <div className="relative mx-auto max-w-[1240px] px-6 md:px-10">
        <Reveal as="p" className="mb-8 text-xs uppercase tracking-[0.28em] text-blue-light">
          {portfolio.label}
        </Reveal>
        <Reveal as="h2" y={50} className="display-tight max-w-3xl text-giant text-fg">
          {portfolio.title}
        </Reveal>
        <Reveal as="p" delay={0.1} className="mt-8 max-w-2xl text-lead leading-relaxed text-muted">
          {portfolio.body}
        </Reveal>
      </div>

      <div className="mt-24 flex flex-col items-center gap-[6vw] md:mt-32">
        {portfolio.items.map((p) => {
          const Inner = (
            <div
              className="pf-card relative aspect-[16/9] w-[92%] overflow-hidden"
              style={{
                borderRadius: "2.5vw",
                willChange: "transform",
                transformOrigin: "center center",
              }}
            >
              <PortfolioMedia
                src={p.src}
                alt={p.alt}
                name={p.name}
                role={p.role}
                description={p.description}
              />
            </div>
          );

          return p.href ? (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Ver projeto ${p.name}`}
              className="flex w-full items-center justify-center"
            >
              {Inner}
            </a>
          ) : (
            <div key={p.name} className="flex w-full items-center justify-center">
              {Inner}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function PortfolioMedia({
  src,
  alt,
  name,
  role,
  description,
}: {
  src: string;
  alt: string;
  name: string;
  role: string;
  description?: string;
}) {
  return (
    <div
      className="pf-media absolute inset-0 h-full w-full"
      style={{ willChange: "filter" }}
    >
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(120% 80% at 20% 0%, #00a7f4 0%, #027ee2 28%, #014f8f 55%, #0a0f1a 85%), linear-gradient(180deg, #060709 0%, #030305 100%)",
          backgroundBlendMode: "screen",
        }}
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={src}
        alt={alt}
        className="absolute inset-0 h-full w-full object-cover"
        onError={(e) => {
          (e.currentTarget as HTMLImageElement).style.display = "none";
        }}
      />
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-2/3"
        style={{
          background:
            "linear-gradient(180deg, transparent 0%, rgba(3,3,5,0.55) 50%, rgba(3,3,5,0.88) 100%)",
        }}
      />
      <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
        <p className="text-[0.65rem] uppercase tracking-[0.28em] text-blue-light md:text-xs">
          {role}
        </p>
        <h3
          className="display-tight mt-2 font-medium tracking-tight text-fg"
          style={{ fontSize: "clamp(1.4rem, 2.8vw, 2.6rem)" }}
        >
          {name}
        </h3>
        {description ? (
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-fg/80 md:mt-4 md:text-base">
            {description}
          </p>
        ) : null}
      </div>
    </div>
  );
}
