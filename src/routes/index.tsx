import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, Cpu, Globe2, Waves, Brain, Shield, Zap, Phone, MessageSquare, ExternalLink } from "lucide-react";
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

const STRIPE_AUDIT_LINK = "https://buy.stripe.com/test_8x200jbyP8FqeRJ9OWc3m02";
const STRIPE_AI_LINK = "https://buy.stripe.com/test_14A3cv1YfbRCgZRf9gc3m05";
const PHONE = "+996 550 909 950";
const WHATSAPP_URL = "https://wa.me/996556016898";
const WHATSAPP_DISPLAY = "+996 556 016 898 (WhatsApp)";

type Lang = "en" | "ru";

const t = {
  en: {
    pillars: "Pillars",
    capabilities: "Capabilities",
    contact: "Contact",
    servicesNav: "Services",
    bookAudit: "Book Audit",
    badge: "Lead Architect — Bakyt Gaipov",
    title: ["ZenTech", "Enterprise", "Ecosystems"],
    headline: "Architecting AI-Driven Digital Ecosystems for Enterprise Business",
    sub: (
      <>
        We engineer resilient MERN infrastructures, automate complex corporate workflows, and
        integrate custom AI intelligence that cuts operational expenses by up to{" "}
        <span className="text-primary font-semibold">40%</span>.
      </>
    ),
    ctaBook: "Book AI Audit",
    ctaExplore: "Explore Our Pillars",
    stats: [
      { k: "40%", v: "OpEx reduction" },
      { k: "3", v: "Live ecosystems" },
      { k: "24/7", v: "AI uptime" },
    ],
    pillarsKicker: "— Proof of architecture",
    pillarsTitle: "The Three Pillars",
    pillarsDesc: "Production ecosystems engineered, deployed, and operated under the ZenTech standard.",
    contactKicker: "— Initiate contact",
    contactTitle1: "Engage the ",
    contactTitle2: "Architect",
    contactDesc: "Tell us about your enterprise challenge. Routed via Resend directly to Bakyt Gaipov.",
    services: {
      kicker: "— Tailored Engagement Models",
      title: "Enterprise Solutions & Services",
      auditTitle: "01 / AI & Infrastructure Audit",
      auditDesc: "Comprehensive technical review of your current pipeline, custom MERN/AI architecture blueprint, and detailed ROI projection.",
      auditPrice: "$490 / Fixed Price",
      auditCta: "Book Audit via Stripe",
      aiTitle: "02 / Custom AI Intelligence Integration",
      aiDesc: "Bespoke LLM agents wired directly into your CRM/ERP layers, automating corporate workflows and slashing OpEx up to 40%.",
      aiPrice: "$2,490 / Deployment",
      aiCta: "Initiate AI Core",
      ecoTitle: "03 / Full-Scale Digital Ecosystem",
      ecoDesc: "End-to-end engineering of a resilient corporate backbone. Custom industrial monitoring, high-concurrency MERN infrastructure, and zero-trust security.",
      ecoPrice: "Custom B2B Contract",
      ecoCta: "Engage Architect for Quote",
    },
  },
  ru: {
    pillars: "Столпы",
    capabilities: "Возможности",
    contact: "Контакт",
    servicesNav: "Услуги",
    bookAudit: "ИИ-Аудит",
    badge: "Ведущий Архитектор — Бакыт Гаипов",
    title: ["ZenTech", "Корпоративные", "Экосистемы"],
    headline: "Проектирование Цифровых Экосистем на Базе ИИ для Крупного Бизнеса",
    sub: (
      <>
        Мы создаем отказоустойчивую MERN-инфраструктуру, автоматизируем сложные корпоративные
        воркфлоу и внедряем кастомный искусственный интеллект, сокращающий операционные расходы
        (OpEx) до <span className="text-primary font-semibold">40%</span>.
      </>
    ),
    ctaBook: "Забронировать ИИ-Аудит",
    ctaExplore: "Доказательство Архитектуры",
    stats: [
      { k: "40%", v: "Снижение OpEx" },
      { k: "3", v: "Готовых экосистемы" },
      { k: "24/7", v: "ИИ доступность" },
    ],
    pillarsKicker: "— Доказательство архитектуры",
    pillarsTitle: "Три Столпа",
    pillarsDesc: "Производственные экосистемы, спроектированные и эксплуатируемые по стандарту ZenTech.",
    contactKicker: "— Инициировать контакт",
    contactTitle1: "Связаться с ",
    contactTitle2: "Архитектором",
    contactDesc: "Расскажите о корпоративной задаче. Сообщение поступит напрямую Бакыту Гаипову.",
    services: {
      kicker: "— Модели Интеграции",
      title: "Корпоративные Решения и Услуги",
      auditTitle: "01 / ИИ & Технологический Аудит",
      auditDesc: "Глубокий аудит вашей текущей ИТ-инфраструктуры, проектирование схемы будущей архитектуры на MERN+ИИ и расчет окупаемости (ROI).",
      auditPrice: "490 $ / Фиксированная цена",
      auditCta: "Забронировать через Stripe",
      aiTitle: "02 / Интеграция Кастомного ИИ",
      aiDesc: "Разработка уникальных ИИ-агентов (LLM), внедряемых в ваши CRM/ERP системы для автоматизации воркфлоу и снижения OpEx до 40%.",
      aiPrice: "2 490 $ / За деплой",
      aiCta: "Активировать ИИ-Ядро",
      ecoTitle: "03 / Цифровая Экосистема под Ключ",
      ecoDesc: "Полное проектирование и разработка отказоустойчивой ИТ-основы предприятия. Промышленная автоматизация, высоконагруженный MERN и Zero-Trust безопасность.",
      ecoPrice: "Кастомный B2B Контракт",
      ecoCta: "Запросить Коммерческое Предложение",
    },
  },
} as const;

