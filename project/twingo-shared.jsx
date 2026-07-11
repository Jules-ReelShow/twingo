/* ═══════════ Twingo — shared data + components ═══════════ */
/* Loaded as text/babel AFTER React + DS bundle. Exports to window. */

const DS = window.TwingoDesignSystem_122db6;
const { Button, Badge, FilterChip, Input, Card, Eyebrow } = DS;

/* ---------- Modal portal ----------
   Renders overlays into <body>, escaping any transformed ancestor (e.g. #root)
   that would otherwise become the containing block for position:fixed and push
   the modal down the page. Keeps modals centered in the viewport. */
function ModalPortal({ children }) {
  return ReactDOM.createPortal(children, document.body);
}

/* ---------- Role state (persisted) ---------- */
const ROLE_KEY = "twingo-role";
function getRole() {
  try { return localStorage.getItem(ROLE_KEY) === "talent" ? "talent" : "buyer"; }
  catch (e) { return "buyer"; }
}
function setRole(r) {
  try { localStorage.setItem(ROLE_KEY, r); } catch (e) {}
  window.dispatchEvent(new CustomEvent("twingo-role", { detail: r }));
}
/* ---------- Account type (the role the user originally signed up as) ---------- */
const ACCOUNT_TYPE_KEY = "twingo-account-type";
function getAccountType() {
  try { return localStorage.getItem(ACCOUNT_TYPE_KEY); } catch (e) { return null; }
}
function setAccountType(t) {
  try { localStorage.setItem(ACCOUNT_TYPE_KEY, t); } catch (e) {}
}
const TALENT_ONBOARDED_KEY = "twingo-talent-onboarded";
function getTalentOnboarded() {
  try { return localStorage.getItem(TALENT_ONBOARDED_KEY) === "1"; } catch (e) { return false; }
}
function setTalentOnboarded(v) {
  try { localStorage.setItem(TALENT_ONBOARDED_KEY, v ? "1" : "0"); } catch (e) {}
}
function useRole() {
  const [role, setR] = React.useState(getRole());
  React.useEffect(() => {
    const h = (e) => setR(e.detail);
    window.addEventListener("twingo-role", h);
    return () => window.removeEventListener("twingo-role", h);
  }, []);
  return [role, setRole];
}

/* ---------- Signed-in state (persisted) ---------- */
const AUTH_KEY = "twingo-auth";
function getSignedIn() {
  try { return localStorage.getItem(AUTH_KEY) === "1"; } catch (e) { return false; }
}
function setSignedIn(v) {
  try { v ? localStorage.setItem(AUTH_KEY, "1") : localStorage.removeItem(AUTH_KEY); } catch (e) {}
  window.dispatchEvent(new CustomEvent("twingo-auth", { detail: !!v }));
}
function useSignedIn() {
  const [a, setA] = React.useState(getSignedIn());
  React.useEffect(() => {
    const h = (e) => setA(e.detail);
    window.addEventListener("twingo-auth", h);
    return () => window.removeEventListener("twingo-auth", h);
  }, []);
  return [a, setSignedIn];
}
const MOCK_USER = { name: "Mara Voss", email: "mara@twingo.co", photo: "https://randomuser.me/api/portraits/women/68.jpg" };

/* ---------- Shared content submissions (business → talent approval queue) ---------- */
const SUB_KEY = "twingo-submissions";
function getSubmissions() {
  try { const v = JSON.parse(localStorage.getItem(SUB_KEY)); return Array.isArray(v) ? v : null; } catch (e) { return null; }
}
function setSubmissions(list) {
  try { localStorage.setItem(SUB_KEY, JSON.stringify(list)); } catch (e) {}
  window.dispatchEvent(new CustomEvent("twingo-submissions"));
}
function addSubmission(sub) {
  const list = getSubmissions() || [];
  setSubmissions([{ id: Date.now(), status: "pending", when: "Just now", ...sub }, ...list]);
}
function seedSubmissions(defaults) {
  const existing = getSubmissions();
  if (existing) return existing;
  setSubmissions(defaults);
  return defaults;
}
function useSubmissions(defaults) {
  const [list, setList] = React.useState(() => seedSubmissions(defaults));
  React.useEffect(() => {
    const onChange = () => setList(getSubmissions() || []);
    window.addEventListener("twingo-submissions", onChange);
    window.addEventListener("storage", onChange);
    return () => { window.removeEventListener("twingo-submissions", onChange); window.removeEventListener("storage", onChange); };
  }, []);
  const update = (id, patch) => {
    const next = (getSubmissions() || []).map(s => s.id === id ? { ...s, ...patch } : s);
    setSubmissions(next);
    setList(next);
  };
  return [list, update];
}

