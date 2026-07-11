/* ═══════════════════ Twingo — Talent onboarding (7 steps) ═══════════════════ */
const { useState, useEffect } = React;

const OnbSTEPS = [
  "Create account", "Verify your email", "Welcome & overview",
  "Identity verification", "Upload your photos", "Your terms", "Compliance",
];

function OnbMark({ size = 26 }) {
  return (
    <svg width={size} height={size * 0.62} viewBox="0 0 42 26" fill="none" aria-hidden="true">
      <circle cx="14" cy="13" r="10.5" stroke="var(--strong)" strokeWidth="3.4" />
      <circle cx="28" cy="13" r="10.5" stroke="var(--strong)" strokeWidth="3.4" />
    </svg>
  );
}
function OnbCheckIc({ size = 15, sw = 2.4 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={sw} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 12l4.5 4.5L19 7" />
    </svg>
  );
}
function OnbThemeToggle({ theme, onTheme }) {
  const dark = theme === "dark";
  return (
    <button className="biz-theme-btn" aria-label="Toggle theme" onClick={() => onTheme(dark ? "light" : "dark")}>
      {dark ? (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4" /><path d="M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19" /></svg>
      ) : (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8z" /></svg>
      )}
    </button>
  );
}

/* ── Step 1: Create account ── */
function StepAccount({ onNext }) {
  const [intent, setIntent] = useState("create");
  const [agree, setAgree] = useState(false);
  return (
    <div className="onb-card">
      <h1 className="onb-h">Create your account</h1>
      <p className="onb-sub">Free to join. You stay in control of every use of your likeness.</p>

      <label className="onb-label">I'm here because…</label>
      <button className={"onb-choice" + (intent === "create" ? " sel" : "")} onClick={() => setIntent("create")}>I want to create a digital twin</button>
      <button className={"onb-choice" + (intent === "find" ? " sel" : "")} onClick={() => setIntent("find")}>I'm looking for a digital twin</button>

      <label className="onb-label" htmlFor="onb-as">I'm signing up as</label>
      <select id="onb-as" className="onb-select" defaultValue="individual">
        <option value="individual">Individual (18+)</option>
        <option value="guardian">Parent / legal guardian (for under-18 talent)</option>
        <option value="agency">Agency, on behalf of talent</option>
      </select>

      <div className="onb-row2">
        <div>
          <label className="onb-label" htmlFor="onb-fn">First name</label>
          <input id="onb-fn" className="onb-input" placeholder="John" />
        </div>
        <div>
          <label className="onb-label" htmlFor="onb-ln">Last name</label>
          <input id="onb-ln" className="onb-input" placeholder="Doe" />
        </div>
      </div>

      <label className="onb-label" htmlFor="onb-ph">Mobile number</label>
      <p className="onb-help">Optional — we may use this for account security and important updates.</p>
      <div style={{ display: "grid", gridTemplateColumns: "150px 1fr", gap: 10 }}>
        <select className="onb-select" defaultValue="+44" aria-label="Country code">
          <option value="+44">🇬🇧 +44 UK</option>
          <option value="+1">🇺🇸 +1 US</option>
          <option value="+33">🇫🇷 +33 FR</option>
          <option value="+49">🇩🇪 +49 DE</option>
          <option value="+34">🇪🇸 +34 ES</option>
          <option value="+971">🇦🇪 +971 AE</option>
        </select>
        <input id="onb-ph" className="onb-input" placeholder="e.g. 7700 900123" inputMode="tel" />
      </div>

      <label className="onb-label" htmlFor="onb-em">Email address</label>
      <input id="onb-em" className="onb-input" placeholder="you@example.com" type="email" />

      <label className="onb-label" htmlFor="onb-pw">Password</label>
      <input id="onb-pw" className="onb-input" type="password" placeholder="••••••••" />

      <label className="onb-label" htmlFor="onb-pw2">Confirm password</label>
      <input id="onb-pw2" className="onb-input" type="password" placeholder="••••••••" />

      <label className="onb-checkrow" style={{ marginTop: 22 }}>
        <input type="checkbox" checked={agree} onChange={e => setAgree(e.target.checked)} />
        <span>By signing up, you agree to our <a href="#terms">Terms of Service</a> and <a href="#privacy">Privacy Policy</a>.</span>
      </label>

      <button className="biz-btn biz-btn-primary onb-cta" disabled={!agree} style={{ opacity: agree ? 1 : 0.45, cursor: agree ? "pointer" : "not-allowed" }} onClick={onNext}>
        Create Account
      </button>
    </div>
  );
}

