"use client";

import { useEffect, useState } from "react";

// Hook simples de media query. Começa false no SSR/1º render e atualiza
// após montar (evita divergência de hidratação). Usado pra desligar efeitos
// pesados/quebráveis no mobile/touch sem tocar no desktop.
export function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [query]);

  return matches;
}
