import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade · Solvy",
  description:
    "Como a Solvy trata dados pessoais no site, no atendimento, nos sites e sistemas que desenvolve, nos assistentes com IA e na gestão de anúncios.",
  alternates: { canonical: "/privacidade" },
};

type Secao = { id: string; titulo: string; texto?: string[]; itens?: string[] };

const WHATSAPP = "+55 48 99203-6687";

const secoes: Secao[] = [
  {
    id: "quem-somos",
    titulo: "1. Quem somos",
    texto: [
      "A Solvy é um estúdio de software sob medida. Criamos sites, landing pages, sistemas internos, portais, automações, integrações entre ferramentas, assistentes com inteligência artificial (como a Lina) e fazemos a gestão de anúncios pagos.",
      "Esta política explica, de forma direta, quais dados pessoais tratamos, por quê, com quem compartilhamos e como você exerce seus direitos, conforme a Lei Geral de Proteção de Dados (Lei 13.709/2018, LGPD).",
    ],
  },
  {
    id: "quando-se-aplica",
    titulo: "2. Quando esta política se aplica",
    itens: [
      "Quando você visita solvydesenvolvimentos.com.",
      "Quando fala com a Solvy pelo WhatsApp, e-mail, redes sociais ou formulários, inclusive a partir de um anúncio.",
      "Quando é nosso cliente ou usa uma plataforma que a Solvy opera, como o Gestor de Tráfego.",
      "Quando conecta à Solvy uma conta de anúncios, página ou perfil da Meta (Facebook e Instagram).",
    ],
  },
  {
    id: "dados",
    titulo: "3. Quais dados tratamos",
    itens: [
      "Contato e atendimento: nome, telefone, e-mail, nome da empresa e o conteúdo das mensagens que você nos envia.",
      "Projetos: informações e materiais que você nos passa para fazer o seu site ou sistema (textos, fotos, logotipo, dados do negócio).",
      "Contas nas nossas plataformas: nome, e-mail, função e registros de uso necessários para login e segurança.",
      "Anúncios: dados das contas de anúncios, páginas e perfis que você conecta e autoriza, como campanhas, criativos, métricas de desempenho e informações de cobrança exibidas pela Meta.",
      "Navegação no site: dados técnicos como páginas visitadas, tipo de dispositivo e origem da visita, por meio de cookies e ferramentas de medição.",
      "Pagamentos: dados necessários para emitir cobrança e confirmar o recebimento. Não guardamos número de cartão.",
    ],
  },
  {
    id: "finalidades",
    titulo: "4. Para que usamos e com qual base legal",
    itens: [
      "Responder pedidos, enviar propostas e prévias de projetos: procedimentos preliminares e execução de contrato.",
      "Desenvolver, publicar, manter e dar suporte aos sites e sistemas contratados: execução de contrato.",
      "Operar campanhas de anúncios a pedido do titular da conta: execução de contrato e autorização expressa na conexão.",
      "Melhorar o site, medir resultados e garantir segurança: legítimo interesse.",
      "Emitir cobranças e cumprir obrigações fiscais e legais: cumprimento de obrigação legal.",
      "Enviar novidades ou conteúdos da Solvy: consentimento, que você pode retirar a qualquer momento.",
    ],
  },
  {
    id: "clientes",
    titulo: "5. Sites e sistemas que fazemos para clientes",
    texto: [
      "Quando desenvolvemos ou operamos um site, sistema ou automação para uma empresa, os dados dos clientes dessa empresa pertencem a ela. Nesse papel a Solvy atua como operadora: tratamos os dados só para executar o serviço contratado e conforme as instruções do cliente, que é o controlador e responsável pela própria política de privacidade.",
    ],
  },
  {
    id: "ia",
    titulo: "6. Inteligência artificial",
    itens: [
      "Nossos assistentes, como a Lina, usam modelos de inteligência artificial de fornecedores especializados para entender mensagens, redigir respostas e analisar resultados.",
      "Enviamos a esses modelos apenas o necessário para a tarefa e não usamos os seus dados para treinar modelos próprios.",
      "Ações que envolvem dinheiro, contratos ou publicação dependem de aprovação humana. Não tomamos decisões com efeito jurídico sobre você de forma apenas automatizada.",
    ],
  },
  {
    id: "anuncios",
    titulo: "7. Anúncios e integrações com a Meta",
    itens: [
      "Os tokens de acesso à Meta ficam guardados apenas no servidor, com acesso restrito, e nunca são exibidos no navegador.",
      "Campanhas são criadas e alteradas somente dentro do que o titular autorizou. Ativações que geram gasto passam por aprovação.",
      "Você pode desconectar a conta a qualquer momento nas configurações da plataforma, o que apaga o token guardado.",
    ],
  },
  {
    id: "cookies",
    titulo: "8. Cookies e medição",
    texto: [
      "O site usa cookies necessários para funcionar e pode usar ferramentas de medição e de anúncios (como Google Analytics, Google Tag Manager e Pixel da Meta) para entender o uso e medir campanhas. Você pode bloquear ou apagar cookies nas configurações do seu navegador; algumas partes do site podem funcionar de forma diferente.",
    ],
  },
  {
    id: "compartilhamento",
    titulo: "9. Com quem compartilhamos",
    itens: [
      "Fornecedores que tornam o serviço possível: hospedagem e infraestrutura em nuvem, banco de dados, provedores de inteligência artificial, WhatsApp, Meta, Google e meios de pagamento.",
      "Autoridades públicas, quando houver obrigação legal ou ordem judicial.",
      "Não vendemos dados pessoais e não os repassamos a terceiros para fins comerciais próprios deles.",
    ],
  },
  {
    id: "internacional",
    titulo: "10. Transferência internacional",
    texto: [
      "Alguns fornecedores, como provedores de nuvem e de inteligência artificial, podem processar dados fora do Brasil. Nesses casos escolhemos empresas que adotam padrões de segurança e proteção compatíveis com a LGPD.",
    ],
  },
  {
    id: "seguranca",
    titulo: "11. Segurança e por quanto tempo guardamos",
    itens: [
      "Usamos controle de acesso por usuário, conexões criptografadas e acesso restrito a credenciais.",
      "Guardamos os dados pelo tempo necessário para a finalidade: durante o atendimento e o contrato, e depois pelo prazo exigido por lei (por exemplo, registros fiscais). Em seguida, os dados são apagados ou anonimizados.",
    ],
  },
  {
    id: "direitos",
    titulo: "12. Seus direitos",
    texto: [
      "Pela LGPD você pode pedir, a qualquer momento: confirmação de que tratamos seus dados, acesso, correção, anonimização, bloqueio ou eliminação de dados desnecessários, portabilidade, informação sobre com quem compartilhamos, e retirar um consentimento dado.",
      `Para exercer qualquer direito ou pedir a exclusão dos seus dados, fale com a Solvy pelo WhatsApp ${WHATSAPP}. Respondemos em até 15 dias.`,
    ],
  },
  {
    id: "contato",
    titulo: "13. Contato e alterações",
    texto: [
      `Encarregado pelo tratamento de dados: sócios da Solvy, pelo WhatsApp ${WHATSAPP}.`,
      "Podemos atualizar esta política quando mudarmos serviços ou exigências legais. A data no topo indica a última atualização.",
    ],
  },
];

export default function Privacidade() {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-40 text-[#F7F9FC]">
      <p className="text-xs uppercase tracking-[0.2em] text-[#00A7F4]">Solvy</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Política de Privacidade</h1>
      <p className="mt-2 text-sm text-[#8B93A3]">Atualizada em 1º de outubro de 2026</p>

      <nav aria-label="Seções" className="mt-8 flex flex-wrap gap-2">
        {secoes.map((s) => (
          <a
            key={s.id}
            href={`#${s.id}`}
            className="rounded-full border border-white/15 px-3 py-1 text-xs text-[#C9CED8] transition-colors hover:border-[#00A7F4]/60 hover:text-[#F7F9FC]"
          >
            {s.titulo.replace(/^\d+\.\s*/, "")}
          </a>
        ))}
      </nav>

      {secoes.map((s) => (
        <section key={s.id} id={s.id} className="mt-12 scroll-mt-32">
          <h2 className="text-xl font-semibold text-[#00A7F4]">{s.titulo}</h2>
          {s.texto?.map((p) => (
            <p key={p} className="mt-3 leading-relaxed text-[#C9CED8]">
              {p}
            </p>
          ))}
          {s.itens && (
            <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-[#C9CED8]">
              {s.itens.map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </main>
  );
}
