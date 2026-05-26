"use client";

import { useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import { gsap, useGSAP } from "@/lib/gsap";
import ScrollCue from "@/components/motion/ScrollCue";

const ColorBends = dynamic(() => import("@/components/ColorBends"), {
  ssr: false,
});

const ICON_A =
  "M299.71,134.71l.08,114.61c0,12.16-8.27,27.63-18.39,34.37l-96.5,64.25c-14.28,9.51-33.86,6.46-47.46-2.1l-15.66-9.85c-2.4-1.51-3.78-4.22-3.59-7.05.16-2.44,1.47-4.65,3.52-5.98l89.88-58.09,40.07-26.63c11.2-7.45,16.11-21.16,15.6-34.19-.5-12.82-7.51-25.18-18.99-32.04l-55.99-33.42c-12.63-7.54-13.34-29.2-1.73-38.72,12-9.84,24.84-17.42,37.78-25.85,3.95-2.57,9.03-2.63,12.98-.05l34.55,22.59c12.76,8.34,23.87,21.12,23.88,38.15Z";
const ICON_B =
  "M140.35,265.01c-.02-7.5-2.97-14.9-9.44-19.59-14.23-10.3-28.57-18.47-43.03-27.3-7.28-4.45-13.08-8.94-17.84-16.13-7.29-11.01-8.99-24.08-4.46-36.61,4.1-11.34,11.91-18.31,21.61-24.8l118.32-79.22c2.52-1.69,3.97-4.65,3.77-7.75v-.11c-.12-1.89-1.09-3.61-2.62-4.65l-14.61-9.94c-4.05-2.76-8.48-4.96-13.2-6.31-11.11-3.16-23.65-2.3-33.53,3.92L42.19,101.5c-12.72,8.01-23.66,19.48-23.65,36.07l.09,113.7c.01,14.52,10.36,25.17,21.29,31.93l46.28,28.63c2.88,1.78,5.99,1.87,8.69-.04l32.61-23.2c7.68-5.47,12.88-14.15,12.85-23.58Z";
const WORDMARK =
  "M570.26,190.52c-11.22-5.44-23.5-8.58-36.3-9.52l-58.28-4.26c-18.11-1.32-39.9-3.6-41.29-19.79-1.25-14.62,11.98-21.94,27.26-24.52,20.9-3.53,41.54-3.45,62.34.58,15.49,3,29.31,11.43,30.43,27.93l33.14-.02c.27-33.54-29.59-50.68-60.88-55.98-46.09-7.8-127.13-3.28-127.26,52.64-.08,34.34,32.14,44.47,63.57,46.72l61.61,4.41c12.88.92,29.96,4.83,32.78,15.35,9.31,34.79-63.9,33.5-96.23,27.5-8.5-1.58-15.9-5.07-22.81-9.7-4.7-5.34-6.88-11.29-8.1-18.98l-34.8-.04c.7,33.76,26.3,49.73,57.22,55.56,34.36,6.48,83.68,6.34,114.49-9.1,17.87-8.96,27.65-26.09,25.98-46.01-1.21-14.41-9.54-26.3-22.86-32.76ZM1114.9,107.5l37.52.12-88.98,170.11-38.54.39-54.2-102.86-35-67.77,38.23.1,70.53,138.72,42.46-83.64,27.99-55.18ZM872.14,32.48l35.26.04-.29,245.69-35.26-.04.29-245.69ZM1384.78,107.69l-13.15,27.84-80.62,164.43c-6.6,13.45-13.67,24.87-24.16,34.34-25.18,22.75-61.66,20.3-93.6,11.57l-.05-31.38c16.83,5.66,33.41,9.05,50.81,6,19.95-3.5,31.96-22.98,39.34-41.39l-88.4-171.41,38.12-.29,56.59,113.01,12.9,26.01,66.06-138.93,36.16.19ZM752.21,103.68c-35.23-4.57-76.74-.81-104.45,21.94-19.67,16.15-28.57,40.16-28.56,65.43.02,43.89,20.44,73.55,62.7,85.67,31.3,8.97,74.17,7.78,104.94-5.74,39.17-17.2,52.65-55.72,46.77-96.33-6.04-41.73-41.02-65.75-81.41-70.98ZM794.71,218.27c-14.55,35.56-66.05,39.49-100.33,29.88-16.29-4.56-30.06-15.39-35.53-31.57-5.1-15.09-5.15-31.66-.42-46.93,5.08-16.42,18.59-28.18,35.14-33.07,37.17-10.98,91.75-5.2,103.22,35.61,4.27,15.19,3.93,31.4-2.07,46.07Z";

const VB_W = 1403.32;
const VB_H = 384.62;

const LINE1_PRE = "O software se adapta à";
const LINE1_HI = "sua operação.";
const LINE2 = "Não o contrário.";

type P = {
  ox: number;
  oy: number;
  nx: number;
  delay: number;
  span: number;
  vx: number;
  vy: number;
  rot: number;
  s: number;
};

export default function Hero() {
  const root = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const tplRef = useRef<{ u: number; v: number }[]>([]); // pontos normalizados 0..1
  const partsRef = useRef<P[]>([]);
  const progRef = useRef(0); // 0..1 da desintegracao (alvo)
  const drawnRef = useRef(0); // valor suavizado desenhado
  const builtRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const visibleRef = useRef(true);

  const SAMPLE_W = 240;
  const SAMPLE_STEP = 2; // denso -> estado integro parece solido

  // Amostra a forma do icone usando o bbox REAL (getBBox) como viewBox.
  // Assim os pontos normalizados batem 1:1 com o getBoundingClientRect
  // do mesmo grupo -> nuvem de particulas alinhada exatamente ao SVG.
  useEffect(() => {
    let tries = 0;
    const sample = () => {
      const g = root.current?.querySelector(".hl-iconwrap") as SVGGraphicsElement | null;
      if (!g) {
        if (tries++ < 30) requestAnimationFrame(sample);
        return;
      }
      const bb = g.getBBox();
      if (!bb.width || !bb.height) {
        if (tries++ < 30) requestAnimationFrame(sample);
        return;
      }
      const W = SAMPLE_W;
      const H = Math.max(1, Math.round((W * bb.height) / bb.width));
      const svg = `<svg xmlns='http://www.w3.org/2000/svg' viewBox='${bb.x} ${bb.y} ${bb.width} ${bb.height}'><g fill='%23fff'><path d='${ICON_A}'/><path d='${ICON_B}'/></g></svg>`;
      const img = new Image();
      img.onload = () => {
        const c = document.createElement("canvas");
        c.width = W;
        c.height = H;
        const ctx = c.getContext("2d");
        if (!ctx) return;
        ctx.drawImage(img, 0, 0, W, H);
        const data = ctx.getImageData(0, 0, W, H).data;
        const pts: { u: number; v: number }[] = [];
        for (let y = 0; y < H; y += SAMPLE_STEP) {
          for (let x = 0; x < W; x += SAMPLE_STEP) {
            if (data[(y * W + x) * 4 + 3] > 110) {
              pts.push({ u: x / W, v: y / H });
            }
          }
        }
        tplRef.current = pts;
      };
      img.src = "data:image/svg+xml;charset=utf-8," + svg.replace(/#/g, "%23");
    };
    sample();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const buildParticles = () => {
    const icon = root.current?.querySelector(".hl-iconwrap") as SVGGraphicsElement | null;
    const cv = canvasRef.current;
    if (!icon || !cv || tplRef.current.length === 0) return;
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    cv.width = Math.floor(window.innerWidth * dpr);
    cv.height = Math.floor(window.innerHeight * dpr);
    cv.style.width = window.innerWidth + "px";
    cv.style.height = window.innerHeight + "px";
    const r = icon.getBoundingClientRect();
    // tamanho da particula >= espaçamento da amostra -> quadrados se
    // sobrepoem e o estado integro le como SOLIDO (sem grid).
    const spacing = (SAMPLE_STEP / SAMPLE_W) * r.width * dpr;
    const ps: P[] = [];
    for (const t of tplRef.current) {
      const ox = (r.left + t.u * r.width) * dpr;
      const oy = (r.top + t.v * r.height) * dpr;
      const nx = t.u; // 0 esq -> 1 dir (varredura)
      ps.push({
        ox,
        oy,
        nx,
        delay: nx * 0.5 + Math.random() * 0.07,
        span: 0.42 + Math.random() * 0.12,
        vx: (300 + Math.random() * 620) * dpr,
        vy: ((Math.random() - 0.5) * 150 - 30) * dpr,
        rot: (Math.random() - 0.5) * 6,
        s: spacing * (1.35 + Math.random() * 0.5),
      });
    }
    partsRef.current = ps;
    builtRef.current = true;
  };

  const renderDust = () => {
    if (!visibleRef.current) {
      rafRef.current = null;
      return;
    }
    const cv = canvasRef.current;
    const ctx = cv?.getContext("2d");
    if (!cv || !ctx) return;
    drawnRef.current += (progRef.current - drawnRef.current) * 0.18;
    const Pv = drawnRef.current;
    ctx.clearRect(0, 0, cv.width, cv.height);
    ctx.fillStyle = "#ffffff";
    const ps = partsRef.current;
    for (let i = 0; i < ps.length; i++) {
      const p = ps[i];
      let lt = (Pv - p.delay) / p.span;
      if (lt <= 0) {
        ctx.globalAlpha = 1;
        ctx.fillRect(p.ox - p.s / 2, p.oy - p.s / 2, p.s, p.s);
        continue;
      }
      if (lt >= 1) continue;
      const e = 1 - Math.pow(1 - lt, 2); // easeOut
      const turb = Math.sin(lt * 7 + p.nx * 12) * lt * 26 * (cv.width / window.innerWidth);
      const x = p.ox + e * p.vx;
      const y = p.oy + e * p.vy + turb - e * 20 * (cv.width / window.innerWidth);
      ctx.globalAlpha = 1 - lt;
      const s = p.s * (1 - 0.55 * lt);
      ctx.fillRect(x - s / 2, y - s / 2, s, s);
    }
    ctx.globalAlpha = 1;
    rafRef.current = requestAnimationFrame(renderDust);
  };

  useEffect(() => {
    const sec = root.current;
    if (!sec) return;

    const start = () => {
      if (rafRef.current == null) rafRef.current = requestAnimationFrame(renderDust);
    };

    const io = new IntersectionObserver(
      (entries) => {
        const inView = entries[0]?.isIntersecting ?? false;
        visibleRef.current = inView && document.visibilityState === "visible";
        if (visibleRef.current) start();
      },
      { threshold: 0 }
    );
    io.observe(sec);

    const onVis = () => {
      const docOk = document.visibilityState === "visible";
      const rect = sec.getBoundingClientRect();
      const inView =
        rect.bottom > 0 && rect.top < (window.innerHeight || 0);
      visibleRef.current = docOk && inView;
      if (visibleRef.current) start();
    };
    document.addEventListener("visibilitychange", onVis);

    start();

    return () => {
      if (rafRef.current != null) {
        cancelAnimationFrame(rafRef.current);
        rafRef.current = null;
      }
      io.disconnect();
      document.removeEventListener("visibilitychange", onVis);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useGSAP(
    () => {
      gsap.set(".hl-wordmark", { autoAlpha: 1, x: 0 });
      gsap.set(".hl-iconwrap", {
        x: 0,
        y: 0,
        scale: 1,
        autoAlpha: 1,
        transformOrigin: "center",
        transformBox: "fill-box",
      });
      gsap.set(".hl-dust", { autoAlpha: 0 });
      gsap.set(".hl-flash", { opacity: 0 });
      gsap.set(".ph-wrap", { autoAlpha: 0 });
      gsap.set(".ph-w", { opacity: 0, y: 28, filter: "blur(12px)" });

      const iconCenter = () => {
        const g = root.current?.querySelector(".hl-iconwrap") as SVGGraphicsElement | null;
        if (!g) return { cx: 159, cy: 184 };
        const b = g.getBBox();
        return { cx: b.x + b.width / 2, cy: b.y + b.height / 2 };
      };
      const dx = () => VB_W / 2 - iconCenter().cx;
      const dy = () => VB_H / 2 - iconCenter().cy;

      const D0 = 0.42; // inicio da desintegracao (apos o crossfade)
      const D1 = 0.66; // fim

      // build/exit só gerenciam as particulas; o crossfade de
      // autoAlpha (SVG <-> canvas) e feito por tweens no timeline.
      const enterDust = () => {
        if (builtRef.current) return;
        buildParticles();
      };
      const exitDust = () => {
        if (!builtRef.current) return;
        builtRef.current = false;
        partsRef.current = [];
        progRef.current = 0;
        drawnRef.current = 0;
      };

      const mm = gsap.matchMedia();
      mm.add("(min-width: 768px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: root.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1,
            invalidateOnRefresh: true,
            onUpdate: (self) => {
              const pr = self.progress;
              if (pr >= 0.345) enterDust();
              else if (pr < 0.3) exitDust();
              progRef.current = gsap.utils.clamp(0, 1, (pr - D0) / (D1 - D0));
            },
          },
        });

        // FASE 1 (0-.34): some o texto; o icone centra e cresce
        tl.to(".hl-wordmark", { autoAlpha: 0, x: 120, ease: "power2.in", duration: 0.26 }, 0)
          .to(".hl-iconwrap", { x: dx, y: dy, scale: 2.6, ease: "power3.out", duration: 0.34 }, 0)
          .to(".hl-cue", { autoAlpha: 0, duration: 0.1 }, 0)
          .to(".hl-bg", { opacity: 0.4, duration: 0.42 }, 0.05);

        // CROSSFADE (.35-.42): SVG solido -> particulas integras (sem corte)
        tl.to(".hl-iconwrap", { autoAlpha: 0, ease: "none", duration: 0.07 }, 0.35)
          .fromTo(".hl-dust", { autoAlpha: 0 }, { autoAlpha: 1, ease: "none", duration: 0.07 }, 0.35);

        // FASE 2 (.42-.66): desintegracao tipo Thanos (canvas via progRef)
        tl.to(".hl-flash", { opacity: 0.5, duration: 0.14 }, 0.46)
          .to(".hl-flash", { opacity: 0, duration: 0.2 }, 0.6);

        // FASE 3 (.58-.86): linha 1 entra primeiro, linha 2 logo em seguida
        // (mesmo efeito: opacity + y + blur). Separado por classe pra
        // garantir ordem visual e nao depender so de DOM order do stagger.
        const wordIn = {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          stagger: 0.012,
          ease: "power2.out",
          duration: 0.14,
        } as const;
        tl.to(".ph-wrap", { autoAlpha: 1, duration: 0.04 }, 0.58)
          .to(".ph-l1", wordIn, 0.59)
          .to(".ph-l2", wordIn, 0.7);

        // (.86-.95) frase FICA parada pra leitura — nenhum tween aqui

        // FASE 4 (.95-1): frase sai e entrega na proxima secao
        tl.to(".ph-wrap", { autoAlpha: 0, y: -26, ease: "power2.in", duration: 0.05 }, 0.95)
          .to(".hl-bg", { opacity: 0, duration: 0.06 }, 0.94);

        return () => {
          tl.scrollTrigger?.kill();
          tl.kill();
        };
      });
    },
    { scope: root }
  );

  return (
    <section ref={root} id="top" className="relative h-[360vh] bg-bg">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        <div className="hl-bg absolute inset-0">
          <div
            aria-hidden
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(60vw 60vh at 70% 25%, rgba(0,167,244,0.22), transparent 60%), radial-gradient(55vw 55vh at 25% 80%, rgba(2,126,226,0.20), transparent 60%), #030305",
            }}
          />
          <div className="absolute inset-0">
            <ColorBends
              colors={["#012a4a", "#027ee2", "#00a7f4", "#0a4a86"]}
              rotation={90}
              speed={0.16}
              scale={1.35}
              frequency={0.5}
              warpStrength={1}
              mouseInfluence={0.18}
              parallax={0.2}
              noise={0}
              iterations={2}
              intensity={1}
              bandWidth={5}
              transparent
            />
          </div>
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0"
            style={{
              background:
                "radial-gradient(ellipse 60% 60% at 50% 50%, transparent 30%, rgba(3,3,5,0.55) 75%, #030305 100%)",
            }}
          />
        </div>

        <div
          aria-hidden
          className="hl-flash pointer-events-none absolute left-1/2 top-1/2 z-10 h-[42vh] w-[60vw] -translate-x-1/2 -translate-y-1/2 opacity-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(0,167,244,0.5), rgba(2,126,226,0.16) 45%, transparent 70%)",
            filter: "blur(30px)",
          }}
        />

        {/* canvas das particulas (estalo) */}
        <canvas
          ref={canvasRef}
          className="hl-dust pointer-events-none absolute inset-0 z-20"
          aria-hidden
        />

        {/* logo completo (rest + fase 1) */}
        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          className="relative z-10 h-auto w-[min(74vw,620px)] px-6 drop-shadow-[0_8px_60px_rgba(0,167,244,0.35)]"
          style={{ overflow: "visible" }}
          fill="#ffffff"
          aria-label="Solvy"
        >
          <g className="hl-iconwrap">
            <path className="icon-a" d={ICON_A} />
            <path className="icon-b" d={ICON_B} />
          </g>
          <path className="hl-wordmark" d={WORDMARK} />
        </svg>

        {/* frase que surge depois do estalo */}
        <div className="ph-wrap pointer-events-none absolute inset-x-0 z-10 mx-auto max-w-[1240px] px-6 text-center">
          <p className="display-tight text-[clamp(1.5rem,2.8vw,2.6rem)] leading-[1.12] text-fg">
            <span className="whitespace-normal md:whitespace-nowrap">
              {LINE1_PRE.split(" ").map((w, i) => (
                <span
                  key={`a${i}`}
                  className="ph-w ph-l1 inline-block whitespace-pre"
                >
                  {w}{" "}
                </span>
              ))}
              <span className="ph-w ph-l1 inline-block whitespace-pre">
                <span
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #027ee2 0%, #00a7f4 100%)",
                    WebkitBackgroundClip: "text",
                    backgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    color: "transparent",
                  }}
                >
                  {LINE1_HI}
                </span>
              </span>
            </span>
            <br />
            {LINE2.split(" ").map((w, i) => (
              <span
                key={`b${i}`}
                className="ph-w ph-l2 inline-block whitespace-pre"
              >
                {w}{" "}
              </span>
            ))}
          </p>
        </div>

        <div className="hl-cue absolute bottom-8 left-1/2 z-10 -translate-x-1/2">
          <ScrollCue />
        </div>
      </div>
    </section>
  );
}
