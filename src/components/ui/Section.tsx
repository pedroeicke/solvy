import { cn } from "@/lib/utils";

export default function Section({
  id,
  label,
  className,
  children,
}: {
  id?: string;
  label?: string;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 px-6 py-24 md:px-10 md:py-32",
        className
      )}
    >
      <div className="mx-auto w-full max-w-[1240px]">
        {label && (
          <p className="mb-10 flex items-center gap-3 text-xs font-medium uppercase tracking-[0.22em] text-blue-light">
            <span className="h-px w-7 bg-blue-light/60" />
            {label}
          </p>
        )}
        {children}
      </div>
    </section>
  );
}
