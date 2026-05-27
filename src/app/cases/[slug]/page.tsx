import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { cases } from "@/content/cases";
import Container from "@/components/ui/Container";
import Eyebrow from "@/components/ui/Eyebrow";
import DisplayHeading from "@/components/ui/DisplayHeading";
import EditorialQuote from "@/components/ui/EditorialQuote";
import MetadataLabel from "@/components/ui/MetadataLabel";
import HairlineDivider from "@/components/ui/HairlineDivider";
import PillButton from "@/components/ui/PillButton";
import AuroraBackground from "@/components/ui/AuroraBackground";

// ============================================================
// CASE PAGE — template padrao: Hero / Contexto / Desafio /
// Solucao / Resultado / CTA. Conteudo vem de content/cases.
// ============================================================

type Params = { slug: string };

export async function generateStaticParams(): Promise<Params[]> {
  return Object.keys(cases).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>;
}): Promise<Metadata> {
  const { slug } = await params;
  const c = cases[slug];
  if (!c) return { title: "Case não encontrado — Solvy" };
  return {
    title: `${c.hero.title} — Solvy`,
    description: c.hero.tagline,
    openGraph: {
      title: c.hero.title,
      description: c.hero.tagline,
      images: [{ url: c.hero.heroImage }],
    },
  };
}

export default async function CasePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { slug } = await params;
  const c = cases[slug];
  if (!c) notFound();

  return (
    <article className="bg-bg">
      {/* HERO DO CASE */}
      <section className="relative overflow-hidden pt-40 pb-16 md:pt-48 md:pb-24">
        <AuroraBackground variant="subtle" />
        <Container className="relative">
          <Eyebrow>{c.hero.eyebrow}</Eyebrow>
          <MetadataLabel className="mt-2 block">
            {c.hero.category}
          </MetadataLabel>
          <DisplayHeading as="h1" size="mega" className="mt-6 max-w-4xl">
            {c.hero.title}
          </DisplayHeading>
          <div className="mt-8 max-w-2xl">
            <EditorialQuote>{c.hero.tagline}</EditorialQuote>
          </div>

          <div className="relative mt-20 aspect-[16/9] overflow-hidden rounded-xl bg-bg-2">
            <Image
              src={c.hero.heroImage}
              alt={c.hero.title}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1280px) 100vw, 1280px"
            />
          </div>
        </Container>
      </section>

      {/* CONTEXTO + DESAFIO (2 cols) */}
      <section className="py-24 md:py-32">
        <Container>
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-24">
            <div>
              <DisplayHeading as="h2" size="headline">
                {c.contexto.headline}
              </DisplayHeading>
              <p className="mt-8 text-lg leading-relaxed text-muted">
                {c.contexto.description}
              </p>
            </div>
            <div>
              <DisplayHeading as="h2" size="headline">
                {c.desafio.headline}
              </DisplayHeading>
              <ul className="mt-8 space-y-4">
                {c.desafio.points.map((p) => (
                  <li
                    key={p}
                    className="flex gap-4 border-t border-faint/20 pt-4 text-lg text-fg/90"
                  >
                    <span className="text-blue-light">·</span>
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <HairlineDivider />

      {/* SOLUCAO */}
      <section className="py-24 md:py-32">
        <Container>
          <DisplayHeading as="h2" size="display">
            {c.solucao.headline}
          </DisplayHeading>
          <div className="mt-12 grid grid-cols-1 gap-16 md:grid-cols-3 md:gap-12">
            <div className="md:col-span-2">
              <p className="text-lg leading-relaxed text-muted">
                {c.solucao.description}
              </p>
            </div>
            <aside>
              <MetadataLabel>Stack</MetadataLabel>
              <ul className="mt-4 space-y-2">
                {c.solucao.stack.map((t) => (
                  <li
                    key={t}
                    className="text-sm uppercase tracking-[0.14em] text-fg"
                  >
                    {t}
                  </li>
                ))}
              </ul>
            </aside>
          </div>

          {/* mockups */}
          {c.solucao.mockups.length > 0 && (
            <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
              {c.solucao.mockups.map((m, i) => (
                <div
                  key={m + i}
                  className="relative aspect-[16/10] overflow-hidden rounded-xl border border-faint/20 bg-bg-2"
                >
                  <Image
                    src={m}
                    alt={`${c.hero.title} mockup ${i + 1}`}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
              ))}
            </div>
          )}
        </Container>
      </section>

      <HairlineDivider />

      {/* RESULTADO */}
      <section className="py-24 md:py-32">
        <Container>
          <DisplayHeading as="h2" size="display">
            {c.resultado.headline}
          </DisplayHeading>

          <dl className="mt-16 grid grid-cols-1 gap-12 md:grid-cols-3">
            {c.resultado.stats.map((s) => (
              <div key={s.label}>
                <dt className="font-display text-5xl font-medium text-fg md:text-6xl">
                  {s.number}
                </dt>
                <dd className="mt-2 text-sm uppercase tracking-[0.14em] text-muted">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>

          {c.resultado.quote && (
            <figure className="mt-20 max-w-3xl">
              <EditorialQuote size="large" as="blockquote">
                “{c.resultado.quote.text}”
              </EditorialQuote>
              <figcaption className="mt-6">
                <MetadataLabel>
                  {c.resultado.quote.author} · {c.resultado.quote.role}
                </MetadataLabel>
              </figcaption>
            </figure>
          )}
        </Container>
      </section>

      <HairlineDivider />

      {/* CTA */}
      <section className="py-24 md:py-32">
        <Container className="text-center">
          <DisplayHeading as="h2" size="headline" className="mx-auto max-w-2xl">
            Tem um projeto parecido?
          </DisplayHeading>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <PillButton href="/#contato">Falar sobre meu projeto</PillButton>
            <Link
              href="/#cases"
              className="text-sm uppercase tracking-[0.18em] text-muted transition-colors hover:text-fg"
            >
              Ver mais cases
            </Link>
          </div>
        </Container>
      </section>
    </article>
  );
}
