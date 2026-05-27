import { cn } from "@/lib/utils";

/** Small caps tracked. Use em metadados (categoria de case, footer info). */
export default function MetadataLabel({
  children,
  className,
  as: As = "span",
}: {
  children: React.ReactNode;
  className?: string;
  as?: "span" | "p" | "div";
}) {
  return (
    <As
      className={cn(
        "text-xs uppercase tracking-[0.16em] text-muted",
        className
      )}
    >
      {children}
    </As>
  );
}
