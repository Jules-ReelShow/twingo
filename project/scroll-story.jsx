/* ═══════════ TwinGo — homepage scroll experience ═══════════ */
/* Pinned scrollytelling: scroll progress drives the platform story.
   Exports window.ScrollStory. Loaded as text/babel AFTER twingo-shared.jsx. */

const { Button: SBtn, Badge: SBadge } = window.TwingoDesignSystem_122db6;
const F = INFLUENCERS;

const easeOut = (t) => 1 - Math.pow(1 - t, 3);

/* ---------- Small animated primitives ---------- */
function Chip({ on, dot, children }) {
  return (
    <span className={"ss-chip" + (on ? " ss-chip--on" : "")}>
      <span className="dot" style={{ background: on ? "var(--success)" : "var(--border-strong)" }} />{children}
    </span>
  );
}
function MiniTwin({ inf, big }) {
  return (
    <div className={"ss-twin" + (big ? " ss-twin--big" : "")}>
      <img src={inf.photo} alt="" />
      <span className="ss-twin__name">{inf.name.split(" ")[0]}</span>
    </div>
  );
}

/* ---------- The seven scenes ---------- */
/* Each visual receives sub-progress `s` (0..1) for scroll-linked motion. */
const SCENES = [
  {
    side: "both", tag: "How TwinGo works",
    title: "One AI twin. Two sides of the marketplace.",
    desc: "Creators license their likeness as an AI twin. Clients generate content with it — and the talent approves every use. Scroll to see both journeys.",
    visual: (s) => (
      <div className="ss-intro">
        <div style={{ transform: `translateX(${-30 + s * 30}px)`, opacity: easeOut(Math.min(1, s * 2)) }}>
          <MiniTwin inf={F[0]} big />
        </div>
        <div className="ss-intro__link" style={{ opacity: easeOut(Math.min(1, s * 1.6)) }}>⇄</div>
        <div style={{ transform: `translateX(${30 - s * 30}px)`, opacity: easeOut(Math.min(1, s * 2)) }}>
          <MiniTwin inf={F[3]} big />
        </div>
      </div>
    ),
  },
  {
    side: "talent", tag: "Talent · Step 1", step: 0,
    title: "License your likeness.",
    desc: "Connect your socials and verify your identity, then list your likeness for clients to license as an AI twin. Consent on file, revocable anytime.",
    visual: (s) => (
      <div className="ss-card">
        <div className="ss-card__row">
          <img className="ss-ava" src={F[0].photo} alt="" />
          <div style={{ flex: 1 }}>
            <div className="ss-card__name">Mara Voss</div>
            <div className="ss-card__meta">Beauty · Los Angeles</div>
          </div>
          <span style={{ opacity: easeOut(Math.min(1, s * 2)) }}><SBadge tone="paid" dot>Verified</SBadge></span>
        </div>
        <div className="ss-chips">
          <Chip on={s > 0.15} dot>Instagram</Chip>
          <Chip on={s > 0.4} dot>TikTok</Chip>
          <Chip on={s > 0.65} dot>YouTube</Chip>
        </div>
        <div className="ss-build">
          <div className="ss-build__bar"><span style={{ width: `${Math.min(100, s * 130)}%` }} /></div>
          <span className="ss-build__label">{s > 0.8 ? "Likeness ready to be licensed" : "Building your portfolio…"}</span>
        </div>
      </div>
    ),
  },
  {
    side: "talent", tag: "Talent · Step 2", step: 1,
    title: "Set your license tiers.",
    desc: "Name your own packages and rates — a single use, a campaign, a category buyout. You decide how your twin can be used.",
    visual: (s) => {
      const tiers = [{ n: "Single use", p: 380 }, { n: "Campaign", p: 820, pop: true }, { n: "Buyout", p: 2400 }];
      return (
        <div className="ss-tiers">
          {tiers.map((t, i) => {
            const app = easeOut(Math.max(0, Math.min(1, s * 3 - i)));
            return (
              <div key={i} className={"ss-tier" + (t.pop ? " ss-tier--pop" : "")} style={{ opacity: app, transform: `translateY(${(1 - app) * 24}px)` }}>
                {t.pop && <span className="ss-tier__tag">Popular</span>}
                <div className="ss-tier__n">{t.n}</div>
                <div className="ss-tier__p">${t.p}</div>
              </div>
            );
          })}
        </div>
      );
    },
  },
  {
    side: "talent", tag: "Talent · Step 3", step: 2,
    title: "Approve every use.",
    desc: "Nothing goes live without your sign-off. Review each generated asset and approve — or decline — with one tap. Revoke anytime.",
    visual: (s) => (
      <div className="ss-card">
        <div className="ss-preview">
          <img src={F[0].photo} alt="" />
          <span className="ss-stamp" style={{ opacity: s > 0.6 ? 1 : 0, transform: `scale(${s > 0.6 ? 1 : 1.5}) rotate(-8deg)` }}>✓ Approved</span>
        </div>
        <div className="ss-card__meta" style={{ marginTop: 12 }}>Aperture AI · Skincare hero — variant 3</div>
        <div className="ss-approve">
          <span className={"ss-approve__btn ss-approve__btn--yes" + (s > 0.6 ? " on" : "")}>Approve</span>
          <span className="ss-approve__btn">Decline</span>
        </div>
      </div>
    ),
  },
  {
    side: "buyer", tag: "Buyer · Step 1", step: 0,
    title: "Browse verified twins.",
    desc: "Filter by gender, genre, platform and reach. Every twin is identity-verified and consent-backed, cleared for AI content.",
    visual: (s) => (
      <div className="ss-grid">
        {[F[1], F[3], F[6], F[8], F[10], F[13]].map((inf, i) => {
          const app = easeOut(Math.max(0, Math.min(1, s * 3 - i * 0.35)));
          const pick = s > 0.7 && i === 2;
          return (
            <div key={i} className={"ss-gcard" + (pick ? " ss-gcard--pick" : "")} style={{ opacity: app, transform: `translateY(${(1 - app) * 20}px)` }}>
              <img src={inf.photo} alt="" />
              <span className="ss-gcard__name">{inf.name.split(" ")[0]}</span>
            </div>
          );
        })}
      </div>
    ),
  },
  {
    side: "buyer", tag: "Buyer · Step 2", step: 1,
    title: "Pick a license — pay securely.",
    desc: "Choose a package and TwinGo hands you off to our secure checkout partner for payment and the signed contract. Consent travels with the license.",
    visual: (s) => (
      <div className="ss-checkout">
        <div className="ss-handoff">
          <span className="ss-handoff__mark">TwinGo</span>
          <span className="ss-handoff__arrow" style={{ transform: `translateX(${easeOut(Math.min(1, s * 2)) * 8}px)` }}>→</span>
          <span className="ss-handoff__mark ss-handoff__mark--sc">Show<span style={{ color: "var(--text-tertiary)" }}>Crew</span></span>
        </div>
        <div className="ss-steps">
          {["Select Campaign — $820", "Sign license contract", "Pay securely at checkout"].map((t, i) => {
            const done = s * 3 > i + 0.5;
            return (
              <div key={i} className="ss-step" style={{ opacity: easeOut(Math.max(0, Math.min(1, s * 3 - i))) }}>
                <span className={"ss-step__tick" + (done ? " on" : "")}>{done ? "✓" : i + 1}</span>{t}
              </div>
            );
          })}
        </div>
      </div>
    ),
  },
  {
    side: "buyer", tag: "Buyer · Step 3", step: 2,
    title: "Generate — with the talent's approval.",
    desc: "Create your AI content. Each asset is sent to the talent for approval before it can publish. You ship only cleared, consented work.",
    visual: (s) => (
      <div className="ss-card">
        <div className="ss-preview">
          <img src={F[0].photo} alt="" />
          <span className="ss-badge-live" style={{ opacity: easeOut(Math.min(1, s * 2)) }}><SBadge tone="paid" dot>Approved by talent</SBadge></span>
        </div>
        <div className="ss-card__meta" style={{ marginTop: 12 }}>Ready to publish · consent on file</div>
        <div style={{ marginTop: 14, opacity: s > 0.7 ? 1 : 0.4, transition: "opacity .3s" }}>
          <SBtn variant="primary" size="sm" href="browse-twins.html">Browse twins</SBtn>
        </div>
      </div>
    ),
  },
];