/* ── Step 2: Verify email ── */
function StepVerify({ onNext, onBack }) {
  const [resent, setResent] = useState(false);
  return (
    <div>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <button className="onb-back" onClick={onBack}>← Back to signup</button>
      </div>
      <div className="onb-card" style={{ textAlign: "center" }}>
        <h1 className="onb-h">Verify your email</h1>
        <p className="onb-sub">We sent a verification email to the address you provided. Please verify to continue.</p>
        <p className="onb-sub" style={{ fontSize: 13.5, color: "var(--faint)", marginTop: 10 }}>Can't find it? Please check spam or junk.</p>
        <button className="biz-btn biz-btn-primary onb-cta" onClick={onNext}>I've verified my email</button>
        <button className="biz-btn biz-btn-ghost onb-ghostbtn" onClick={() => setResent(true)}>{resent ? "Verification email re-sent ✓" : "Resend verification email"}</button>
      </div>
    </div>
  );
}

/* ── Step 3: Welcome ── */
function StepWelcome({ onNext, onBack }) {
  return (
    <div>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <button className="onb-back" onClick={onBack}>← Back to verification</button>
      </div>
      <div className="onb-card">
        <h1 className="onb-h" style={{ textAlign: "center" }}>Your face. Your rules. <span className="grad">Your earnings.</span></h1>
        <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 22 }}>
          <p className="onb-sub">By signing up, you're taking the first step toward creating your digital twin through the Twingo platform.</p>
          <p className="onb-sub">Our onboarding includes identity verification, profile setup, uploading reference media (photographs), and selecting your terms and usage preferences.</p>
          <p className="onb-sub">Once approved, your profile will be visible on the Twingo platform only to subscribed buyers. When your twin is selected for a project, you will be notified automatically. All usage will always align with the terms and usage settings you selected during onboarding.</p>
          <p className="onb-sub" style={{ color: "var(--ink)", fontWeight: 700 }}>Under-18 profiles will not appear publicly on Twingo. Access will be restricted to relevant clients via selected production companies and agencies.</p>
          <p className="onb-sub" style={{ textAlign: "center", marginTop: 4 }}>The onboarding process takes around 10 minutes — you can save your progress and continue later anytime.</p>
        </div>
        <button className="biz-btn biz-btn-primary onb-cta" onClick={onNext}>Next</button>
      </div>
    </div>
  );
}

