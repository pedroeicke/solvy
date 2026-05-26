"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { content } from "@/content";
import Reveal from "@/components/motion/Reveal";

export default function ComparisonSection() {
  const root = useRef<HTMLElement>(null);
  const { comparison } = content;

  useGSAP(
    () => {
      gsap.from(".cmp-g li", {
        x: -24,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.07,
        ease: "expo.out",
        scrollTrigger: { trigger: ".cmp-g", start: "top 78%" },
      });
      gsap.from(".cmp-c li", {
        x: 24,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.09,
        ease: "expo.out",
        scrollTrigger: { trigger: ".cmp-c", start: "top 78%" },
      });
    },
    { scope: root }
  );

  return (
    <section
      ref={root}
      id="comparacao"
      className="relative overflow-hidden border-y border-line bg-bg-2 py-32 md:py-48"
    >
      <div className="mx-auto max-w-[1240px] px-6 md:px-10">
        <Reveal as="p" className="mb-8 text-xs uppercase tracking-[0.28em] text-blue-light">
          {comparison.label}
        </Reveal>
        <Reveal as="h2" y={50} className="display-tight max-w-4xl text-giant text-fg">
          {comparison.title}
        </Reveal>

        <div className="mt-20 grid gap-5 md:grid-cols-2">
          <div className="rounded-2xl border border-line p-9 md:p-11">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-faint">
              {comparison.generic.heading}
            </p>
            <ul className="cmp-g mt-8 space-y-5">
              {comparison.generic.points.map((p, i) => (
                <li
                  key={p}
                  className={`flex items-center gap-4 ${
                    i === comparison.generic.points.length - 1
                      ? "font-medium text-fg"
                      : "text-muted"
                  }`}
                >
                  <span className="h-px w-6 shrink-0 bg-faint" />
                  {p}
                </li>
              ))}
            </ul>
          </div>

          <div className="relative overflow-hidden rounded-2xl border border-blue/35 bg-[radial-gradient(ellipse_at_top_right,rgba(0,167,244,0.14),transparent_62%)] p-9 md:p-11">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-blue-light">
              {comparison.custom.heading}
            </p>
            <ul className="cmp-c mt-8 space-y-5">
              {comparison.custom.points.map((p, i) => (
                <li
                  key={p}
                  className={`flex items-center gap-4 ${
                    i === comparison.custom.points.length - 1
                      ? "font-semibold text-fg"
                      : "text-fg/90"
                  }`}
                >
                  <span className="grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue/25 text-[11px] text-blue-light">
                    ✓
                  </span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
