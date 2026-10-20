import { NextResponse } from "next/server";

export const runtime = "nodejs";

type Payload = {
  name?: string;
  email?: string;
  company?: string;
  message?: string;
  topic?: string;
  website?: string; // honeypot
};

const isEmail = (v: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
const clean = (v: unknown, max: number) => String(v ?? "").trim().slice(0, max);

/**
 * Contact form handler. The destination address lives in env vars so it never
 * appears in the page source.
 *
 * To enable delivery, set in .env.local / your host:
 *   RESEND_API_KEY=...        (https://resend.com)
 *   CONTACT_TO_EMAIL=you@example.com
 *   CONTACT_FROM_EMAIL="Portfolio <hello@ryancarpentier.com>"  (a verified Resend sender)
 * Without them the message is logged to the server console instead.
 */
export async function POST(req: Request) {
  let body: Payload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ error: "Invalid request." }, { status: 400 });
  }

  // Bots fill the hidden field; pretend success and drop it.
  if (body.website) return NextResponse.json({ ok: true });

  const name = clean(body.name, 120);
  const email = clean(body.email, 200);
  const company = clean(body.company, 160);
  const topic = clean(body.topic, 80);
  const message = clean(body.message, 5000);

  if (!name || !isEmail(email) || message.length < 5) {
    return NextResponse.json({ error: "Please complete your name, a valid email and a message." }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL;
  const from = process.env.CONTACT_FROM_EMAIL;

  if (!apiKey || !to || !from) {
    console.info("[contact] delivery not configured — message received:", { name, email, company, topic, message });
    return NextResponse.json({ ok: true });
  }

  const res = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
    body: JSON.stringify({
      from,
      to,
      reply_to: email,
      subject: `[ryancarpentier.com] ${topic || "New message"} — ${name}`,
      text: `From: ${name} <${email}>\nCompany: ${company || "—"}\nTopic: ${topic || "—"}\n\n${message}`,
    }),
  });

  if (!res.ok) {
    console.error("[contact] Resend error", res.status, await res.text());
    return NextResponse.json({ error: "Couldn't send right now. Please try again shortly." }, { status: 502 });
  }
  return NextResponse.json({ ok: true });
}
