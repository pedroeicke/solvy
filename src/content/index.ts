import { pt, type SiteContent } from "./pt";

// Locale ativo. Lancamento: somente PT.
// EN futuro: criar ./en.ts (shape SiteContent) + rota [locale]. Sem retrabalho de componente.
export const content: SiteContent = pt;
export const locale = "pt-BR";

export type { SiteContent };
