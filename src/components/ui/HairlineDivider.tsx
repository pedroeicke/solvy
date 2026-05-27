import { cn } from "@/lib/utils";

/**
 * Linha sutil de 1px em white 8% (--solvy-faint area).
 * Use pra separar grupos dentro de uma secao - NUNCA pra separar secoes
 * (entre secoes use espacamento vertical).
 */
export default function HairlineDivider({
  className,
  vertical = false,
}: {
  className?: string;
  vertical?: boolean;
}) {
  return (
    <div
      aria-hidden
      className={cn(
        vertical ? "w-px bg-fg/8" : "h-px bg-fg/8",
        className
      )}
      style={{ background: "rgba(247, 249, 252, 0.08)" }}
    />
  );
}
