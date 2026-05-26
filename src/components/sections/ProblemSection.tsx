import Section from "@/components/ui/Section";
import Reveal from "@/components/motion/Reveal";
import { content } from "@/content";

const GRAD_TEXT = {
  backgroundImage: "linear-gradient(90deg, #027ee2 0%, #00a7f4 100%)",
  WebkitBackgroundClip: "text",
  backgroundClip: "text",
  WebkitTextFillColor: "transparent",
} as const;

/* ============================================================
   CENAS — uma mini-UI animada por problema (estilo Zouti)
   Cada cena e um SVG/HTML auto-contido com loops CSS.
   ============================================================ */

function ScenePlanilha() {
  // 6x4 grid + abas overflow + cells "editadas" pulsando
  const errs = new Set([2, 7, 11, 14, 18, 22]);
  return (
    <div className="ps-scene relative">
      <div className="ps-planilha-tabs">
        {["Aba 1", "Aba 2", "Aba 3", "Aba 4", "Aba 5", "+11"].map((t, i) => (
          <span
            key={i}
            className={`ps-tab ${i === 5 ? "ps-tab-overflow" : ""}`}
            style={{ animationDelay: `${i * 0.18}s` }}
          >
            {t}
          </span>
        ))}
      </div>
      <div className="ps-planilha-grid">
        {Array.from({ length: 24 }).map((_, i) => (
          <span
            key={i}
            className={`ps-cell ${errs.has(i) ? "ps-cell-hot" : ""}`}
            style={{ animationDelay: `${(i % 7) * 0.25}s` }}
          />
        ))}
      </div>
      <div className="ps-planilha-overflow" />
    </div>
  );
}

function SceneClock() {
  return (
    <div className="ps-scene flex items-center justify-center gap-6 px-4">
      <svg viewBox="0 0 100 100" className="ps-clock h-[78%]">
        <circle cx="50" cy="50" r="40" stroke="rgba(255,255,255,0.15)" strokeWidth="1.4" fill="none" />
        <circle cx="50" cy="50" r="40" className="ps-clock-ring" />
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i / 12) * Math.PI * 2;
          const x1 = 50 + Math.cos(a) * 34;
          const y1 = 50 + Math.sin(a) * 34;
          const x2 = 50 + Math.cos(a) * 38;
          const y2 = 50 + Math.sin(a) * 38;
          return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.30)" strokeWidth="1.2" />;
        })}
        <line className="ps-hand-h" x1="50" y1="50" x2="50" y2="28" stroke="#f7f9fc" strokeWidth="2.2" strokeLinecap="round" />
        <line className="ps-hand-m" x1="50" y1="50" x2="50" y2="18" stroke="#00a7f4" strokeWidth="1.6" strokeLinecap="round" />
        <circle cx="50" cy="50" r="2" fill="#00a7f4" />
      </svg>
      <div className="ps-tasks">
        {[0, 1, 2, 3].map((i) => (
          <div key={i} className="ps-task" style={{ animationDelay: `${i * 0.55}s` }}>
            <span className="ps-task-dot" />
            <span className="ps-task-bar" />
          </div>
        ))}
      </div>
    </div>
  );
}

function SceneEncaixe() {
  // peca hexagonal tentando entrar em slot quadrado, batendo e voltando
  return (
    <div className="ps-scene relative grid place-items-center">
      <div className="ps-encaixe">
        <div className="ps-slot">
          <svg viewBox="0 0 80 80" className="h-full w-full">
            <rect x="6" y="6" width="68" height="68" rx="3"
              stroke="rgba(255,255,255,0.30)" strokeDasharray="4 4" strokeWidth="1.5" fill="none" />
          </svg>
        </div>
        <div className="ps-peg">
          <svg viewBox="0 0 80 80" className="h-full w-full">
            <polygon
              points="40,6 70,22 70,58 40,74 10,58 10,22"
              fill="rgba(0,167,244,0.18)"
              stroke="#00a7f4"
              strokeWidth="1.6"
            />
          </svg>
        </div>
        <span className="ps-encaixe-x">×</span>
      </div>
    </div>
  );
}

