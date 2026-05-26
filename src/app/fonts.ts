import localFont from "next/font/local";
import { Newsreader } from "next/font/google";

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

// TT Commons Pro — corpo, UI, navegacao, descricoes, forms, footer.
// NOTA: hoje so temos peso Regular (400). Pesos 500/600/700 serao sintetizados
// pelo browser (fake bold). Adicionar arquivos Medium/DemiBold/Bold quando
// disponiveis, em formato WOFF2 idealmente.
export const ttCommons = localFont({
  variable: "--font-tt-commons",
  display: "swap",
  src: [
    { path: "../../public/fonts/tt-commons-regular.ttf", weight: "400", style: "normal" },
  ],
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
