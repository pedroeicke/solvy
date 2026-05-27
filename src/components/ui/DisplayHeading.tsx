import { cn } from "@/lib/utils";

type Size = "mega" | "display" | "headline";

const SIZE_CLASS: Record<Size, string> = {
  mega: "text-[clamp(3rem,8vw,8.5rem)] leading-[1.02] tracking-[-0.02em]",
  display: "text-[clamp(2.5rem,5vw,5rem)] leading-[1.05] tracking-[-0.015em]",
  headline: "text-[clamp(1.75rem,3vw,3rem)] leading-[1.1] tracking-[-0.01em]",
};

/** Headline em font-display (agora TT Commons via globals.css). */
export default function DisplayHeading({
  children,
  as: As = "h2",
  size = "headline",
  className,
  id,
}: {
  children: React.ReactNode;
  as?: "h1" | "h2" | "h3" | "h4";
  size?: Size;
  className?: string;
  id?: string;
}) {
  return (
    <As
      id={id}
      className={cn(
        "font-display font-medium text-fg",
        SIZE_CLASS[size],
        className
      )}
    >
      {children}
    </As>
  );
}