/* ---------- Twingo brand mark ---------- */
/* Owner's mark: two overlapping rings ("twin" + loop) with a lime "go" dot,
   rendered in the ink + lime palette. */
function TwingoMark({ size = 28, wordmark = false, wordSize = 20, light = false }) {
  const ink = light ? "#FFFFFF" : "var(--ink)";
  const glyph = (
    <svg width={size * 1.55} height={size} viewBox="0 0 42 26" fill="none" aria-label="Twingo mark" style={{ display: "block", flex: "none" }}>
      <circle cx="14" cy="13" r="10.4" fill="none" stroke={ink} strokeWidth="3.2" />
      <circle cx="28" cy="13" r="10.4" fill="none" stroke={ink} strokeWidth="3.2" />
      <circle cx="28" cy="13" r="3.6" fill="var(--lime)" />
    </svg>
  );
  if (!wordmark) return glyph;
  return (
    <a href="talent-home.html" style={{ display: "inline-flex", alignItems: "center", gap: 11 }}>
      {glyph}
      <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: wordSize, letterSpacing: "var(--tracking-tight)", color: ink }}>
        Twingo
      </span>
    </a>
  );
}

/* ---------- Header ---------- */
/* ---------- Auth modal (sign in / sign up) ---------- */
const AuthGoogle = () => (
  <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path fill="#4285F4" d="M17.64 9.2c0-.64-.06-1.25-.16-1.84H9v3.48h4.84a4.14 4.14 0 0 1-1.8 2.72v2.26h2.92c1.7-1.57 2.68-3.88 2.68-6.62Z"/><path fill="#34A853" d="M9 18c2.43 0 4.47-.8 5.96-2.18l-2.92-2.26c-.81.54-1.84.86-3.04.86-2.34 0-4.32-1.58-5.03-3.7H.96v2.33A9 9 0 0 0 9 18Z"/><path fill="#FBBC05" d="M3.97 10.72a5.41 5.41 0 0 1 0-3.44V4.95H.96a9 9 0 0 0 0 8.1l3.01-2.33Z"/><path fill="#EA4335" d="M9 3.58c1.32 0 2.5.45 3.44 1.35l2.58-2.58C13.46.89 11.43 0 9 0A9 9 0 0 0 .96 4.95l3.01 2.33C4.68 5.16 6.66 3.58 9 3.58Z"/></svg>
);
const AuthDiscord = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" aria-hidden="true"><path fill="#5865F2" d="M20.32 4.37A19.8 19.8 0 0 0 15.4 2.9a.07.07 0 0 0-.08.04c-.21.38-.44.87-.6 1.25a18.3 18.3 0 0 0-5.44 0c-.16-.39-.4-.87-.62-1.25a.08.08 0 0 0-.08-.04c-1.7.3-3.34.8-4.92 1.47a.07.07 0 0 0-.03.03C.53 9.05-.32 13.58.1 18.06a.08.08 0 0 0 .03.06 19.9 19.9 0 0 0 6 3.03.08.08 0 0 0 .08-.03c.46-.63.87-1.3 1.23-2a.08.08 0 0 0-.04-.11c-.65-.25-1.27-.55-1.87-.9a.08.08 0 0 1 0-.13l.37-.29a.07.07 0 0 1 .08-.01c3.93 1.8 8.18 1.8 12.06 0a.07.07 0 0 1 .08 0l.37.3a.08.08 0 0 1 0 .13c-.6.34-1.22.64-1.87.9a.08.08 0 0 0-.04.1c.36.7.78 1.37 1.23 2a.08.08 0 0 0 .08.04 19.84 19.84 0 0 0 6.01-3.04.08.08 0 0 0 .03-.05c.5-5.18-.84-9.67-3.54-13.66a.06.06 0 0 0-.03-.03ZM8.02 15.33c-1.18 0-2.16-1.08-2.16-2.42 0-1.33.96-2.42 2.16-2.42 1.21 0 2.18 1.1 2.16 2.42 0 1.34-.96 2.42-2.16 2.42Zm7.97 0c-1.18 0-2.15-1.08-2.15-2.42 0-1.33.95-2.42 2.15-2.42 1.22 0 2.18 1.1 2.16 2.42 0 1.34-.94 2.42-2.16 2.42Z"/></svg>
);
const AuthApple = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" aria-hidden="true"><path fill="#000" d="M17.05 12.7c-.03-2.7 2.2-4 2.3-4.06-1.25-1.84-3.2-2.09-3.9-2.12-1.66-.17-3.24.97-4.08.97-.84 0-2.14-.95-3.52-.92-1.8.03-3.47 1.05-4.4 2.66-1.88 3.27-.48 8.1 1.35 10.76.9 1.3 1.96 2.76 3.35 2.71 1.35-.05 1.86-.87 3.49-.87 1.62 0 2.08.87 3.5.84 1.44-.02 2.36-1.32 3.24-2.63 1.02-1.5 1.44-2.96 1.46-3.03-.03-.02-2.8-1.08-2.83-4.28ZM14.4 4.74c.74-.9 1.24-2.14 1.1-3.38-1.07.04-2.36.71-3.12 1.6-.68.8-1.28 2.07-1.12 3.29 1.19.09 2.4-.6 3.14-1.5Z"/></svg>
);

