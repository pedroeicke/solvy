import { cn } from "@/lib/utils";

export default function Card({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <div
      className={cn(
        "rounded-2xl border border-line bg-surface/60 p-7 backdrop-blur-sm transition-colors duration-300 hover:border-line-strong md:p-8",
        className
      )}
    >
      {children}
    </div>
  );
}
