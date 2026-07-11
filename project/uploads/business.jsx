/* ═══════════════════════ Twingo — Business site ═══════════════════════ */
/* Dark, cinematic, marketplace feel. Rendered when audience === "business". */
(function () {
const { useState, useEffect, useRef } = React;

/* ── Icons ── */
const BI = {
  zap: "M13 2L3 14h7l-1 8 10-12h-7z",
  user: "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM4 21a8 8 0 0 1 16 0",
  rights: "M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6zM9 12l2 2 4-4",
  layers: "M12 3l9 5-9 5-9-5zM3 12l9 5 9-5M3 16l9 5 9-5",
  trend: "M3 17l6-6 4 4 8-8M15 7h6v6",
  risk: "M12 3l9 16H3zM12 9v5M12 17h.01",
  ads: "M3 11v3l14 5V6zM3 11H2M17 9a3 3 0 0 1 0 6M8 15l1 5",
  drama: "M4 6h11v12H4zM15 10l5-3v10l-5-3z",
  game: "M7 8h10a4 4 0 0 1 0 8c-1.5 0-2-1-3.5-1h-3C9 15 8.5 16 7 16a4 4 0 0 1 0-8ZM7 12h2M8 11v2M15 11h.01M17 13h.01",
  film: "M4 4h16v16H4zM4 9h16M4 15h16M9 4v16M15 4v16",
  cap: "M3 9l9-4 9 4-9 4zM7 11v5c0 1 2.2 2 5 2s5-1 5-2v-5",
  music: "M9 18V6l10-2v12M9 18a2.5 2.5 0 1 1-2.5-2.5M19 16a2.5 2.5 0 1 1-2.5-2.5",
  search: "M11 4a7 7 0 1 0 4.9 12L20 20",
  check: "M5 12l4.5 4.5L19 7",
  brand: "M4 21V6l8-3 8 3v15M9 21v-6h6v6M8 9h.01M13 9h.01M8 13h.01M13 13h.01",
  studio: "M4 8l16-3 1 4-16 3zM4 8v11h17V9M8 6l1 3M13 5l1 3",
  agency: "M3 11v3l14 5V6zM3 11H2M17 9a3 3 0 0 1 0 6",
  create: "M4 20l4-1 11-11-3-3L5 16zM14 7l3 3M4 20l1-4",
  scale: "M4 20V10M10 20V4M16 20v-8M22 20H2",
  arrow: "M5 12h14M13 6l6 6-6 6",
  spark: "M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3",
};
function BIcon({ name, size = 22, sw = 1.7 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={BI[name]} />
    </svg>
  );
}
function BizMark({ size = 26, color = "#fff" }) {
  return (
    <svg width={size} height={size * 0.62} viewBox="0 0 42 26" fill="none" aria-hidden="true">
      <circle cx="14" cy="13" r="10.5" stroke={color} strokeWidth="3.4" />
      <circle cx="28" cy="13" r="10.5" stroke={color} strokeWidth="3.4" />
    </svg>
  );
}

/* ── small building blocks ── */
function Eyebrow({ children }) {
  return <div className="biz-eyebrow">{children}</div>;
}
function GlassCard({ children, style, hover = true, className = "" }) {
  return <div className={"biz-card" + (hover ? " biz-card-hover" : "") + (className ? " " + className : "")} style={style}>{children}</div>;
}
function IconChip({ name }) {
  return <span className="biz-icon-chip"><BIcon name={name} size={22} /></span>;
}

/* ═══════════════════════ Nav ═══════════════════════ */
function BizNav({ audience, onAudience, theme, onTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const AudienceSwitch = window.AudienceSwitch;
  const ThemeToggle = window.ThemeToggle;
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll); onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [["Why Twingo", "#why"], ["Use Cases", "#cases"], ["How It Works", "#how"], ["Pricing", "#pricing"], ["FAQ", "#faq"]];
  return (
    <header className={"biz-nav" + (scrolled ? " scrolled" : "")}>
      <div className="biz-wrap biz-nav-inner">
        <a href="#top" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
          <BizMark /><span className="biz-word">Twingo</span>
        </a>
        <nav className="biz-nav-links">
          {links.map(([t, h]) => <a key={h} href={h}>{t}</a>)}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <ThemeToggle theme={theme} onTheme={onTheme} />
          <div className="biz-nav-switch"><AudienceSwitch mode={audience} onChange={onAudience} dark={theme === "dark"} /></div>
          <a href="#demo" className="biz-btn biz-btn-primary biz-btn-sm">Book a Demo</a>
        </div>
      </div>
    </header>
  );
}

/* ═══════════════════════ Hero ═══════════════════════ */
const HERO_FORMATS = null;
function Hero() {
  return (
    <section id="top" className="biz-hero">
      <div className="biz-hero-glow" />
      <div className="biz-wrap biz-hero-grid" style={{ gridTemplateColumns: "1fr" }}>
        <div className="biz-hero-copy reveal in">
          <Eyebrow><span className="dot" />The likeness marketplace for AI content</Eyebrow>
          <h1 className="biz-h1">License creator likenesses for <span className="grad">AI-powered content.</span></h1>
          <p className="biz-lead">
            Cast verified creators and influencers in commercials, micro-dramas, games, films, music videos,
            and branded stories — with clear approval and usage rights from day one.
          </p>
          <div className="biz-badges">
            {["Creator-approved", "Business-ready rights", "Built for AI production"].map(b => (
              <span key={b} className="biz-badge"><BIcon name="check" size={15} sw={2} />{b}</span>
            ))}
          </div>
          <div className="biz-hero-cta" style={{ marginBottom: 0, marginTop: 32 }}>
            <a href="#demo" className="biz-btn biz-btn-primary">Book a Demo <span className="arr"><BIcon name="arrow" size={17} /></span></a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════ generic card grid ═══════════════════════ */
function CardGrid({ items, cols = 3 }) {
  return (
    <div className="biz-grid" style={{ "--cols": cols }}>
      {items.map((it, i) => (
        <GlassCard key={i} className="reveal" style={{ transitionDelay: (i % cols) * 70 + "ms" }}>
          <IconChip name={it.icon} />
          <h3 className="biz-card-title">{it.title}</h3>
          <p className="biz-card-body">{it.body}</p>
        </GlassCard>
      ))}
    </div>
  );
}
function SectionHead({ eyebrow, title, text, center }) {
  return (
    <div className={"biz-sechead reveal" + (center ? " center" : "")}>
      {eyebrow && <Eyebrow>{eyebrow}</Eyebrow>}
      <h2 className="biz-h2">{title}</h2>
      {text && <p className="biz-sub">{text}</p>}
    </div>
  );
}

/* ═══════════════════════ Section: Why ═══════════════════════ */
const WHY = [
  { icon: "zap", title: "Create more, faster", body: "Launch ads, trailers, product stories, short videos, and AI episodes without booking a full shoot for every idea." },
  { icon: "user", title: "Use real creator identity", body: "Work with creators and influencers who bring personality, audience, style, and commercial value to your content." },
  { icon: "rights", title: "Clear rights from day one", body: "Define usage, platforms, territory, duration, categories, and content type before production begins." },
  { icon: "layers", title: "Built for production", body: "Perfect for brands, studios, agencies, game companies, education platforms, and entertainment teams." },
  { icon: "trend", title: "Scale winning campaigns", body: "When a creator performs well, extend the license, produce more assets, and build a long-term digital ambassador." },
  { icon: "risk", title: "Reduce AI likeness risk", body: "Avoid scraped faces, unclear rights, and risky deepfake workflows. Work with creators who approve the project." },
];
function Why() {
  return (
    <section id="why" className="biz-section">
      <div className="biz-wrap">
        <SectionHead eyebrow="Why businesses use Twingo" title="The new way to cast talent for AI content."
          text="Your team needs more content, more speed, more languages, and more creative variations. Twingo connects you with creator-approved likenesses so you can produce faster — without unclear AI rights." />
        <CardGrid items={WHY} cols={3} />
      </div>
    </section>
  );
}

/* ═══════════════════════ Section: Use cases ═══════════════════════ */
const CASES = [
  { icon: "ads", title: "Commercials & social ads", body: "Create performance ads, product videos, UGC-style creatives, and localized campaign variations." },
  { icon: "drama", title: "Micro-dramas & vertical series", body: "Cast creators as recurring characters in romance, comedy, thriller, education, or branded series." },
  { icon: "game", title: "Games & interactive stories", body: "Use creator likenesses for characters, NPCs, trailers, virtual hosts, and branded game content." },
  { icon: "film", title: "Film, trailers & pitch materials", body: "Create concept scenes, trailers, pre-visualization, AI-assisted sequences, and full AI-native productions." },
  { icon: "cap", title: "Education & edutainment", body: "Build engaging hosts, teachers, explainers, narrators, and story-driven learning experiences." },
  { icon: "music", title: "Music videos & entertainment", body: "Produce AI-generated music videos, visual albums, digital performances, and fan-driven content." },
];
function UseCases() {
  return (
    <section id="cases" className="biz-section">
      <div className="biz-wrap">
        <SectionHead eyebrow="Use cases" title="From influencer marketing to influencer production."
          text="Traditional influencer marketing is built around posts. Twingo is built around production — license creator likenesses to create stories, characters, ads, episodes, and digital experiences." />
        <CardGrid items={CASES} cols={3} />
        <div className="reveal" style={{ textAlign: "center", marginTop: 44 }}>
          <a href="#demo" className="biz-btn biz-btn-primary">Start a Project <span className="arr"><BIcon name="arrow" size={17} /></span></a>
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════ Section: How it works ═══════════════════════ */
const STEPS = [
  { icon: "search", title: "Search creator likenesses", body: "Browse by look, style, audience, niche, language, location, and approved usage types." },
  { icon: "check", title: "Request creator approval", body: "Send your project type, usage, platform, duration, territory, category, and creative direction." },
  { icon: "rights", title: "License the rights", body: "Receive clear commercial usage rights for the approved project, campaign, or production." },
  { icon: "create", title: "Produce your content", body: "Create ads, episodes, trailers, games, music videos, education clips, or branded stories." },
  { icon: "scale", title: "Scale what works", body: "Extend licenses, build recurring characters, or create long-term digital ambassador partnerships." },
];
function HowItWorks() {
  return (
    <section id="how" className="biz-section">
      <div className="biz-wrap">
        <SectionHead center eyebrow="How it works" title="Search. Approve. License. Create."
          text="Twingo makes creator likeness licensing simple for modern creative teams — get the right face, the right approval, and the right rights before you produce." />
        <div className="biz-steps">
          {STEPS.map((s, i) => (
            <div key={i} className="biz-step reveal" style={{ transitionDelay: i * 70 + "ms" }}>
              <div className="biz-step-num">{String(i + 1).padStart(2, "0")}</div>
              <IconChip name={s.icon} />
              <h3 className="biz-card-title">{s.title}</h3>
              <p className="biz-card-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════ Section: Built for every team ═══════════════════════ */
const TEAMS = [
  { icon: "brand", title: "For brands", body: "Turn creator likenesses into AI-powered ambassadors for campaigns, product launches, ads, and branded stories." },
  { icon: "studio", title: "For studios", body: "Cast creator likenesses for AI films, micro-dramas, trailers, concept tests, and serialized entertainment." },
  { icon: "agency", title: "For agencies", body: "Pitch faster, produce variations, localize content, and offer clients a new creator-powered production layer." },
  { icon: "game", title: "For game companies", body: "License creators for characters, trailers, digital hosts, branded game moments, and interactive storytelling." },
  { icon: "cap", title: "For education platforms", body: "Create trusted explainers, hosts, narrators, and story-led courses with approved creator identity." },
  { icon: "music", title: "For music & entertainment", body: "Produce digital performances, AI music videos, fan experiences, and creator-led entertainment assets." },
];
function Teams() {
  return (
    <section className="biz-section">
      <div className="biz-wrap">
        <SectionHead center eyebrow="Built for every creative team" title="One marketplace. Many production needs." />
        <CardGrid items={TEAMS} cols={3} />
      </div>
    </section>
  );
}

/* ═══════════════════════ Section: The difference ═══════════════════════ */
const DIFF = [
  { icon: "user", title: "Creator-approved", body: "Creators choose which projects, brands, categories, and content types they approve." },
  { icon: "rights", title: "Business-ready", body: "Companies get clear commercial usage rights before production starts." },
  { icon: "scale", title: "Built for scale", body: "Use one creator in one campaign, or build a full library of licensed digital talent for ongoing production." },
  { icon: "layers", title: "Multi-industry", body: "Works across film, micro-drama, commercials, education, music videos, games, social, and branded entertainment." },
];
function Difference() {
  return (
    <section className="biz-section">
      <div className="biz-wrap">
        <SectionHead center eyebrow="The Twingo difference" title="Creator-approved. Business-ready. Built for scale." />
        <CardGrid items={DIFF} cols={4} />
      </div>
    </section>
  );
}

/* ═══════════════════════ Section: Pricing ═══════════════════════ */
const PLANS = [
  { name: "Project License", desc: "For one campaign, video, micro-drama, commercial, or creative test.",
    feats: ["Creator search", "Project-based approval", "Defined usage rights", "Commercial license", "Basic support"],
    cta: "Start a Project", featured: false },
  { name: "Scale Plan", desc: "For brands, agencies, and studios producing multiple campaigns or content formats.",
    feats: ["Priority creator access", "Multi-project licensing", "Volume pricing", "Dedicated account support", "Faster approval workflow", "Extended usage options"],
    cta: "Talk to Sales", featured: true },
  { name: "Enterprise", desc: "For platforms, studios, game companies, music labels, and global brands.",
    feats: ["Custom creator pools", "Exclusive or category-limited rights", "API access", "Custom legal terms", "Dedicated success manager", "Strategic creator sourcing"],
    cta: "Book a Demo", featured: false },
];
function Pricing() {
  return (
    <section id="pricing" className="biz-section">
      <div className="biz-wrap">
        <SectionHead center eyebrow="Pricing" title="Start with one project. Scale to a creator library." />
        <div className="biz-pricing">
          {PLANS.map((p, i) => (
            <div key={i} className={"biz-plan reveal" + (p.featured ? " featured" : "")} style={{ transitionDelay: i * 70 + "ms" }}>
              {p.featured && <span className="biz-plan-tag">MOST POPULAR</span>}
              <h3 className="biz-plan-name">{p.name}</h3>
              <p className="biz-plan-desc">{p.desc}</p>
              <ul className="biz-plan-feats">
                {p.feats.map(f => <li key={f}><BIcon name="check" size={15} sw={2.4} />{f}</li>)}
              </ul>
              <a href="#demo" className={"biz-btn " + (p.featured ? "biz-btn-primary" : "biz-btn-ghost") + " biz-btn-block"}>{p.cta}</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════ Section: FAQ ═══════════════════════ */
const FAQS = [
  { q: "What is a likeness marketplace?", a: "A likeness marketplace is a platform where businesses can license the approved image, face, voice, style, or digital identity of creators for AI-powered content." },
  { q: "Can we use a creator likeness for ads?", a: "Yes, if the creator approves the project and the license includes commercial advertising rights." },
  { q: "Can we use creators in micro-dramas or films?", a: "Yes. Twingo is designed for AI-powered entertainment, including micro-dramas, films, series, trailers, and short-form storytelling." },
  { q: "Can creators reject a project?", a: "Yes. Creators stay in control. They can approve or reject projects based on brand, category, content type, territory, and usage." },
  { q: "Can we request exclusivity?", a: "Yes. Businesses can request exclusivity by category, territory, campaign, or time period, depending on the creator and deal terms." },
  { q: "Can we use the same creator across many videos?", a: "Yes. You can license a creator likeness for one project, multiple assets, or an ongoing campaign, depending on the agreement." },
  { q: "Is Twingo only for influencers?", a: "No. Twingo can include influencers, actors, models, creators, hosts, educators, performers, and digital-first talent." },
];
function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="biz-section">
      <div className="biz-wrap" style={{ maxWidth: 860 }}>
        <SectionHead center eyebrow="FAQ" title="Questions, answered." />
        <div className="biz-faq reveal">
          {FAQS.map((f, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={"biz-faq-item" + (isOpen ? " open" : "")}>
                <button className="biz-faq-q" aria-expanded={isOpen} onClick={() => setOpen(isOpen ? -1 : i)}>
                  <span>{f.q}</span>
                  <span className="biz-faq-plus"><BIcon name="arrow" size={16} sw={2} /></span>
                </button>
                <div className="biz-faq-a-wrap"><div style={{ overflow: "hidden" }}><p className="biz-faq-a">{f.a}</p></div></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ═══════════════════════ Final CTA + Footer ═══════════════════════ */
function FinalCTA() {
  return (
    <section id="demo" className="biz-section">
      <div className="biz-wrap">
        <div className="biz-final reveal">
          <div className="biz-final-glow" />
          <Eyebrow>Get started</Eyebrow>
          <h2 className="biz-final-h">The next generation of content needs <span className="grad">creator-approved likeness.</span></h2>
          <p className="biz-final-sub">Twingo helps your business access the faces of the creator economy — approved, licensed, and ready for AI-powered production.</p>
          <div className="biz-hero-cta" style={{ justifyContent: "center" }}>
            <a href="#demo" className="biz-btn biz-btn-primary">Book a Demo <span className="arr"><BIcon name="arrow" size={17} /></span></a>
            <a href="#demo" className="biz-btn biz-btn-ghost">Start a Project</a>
          </div>
        </div>
      </div>
    </section>
  );
}
function Footer() {
  return (
    <footer className="biz-footer">
      <div className="biz-wrap">
        <div className="biz-footer-top">
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <BizMark /><span className="biz-word">Twingo</span>
          </div>
          <p className="biz-footer-tag">Likeness marketplace for AI-powered content.</p>
        </div>
        <div className="biz-footer-bottom">© 2026 Twingo. All rights reserved.</div>
      </div>
    </footer>
  );
}

/* ═══════════════════════ Root ═══════════════════════ */
function BusinessSite({ audience, onAudience, theme, onTheme, t, setTweak }) {
  const BIZ_ACCENTS = ["#7b5bff", "#4f7bff", "#ff5ba6", "#12c2c2", "#ff8a3d"];
  return (
    <div className="biz-root" data-theme={theme}>
      <BizNav audience={audience} onAudience={onAudience} theme={theme} onTheme={onTheme} />
      <Hero />
      <Why />
      <UseCases />
      <HowItWorks />
      <Teams />
      <Difference />
      <Pricing />
      <Faq />
      <FinalCTA />
      <Footer />
      <TweaksPanel>
        <TweakSection label="Theme" />
        <TweakRadio label="Mode" value={theme} options={["dark", "light"]} onChange={v => onTheme(v)} />
        <TweakSection label="Accent" />
        <TweakColor label="Brand accent" value={(t && t.bizAccent) || "#7b5bff"} options={BIZ_ACCENTS} onChange={v => setTweak("bizAccent", v)} />
      </TweaksPanel>
    </div>
  );
}

window.BusinessSite = BusinessSite;
})();
