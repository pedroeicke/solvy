import { cn } from "@/lib/utils";

type Size = "default" | "large";

/**
 * Quote em Newsreader italic. Use em subheads editoriais, quotes
 * sobrepostos em foto-interlúdios, captions cerimoniais.
 * Regra: cada secao deve ter pelo menos UM Newsreader italic.
 */
export default function EditorialQuote({
  children,
  size = "default",
  as: As = "p",
  className,
}: {
  children: React.ReactNode;
  size?: Size;
  as?: "p" | "blockquote" | "h2" | "h3";
  className?: string;
}) {
  const sizeClass =
    size === "large"
      ? "text-[clamp(2rem,3vw,3.5rem)] leading-[1.2]"
      : "text-[clamp(1.125rem,1.5vw,1.5rem)] leading-[1.4]";

  return (
    <As
      className={cn(
        "italic text-fg",
        sizeClass,
        className
      )}
      style={{ fontFamily: "var(--font-serif), Georgia, serif" }}
    >
      {children}
    </As>
  );
}
