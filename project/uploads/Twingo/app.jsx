const { useState, useEffect, useRef } = React;

/* ───────────────────────── Tweaks ───────────────────────── */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#c7f500",
  "bizAccent": "#7b5bff"
}/*EDITMODE-END*/;
const ACCENTS = ["#7b5bff", "#4f7bff", "#ff5ba6", "#12c2c2", "#ff8a3d"];

/* ───────────────────────── Icons ───────────────────────── */
const I = {
  search: "M11 4a7 7 0 1 0 4.9 12L20 20M11 4a7 7 0 0 1 4.9 11.9",
  film: "M5 4h14v16H5zM5 9h14M5 15h14M9 4v16M15 4v16",
  shield: "M12 3l7 3v5c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z",
  chart: "M5 19V11M10 19V5M15 19v-6M20 19V9",
  userplus: "M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM3 21a6 6 0 0 1 12 0M18 8v6M21 11h-6",
  sliders: "M4 7h10M18 7h2M4 17h2M10 17h10M14 5v4M6 15v4",
  doc: "M7 3h7l5 5v13H7zM14 3v5h5M9 13h6M9 17h6",
  dollar: "M12 3v18M16 7.5c0-1.7-1.8-2.5-4-2.5s-4 .8-4 2.7c0 3.8 8 1.8 8 5.6 0 1.9-1.8 2.7-4 2.7s-4-.8-4-2.5",
  clock: "M12 7v5l3 2M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18Z",
  users: "M8 11a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7ZM2 20a6 6 0 0 1 12 0M16 4.5a3.5 3.5 0 0 1 0 7M22 20a6 6 0 0 0-5-5.9",
  check: "M5 12l4.5 4.5L19 7",
  play: "M8 5l11 7-11 7z",
  cap: "M3 9l9-4 9 4-9 4zM7 11v5c0 1 2.2 2 5 2s5-1 5-2v-5",
  tag: "M3 12l9-9 9 9-9 9zM12 8h.01",
  game: "M7 8h10a4 4 0 0 1 0 8c-1.5 0-2-1-3.5-1h-3C9 15 8.5 16 7 16a4 4 0 0 1 0-8ZM7 12h2M8 11v2M15 11h.01M17 13h.01",
  music: "M9 18V6l10-2v12M9 18a2.5 2.5 0 1 1-2.5-2.5M19 16a2.5 2.5 0 1 1-2.5-2.5",
  lock: "M6 11h12v9H6zM9 11V8a3 3 0 0 1 6 0v3",
};
function Icon({ name, size = 22, sw = 1.7, fill = false }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill={fill ? "currentColor" : "none"}
      stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d={I[name]} />
    </svg>
  );
}

/* ───────────────────────── Brand mark ───────────────────────── */
function Mark({ size = 26, color = "var(--ink)" }) {
  return (
    <svg width={size} height={size * 0.62} viewBox="0 0 42 26" fill="none" aria-hidden="true">
      <circle cx="14" cy="13" r="10.5" stroke={color} strokeWidth="3.4" />
      <circle cx="28" cy="13" r="10.5" stroke={color} strokeWidth="3.4" />
    </svg>
  );
}
function Wordmark({ light = false }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
      <Mark color={light ? "var(--bg)" : "var(--ink)"} />
      <span style={{ fontFamily: "var(--display)", fontWeight: 600, fontSize: 22, letterSpacing: "-0.02em", color: light ? "var(--bg)" : "var(--ink)" }}>Twingo</span>
    </span>
  );
}

/* ───────────────────────── Theme toggle (shared) ───────────────────────── */
function ThemeToggle({ theme, onTheme }) {
  const dark = theme === "dark";
  return (
    <button className="biz-theme-btn" aria-label="Toggle theme" title={dark ? "Switch to light mode" : "Switch to dark mode"}
      onClick={() => onTheme(dark ? "light" : "dark")}>
      {dark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" /></svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8z" /></svg>
      )}
    </button>
  );
}

/* ───────────────────────── Scroll reveal ───────────────────────── */
function useReveal(dep) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    if (!("IntersectionObserver" in window)) { els.forEach(e => e.classList.add("in")); return; }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => { if (en.isIntersecting) { en.target.classList.add("in"); io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: "0px 0px -6% 0px" });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, [dep]);
}

