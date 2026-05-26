"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";

// Hexagono cujas pecas se encaixam no scroll — o conceito da marca.
export default function EncaixeMotif({ className }: { className?: string }) {
  const ref = useRef<SVGSVGElement>(null);
  const hex = "100,14 175,57 175,143 100,186 25,143 25,57";

  useGSAP(
    () => {
      const st = { trigger: ref.current, start: "top 80%" };
      gsap.from(".enc-r", {
        x: 60,
        autoAlpha: 0,
        duration: 1.1,
        ease: "expo.out",
        scrollTrigger: st,
      });
      gsap.from(".enc-t", {
        y: -54,
        autoAlpha: 0,
        duration: 1.1,
        delay: 0.12,
        ease: "expo.out",
        scrollTrigger: st,
      });
      gsap.from(".enc-c", {
        scale: 0,
        autoAlpha: 0,
        transformOrigin: "center",
        duration: 0.8,
        delay: 0.45,
        ease: "back.out(2)",
        scrollTrigger: st,
      });
    },
    { scope: ref }
  );

  return (
    <svg ref={ref} viewBox="0 0 200 200" className={className} aria-hidden>
      <defs>
        <linearGradient id="enc-g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#027ee2" />
          <stop offset="100%" stopColor="#00a7f4" />
        </linearGradient>
      </defs>
      <polygon points={hex} fill="none" stroke="rgba(255,255,255,0.10)" strokeWidth="1.5" />
      <polygon
        className="enc-r"
        points="100,100 175,57 175,143 100,186"
        fill="url(#enc-g)"
        fillOpacity={0.18}
        stroke="url(#enc-g)"
        strokeWidth="1.5"
      />
      <polygon
        className="enc-t"
        points="100,100 25,57 100,14 175,57"
        fill="url(#enc-g)"
        fillOpacity={0.08}
        stroke="rgba(255,255,255,0.14)"
        strokeWidth="1.5"
      />
      <circle className="enc-c" cx="100" cy="100" r="3.5" fill="#00a7f4" />
    </svg>
  );
}
