"use client";

import { cn } from "@/lib/utils";

// Marquee infinito (assinatura WebHub). CSS puro, loop sem emenda.
export default function Marquee({
  items,
  className,
  reverse = false,
}: {
  items: string[];
  className?: string;
  reverse?: boolean;
}) {
  const track = [...items, ...items];
  return (
    <div className={cn("relative flex overflow-hidden", className)} aria-hidden>
      <div
        className="flex w-max shrink-0 items-center"
        style={{
          animation: `solvy-marquee 30s linear infinite${reverse ? " reverse" : ""}`,
        }}
      >
        {track.map((t, i) => (
          <span key={i} className="flex items-center gap-12 pr-12">
            <span className="display text-[clamp(1.75rem,4.5vw,4rem)] text-fg/85">
              {t}
            </span>
            <span className="text-blue-light/80">◆</span>
          </span>
        ))}
      </div>
      <style>{`@keyframes solvy-marquee{from{transform:translateX(0)}to{transform:translateX(-50%)}}`}</style>
    </div>
  );
}
