"use client";

import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { content } from "@/content";
import Button from "@/components/ui/Button";
import ShinyButton from "@/components/ui/ShinyButton";
import WhatsAppIcon from "@/components/ui/WhatsAppIcon";
import Reveal from "@/components/motion/Reveal";
import Marquee from "@/components/motion/Marquee";

// ============================================================
// FINAL CTA / #contato — fechamento do funil. Inspirado no PS26
// FinalCTA (badge + título de 2 linhas + sub centralizados), mas
// MANTENDO o mecanismo de conversão da Solvy: formulário + WhatsApp
// + marquee. Adicionado VÍDEO DE FUNDO com overlay forte pra
// legibilidade. DESCARTADO do PS26: Countdown, botões próprios e
// footer-links. Vídeo placeholder em /video/cta-bg.mp4 (Pedro troca).
// Fallback sólido bg-bg se o vídeo não carregar ou reduced-motion.
// ============================================================

// WhatsApp da Solvy em formato wa.me (só dígitos: 55 + DDD + 9 + número).
const WHATSAPP = "5548992036687";

export default function FinalCTA() {
  const { finalCta, contact } = content;
  const reduce = useReducedMotion();
  const [form, setForm] = useState({ name: "", company: "", email: "", message: "" });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const set =
    (k: keyof typeof form) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    try {
      await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    } catch {
      /* stub */
    } finally {
      setLoading(false);
      setSent(true);
    }
  }

  function whatsapp() {
    const msg = encodeURIComponent(
      `Oi, sou ${form.name || "[nome]"}${
        form.company ? ` da ${form.company}` : ""
      }. ${form.message || "Quero falar sobre um projeto."}`
    );
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank");
  }

  const input =
    "w-full rounded-xl border border-line bg-bg-2/80 px-5 py-4 text-fg placeholder:text-faint outline-none backdrop-blur-sm transition-colors focus:border-blue-light/60";

  return (
    <section
      id="contato"
      className="relative overflow-hidden bg-bg"
    >
      {/* VÍDEO DE FUNDO (some em reduced-motion -> fica só o bg-bg + overlay) */}
      {!reduce && (
        <video
          aria-hidden
          className="pointer-events-none absolute inset-0 h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="/video/cta-poster.jpg"
        >
          <source src="/video/cta-bg.mp4" type="video/mp4" />
        </video>
      )}

      {/* OVERLAY escuro POR CIMA do vídeo (legibilidade do texto e do form) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, rgba(3,3,5,0.7) 0%, rgba(3,3,5,0.92) 100%)",
        }}
      />
      {/* tint azul sutil (opcional) */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(60% 60% at 50% 38%, rgba(0,167,244,0.10), transparent 70%)",
        }}
      />

      {/* Marquee (sobre o vídeo) */}
      <div className="relative z-10 border-b border-line py-10">
        <Marquee
          items={[
            "Software que cabe na sua empresa",
            "Sob medida, de verdade",
            "Feito para a sua empresa",
          ]}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 py-24 md:px-10 md:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          {/* ESQUERDA — a oferta (diagnóstico de 30 min) */}
          <div>
            <Reveal
              as="p"
              className="text-xs font-medium uppercase tracking-[0.28em] text-blue-light"
            >
              {finalCta.badge}
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="display-tight mt-6 text-[clamp(1.9rem,3.4vw,3rem)] leading-[1.05] text-fg">
                {finalCta.titleTop}{" "}
                <span className="text-blue-light">{finalCta.titleHighlight}</span>
              </h2>
            </Reveal>
            <Reveal
              as="p"
              delay={0.12}
              className="mt-6 max-w-xl text-lead leading-relaxed text-muted"
            >
              {finalCta.sub}
            </Reveal>
            <Reveal delay={0.16}>
              <ul className="mt-8 space-y-3.5">
                {finalCta.perks.map((perk) => (
                  <li key={perk} className="flex items-start gap-3">
                    <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-blue-light/15 text-blue-light">
                      <svg
                        viewBox="0 0 24 24"
                        className="h-3 w-3"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={3}
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                    </span>
                    <span className="text-sm leading-relaxed text-fg/85 md:text-base">
                      {perk}
                    </span>
                  </li>
                ))}
              </ul>
            </Reveal>
            <Reveal
              as="p"
              delay={0.2}
              className="mt-7 text-[0.7rem] uppercase tracking-[0.18em] text-faint"
            >
              {finalCta.reassurance}
            </Reveal>
          </div>

          {/* DIREITA — formulário num card de vidro */}
          <Reveal delay={0.1}>
            <div className="rounded-3xl border border-line bg-bg-2/60 p-7 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.8)] backdrop-blur-md md:p-9">
              {sent ? (
                <div className="grid place-items-center py-14 text-center">
                  <p className="display-tight text-lead leading-relaxed text-fg">
                    {contact.form.success}
                  </p>
                </div>
              ) : (
                <>
                  <p className="display-tight text-xl font-medium text-fg">
                    {finalCta.formTitle}
                  </p>
                  <form onSubmit={submit} className="mt-6 space-y-4">
                    <div className="grid gap-4 sm:grid-cols-2">
                      <input
                        required
                        className={input}
                        placeholder={contact.form.name}
                        value={form.name}
                        onChange={set("name")}
                      />
                      <input
                        className={input}
                        placeholder={contact.form.company}
                        value={form.company}
                        onChange={set("company")}
                      />
                    </div>
                    <input
                      required
                      type="email"
                      className={input}
                      placeholder={contact.form.email}
                      value={form.email}
                      onChange={set("email")}
                    />
                    <textarea
                      required
                      rows={3}
                      className={`${input} resize-none`}
                      placeholder={contact.form.message}
                      value={form.message}
                      onChange={set("message")}
                    />
                    <ShinyButton
                      type="submit"
                      className="w-full whitespace-nowrap max-md:px-3! max-md:text-[0.8rem]!"
                    >
                      {loading ? "Enviando…" : contact.form.submit}
                    </ShinyButton>
                    <Button
                      variant="secondary"
                      onClick={whatsapp}
                      className="w-full"
                    >
                      <WhatsAppIcon className="h-5 w-5 text-[#25D366]" />
                      {contact.form.whatsapp}
                    </Button>
                  </form>
                </>
              )}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
