// Icone "glass" (vidro fosco) por etapa — CSS/SVG, sem WebGL.
// Hexagono translucido com gradiente azul/violeta, brilho e float.

const HEX = "polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)";

function Glyph({ i }: { i: number }) {
  const c = "stroke-white";
  const sw = 1.6;
  switch (i) {
    case 0: // Escuta — ondas de som
      return (
        <svg viewBox="0 0 48 48" fill="none" className="h-1/2 w-1/2">
          <path d="M16 19v10M11 22v4M21 14v20M26 18v12M31 21v6M36 23v2" className={c} strokeWidth={sw} strokeLinecap="round" />
        </svg>
      );
    case 1: // Diagnostico — lupa
      return (
        <svg viewBox="0 0 48 48" fill="none" className="h-1/2 w-1/2">
          <circle cx="21" cy="21" r="11" className={c} strokeWidth={sw} />
          <path d="M29 29l8 8" className={c} strokeWidth={sw} strokeLinecap="round" />
        </svg>
      );
    case 2: // Escopo — moldura/documento
      return (
        <svg viewBox="0 0 48 48" fill="none" className="h-1/2 w-1/2">
          <path d="M13 10h14l8 8v20H13z" className={c} strokeWidth={sw} strokeLinejoin="round" />
          <path d="M27 10v8h8M18 26h12M18 31h12" className={c} strokeWidth={sw} strokeLinecap="round" />
        </svg>
      );
    case 3: // Build — cubo
      return (
        <svg viewBox="0 0 48 48" fill="none" className="h-1/2 w-1/2">
          <path d="M24 9l13 7.5v15L24 39 11 31.5v-15L24 9Z" className={c} strokeWidth={sw} strokeLinejoin="round" />
          <path d="M11 16.5L24 24l13-7.5M24 24v15" className={c} strokeWidth={sw} strokeLinejoin="round" />
        </svg>
      );
    case 4: // Deploy — seta pra cima / lancamento
      return (
        <svg viewBox="0 0 48 48" fill="none" className="h-1/2 w-1/2">
          <path d="M24 11v22M24 11l-7 7M24 11l7 7" className={c} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
          <path d="M14 37h20" className={c} strokeWidth={sw} strokeLinecap="round" />
        </svg>
      );
    default: // Sustentacao — loop/refresh
      return (
        <svg viewBox="0 0 48 48" fill="none" className="h-1/2 w-1/2">
          <path d="M35 20a12 12 0 1 0 .5 7" className={c} strokeWidth={sw} strokeLinecap="round" />
          <path d="M35 12v8h-8" className={c} strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
  }
}

export default function GlassIcon({ i }: { i: number }) {
  return (
    <div className="glass-float relative grid place-items-center">
      {/* glow atras */}
      <div
        aria-hidden
        className="absolute inset-[-22%] rounded-full blur-3xl"
        style={{
          background:
            "radial-gradient(circle, rgba(0,167,244,0.45), rgba(124,92,255,0.22) 45%, transparent 70%)",
        }}
      />
      {/* placa de vidro hexagonal */}
      <div
        className="relative grid h-[clamp(220px,26vw,360px)] w-[clamp(220px,26vw,360px)] place-items-center"
        style={{
          clipPath: HEX,
          background:
            "linear-gradient(150deg, rgba(0,167,244,0.30), rgba(124,92,255,0.20) 45%, rgba(2,126,226,0.34))",
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          boxShadow:
            "inset 0 3px 24px rgba(255,255,255,0.22), inset 0 -10px 40px rgba(2,126,226,0.30)",
        }}
      >
        {/* contorno claro */}
        <div
          aria-hidden
          className="absolute inset-0"
          style={{
            clipPath: HEX,
            border: "1px solid rgba(255,255,255,0.22)",
          }}
        />
        {/* brilho especular */}
        <div
          aria-hidden
          className="absolute left-[12%] top-[8%] h-[40%] w-[55%] rounded-full opacity-60 blur-2xl"
          style={{ background: "rgba(255,255,255,0.35)" }}
        />
        <Glyph i={i} />
      </div>

      <style>{`
        .glass-float{ animation: glassfloat 7s ease-in-out infinite; }
        @keyframes glassfloat{
          0%,100%{ transform: translateY(-8px) rotate(-1deg); }
          50%{ transform: translateY(8px) rotate(1deg); }
        }
        @media (prefers-reduced-motion: reduce){
          .glass-float{ animation: none; }
        }
      `}</style>
    </div>
  );
}
