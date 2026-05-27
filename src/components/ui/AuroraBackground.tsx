type Variant = "subtle" | "prominent" | "editorial";

const VARIANTS: Record<Variant, string> = {
  subtle:
    "radial-gradient(800px 600px at 80% 30%, rgba(0,167,244,0.15), transparent 60%), radial-gradient(600px 500px at 20% 80%, rgba(2,126,226,0.10), transparent 60%)",
  prominent:
    "radial-gradient(1000px 700px at 70% 50%, rgba(0,167,244,0.25), transparent 65%), radial-gradient(700px 600px at 30% 40%, rgba(2,126,226,0.20), transparent 65%)",
  editorial:
    "radial-gradient(900px 700px at 50% 50%, rgba(0,167,244,0.08), transparent 70%)",
};

/**
 * Glow ambiental atras de uma secao. Cuidado: glow nunca compete com
 * conteudo (sempre baixa opacidade, nas bordas, nao no centro).
 * Use dentro de uma <section> com `position: relative; overflow: hidden`.
 */
export default function AuroraBackground({
  variant = "subtle",
  className,
}: {
  variant?: Variant;
  className?: string;
}) {
  return (
    <div
      aria-hidden
      className={`pointer-events-none absolute inset-0 ${className ?? ""}`}
      style={{ background: VARIANTS[variant] }}
    />
  );
}
