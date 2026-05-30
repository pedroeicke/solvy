import { content } from "@/content";

// Mesma logo da Hero: SVG inline (ícone + wordmark) no viewBox 1403.32×384.62.
const ICON_A =
  "M299.71,134.71l.08,114.61c0,12.16-8.27,27.63-18.39,34.37l-96.5,64.25c-14.28,9.51-33.86,6.46-47.46-2.1l-15.66-9.85c-2.4-1.51-3.78-4.22-3.59-7.05.16-2.44,1.47-4.65,3.52-5.98l89.88-58.09,40.07-26.63c11.2-7.45,16.11-21.16,15.6-34.19-.5-12.82-7.51-25.18-18.99-32.04l-55.99-33.42c-12.63-7.54-13.34-29.2-1.73-38.72,12-9.84,24.84-17.42,37.78-25.85,3.95-2.57,9.03-2.63,12.98-.05l34.55,22.59c12.76,8.34,23.87,21.12,23.88,38.15Z";
const ICON_B =
  "M140.35,265.01c-.02-7.5-2.97-14.9-9.44-19.59-14.23-10.3-28.57-18.47-43.03-27.3-7.28-4.45-13.08-8.94-17.84-16.13-7.29-11.01-8.99-24.08-4.46-36.61,4.1-11.34,11.91-18.31,21.61-24.8l118.32-79.22c2.52-1.69,3.97-4.65,3.77-7.75v-.11c-.12-1.89-1.09-3.61-2.62-4.65l-14.61-9.94c-4.05-2.76-8.48-4.96-13.2-6.31-11.11-3.16-23.65-2.3-33.53,3.92L42.19,101.5c-12.72,8.01-23.66,19.48-23.65,36.07l.09,113.7c.01,14.52,10.36,25.17,21.29,31.93l46.28,28.63c2.88,1.78,5.99,1.87,8.69-.04l32.61-23.2c7.68-5.47,12.88-14.15,12.85-23.58Z";
const WORDMARK =
  "M570.26,190.52c-11.22-5.44-23.5-8.58-36.3-9.52l-58.28-4.26c-18.11-1.32-39.9-3.6-41.29-19.79-1.25-14.62,11.98-21.94,27.26-24.52,20.9-3.53,41.54-3.45,62.34.58,15.49,3,29.31,11.43,30.43,27.93l33.14-.02c.27-33.54-29.59-50.68-60.88-55.98-46.09-7.8-127.13-3.28-127.26,52.64-.08,34.34,32.14,44.47,63.57,46.72l61.61,4.41c12.88.92,29.96,4.83,32.78,15.35,9.31,34.79-63.9,33.5-96.23,27.5-8.5-1.58-15.9-5.07-22.81-9.7-4.7-5.34-6.88-11.29-8.1-18.98l-34.8-.04c.7,33.76,26.3,49.73,57.22,55.56,34.36,6.48,83.68,6.34,114.49-9.1,17.87-8.96,27.65-26.09,25.98-46.01-1.21-14.41-9.54-26.3-22.86-32.76ZM1114.9,107.5l37.52.12-88.98,170.11-38.54.39-54.2-102.86-35-67.77,38.23.1,70.53,138.72,42.46-83.64,27.99-55.18ZM872.14,32.48l35.26.04-.29,245.69-35.26-.04.29-245.69ZM1384.78,107.69l-13.15,27.84-80.62,164.43c-6.6,13.45-13.67,24.87-24.16,34.34-25.18,22.75-61.66,20.3-93.6,11.57l-.05-31.38c16.83,5.66,33.41,9.05,50.81,6,19.95-3.5,31.96-22.98,39.34-41.39l-88.4-171.41,38.12-.29,56.59,113.01,12.9,26.01,66.06-138.93,36.16.19ZM752.21,103.68c-35.23-4.57-76.74-.81-104.45,21.94-19.67,16.15-28.57,40.16-28.56,65.43.02,43.89,20.44,73.55,62.7,85.67,31.3,8.97,74.17,7.78,104.94-5.74,39.17-17.2,52.65-55.72,46.77-96.33-6.04-41.73-41.02-65.75-81.41-70.98ZM794.71,218.27c-14.55,35.56-66.05,39.49-100.33,29.88-16.29-4.56-30.06-15.39-35.53-31.57-5.1-15.09-5.15-31.66-.42-46.93,5.08-16.42,18.59-28.18,35.14-33.07,37.17-10.98,91.75-5.2,103.22,35.61,4.27,15.19,3.93,31.4-2.07,46.07Z";

