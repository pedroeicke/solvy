import { clsx, type ClassValue } from "clsx";
import { extendTailwindMerge } from "tailwind-merge";

// Tokens de tamanho custom do design system (globals.css @theme: --text-*).
// Sem isto, o tailwind-merge não reconhece `giant/mega/huge/lead` como
// font-size e os trata como cor, fazendo `text-giant text-fg` colapsar pra
// só `text-fg` (o título perde o tamanho). Registrando-os no grupo font-size,
// tamanho e cor passam a conviver.
const twMerge = extendTailwindMerge({
  extend: {
    classGroups: {
      "font-size": [{ text: ["mega", "giant", "huge", "lead"] }],
    },
  },
});

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
