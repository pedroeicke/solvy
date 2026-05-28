"use client";

import { useState } from "react";
import { content } from "@/content";
import Button from "@/components/ui/Button";
import Magnet from "@/components/motion/Magnet";
import Reveal from "@/components/motion/Reveal";
import Marquee from "@/components/motion/Marquee";

// TODO(Pedro): WhatsApp real da Solvy (55DDDNUMERO).
const WHATSAPP = "5500000000000";

export default function FinalCTA() {
  const { finalCta, contact } = content;
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
    "w-full rounded-xl border border-line bg-bg-2 px-5 py-4 text-fg placeholder:text-faint outline-none transition-colors focus:border-blue-light/60";

  return (
    <section id="contato" className="relative overflow-hidden border-t border-line">
      <div className="border-b border-line py-10">
        <Marquee
          items={[
            "Software que cabe na sua empresa",
            "Sob medida, de verdade",
            "Feito para a sua empresa",
          ]}
        />
      </div>

      <div className="mx-auto grid max-w-[1240px] gap-16 px-6 py-28 md:grid-cols-2 md:gap-24 md:px-10 md:py-36">
        <div>
          <Reveal as="h2" y={50} className="display-tight text-giant text-fg">
            {finalCta.title}
          </Reveal>
          <Reveal as="p" delay={0.1} className="mt-8 max-w-md text-lead leading-relaxed text-muted">
            {finalCta.sub}
          </Reveal>
        </div>

        <Reveal>
          {sent ? (
            <div className="grid h-full place-items-center rounded-2xl border border-blue/35 bg-[radial-gradient(ellipse_at_center,rgba(0,167,244,0.1),transparent_70%)] p-12 text-center">
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
              <div className="flex flex-wrap gap-4 pt-1">
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