function AuthModal({ open, onClose, mode: initialMode = "signin", audience }) {
  const [mode, setMode] = React.useState(initialMode);
  const [persistedRole] = useRole();
  const role = audience || persistedRole;
  React.useEffect(() => { if (open) setMode(initialMode); }, [open, initialMode]);
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  const signup = mode === "signup";
  const dest = signup
    ? (role === "talent" ? "onboarding-flow.html" : "business-onboarding.html")
    : (role === "talent" ? "talent-dashboard.html" : "buyer-dashboard.html");
  const go = (e) => {
    if (e) e.preventDefault();
    setSignedIn(true);
    if (signup) setAccountType(role === "talent" ? "talent" : "business");
    window.location.href = dest;
  };
  const providers = [
    { name: "Google", Icon: AuthGoogle },
    { name: "Discord", Icon: AuthDiscord },
    { name: "Apple", Icon: AuthApple },
  ];
  return (
    <ModalPortal>
    <div className={"overlay" + (open ? " overlay--on" : "")} onClick={onClose}>
      <div className="auth2" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={signup ? "Create account" : "Sign in"}>
        <div className="auth2__photo">
          <image-slot id="auth-photo" shape="rect" style={{ position: "absolute", inset: 0, width: "100%", height: "100%" }} placeholder="Drop a photo"></image-slot>
          <div className="auth2__scrim" aria-hidden="true"></div>
          <div className="auth2__brand"><TwingoMark size={22} wordmark /></div>
          <div className="auth2__quote">
            <p>&ldquo;My AI twin earns while I sleep. Twingo made licensing my likeness effortless.&rdquo;</p>
            <div className="auth2__quote-by">
              <span className="auth2__quote-ava" />
              <div>
                <div className="auth2__quote-name">Mara Voss</div>
                <div className="auth2__quote-role">Creator &middot; 120+ licenses</div>
              </div>
            </div>
          </div>
        </div>
        <div className="auth2__form">
          <button className="auth__x" onClick={onClose} aria-label="Close">×</button>
          <h1 className="auth2__h">{signup ? "Create your account" : "Welcome back"}</h1>
          <p className="auth2__sub">
            {signup ? "Already have an account? " : "New to Twingo? "}
            <a href="#" onClick={(e) => { e.preventDefault(); setMode(signup ? "signin" : "signup"); }}>{signup ? "Sign in" : "Create an account"}</a>
          </p>

          <form onSubmit={go} style={{ display: "flex", flexDirection: "column", gap: 15, marginTop: 22 }}>
            {signup && (
              <label className="auth__field">
                <span className="auth__label">Full name</span>
                <Input placeholder="Mara Voss" />
              </label>
            )}
            <label className="auth__field">
              <span className="auth__label">Email</span>
              <Input type="email" placeholder="you@email.com" />
            </label>
            <label className="auth__field">
              <span className="auth__label" style={{ display: "flex", justifyContent: "space-between" }}>
                Password
                {!signup && <a href="#" onClick={(e) => e.preventDefault()} style={{ color: "var(--vermilion)", fontWeight: 500 }}>Forgot?</a>}
              </span>
              <Input type="password" placeholder={signup ? "Create a password" : "••••••••"} />
            </label>
            <Button variant="primary" type="submit" style={{ width: "100%", justifyContent: "center", display: "flex", marginTop: 4, background: "var(--lime)", borderColor: "var(--lime)", color: "var(--ink-black)" }}>
              {signup ? "Create account" : "Sign in"}
            </Button>
          </form>

          <div className="auth__or"><span>or</span></div>
          <div className="auth2__socials">
            {providers.map(p => (
              <button key={p.name} className="auth__provider" onClick={go}>
                <p.Icon /><span>{p.name}</span>
              </button>
            ))}
          </div>

          {signup && (
            <p className="meta" style={{ marginTop: 18 }}>
              By continuing you agree to Twingo's consent-first Terms & Privacy.
            </p>
          )}
        </div>
      </div>
    </div>
    </ModalPortal>
  );
}

