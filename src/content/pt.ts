/**
 * Conteudo PT — voz Solvy (brief 3: reposicionado pra decisor B2B, ticket alto).
 * Eixo publico: "O software cabe na operacao." Leitor-alvo: decisor (dono,
 * diretor, gestor de operacao madura) — nao o micro-empreendedor envergonhado.
 * USA: gargalo, operacao, processo, ferramenta, encaixe, realidade, fluxo,
 * controle, sob medida, caber, improviso, sistema proprio, escala,
 * continuidade, operacao madura, previsivel, risco.
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
    titleTop: "Sua operação não se adapta ao software.",
    titleBottom: "O software cabe na sua operação.",
    sub: "A Solvy constrói sistemas sob medida para operações que já escalaram além da ferramenta genérica — onde cada contorno manual vira risco e cada processo na cabeça de uma pessoa vira gargalo.",
    ctaPrimary: "Falar sobre meu projeto",
    ctaSecondary: "Ver como trabalhamos",
  },

  problem: {
    label: "O problema",
    title: "Quando a operação escala, o improviso vira risco.",
    body: "A planilha que resolvia tudo vira ponto único de falha. O sistema pronto exige contornos que ninguém documenta. A informação se espalha. E a operação passa a depender de pessoas específicas — não de um sistema em que dá pra confiar.",
    items: [
      {
        title: "Planilha que virou sistema",
        desc: "O controle crítico da operação roda numa planilha que ninguém pode derrubar — e que não escala junto.",
      },
      {
        title: "Processo manual que consome o dia",
        desc: "Horas da equipe vão pra tarefa repetida que um sistema faria sozinho — e que só cresce com a operação.",
      },
      {
        title: "Ferramenta pronta que não encaixa",
        desc: "O software genérico obriga a operação a se moldar a ele. Você adapta o processo à ferramenta, não o contrário.",
      },
      {
        title: "Sistema caro cheio de contorno",
        desc: "Licença cara e, mesmo assim, uma camada de contornos manuais pra ele servir na rotina real.",
      },
      {
        title: "Informação espalhada",
        desc: "Dados em planilhas, e-mails e mensagens. Nenhuma fonte única, nenhuma leitura confiável pra decidir.",
      },
      {
        title: "Operação dependente de pessoas",
        desc: "O conhecimento vive na cabeça de quem opera, não no sistema. Quando essa pessoa falta, a operação trava.",
      },
    ],
  },

  thesis: {
    label: "A virada",
    title:
      "Software sob medida não começa pela tecnologia. Começa pelo entendimento da operação.",
    body: "Antes de tela, stack ou funcionalidade, a Solvy mapeia como a operação roda, onde ela trava sob carga e o que precisa existir pra ela escalar sem depender de improviso. A tecnologia vem depois — e por isso encaixa.",
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

  proof: {
    label: "Prova",
    title: "Projetos no ar, operação real.",
    stats: [
      {
        value: 12000,
        suffix: "+",
        label: "inscritos processados em eventos que construímos",
      },
      { value: 6, suffix: "", label: "plataformas em produção" },
      {
        value: 99.9,
        suffix: "%",
        label: "uptime nas aplicações que sustentamos",
      },
      {
        value: 15,
        suffix: " anos",
        label: "de experiência no comando do projeto",
      },
    ],
    note: "Números ilustrativos — substituir pelos reais.",
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
    title: "Software pronto resolve até certo ponto. Depois, vira o gargalo que segura a operação.",
    generic: {
      heading: "Software genérico",
      points: [
        "Obriga a operação a se moldar",
        "Ignora suas exceções",
        "Acumula contornos manuais",
        "Resolve pela metade",
        "Vira mais uma camada pra manter",
        "A operação trabalha pro sistema",
      ],
    },
    custom: {
      heading: "Software sob medida",
      points: [
        "Parte da operação real",
        "Absorve as exceções",
        "Reduz retrabalho e risco",
        "Centraliza o fluxo e o controle",
        "Escala junto com a empresa",
        "O sistema trabalha pra operação",
      ],
    },
  },

  founders: {
    label: "Dois sócios técnicos no projeto",
    title: "Você fala com quem pensa, desenha e constrói.",
    body: "O decisor fala direto com quem arquiteta e escreve o código. Sem esteira de camadas, sem telefone-sem-fio, sem terceirização. Menos intermediário é menos risco — e decisão técnica em horas, não em semanas.",
    people: [
      {
        name: "Pedro",
        role: "Designer-desenvolvedor sênior · 15 anos",
        desc: "Design, frontend, produto e a relação direta com quem decide.",
      },
      {
        name: "Neto",
        role: "Desenvolvedor backend",
        desc: "Arquitetura, infraestrutura e sistemas que aguentam carga.",
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
        situation: "“Minha operação trava quando alguém-chave falta.”",
        tool: "Um sistema próprio que tira o conhecimento da cabeça das pessoas e coloca na operação.",
      },
      {
        situation: "“Meu comercial roda no manual e eu não enxergo o funil.”",
        tool: "Uma ferramenta que organiza o funil e dá leitura do que está pra fechar.",
      },
      {
        situation: "“Minhas ferramentas não conversam e a equipe digita tudo duas vezes.”",
        tool: "Integrações que fazem os dados fluírem sem digitação dupla nem erro manual.",
      },
      {
        situation: "“Não tenho leitura em tempo real pra decidir.”",
        tool: "Um painel com a leitura real da operação, na hora da decisão.",
      },
      {
        situation: "“Tenho um produto digital pra tirar do papel e fazer direito.”",
        tool: "Um produto sob medida tirado do improviso, com visão de produto e engenharia.",
      },
      {
        situation: "“Meu sistema atual não acompanha mais o tamanho da empresa.”",
        tool: "Reconstrução ou evolução do que travou — sem recomeçar do zero à toa.",
      },
      {
        situation: "“Minha equipe gasta o dia em retrabalho que dava pra automatizar.”",
        tool: "Um sistema que trabalha a favor da operação, não contra ela.",
      },
      {
        situation: "“Meu processo vive em mensagem solta, sem rastro.”",
        tool: "Um sistema que dá forma e rastro ao processo, do início ao fim.",
      },
    ],
  },

  proposal: {
    label: "Método de proposta",
    title: "A gente não vende pacote de horas.",
    body: "Entendemos o que precisa ser construído, fechamos escopo, prazo e valor por escrito — e entregamos o sistema funcionando. Você paga por resultado em produção, não por hora no relógio.",
  },

  finalCta: {
    title: "Tem um processo crítico que ainda depende de improviso?",
    sub: "Conta como sua operação funciona hoje e onde ela trava. A gente devolve um caminho claro: o que dá pra construir, em quanto tempo e por quê.",
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
      success: "Recebido. Voltamos com um caminho claro: o que dá pra construir, prazo e valor.",
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
