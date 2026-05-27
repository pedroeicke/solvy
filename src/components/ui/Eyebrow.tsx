import { cn } from "@/lib/utils";

/** Rotulo de secao: text-xs uppercase blue, sem traço prefix. */
export default function Eyebrow({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <p
      className={cn(
        "text-xs font-medium uppercase tracking-[0.22em] text-blue",
        className
      )}
    >
      {children}
    </p>
  );
}
