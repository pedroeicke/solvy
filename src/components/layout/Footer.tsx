import Image from "next/image";
import { content } from "@/content";
import Container from "@/components/ui/Container";
import EditorialQuote from "@/components/ui/EditorialQuote";
import HairlineDivider from "@/components/ui/HairlineDivider";
import MetadataLabel from "@/components/ui/MetadataLabel";

// ============================================================
// FOOTER EDITORIAL — 4 colunas (Marca / Site / Contato / Social).
// Texto pequeno, hairlines, fechamento com Newsreader italic.
// ============================================================

const siteNav = [
  { label: "Manifesto", href: "#manifesto" },
  { label: "Método", href: "#metodo" },
  { label: "Construímos", href: "#construimos" },
  { label: "Cases", href: "#cases" },
  { label: "Processo", href: "#processo" },
  { label: "Quem", href: "#socios" },
  { label: "Stack", href: "#stack" },
];

const social = [
  {
    label: "LinkedIn",
    href: "https://linkedin.com/company/solvy",
  },
  { label: "Instagram", href: "https://instagram.com" },
];

const contato = [
  { label: "hello@solvy.com", href: "mailto:hello@solvy.com" },
  { label: "WhatsApp", href: "#contato" },
];

export default function Footer() {
  const { footer } = content;

  return (
    <footer className="relative overflow-hidden border-t border-faint/20 bg-bg-2 py-20 md:py-28">
      <Container>
        <div className="grid grid-cols-2 gap-12 md:grid-cols-4">
          {/* Marca */}
          <div className="col-span-2 md:col-span-1">
            <Image
              src="/brand/logobranca.png"
              alt="Solvy"
              width={140}
              height={40}
              className="h-9 w-auto"
            />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted">
              {footer.line}
            </p>
            <MetadataLabel className="mt-8 block">
              São Paulo · Brasil
            </MetadataLabel>
          </div>

          {/* Site */}
          <div>
            <MetadataLabel>Site</MetadataLabel>
            <ul className="mt-4 space-y-2">
              {siteNav.map((l) => (
                <li key={l.href}>
                  <a
                    href={l.href}
                    className="text-sm text-fg/80 transition-colors hover:text-fg"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contato */}
          <div>
            <MetadataLabel>Contato</MetadataLabel>
            <ul className="mt-4 space-y-2">
              {contato.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm text-fg/80 transition-colors hover:text-fg"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <MetadataLabel>Social</MetadataLabel>
            <ul className="mt-4 space-y-2">
              {social.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-fg/80 transition-colors hover:text-fg"
                  >
                    {l.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <HairlineDivider className="mt-16" />

        <div className="mt-8 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
          <p className="text-xs uppercase tracking-[0.14em] text-faint">
            © {new Date().getFullYear()} Solvy. {footer.founders}
          </p>
          <EditorialQuote className="!text-faint">
            Software sob medida.
          </EditorialQuote>
        </div>
      </Container>
    </footer>
  );
}
