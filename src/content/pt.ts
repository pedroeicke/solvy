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
      { label: "O problema", href: "#problema" },
      { label: "O que fazemos", href: "#servicos" },
      { label: "Como trabalhamos", href: "#processo" },
      { label: "Por que Solvy", href: "#comparacao" },
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

  thesis: {
    label: "A virada",
    title:
      "Uma ferramenta sob medida não começa pela tecnologia. Começa pelo entendimento da operação.",
    body: "Antes de escolher tela, stack ou funcionalidade, a Solvy entende como sua empresa trabalha, onde o processo trava e o que precisa ser construído para o sistema fazer sentido na rotina.",
    highlight: "entendimento da operação",
  },

  services: {
    label: "O que a gente constrói",
    title: "Projetos descritos pela função, não pela stack.",
    intro:
      "Descrevemos cada projeto pela função que ele cumpre na operação — não pela tecnologia por trás.",
    items: [
      {
        title: "Sistemas internos",
        desc: "Organizam o que hoje vive em planilha e na cabeça das pessoas.",
      },
      {
        title: "Dashboards operacionais",
        desc: "Dão a leitura real do que está acontecendo na operação.",
      },
      {
        title: "Automações de processo",
        desc: "Tiram o trabalho repetitivo do caminho da equipe.",
      },
      {
        title: "Integrações entre ferramentas",
        desc: "Fazem sistemas separados conversarem, sem digitação dupla.",
      },
      {
        title: "Portais para clientes e equipes",
        desc: "Centralizam o que hoje se resolve por mensagem solta.",
      },
      {
        title: "Produtos digitais sob medida",
        desc: "Tiram a ideia do improviso com visão de produto e técnica.",
      },
      {
        title: "Recuperação de projetos",
        desc: "Reorganizam ou reconstroem o que travou no meio do caminho.",
      },
      {
        title: "Substituição de planilhas críticas",
        desc: "Trocam o controle frágil por uma ferramenta confiável.",
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
    label: "Projetos entregues",
    title: "O trabalho fala por si.",
    body: "Sites institucionais, páginas de venda, plataformas SaaS. Cada caso foi pensado pela função que precisava cumprir — apresentar, vender, captar, demonstrar — e construído pra cumprir.",
    items: [
      {
        name: "CEAP Brasil",
        role: "Institucional · Educação",
        description:
          "Site institucional com agenda de cursos, eventos e captação organizada de inscritos.",
        href: "",
        src: "/cases/bc26980ab4de0726dc4bb292f6fb3254.png",
        alt: "Site institucional CEAP Brasil construído pela Solvy",
      },
      {
        name: "Projeto Cavalos-Marinhos",
        role: "Projeto científico · Divulgação",
        description:
          "Apresentação do projeto, divulgação científica e canal direto pra captação de apoiadores.",
        href: "",
        src: "/cases/c68e9dc1d220af2fb5358fe9bb30e787.png",
        alt: "Site do Projeto Cavalos-Marinhos construído pela Solvy",
      },
      {
        name: "Plataforma LegisAtivo",
        role: "SaaS · Legislativo",
        description:
          "Demonstração do sistema legislativo e funil organizado de leads qualificados para o time comercial.",
        href: "",
        src: "/cases/e9e225e8665a89311cc35fa071e62ab3.png",
        alt: "Página da Plataforma LegisAtivo construída pela Solvy",
      },
      {
        name: "Villa das Alamandas",
        role: "Hospedagem · Reservas",
        description:
          "Apresentação do espaço, destaque da experiência premium e canal de reserva direta sem intermediário.",
        href: "",
        src: "/cases/9cb47ef2cd7d02cbd918ad9d8de8316a.png",
        alt: "Site da Villa das Alamandas construído pela Solvy",
      },
      {
        name: "Pregoeiros Summit",
        role: "Evento · Compras públicas",
        description:
          "Página de vendas do maior evento de compras públicas do Brasil — programação, pacotes e checkout integrado.",
        href: "",
        src: "/cases/eeeb53776dc7e8529526a32d8eea6ee2.png",
        alt: "Página de vendas do Pregoeiros Summit construída pela Solvy",
      },
      {
        name: "SECOMP RJ",
        role: "Evento acadêmico · Inscrições",
        description:
          "Inscrições, programação e apresentação dos módulos do evento acadêmico, com fluxo claro para o participante.",
        href: "",
        src: "/cases/Generated%20Image%20November%2016,%202025%20-%201_37PM.png",
        alt: "Página da SECOMP RJ construída pela Solvy",
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
    sub: "Quando a operação começa a depender do improviso, software sob medida deixa de ser luxo. Vamos entender como sua empresa funciona e construir o sistema que cabe nela.",
    ctaPrimary: "Falar sobre meu projeto",
    ctaSecondary: "Ver como trabalhamos",
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