const pillars = [
  {
    name: "Birge Web",
    tag: { en: "MERN Infrastructure", ru: "MERN Инфраструктура" },
    desc: {
      en: "Resilient full-stack platforms unifying corporate operations on a single, scalable MERN backbone.",
      ru: "Отказоустойчивые full-stack платформы, объединяющие корпоративные операции на масштабируемой MERN-основе.",
    },
    icon: Globe2,
    url: "https://birge-mern-fullstack.vercel.app",
  },
  {
    name: "Elbrus Hydro",
    tag: { en: "Industrial Automation", ru: "Промышленная Автоматизация" },
    desc: {
      en: "Real-time monitoring and predictive workflow automation for heavy-asset energy operations.",
      ru: "Мониторинг в реальном времени и предиктивная автоматизация для энергетических активов.",
    },
    icon: Waves,
    url: "https://gaipov5791.github.io/powerstation-present/",
  },
  {
    name: "ZenTechAI",
    tag: { en: "Custom AI Intelligence", ru: "Кастомный ИИ" },
    desc: {
      en: "Bespoke LLM agents and inference pipelines that reduce operational expenses by up to 40%.",
      ru: "Кастомные LLM-агенты и пайплайны инференса, снижающие операционные расходы до 40%.",
    },
    icon: Brain,
    url: "https://zen-tech-75uo3mn9y-gaipov5791s-projects.vercel.app",
  },
];