/* ---------- Role switcher (talent vs business audience) ---------- */
function RoleSwitcher({ active }) {
  const [signedIn] = useSignedIn();
  const go = (target, href) => (e) => {
    if (target === "talent" && signedIn && getAccountType() === "business" && !getTalentOnboarded()) {
      e.preventDefault();
      window.location.href = "onboarding-flow.html?upgrade=talent";
    }
  };
  return (
    <div className="seg">
      <a href="talent-home.html" onClick={go("talent")} className={"seg__btn" + (active === "talent" ? " seg__btn--on" : "")}>I'm a talent</a>
      <a href="business.html" onClick={go("business")} className={"seg__btn" + (active === "business" ? " seg__btn--on" : "")}>I'm a business</a>
    </div>
  );
}

/* ---------- Theme toggle (light/dark) ---------- */
function useTheme() {
  const [theme, setTheme] = React.useState(() => localStorage.getItem("twingo-theme") || "light");
  React.useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("twingo-theme", theme);
  }, [theme]);
  return [theme, setTheme];
}
function ThemeToggle() {
  const [theme, setTheme] = useTheme();
  return (
    <button
      className="theme-toggle"
      aria-label="Toggle light/dark mode"
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
    >
      {theme === "dark" ? "☀" : "☾"}
    </button>
  );
}

/* ---------- Simple header (landing-page style, no buyer/talent role switch) ---------- */
function SimpleHeader({ page, role, anchorBase = "talent-home.html" }) {
  const [signedIn] = useSignedIn();
  const [authOpen, setAuthOpen] = React.useState(null);
  const showBriefs = role !== "business" && signedIn;
  const dashHref = role === "business" ? "buyer-dashboard.html" : "talent-dashboard.html";
  return (
    <>
      <header className="hdr">
        <div className="wrap hdr__in">
          <TwingoMark wordmark />
          <nav className="hdr__nav">
            {role === "business" ? (
              <a href="browse-twins.html" className={"navlink" + (page === "browse" ? " navlink--active" : "")}>Browse twins</a>
            ) : showBriefs ? (
              <a href="browse-briefs.html" className={"navlink" + (page === "briefs" ? " navlink--active" : "")}>Browse briefs</a>
            ) : null}
            {!signedIn && <a href={anchorBase + "#how"} className="navlink">How it works</a>}
            {!signedIn && <a href={anchorBase + "#why"} className="navlink">{role === "business" ? "Why Twingo" : "Why join"}</a>}
            {!signedIn && <a href={anchorBase + "#faq"} className="navlink">FAQ</a>}
            {signedIn && <a href={dashHref} className={"navlink" + (page === "dash" ? " navlink--active" : "")}>Dashboard</a>}
          </nav>
          <div className="spacer" />
          <div className="hdr__desk" style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <RoleSwitcher active={role || "talent"} />
            <ThemeToggle />
            {signedIn ? (
              <ProfileMenu dashHref={dashHref} />
            ) : (
              <>
                <button className="navlink" style={{ background: "none", border: "none", cursor: "pointer", font: "inherit" }} onClick={() => setAuthOpen("signin")}>Sign in</button>
                <Button variant="primary" onClick={() => setAuthOpen("signup")} style={{ background: "var(--lime)", borderColor: "var(--lime)", color: "var(--ink-black)" }}>Join</Button>
              </>
            )}
          </div>
        </div>
      </header>
      <AuthModal open={!!authOpen} mode={authOpen || "signin"} audience={role} onClose={() => setAuthOpen(null)} />
    </>
  );
}

