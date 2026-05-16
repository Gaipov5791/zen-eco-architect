import { createFileRoute } from "@tanstack/react-router";
import { ArrowRight, Cpu, Globe2, Waves, Brain, Shield, Zap } from "lucide-react";
import { Toaster } from "@/components/ui/sonner";
import { ContactForm } from "@/components/ContactForm";
import cyborg from "@/assets/cyborg-architect.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "ZenTech Enterprise Ecosystems — AI-Driven Digital Infrastructure" },
      {
        name: "description",
        content:
          "Architecting AI-driven digital ecosystems for enterprise business. Resilient MERN, automated workflows, and custom AI cutting opex up to 40%.",
      },
      { property: "og:title", content: "ZenTech Enterprise Ecosystems" },
      {
        property: "og:description",
        content: "Enterprise AI & IT architecture led by Bakyt Gaipov.",
      },
    ],
    links: [
      { rel: "icon", type: "image/png", href: "/app-icon.png" },
      { rel: "apple-touch-icon", href: "/app-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "canonical", href: "/" },
    ],
  }),
});

const STRIPE_LINK = "https://buy.stripe.com/test_aEUbJ16Lg1Uvc7e3cc"; // $200 / $490 test link

const pillars = [
  {
    name: "Birge Web",
    tag: "MERN Infrastructure",
    desc: "Resilient full-stack platforms unifying corporate operations on a single, scalable MERN backbone.",
    icon: Globe2,
  },
  {
    name: "Elbrus Hydro",
    tag: "Industrial Automation",
    desc: "Real-time monitoring and predictive workflow automation for heavy-asset energy operations.",
    icon: Waves,
  },
  {
    name: "ZenTechAI",
    tag: "Custom AI Intelligence",
    desc: "Bespoke LLM agents and inference pipelines that reduce operational expenses by up to 40%.",
    icon: Brain,
  },
];

function Index() {
  return (
    <div className="min-h-screen relative overflow-hidden">
      <Toaster theme="dark" richColors position="top-right" />

      {/* Radial glow backdrop */}
      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-70" />

      {/* NAV */}
      <header className="relative z-10 mx-auto flex max-w-7xl items-center justify-between px-6 py-6">
        <a href="/" className="flex items-center gap-2 font-mono text-sm">
          <span className="text-primary text-glow">{"</>"}</span>
          <span className="font-semibold tracking-tight">ZenTech</span>
        </a>
        <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#pillars" className="hover:text-primary transition">Pillars</a>
          <a href="#why" className="hover:text-primary transition">Capabilities</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </nav>
        <a
          href={STRIPE_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 rounded-md border border-primary/40 px-4 py-2 text-sm text-primary hover:bg-primary/10 transition"
        >
          Book Audit
        </a>
      </header>

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-12 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-mono text-primary mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            Lead Architect — Bakyt Gaipov
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            <span className="block text-glow text-primary">ZenTech</span>
            <span className="block text-foreground">Enterprise</span>
            <span className="block text-foreground">Ecosystems</span>
          </h1>

          <p className="mt-6 text-2xl md:text-3xl font-semibold leading-tight text-foreground/90">
            Architecting AI-Driven Digital Ecosystems for Enterprise Business
          </p>

          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            We engineer resilient MERN infrastructures, automate complex corporate workflows, and
            integrate custom AI intelligence that cuts operational expenses by up to{" "}
            <span className="text-primary font-semibold">40%</span>.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={STRIPE_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-primary text-primary-foreground font-semibold px-6 py-3.5 shadow-glow hover:scale-[1.02] transition-transform"
            >
              Book AI Audit ($4 audit/test link)
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#pillars"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/40 bg-background/40 backdrop-blur px-6 py-3.5 font-semibold text-foreground hover:bg-primary/10 hover:border-primary transition"
            >
              Explore Our Pillars
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {[
              { k: "40%", v: "OpEx reduction" },
              { k: "3", v: "Live ecosystems" },
              { k: "24/7", v: "AI uptime" },
            ].map((s) => (
              <div key={s.v}>
                <div className="text-2xl font-bold text-primary text-glow">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Avatar */}
        <div className="relative">
          <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full" />
          <div className="relative rounded-2xl overflow-hidden border border-primary/30 shadow-glow">
            <img
              src={cyborg}
              alt="ZenTech Lead Architect cyber-avatar"
              width={1024}
              height={1280}
              className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between font-mono text-xs">
              <span className="text-primary">● SYSTEM ONLINE</span>
              <span className="text-muted-foreground">v.2026.ENTERPRISE</span>
            </div>
          </div>
        </div>
      </section>

      {/* PILLARS */}
      <section id="pillars" className="relative z-10 mx-auto max-w-7xl px-6 py-24">
        <div className="mb-14 text-center">
          <p className="font-mono text-xs text-primary tracking-widest uppercase">— Proof of architecture</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            The Three Pillars
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">
            Production ecosystems engineered, deployed, and operated under the ZenTech standard.
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <div
              key={p.name}
              className="group relative rounded-xl border border-border bg-card/60 backdrop-blur p-7 hover:border-primary/60 transition-all hover:shadow-glow-sm"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/30 text-primary group-hover:shadow-glow-sm transition">
                <p.icon className="h-6 w-6" />
              </div>
              <div className="mt-5 font-mono text-xs text-primary uppercase tracking-wider">{p.tag}</div>
              <h3 className="mt-1 text-2xl font-bold">{p.name}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="why" className="relative z-10 mx-auto max-w-7xl px-6 py-24 border-t border-border">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { i: Cpu, t: "MERN at Scale", d: "Battle-tested Node, Mongo, Express, React stacks tuned for enterprise concurrency." },
            { i: Shield, t: "Compliance-First", d: "SOC2-ready architectures with audit trails and zero-trust boundaries." },
            { i: Zap, t: "AI Automation", d: "Custom LLM agents wired directly into your CRM, ERP and operations layer." },
          ].map((x) => (
            <div key={x.t} className="flex gap-4">
              <x.i className="h-8 w-8 text-primary shrink-0" />
              <div>
                <h4 className="font-semibold text-lg">{x.t}</h4>
                <p className="text-muted-foreground mt-1 text-sm leading-relaxed">{x.d}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="relative z-10 mx-auto max-w-3xl px-6 py-24">
        <div className="mb-10 text-center">
          <p className="font-mono text-xs text-primary tracking-widest uppercase">— Initiate contact</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            Engage the <span className="text-primary text-glow">Architect</span>
          </h2>
          <p className="mt-4 text-muted-foreground">
            Tell us about your enterprise challenge. Routed via Resend directly to Bakyt Gaipov.
          </p>
        </div>
        <ContactForm />
      </section>

      <footer className="relative z-10 border-t border-border mt-12">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
          <span>© 2026 ZenTech Enterprise Ecosystems</span>
          <span>bakyt.dev — Lead Architect: Bakyt Gaipov</span>
        </div>
      </footer>
    </div>
  );
}
