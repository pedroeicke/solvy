"use client";

import { useState } from "react";
import { useReducedMotion } from "framer-motion";
import { content } from "@/content";
import Button from "@/components/ui/Button";
import Magnet from "@/components/motion/Magnet";
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

// TODO(Pedro): WhatsApp real da Solvy (55DDDNUMERO).
const WHATSAPP = "5500000000000";

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

      <div className="relative z-10 mx-auto max-w-[1240px] px-6 py-28 md:px-10 md:py-36">
        {/* FRASE DE IMPACTO centralizada, ACIMA do formulário */}
        <div className="mx-auto max-w-3xl text-center">
          <Reveal
            as="p"
            className="text-xs font-medium uppercase tracking-[0.28em] text-blue-light"
          >
            {finalCta.badge}
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="display-tight mt-5 text-[clamp(1.9rem,4.4vw,3.4rem)] leading-[1.06] text-fg">
              {finalCta.titleTop}
              <br />
              <span className="text-blue-light">{finalCta.titleHighlight}</span>
            </h2>
          </Reveal>
          <Reveal
            as="p"
            delay={0.12}
            className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-muted md:text-lg"
          >
            {finalCta.sub}
          </Reveal>
        </div>

        {/* FORMULÁRIO (mecanismo de conversão), centralizado abaixo da frase */}
        <Reveal delay={0.1} className="mx-auto mt-14 w-full max-w-2xl">
          {sent ? (
            <div className="grid place-items-center rounded-2xl border border-blue/35 bg-[radial-gradient(ellipse_at_center,rgba(0,167,244,0.1),transparent_70%)] p-12 text-center backdrop-blur-sm">
              <p className="display-tight text-huge text-fg">
                {contact.form.success}
              </p>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-4">
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
                rows={4}
                className={`${input} resize-none`}
                placeholder={contact.form.message}
                value={form.message}
                onChange={set("message")}
              />
              <div className="flex flex-wrap justify-center gap-4 pt-1">
                <Magnet data-cursor="hover">
                  <Button type="submit">
                    {loading ? "Enviando…" : contact.form.submit}
                  </Button>
                </Magnet>
                <Magnet data-cursor="hover">
                  <Button variant="secondary" onClick={whatsapp}>
                    {contact.form.whatsapp}
                  </Button>
                </Magnet>
              </div>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