/* ---------- Profile avatar dropdown (used by SimpleHeader once signed in) ---------- */
function ProfileMenu({ dashHref }) {
  const [open, setOpen] = React.useState(false);
  const ref = React.useRef(null);
  React.useEffect(() => {
    const onDoc = (e) => { if (ref.current && !ref.current.contains(e.target)) setOpen(false); };
    document.addEventListener("mousedown", onDoc);
    return () => document.removeEventListener("mousedown", onDoc);
  }, []);
  return (
    <div className="usermenu" ref={ref}>
      <button className={"usermenu__btn" + (open ? " usermenu__btn--on" : "")} onClick={() => setOpen(!open)} aria-haspopup="true" aria-expanded={open}>
        <img src={MOCK_USER.photo} alt="" className="usermenu__ava" />
        <span className="usermenu__caret" style={{ transform: open ? "rotate(180deg)" : "none" }}>▾</span>
      </button>
      <div className={"menu" + (open ? " menu--on" : "")} role="menu">
        <div className="menu__head">
          <img src={MOCK_USER.photo} alt="" className="menu__ava" />
          <div style={{ minWidth: 0 }}>
            <div className="menu__name">{MOCK_USER.name}</div>
            <div className="menu__email">{MOCK_USER.email}</div>
          </div>
        </div>
        <div className="menu__sep"></div>
        <a href={"messages.html?as=" + (dashHref.startsWith("buyer") ? "business" : "talent")} className="menu__item" role="menuitem">Messages</a>
        <a href={dashHref} className="menu__item" role="menuitem">Dashboard</a>
        <a href={dashHref.startsWith("buyer") ? "my-briefs.html" : "profile-talent.html?id=mara"} className="menu__item" role="menuitem">{dashHref.startsWith("buyer") ? "My briefs" : "My public profile"}</a>
        <div className="menu__sep"></div>
        <a href="talent-home.html" className="menu__item menu__item--danger" role="menuitem" onClick={() => setSignedIn(false)}>Sign out</a>
      </div>
    </div>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const col = (h, links) => (
    <div>
      <p className="ftr__h">{h}</p>
      {links.map(l => <a key={l} className="ftr__link" href="#">{l}</a>)}
    </div>
  );
  return (
    <footer className="ftr">
      <div className="wrap">
        <div className="ftr__cols">
          <div>
            <TwingoMark wordmark />
            <p className="muted" style={{ fontSize: 14, maxWidth: 300, marginTop: 16 }}>
              The marketplace for creating and licensing your AI twin. Verified consent, revocable at any time, approval on every use.
            </p>
          </div>
          {col("For talent", ["License your likeness", "How licensing works", "Trust & control", "Payouts"])}
          <div>
            <p className="ftr__h">Browse</p>
            <a className="ftr__link" href="browse-twins.html">Browse AI twins</a>
          </div>
          {col("Company", ["About", "Consent policy", "Terms", "Privacy", "Contact"])}
        </div>
        <hr className="rule" style={{ margin: "36px 0 20px" }} />
        <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 12, fontSize: 13, color: "var(--text-tertiary)" }}>
          <span>© 2026 TwinGo, Inc. Payments handled by our secure partner.</span>
          <span className="mono" style={{ fontSize: 12 }}>Licensing · not deepfakes. Every use approved.</span>
        </div>
      </div>
    </footer>
  );
}

/* ---------- Trust row ---------- */
function TrustRow({ items }) {
  const def = items || [
    { c: "var(--success)", t: "Verified consent" },
    { c: "var(--vermilion)", t: "Revocable anytime" },
    { c: "var(--chartreuse)", t: "Approval on every use" },
  ];
  return (
    <div className="trust">
      {def.map((i, k) => (
        <span key={k} className="trust__item"><span className="dot" style={{ background: i.c }} />{i.t}</span>
      ))}
    </div>
  );
}

/* ---------- Portrait slot ---------- */
function Portrait({ id, name, ratio = "3 / 4", radius = 16, src, style }) {
  return (
    <image-slot
      id={id}
      shape="rounded"
      radius={String(radius)}
      src={src || undefined}
      placeholder={name || "Portrait"}
      style={{ width: "100%", height: "auto", aspectRatio: ratio, borderRadius: radius + "px", ...style }}
    ></image-slot>
  );
}

