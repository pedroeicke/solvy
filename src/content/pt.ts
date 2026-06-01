/**
 * Conteudo PT, voz Solvy (brief 3: reposicionado para decisor B2B, ticket alto).
 * Eixo publico: "O software cabe na operacao." Leitor-alvo: decisor (dono,
 * diretor, gestor de operacao madura), nao o micro-empreendedor envergonhado.
 * USA: gargalo, operacao, processo, ferramenta, encaixe, realidade, fluxo,
 * controle, sob medida, caber, improviso, sistema proprio, escala,
 * continuidade, operacao madura, previsivel, risco.
 * NUNCA: dor, transformacao digital, inovacao, jornada, agil, premium, excelencia.
 *
 * i18n-ready: criar en.ts com o mesmo shape (SiteContent) e trocar em ./index.ts.
 */

export const pt = {
  meta: {
    title: "Solvy, Software que cabe na sua empresa",
    description:
      "Estúdio de software sob medida. A Solvy entende como sua operação funciona e constrói a ferramenta que cabe nela, não o contrário.",
  },

  header: {
    nav: [
      { label: "O que fazemos", href: "#servicos" },
      { label: "Como trabalhamos", href: "#metodo" },
      { label: "Projetos", href: "#portfolio" },
      { label: "Quem somos", href: "#socios" },
    ],
    cta: "Falar sobre meu projeto",
  },

  hero: {
    eyebrow: "Estúdio de software sob medida · Conduzido por dois sócios técnicos",
    titleTop: "Sua operação não se adapta ao software.",
    titleBottom: "O software cabe na sua operação.",
    sub: "A Solvy constrói sistemas sob medida para operações que já escalaram além da ferramenta genérica, onde cada contorno manual vira risco e cada processo na cabeça de uma pessoa vira gargalo.",
    ctaPrimary: "Falar sobre meu projeto",
    ctaSecondary: "Ver como trabalhamos",
  },

  problem: {
    label: "O problema",
    title: "Quando a operação escala, o improviso vira risco.",
    body: "A planilha que resolvia tudo vira ponto único de falha. O sistema pronto exige contornos que ninguém documenta. A informação se espalha. E a operação passa a depender de pessoas específicas, não de um sistema em que dá para confiar.",
    items: [
      {
        title: "Planilha que virou sistema",
        desc: "O controle crítico da operação roda numa planilha que ninguém pode derrubar, e que não escala junto.",
      },
      {
        title: "Processo manual que consome o dia",
        desc: "Horas da equipe vão para tarefa repetida que um sistema faria sozinho, e que só cresce com a operação.",
      },
      {
        title: "Ferramenta pronta que não encaixa",
        desc: "O software genérico obriga a operação a se moldar a ele. Você adapta o processo à ferramenta, não o contrário.",
      },
      {
        title: "Sistema caro cheio de contorno",
        desc: "Licença cara e, mesmo assim, uma camada de contornos manuais para ele servir na rotina real.",
      },
      {
        title: "Informação espalhada",
        desc: "Dados em planilhas, e-mails e mensagens. Nenhuma fonte única, nenhuma leitura confiável para decidir.",
      },
      {
        title: "Operação dependente de pessoas",
        desc: "O conhecimento vive na cabeça de quem opera, não no sistema. Quando essa pessoa falta, a operação trava.",
      },
    ],
  },

  thesis: {
    label: "Nosso movimento",
    title:
      "Software sob medida não começa pela tecnologia. Começa pelo entendimento da operação",
    body: "A Solvy não entrega código por hora. Entende como a operação roda, onde ela trava sob carga e o que precisa existir para ela escalar sem depender de improviso. A tecnologia vem depois, e por isso encaixa.",
    highlight: "entendimento da operação",
    stats: [
      { value: "+100", label: "Projetos publicados" },
      { value: "+15", label: "Anos de experiência" },
      { value: "100%", label: "Construído por quem decide" },
    ],
    note: "Números ilustrativos, Pedro ajusta depois.",
  },

  metodo: {
    label: "Método",
    title: "Como a Solvy trabalha",
    intro:
      "Quatro princípios que valem para todo projeto, do primeiro contato à entrega em produção. Menos intermediário, mais clareza, software que dura.",
    cta: "Falar sobre meu projeto",
    principios: [
      {
        n: "01",
        title: "Quem decide está na sala",
        desc: "Arquitetura, código e produto saem da mesma cabeça. Decisões técnicas acontecem em horas, não em sprints.",
        quote: "Sem intermediário entre a ideia e a entrega.",
        image: "/metodo/principio-01.png",
        iconIndex: 0,
      },
      {
        n: "02",
        title: "Código que dura mais que o contrato",
        desc: "Stack moderna, documentada, manutenível. Vocês não ficam reféns de quem escreveu.",
        quote: "Construído para durar, não para entregar e sumir.",
        image: "/metodo/principio-02.png",
        iconIndex: 1,
      },
      {
        n: "03",
        title: "Escopo claro, evolução real",
        desc: "Priorização prática, entregas iterativas e decisões transparentes do início ao fim.",
        quote: "Você sempre sabe onde o projeto está.",
        image: "/metodo/principio-03.png",
        iconIndex: 2,
      },
      {
        n: "04",
        title: "Construção com parceria",
        desc: "Você fala com quem resolve. Ajustes, decisões e alinhamento sem ruído.",
        quote: "Um time só, do briefing ao deploy.",
        image: "/metodo/principio-04.png",
        iconIndex: 3,
      },
    ],
  },

  services: {
    label: "O que construímos",
    title: "Descritos pelos problemas que resolvem, não pela tecnologia",
    intro: "Descritos pelos problemas que resolvem, não pela tecnologia.",
    items: [
      {
        title: "Sistema sob medida",
        iconIndex: 0,
        trigger:
          "Para quando a planilha virou o sistema da empresa, e já não dá conta.",
        desc: "O pedido entra por um canal, o pagamento confirma por outro, e a produção começa antes da hora, porque ninguém viu que o cliente ainda não pagou. Some um valor, ninguém sabe em qual etapa. Construímos o sistema onde cada estado conversa: o que foi pedido, o que foi pago, o que pode entrar em produção. Num lugar só, na regra da sua operação, não numa genérica que você passa o dia contornando.",
        result:
          "O estado real da operação à vista, sem perguntar para ninguém onde parou.",
      },
      {
        title: "Plataforma e produto digital",
        iconIndex: 1,
        trigger:
          "Para quando você não precisa de uma ferramenta interna, precisa de um produto.",
        desc: "Não é um sistema para sua equipe usar. É um produto que seus clientes acessam, cada um vendo só o que é dele, sem nunca esbarrar no dado do outro. A câmara que tramita projeto de lei com assinatura ICP-Brasil valendo no PDF. A escola que roda o curso inteiro com a marca dela, não com a nossa. Construímos a plataforma multiusuário inteira, e ela aguenta o centésimo cliente do mesmo jeito que aguentou o primeiro.",
        result:
          "Cada cliente isolado no que é dele, a base inteira sob seu controle.",
      },
      {
        title: "Automação e IA",
        iconIndex: 2,
        trigger:
          "Para quando a rotina repetida consome horas que deviam ser da operação.",
        desc: "O cliente manda áudio no WhatsApp às 23h perguntando preço. De manhã, o lead já está respondido, classificado e na fila certa, sem ninguém ter aberto o celular. Montamos atendentes de IA que entendem o contexto, qualificam e registram. E ligamos as ferramentas que hoje não se falam, para o trabalho de copiar de uma tela e colar na outra simplesmente sumir.",
        result: "A operação cuida do que importa; o repetível roda sozinho.",
      },
      {
        title: "Recuperação de projeto",
        iconIndex: 3,
        trigger: "Para quando o sistema travou no meio do caminho.",
        desc: "O fornecedor sumiu, o código não tem documentação, e mexer em qualquer coisa dá medo de quebrar o que ainda funciona. Assumimos o que existe: lemos o código herdado, documentamos o que estava só na cabeça de quem saiu, estabilizamos e devolvemos a evolução. Recomeçar do zero é caro e quase nunca necessário, só parece, quando ninguém entende mais o sistema.",
        result: "Você volta a evoluir o que já investiu, sem jogar fora.",
      },
      {
        title: "Site e landing",
        iconIndex: 4,
        trigger: "Para quando o lançamento não pode parecer template.",
        desc: "Não é tema de prateleira com a logo trocada. Construímos a interface do zero: animação que responde ao scroll, 3D rodando no navegador, tipografia editorial, e a página carregando rápido mesmo cheia de efeito. O site do evento que faz a pessoa parar antes de comprar o ingresso. A landing do produto que parece feita à mão, porque foi.",
        result: "A primeira impressão que não dá para comprar pronta.",
      },
    ],
  },

  proof: {
    label: "Solvy em números",
    title: "Operação real, no ar, em produção.",
    items: [
      {
        prefix: "+",
        value: 12000,
        suffix: "",
        unit: "Inscritos",
        desc: "Processados em plataformas de eventos que construímos.",
      },
      {
        prefix: "+",
        value: 6,
        suffix: "",
        unit: "Plataformas",
        desc: "Em produção, sustentadas pela Solvy.",
      },
      {
        prefix: "",
        value: 99.9,
        suffix: "%",
        unit: "Uptime",
        desc: "Disponibilidade nas aplicações que mantemos.",
      },
      {
        prefix: "+",
        value: 15,
        suffix: "",
        unit: "Anos",
        desc: "De experiência no comando do projeto.",
      },
    ],
    note: "Números ilustrativos, Pedro substitui pelos reais.",
  },

  trusted: {
    label: "Quem confia na Solvy",
    title: "Empresas e instituições que já construíram com a gente",
    // mono: true => filtro branco (logos escuros que sumiriam no fundo).
    // mono: false => mostra no original (ilustrações que ficam ruins em branco).
    logos: [
      { src: "/logos/logoceap.svg", alt: "CEAP Brasil", mono: true },
      { src: "/logos/logocavalos.svg", alt: "Projeto Cavalos-Marinhos", mono: true },
      { src: "/logos/logovilla.svg", alt: "Villa das Alamandas", mono: true },
      { src: "/logos/logolicito.svg", alt: "Licito Guru", mono: true },
      { src: "/logos/logoplataformafontep.svg", alt: "Fonte de Preços", mono: true },
      { src: "/logos/superlistab.png", alt: "Superlista", mono: false },
    ],
    note: "Logos reais de public/logos/. Ajustar a lista conforme os clientes oficiais a destacar.",
  },

  process: {
    label: "Como trabalhamos",
    title: "Da escuta à sustentação",
    intro:
      "Todo projeto segue o mesmo caminho, e você fala com quem constrói em cada etapa. Primeiro a gente entende a operação. Só então a tecnologia entra. É por isso que ela encaixa: foi pensada nessa ordem.",
    // 3 movimentos que agrupam os 6 passos (cada passo tem phase = key).
    movements: [
      {
        n: "01",
        key: "Entender",
        lead: "Antes de qualquer tela, a operação. A gente escuta e diagnostica como tudo funciona de verdade, e onde trava sob carga.",
      },
      {
        n: "02",
        key: "Construir",
        lead: "Só então a tecnologia entra. Escopo por escrito, build com produto e engenharia juntos, e entrega que vai pro ar.",
      },
      {
        n: "03",
        key: "Sustentar",
        lead: "Depois do ar, a ferramenta evolui junto com a operação, sem virar o próximo gargalo.",
      },
    ],
    steps: [
      {
        n: "01",
        phase: "Entender",
        name: "Escuta",
        desc: "Sentamos com quem opera e ouvimos como a coisa funciona de verdade hoje, não como o manual diz que deveria.",
        result: "Você fala com quem vai construir, desde a primeira conversa.",
      },
      {
        n: "02",
        phase: "Entender",
        name: "Diagnóstico",
        desc: "Mapeamos o gargalo real, o fluxo e onde a operação trava sob carga. Separamos o sintoma da causa.",
        result: "Clareza do problema antes de desenhar qualquer tela.",
      },
      {
        n: "03",
        phase: "Construir",
        name: "Escopo",
        desc: "O que será construído, o que fica de fora, prazo e valor, por escrito, sem letra miúda.",
        result: "Sem surpresa de escopo no meio do caminho.",
      },
      {
        n: "04",
        phase: "Construir",
        name: "Build",
        desc: "Produto, design e engenharia na mesma cabeça. Decisão técnica em horas, não em semanas de aprovação.",
        result: "Você acompanha a ferramenta tomar forma.",
      },
      {
        n: "05",
        phase: "Construir",
        name: "Deploy",
        desc: "No ar, integrado à rotina e testado sob a carga real da operação.",
        result: "Entra em produção, não para num slide.",
      },
      {
        n: "06",
        phase: "Sustentar",
        name: "Sustentação",
        desc: "Depois do ar, a ferramenta evolui junto com a operação. Manutenção e melhorias quando faz sentido.",
        result: "O sistema cresce com você, sem virar o próximo gargalo.",
      },
    ],
  },

  comparison: {
    label: "Por que sob medida",
    title: "Software pronto resolve até certo ponto. Depois, vira o gargalo que segura a operação.",
    generic: "Com software genérico, a operação trabalha pro sistema.",
    custom: "Sob medida, o sistema trabalha para você.",
  },

  founders: {
    label: "Quem constrói",
    title: "Você fala com quem pensa, desenha e constrói.",
    body: "O decisor fala direto com quem arquiteta e escreve o código. Sem esteira de camadas, sem telefone-sem-fio, sem terceirização. Menos intermediário é menos risco, e decisão técnica em horas, não em semanas.",
    people: [
      {
        name: "Pedro Augusto Eicke",
        role: "Cofundador · Design, produto e experiência",
        bio: "Neto e filho de publicitários da velha guarda, cresci vendo gente transformar ideia em realidade. Assinei a identidade visual da licito.guru, a maior IA de licitações do país.",
        work: "Aos 13 anos, fiz a direção de arte da premiação da Miró Propaganda. Atendi o setor público, como o CEAP Brasil, assinei a identidade do Pregoeiros Summit 2025 e, ao todo, já são mais de 40 sites publicados.",
        image: "/pedro.png",
        imagePos: "center top",
      },
      {
        name: "Neto",
        role: "Cofundador · Engenharia, arquitetura e infraestrutura",
        bio: "São mais de 20 anos empreendendo, tenho duas operações no ramo de alimentação. Como engenheiro de back-end, construo sabendo na pele o que é o sistema não poder parar no pico.",
        work: "Sou o engenheiro por trás da arquitetura, da infraestrutura e dos sistemas que aguentam carga. Garanto que tudo o que é desenhado funcione em produção, sob pressão, não só no slide.",
        image: "/neto.png",
        imagePos: "center 15%",
      },
    ],
    note: "Fotos placeholder, Pedro sobe as reais em public/founders/.",
  },

  testimonials: {
    label: "O que dizem",
    title: "Quem já construiu com a Solvy",
    items: [
      {
        quote:
          "Entenderam nossa operação antes de propor qualquer tela. O sistema encaixou na rotina sem retrabalho.",
        name: "Werson A.",
        role: "Diretor · Instituto Nêmesis",
      },
      {
        quote:
          "No ar no prazo, sem surpresa de escopo. Falamos direto com quem construiu o tempo todo.",
        name: "Beto / Alberto",
        role: "Operações · Instituto Nêmesis",
      },
      {
        quote:
          "Tirou nosso controle das planilhas e deu previsibilidade para operação crescer.",
        name: "Gestor de Produto",
        role: "Cliente Edu-tech",
      },
      {
        quote:
          "O evento processou milhares de inscritos sem cair. Checkout integrado, zero dor de cabeça.",
        name: "Organização",
        role: "Pregoeiros Summit",
      },
      {
        quote:
          "Não vendem hora, entregam ferramenta funcionando. A diferença se sente na operação.",
        name: "Secretaria Municipal",
        role: "Cliente B2G",
      },
      {
        quote:
          "Sênior de verdade do início ao fim. Sem júnior aprendendo no nosso projeto.",
        name: "Diretoria",
        role: "Empresa de Eventos",
      },
    ],
    note: "Depoimentos ILUSTRATIVOS, Pedro substitui por reais com autorização dos clientes.",
  },

  portfolio: {
    label: "Projetos entregues",
    title: "O trabalho fala por si",
    body: "Sites institucionais, páginas de venda, plataformas SaaS. Cada caso foi pensado pela função que precisava cumprir, apresentar, vender, captar, demonstrar, e construído para cumprir.",
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
          "Apresentação do projeto, divulgação científica e canal direto para captação de apoiadores.",
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
          "Página de vendas do maior evento de compras públicas do Brasil, programação, pacotes e checkout integrado.",
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
    title: "Se você se reconhece aqui, dá para resolver.",
    items: [
      {
        situation: "“Minha operação trava quando alguém-chave falta.”",
        tool: "Um sistema próprio que tira o conhecimento da cabeça das pessoas e coloca na operação.",
      },
      {
        situation: "“Meu comercial roda no manual e eu não enxergo o funil.”",
        tool: "Uma ferramenta que organiza o funil e dá leitura do que está para fechar.",
      },
      {
        situation: "“Minhas ferramentas não conversam e a equipe digita tudo duas vezes.”",
        tool: "Integrações que fazem os dados fluírem sem digitação dupla nem erro manual.",
      },
      {
        situation: "“Não tenho leitura em tempo real para decidir.”",
        tool: "Um painel com a leitura real da operação, na hora da decisão.",
      },
      {
        situation: "“Tenho um produto digital para tirar do papel e fazer direito.”",
        tool: "Um produto sob medida tirado do improviso, com visão de produto e engenharia.",
      },
      {
        situation: "“Meu sistema atual não acompanha mais o tamanho da empresa.”",
        tool: "Reconstrução ou evolução do que travou, sem recomeçar do zero à toa.",
      },
      {
        situation: "“Minha equipe gasta o dia em retrabalho que dava para automatizar.”",
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
    body: "Entendemos o que precisa ser construído, fechamos escopo, prazo e valor por escrito, e entregamos o sistema funcionando. Você paga por resultado em produção, não por hora no relógio.",
  },

  finalCta: {
    badge: "Queremos te ouvir",
    titleTop: "Operar no improviso ficou caro demais.",
    titleHighlight: "Está na hora do software que cabe na sua operação",
    sub: "Conte como sua empresa funciona hoje. Em 30 minutos a gente devolve um caminho claro, sem pacote de horas, sem enrolação.",
    perks: [
      "Mapeamos onde sua operação trava sob carga",
      "Um caminho claro: o que dá para construir, prazo e valor",
      "Você fala direto com um sócio, não com vendedor",
    ],
    reassurance: "Sem compromisso · Sem pacote de horas · Resposta em até 24h",
    formTitle: "Agende seu diagnóstico",
    ctaPrimary: "Agendar diagnóstico grátis",
    ctaSecondary: "Ver como trabalhamos",
  },

  contact: {
    form: {
      name: "Seu nome",
      company: "Empresa",
      email: "E-mail",
      message: "Como sua operação funciona hoje e onde ela trava?",
      submit: "Agendar diagnóstico grátis",
      whatsapp: "Falar no WhatsApp",
      success: "Recebido. Em até 24h voltamos com um caminho claro: o que dá para construir, prazo e valor.",
    },
  },

  footer: {
    tagline: "Software que cabe na sua empresa.",
    line: "Estúdio brasileiro de software sob medida. Feito para a sua empresa, não para qualquer empresa.",
    founders: "Conduzido por Pedro e Neto, sócios técnicos.",
    rights: "Todos os direitos reservados.",
  },
} as const;

export type SiteContent = typeof pt;
