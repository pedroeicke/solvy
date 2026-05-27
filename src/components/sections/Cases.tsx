"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { content } from "@/content";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import DisplayHeading from "@/components/ui/DisplayHeading";
import MetadataLabel from "@/components/ui/MetadataLabel";
import AuroraBackground from "@/components/ui/AuroraBackground";
import { EASE_OUT } from "@/lib/animations";

// ============================================================
// CASES — 1 featured grande (Pregoeiros Summit) + 5 grid menores.
// Cada card linka pra /cases/[slug]. Hover com leve scale.
// ============================================================

export default function Cases() {
  const reduce = useReducedMotion();
  const p = content.portfolio;
  const featured = p.featured;

  const fade = (delay: number) =>
    reduce
      ? {}
      : {
          initial: { opacity: 0, y: 24 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "-100px" },
          transition: {
            duration: 0.6,
            delay,
            ease: EASE_OUT as unknown as number[],
          },
        };

  return (
    <section
      id="cases"
      aria-labelledby="cases-headline"
      className="relative overflow-hidden bg-bg py-32 md:py-48"
    >
      <AuroraBackground variant="subtle" />

      <Container className="relative">
        <Eyebrow>{p.eyebrow}</Eyebrow>

        <motion.div {...fade(0)} className="mt-4 max-w-4xl">
          <DisplayHeading id="cases-headline" as="h2" size="display">
            {p.headline}
          </DisplayHeading>
        </motion.div>

        {/* FEATURED CASE */}
        <motion.a
          {...fade(0.15)}
          href={featured.href}
          className="group mt-20 block overflow-hidden rounded-xl border border-faint/20 bg-bg-2/30 transition-colors hover:border-blue/40"
        >
          <div className="grid grid-cols-1 gap-0 md:grid-cols-2">
            {/* imagem */}
            <div className="relative aspect-[4/3] overflow-hidden bg-bg-2 md:aspect-auto">
              <Image
                src={featured.src}
                alt={featured.alt}
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>

            {/* conteudo */}
            <div className="flex flex-col justify-center p-10 md:p-14">
              <MetadataLabel>{featured.role}</MetadataLabel>
              <h3 className="mt-4 font-display text-3xl font-medium leading-[1.1] text-fg md:text-5xl">
                {featured.name}
              </h3>
              <p className="mt-6 max-w-md text-base leading-relaxed text-muted md:text-lg">
                {featured.tagline}
              </p>

              {/* stats */}
              <dl className="mt-10 grid grid-cols-3 gap-4">
                {featured.stats.map((s) => (
                  <div key={s.label}>
                    <dt className="font-display text-2xl font-medium text-fg md:text-3xl">
                      {s.number}
                    </dt>
                    <dd className="mt-1 text-xs uppercase tracking-[0.14em] text-muted">
                      {s.label}
                    </dd>
                  </div>
                ))}
              </dl>

              <span className="mt-10 inline-flex items-center gap-2 text-sm text-blue-light">
                Ver case <span aria-hidden>→</span>
              </span>
            </div>
          </div>
        </motion.a>

        {/* GRID OUTROS */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {p.items.map((it, i) => (
            <motion.a
              key={it.slug}
              {...fade(0.2 + i * 0.06)}
              href={it.href}
              className="group block overflow-hidden rounded-xl border border-faint/20 bg-bg-2/30 transition-colors hover:border-blue/40"
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-bg-2">
                <Image
                  src={it.src}
                  alt={it.alt}
                  fill
                  className="object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-6">
                <MetadataLabel>{it.role}</MetadataLabel>
                <h3 className="mt-3 font-display text-xl font-medium leading-tight text-fg">
                  {it.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted">
                  {it.description}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </Container>
    </section>
  );
}