function SceneContorno() {
  // A -> B com gambiarra: linha torta passa por desvios, ponto viajando
  return (
    <div className="ps-scene relative grid place-items-center">
      <svg viewBox="0 0 400 180" className="h-full w-full">
        <defs>
          <linearGradient id="ct-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#014f8f" />
            <stop offset="100%" stopColor="#00a7f4" />
          </linearGradient>
        </defs>
        {/* nos A e B */}
        <g>
          <circle cx="40" cy="90" r="14" fill="rgba(0,167,244,0.18)" stroke="#00a7f4" strokeWidth="1.5" />
          <text x="40" y="94" textAnchor="middle" fontSize="11" fill="#f7f9fc" fontFamily="system-ui">A</text>
          <circle cx="360" cy="90" r="14" fill="rgba(0,167,244,0.18)" stroke="#00a7f4" strokeWidth="1.5" />
          <text x="360" y="94" textAnchor="middle" fontSize="11" fill="#f7f9fc" fontFamily="system-ui">B</text>
        </g>
        {/* caminho torto (gambiarra) */}
        <path
          id="ct-path"
          d="M 54 90 C 80 30, 130 30, 160 90 S 220 150, 260 90 S 320 30, 346 90"
          fill="none"
          stroke="url(#ct-grad)"
          strokeWidth="2"
          strokeDasharray="6 5"
          className="ps-contorno-path"
        />
        {/* obstaculos */}
        <g className="ps-contorno-walls">
          <rect x="110" y="60" width="3" height="14" fill="rgba(255,255,255,0.20)" />
          <rect x="200" y="110" width="3" height="14" fill="rgba(255,255,255,0.20)" />
          <rect x="295" y="60" width="3" height="14" fill="rgba(255,255,255,0.20)" />
        </g>
        {/* ponto viajando */}
        <circle r="5" fill="#00a7f4" className="ps-contorno-dot">
          <animateMotion dur="4.4s" repeatCount="indefinite" rotate="auto">
            <mpath href="#ct-path" />
          </animateMotion>
        </circle>
        {/* simbolo $ subindo */}
        <g className="ps-contorno-cost">
          <text x="200" y="40" textAnchor="middle" fontSize="13" fill="#00a7f4" fontFamily="system-ui">R$</text>
        </g>
      </svg>
    </div>
  );
}

function SceneEspalhada() {
  // 6 nodes drifting, linhas tracejadas tentando conectar
  return (
    <div className="ps-scene relative">
      <svg viewBox="0 0 400 180" className="h-full w-full">
        {[
          { x: 60, y: 40, d: 0 },
          { x: 200, y: 30, d: 0.4 },
          { x: 340, y: 60, d: 0.8 },
          { x: 100, y: 130, d: 1.2 },
          { x: 250, y: 140, d: 1.6 },
          { x: 340, y: 140, d: 2.0 },
        ].map((n, i) => (
          <g key={i} className="ps-node" style={{ animationDelay: `${n.d}s` }}>
            <circle cx={n.x} cy={n.y} r="9" fill="rgba(0,167,244,0.16)" stroke="#00a7f4" strokeWidth="1.4" />
            <circle cx={n.x} cy={n.y} r="2" fill="#00a7f4" />
          </g>
        ))}
        <line x1="60" y1="40" x2="200" y2="30" className="ps-link" style={{ animationDelay: "0.3s" }} />
        <line x1="200" y1="30" x2="340" y2="60" className="ps-link" style={{ animationDelay: "0.9s" }} />
        <line x1="100" y1="130" x2="250" y2="140" className="ps-link" style={{ animationDelay: "1.5s" }} />
        <line x1="60" y1="40" x2="100" y2="130" className="ps-link" style={{ animationDelay: "2.1s" }} />
      </svg>
    </div>
  );
}