/* ── Step 4: Identity verification ── */
function StepIdentity({ onNext, onBack }) {
  const [phase, setPhase] = useState("intro"); // intro → consent → checking → done
  useEffect(() => {
    if (phase !== "checking") return;
    const id = setTimeout(() => setPhase("done"), 1800);
    return () => clearTimeout(id);
  }, [phase]);
  return (
    <div>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <button className="onb-back" onClick={onBack}>← Back to welcome</button>
      </div>
      <div className="onb-card">
        <h1 className="onb-h">Identity verification</h1>
        <p className="onb-sub">To upload your digital twin, you need to verify your identity. You'll be guided through a quick process with your ID and a selfie.</p>

        <div style={{ border: "1px solid var(--line)", borderRadius: 16, padding: "26px 24px", marginTop: 24, background: "var(--ghost-bg)" }}>
          {phase === "intro" && (
            <div>
              <h2 style={{ fontFamily: "var(--display)", fontWeight: 600, fontSize: 22, marginBottom: 6, color: "var(--ink)" }}>Let's get you verified</h2>
              <p className="onb-sub" style={{ marginBottom: 20 }}>Follow the simple steps below</p>
              {[["1", "Provide identity document"], ["2", "Perform a liveness check"]].map(([n, t]) => (
                <div key={n} style={{ display: "flex", alignItems: "center", gap: 14, padding: "13px 0", borderTop: "1px solid var(--line)" }}>
                  <span style={{ width: 30, height: 30, borderRadius: "50%", background: "var(--card-hi)", border: "1px solid var(--line)", display: "flex", alignItems: "center", justifyContent: "center", fontFamily: "var(--mono)", fontSize: 13, color: "var(--ink)", flexShrink: 0 }}>{n}</span>
                  <span style={{ fontSize: 15, fontWeight: 600, color: "var(--ink)" }}>{t}</span>
                </div>
              ))}
              <button className="biz-btn biz-btn-primary onb-cta" style={{ marginTop: 18 }} onClick={() => setPhase("consent")}>Start verification</button>
            </div>
          )}
          {phase === "consent" && (
            <div>
              <h2 style={{ fontFamily: "var(--display)", fontWeight: 600, fontSize: 22, marginBottom: 14, color: "var(--ink)" }}>Consent to start verification</h2>
              <p className="onb-sub" style={{ marginBottom: 12 }}>By clicking "Agree and continue":</p>
              <ul style={{ margin: 0, paddingLeft: 20, display: "flex", flexDirection: "column", gap: 10 }}>
                <li className="onb-sub">I confirm that I have read the <a href="#privacy" style={{ color: "var(--ink)", textDecoration: "underline", textUnderlineOffset: 2 }}>Privacy Notice</a> and the Notification to Processing of Personal Data.</li>
                <li className="onb-sub">I give my consent to the processing of my personal data, including biometrics, for the purpose of identity verification.</li>
              </ul>
              <button className="biz-btn biz-btn-primary onb-cta" onClick={() => setPhase("checking")}>Agree and continue</button>
            </div>
          )}
          {phase === "checking" && (
            <div style={{ textAlign: "center", padding: "26px 0" }}>
              <div style={{ width: 44, height: 44, margin: "0 auto 18px", borderRadius: "50%", border: "3px solid var(--line)", borderTopColor: "var(--a1)", animation: "onbspin 0.9s linear infinite" }} />
              <style>{"@keyframes onbspin{to{transform:rotate(360deg)}}"}</style>
              <p className="onb-sub">Checking your document and selfie…</p>
            </div>
          )}
          {phase === "done" && (
            <div style={{ textAlign: "center", padding: "14px 0" }}>
              <div className="onb-done-ic" style={{ width: 56, height: 56, marginBottom: 16 }}><OnbCheckIc size={26} sw={2.6} /></div>
              <h2 style={{ fontFamily: "var(--display)", fontWeight: 600, fontSize: 22, marginBottom: 6, color: "var(--ink)" }}>Identity verified</h2>
              <p className="onb-sub">You're all set. Continue to upload your reference photos.</p>
            </div>
          )}
          <p style={{ textAlign: "center", fontFamily: "var(--mono)", fontSize: 11, color: "var(--faint)", marginTop: 18, letterSpacing: "0.04em" }}>Secure verification · encrypted end-to-end</p>
        </div>

        <button className="biz-btn biz-btn-primary onb-cta" disabled={phase !== "done"} style={{ opacity: phase === "done" ? 1 : 0.45, cursor: phase === "done" ? "pointer" : "not-allowed" }} onClick={onNext}>Continue</button>
      </div>
    </div>
  );
}

/* ── Step 5: Upload photos ── */
const ONB_SHOTS = [
  ["front", "Front face"], ["left", "Left profile"], ["right", "Right profile"],
  ["smile", "Smiling"], ["expression", "Expression"], ["fullbody", "Full body"],
];
function StepPhotos({ onNext, onBack }) {
  return (
    <div>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <button className="onb-back" onClick={onBack}>← Back to verification</button>
      </div>
      <div className="onb-card">
        <h1 className="onb-h">Upload your photos</h1>
        <p className="onb-sub">These reference photos are what your digital twin is built from. The better the set, the better — and more bookable — your twin.</p>
        <div className="onb-photos">
          {ONB_SHOTS.map(([id, label]) => (
            <div key={id} className="onb-photo">
              <image-slot id={"onb-" + id} shape="rounded" radius="14" style={{ width: "100%", height: 150, display: "block" }} placeholder={label}></image-slot>
              <span className="tag">{label}</span>
            </div>
          ))}
        </div>
        <ul className="onb-tips">
          {[
            "Natural, even lighting — face a window, avoid harsh shadows.",
            "No heavy makeup, filters, sunglasses, or hats.",
            "Neutral background, sharp focus, at least 1080px on the short side.",
            "Recent photos only — they should look like you today.",
          ].map(t => <li key={t}><OnbCheckIc size={14} sw={2.6} />{t}</li>)}
        </ul>
        <button className="biz-btn biz-btn-primary onb-cta" onClick={onNext}>Continue</button>
        <p style={{ textAlign: "center", fontSize: 13, color: "var(--faint)", marginTop: 12 }}>You can add or replace photos later from your dashboard.</p>
      </div>
    </div>
  );
}

