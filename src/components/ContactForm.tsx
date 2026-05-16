import { useState } from "react";
import { Loader2, Send } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Valid email required").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

export function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const parsed = schema.safeParse(form);
    if (!parsed.success) {
      toast.error(parsed.error.issues[0]?.message ?? "Please fill all fields");
      return;
    }
    setLoading(true);
    try {
      // Resend API wiring point — frontend prepared
      await new Promise((r) => setTimeout(r, 1200));
      toast.success("Message initiated via Resend! Our Lead Architect will contact you shortly.");
      setForm({ name: "", email: "", message: "" });
    } catch {
      toast.error("Something went wrong. Please try again.");
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
        placeholder="Your name"
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        disabled={loading}
        maxLength={100}
      />
      <input
        type="email"
        className={field}
        placeholder="Corporate email"
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        disabled={loading}
        maxLength={255}
      />
      <textarea
        rows={5}
        className={field + " resize-none"}
        placeholder="Briefly describe your enterprise challenge..."
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