function SceneDependente() {
  // cadeia de nos com o central pulsando critico; os de fora piscam fraco
  return (
    <div className="ps-scene relative grid place-items-center">
      <svg viewBox="0 0 400 180" className="h-full w-full">
        <line x1="80" y1="90" x2="180" y2="90" stroke="rgba(255,255,255,0.20)" strokeWidth="1.4" />
        <line x1="220" y1="90" x2="320" y2="90" stroke="rgba(255,255,255,0.20)" strokeWidth="1.4" />
        {/* nos laterais */}
        <g className="ps-dep-side">
          <circle cx="60" cy="90" r="18" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.30)" strokeWidth="1.4" />
          <circle cx="60" cy="85" r="5" fill="rgba(255,255,255,0.50)" />
          <path d="M 50 100 Q 60 92 70 100" fill="none" stroke="rgba(255,255,255,0.50)" strokeWidth="1.4" />
        </g>
        <g className="ps-dep-side" style={{ animationDelay: "0.4s" }}>
          <circle cx="340" cy="90" r="18" fill="rgba(255,255,255,0.04)" stroke="rgba(255,255,255,0.30)" strokeWidth="1.4" />
          <circle cx="340" cy="85" r="5" fill="rgba(255,255,255,0.50)" />
          <path d="M 330 100 Q 340 92 350 100" fill="none" stroke="rgba(255,255,255,0.50)" strokeWidth="1.4" />
        </g>
        {/* no central critico */}
        <circle cx="200" cy="90" r="32" className="ps-dep-pulse" />
        <circle cx="200" cy="90" r="22" fill="rgba(0,167,244,0.20)" stroke="#00a7f4" strokeWidth="1.6" />
        <circle cx="200" cy="85" r="6" fill="#00a7f4" />
        <path d="M 188 102 Q 200 92 212 102" fill="none" stroke="#00a7f4" strokeWidth="1.6" />
      </svg>
    </div>
  );
}

const SCENES = [
  ScenePlanilha,
  SceneClock,
  SceneEncaixe,
  SceneContorno,
  SceneEspalhada,
  SceneDependente,
];