/* ---------- Influencer dataset ---------- */
const RU = (g, n) => "https://randomuser.me/api/portraits/" + g + "/" + n + ".jpg";
const INFLUENCERS = [
  { id: "mara",   name: "Mara Voss",     niche: "Branded Content",     platform: "Instagram", followers: "1.2M", eng: "4.8%", rate: 480, city: "Los Angeles", verified: true,  live: true,  photo: RU("women", 68) },
  { id: "leo",    name: "Leo Park",      niche: "Social Media / Reels", platform: "TikTok",    followers: "2.4M", eng: "6.1%", rate: 620, city: "Seoul",       verified: true,  live: false, photo: RU("men", 32) },
  { id: "ada",    name: "Ada Ruiz",      niche: "Commercial",   platform: "Instagram", followers: "890K", eng: "3.9%", rate: 400, city: "Madrid",      verified: true,  live: false, photo: RU("women", 44) },
  { id: "juno",   name: "Juno Bex",      niche: "Animation",    platform: "YouTube",   followers: "3.1M", eng: "5.2%", rate: 720, city: "Berlin",      verified: true,  live: true,  photo: RU("women", 90) },
  { id: "sana",   name: "Sana Okafor",   niche: "Social Media / Reels", platform: "Instagram", followers: "640K", eng: "4.1%", rate: 360, city: "Lagos",       verified: true,  live: false, photo: RU("women", 12) },
  { id: "kit",    name: "Kit Harlan",    niche: "Documentary",  platform: "YouTube",   followers: "1.8M", eng: "3.4%", rate: 540, city: "Austin",      verified: true,  live: false, photo: RU("men", 45) },
  { id: "noor",   name: "Noor Haddad",   niche: "Music Videos", platform: "TikTok",    followers: "2.9M", eng: "7.0%", rate: 680, city: "Dubai",       verified: true,  live: true,  photo: RU("women", 57) },
  { id: "theo",   name: "Theo Lindqvist",niche: "Documentary",  platform: "Instagram", followers: "520K", eng: "4.4%", rate: 320, city: "Stockholm",   verified: true,  live: false, photo: RU("men", 76) },
  { id: "priya",  name: "Priya Nandan",  niche: "Edutainment",  platform: "TikTok",    followers: "1.5M", eng: "5.8%", rate: 460, city: "Mumbai",      verified: true,  live: false, photo: RU("women", 33) },
  { id: "cass",   name: "Cass Moreau",   niche: "Film",         platform: "Instagram", followers: "980K", eng: "4.0%", rate: 420, city: "Paris",       verified: true,  live: true,  photo: RU("women", 21) },
  { id: "diego",  name: "Diego Santos",  niche: "Commercial",   platform: "YouTube",   followers: "1.1M", eng: "3.7%", rate: 440, city: "São Paulo",   verified: true,  live: false, photo: RU("men", 11) },
  { id: "yuki",   name: "Yuki Tanaka",   niche: "Series / Micro-Series", platform: "TikTok",    followers: "2.2M", eng: "6.5%", rate: 560, city: "Tokyo",       verified: true,  live: false, photo: RU("women", 79) },
  { id: "elle",   name: "Elle Baranger", niche: "Branded Content",     platform: "Instagram", followers: "760K", eng: "4.6%", rate: 380, city: "Toronto",     verified: true,  live: false, photo: RU("women", 50) },
  { id: "marco",  name: "Marco Vitale",  niche: "Film",         platform: "YouTube",   followers: "930K", eng: "3.3%", rate: 400, city: "Milan",       verified: true,  live: false, photo: RU("men", 64) },
  { id: "aisha",  name: "Aisha Bello",   niche: "Music Videos", platform: "TikTok",    followers: "3.4M", eng: "6.9%", rate: 740, city: "London",      verified: true,  live: true,  photo: RU("women", 85) },
  { id: "ren",    name: "Ren Ishida",    niche: "Series / Micro-Series", platform: "YouTube",   followers: "1.6M", eng: "4.9%", rate: 500, city: "Osaka",       verified: true,  live: false, photo: RU("men", 22) },
];
const CONTENT_IMG = (seed) => "https://picsum.photos/seed/twingo-" + seed + "/600/600";

const NICHES = ["All", "Film", "Series / Micro-Series", "Edutainment", "Commercial", "Music Videos", "Animation", "Documentary", "Social Media / Reels", "Branded Content"];
const PLATFORMS = ["All platforms", "Instagram", "TikTok", "YouTube"];

/* ---------- Influencer card (browse / featured) ---------- */
function InfluencerCard({ inf, href }) {
  const [h, setH] = React.useState(false);
  return (
    <a href={href || ("profile-business.html?id=" + inf.id)}
       onMouseEnter={() => setH(true)} onMouseLeave={() => setH(false)}
       className="card card--hover"
       style={{ overflow: "hidden", display: "block" }}>
      <div style={{ position: "relative" }}>
        <Portrait id={"card-" + inf.id} name={inf.name} src={inf.photo} ratio="4 / 5" radius={0} style={{ borderRadius: 0 }} />
      </div>
      <div style={{ padding: "14px 16px 16px" }}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", gap: 8 }}>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 16, letterSpacing: "-0.01em" }}>{inf.name}</span>
          <span className="meta">{inf.city}</span>
        </div>
        <div className="muted" style={{ fontSize: 13.5, marginTop: 3 }}>{inf.niche} · {inf.platform}</div>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 14, paddingTop: 13, borderTop: "1px solid var(--border)" }}>
          <span style={{ fontSize: 13.5 }}><strong style={{ fontWeight: 600 }}>{inf.followers}</strong> <span className="muted">followers</span></span>
          <span style={{ fontSize: 13.5 }}><span className="muted">from</span> <strong style={{ fontWeight: 600 }}>${inf.rate}</strong></span>
        </div>
      </div>
    </a>
  );
}

