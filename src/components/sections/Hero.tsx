"use client";

import { useRef } from "react";
import dynamic from "next/dynamic";
import { gsap, useGSAP, ScrollTrigger } from "@/lib/gsap";
import ScrollCue from "@/components/motion/ScrollCue";
import HeroIdle from "./HeroIdle";

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

// === CALIBRACAO VISUAL ===
// Sequencia simples:
//   pre-video (scroll 9 -> 14%): zoom 1 -> ALIGNMENT (icone chega no tamanho)
//   video entra (scroll 14 -> 15.5%): icone faz FADE OUT (alpha 1 -> 0)
//   resto: icone fora, video reverse toca; no fim, parallax assume
const ICON_INITIAL_SCALE = 1;
const ICON_ALIGNMENT_SCALE = 4;
const VIDEO_START_PROGRESS = 0.155;
const TEXT_REVEAL_TIME = 3;
const HERO_PIN_DISTANCE = "220%";

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoStartedRef = useRef(false);
  const videoEndedRef = useRef(false);
  const textVisibleRef = useRef(false);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);
  const iconRef = useRef<SVGGElement>(null);
  const wordmarkRef = useRef<SVGPathElement>(null);
  const haloRef = useRef<HTMLDivElement>(null);
  const sceneRef = useRef<HTMLDivElement>(null);
  const frase1Ref = useRef<HTMLHeadingElement>(null);
  const frase2Ref = useRef<HTMLHeadingElement>(null);
  const scrollCueRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!sectionRef.current) return;
      const video = videoRef.current;

      // Estados iniciais
      gsap.set(wordmarkRef.current, { autoAlpha: 1, x: 0, force3D: true });
      gsap.set(iconRef.current, {
        x: 0,
        y: 0,
        scale: 1,
        autoAlpha: 1,
        transformOrigin: "center center",
        transformBox: "fill-box",
        force3D: true,
      });
      gsap.set(sceneRef.current, { opacity: 0 });
      gsap.set(haloRef.current, { opacity: 1 });
      gsap.set(scrollCueRef.current, { opacity: 1 });
      gsap.set([frase1Ref.current, frase2Ref.current], {
        opacity: 0,
        filter: "blur(8px)",
      });
      if (video) {
        gsap.set(video, { opacity: 0 });
      }

      const hideText = () => {
        textVisibleRef.current = false;
        gsap.set([frase1Ref.current, frase2Ref.current], {
          opacity: 0,
          filter: "blur(8px)",
        });
      };

      const showText = () => {
        if (textVisibleRef.current) return;
        textVisibleRef.current = true;
        gsap.to(frase1Ref.current, {
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.65,
          ease: "power2.out",
        });
        gsap.to(frase2Ref.current, {
          opacity: 1,
          filter: "blur(0px)",
          duration: 0.65,
          delay: 0.12,
          ease: "power2.out",
        });
      };

      const resetVideo = () => {
        if (!video) return;
        video.pause();
        if (video.currentTime > 0) {
          video.currentTime = 0;
        }
        videoStartedRef.current = false;
        videoEndedRef.current = false;
        hideText();
        gsap.set(video, { opacity: 0 });
        gsap.set(sceneRef.current, { opacity: 0 });
      };

      const playVideo = () => {
        if (!video || videoStartedRef.current || videoEndedRef.current) return;
        videoStartedRef.current = true;
        video.currentTime = 0;
        gsap.to(video, { opacity: 1, duration: 0.25, ease: "power2.out" });
        video.play().catch(() => {
          videoStartedRef.current = false;
        });
      };

      const handleVideoEnd = () => {
        if (!video) return;
        // GUARD: só revela a cena de parallax se o vídeo REALMENTE tocou (i.e.,
        // o usuário rolou até a faixa do vídeo). Um "ended" espúrio (vídeo que
        // falha/carrega vazio) com o usuário no topo NÃO pode mostrar a
        // cachoeira na abertura do site.
        if (!videoStartedRef.current) {
          resetVideo();
          return;
        }
        videoEndedRef.current = true;
        showText();
        // NÃO auto-scrolla. O vídeo acaba, mostra a cena da montanha no lugar
        // (parallax), e a subida do "Nosso Movimento" fica 100% por conta do
        // scroll do usuário.
        gsap.to(sceneRef.current, {
          opacity: 1,
          duration: 0.65,
          ease: "power2.out",
        });
        gsap.to(video, { opacity: 0, duration: 0.45, ease: "power2.out" });
      };
      const handleVideoTimeUpdate = () => {
        if ((video?.currentTime ?? 0) >= TEXT_REVEAL_TIME) {
          showText();
        }
      };
      video?.addEventListener("ended", handleVideoEnd);
      video?.addEventListener("timeupdate", handleVideoTimeUpdate);

      // Mede offset SVG-units pra centralizar o icone no viewBox
      let iconDx = VB_W / 2 - 159;
      let iconDy = VB_H / 2 - 184;
      if (iconRef.current) {
        try {
          const b = iconRef.current.getBBox();
          if (b.width && b.height) {
            iconDx = VB_W / 2 - (b.x + b.width / 2);
            iconDy = VB_H / 2 - (b.y + b.height / 2);
          }
        } catch {}
      }

      const st = ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: `+=${HERO_PIN_DISTANCE}`,
        pin: true,
        scrub: 0.5,
        invalidateOnRefresh: true,
        onUpdate: (self) => {
          const p = self.progress;

          // ============================================
          // FASE 1: 0% -> 8% — Estado inicial
          // ============================================
          // Tudo ja visivel via gsap.set; nada muda aqui

          // ============================================
          // FASE 2: 3% -> 9% — Wordmark sai E icone vai pro centro
          // ============================================
          if (p < 0.03) {
            gsap.set(wordmarkRef.current, { opacity: 1, x: 0 });
          } else if (p < 0.09) {
            const t = (p - 0.03) / 0.06;
            gsap.set(wordmarkRef.current, {
              opacity: 1 - t,
              x: t * 200,
            });
          } else {
            gsap.set(wordmarkRef.current, { opacity: 0 });
          }

          // ============================================
          // FASE 3: Icone simples - entra, vai pro centro, zoom ate alignment,
          //         fade out junto com entrada do video. Sem ciclo.
          //   0.03 -> 0.09: translada pro centro
          //   0.09 -> 0.14: zoom 1 -> ALIGNMENT
          //   0.14 -> 0.22: FADE OUT (alpha 1 -> 0) junto com entrada do video
          //   0.22+      : fora da cena
          // ============================================
          if (p < 0.03) {
            gsap.set(iconRef.current, {
              x: 0,
              y: 0,
              scale: ICON_INITIAL_SCALE,
              opacity: 1,
            });
          } else if (p < 0.09) {
            const t = (p - 0.03) / 0.06;
            gsap.set(iconRef.current, {
              x: t * iconDx,
              y: t * iconDy,
              scale: ICON_INITIAL_SCALE,
              opacity: 1,
            });
          } else if (p < 0.14) {
            const t = (p - 0.09) / 0.05;
            const eased = 1 - Math.pow(1 - t, 2);
            const scale =
              ICON_INITIAL_SCALE +
              (ICON_ALIGNMENT_SCALE - ICON_INITIAL_SCALE) * eased;
            gsap.set(iconRef.current, {
              x: iconDx,
              y: iconDy,
              scale,
              opacity: 1,
            });
          } else if (p < 0.155) {
            // Video entrando - icone FADE OUT RAPIDO (1.5% de scroll = ~7vh)
            const t = (p - 0.14) / 0.015;
            gsap.set(iconRef.current, {
              x: iconDx,
              y: iconDy,
              scale: ICON_ALIGNMENT_SCALE,
              opacity: 1 - t,
            });
          } else {
            gsap.set(iconRef.current, {
              x: iconDx,
              y: iconDy,
              opacity: 0,
            });
          }

          // ============================================
          // FASE 4: video reverse toca quando o icone sai.
          // O parallax so aparece no ended do video.
          // ============================================
          if (p < VIDEO_START_PROGRESS) {
            if (
              videoStartedRef.current ||
              videoEndedRef.current ||
              (video?.currentTime ?? 0) > 0
            ) {
              resetVideo();
            }
          } else {
            playVideo();
            if (videoEndedRef.current) {
              gsap.set(sceneRef.current, { opacity: 1 });
              gsap.set(video, { opacity: 0 });
            } else {
              gsap.set(sceneRef.current, { opacity: 0 });
            }
          }

          // ============================================
          // FASE 5: 3% -> 22% — Halo aurora fade out
          // ============================================
          if (p < 0.03) {
            gsap.set(haloRef.current, { opacity: 1 });
          } else if (p < 0.22) {
            const t = (p - 0.03) / 0.19;
            gsap.set(haloRef.current, { opacity: 1 - t });
          } else {
            gsap.set(haloRef.current, { opacity: 0 });
          }

          // ============================================
          // FASE 6: 0% -> 8% — Scroll cue some (rapido)
          // ============================================
          if (p < 0.02) {
            gsap.set(scrollCueRef.current, { opacity: 1 });
          } else if (p < 0.08) {
            const t = (p - 0.02) / 0.06;
            gsap.set(scrollCueRef.current, { opacity: 1 - t });
          } else {
            gsap.set(scrollCueRef.current, { opacity: 0 });
          }

          // ============================================
          //   (sem fade out — ficam ate proxima secao subir)
          // ============================================
        },
      });
      scrollTriggerRef.current = st;

      return () => {
        video?.removeEventListener("ended", handleVideoEnd);
        video?.removeEventListener("timeupdate", handleVideoTimeUpdate);
        scrollTriggerRef.current = null;
        st.kill();
      };
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative h-screen w-full overflow-hidden bg-bg"
    >
      {/* Z-0: Halo aurora (ColorBends + radial gradients + vignette) */}
      <div
        ref={haloRef}
        className="absolute inset-0 z-0 pointer-events-none"
        aria-hidden
      >
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

      {/* Z-10: Cena parallax (HeroIdle). opacity:0 no HTML evita o "flash" da
          cachoeira antes do GSAP rodar (FOUC na hidratação). O GSAP só revela
          ela no fim do vídeo. */}
      <div ref={sceneRef} className="absolute inset-0 z-10" style={{ opacity: 0 }}>
        <HeroIdle />
      </div>

      {/* Z-20: Video reverse - toca depois que o icone sai */}
      <video
        ref={videoRef}
        className="absolute inset-0 z-20 h-full w-full object-cover pointer-events-none"
        style={{ opacity: 0 }}
        src="/video/poshero-reverse-hq.mp4"
        muted
        playsInline
        preload="auto"
        aria-hidden
      />

      {/* Z-30: Logo - SVG inline (icone branco + wordmark) */}
      <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          className="relative h-auto w-[min(74vw,620px)] px-6"
          style={{ overflow: "visible" }}
          fill="#ffffff"
          aria-label="Solvy"
        >
          <g ref={iconRef}>
            <path d={ICON_A} />
            <path d={ICON_B} />
          </g>
          <path ref={wordmarkRef} d={WORDMARK} />
        </svg>
      </div>

      {/* Z-40: Frases (manifesto) */}
      <div className="absolute inset-0 flex items-center justify-center z-40 pointer-events-none px-6">
        <div className="text-center max-w-3xl">
          <h1
            ref={frase1Ref}
            className="display font-display text-[clamp(2rem,5.5vw,4.5rem)] text-fg leading-[1.05]"
            style={{
              opacity: 0,
              textShadow:
                "0 2px 22px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.7)",
            }}
          >
            O software se adapta à sua operação.
          </h1>
          <h1
            ref={frase2Ref}
            className="display font-display text-[clamp(2rem,5.5vw,4.5rem)] text-fg leading-[1.05] mt-4"
            style={{
              opacity: 0,
              textShadow:
                "0 2px 22px rgba(0,0,0,0.6), 0 1px 4px rgba(0,0,0,0.7)",
            }}
          >
            Não o{" "}
            <span
              style={{
                backgroundImage:
                  "linear-gradient(90deg, var(--solvy-blue) 0%, var(--solvy-blue-light) 100%)",
                WebkitBackgroundClip: "text",
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
                textShadow: "none",
              }}
            >
              contrário
            </span>
            .
          </h1>
        </div>
      </div>

      {/* Z-50: Scroll cue (circular) */}
      <div
        ref={scrollCueRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-50 pointer-events-none"
      >
        <ScrollCue />
      </div>
    </section>
  );
}