export default function ProblemSection() {
  const { problem } = content;
  const featured = new Set([0, 3]);
  const count = problem.items.length;

  return (
    <Section id="problema" className="relative overflow-hidden">
      {/* HEADER ZOUTI-STYLE — chip + serif headline centralizada + body + claim */}
      <div className="relative mx-auto max-w-4xl text-center">
        {/* CHIP com bolinha pulsante */}
        <Reveal>
          <div className="mx-auto flex w-fit items-center gap-2.5 rounded-full border border-blue-light/30 bg-blue-light/[0.04] px-4 py-1.5 backdrop-blur-sm">
            <span className="relative grid h-2 w-2 place-items-center">
              <span className="absolute inset-0 animate-ping rounded-full bg-blue-light/60" />
              <span className="relative h-1.5 w-1.5 rounded-full bg-blue-light shadow-[0_0_8px_rgba(0,167,244,0.8)]" />
            </span>
            <span className="text-[11px] font-medium uppercase tracking-[0.22em] text-blue-light">
              O padrão é o mesmo
            </span>
          </div>
        </Reveal>

        {/* HEADLINE SERIF CENTRALIZADA */}
        <Reveal y={30}>
          <h2
            className="serif mt-10 font-medium text-fg"
            style={{
              fontSize: "clamp(2.25rem, 5.4vw, 4.75rem)",
              lineHeight: 1.06,
              letterSpacing: "-0.018em",
            }}
          >
            {count} sintomas atacam toda
            <br />
            operação que cresce.
            <br />
            <span className="serif-italic" style={GRAD_TEXT}>
              Improviso é a raiz.
            </span>
          </h2>
        </Reveal>

        {/* BODY — listing dos 6 + claim */}
        <Reveal delay={0.18}>
          <p className="mx-auto mt-8 max-w-2xl text-lead leading-relaxed text-muted">
            Planilha que virou sistema, processo manual que consome o dia, ferramenta pronta que não encaixa, sistema caro cheio de contorno, informação espalhada e operação dependente de pessoas.{" "}
            <span className="text-fg/90">Padrão comum no mercado.</span>
          </p>
        </Reveal>
      </div>

      <Reveal delay={0.3}>
        <div className="relative mt-20 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {problem.items.map((it, i) => {
            const isBig = featured.has(i);
            const Scene = SCENES[i % SCENES.length];
            return (
              <article
                key={it.title}
                className={[
                  "group relative overflow-hidden rounded-2xl border border-line bg-bg-2/30 transition-all duration-500",
                  "hover:-translate-y-1 hover:border-line-strong hover:bg-bg-2/60",
                  isBig ? "lg:col-span-2" : "",
                ].join(" ")}
              >
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "radial-gradient(70% 60% at 0% 0%, rgba(0,167,244,0.14), transparent 70%)",
                  }}
                />
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-x-0 bottom-0 h-px opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background:
                      "linear-gradient(90deg, transparent, rgba(0,167,244,0.6), transparent)",
                  }}
                />

                {/* CENA animada */}
                <div className={isBig ? "h-52 lg:h-60" : "h-44"}>
                  <Scene />
                </div>

                {/* fade pra texto */}
                <div
                  aria-hidden
                  className="pointer-events-none h-px w-full"
                  style={{ background: "linear-gradient(90deg, transparent, rgba(255,255,255,0.08), transparent)" }}
                />

                <div className="relative p-7 lg:p-8">
                  <h3
                    className={[
                      "display-tight font-medium tracking-tight text-fg",
                      isBig ? "text-2xl lg:text-3xl" : "text-xl",
                    ].join(" ")}
                  >
                    {it.title}
                  </h3>
                  <p
                    className={[
                      "mt-3 leading-relaxed text-muted",
                      isBig ? "max-w-xl text-base" : "max-w-xs text-sm",
                    ].join(" ")}
                  >
                    {it.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </Reveal>

      {/* keyframes globais das cenas */}
      <style>{`
        .ps-scene{ height:100%; width:100%; position:relative; background:
          radial-gradient(120% 80% at 50% 0%, rgba(0,167,244,0.06), transparent 60%); overflow:hidden; }

        /* SCENE 0 — Planilha */
        .ps-planilha-tabs{ display:flex; gap:6px; padding:14px 16px 6px; }
        .ps-tab{ font-size:10px; color: rgba(247,249,252,0.55); padding:4px 10px;
          border:1px solid rgba(255,255,255,0.10); border-radius:6px;
          background: rgba(255,255,255,0.03);
          opacity:0; animation: ps-tab-in 4.5s ease-in-out infinite; }
        .ps-tab-overflow{ color:#00a7f4; border-color:rgba(0,167,244,0.45); }
        @keyframes ps-tab-in{
          0%,8%{ opacity:0; transform:translateY(-4px); }
          22%,70%{ opacity:1; transform:translateY(0); }
          100%{ opacity:1; transform:translateY(0); }
        }
        .ps-planilha-grid{ display:grid; grid-template-columns: repeat(6, 1fr);
          gap:3px; padding:8px 14px 14px; }
        .ps-cell{ display:block; aspect-ratio: 2.4 / 1;
          background: rgba(255,255,255,0.05);
          border:1px solid rgba(255,255,255,0.08);
          border-radius:2px;
          animation: ps-cell 3.2s ease-in-out infinite; }
        .ps-cell-hot{ animation: ps-cell-hot 2.4s ease-in-out infinite; }
        @keyframes ps-cell{
          0%,100%{ background: rgba(255,255,255,0.05); }
          50%{ background: rgba(255,255,255,0.10); }
        }
        @keyframes ps-cell-hot{
          0%,100%{ background: rgba(2,126,226,0.10); border-color: rgba(2,126,226,0.30); }
          50%{ background: rgba(0,167,244,0.40); border-color: rgba(0,167,244,0.85); box-shadow: 0 0 14px rgba(0,167,244,0.45); }
        }
        .ps-planilha-overflow{ position:absolute; right:0; top:0; bottom:0; width:40px;
          background: linear-gradient(90deg, transparent, var(--solvy-bg-2)); pointer-events:none; }

        /* SCENE 1 — Clock + tasks */
        .ps-clock{ aspect-ratio: 1 / 1; }
        .ps-clock-ring{ fill:none; stroke:#00a7f4; stroke-width:1.6;
          stroke-dasharray: 251; stroke-dashoffset: 251;
          animation: ps-ring 3.6s ease-in-out infinite; transform-origin: 50% 50%; transform: rotate(-90deg); }
        @keyframes ps-ring{
          0%{ stroke-dashoffset: 251; }
          60%{ stroke-dashoffset: 30; }
          100%{ stroke-dashoffset: 30; }
        }
        .ps-hand-h{ transform-origin: 50px 50px; animation: ps-spin 9s linear infinite; }
        .ps-hand-m{ transform-origin: 50px 50px; animation: ps-spin 1.6s linear infinite; }
        @keyframes ps-spin{ to{ transform: rotate(360deg); } }
        .ps-tasks{ display:flex; flex-direction:column; gap:10px; min-width:120px; }
        .ps-task{ display:flex; align-items:center; gap:8px; opacity:0; animation: ps-task 2.6s ease-in-out infinite; }
        .ps-task-dot{ display:block; width:10px; height:10px; border-radius:50%;
          border:1.5px solid rgba(255,255,255,0.40);
          animation: ps-task-dot 2.6s ease-in-out infinite; }
        .ps-task-bar{ display:block; flex:1; height:7px; border-radius:3px;
          background: rgba(255,255,255,0.10); }
        @keyframes ps-task{ 0%,8%{ opacity:0; transform: translateX(-8px); } 25%,100%{ opacity:1; transform: translateX(0); } }
        @keyframes ps-task-dot{ 0%,55%{ background: transparent; border-color: rgba(255,255,255,0.40); } 70%,100%{ background:#00a7f4; border-color:#00a7f4; } }

        /* SCENE 2 — Encaixe */
        .ps-encaixe{ position:relative; width:80%; max-width:300px; height:120px; }
        .ps-slot{ position:absolute; left:6%; top:50%; transform:translateY(-50%); width:90px; height:90px; }
        .ps-peg{ position:absolute; right:6%; top:50%; transform:translate(0,-50%); width:90px; height:90px;
          animation: ps-peg 3.4s cubic-bezier(.65,.05,.36,1) infinite; }
        @keyframes ps-peg{
          0%{ transform: translate(0,-50%) rotate(0); }
          35%{ transform: translate(-58%,-50%) rotate(-8deg); }
          45%{ transform: translate(-48%,-50%) rotate(6deg); }
          60%{ transform: translate(-58%,-50%) rotate(-3deg); }
          100%{ transform: translate(0,-50%) rotate(0); }
        }
        .ps-encaixe-x{ position:absolute; left:24%; top:50%; transform:translate(-50%,-50%);
          color: rgba(255,80,80,0.75); font-size:32px; font-weight:300; opacity:0;
          animation: ps-x 3.4s ease-in-out infinite; }
        @keyframes ps-x{ 0%,32%{ opacity:0; } 40%,55%{ opacity:1; } 70%,100%{ opacity:0; } }

        /* SCENE 3 — Contorno */
        .ps-contorno-path{ stroke-dasharray: 6 5; animation: ps-dash 1.4s linear infinite; }
        @keyframes ps-dash{ to{ stroke-dashoffset: -22; } }
        .ps-contorno-cost text{ animation: ps-cost 3.6s ease-in-out infinite; transform-origin: 200px 40px; }
        @keyframes ps-cost{
          0%,100%{ opacity:0; transform: translateY(8px); }
          40%,60%{ opacity:1; transform: translateY(0); }
          90%{ opacity:0; transform: translateY(-10px); }
        }

        /* SCENE 4 — Espalhada */
        .ps-node{ animation: ps-drift 5s ease-in-out infinite; transform-origin:center; transform-box: fill-box; }
        @keyframes ps-drift{
          0%,100%{ transform: translate(0,0); }
          50%{ transform: translate(8px,-6px); }
        }
        .ps-link{ stroke: rgba(0,167,244,0.6); stroke-width:1.2; stroke-dasharray: 3 4;
          opacity:0; animation: ps-link 3.4s ease-in-out infinite; }
        @keyframes ps-link{
          0%,100%{ opacity:0; }
          15%,35%{ opacity:0.7; }
          50%{ opacity:0; }
        }

        /* SCENE 5 — Dependente */
        .ps-dep-pulse{
          fill: rgba(255,80,80,0.0); stroke: rgba(255,80,80,0.55); stroke-width:1.5;
          transform-origin: 200px 90px;
          animation: ps-pulse 2.2s ease-out infinite;
        }
        @keyframes ps-pulse{
          0%{ transform: scale(0.7); opacity:0.9; }
          80%,100%{ transform: scale(1.6); opacity:0; }
        }
        .ps-dep-side{ animation: ps-side-flicker 2.2s ease-in-out infinite; transform-origin:center; }
        @keyframes ps-side-flicker{
          0%,40%{ opacity:0.95; }
          55%,75%{ opacity:0.30; }
          100%{ opacity:0.95; }
        }

        @media (prefers-reduced-motion: reduce){
          .ps-tab,.ps-cell,.ps-cell-hot,.ps-clock-ring,.ps-hand-h,.ps-hand-m,
          .ps-task,.ps-task-dot,.ps-peg,.ps-encaixe-x,.ps-contorno-path,
          .ps-contorno-cost text,.ps-node,.ps-link,.ps-dep-pulse,.ps-dep-side{
            animation: none !important;
          }
        }
      `}</style>
    </Section>
  );
}