// TODO(Pedro): trocar pelos links reais das redes do Solvy + WhatsApp
// (formato 55DDDNUMERO). Hoje estão como placeholder.
const WHATSAPP = "5500000000000";

// lucide-react removeu os ícones de marca → SVGs inline (currentColor).
function IconInstagram({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

function IconLinkedin({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.25 8h4.5V23H.25V8zm7.5 0h4.3v2.05h.06c.6-1.14 2.07-2.34 4.26-2.34 4.56 0 5.4 3 5.4 6.9V23h-4.5v-6.6c0-1.57-.03-3.6-2.2-3.6-2.2 0-2.54 1.72-2.54 3.49V23h-4.5V8z" />
    </svg>
  );
}

function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M.057 24l1.687-6.163a11.867 11.867 0 0 1-1.587-5.946C.16 5.335 5.495 0 12.05 0a11.82 11.82 0 0 1 8.413 3.488 11.82 11.82 0 0 1 3.48 8.414c-.003 6.557-5.338 11.892-11.893 11.892a11.9 11.9 0 0 1-5.688-1.448L.057 24zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884a9.86 9.86 0 0 0 1.51 5.26l-.999 3.648 3.978-1.207zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
    </svg>
  );
}

const socials = [
  { Icon: IconInstagram, href: "#", label: "Instagram" },
  { Icon: IconLinkedin, href: "#", label: "LinkedIn" },
  { Icon: IconWhatsApp, href: `https://wa.me/${WHATSAPP}`, label: "WhatsApp" },
];

export default function Footer() {
  const { footer, header } = content;
  return (
    <footer className="relative overflow-hidden rounded-t-[56px] border-t border-line bg-bg-2 text-fg">
      {/* Fundo: glow azul Solvy + véu pra costurar a base (sem imagem externa) */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute -bottom-1/3 left-1/2 h-[90%] w-[80%] -translate-x-1/2 rounded-[50%] bg-[radial-gradient(ellipse_at_center,rgba(0,167,244,0.14),transparent_62%)]" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
      </div>

      {/* Logo centralizada — só o wordmark "SOLVY" (SVG inline da Hero) */}
      <div className="flex justify-center px-6 pt-16 md:px-12 lg:px-20">
        <svg
          viewBox="350 25 1060 305"
          className="h-auto w-[min(90vw,640px)]"
          fill="#ffffff"
          aria-label="Solvy"
        >
          <path d={WORDMARK} />
        </svg>
      </div>

      {/* Links + slogan */}
      <div className="flex flex-col gap-10 px-6 py-10 md:flex-row md:items-start md:justify-between md:px-12 lg:px-20">
        <nav className="flex flex-col gap-3">
          {header.nav.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm tracking-wide text-muted transition-colors hover:text-fg"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contato"
            className="text-sm tracking-wide text-blue-light transition-colors hover:text-fg"
          >
            {header.cta}
          </a>
        </nav>

        <div className="display-tight text-right text-3xl font-semibold leading-tight tracking-tight text-fg md:text-4xl">
          <p>SOFTWARE QUE</p>
          <p>CABE NA SUA</p>
          <p>EMPRESA.</p>
        </div>
      </div>

      {/* Barra inferior — direitos (esq) · ícone (centro) · redes (dir) */}
      <div className="flex flex-col items-center gap-6 border-t border-line px-6 py-8 md:grid md:grid-cols-3 md:items-center md:px-12 lg:px-20">
        <p className="text-xs text-faint md:justify-self-start">
          {footer.rights}
        </p>

        <svg
          viewBox="0 0 320 384"
          className="h-12 w-auto md:justify-self-center"
          fill="#ffffff"
          aria-hidden="true"
        >
          <path d={ICON_A} />
          <path d={ICON_B} />
        </svg>

        <div className="flex items-center gap-3 md:justify-self-end">
          {socials.map(({ Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="flex h-12 w-12 items-center justify-center rounded-full border border-line bg-white/5 text-fg transition-colors hover:border-blue-light/60 hover:bg-white/10"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>
      </div>

      {/* Crédito */}
      <div className="border-t border-line py-4 text-center text-xs text-faint">
        © {new Date().getFullYear()} Solvy. {footer.founders}
      </div>
    </footer>
  );
}
