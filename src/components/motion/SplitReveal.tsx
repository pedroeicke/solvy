"use client";

import { useRef } from "react";
import { gsap, useGSAP } from "@/lib/gsap";
import { cn } from "@/lib/utils";

// Texto revelado palavra-por-palavra, blur->sharp + dim->bright,
// dirigido pelo scroll (scrub). Assinatura WebHub.
export default function SplitReveal({
  text,
  className,
  highlight,
  style,
}: {
  text: string;
  className?: string;
  highlight?: string;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLParagraphElement>(null);
  const words = text.split(" ");

  useGSAP(
    () => {
      const els = gsap.utils.toArray<HTMLElement>(".sr-w");
      gsap.set(els, { opacity: 0.14, filter: "blur(7px)" });
      gsap.to(els, {
        opacity: 1,
        filter: "blur(0px)",
        ease: "none",
        stagger: 0.4,
        scrollTrigger: {
          trigger: ref.current,
          start: "top 78%",
          end: "bottom 70%",
          scrub: 0.5,
        },
      });
    },
    { scope: ref }
  );

  return (
    <p ref={ref} className={cn(className)} style={style}>
      {words.map((w, i) => {
        const isHi = highlight && w.replace(/[.,]/g, "") === highlight;
        return (
          <span
            key={i}
            className={cn("sr-w inline-block whitespace-pre", isHi && "text-blue-light")}
          >
            {w}{" "}
          </span>
        );
      })}
    </p>
  );
}