/* ───────────────────────── Nav ───────────────────────── */
function AudienceSwitch({ mode, onChange, dark = false }) {
  const opts = [["talent", "I'm talent"], ["business", "I'm a business"]];
  return (
    <div role="tablist" aria-label="Audience" style={{
      display: "inline-flex", position: "relative", padding: 4, gap: 2, borderRadius: 100,
      background: dark ? "rgba(255,255,255,0.05)" : "var(--surface)",
      border: "1px solid " + (dark ? "rgba(255,255,255,0.14)" : "var(--line-strong)")
    }}>
      {opts.map(([key, label]) => {
        const active = mode === key;
        return (
          <button
            key={key}
            role="tab"
            aria-selected={active}
            onClick={() => onChange(key)}
            style={{
              position: "relative", zIndex: 1, border: "none", cursor: "pointer",
              font: "600 14px var(--sans)", padding: "8px 16px", borderRadius: 100, lineHeight: 1, whiteSpace: "nowrap",
              background: active ? (dark ? "#fff" : "var(--ink)") : "transparent",
              color: active ? (dark ? "#0a0a12" : "var(--bg)") : (dark ? "rgba(255,255,255,0.6)" : "var(--ink-soft)"),
              transition: "background .2s ease, color .2s ease"
            }}
          >{label}</button>
        );
      })}
    </div>
  );
}

function Nav({ audience, onAudience, theme, onTheme }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll); onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [["How it works", "#how"], ["Why join", "#why"], ["FAQ", "#faq"]];
  return (
    <header className={"biz-nav" + (scrolled ? " scrolled" : "")}>
      <div className="biz-wrap biz-nav-inner">
        <a href="#top" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
          <Mark color="var(--strong)" /><span className="biz-word">Twingo</span>
        </a>
        <nav className="biz-nav-links">
          {links.map(([t, h]) => <a key={h} href={h}>{t}</a>)}
        </nav>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <ThemeToggle theme={theme} onTheme={onTheme} />
          <div className="biz-nav-switch"><AudienceSwitch mode={audience} onChange={onAudience} dark={theme === "dark"} /></div>
          <a href="Onboarding.html" className="biz-btn biz-btn-primary biz-btn-sm">Join</a>
        </div>
      </div>
    </header>
  );
}

/* ───────────────────────── Hero ───────────────────────── */
function TrustTick({ name, children }) {
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 9, fontSize: 14.5, color: "var(--ink-soft)", fontWeight: 500 }}>
      <span style={{ color: "var(--ink)" }}><Icon name={name} size={18} sw={1.8} /></span>{children}
    </span>
  );
}

function LicenseCard() {
  const rows = [["Campaign", "Global Skincare Brand"], ["Usage", "Social ads · Website · OOH"], ["Earnings", "$12,500"]];
  return (
    <div style={{
      position: "absolute", left: -34, bottom: -36, width: 340, background: "var(--surface)",
      border: "1px solid var(--line)", borderRadius: 18, padding: "20px 22px",
      boxShadow: "0 30px 60px -20px rgba(20,19,16,0.28)"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 16 }}>
        <span style={{ fontFamily: "var(--display)", fontWeight: 600, fontSize: 16 }}>Likeness license approved</span>
        <span style={{ fontSize: 12, fontWeight: 600, color: "#1f7a46", background: "#d6f5e2", padding: "4px 10px", borderRadius: 100 }}>Active</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
        {rows.map(([k, v], i) => (
          <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 12, paddingTop: i ? 11 : 0, borderTop: i ? "1px solid var(--line)" : "none" }}>
            <span style={{ fontSize: 13, color: "var(--ink-faint)", fontFamily: "var(--mono)", letterSpacing: "0.04em" }}>{k}</span>
            <span style={{ fontSize: 14.5, fontWeight: i === 2 ? 700 : 500, textAlign: "right" }}>{v}</span>
          </div>
        ))}
      </div>
      <div style={{ marginTop: 16, display: "flex", justifyContent: "flex-end" }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: "var(--bg)", background: "var(--ink)", padding: "6px 14px", borderRadius: 100, letterSpacing: "0.04em" }}>PAID</span>
      </div>
    </div>
  );
}

