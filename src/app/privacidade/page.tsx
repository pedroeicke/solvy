import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade · Solvy",
  description: "Como a Solvy trata os dados usados nos seus sites, sistemas e na gestão de anúncios.",
  alternates: { canonical: "/privacidade" },
};

const secoes: { titulo: string; itens: string[] }[] = [
  {
    titulo: "Quais dados usamos",
    itens: [
      "Dados das contas de anúncios, páginas e perfis do Instagram que o titular conecta e autoriza: campanhas, conjuntos, anúncios, criativos, métricas de desempenho e informações de cobrança exibidas pela Meta.",
      "Nome e e-mail de quem cria uma conta nas nossas plataformas, para login e controle de acesso.",
      "Mensagens recebidas pelo WhatsApp da Solvy quando uma pessoa decide nos chamar, inclusive a partir de um anúncio.",
    ],
  },
  {
    titulo: "Para que usamos",
    itens: [
      "Criar, acompanhar, pausar e ajustar campanhas de anúncios a pedido do titular da conta.",
      "Mostrar relatórios e recomendações de desempenho.",
      "Responder quem entra em contato com a Solvy.",
      "Não vendemos dados e não os usamos para outra finalidade além das listadas.",
    ],
  },
  {
    titulo: "Armazenamento e segurança",
    itens: [
      "Os tokens de acesso à Meta ficam guardados apenas no servidor, com acesso restrito, e nunca são exibidos no navegador.",
      "Os dados ficam em infraestrutura com controle de acesso por usuário.",
    ],
  },
  {
    titulo: "Compartilhamento",
    itens: [
      "Os dados só circulam entre a Solvy e os serviços necessários para operar as plataformas (Meta, banco de dados e hospedagem). Não repassamos dados a terceiros para fins comerciais.",
    ],
  },
  {
    titulo: "Seus direitos e exclusão de dados",
    itens: [
      "Você pode desconectar sua conta Meta a qualquer momento nas configurações da plataforma, o que apaga o token guardado.",
      "Para pedir acesso, correção ou exclusão dos seus dados, fale com a Solvy pelo WhatsApp +55 48 99203-6687 pedindo \"Exclusão de dados\". Atendemos em até 15 dias.",
    ],
  },
];

export default function Privacidade() {
  return (
    <main className="mx-auto max-w-3xl px-5 pb-24 pt-40 text-[#F7F9FC]">
      <p className="text-xs uppercase tracking-[0.2em] text-[#00A7F4]">Solvy</p>
      <h1 className="mt-3 text-4xl font-semibold tracking-tight">Política de Privacidade</h1>
      <p className="mt-2 text-sm text-[#8B93A3]">Atualizada em 1º de outubro de 2026</p>
      <p className="mt-8 leading-relaxed text-[#C9CED8]">
        Esta política explica como a Solvy trata os dados usados nos sites e sistemas que desenvolve, no aplicativo
        &quot;Solvy Lina&quot; e na plataforma Solvy · Gestor de Tráfego, que gerenciam campanhas de anúncios da própria
        Solvy e de clientes que autorizam esse acesso.
      </p>
      {secoes.map((s) => (
        <section key={s.titulo} className="mt-10">
          <h2 className="text-lg font-semibold text-[#00A7F4]">{s.titulo}</h2>
          <ul className="mt-3 list-disc space-y-2 pl-5 leading-relaxed text-[#C9CED8]">
            {s.itens.map((i) => (
              <li key={i}>{i}</li>
            ))}
          </ul>
        </section>
      ))}
      <section className="mt-10">
        <h2 className="text-lg font-semibold text-[#00A7F4]">Contato</h2>
        <p className="mt-3 leading-relaxed text-[#C9CED8]">Solvy · solvydesenvolvimentos.com · WhatsApp +55 48 99203-6687</p>
      </section>
    </main>
  );
}