/* ── Step 6: Your terms ── */
const ONB_USES = ["Commercials & social ads", "Micro-dramas & series", "Film & TV", "Games & interactive", "Music videos", "Education & explainers"];
function StepTerms({ onNext, onBack }) {
  const [uses, setUses] = useState(new Set(ONB_USES.slice(0, 3)));
  const toggle = (u) => setUses(prev => { const n = new Set(prev); n.has(u) ? n.delete(u) : n.add(u); return n; });
  return (
    <div>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <button className="onb-back" onClick={onBack}>← Back to photos</button>
      </div>
      <div className="onb-card">
        <h1 className="onb-h">Your terms</h1>
        <p className="onb-sub">Decide where your twin can appear. Every booking still comes to you for approval — these settings just filter what reaches you.</p>

        <label className="onb-label">Allowed content types</label>
        <div className="onb-usegrid">
          {ONB_USES.map(u => (
            <button key={u} className={"onb-use" + (uses.has(u) ? " sel" : "")} onClick={() => toggle(u)} aria-pressed={uses.has(u)}>
              <span className="box">{uses.has(u) && <OnbCheckIc size={12} sw={3} />}</span>{u}
            </button>
          ))}
        </div>
        <p className="onb-excl">Always excluded, for everyone: political endorsement, adult content, gambling, and medical claims.</p>

        <div className="onb-row2">
          <div>
            <label className="onb-label" htmlFor="onb-terr">Territory</label>
            <select id="onb-terr" className="onb-select" defaultValue="global">
              <option value="global">Global</option>
              <option value="eu-uk">Europe & UK only</option>
              <option value="na">North America only</option>
              <option value="custom">Custom (choose per booking)</option>
            </select>
          </div>
          <div>
            <label className="onb-label" htmlFor="onb-dur">Max licence duration</label>
            <select id="onb-dur" className="onb-select" defaultValue="12">
              <option value="3">3 months</option>
              <option value="6">6 months</option>
              <option value="12">12 months</option>
              <option value="perproject">Decide per project</option>
            </select>
          </div>
        </div>

        <div className="onb-row2">
          <div>
            <label className="onb-label" htmlFor="onb-fee">Minimum fee per licence</label>
            <select id="onb-fee" className="onb-select" defaultValue="1500">
              <option value="500">£500</option>
              <option value="1500">£1,500</option>
              <option value="5000">£5,000</option>
              <option value="12000">£12,000</option>
              <option value="open">Open to offers</option>
            </select>
          </div>
          <div>
            <label className="onb-label" htmlFor="onb-excl2">Exclusivity requests</label>
            <select id="onb-excl2" className="onb-select" defaultValue="review">
              <option value="review">Review case by case</option>
              <option value="never">Never allow exclusivity</option>
              <option value="category">Allow by category only</option>
            </select>
          </div>
        </div>

        <button className="biz-btn biz-btn-primary onb-cta" onClick={onNext}>Continue</button>
        <p style={{ textAlign: "center", fontSize: 13, color: "var(--faint)", marginTop: 12 }}>You can change all of this at any time.</p>
      </div>
    </div>
  );
}

/* ── Step 7: Compliance ── */
const ONB_CONSENTS = [
  ["self", <span>I confirm I am the person in the photos and documents provided, and I have the right to license this likeness.</span>],
  ["consent", <span>I consent to Twingo creating and hosting a digital twin from my reference media, used only under licences I approve.</span>],
  ["revoke", <span>I understand I can <b>revoke consent at any time</b> — new licences stop immediately, and existing ones are wound down on a defined SLA.</span>],
  ["data", <span>I agree to the processing of my biometric data as described in the <a href="#privacy">Privacy Policy</a>, stored encrypted and never sold.</span>],
];
function StepCompliance({ onDone, onBack }) {
  const [checks, setChecks] = useState(new Set());
  const [name, setName] = useState("");
  const toggle = (k) => setChecks(prev => { const n = new Set(prev); n.has(k) ? n.delete(k) : n.add(k); return n; });
  const ready = checks.size === ONB_CONSENTS.length && name.trim().length > 1;
  return (
    <div>
      <div style={{ maxWidth: 640, margin: "0 auto" }}>
        <button className="onb-back" onClick={onBack}>← Back to your terms</button>
      </div>
      <div className="onb-card">
        <h1 className="onb-h">Compliance</h1>
        <p className="onb-sub">The legal part — read each statement and confirm. This is what keeps your likeness protected.</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, marginTop: 22 }}>
          {ONB_CONSENTS.map(([k, body]) => (
            <label key={k} className="onb-checkrow">
              <input type="checkbox" checked={checks.has(k)} onChange={() => toggle(k)} />
              <span>{body}</span>
            </label>
          ))}
        </div>
        <label className="onb-label" htmlFor="onb-sig">Digital signature</label>
        <p className="onb-help">Type your full legal name to sign.</p>
        <input id="onb-sig" className="onb-input" placeholder="Full legal name" value={name} onChange={e => setName(e.target.value)} style={{ fontFamily: "var(--display)", fontStyle: "italic", fontSize: 17 }} />
        <button className="biz-btn biz-btn-primary onb-cta" disabled={!ready} style={{ opacity: ready ? 1 : 0.45, cursor: ready ? "pointer" : "not-allowed" }} onClick={onDone}>
          Submit for review
        </button>
      </div>
    </div>
  );
}

