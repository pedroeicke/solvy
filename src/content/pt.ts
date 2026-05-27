/**
 * Conteudo PT — voz Solvy (brief 2, reposicionado).
 * Eixo publico: "O software precisa caber na sua empresa."
 * USA: gargalo, operacao, processo, rotina, ferramenta, encaixe, realidade,
 * fluxo, controle, sob medida, caber, improviso, sistema proprio.
 * NUNCA: dor, transformacao digital, inovacao, jornada, agil, premium, excelencia.
 *
 * i18n-ready: criar en.ts com o mesmo shape (SiteContent) e trocar em ./index.ts.
 */

export const pt = {
  meta: {
    title: "Solvy — Software que cabe na sua empresa",
    description:
      "Estúdio de software sob medida. A Solvy entende como sua operação funciona e constrói a ferramenta que cabe nela — não o contrário.",
  },

  header: {
    nav: [
      { label: "Método", href: "#metodo" },
      { label: "Construímos", href: "#construimos" },
      { label: "Cases", href: "#cases" },
      { label: "Processo", href: "#processo" },
    ],
    cta: "Falar sobre meu projeto",
  },

  hero: {
    eyebrow: "Estúdio de software sob medida · Conduzido por dois sócios técnicos",
    titleTop: "Sua empresa não precisa se adaptar ao software.",
    titleBottom: "O software precisa caber na sua empresa.",
    sub: "A Solvy cria sistemas sob medida para empresas que precisam substituir improvisos, planilhas e ferramentas genéricas por uma solução pensada para a operação real.",
    ctaPrimary: "Falar sobre meu projeto",
    ctaSecondary: "Ver como trabalhamos",
  },

  problem: {
    label: "O problema",
    title: "Quando a operação cresce, o improviso começa a cobrar conta.",
    body: "A planilha que resolvia tudo começa a travar o processo. O sistema pronto exige contornos demais. As informações ficam espalhadas. E o controle passa a depender de pessoas específicas — não de uma ferramenta confiável.",
    items: [
      {
        title: "Planilha que virou sistema",
        desc: "O que era um controle simples virou o coração da operação — frágil e sem dono.",
      },
      {
        title: "Processo manual que consome o dia",
        desc: "Tarefas repetidas na mão tomam horas que deveriam ser da operação.",
      },
      {
        title: "Ferramenta pronta que não encaixa",
        desc: "O sistema genérico obriga a equipe a se adaptar a ele, não o contrário.",
      },
      {
        title: "Sistema caro cheio de contorno",
        desc: "Você paga caro e ainda precisa de gambiarra pra ele servir na rotina.",
      },
      {
        title: "Informação espalhada",
        desc: "Dados em planilhas, e-mails e mensagens, sem um lugar único e confiável.",
      },
      {
        title: "Operação dependente de pessoas",
        desc: "Se a pessoa certa falta, o processo trava — o conhecimento não está na ferramenta.",
      },
    ],
  },

  // "A virada" (thesis) foi absorvida pelo Manifesto + Method.
  // Mantido aqui pra retrocompatibilidade com ThesisSection que pode ainda
  // estar referenciado em algum lugar - mas no page.tsx novo nao usa mais.
  thesis: {
    label: "A virada",
    title:
      "Uma ferramenta sob medida não começa pela tecnologia. Começa pelo entendimento da operação.",
    body: "Antes de escolher tela, stack ou funcionalidade, a Solvy entende como sua empresa trabalha, onde o processo trava e o que precisa ser construído para o sistema fazer sentido na rotina.",
    highlight: "entendimento da operação",
  },

  manifesto: {
    preface: "Você não deve se adaptar ao software.",
    headline: "O software deve se adaptar a você.",
    highlight: "você",
    subhead: "Software sob medida. Feito para sua operação.",
  },

  metodo: {
    eyebrow: "Método",
    headline: "Como a Solvy trabalha",
    subhead:
      "Antes da primeira linha de código, vêm 4 conversas. Software sob medida não começa pela tecnologia — começa pelo entendimento da operação.",
    items: [
      {
        number: "01",
        title: "Quem decide está na sala",
        description:
          "Arquitetura, código e produto saem da mesma cabeça. Decisões técnicas acontecem em horas, não em sprints.",
      },
      {
        number: "02",
        title: "Código que dura mais que o contrato",
        description:
          "Stack moderna, documentada, manutenível. Vocês não ficam reféns de quem escreveu.",
      },
      {
        number: "03",
        title: "Escopo claro, evolução real",
        description:
          "Priorização prática, entregas iterativas e decisões transparentes do início ao fim.",
      },
      {
        number: "04",
        title: "Construção com parceria",
        description:
          "Você fala com quem resolve. Ajustes, decisões e alinhamento sem ruído.",
      },
    ],
    editorial:
      "Não é cult de metodologia. É o que sobrevive depois de 15 anos entregando projetos.",
    closing: "Cada projeto começa com uma conversa franca.",
    cta: { label: "Falar sobre meu projeto", href: "#contato" },
  },

  interludio1: {
    imageAlt:
      "Artesão concentrado em ofício, fotografado em luz cinematográfica",
    image: "/photos/interlude-1.jpg",
    quote: "Não há atalho pro ofício. Há método.",
    attribution: "— Solvy",
  },

  interludio2: {
    imageAlt: "Mãos trabalhando em código, fotografadas em luz editorial",
    image: "/photos/interlude-2.jpg",
    quote: "Quem entrega é quem decide.",
  },

  processo: {
    eyebrow: "Processo",
    headline: "Seis etapas. Sem mistério.",
    etapas: [
      {
        numero: "01",
        titulo: "Escuta",
        duracao: "1 semana",
        descricao: "Conversa pra entender como a operação funciona hoje.",
      },
      {
        numero: "02",
        titulo: "Diagnóstico",
        duracao: "1-2 semanas",
        descricao: "Análise do gargalo e do fluxo real.",
      },
      {
        numero: "03",
        titulo: "Escopo",
        duracao: "1 semana",
        descricao: "O que entra, o que fica fora, prazo e valor.",
      },
      {
        numero: "04",
        titulo: "Build",
        duracao: "4-16 semanas",
        descricao:
          "Design e engenharia juntos, do primeiro ao último commit.",
      },
      {
        numero: "05",
        titulo: "Deploy",
        duracao: "1 semana",
        descricao: "Entrega em produção, pronta pra uso.",
      },
      {
        numero: "06",
        titulo: "Sustentação",
        duracao: "Contrato à parte",
        descricao: "Manutenção e evolução, quando fizer sentido.",
        opcional: true,
      },
    ],
    closing: "Cronograma real, validado em escopo escrito.",
  },

  stack: {
    eyebrow: "Como construímos",
    principios: [
      "Stack moderna, sem hype.",
      "Code review, testes, observabilidade.",
      "Documentação que dura.",
    ],
    tecnologias: [
      "TypeScript",
      "Next.js",
      "React",
      "Supabase",
      "PostgreSQL",
      "Vercel",
      "AWS",
      "Docker",
    ],
    closing: "Tecnologia é meio. Não fim.",
  },

  socios: {
    eyebrow: "Quem",
    headline: "Você fala com quem pensa, desenha e constrói.",
    editorial:
      "Sem terceirização. Sem intermediário. Sem júnior tocando o que importa.",
    pessoas: [
      {
        nome: "Pedro",
        cargo: "Design, frontend e produto",
        bio: "15 anos construindo produtos digitais.",
        foto: "/team/pedro.jpg",
        linkedin: "https://linkedin.com/in/pedroeicke",
      },
      {
        nome: "Neto",
        cargo: "Backend, arquitetura e infraestrutura",
        bio: "Sistemas que escalam e duram.",
        foto: "/team/neto.jpg",
        linkedin: "https://linkedin.com",
      },
    ],
  },

  services: {
    label: "Construímos",
    title: "Projetos descritos pela função. Não pela stack.",
    intro:
      "Descrevemos cada projeto pela função que ele cumpre na operação — não pela tecnologia por trás.",
    items: [
      {
        icon: "sistemas-internos",
        title: "Sistemas internos",
        desc: "ERPs, controles e ferramentas operacionais sob medida.",
      },
      {
        icon: "plataformas-portais",
        title: "Plataformas e portais",
        desc: "Áreas logadas para clientes, equipes e parceiros.",
      },
      {
        icon: "dashboards",
        title: "Dashboards operacionais",
        desc: "Leitura em tempo real do que importa pra decisão.",
      },
      {
        icon: "automacoes",
        title: "Automações e integrações",
        desc: "Processos manuais que viram fluxo. Sistemas que conversam.",
      },
      {
        icon: "produtos-digitais",
        title: "Produtos digitais sob medida",
        desc: "SaaS, marketplaces e plataformas próprias.",
      },
      {
        icon: "recuperacao",
        title: "Recuperação de projetos",
        desc: "Sistemas legados ou travados. Retomamos o que parou.",
      },
    ],
  },

  process: {
    label: "Como trabalhamos",
    title: "Da escuta à sustentação.",
    steps: [
      {
        n: "01",
        name: "Escuta",
        desc: "Primeira conversa para entender como a operação funciona hoje.",
      },
      {
        n: "02",
        name: "Diagnóstico",
        desc: "Análise estruturada do gargalo, do fluxo e das necessidades reais.",
      },
      {
        n: "03",
        name: "Escopo",
        desc: "O que será construído, o que fica fora, prazo e valor.",
      },
      {
        n: "04",
        name: "Build",
        desc: "Desenvolvimento com visão de produto, design e engenharia juntos.",
      },
      {
        n: "05",
        name: "Deploy",
        desc: "Entrega em produção, pronta para uso.",
      },
      {
        n: "06",
        name: "Sustentação",
        desc: "Manutenção e evolução pós-entrega, quando fizer sentido.",
      },
    ],
  },

  comparison: {
    label: "Por que sob medida",
    title: "Software pronto resolve até certo ponto. Depois, ele vira o gargalo.",
    generic: {
      heading: "Software genérico",
      points: [
        "Obriga adaptação",
        "Ignora exceções",
        "Cria contornos",
        "Resolve pela metade",
        "Vira mais uma camada",
        "A empresa trabalha para o sistema",
      ],
    },
    custom: {
      heading: "Software sob medida",
      points: [
        "Parte da realidade",
        "Considera as exceções",
        "Reduz retrabalho",
        "Centraliza o fluxo",
        "Dá controle",
        "O sistema trabalha para a empresa",
      ],
    },
  },

  founders: {
    label: "Dois sócios técnicos no projeto",
    title: "Você fala com quem pensa, desenha e constrói.",
    body: "Na Solvy o projeto não passa por uma esteira cheia de camadas. Sem terceirização, sem intermediário, sem júnior tocando o que importa.",
    people: [
      {
        name: "Pedro",
        role: "Designer-desenvolvedor sênior · 15 anos",
        desc: "Design, frontend, produto e relação com o cliente.",
      },
      {
        name: "Neto",
        role: "Desenvolvedor backend",
        desc: "Arquitetura técnica, infraestrutura e backend.",
      },
    ],
  },

  portfolio: {
    // Aliases legados (PortfolioSection antigo). Cases.tsx novo usa eyebrow/headline.
    label: "Projetos",
    title: "O trabalho fala por si.",
    eyebrow: "Projetos",
    headline: "O trabalho fala por si.",
    body: "Sites institucionais, páginas de venda, plataformas SaaS. Cada caso foi pensado pela função que precisava cumprir — apresentar, vender, captar, demonstrar — e construído pra cumprir.",
    featured: {
      slug: "pregoeiros-summit",
      name: "Pregoeiros Summit",
      role: "Evento · Compras públicas",
      tagline:
        "Página de vendas e checkout integrado do maior evento de compras públicas do Brasil.",
      stats: [
        { number: "1.200+", label: "Inscritos no primeiro ano" },
        { number: "R$ 850k", label: "Faturamento em vendas online" },
        { number: "94%", label: "Conclusão de checkout" },
      ],
      src: "/cases/eeeb53776dc7e8529526a32d8eea6ee2.png",
      alt: "Página de vendas do Pregoeiros Summit construída pela Solvy",
      href: "/cases/pregoeiros-summit",
    },
    items: [
      {
        slug: "ceap-brasil",
        name: "CEAP Brasil",
        role: "Institucional · Educação",
        description:
          "Site, cursos e captação organizada.",
        href: "/cases/ceap-brasil",
        src: "/cases/bc26980ab4de0726dc4bb292f6fb3254.png",
        alt: "Site institucional CEAP Brasil construído pela Solvy",
      },
      {
        slug: "legisativo",
        name: "Plataforma LegisAtivo",
        role: "SaaS · Legislativo",
        description: "Plataforma SaaS legislativa com funil qualificado.",
        href: "/cases/legisativo",
        src: "/cases/e9e225e8665a89311cc35fa071e62ab3.png",
        alt: "Página da Plataforma LegisAtivo construída pela Solvy",
      },
      {
        slug: "cavalos-marinhos",
        name: "Projeto Cavalos-Marinhos",
        role: "Científico · Divulgação",
        description: "Apresentação e captação de apoiadores.",
        href: "/cases/cavalos-marinhos",
        src: "/cases/c68e9dc1d220af2fb5358fe9bb30e787.png",
        alt: "Site do Projeto Cavalos-Marinhos construído pela Solvy",
      },
      {
        slug: "secomp-rj",
        name: "SECOMP RJ",
        role: "Evento acadêmico · Inscrições",
        description: "Inscrições e programação do evento.",
        href: "/cases/secomp-rj",
        src: "/cases/Generated%20Image%20November%2016,%202025%20-%201_37PM.png",
        alt: "Página da SECOMP RJ construída pela Solvy",
      },
      {
        slug: "villa-das-alamandas",
        name: "Villa das Alamandas",
        role: "Hospedagem · Reservas",
        description: "Apresentação e reserva direta.",
        href: "/cases/villa-das-alamandas",
        src: "/cases/9cb47ef2cd7d02cbd918ad9d8de8316a.png",
        alt: "Site da Villa das Alamandas construído pela Solvy",
      },
    ],
  },

  projectTypes: {
    label: "Tipos de projeto",
    title: "Se você se reconhece aqui, dá pra resolver.",
    items: [
      {
        situation: "“Dependo de planilhas demais.”",
        tool: "Um sistema próprio que centraliza o que hoje está espalhado.",
      },
      {
        situation: "“Meu processo comercial está manual.”",
        tool: "Uma ferramenta que organiza o funil e tira o controle da cabeça das pessoas.",
      },
      {
        situation: "“Tenho ferramentas que não conversam.”",
        tool: "Integrações que fazem os dados fluírem sem digitação dupla.",
      },
      {
        situation: "“Preciso de um painel pra controlar a operação.”",
        tool: "Um dashboard com a leitura real do que está acontecendo.",
      },
      {
        situation: "“Tenho uma ideia presa no improviso.”",
        tool: "Um produto digital tirado do papel com visão de produto e técnica.",
      },
      {
        situation: "“Meu sistema não acompanha mais a empresa.”",
        tool: "Reorganização ou reconstrução do que travou.",
      },
      {
        situation: "“Minha equipe faz retrabalho.”",
        tool: "Uma ferramenta que trabalha a favor da operação, não contra.",
      },
      {
        situation: "“Meu fluxo vive em mensagens soltas.”",
        tool: "Um sistema que dá forma ao processo.",
      },
    ],
  },

  proposal: {
    label: "Método de proposta",
    title: "A gente não vende pacote de horas.",
    body: "Entendemos o que precisa ser construído, organizamos o escopo, definimos prazo e valor — e trabalhamos para entregar a ferramenta funcionando. O foco é a entrega, não o relógio.",
  },

  finalCta: {
    title: "Tem um processo que precisa virar ferramenta?",
    sub: "Conta como sua operação funciona. A gente diz o que dá pra construir.",
    ctaPrimary: "Falar sobre meu projeto",
    ctaSecondary: "Falar no WhatsApp",
    logoWallLabel: "Confiam na Solvy",
    logos: [
      { name: "CEAP Brasil", file: "/logos/ceap.svg" },
      { name: "Pregoeiros Summit", file: "/logos/pregoeiros.svg" },
      { name: "Instituto Plenum", file: "/logos/plenum.svg" },
      { name: "Cavalos-Marinhos", file: "/logos/cavalos-marinhos.svg" },
      { name: "SECOMP RJ", file: "/logos/secomp-rj.svg" },
    ],
  },

  contact: {
    form: {
      name: "Seu nome",
      company: "Empresa",
      email: "E-mail",
      message: "Como sua operação funciona hoje e onde ela trava?",
      submit: "Falar sobre meu projeto",
      whatsapp: "Falar no WhatsApp",
      success: "Recebido. A gente volta com um caminho claro em breve.",
    },
  },

  footer: {
    tagline: "Software que cabe na sua empresa.",
    line: "Estúdio brasileiro de software sob medida. Feito para a sua empresa — não para qualquer empresa.",
    founders: "Conduzido por Pedro e Neto, sócios técnicos.",
    rights: "Todos os direitos reservados.",
  },
} as const;

export type SiteContent = typeof pt;
