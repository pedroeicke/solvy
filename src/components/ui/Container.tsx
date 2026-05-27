import { cn } from "@/lib/utils";

/** Wrapper padrao: max-w-7xl + padding lateral. Use em quase toda secao. */
export default function Container({
  children,
  className,
  as: As = "div",
}: {
  children: React.ReactNode;
  className?: string;
  as?: keyof React.JSX.IntrinsicElements;
}) {
  return (
    <As className={cn("mx-auto w-full max-w-7xl px-6 md:px-10", className)}>
      {children}
    </As>
  );
}