function ScrollStory() {
  const wrapRef = React.useRef(null);
  const [p, setP] = React.useState(0);          // overall progress 0..1
  const reduced = React.useRef(typeof matchMedia !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches);

  React.useEffect(() => {
    if (reduced.current) return;
    const onScroll = () => {
      const el = wrapRef.current; if (!el) return;
      const rect = el.getBoundingClientRect();
      const total = rect.height - window.innerHeight;
      const prog = total > 0 ? Math.min(1, Math.max(0, -rect.top / total)) : 0;
      setP(prog);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onScroll); };
  }, []);

  const n = SCENES.length;
  const fp = p * n;
  let active = Math.min(n - 1, Math.floor(fp));
  const sub = Math.min(1, fp - active);

  if (reduced.current) return <StaticStory />;

  return (
    <section ref={wrapRef} className="story" style={{ height: `${n * 52}vh` }}>
      <div className="story__sticky">
        <div className="story__progress"><span style={{ width: `${p * 100}%` }} /></div>
        <VProgress active={active} p={p} />
        <div className="wrap story__grid">
          <div className="story__left">
            <SideBadge side={SCENES[active].side} />
            <p className="eyebrow story__tag">{SCENES[active].tag}</p>
            <h2 className="h2 story__title">{SCENES[active].title}</h2>
            <p className="body-lg story__desc">{SCENES[active].desc}</p>
          </div>
          <div className="story__stage">
            {SCENES.map((sc, i) => (
              <div key={i} className={"story__scene" + (i === active ? " story__scene--on" : (i < active ? " story__scene--past" : ""))} aria-hidden={i !== active}>
                {sc.visual(i === active ? sub : (i < active ? 1 : 0))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const RAIL_LABELS = ["Overview", "Likeness", "Set tiers", "Approve", "Browse", "License", "Publish"];
function VProgress({ active, p }) {
  return (
    <div className="vprog" aria-hidden="true">
      <span className="vprog__hint">Scroll</span>
      <div className="vprog__list">
        <div className="vprog__track"><span className="vprog__fill" style={{ height: `${p * 100}%` }} /></div>
        {RAIL_LABELS.map((l, i) => (
          <div key={i} className={"vprog__item" + (i === active ? " on" : "") + (i < active ? " done" : "")}>
            <span className="vprog__dot">{i < active ? "\u2713" : ""}</span>
            <span className="vprog__label">{l}</span>
          </div>
        ))}
      </div>
      <span className="vprog__chev">↓</span>
    </div>
  );
}

function SideBadge({ side }) {
  const label = side === "talent" ? "Talent journey" : side === "buyer" ? "Buyer journey" : "The marketplace";
  const color = side === "talent" ? "var(--success)" : side === "buyer" ? "var(--vermilion)" : "var(--ink)";
  return <span className="story__side"><span className="dot" style={{ background: color }} />{label}</span>;
}

function Rail({ active }) {
  return (
    <div className="story__rail">
      {SCENES.map((sc, i) => (
        <div key={i} className={"story__dot" + (i === active ? " on" : "") + (i < active ? " done" : "")} />
      ))}
    </div>
  );
}

/* Reduced-motion / no-JS fallback: plain stacked steps */
function StaticStory() {
  return (
    <section className="section">
      <div className="wrap">
        <p className="eyebrow" style={{ marginBottom: 12 }}>How TwinGo works</p>
        <h2 className="h2" style={{ marginBottom: 30 }}>One AI twin, two journeys.</h2>
        <div className="grid grid-3">
          {SCENES.filter(s => s.step !== undefined || s.side === "both").map((sc, i) => (
            <div key={i} className="card" style={{ padding: 24 }}>
              <p className="eyebrow" style={{ marginBottom: 10 }}>{sc.tag}</p>
              <h3 className="h3" style={{ fontSize: 18 }}>{sc.title}</h3>
              <p className="muted" style={{ fontSize: 14.5, marginTop: 8 }}>{sc.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

window.ScrollStory = ScrollStory;
