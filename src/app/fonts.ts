import localFont from "next/font/local";
import { Newsreader, Plus_Jakarta_Sans } from "next/font/google";

// Molde Expanded — tipografia oficial Solvy.
// USO: somente DISPLAY (headlines text-giant/text-huge, ghost numbers, wordmark).
export const molde = localFont({
  variable: "--font-molde",
  display: "swap",
  src: [
    { path: "../../public/fonts/Molde-Expanded-Light.woff2", weight: "300", style: "normal" },
    { path: "../../public/fonts/Molde-Expanded-Regular.woff2", weight: "400", style: "normal" },
    { path: "../../public/fonts/Molde-Expanded-Medium.woff2", weight: "500", style: "normal" },
    { path: "../../public/fonts/Molde-Expanded-Semibold.woff2", weight: "600", style: "normal" },
    { path: "../../public/fonts/Molde-Expanded-Bold.woff2", weight: "700", style: "normal" },
    { path: "../../public/fonts/Molde-Expanded-Heavy.woff2", weight: "800", style: "normal" },
    { path: "../../public/fonts/Molde-Expanded-Black.woff2", weight: "900", style: "normal" },
  ],
});

// Plus Jakarta Sans (Google) — corpo, UI, navegacao, descricoes, forms, footer.
// Mantém a variável --font-tt-commons pra não mexer no resto do tema.
export const ttCommons = Plus_Jakarta_Sans({
  variable: "--font-tt-commons",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

// Newsreader — serif editorial premium (Google Fonts).
// USO: headlines no estilo "Zouti pegada" — frases declarativas, peso medium,
// tracking levemente negativo, leading apertado.
export const newsreader = Newsreader({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});
