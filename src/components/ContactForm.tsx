import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

type Lang = "en" | "ru";

const COPY = {
  en: {
    name: "Your name",
    email: "Corporate email",
    message: "Briefly describe your enterprise challenge...",
    sending: "Transmitting to Resend…",
    send: "Send Encrypted Message",
    fillAll: "Please fill all fields",
    success: "Message transmitted via Resend. Our Lead Architect will contact you shortly.",
    error: "Something went wrong. Please try again.",
  },
  ru: {
    name: "Ваше имя",
    email: "Корпоративный Email",
    message: "Опишите вашу бизнес-задачу или проект...",
    sending: "Отправка через Resend…",
    send: "Отправить зашифрованное сообщение",
    fillAll: "Пожалуйста, заполните все поля",
    success: "Сообщение отправлено через Resend. Ведущий архитектор скоро свяжется с вами.",
    error: "Что-то пошло не так. Попробуйте снова.",
  },
} as const;

export function ContactForm({ lang = "en" }: { lang?: Lang }) {
  const c = COPY[lang];
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? c.fillAll);
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/public/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });
      if (!res.ok) {
        const { error } = await res.json().catch(() => ({ error: "" }));
        throw new Error(error || `Request failed (${res.status})`);
      }
      toast.success(c.success);
      setForm({ name: "", email: "", message: "" });
    } catch (err) {
      toast.error(err instanceof Error ? err.message : c.error);
    } finally {
      setLoading(false);
    }
  };

  const field =
    "w-full rounded-md bg-input/60 border border-border px-4 py-3 text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:shadow-glow-sm transition-all";

  return (
    <form onSubmit={onSubmit} className="space-y-4 max-w-xl mx-auto">
      <input
        className={field}
        placeholder={c.name}
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        disabled={loading}
        maxLength={100}
      />
      <input
        type="email"
        className={field}
        placeholder={c.email}
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        disabled={loading}
        maxLength={255}
      />
      <textarea
        rows={5}
        className={field + " resize-none"}
        placeholder={c.message}
        value={form.message}
        onChange={(e) => setForm({ ...form, message: e.target.value })}
        disabled={loading}
        maxLength={1000}
      />
      <button
        type="submit"
        disabled={loading}
        className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-gradient-primary text-primary-foreground font-semibold px-6 py-3 shadow-glow-sm hover:shadow-glow transition-all disabled:opacity-80"
      >
        {loading ? (
          <>
            <Loader2 className="h-5 w-5 animate-spin" />
            Transmitting to Resend…
          </>
        ) : (
          <>
            <Send className="h-5 w-5" />
            Send Encrypted Message
          </>
        )}
      </button>
    </form>
  );
}