function Hero() {
  const ticks = [["check", "You approve every use"], ["dollar", "95% creator payout"], ["shield", "Safe & ethical use"]];
  return (
    <section id="top" className="biz-hero">
      <div className="biz-hero-glow" />
      <div className="biz-wrap biz-hero-grid">
        <div className="biz-hero-copy reveal in">
          <div className="biz-eyebrow"><span className="dot" />A marketplace for your likeness</div>
          <h1 className="biz-h1">License your likeness. Get paid when brands use your <span className="grad">AI twin.</span></h1>
          <p className="biz-lead">
            Twingo helps influencers and creators earn from licensed AI versions of their likeness — with full control, transparency, and approval on every use.
          </p>
          <div className="biz-badges">
            {ticks.map(([n, t]) => (
              <span key={t} className="biz-badge"><Icon name={n} size={15} sw={2} />{t}</span>
            ))}
          </div>
          <div className="biz-hero-cta">
            <a href="Onboarding.html" className="biz-btn biz-btn-primary">Join <span className="arr">→</span></a>
            <span className="biz-hint">Free to join. No obligation.</span>
          </div>
        </div>

        <div className="biz-hero-visual reveal in" style={{ minHeight: "auto" }}>
          <div className="biz-collage">
            <image-slot id="hero-1" shape="rounded" radius="18" style={{ width: "100%", height: 340, gridRow: "1 / 3" }} placeholder="Drop a portrait"></image-slot>
            <image-slot id="hero-2" shape="rounded" radius="18" style={{ width: "100%", height: 164 }} placeholder="Drop a portrait"></image-slot>
            <image-slot id="hero-3" shape="rounded" radius="18" style={{ width: "100%", height: 164 }} placeholder="Drop a portrait"></image-slot>
          </div>
          <a href="https://www.instagram.com/yana_ivanovaa/" target="_blank" rel="noopener noreferrer" className="biz-ig">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
            </svg>
            @yana_ivanovaa
          </a>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Stats strip ───────────────────────── */
const STATS = [
  { icon: "users", big: "1,500+", sub: "Verified creators" },
  { icon: "shield", big: "Safe by design", sub: "No adult, political, religious or deceptive use" },
  { icon: "clock", big: "3 min", sub: "Average verification time" },
  { icon: "dollar", big: "95%", sub: "Creator payout" },
];
function StatsStrip() {
  return (
    <section className="biz-section" style={{ paddingTop: 0 }}>
      <div className="biz-wrap">
        <div className="biz-eyebrow reveal" style={{ justifyContent: "center", display: "flex", marginBottom: 26 }}><span className="dot" />Creators are joining early</div>
        <div className="biz-statband reveal">
          {STATS.map((s, i) => (
            <div key={i} className="biz-stat">
              <span className="ic"><Icon name={s.icon} size={24} /></span>
              <div>
                <div className="biz-stat-big">{s.big}</div>
                <div className="biz-stat-sub">{s.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Own them (features) ───────────────────────── */
const FEATURES = [
  { icon: "search", title: "Get discovered by brands", body: "We connect you with brands, agencies, and content teams looking for AI-ready talent." },
  { icon: "film", title: "Earn without filming every campaign", body: "License your likeness for AI campaigns, training, content, and more — on your terms." },
  { icon: "shield", title: "You stay in control", body: "Approve every project. Set your rules. Choose what your AI twin can (and can't) be used for." },
  { icon: "chart", title: "Build a new income stream", body: "Turn your influence into a licensed asset and unlock recurring opportunities." },
];
function OwnThem() {
  return (
    <section id="why" className="biz-section">
      <div className="biz-wrap biz-split">
        <div className="reveal">
          <div className="biz-eyebrow"><span className="dot" />Why join</div>
          <h2 className="biz-h2">AI is creating new opportunities. <span className="grad">You should own them.</span></h2>
          <p className="biz-sub" style={{ marginBottom: 16, maxWidth: 380 }}>
            Brands are already using AI-generated people in ads, social content, and campaigns.
          </p>
          <p className="biz-sub" style={{ maxWidth: 380 }}>
            Twingo makes sure creators are part of that future — with consent, control, and compensation.
          </p>
        </div>
        <div className="biz-grid" style={{ "--cols": 2 }}>
          {FEATURES.map((f, i) => (
            <div key={i} className="biz-card biz-card-hover reveal" style={{ transitionDelay: (i * 70) + "ms" }}>
              <span className="biz-icon-chip"><Icon name={f.icon} size={22} /></span>
              <h3 className="biz-card-title">{f.title}</h3>
              <p className="biz-card-body">{f.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── How it works ───────────────────────── */
const STEPS = [
  { icon: "userplus", title: "Create your twin", body: "Create your likeness and verify your identity." },
  { icon: "sliders", title: "Set your rules", body: "Choose what industries, campaigns, and use cases you're open to." },
  { icon: "doc", title: "Review opportunities", body: "See who wants to license your likeness, how it'll be used, and what you'll earn." },
  { icon: "dollar", title: "Approve, earn, or decline", body: "Nothing goes live without your approval. You get paid when your likeness is used." },
];
function HowItWorks() {
  return (
    <section id="how" className="biz-section">
      <div className="biz-wrap">
        <div className="biz-sechead center reveal">
          <div className="biz-eyebrow" style={{ justifyContent: "center", display: "inline-flex" }}><span className="dot" />How it works</div>
          <h2 className="biz-h2">How Twingo works</h2>
        </div>
        <div className="biz-grid" style={{ "--cols": 4 }}>
          {STEPS.map((s, i) => (
            <div key={i} className="biz-step reveal" style={{ transitionDelay: (i * 70) + "ms" }}>
              <div className="biz-step-num">{String(i + 1).padStart(2, "0")}</div>
              <span className="biz-icon-chip"><Icon name={s.icon} size={22} /></span>
              <h3 className="biz-card-title">{s.title}</h3>
              <p className="biz-card-body">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── FAQ ───────────────────────── */
const FAQS = [
  { q: "Is it really free?", a: "Yes. Sign up is free. Identity verification is free. You always take 75% of every licence fee. Twingo earns 25% on direct deals, or 10% if you're agent-managed (your agent takes the other 15% from our cut, not yours). No monthly fees, no hidden costs, no contract you can't walk away from." },
  { q: "Can I leave whenever I want?", a: "Yes. Revocation is built in from day one. You can withdraw consent any time — new licences stop immediately. Existing licences are suppressed on a defined SLA, with the full lifecycle logged. We're honest about model weights: those are harder, and the buyer's contract with us defines what happens." },
  { q: "Will my face be used without my permission?", a: "No. No commercial use happens without your specific, granular consent. Every licence is a contract you approve before money changes hands. Your identity documents and biometric data never leave our encrypted off-chain storage." },
  { q: "How much will I actually earn?", a: "It depends on the licence. Standard campaign work typically runs £1,500–£12,000 per project. Featured talent and lead presenter roles can run substantially higher. Long-form productions, broadcaster archives, and exclusivity premiums push fees further still." },
  { q: "How do I actually get paid?", a: "Bank transfer or Stripe Connect, depending on your region. We target first payout within 30 days of your twin being licensed. You see every transaction, every fee, and every payout in your dashboard." },
  { q: "I have an agent. Does that change my pay?", a: "No — you still get 75%. What changes is how the other 25% is split: Twingo takes 10% (down from 25%) and your agent takes 15%, both from our side of the deal, not yours. We integrate with Spotlight directly, so your agent can manage your twin alongside your other bookings." },
  { q: "What about minors?", a: "Under-18s can only join through a parent or legal guardian, with enhanced safeguards at every stage: stricter consent, mandatory cooling-off periods, restricted use categories, and elevated review on every booking." },
  { q: "What if I just don't want to accept any work?", a: "That's fine. You're never under any obligation. You can be on the registry and simply reject every licence request. The choice is always yours." },
];

function FaqItem({ q, a, open, onToggle }) {
  return (
    <div className={"biz-faq-item" + (open ? " open" : "")}>
      <button className="biz-faq-q" aria-expanded={open} onClick={onToggle}>
        <span>{q}</span>
        <span className="biz-faq-plus">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M13 6l6 6-6 6" /></svg>
        </span>
      </button>
      <div className="biz-faq-a-wrap"><div style={{ overflow: "hidden" }}><p className="biz-faq-a">{a}</p></div></div>
    </div>
  );
}

function Faq() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="biz-section">
      <div className="biz-wrap" style={{ maxWidth: 860 }}>
        <div className="biz-sechead center reveal">
          <div className="biz-eyebrow" style={{ justifyContent: "center", display: "inline-flex" }}><span className="dot" />Questions, answered</div>
          <h2 className="biz-h2">The things you're actually wondering.</h2>
        </div>
        <div className="biz-faq reveal">
          {FAQS.map((f, i) => (
            <FaqItem key={i} q={f.q} a={f.a} open={open === i} onToggle={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── Waitlist form ───────────────────────── */
const PLATFORMS = [
  { id: "instagram", label: "Instagram", hint: "instagram.com/yourhandle" },
  { id: "tiktok", label: "TikTok", hint: "tiktok.com/@yourhandle" },
  { id: "youtube", label: "YouTube", hint: "youtube.com/@yourchannel" },
  { id: "facebook", label: "Facebook", hint: "facebook.com/yourpage" },
  { id: "x", label: "X", hint: "x.com/yourhandle" },
];
const FOLLOWERS = ["Under 10K", "10K – 50K", "50K – 250K", "250K – 1M", "1M+"];
const CATEGORIES = ["Beauty & skincare", "Fashion", "Fitness & health", "Gaming", "Lifestyle", "Tech", "Music", "Comedy & entertainment", "Other"];
const USES = [["film", "Film"], ["play", "Micro-drama"], ["cap", "Education"], ["tag", "Commercial"], ["game", "Games"], ["music", "Music video"]];

let _acctId = 1;
const newAcct = () => ({ key: _acctId++, platform: "instagram", url: "" });

function WaitlistForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [accounts, setAccounts] = useState([newAcct()]);
  const [followers, setFollowers] = useState("");
  const [category, setCategory] = useState("");
  const [uses, setUses] = useState([]);
  const [touched, setTouched] = useState(false);
  const [done, setDone] = useState(false);

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const filled = accounts.filter(a => a.url.trim() !== "");
  const valid = name.trim() !== "" && emailValid && filled.length > 0;

  const upd = (key, patch) => setAccounts(a => a.map(x => x.key === key ? { ...x, ...patch } : x));
  const add = () => setAccounts(a => [...a, newAcct()]);
  const rm = (key) => setAccounts(a => a.length > 1 ? a.filter(x => x.key !== key) : a);
  const toggleUse = (u) => setUses(us => us.includes(u) ? us.filter(x => x !== u) : [...us, u]);

  const submit = (e) => { e.preventDefault(); setTouched(true); if (valid) setDone(true); };

  const label = { display: "block", fontSize: 13, fontWeight: 600, color: "var(--ink)", marginBottom: 8 };
  const field = {
    width: "100%", background: "var(--surface)", border: "1px solid var(--line-strong)",
    borderRadius: 11, padding: "13px 15px", color: "var(--ink)", fontSize: 15, outline: "none",
    transition: "border-color .18s, box-shadow .18s"
  };
  const fOn = e => { e.target.style.borderColor = "var(--ink)"; e.target.style.boxShadow = "0 0 0 3px var(--accent-soft)"; };
  const fOff = e => { e.target.style.borderColor = "var(--line-strong)"; e.target.style.boxShadow = "none"; };
  const selWrap = { position: "relative" };
  const caret = <span style={{ position: "absolute", right: 14, top: "50%", transform: "translateY(-50%)", pointerEvents: "none", color: "var(--ink-faint)", fontSize: 11 }}>▼</span>;

  return (
    <section id="apply" style={{ padding: "104px 0 110px" }}>
      <div className="wrap apply-grid" style={{ display: "grid", gridTemplateColumns: "0.8fr 1.2fr", gap: 64, alignItems: "start" }}>
        {/* left pitch */}
        <div className="reveal apply-left">
          <div className="eyebrow" style={{ marginBottom: 22 }}>Join the waitlist</div>
          <h2 className="display" style={{ fontSize: "clamp(34px, 4vw, 52px)", marginBottom: 22 }}>Be early.<br /><em>Be in control.</em></h2>
          <p style={{ color: "var(--ink-soft)", fontSize: 16.5, maxWidth: 340, marginBottom: 30 }}>
            The first creators on Twingo will be easier for brands to discover when we go live.
          </p>
          <ul style={{ listStyle: "none", padding: 0, margin: "0 0 34px", display: "flex", flexDirection: "column", gap: 13 }}>
            {["Free to join", "You approve every use", "No obligation"].map((t, i) => (
              <li key={i} style={{ display: "flex", alignItems: "center", gap: 11, fontSize: 16, fontWeight: 500 }}>
                <span style={{ width: 22, height: 22, borderRadius: "50%", background: "var(--accent)", color: "var(--ink)", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}><Icon name="check" size={14} sw={2.4} /></span>{t}
              </li>
            ))}
          </ul>
          <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
            <div style={{ display: "flex" }}>
              {[0, 1, 2, 3].map(i => (
                <span key={i} className="ph" style={{ width: 38, height: 38, borderRadius: "50%", marginLeft: i ? -10 : 0, border: "2px solid var(--bg)", display: "inline-block" }} />
              ))}
            </div>
            <span style={{ fontSize: 14, color: "var(--ink-soft)", lineHeight: 1.4 }}><strong style={{ color: "var(--ink)" }}>1,500+ creators</strong><br />are waiting</span>
          </div>
        </div>

        {/* right form */}
        <div className="reveal">
          {done ? (
            <SuccessCard name={name} email={email} accounts={filled} followers={followers} category={category} uses={uses}
              onReset={() => { setDone(false); setName(""); setEmail(""); setAccounts([newAcct()]); setFollowers(""); setCategory(""); setUses([]); setTouched(false); }} />
          ) : (
            <form onSubmit={submit} noValidate style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 22, padding: "34px 34px 36px" }}>
              <h3 className="display" style={{ fontSize: 26, marginBottom: 6 }}>Join the waitlist</h3>
              <p style={{ color: "var(--ink-soft)", fontSize: 15, marginBottom: 26 }}>Fill in a few details and we'll keep you updated.</p>

              <div className="form-2col" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 18, marginBottom: 20 }}>
                <div>
                  <label style={label}>Full name</label>
                  <input style={field} value={name} onChange={e => setName(e.target.value)} onFocus={fOn} onBlur={fOff} placeholder="Enter your name" />
                  {touched && name.trim() === "" && <Err>Please enter your name</Err>}
                </div>
                <div>
                  <label style={label}>Email</label>
                  <input style={field} type="email" value={email} onChange={e => setEmail(e.target.value)} onFocus={fOn} onBlur={fOff} placeholder="Enter your email" />
                  {touched && !emailValid && <Err>Enter a valid email</Err>}
                </div>
                <div>
                  <label style={label}>Follower range</label>
                  <div style={selWrap}>
                    <select value={followers} onChange={e => setFollowers(e.target.value)} onFocus={fOn} onBlur={fOff} style={{ ...field, appearance: "none", paddingRight: 34, cursor: "pointer", color: followers ? "var(--ink)" : "var(--ink-faint)" }}>
                      <option value="" disabled>Select range</option>
                      {FOLLOWERS.map(f => <option key={f} value={f} style={{ color: "#111" }}>{f}</option>)}
                    </select>{caret}
                  </div>
                </div>
                <div>
                  <label style={label}>Creator category</label>
                  <div style={selWrap}>
                    <select value={category} onChange={e => setCategory(e.target.value)} onFocus={fOn} onBlur={fOff} style={{ ...field, appearance: "none", paddingRight: 34, cursor: "pointer", color: category ? "var(--ink)" : "var(--ink-faint)" }}>
                      <option value="" disabled>Select category</option>
                      {CATEGORIES.map(c => <option key={c} value={c} style={{ color: "#111" }}>{c}</option>)}
                    </select>{caret}
                  </div>
                </div>
              </div>

              {/* social accounts repeater */}
              <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", marginBottom: 10 }}>
                <label style={{ ...label, marginBottom: 0 }}>Your social accounts</label>
                <span style={{ fontSize: 13, color: "var(--ink-faint)" }}>{filled.length} added</span>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                {accounts.map(a => {
                  const plat = PLATFORMS.find(p => p.id === a.platform);
                  return (
                    <div key={a.key} className="acct-row" style={{ display: "grid", gridTemplateColumns: "150px 1fr auto", gap: 10 }}>
                      <div style={selWrap}>
                        <select value={a.platform} onChange={e => upd(a.key, { platform: e.target.value })} onFocus={fOn} onBlur={fOff} style={{ ...field, appearance: "none", paddingRight: 32, cursor: "pointer" }}>
                          {PLATFORMS.map(p => <option key={p.id} value={p.id} style={{ color: "#111" }}>{p.label}</option>)}
                        </select>{caret}
                      </div>
                      <input style={field} value={a.url} onChange={e => upd(a.key, { url: e.target.value })} onFocus={fOn} onBlur={fOff} placeholder={plat.hint} />
                      <button type="button" onClick={() => rm(a.key)} aria-label="Remove" disabled={accounts.length === 1}
                        style={{ background: "transparent", border: "1px solid var(--line-strong)", borderRadius: 11, width: 46, fontSize: 18, color: accounts.length === 1 ? "var(--line-strong)" : "var(--ink-soft)", cursor: accounts.length === 1 ? "not-allowed" : "pointer", transition: "border-color .2s, color .2s" }}
                        onMouseEnter={e => { if (accounts.length > 1) { e.currentTarget.style.borderColor = "var(--ink)"; e.currentTarget.style.color = "var(--ink)"; } }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--line-strong)"; e.currentTarget.style.color = accounts.length === 1 ? "var(--line-strong)" : "var(--ink-soft)"; }}>×</button>
                    </div>
                  );
                })}
              </div>
              {touched && filled.length === 0 && <Err>Add at least one social account link</Err>}
              <button type="button" onClick={add} style={{ marginTop: 12, width: "100%", background: "transparent", border: "1px dashed var(--line-strong)", borderRadius: 11, padding: "12px", fontSize: 14, fontWeight: 600, color: "var(--ink)", cursor: "pointer", transition: "border-color .2s, background .2s" }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--ink)"; e.currentTarget.style.background = "var(--bg)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--line-strong)"; e.currentTarget.style.background = "transparent"; }}>+ Add another account</button>

              {/* approval uses */}
              <div style={{ marginTop: 26 }}>
                <label style={{ ...label, marginBottom: 12 }}>What you approve your AI likeness to be used for</label>
                <div className="uses-grid" style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 10 }}>
                  {USES.map(([ic, lab]) => {
                    const on = uses.includes(lab);
                    return (
                      <button key={lab} type="button" onClick={() => toggleUse(lab)} style={{
                        display: "flex", alignItems: "center", gap: 9, padding: "12px 14px", borderRadius: 11, cursor: "pointer",
                        fontSize: 14, fontWeight: 600, fontFamily: "var(--sans)", transition: "all .16s",
                        background: on ? "var(--accent)" : "var(--bg)", color: "var(--ink)",
                        border: "1px solid " + (on ? "var(--accent)" : "var(--line-strong)")
                      }}>
                        <Icon name={ic} size={18} sw={1.8} />{lab}
                      </button>
                    );
                  })}
                </div>
              </div>

              <button type="submit" className="btn btn-accent" style={{ width: "100%", justifyContent: "center", marginTop: 26, padding: "16px" }}>Join <span className="arr">→</span></button>
              <p style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 7, fontSize: 13, color: "var(--ink-faint)", marginTop: 16 }}>
                <Icon name="lock" size={14} /> We respect your privacy. No spam, ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Err({ children }) { return <div style={{ color: "#c0492f", fontSize: 13, marginTop: 7 }}>{children}</div>; }

function SuccessCard({ name, email, accounts, followers, category, uses, onReset }) {
  return (
    <div style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 22, padding: "40px 36px" }}>
      <div style={{ width: 54, height: 54, borderRadius: "50%", background: "var(--accent)", color: "var(--ink)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 22 }}><Icon name="check" size={28} sw={2.4} /></div>
      <h3 className="display" style={{ fontSize: 30, marginBottom: 10 }}>You're on the list, {name.split(" ")[0]}.</h3>
      <p style={{ color: "var(--ink-soft)", fontSize: 16, marginBottom: 28, maxWidth: 420 }}>
        Thanks for joining Twingo. We review every creator personally — expect to hear from us at <strong style={{ color: "var(--ink)" }}>{email}</strong> as we roll out access.
      </p>
      <div style={{ borderTop: "1px solid var(--line)", paddingTop: 22, display: "flex", flexDirection: "column", gap: 16 }}>
        <SummaryRow label="Accounts">
          <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
            {accounts.map((a, i) => {
              const plat = PLATFORMS.find(p => p.id === a.platform);
              return <span key={i} style={{ fontSize: 14.5 }}><span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--ink-soft)", marginRight: 8 }}>{plat.label}</span>{a.url}</span>;
            })}
          </div>
        </SummaryRow>
        {followers && <SummaryRow label="Followers"><span style={{ fontSize: 14.5 }}>{followers}</span></SummaryRow>}
        {category && <SummaryRow label="Category"><span style={{ fontSize: 14.5 }}>{category}</span></SummaryRow>}
        {uses.length > 0 && <SummaryRow label="Approved uses">
          <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
            {uses.map(u => <span key={u} style={{ fontSize: 13, fontWeight: 600, background: "var(--accent)", color: "var(--ink)", padding: "4px 11px", borderRadius: 100 }}>{u}</span>)}
          </div>
        </SummaryRow>}
      </div>
      <button onClick={onReset} className="btn btn-ghost" style={{ marginTop: 28 }}>Submit another</button>
    </div>
  );
}
function SummaryRow({ label, children }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "110px 1fr", gap: 14, alignItems: "start" }}>
      <span style={{ fontFamily: "var(--mono)", fontSize: 11, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--ink-faint)", paddingTop: 2 }}>{label}</span>
      {children}
    </div>
  );
}

/* ───────────────────────── Footer ───────────────────────── */
function Footer() {
  return (
    <footer className="biz-footer">
      <div className="biz-wrap" style={{ textAlign: "center" }}>
        <div style={{ display: "flex", justifyContent: "center", marginBottom: 22 }}>
          <span style={{ display: "inline-flex", alignItems: "center", gap: 10 }}><Mark size={28} color="var(--strong)" /><span className="biz-word" style={{ fontSize: 26 }}>Twingo</span></span>
        </div>
        <h2 className="biz-h2" style={{ maxWidth: 640, margin: "0 auto 14px" }}>Your likeness. Your consent. Your rules. <span className="grad">Your revenue.</span></h2>
        <p className="biz-sub" style={{ maxWidth: 540, margin: "0 auto 32px" }}>Twingo is built for a future where creators are protected, respected, and paid.</p>
        <div className="biz-hero-cta" style={{ justifyContent: "center", marginBottom: 44 }}>
          <a href="Onboarding.html" className="biz-btn biz-btn-primary">Join Now <span className="arr">→</span></a>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 20, flexWrap: "wrap", paddingTop: 24, borderTop: "1px solid var(--line)" }}>
          <span className="biz-footer-bottom" style={{ border: "none", padding: 0 }}>© 2026 Twingo</span>
          <div style={{ display: "flex", gap: 24, fontSize: 14, color: "var(--muted)" }}>
            <a href="#how">How it works</a><a href="#why">Why join</a><a href="#faq">FAQ</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

/* ───────────────────────── Early access ───────────────────────── */
function EarlyAccess() {
  return (
    <section id="early" className="biz-section">
      <div className="biz-wrap">
        <div className="biz-final reveal">
          <div className="biz-final-glow" />
          <div className="biz-eyebrow"><span className="dot" />Early access</div>
          <h2 className="biz-final-h">Get in early. <span className="grad">Get seen first.</span></h2>
          <p className="biz-final-sub">
            The first creators on Twingo will get priority visibility in front of studios, brands, and production partners.
          </p>
          <p className="biz-final-sub" style={{ marginTop: -14 }}>
            Claim your spot early and position yourself at the front of the next wave of the creator economy.
          </p>
          <div className="biz-hero-cta" style={{ justifyContent: "center", marginBottom: 0 }}>
            <a href="Onboarding.html" className="biz-btn biz-btn-primary">Join Now <span className="arr">→</span></a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ───────────────────────── App ───────────────────────── */
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [audience, setAudience] = useState(() => {
    try { return localStorage.getItem("twingo-audience") || "talent"; } catch (e) { return "talent"; }
  });
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("twingo-theme") || "dark"; } catch (e) { return "dark"; }
  });
  const setAud = (m) => { setAudience(m); try { localStorage.setItem("twingo-audience", m); } catch (e) {} window.scrollTo(0, 0); };
  const setTh = (m) => { setTheme(m); try { localStorage.setItem("twingo-theme", m); } catch (e) {} };
  useReveal(audience + theme);
  useEffect(() => {
    document.documentElement.style.setProperty("--biz-accent", t.bizAccent || "#7b5bff");
  }, [t.bizAccent]);
  useEffect(() => {
    document.body.style.background = theme === "dark" ? "#06060b" : "#f2f1ea";
    document.body.style.color = theme === "dark" ? "#ececf4" : "#16161e";
  }, [theme]);

  if (audience === "business") {
    const BusinessSite = window.BusinessSite;
    return <BusinessSite audience={audience} onAudience={setAud} theme={theme} onTheme={setTh} t={t} setTweak={setTweak} />;
  }

  return (
    <div className="biz-root" data-theme={theme}>
      <Nav audience={audience} onAudience={setAud} theme={theme} onTheme={setTh} />
      <Hero />
      <StatsStrip />
      <OwnThem />
      <HowItWorks />
      <Faq />
      <EarlyAccess />
      <Footer />
      <TweaksPanel>
        <TweakSection label="Theme" />
        <TweakRadio label="Mode" value={theme} options={["dark", "light"]} onChange={setTh} />
        <TweakSection label="Accent" />
        <TweakColor label="Brand accent" value={t.bizAccent} options={ACCENTS} onChange={v => setTweak("bizAccent", v)} />
      </TweaksPanel>
    </div>
  );
}
function hexToSoft(hex) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16), g = parseInt(h.slice(2, 4), 16), b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},0.35)`;
}

/* Shared with business.jsx */
Object.assign(window, { AudienceSwitch, ThemeToggle });

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
