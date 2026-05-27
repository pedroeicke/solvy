// ============================================================
// CASE CONTENT — uma entrada por case.
// Cada case tem hero + contexto + desafio + solucao + resultado.
// Placeholders ate Pedro preencher detalhes reais.
// ============================================================

export type CaseContent = {
  slug: string;
  hero: {
    eyebrow: string;
    category: string;
    title: string;
    tagline: string;
    heroImage: string;
  };
  contexto: { headline: string; description: string };
  desafio: { headline: string; points: string[] };
  solucao: {
    headline: string;
    description: string;
    stack: string[];
    mockups: string[];
  };
  resultado: {
    headline: string;
    stats: Array<{ number: string; label: string }>;
    quote?: { text: string; author: string; role: string };
  };
};

export const cases: Record<string, CaseContent> = {
  "pregoeiros-summit": {
    slug: "pregoeiros-summit",
    hero: {
      eyebrow: "Case",
      category: "Evento · Compras públicas",
      title: "Pregoeiros Summit",
      tagline:
        "Página de vendas, programação e checkout integrado do maior evento de compras públicas do Brasil.",
      heroImage: "/cases/eeeb53776dc7e8529526a32d8eea6ee2.png",
    },
    contexto: {
      headline: "O contexto",
      description:
        "[A preencher] Quem é o cliente, qual a operação, qual o desafio específico.",
    },
    desafio: {
      headline: "O problema",
      points: [
        "Página existente convertia pouco",
        "Checkout fragmentado entre fornecedores",
        "Sem analytics de funil",
      ],
    },
    solucao: {
      headline: "O que construímos",
      description:
        "[A preencher] Descrição da solução em 2-3 parágrafos.",
      stack: ["Next.js", "Supabase", "Stripe", "Vercel"],
      mockups: [
        "/cases/eeeb53776dc7e8529526a32d8eea6ee2.png",
      ],
    },
    resultado: {
      headline: "O resultado",
      stats: [
        { number: "1.200+", label: "Inscritos no primeiro ano" },
        { number: "R$ 850k", label: "Faturamento em vendas online" },
        { number: "94%", label: "Conclusão de checkout" },
      ],
    },
  },

  "ceap-brasil": {
    slug: "ceap-brasil",
    hero: {
      eyebrow: "Case",
      category: "Institucional · Educação",
      title: "CEAP Brasil",
      tagline:
        "Site institucional com agenda de cursos, eventos e captação organizada de inscritos.",
      heroImage: "/cases/bc26980ab4de0726dc4bb292f6fb3254.png",
    },
    contexto: {
      headline: "O contexto",
      description: "[A preencher]",
    },
    desafio: {
      headline: "O problema",
      points: [
        "[Pain point 1]",
        "[Pain point 2]",
        "[Pain point 3]",
      ],
    },
    solucao: {
      headline: "O que construímos",
      description: "[A preencher]",
      stack: ["Next.js", "Sanity"],
      mockups: ["/cases/bc26980ab4de0726dc4bb292f6fb3254.png"],
    },
    resultado: {
      headline: "O resultado",
      stats: [
        { number: "—", label: "[stat 1]" },
        { number: "—", label: "[stat 2]" },
        { number: "—", label: "[stat 3]" },
      ],
    },
  },

  legisativo: {
    slug: "legisativo",
    hero: {
      eyebrow: "Case",
      category: "SaaS · Legislativo",
      title: "Plataforma LegisAtivo",
      tagline:
        "Plataforma SaaS legislativa com funil organizado de leads qualificados.",
      heroImage: "/cases/e9e225e8665a89311cc35fa071e62ab3.png",
    },
    contexto: { headline: "O contexto", description: "[A preencher]" },
    desafio: {
      headline: "O problema",
      points: ["[Pain point 1]", "[Pain point 2]", "[Pain point 3]"],
    },
    solucao: {
      headline: "O que construímos",
      description: "[A preencher]",
      stack: ["Next.js", "PostgreSQL"],
      mockups: ["/cases/e9e225e8665a89311cc35fa071e62ab3.png"],
    },
    resultado: {
      headline: "O resultado",
      stats: [
        { number: "—", label: "[stat 1]" },
        { number: "—", label: "[stat 2]" },
        { number: "—", label: "[stat 3]" },
      ],
    },
  },

  "cavalos-marinhos": {
    slug: "cavalos-marinhos",
    hero: {
      eyebrow: "Case",
      category: "Científico · Divulgação",
      title: "Projeto Cavalos-Marinhos",
      tagline:
        "Apresentação do projeto, divulgação científica e canal direto pra captação de apoiadores.",
      heroImage: "/cases/c68e9dc1d220af2fb5358fe9bb30e787.png",
    },
    contexto: { headline: "O contexto", description: "[A preencher]" },
    desafio: {
      headline: "O problema",
      points: ["[Pain point 1]", "[Pain point 2]", "[Pain point 3]"],
    },
    solucao: {
      headline: "O que construímos",
      description: "[A preencher]",
      stack: ["Next.js"],
      mockups: ["/cases/c68e9dc1d220af2fb5358fe9bb30e787.png"],
    },
    resultado: {
      headline: "O resultado",
      stats: [
        { number: "—", label: "[stat 1]" },
        { number: "—", label: "[stat 2]" },
        { number: "—", label: "[stat 3]" },
      ],
    },
  },

  "secomp-rj": {
    slug: "secomp-rj",
    hero: {
      eyebrow: "Case",
      category: "Evento acadêmico · Inscrições",
      title: "SECOMP RJ",
      tagline:
        "Inscrições, programação e apresentação dos módulos do evento acadêmico.",
      heroImage:
        "/cases/Generated%20Image%20November%2016,%202025%20-%201_37PM.png",
    },
    contexto: { headline: "O contexto", description: "[A preencher]" },
    desafio: {
      headline: "O problema",
      points: ["[Pain point 1]", "[Pain point 2]", "[Pain point 3]"],
    },
    solucao: {
      headline: "O que construímos",
      description: "[A preencher]",
      stack: ["Next.js"],
      mockups: [
        "/cases/Generated%20Image%20November%2016,%202025%20-%201_37PM.png",
      ],
    },
    resultado: {
      headline: "O resultado",
      stats: [
        { number: "—", label: "[stat 1]" },
        { number: "—", label: "[stat 2]" },
        { number: "—", label: "[stat 3]" },
      ],
    },
  },

  "villa-das-alamandas": {
    slug: "villa-das-alamandas",
    hero: {
      eyebrow: "Case",
      category: "Hospedagem · Reservas",
      title: "Villa das Alamandas",
      tagline:
        "Apresentação do espaço, destaque da experiência premium e canal de reserva direta.",
      heroImage: "/cases/9cb47ef2cd7d02cbd918ad9d8de8316a.png",
    },
    contexto: { headline: "O contexto", description: "[A preencher]" },
    desafio: {
      headline: "O problema",
      points: ["[Pain point 1]", "[Pain point 2]", "[Pain point 3]"],
    },
    solucao: {
      headline: "O que construímos",
      description: "[A preencher]",
      stack: ["Next.js"],
      mockups: ["/cases/9cb47ef2cd7d02cbd918ad9d8de8316a.png"],
    },
    resultado: {
      headline: "O resultado",
      stats: [
        { number: "—", label: "[stat 1]" },
        { number: "—", label: "[stat 2]" },
        { number: "—", label: "[stat 3]" },
      ],
    },
  },
};
