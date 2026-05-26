import { NextResponse } from "next/server";

// Stub de recebimento de orcamento.
// TODO(Pedro): plugar envio real (email/WhatsApp/CRM) — Resend, e-mail SMTP
// ou webhook. Por ora apenas valida e registra.
export async function POST(req: Request) {
  try {
    const data = await req.json();
    if (!data?.name || !data?.email || !data?.message) {
      return NextResponse.json({ ok: false, error: "campos obrigatorios" }, { status: 400 });
    }
    console.log("[orcamento]", JSON.stringify(data));
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
