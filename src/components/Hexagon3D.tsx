"use client";

// 3D do icone Solvy em CSS puro (sem WebGL — robusto, zero context-loss).
// Extrusao por camadas empilhadas no eixo Z + rotacao em perspectiva.
// Mantem a assinatura {progress} para nao mudar o ProcessSection.

const LAYERS = 16; // profundidade da extrusao

export default function Hexagon3D({
  progress,
}: {
  progress?: React.MutableRefObject<number>;
}) {
  void progress; // rotacao e continua via CSS; progress fica disponivel p/ futuro

  return (
    <div className="solvy3d-stage" aria-hidden>
      <div className="solvy3d-spin">
        {Array.from({ length: LAYERS }).map((_, i) => {
          const t = i / (LAYERS - 1);
          const z = (i - (LAYERS - 1) / 2) * 3;
          // miolo escuro, faces da frente/tras claras (volume)
          const bright = 0.45 + Math.abs(t - 0.5) * 1.4;
          const isFace = i === 0 || i === LAYERS - 1;
          return (
            <img
              key={i}
              src="/iconbdegradesf.svg"
              alt=""
              className="solvy3d-layer"
              style={{
                transform: `translate(-50%,-50%) translateZ(${z}px)`,
                filter: `brightness(${isFace ? 1.15 : bright}) saturate(${
                  isFace ? 1.1 : 0.7
                })`,
                opacity: isFace ? 1 : 0.96,
              }}
            />
          );
        })}
      </div>

      <style>{`
        .solvy3d-stage{
          position:absolute; inset:0;
          display:grid; place-items:center;
          perspective:1100px;
        }
        .solvy3d-spin{
          position:relative; width:62%; aspect-ratio:1;
          transform-style:preserve-3d;
          animation:solvy3d-rot 14s linear infinite;
          filter:drop-shadow(0 26px 60px rgba(0,167,244,.35));
        }
        .solvy3d-layer{
          position:absolute; top:50%; left:50%;
          width:100%; height:100%;
          will-change:transform;
        }
        @keyframes solvy3d-rot{
          from{ transform:rotateX(-14deg) rotateY(0deg); }
          to  { transform:rotateX(-14deg) rotateY(360deg); }
        }
        @media (prefers-reduced-motion: reduce){
          .solvy3d-spin{ animation:none; transform:rotateX(-14deg) rotateY(-22deg); }
        }
      `}</style>
    </div>
  );
}