function Index() {
  const [lang, setLang] = useState<Lang>("ru");
  const L = t[lang];

  const capabilities = [
    {
      i: Cpu,
      t: lang === "ru" ? "MERN на масштабе" : "MERN at Scale",
      d:
        lang === "ru"
          ? "Проверенные стеки Node, Mongo, Express, React, настроенные под корпоративные нагрузки."
          : "Battle-tested Node, Mongo, Express, React stacks tuned for enterprise concurrency.",
    },
    {
      i: Shield,
      t: lang === "ru" ? "Compliance-First" : "Compliance-First",
      d:
        lang === "ru"
          ? "Архитектуры под SOC2 с журналами аудита и zero-trust границами."
          : "SOC2-ready architectures with audit trails and zero-trust boundaries.",
    },
    {
      i: Zap,
      t: lang === "ru" ? "ИИ Автоматизация" : "AI Automation",
      d:
        lang === "ru"
          ? "Кастомные LLM-агенты, встроенные напрямую в CRM, ERP и операционный слой."
          : "Custom LLM agents wired directly into your CRM, ERP and operations layer.",
    },
  ];

  return (
    <div className="min-h-screen relative">
      <Toaster theme="dark" richColors position="top-right" />

      <div className="pointer-events-none absolute inset-0 bg-radial-glow opacity-70" />

      {/* NAV */}
      <header className="sticky top-0 z-50 bg-background/70 backdrop-blur-md border-b border-border/40">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="/" className="flex items-center gap-2 font-mono text-sm">
            <span className="text-primary text-glow">{"</>"}</span>
            <span className="font-semibold tracking-tight">ZenTech</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-sm text-muted-foreground">
            <a href="#pillars" className="hover:text-primary transition">{L.pillars}</a>
            <a href="#why" className="hover:text-primary transition">{L.capabilities}</a>
            <a href="#services" className="hover:text-primary transition">{L.servicesNav}</a>
            <a href="#contact" className="hover:text-primary transition">{L.contact}</a>
          </nav>
          <div className="flex items-center gap-3">
            <div className="hidden sm:flex items-center rounded-md border border-border/60 font-mono text-xs overflow-hidden">
              <button
                onClick={() => setLang("en")}
                className={`px-2.5 py-1.5 transition ${lang === "en" ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground"}`}
                aria-label="English"
              >
                EN
              </button>
              <button
                onClick={() => setLang("ru")}
                className={`px-2.5 py-1.5 transition ${lang === "ru" ? "bg-primary/15 text-primary" : "text-muted-foreground hover:text-foreground"}`}
                aria-label="Русский"
              >
                RU
              </button>
            </div>
            <a
              href={STRIPE_AUDIT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-flex items-center gap-2 rounded-md border border-primary/40 px-4 py-2 text-sm text-primary hover:bg-primary/10 transition"
            >
              {L.bookAudit}
            </a>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative z-10 mx-auto max-w-7xl px-6 pt-12 pb-24 grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-mono text-primary mb-6">
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
            {L.badge}
          </div>

          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tight leading-[1.05]">
            <span className="block text-glow text-primary">{L.title[0]}</span>
            <span className="block text-foreground">{L.title[1]}</span>
            <span className="block text-foreground">{L.title[2]}</span>
          </h1>

          <p className="mt-6 text-2xl md:text-3xl font-semibold leading-tight text-foreground/90">
            {L.headline}
          </p>

          <p className="mt-5 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed">
            {L.sub}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <a
              href={STRIPE_AUDIT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-md bg-gradient-primary text-primary-foreground font-semibold px-6 py-3.5 shadow-glow hover:scale-[1.02] transition-transform"
            >
              {L.ctaBook}
              <ArrowRight className="h-5 w-5" />
            </a>
            <a
              href="#pillars"
              className="inline-flex items-center justify-center gap-2 rounded-md border border-primary/40 bg-background/40 backdrop-blur px-6 py-3.5 font-semibold text-foreground hover:bg-primary/10 hover:border-primary transition"
            >
              {L.ctaExplore}
            </a>
          </div>

          <div className="mt-10 grid grid-cols-3 gap-6 max-w-md">
            {L.stats.map((s) => (
              <div key={s.v}>
                <div className="text-2xl font-bold text-primary text-glow">{s.k}</div>
                <div className="text-xs text-muted-foreground mt-1">{s.v}</div>
              </div>
            ))}
          </div>
        </div>

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
          <p className="font-mono text-xs text-primary tracking-widest uppercase">{L.pillarsKicker}</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">{L.pillarsTitle}</h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto">{L.pillarsDesc}</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {pillars.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative rounded-xl border border-border bg-card/60 backdrop-blur p-7 hover:border-primary/60 transition-all hover:shadow-glow-sm block"
            >
              <div className="flex items-start justify-between">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 border border-primary/30 text-primary group-hover:shadow-glow-sm transition">
                  <p.icon className="h-6 w-6" />
                </div>
                <ExternalLink className="h-4 w-4 text-muted-foreground group-hover:text-primary transition" />
              </div>
              <div className="mt-5 font-mono text-xs text-primary uppercase tracking-wider">{p.tag[lang]}</div>
              <h3 className="mt-1 text-2xl font-bold">{p.name}</h3>
              <p className="mt-3 text-muted-foreground leading-relaxed">{p.desc[lang]}</p>
            </a>
          ))}
        </div>
      </section>

      {/* CAPABILITIES */}
      <section id="why" className="relative z-10 mx-auto max-w-7xl px-6 py-24 border-t border-border">
        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((x) => (
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
          <p className="font-mono text-xs text-primary tracking-widest uppercase">{L.contactKicker}</p>
          <h2 className="mt-3 text-4xl md:text-5xl font-bold tracking-tight">
            {L.contactTitle1}<span className="text-primary text-glow">{L.contactTitle2}</span>
          </h2>
          <p className="mt-4 text-muted-foreground">{L.contactDesc}</p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3 font-mono text-sm">
            <a
              href={`tel:${PHONE.replace(/\s/g, "")}`}
              className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/5 px-4 py-2 text-primary hover:bg-primary/10 hover:shadow-glow-sm transition"
            >
              <Phone className="h-4 w-4" />
              {PHONE}
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-md border border-primary/30 bg-primary/5 px-4 py-2 text-primary hover:bg-primary/10 hover:shadow-glow-sm transition"
            >
              <MessageSquare className="h-4 w-4" />
              {WHATSAPP_DISPLAY}
            </a>
          </div>
        </div>
        <ContactForm lang={lang} />
      </section>

      <footer className="relative z-10 border-t border-border mt-12">
        <div className="mx-auto max-w-7xl px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground font-mono">
          <span>© 2026 ZenTech Enterprise Ecosystems</span>
          <div className="flex items-center gap-4">
            <a href={`tel:${PHONE.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 hover:text-primary transition">
              <Phone className="h-3.5 w-3.5" /> {PHONE}
            </a>
            <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1.5 hover:text-primary transition">
              <MessageSquare className="h-3.5 w-3.5" /> +996 556 016 898
            </a>
          </div>
          <span>bakyt.dev — Bakyt Gaipov</span>
        </div>
      </footer>
    </div>
  );
}