/* ---------- Checkout handoff modal ---------- */
function HandoffModal({ open, onClose, inf, tier }) {
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);
  const name = inf ? inf.name : "this creator";
  const price = tier ? tier.price : (inf ? inf.rate : 0);
  const tierName = tier ? tier.name : "Licensing";
  return (
    <ModalPortal>
    <div className={"overlay" + (open ? " overlay--on" : "")} onClick={onClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
        <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
          <TwingoMark size={22} />
          <span style={{ color: "var(--text-tertiary)", fontSize: 18 }}>→</span>
          <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 18, letterSpacing: "-0.01em", color: "var(--text-secondary)" }}>
            Secure checkout
          </span>
        </div>
        <h3 className="h3" style={{ marginTop: 14 }}>Complete this license securely</h3>
        <p className="muted" style={{ fontSize: 15, marginTop: 10 }}>
          TwinGo doesn't process payments. You'll finish licensing <strong style={{ color: "var(--ink)", fontWeight: 600 }}>{name}</strong>'s
          AI twin securely with our payments and contracts partner.
        </p>
        <div className="card" style={{ background: "var(--surface-subtle)", padding: 16, marginTop: 18, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 4 }}>{tierName} package</div>
            <div style={{ fontSize: 14 }} className="muted">{name} · AI twin license</div>
          </div>
          <div style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: 22, letterSpacing: "-0.02em" }}>${price}</div>
        </div>
        <ul style={{ listStyle: "none", padding: 0, margin: "18px 0 0", display: "grid", gap: 9 }}>
          {["Signed consent & usage terms travel with the license", "Talent approves every piece of content before it goes live", "Revocable at any time from either dashboard"].map((t, k) => (
            <li key={k} style={{ display: "flex", gap: 10, fontSize: 14, color: "var(--text-secondary)" }}>
              <span className="dot" style={{ background: "var(--success)", marginTop: 7 }} />{t}
            </li>
          ))}
        </ul>
        <div style={{ display: "flex", gap: 10, marginTop: 24 }}>
          <Button variant="primary" size="md" style={{ flex: 1 }} onClick={onClose}>Continue to secure checkout</Button>
          <Button variant="secondary" size="md" onClick={onClose}>Cancel</Button>
        </div>
        <p className="meta" style={{ textAlign: "center", marginTop: 14, fontSize: 12.5 }}>You'll be redirected to our secure checkout partner.</p>
      </div>
    </div>
    </ModalPortal>
  );
}

/* ---------- Message talent modal ---------- */
const MSG_TOPICS = ["Licensing question", "Custom package", "Campaign brief", "Timeline & rates", "Something else"];
const MSG_BUDGETS = ["Not sure yet", "Under $500", "$500 – $2K", "$2K – $10K", "$10K+"];

