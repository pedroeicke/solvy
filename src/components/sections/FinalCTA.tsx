"use client";

import { useState } from "react";
import { content } from "@/content";
import { motion, useReducedMotion } from "framer-motion";
import Container from "@/components/ui/Container";
import DisplayHeading from "@/components/ui/DisplayHeading";
import EditorialQuote from "@/components/ui/EditorialQuote";
import HairlineDivider from "@/components/ui/HairlineDivider";
import MetadataLabel from "@/components/ui/MetadataLabel";
import PillButton from "@/components/ui/PillButton";
import AuroraBackground from "@/components/ui/AuroraBackground";
import { EASE_OUT } from "@/lib/animations";

// ============================================================
// FINAL CTA — headline + form + 2 CTAs + logo wall monocromatico.
// TODO(Pedro): substituir WHATSAPP pelo numero real.
// ============================================================

const WHATSAPP = "5500000000000";

export default function FinalCTA() {
  const reduce = useReducedMotion();
  const { finalCta, contact } = content;
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });
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
    "w-full rounded-xl border border-faint/30 bg-bg-2/50 px-5 py-4 text-fg placeholder:text-faint outline-none transition-colors focus:border-blue-light/60";

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 16 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-80px" },
          transition: {
            duration: 0.6,
            delay,
            ease: EASE_OUT as unknown as number[],
          },
        };

  return (
    <section
      id="contato"
      aria-labelledby="contato-headline"
      className="relative overflow-hidden border-t border-faint/20 bg-bg py-32 md:py-48"
    >
      <AuroraBackground variant="prominent" />

      <Container className="relative">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
          <div>
            <motion.div {...fade(0)}>
              <DisplayHeading
                id="contato-headline"
                as="h2"
                size="display"
                className="max-w-md"
              >
                {finalCta.title}
              </DisplayHeading>
            </motion.div>
            <motion.div {...fade(0.1)} className="mt-8 max-w-md">
              <EditorialQuote>{finalCta.sub}</EditorialQuote>
            </motion.div>
          </div>

          <motion.div {...fade(0.15)}>
            {sent ? (
              <div className="grid h-full place-items-center rounded-2xl border border-blue/35 bg-[radial-gradient(ellipse_at_center,rgba(0,167,244,0.1),transparent_70%)] p-12 text-center">
                <p className="font-display text-2xl text-fg md:text-3xl">
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
                <div className="flex flex-wrap gap-4 pt-1">
                  <PillButton type="submit">
                    {loading ? "Enviando…" : finalCta.ctaPrimary}
                  </PillButton>
                  <PillButton variant="secondary" onClick={whatsapp}>
                    {finalCta.ctaSecondary}
                  </PillButton>
                </div>
              </form>
            )}
          </motion.div>
        </div>

        <HairlineDivider className="mt-32 mx-auto w-24" />

        {/* LOGO WALL monocromatico */}
        <motion.div {...fade(0.2)} className="mt-12 text-center">
          <MetadataLabel>{finalCta.logoWallLabel}</MetadataLabel>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-x-16 gap-y-8 opacity-60">
            {finalCta.logos.map((l) => (
              <div
                key={l.name}
                className="relative h-8 w-32 transition-opacity hover:opacity-100"
                title={l.name}
              >
                {/* placeholder: enquanto SVGs nao existem, mostra o nome em texto */}
                <span className="font-display text-sm uppercase tracking-[0.16em] text-fg/70">
                  {l.name}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </Container>
    </section>
  );
}
