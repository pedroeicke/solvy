import Image from "next/image";
import { content } from "@/content";

export default function Footer() {
  const { footer, header } = content;
  return (
    <footer className="relative overflow-hidden border-t border-line bg-bg-2">
      <div className="pointer-events-none absolute -bottom-1/3 left-1/2 h-[90%] w-[80%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(0,167,244,0.12),transparent_62%)]" />

      <div className="relative mx-auto max-w-[1240px] px-6 py-20 md:px-10 md:py-28">
        <div className="flex flex-col gap-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-lg">
            <Image
              src="/brand/logobranca.png"
              alt="Solvy"
              width={180}
              height={50}
              className="h-11 w-auto md:h-14"
            />
            <p className="mt-8 display-tight text-huge text-fg">
              {footer.tagline}
            </p>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-muted">
              {footer.line}
            </p>
          </div>
          <nav className="flex flex-col gap-3">
            {header.nav.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted transition-colors hover:text-fg"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contato"
              className="text-sm text-blue-light transition-colors hover:text-fg"
            >
              {header.cta}
            </a>
          </nav>
        </div>

        <div className="mt-20 flex flex-col gap-2 border-t border-line pt-8 text-xs text-faint md:flex-row md:items-center md:justify-between">
          <span>{footer.founders}</span>
          <span>
            © {new Date().getFullYear()} Solvy. {footer.rights}
          </span>
        </div>
      </div>
    </footer>
  );
}
