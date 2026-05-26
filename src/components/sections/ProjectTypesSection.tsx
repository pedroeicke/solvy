"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { content } from "@/content";
import Reveal from "@/components/motion/Reveal";

export default function ProjectTypesSection() {
  const root = useRef<HTMLElement>(null);
  const { projectTypes } = content;

  useGSAP(
    () => {
      gsap.from(".pt-card", {
        y: 56,
        autoAlpha: 0,
        duration: 0.9,
        stagger: 0.08,
        ease: "expo.out",
        scrollTrigger: { trigger: ".pt-grid", start: "top 82%" },
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="tipos"
      className="relative overflow-hidden border-t border-line py-32 md:py-48"
    >
      <span className="section-label-bg absolute right-0 top-12 text-[20vw]">
        ENCAIXE
      </span>
      <div className="relative mx-auto max-w-[1240px] px-6 md:px-10">
        <Reveal as="p" className="mb-8 text-xs uppercase tracking-[0.28em] text-blue-light">
          {projectTypes.label}
        </Reveal>
        <Reveal as="h2" y={50} className="display-tight max-w-3xl text-giant text-fg">
          {projectTypes.title}
        </Reveal>

        <div className="pt-grid mt-20 grid gap-5 md:grid-cols-2">
          {projectTypes.items.map((t) => (
            <div
              key={t.situation}
              className="pt-card group flex flex-col gap-5 rounded-2xl border border-line bg-bg-2 p-8 transition-colors duration-500 hover:border-blue/40 md:flex-row md:items-center md:gap-8"
            >
              <p className="font-display text-xl font-medium leading-snug tracking-tight md:w-1/2">
                {t.situation}
              </p>
              <span
                aria-hidden
                className="hidden h-px flex-1 bg-line-strong transition-colors duration-500 group-hover:bg-blue/50 md:block"
              />
              <p className="text-sm leading-relaxed text-muted md:w-1/2">
                {t.tool}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