function MessageModal({ open, onClose, inf }) {
  const [sent, setSent] = React.useState(false);
  const [topic, setTopic] = React.useState(MSG_TOPICS[0]);
  const [budget, setBudget] = React.useState(MSG_BUDGETS[0]);
  const [body, setBody] = React.useState("");

  // Reset to compose state each time it opens
  React.useEffect(() => {
    if (open) { setSent(false); setTopic(MSG_TOPICS[0]); setBudget(MSG_BUDGETS[0]); setBody(""); }
  }, [open]);
  React.useEffect(() => {
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  if (!inf) inf = {};
  const first = (inf.name || "this creator").split(" ")[0];
  const canSend = body.trim().length > 0;

  return (
    <ModalPortal>
    <div className={"overlay" + (open ? " overlay--on" : "")} onClick={onClose}>
      <div className="modal msg" onClick={(e) => e.stopPropagation()} role="dialog" aria-modal="true" aria-label={"Message " + (inf.name || "talent")}>
        <button className="auth__x" onClick={onClose} aria-label="Close">×</button>

        {!sent ? (
          <>
            {/* Talent header */}
            <div style={{ display: "flex", alignItems: "center", gap: 13 }}>
              <img src={inf.photo} alt="" style={{ width: 46, height: 46, borderRadius: 12, objectFit: "cover", flex: "none" }} />
              <div style={{ minWidth: 0 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 7 }}>
                  <span style={{ fontFamily: "var(--font-display)", fontWeight: 600, fontSize: 17, letterSpacing: "-0.01em" }}>Message {inf.name}</span>
                  {inf.verified && <Badge tone="paid" dot>Verified</Badge>}
                </div>
                <div className="muted" style={{ fontSize: 13, marginTop: 2 }}>{inf.niche} creator · Typically replies within a day</div>
              </div>
            </div>

            {/* Topic */}
            <p className="auth__label" style={{ marginTop: 22 }}>What's this about?</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {MSG_TOPICS.map(t => (
                <FilterChip key={t} active={topic === t} onClick={() => setTopic(t)}>{t}</FilterChip>
              ))}
            </div>

            {/* Budget */}
            <label className="auth__field" style={{ marginTop: 18, marginBottom: 0 }}>
              <span className="auth__label">Estimated budget <span className="muted" style={{ fontWeight: 400 }}>(optional)</span></span>
              <select className="brief__select" style={{ width: "100%" }} value={budget} onChange={(e) => setBudget(e.target.value)}>
                {MSG_BUDGETS.map(b => <option key={b}>{b}</option>)}
              </select>
            </label>

            {/* Message */}
            <label className="auth__field" style={{ marginTop: 16, marginBottom: 0 }}>
              <span className="auth__label">Your message</span>
              <textarea
                className="msg__area"
                value={body}
                onChange={(e) => setBody(e.target.value)}
                placeholder={"Hi " + first + " — I'd love to license your AI twin for an upcoming campaign. Here's what I have in mind…"}
              />
            </label>

            <div className="msg__consent">
              <span className="dot" style={{ background: "var(--success)", marginTop: 6 }} />
              <span>Messaging is free and non-binding. {first} approves every use — nothing goes live without a signed license.</span>
            </div>

            <div style={{ display: "flex", gap: 10, marginTop: 20 }}>
              <Button variant="primary" size="md" style={{ flex: 1, opacity: canSend ? 1 : 0.5 }} disabled={!canSend} onClick={() => canSend && setSent(true)}>Send message</Button>
              <Button variant="secondary" size="md" onClick={onClose}>Cancel</Button>
            </div>
          </>
        ) : (
          <div style={{ textAlign: "center", padding: "6px 0 2px" }}>
            <span style={{ width: 54, height: 54, borderRadius: 999, background: "var(--lime)", display: "inline-flex", alignItems: "center", justifyContent: "center", margin: "0 auto" }}>
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none"><path d="M5 12.5l4.2 4.2L19 7" stroke="var(--ink)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <h3 className="h3" style={{ marginTop: 18 }}>Message sent to {inf.name}</h3>
            <p className="muted" style={{ fontSize: 15, marginTop: 10, maxWidth: 360, margin: "10px auto 0" }}>
              {first} typically replies within a day. Your conversation lives in your dashboard — you'll be notified when {first} responds.
            </p>
            <div className="card" style={{ background: "var(--surface-subtle)", padding: 16, marginTop: 20, textAlign: "left" }}>
              <div className="eyebrow" style={{ marginBottom: 6 }}>{topic}</div>
              <div className="muted" style={{ fontSize: 13.5, lineHeight: 1.5 }}>{body}</div>
            </div>
            <div style={{ display: "flex", gap: 10, marginTop: 22 }}>
              <Button variant="primary" size="md" href="buyer-dashboard.html" style={{ flex: 1, justifyContent: "center", display: "flex" }}>View in dashboard</Button>
              <Button variant="secondary" size="md" onClick={onClose}>Close</Button>
            </div>
          </div>
        )}
      </div>
    </div>
    </ModalPortal>
  );
}

Object.assign(window, {
  DS, getRole, setRole, useRole, getSignedIn, setSignedIn, useSignedIn, MOCK_USER,
  getAccountType, setAccountType, getTalentOnboarded, setTalentOnboarded,
  getSubmissions, setSubmissions, addSubmission, seedSubmissions, useSubmissions,
  TwingoMark, SimpleHeader, ThemeToggle, RoleSwitcher, Footer, TrustRow, Portrait,
  INFLUENCERS, NICHES, PLATFORMS, InfluencerCard, HandoffModal, MessageModal, AuthModal, CONTENT_IMG,
});
