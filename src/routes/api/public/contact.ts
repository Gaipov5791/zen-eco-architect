import { createFileRoute } from "@tanstack/react-router";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email().max(255),
  message: z.string().trim().min(1).max(5000),
});

const FROM = "ZenTech <onboarding@resend.dev>";
const TO_FALLBACK = "bakyt.gaipov.kk@gmail.com";

function escapeHtml(s: string) {
  return s
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export const Route = createFileRoute("/api/public/contact")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        const apiKey = process.env.RESEND_API_KEY || (import.meta.env && import.meta.env.VITE_RESEND_API_KEY);
        if (!apiKey) {
          return Response.json(
            { error: "Email service not configured" },
            { status: 500 },
          );
        }
        const to = process.env.CONTACT_TO_EMAIL || TO_FALLBACK;

        let body: unknown;
        try {
          body = await request.json();
        } catch {
          return Response.json({ error: "Invalid JSON" }, { status: 400 });
        }

        const parsed = schema.safeParse(body);
        if (!parsed.success) {
          return Response.json(
            { error: parsed.error.issues[0]?.message ?? "Invalid input" },
            { status: 400 },
          );
        }
        const { name, email, message } = parsed.data;

        const html = `
          <div style="font-family:Arial,sans-serif;background:#0a0f0a;color:#e8f5e9;padding:24px;border-radius:12px;">
            <h2 style="color:#4ADE80;margin:0 0 16px;">New ZenTech Enquiry</h2>
            <p><b>Name:</b> ${escapeHtml(name)}</p>
            <p><b>Email:</b> ${escapeHtml(email)}</p>
            <p><b>Message:</b></p>
            <pre style="white-space:pre-wrap;font-family:inherit;background:#111;padding:12px;border-radius:8px;border:1px solid #1f3a1f;">${escapeHtml(message)}</pre>
          </div>`;

        const res = await fetch("https://api.resend.com/emails", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKey}`,
          },
          body: JSON.stringify({
            from: FROM,
            to: [to],
            reply_to: email,
            subject: `ZenTech — Enterprise enquiry from ${name}`,
            html,
          }),
        });

        if (!res.ok) {
          const detail = await res.text();
          return Response.json(
            { error: "Resend rejected the send", detail },
            { status: 502 },
          );
        }

        const data = await res.json();
        return Response.json({ ok: true, id: data.id });
      },
    },
  },
});