/* ── Done ── */
function StepDone() {
  return (
    <div className="onb-card" style={{ textAlign: "center" }}>
      <div className="onb-done-ic"><OnbCheckIc size={32} sw={2.6} /></div>
      <h1 className="onb-h">You're in review</h1>
      <p className="onb-sub">Our team reviews every profile before it goes live — usually within 48 hours. We'll email you the moment you're approved and visible to buyers.</p>
      <a className="biz-btn biz-btn-primary onb-cta" href="Twingo.html">Back to Twingo <span className="arr">→</span></a>
    </div>
  );
}

/* ── App ── */
function OnbApp() {
  const [step, setStep] = useState(() => {
    try { return Math.min(7, Math.max(0, parseInt(localStorage.getItem("twingo-onb-step") || "0", 10) || 0)); } catch (e) { return 0; }
  });
  const [theme, setTheme] = useState(() => {
    try { return localStorage.getItem("twingo-theme") || "dark"; } catch (e) { return "dark"; }
  });
  const go = (n) => { setStep(n); try { localStorage.setItem("twingo-onb-step", String(n)); } catch (e) {} window.scrollTo(0, 0); };
  const setTh = (m) => { setTheme(m); try { localStorage.setItem("twingo-theme", m); } catch (e) {} };
  useEffect(() => {
    document.body.style.background = theme === "dark" ? "#06060b" : "#f2f1ea";
  }, [theme]);

  const done = step >= 7;
  const pct = done ? 100 : ((step + 1) / 7) * 100;
  const screens = [
    <StepAccount onNext={() => go(1)} />,
    <StepVerify onNext={() => go(2)} onBack={() => go(0)} />,
    <StepWelcome onNext={() => go(3)} onBack={() => go(1)} />,
    <StepIdentity onNext={() => go(4)} onBack={() => go(2)} />,
    <StepPhotos onNext={() => go(5)} onBack={() => go(3)} />,
    <StepTerms onNext={() => go(6)} onBack={() => go(4)} />,
    <StepCompliance onDone={() => go(7)} onBack={() => go(5)} />,
  ];

  return (
    <div className="biz-root" data-theme={theme} style={{ paddingBottom: 80 }}>
      <div className="biz-wrap">
        <div className="onb-header">
          <a href="Twingo.html" style={{ display: "inline-flex", alignItems: "center", gap: 10 }}>
            <OnbMark /><span className="biz-word">Twingo</span>
          </a>
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ fontFamily: "var(--mono)", fontSize: 12, color: "var(--faint)", letterSpacing: "0.08em" }}>{done ? "DONE" : `STEP ${step + 1} / 7`}</span>
            <OnbThemeToggle theme={theme} onTheme={setTh} />
          </div>
        </div>
        <div className="onb-progress" role="progressbar" aria-valuenow={Math.round(pct)} aria-valuemin="0" aria-valuemax="100"><i style={{ width: pct + "%" }} /></div>
        <div className="onb-stepnav">
          {OnbSTEPS.map((s, i) => (
            <span key={s}
              className={done ? "done" : i === step ? "cur" : i < step ? "done" : ""}
              onClick={() => { if (i < step) go(i); }}
              style={{ cursor: i < step ? "pointer" : "default" }}
            >{i + 1}. {s}</span>
          ))}
        </div>
        <div data-screen-label={done ? "Onboarding complete" : `Step ${step + 1}: ${OnbSTEPS[step]}`}>
          {done ? <StepDone /> : screens[step]}
        </div>
      </div>
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<OnbApp />);
