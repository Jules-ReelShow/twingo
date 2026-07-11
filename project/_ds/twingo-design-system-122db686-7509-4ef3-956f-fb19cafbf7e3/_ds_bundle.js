/* @ds-bundle: {"format":4,"namespace":"TwingoDesignSystem_122db6","components":[{"name":"Badge","sourcePath":"components/core/Badge.jsx"},{"name":"BrandMark","sourcePath":"components/core/BrandMark.jsx"},{"name":"Button","sourcePath":"components/core/Button.jsx"},{"name":"Card","sourcePath":"components/core/Card.jsx"},{"name":"Eyebrow","sourcePath":"components/core/Card.jsx"},{"name":"FilterChip","sourcePath":"components/core/FilterChip.jsx"},{"name":"Input","sourcePath":"components/core/Input.jsx"},{"name":"ProjectCard","sourcePath":"components/core/ProjectCard.jsx"}],"sourceHashes":{"components/core/Badge.jsx":"5b6267f9cdca","components/core/BrandMark.jsx":"b79095da48b5","components/core/Button.jsx":"0587d06ca710","components/core/Card.jsx":"5ef757ea58cf","components/core/FilterChip.jsx":"d1d608ab1db9","components/core/Input.jsx":"9207476d82c5","components/core/ProjectCard.jsx":"475486bd15fc","ui_kits/marketplace/ShowCrewSite.jsx":"938200483abb","uploads/app.jsx":"84273bdcc0de","uploads/business.jsx":"00bc513981de","uploads/image-slot.js":"9309434cb09c","uploads/tweaks-panel.jsx":"6591467622ed"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.TwingoDesignSystem_122db6 = window.TwingoDesignSystem_122db6 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/core/Badge.jsx
try { (() => {
/**
 * Badge — small status pill.
 * tone: paid (green), live (vermilion), new (ink), available (muted).
 * `dot` prepends a small status dot in the matching color.
 */
const TONES = {
  paid: {
    background: "var(--badge-paid-bg)",
    color: "var(--badge-paid-fg)",
    dot: "#12894B"
  },
  live: {
    background: "#FFF0EB",
    color: "var(--vermilion)",
    dot: "var(--vermilion)"
  },
  new: {
    background: "var(--ink-black)",
    color: "#fff",
    dot: "#fff"
  },
  available: {
    background: "var(--surface-subtle)",
    color: "var(--text-secondary)",
    dot: "var(--chartreuse)"
  }
};
function Badge({
  children,
  tone = "paid",
  dot = false,
  style
}) {
  const t = TONES[tone] || TONES.paid;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      fontSize: 12,
      fontWeight: 600,
      padding: "5px 11px",
      borderRadius: "var(--radius-pill)",
      background: t.background,
      color: t.color,
      ...style
    }
  }, dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 7,
      height: 7,
      borderRadius: "999px",
      background: t.dot,
      flex: "none"
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Badge.jsx", error: String((e && e.message) || e) }); }

// components/core/BrandMark.jsx
try { (() => {
/**
 * BrandMark — the ShowCrew logo: two stacked frames (a shot and its reverse)
 * with a chartreuse focus dot, in a near-black rounded tile. Optionally paired
 * with the Inter Tight wordmark ("Crew" set in grey).
 * This mark is taken verbatim from the ShowCrew system — do not redraw it.
 */
function BrandMark({
  size = 26,
  wordmark = false,
  wordSize = 19,
  inkColor = "var(--ink)"
}) {
  const glyph = /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 64 64",
    fill: "none",
    "aria-label": "ShowCrew mark"
  }, /*#__PURE__*/React.createElement("rect", {
    width: "64",
    height: "64",
    rx: "14",
    fill: "#0B0B0A"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "16",
    y: "13",
    width: "28",
    height: "20",
    rx: "5",
    fill: "none",
    stroke: "#FAFAF7",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("rect", {
    x: "20",
    y: "31",
    width: "28",
    height: "20",
    rx: "5",
    fill: "#0B0B0A",
    stroke: "#FAFAF7",
    strokeWidth: "3"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "41",
    cy: "41",
    r: "4.5",
    fill: "#CDFF47"
  }));
  if (!wordmark) return glyph;
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10
    }
  }, glyph, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: wordSize,
      letterSpacing: "var(--tracking-tight)",
      color: inkColor
    }
  }, "Show", /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--text-tertiary)"
    }
  }, "Crew")));
}
Object.assign(__ds_scope, { BrandMark });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/BrandMark.jsx", error: String((e && e.message) || e) }); }

// components/core/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Button — the ShowCrew pill button.
 * variant: primary (ink fill), secondary (bordered white), lime (brand).
 * size: md · sm. Presses down 1px on :active.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  disabled = false,
  style,
  ...rest
}) {
  const base = {
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    fontSize: size === "sm" ? 13 : 14,
    borderRadius: "var(--radius-pill)",
    padding: size === "sm" ? "8px 15px" : "11px 20px",
    cursor: disabled ? "not-allowed" : "pointer",
    border: "1px solid transparent",
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    lineHeight: 1,
    textDecoration: "none",
    opacity: disabled ? 0.5 : 1,
    transition: "background var(--dur-mid), border-color var(--dur-mid), transform var(--dur-fast)"
  };
  const variants = {
    primary: {
      background: "var(--ink)",
      color: "var(--bg)"
    },
    secondary: {
      background: "var(--card-bg)",
      color: "var(--ink)",
      borderColor: "var(--border-strong)"
    },
    lime: {
      background: "var(--lime)",
      color: "var(--ink-black)"
    }
  };
  const s = {
    ...base,
    ...variants[variant],
    ...style
  };
  const onEnter = e => {};
  const onLeave = e => {};
  const onDown = e => {
    if (!disabled) e.currentTarget.style.transform = "var(--press)";
  };
  const onUp = e => {
    e.currentTarget.style.transform = "none";
  };
  const props = {
    style: s,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave,
    onMouseDown: onDown,
    onMouseUp: onUp,
    onClick,
    ...rest
  };
  if (href && !disabled) return /*#__PURE__*/React.createElement("a", _extends({
    href: href
  }, props), children);
  return /*#__PURE__*/React.createElement("button", _extends({
    type: "button",
    disabled: disabled
  }, props), children);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Button.jsx", error: String((e && e.message) || e) }); }

// components/core/Card.jsx
try { (() => {
/**
 * Card — the ShowCrew hairline card / panel. Border does the work; shadow is soft & rare.
 * `hover` enables the lift + shadow interaction (used by project cards).
 */
function Card({
  children,
  hover = false,
  padding = 26,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => hover && setH(true),
    onMouseLeave: () => setH(false),
    style: {
      border: "1px solid " + (h ? "var(--border-strong)" : "var(--border)"),
      borderRadius: "var(--radius-lg)",
      background: "var(--card-bg)",
      padding,
      boxShadow: h ? "var(--shadow-lg)" : "none",
      transform: h ? "var(--lift-card)" : "none",
      transition: "transform var(--dur-mid), box-shadow var(--dur-mid), border-color var(--dur-mid)",
      ...style
    }
  }, children);
}

/** Eyebrow — the small uppercase label above headings. */
function Eyebrow({
  children,
  style
}) {
  return /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 12,
      letterSpacing: "0.08em",
      textTransform: "uppercase",
      color: "var(--text-secondary)",
      fontWeight: 600,
      margin: 0,
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { Card, Eyebrow });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Card.jsx", error: String((e && e.message) || e) }); }

// components/core/FilterChip.jsx
try { (() => {
/**
 * FilterChip — a rounded, bordered toggle chip. Selected = ink fill.
 * Lifts 1px on hover; border strengthens to ink.
 */
function FilterChip({
  children,
  active = false,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: onClick,
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 6,
      border: "1px solid " + (active ? "var(--ink)" : "var(--border-strong)"),
      borderRadius: "var(--radius-pill)",
      padding: "7px 13px",
      fontSize: 13,
      fontWeight: 500,
      fontFamily: "var(--font-body)",
      background: active ? "var(--ink)" : "var(--card-bg)",
      color: active ? "var(--bg)" : "var(--ink)",
      cursor: "pointer",
      transform: "none",
      transition: "border-color var(--dur-mid), transform var(--dur-mid)",
      ...style
    }
  }, children);
}
Object.assign(__ds_scope, { FilterChip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/FilterChip.jsx", error: String((e && e.message) || e) }); }

// components/core/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Input — the ShowCrew text field. Focus lifts the border to ink with a soft shadow.
 */
function Input({
  value,
  onChange,
  placeholder,
  type = "text",
  style,
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);
  return /*#__PURE__*/React.createElement("input", _extends({
    type: type,
    value: value,
    onChange: onChange,
    placeholder: placeholder,
    onFocus: () => setFocus(true),
    onBlur: () => setFocus(false),
    style: {
      width: "100%",
      fontFamily: "var(--font-body)",
      fontSize: 14,
      border: "1px solid " + (focus ? "var(--ink)" : "var(--border-strong)"),
      borderRadius: "var(--radius-md)",
      padding: "12px 14px",
      background: "var(--card-bg)",
      color: "var(--ink)",
      outline: "none",
      boxShadow: focus ? "var(--shadow-focus)" : "none",
      transition: "border-color var(--dur-mid), box-shadow var(--dur-mid)",
      ...style
    }
  }, rest));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/Input.jsx", error: String((e && e.message) || e) }); }

// components/core/ProjectCard.jsx
try { (() => {
/**
 * ProjectCard — a marketplace listing card: an image thumbnail (gradient
 * placeholder by variant, or your own `thumb`), a title, and a byline with avatar.
 * Lifts on hover.
 */
const THUMBS = {
  vermilion: "linear-gradient(135deg, var(--vermilion), var(--vermilion-clay))",
  dark: "linear-gradient(135deg, #1a1a1a, #33343a)",
  lime: "linear-gradient(135deg, var(--lime), #8fe04a)",
  surface: "var(--surface-muted)"
};
function ProjectCard({
  title,
  byline,
  role,
  thumb = "vermilion",
  thumbImage,
  avatar,
  style
}) {
  const [h, setH] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setH(true),
    onMouseLeave: () => setH(false),
    style: {
      border: "1px solid " + (h ? "var(--border-strong)" : "var(--border)"),
      borderRadius: "var(--radius-lg)",
      overflow: "hidden",
      background: "var(--card-bg)",
      boxShadow: h ? "var(--shadow-lg)" : "none",
      transform: h ? "var(--lift-card)" : "none",
      transition: "transform var(--dur-mid), box-shadow var(--dur-mid), border-color var(--dur-mid)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: "5 / 3",
      background: thumbImage ? `center/cover no-repeat url(${thumbImage})` : THUMBS[thumb] || THUMBS.vermilion
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "14px 16px 16px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 14.5,
      letterSpacing: "-0.01em",
      color: "var(--ink)"
    }
  }, title), byline && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8,
      marginTop: 9,
      fontSize: 12.5,
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: "999px",
      flex: "none",
      background: avatar ? `center/cover no-repeat url(${avatar})` : "var(--surface-muted)"
    }
  }), byline, role ? ` · ${role}` : "")));
}
Object.assign(__ds_scope, { ProjectCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/core/ProjectCard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/marketplace/ShowCrewSite.jsx
try { (() => {
/* ShowCrew — marketplace UI kit.
   A quiet, editorial browse experience: hire vetted crew & rent gear.
   Composes the ShowCrew component library from the DS bundle namespace. */
const {
  useState
} = React;
const DS = window.TwingoDesignSystem_122db6;
const {
  BrandMark,
  Button,
  Badge,
  FilterChip,
  Input,
  ProjectCard,
  Card,
  Eyebrow
} = DS;
const wrap = {
  maxWidth: 1160,
  margin: "0 auto",
  padding: "0 24px"
};

/* ── data ── */
const CATS = ["All", "Camera", "Lighting", "Sound", "Editors", "Producers"];
const LISTINGS = [{
  title: "Docu-series — Ep. 4",
  name: "Mara Voss",
  role: "Director",
  cat: "Producers",
  thumb: "vermilion",
  badge: ["available", "Available"]
}, {
  title: "Brand film · Nightshoot",
  name: "Leo Park",
  role: "DP",
  cat: "Camera",
  thumb: "dark",
  badge: ["live", "Live now"]
}, {
  title: "Live event capture",
  name: "Ada Ruiz",
  role: "Producer",
  cat: "Producers",
  thumb: "lime",
  badge: ["paid", "Verified"]
}, {
  title: "Key light package · ARRI",
  name: "Sana Idris",
  role: "Gaffer",
  cat: "Lighting",
  thumb: "surface",
  badge: ["available", "Available"]
}, {
  title: "Boom + lavs · location kit",
  name: "Tom Bianchi",
  role: "Sound mixer",
  cat: "Sound",
  thumb: "dark",
  badge: ["paid", "Verified"]
}, {
  title: "Short film · color + edit",
  name: "Priya Nair",
  role: "Editor",
  cat: "Editors",
  thumb: "vermilion",
  badge: ["live", "Live now"]
}, {
  title: "Steadicam · commercial",
  name: "Devon Cole",
  role: "Operator",
  cat: "Camera",
  thumb: "lime",
  badge: ["available", "Available"]
}, {
  title: "Music video · grade",
  name: "Íris Holm",
  role: "Colorist",
  cat: "Editors",
  thumb: "surface",
  badge: ["paid", "Verified"]
}];
function Header() {
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 40,
      background: "rgba(255,255,255,.88)",
      backdropFilter: "saturate(180%) blur(12px)",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      height: 64,
      display: "flex",
      alignItems: "center",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(BrandMark, {
    size: 26,
    wordmark: true
  }), /*#__PURE__*/React.createElement("nav", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 2
    }
  }, ["Browse crew", "Rent gear", "Projects", "Pricing"].map(t => /*#__PURE__*/React.createElement("a", {
    key: t,
    href: "#",
    style: {
      padding: "8px 12px",
      borderRadius: 999,
      fontSize: 14,
      fontWeight: 500,
      color: "var(--text-secondary)"
    }
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    size: "sm"
  }, "Sign in"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    size: "sm"
  }, "Post a job"))));
}
function Hero({
  query,
  setQuery
}) {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "72px 0 40px",
      borderBottom: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(Eyebrow, null, "Crew & gear marketplace"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: "clamp(40px,6vw,60px)",
      letterSpacing: "-0.03em",
      lineHeight: 1.02,
      margin: "12px 0 16px",
      color: "var(--ink)"
    }
  }, "Find your ", /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-block",
      padding: "0 .06em"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      inset: "12% -2% 6%",
      background: "var(--lime)",
      zIndex: 0,
      borderRadius: ".1em",
      transform: "rotate(-1.2deg)"
    }
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative"
    }
  }, "crew")), ". Build the show."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      color: "var(--text-secondary)",
      maxWidth: "56ch",
      margin: "0 0 28px"
    }
  }, "Hire vetted crew and rent gear for any production \u2014 from a one-day shoot to a full series."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12,
      maxWidth: 560,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 240
    }
  }, /*#__PURE__*/React.createElement(Input, {
    placeholder: "Search crew, gear, or role\u2026",
    value: query,
    onChange: e => setQuery(e.target.value)
  })), /*#__PURE__*/React.createElement(Button, {
    variant: "lime"
  }, "Get started")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      marginTop: 24,
      alignItems: "center",
      fontSize: 13,
      color: "var(--text-secondary)"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: "paid",
    dot: true
  }, "Vetted crew"), /*#__PURE__*/React.createElement(Badge, {
    tone: "available",
    dot: true
  }, "Gear insured"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: 12
    }
  }, "Trusted by 12,000 productions"))));
}
function Listings({
  cat,
  setCat,
  query
}) {
  const items = LISTINGS.filter(l => (cat === "All" || l.cat === cat) && (query.trim() === "" || (l.title + l.name + l.role).toLowerCase().includes(query.toLowerCase())));
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "40px 0 72px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "baseline",
      justifyContent: "space-between",
      gap: 16,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 28,
      letterSpacing: "-0.02em",
      margin: 0,
      color: "var(--ink)"
    }
  }, "Featured makers"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      fontSize: 14,
      fontWeight: 500,
      color: "var(--text-secondary)"
    }
  }, "View all \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 10,
      marginBottom: 24
    }
  }, CATS.map(c => /*#__PURE__*/React.createElement(FilterChip, {
    key: c,
    active: cat === c,
    onClick: () => setCat(c)
  }, c))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: 16
    }
  }, items.map((l, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement(ProjectCard, {
    title: l.title,
    byline: l.name,
    role: l.role,
    thumb: l.thumb
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      top: 10,
      left: 10
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    tone: l.badge[0],
    dot: l.badge[0] !== "new"
  }, l.badge[1])))), items.length === 0 && /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-tertiary)",
      fontSize: 15
    }
  }, "No matches \u2014 try another category or search."))));
}
function CTA() {
  return /*#__PURE__*/React.createElement("section", {
    style: {
      padding: "0 0 72px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, /*#__PURE__*/React.createElement(Card, {
    padding: 40,
    style: {
      background: "var(--surface-subtle)",
      border: "1px solid var(--border)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      gap: 24,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h2", {
    style: {
      fontFamily: "var(--font-display)",
      fontWeight: 600,
      fontSize: 28,
      letterSpacing: "-0.02em",
      margin: "0 0 6px",
      color: "var(--ink)"
    }
  }, "Hiring for a shoot?"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--text-secondary)",
      fontSize: 16,
      margin: 0
    }
  }, "Post a job and get matched with vetted crew in your city.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "secondary"
  }, "Browse crew"), /*#__PURE__*/React.createElement(Button, {
    variant: "primary"
  }, "Post a job")))));
}
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: "1px solid var(--border)",
      padding: "40px 0 56px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      ...wrap,
      display: "flex",
      alignItems: "center",
      gap: 12,
      color: "var(--text-tertiary)",
      fontSize: 13,
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement(BrandMark, {
    size: 20
  }), /*#__PURE__*/React.createElement("span", null, "ShowCrew \u2014 hire vetted crew & rent gear. White canvas \xB7 Ink #1C212B \xB7 Inter & Inter Tight."), /*#__PURE__*/React.createElement("span", {
    style: {
      marginLeft: "auto",
      display: "flex",
      gap: 18
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit"
    }
  }, "About"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit"
    }
  }, "Terms"), /*#__PURE__*/React.createElement("a", {
    href: "#",
    style: {
      color: "inherit"
    }
  }, "Contact"))));
}
function ShowCrewSite() {
  const [cat, setCat] = useState("All");
  const [query, setQuery] = useState("");
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "#fff",
      color: "var(--ink)",
      fontFamily: "var(--font-body)",
      minHeight: "100vh",
      lineHeight: 1.55
    }
  }, /*#__PURE__*/React.createElement(Header, null), /*#__PURE__*/React.createElement(Hero, {
    query: query,
    setQuery: setQuery
  }), /*#__PURE__*/React.createElement(Listings, {
    cat: cat,
    setCat: setCat,
    query: query
  }), /*#__PURE__*/React.createElement(CTA, null), /*#__PURE__*/React.createElement(Footer, null));
}
window.ShowCrewSite = ShowCrewSite;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/marketplace/ShowCrewSite.jsx", error: String((e && e.message) || e) }); }

// uploads/app.jsx
try { (() => {
const {
  useState,
  useEffect,
  useRef
} = React;

/* ───────────────────────── Tweaks ───────────────────────── */
const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accent": "#c7f500",
  "bizAccent": "#7b5bff"
} /*EDITMODE-END*/;
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
  lock: "M6 11h12v9H6zM9 11V8a3 3 0 0 1 6 0v3"
};
function Icon({
  name,
  size = 22,
  sw = 1.7,
  fill = false
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: fill ? "currentColor" : "none",
    stroke: "currentColor",
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: I[name]
  }));
}

/* ───────────────────────── Brand mark ───────────────────────── */
function Mark({
  size = 26,
  color = "var(--ink)"
}) {
  return /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size * 0.62,
    viewBox: "0 0 42 26",
    fill: "none",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "14",
    cy: "13",
    r: "10.5",
    stroke: color,
    strokeWidth: "3.4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "28",
    cy: "13",
    r: "10.5",
    stroke: color,
    strokeWidth: "3.4"
  }));
}
function Wordmark({
  light = false
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    color: light ? "var(--bg)" : "var(--ink)"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--display)",
      fontWeight: 600,
      fontSize: 22,
      letterSpacing: "-0.02em",
      color: light ? "var(--bg)" : "var(--ink)"
    }
  }, "Twingo"));
}

/* ───────────────────────── Theme toggle (shared) ───────────────────────── */
function ThemeToggle({
  theme,
  onTheme
}) {
  const dark = theme === "dark";
  return /*#__PURE__*/React.createElement("button", {
    className: "biz-theme-btn",
    "aria-label": "Toggle theme",
    title: dark ? "Switch to light mode" : "Switch to dark mode",
    onClick: () => onTheme(dark ? "light" : "dark")
  }, dark ? /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("path", {
    d: "M12 2v2M12 20v2M2 12h2M20 12h2M5 5l1.5 1.5M17.5 17.5L19 19M19 5l-1.5 1.5M6.5 17.5L5 19"
  })) : /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M21 12.8A8.5 8.5 0 1 1 11.2 3a6.5 6.5 0 0 0 9.8 9.8z"
  })));
}

/* ───────────────────────── Scroll reveal ───────────────────────── */
function useReveal(dep) {
  useEffect(() => {
    const els = Array.from(document.querySelectorAll(".reveal"));
    if (!("IntersectionObserver" in window)) {
      els.forEach(e => e.classList.add("in"));
      return;
    }
    const io = new IntersectionObserver(entries => {
      entries.forEach(en => {
        if (en.isIntersecting) {
          en.target.classList.add("in");
          io.unobserve(en.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: "0px 0px -6% 0px"
    });
    els.forEach(e => io.observe(e));
    return () => io.disconnect();
  }, [dep]);
}

/* ───────────────────────── Nav ───────────────────────── */
function AudienceSwitch({
  mode,
  onChange,
  dark = false
}) {
  const opts = [["talent", "I'm talent"], ["business", "I'm a business"]];
  return /*#__PURE__*/React.createElement("div", {
    role: "tablist",
    "aria-label": "Audience",
    style: {
      display: "inline-flex",
      position: "relative",
      padding: 4,
      gap: 2,
      borderRadius: 100,
      background: dark ? "rgba(255,255,255,0.05)" : "var(--surface)",
      border: "1px solid " + (dark ? "rgba(255,255,255,0.14)" : "var(--line-strong)")
    }
  }, opts.map(([key, label]) => {
    const active = mode === key;
    return /*#__PURE__*/React.createElement("button", {
      key: key,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange(key),
      style: {
        position: "relative",
        zIndex: 1,
        border: "none",
        cursor: "pointer",
        font: "600 14px var(--sans)",
        padding: "8px 16px",
        borderRadius: 100,
        lineHeight: 1,
        whiteSpace: "nowrap",
        background: active ? dark ? "#fff" : "var(--ink)" : "transparent",
        color: active ? dark ? "#0a0a12" : "var(--bg)" : dark ? "rgba(255,255,255,0.6)" : "var(--ink-soft)",
        transition: "background .2s ease, color .2s ease"
      }
    }, label);
  }));
}
function Nav({
  audience,
  onAudience,
  theme,
  onTheme
}) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll);
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  const links = [["How it works", "#how"], ["Why join", "#why"], ["FAQ", "#faq"]];
  return /*#__PURE__*/React.createElement("header", {
    className: "biz-nav" + (scrolled ? " scrolled" : "")
  }, /*#__PURE__*/React.createElement("div", {
    className: "biz-wrap biz-nav-inner"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#top",
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    color: "var(--strong)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "biz-word"
  }, "Twingo")), /*#__PURE__*/React.createElement("nav", {
    className: "biz-nav-links"
  }, links.map(([t, h]) => /*#__PURE__*/React.createElement("a", {
    key: h,
    href: h
  }, t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(ThemeToggle, {
    theme: theme,
    onTheme: onTheme
  }), /*#__PURE__*/React.createElement("div", {
    className: "biz-nav-switch"
  }, /*#__PURE__*/React.createElement(AudienceSwitch, {
    mode: audience,
    onChange: onAudience,
    dark: theme === "dark"
  })), /*#__PURE__*/React.createElement("a", {
    href: "#apply",
    className: "biz-btn biz-btn-primary biz-btn-sm"
  }, "Join"))));
}

/* ───────────────────────── Hero ───────────────────────── */
function TrustTick({
  name,
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 9,
      fontSize: 14.5,
      color: "var(--ink-soft)",
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      color: "var(--ink)"
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: name,
    size: 18,
    sw: 1.8
  })), children);
}
function LicenseCard() {
  const rows = [["Campaign", "Global Skincare Brand"], ["Usage", "Social ads · Website · OOH"], ["Earnings", "$12,500"]];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      left: -34,
      bottom: -36,
      width: 340,
      background: "var(--surface)",
      border: "1px solid var(--line)",
      borderRadius: 18,
      padding: "20px 22px",
      boxShadow: "0 30px 60px -20px rgba(20,19,16,0.28)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginBottom: 16
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--display)",
      fontWeight: 600,
      fontSize: 16
    }
  }, "Likeness license approved"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 600,
      color: "#1f7a46",
      background: "#d6f5e2",
      padding: "4px 10px",
      borderRadius: 100
    }
  }, "Active")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 11
    }
  }, rows.map(([k, v], i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      gap: 12,
      paddingTop: i ? 11 : 0,
      borderTop: i ? "1px solid var(--line)" : "none"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--ink-faint)",
      fontFamily: "var(--mono)",
      letterSpacing: "0.04em"
    }
  }, k), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5,
      fontWeight: i === 2 ? 700 : 500,
      textAlign: "right"
    }
  }, v)))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 16,
      display: "flex",
      justifyContent: "flex-end"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12,
      fontWeight: 700,
      color: "var(--bg)",
      background: "var(--ink)",
      padding: "6px 14px",
      borderRadius: 100,
      letterSpacing: "0.04em"
    }
  }, "PAID")));
}
function Hero() {
  const ticks = [["check", "You approve every use"], ["dollar", "95% creator payout"], ["shield", "Safe & ethical use"]];
  return /*#__PURE__*/React.createElement("section", {
    id: "top",
    className: "biz-hero"
  }, /*#__PURE__*/React.createElement("div", {
    className: "biz-hero-glow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "biz-wrap biz-hero-grid"
  }, /*#__PURE__*/React.createElement("div", {
    className: "biz-hero-copy reveal in"
  }, /*#__PURE__*/React.createElement("div", {
    className: "biz-eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "A marketplace for your likeness"), /*#__PURE__*/React.createElement("h1", {
    className: "biz-h1"
  }, "License your likeness. Get paid when brands use your ", /*#__PURE__*/React.createElement("span", {
    className: "grad"
  }, "AI twin.")), /*#__PURE__*/React.createElement("p", {
    className: "biz-lead"
  }, "Twingo helps influencers and creators earn from licensed AI versions of their likeness \u2014 with full control, transparency, and approval on every use."), /*#__PURE__*/React.createElement("div", {
    className: "biz-badges"
  }, ticks.map(([n, t]) => /*#__PURE__*/React.createElement("span", {
    key: t,
    className: "biz-badge"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: n,
    size: 15,
    sw: 2
  }), t))), /*#__PURE__*/React.createElement("div", {
    className: "biz-hero-cta"
  }, /*#__PURE__*/React.createElement("a", {
    href: "#apply",
    className: "biz-btn biz-btn-primary"
  }, "Join ", /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, "\u2192")), /*#__PURE__*/React.createElement("span", {
    className: "biz-hint"
  }, "Free to join. No obligation."))), /*#__PURE__*/React.createElement("div", {
    className: "biz-hero-visual reveal in",
    style: {
      minHeight: "auto"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "biz-collage"
  }, /*#__PURE__*/React.createElement("image-slot", {
    id: "hero-1",
    shape: "rounded",
    radius: "18",
    style: {
      width: "100%",
      height: 340,
      gridRow: "1 / 3"
    },
    placeholder: "Drop a portrait"
  }), /*#__PURE__*/React.createElement("image-slot", {
    id: "hero-2",
    shape: "rounded",
    radius: "18",
    style: {
      width: "100%",
      height: 164
    },
    placeholder: "Drop a portrait"
  }), /*#__PURE__*/React.createElement("image-slot", {
    id: "hero-3",
    shape: "rounded",
    radius: "18",
    style: {
      width: "100%",
      height: 164
    },
    placeholder: "Drop a portrait"
  })), /*#__PURE__*/React.createElement("a", {
    href: "https://www.instagram.com/yana_ivanovaa/",
    target: "_blank",
    rel: "noopener noreferrer",
    className: "biz-ig"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("rect", {
    x: "2",
    y: "2",
    width: "20",
    height: "20",
    rx: "5"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "4"
  }), /*#__PURE__*/React.createElement("circle", {
    cx: "17.5",
    cy: "6.5",
    r: "1",
    fill: "currentColor",
    stroke: "none"
  })), "@yana_ivanovaa"))));
}

/* ───────────────────────── Stats strip ───────────────────────── */
const STATS = [{
  icon: "users",
  big: "1,500+",
  sub: "Verified creators"
}, {
  icon: "shield",
  big: "Safe by design",
  sub: "No adult, political, religious or deceptive use"
}, {
  icon: "clock",
  big: "3 min",
  sub: "Average verification time"
}, {
  icon: "dollar",
  big: "95%",
  sub: "Creator payout"
}];
function StatsStrip() {
  return /*#__PURE__*/React.createElement("section", {
    className: "biz-section",
    style: {
      paddingTop: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "biz-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "biz-eyebrow reveal",
    style: {
      justifyContent: "center",
      display: "flex",
      marginBottom: 26
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Creators are joining early"), /*#__PURE__*/React.createElement("div", {
    className: "biz-statband reveal"
  }, STATS.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "biz-stat"
  }, /*#__PURE__*/React.createElement("span", {
    className: "ic"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 24
  })), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "biz-stat-big"
  }, s.big), /*#__PURE__*/React.createElement("div", {
    className: "biz-stat-sub"
  }, s.sub)))))));
}

/* ───────────────────────── Own them (features) ───────────────────────── */
const FEATURES = [{
  icon: "search",
  title: "Get discovered by brands",
  body: "We connect you with brands, agencies, and content teams looking for AI-ready talent."
}, {
  icon: "film",
  title: "Earn without filming every campaign",
  body: "License your likeness for AI campaigns, training, content, and more — on your terms."
}, {
  icon: "shield",
  title: "You stay in control",
  body: "Approve every project. Set your rules. Choose what your AI twin can (and can't) be used for."
}, {
  icon: "chart",
  title: "Build a new income stream",
  body: "Turn your influence into a licensed asset and unlock recurring opportunities."
}];
function OwnThem() {
  return /*#__PURE__*/React.createElement("section", {
    id: "why",
    className: "biz-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "biz-wrap biz-split"
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "biz-eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Why join"), /*#__PURE__*/React.createElement("h2", {
    className: "biz-h2"
  }, "AI is creating new opportunities. ", /*#__PURE__*/React.createElement("span", {
    className: "grad"
  }, "You should own them.")), /*#__PURE__*/React.createElement("p", {
    className: "biz-sub",
    style: {
      marginBottom: 16,
      maxWidth: 380
    }
  }, "Brands are already using AI-generated people in ads, social content, and campaigns."), /*#__PURE__*/React.createElement("p", {
    className: "biz-sub",
    style: {
      maxWidth: 380
    }
  }, "Twingo makes sure creators are part of that future \u2014 with consent, control, and compensation.")), /*#__PURE__*/React.createElement("div", {
    className: "biz-grid",
    style: {
      "--cols": 2
    }
  }, FEATURES.map((f, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "biz-card biz-card-hover reveal",
    style: {
      transitionDelay: i * 70 + "ms"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "biz-icon-chip"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: f.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("h3", {
    className: "biz-card-title"
  }, f.title), /*#__PURE__*/React.createElement("p", {
    className: "biz-card-body"
  }, f.body))))));
}

/* ───────────────────────── How it works ───────────────────────── */
const STEPS = [{
  icon: "userplus",
  title: "Create your twin",
  body: "Create your likeness and verify your identity."
}, {
  icon: "sliders",
  title: "Set your rules",
  body: "Choose what industries, campaigns, and use cases you're open to."
}, {
  icon: "doc",
  title: "Review opportunities",
  body: "See who wants to license your likeness, how it'll be used, and what you'll earn."
}, {
  icon: "dollar",
  title: "Approve, earn, or decline",
  body: "Nothing goes live without your approval. You get paid when your likeness is used."
}];
function HowItWorks() {
  return /*#__PURE__*/React.createElement("section", {
    id: "how",
    className: "biz-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "biz-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "biz-sechead center reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "biz-eyebrow",
    style: {
      justifyContent: "center",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "How it works"), /*#__PURE__*/React.createElement("h2", {
    className: "biz-h2"
  }, "How Twingo works")), /*#__PURE__*/React.createElement("div", {
    className: "biz-grid",
    style: {
      "--cols": 4
    }
  }, STEPS.map((s, i) => /*#__PURE__*/React.createElement("div", {
    key: i,
    className: "biz-step reveal",
    style: {
      transitionDelay: i * 70 + "ms"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "biz-step-num"
  }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement("span", {
    className: "biz-icon-chip"
  }, /*#__PURE__*/React.createElement(Icon, {
    name: s.icon,
    size: 22
  })), /*#__PURE__*/React.createElement("h3", {
    className: "biz-card-title"
  }, s.title), /*#__PURE__*/React.createElement("p", {
    className: "biz-card-body"
  }, s.body))))));
}

/* ───────────────────────── FAQ ───────────────────────── */
const FAQS = [{
  q: "Is it really free?",
  a: "Yes. Sign up is free. Identity verification is free. You always take 75% of every licence fee. Twingo earns 25% on direct deals, or 10% if you're agent-managed (your agent takes the other 15% from our cut, not yours). No monthly fees, no hidden costs, no contract you can't walk away from."
}, {
  q: "Can I leave whenever I want?",
  a: "Yes. Revocation is built in from day one. You can withdraw consent any time — new licences stop immediately. Existing licences are suppressed on a defined SLA, with the full lifecycle logged. We're honest about model weights: those are harder, and the buyer's contract with us defines what happens."
}, {
  q: "Will my face be used without my permission?",
  a: "No. No commercial use happens without your specific, granular consent. Every licence is a contract you approve before money changes hands. Your identity documents and biometric data never leave our encrypted off-chain storage."
}, {
  q: "How much will I actually earn?",
  a: "It depends on the licence. Standard campaign work typically runs £1,500–£12,000 per project. Featured talent and lead presenter roles can run substantially higher. Long-form productions, broadcaster archives, and exclusivity premiums push fees further still."
}, {
  q: "How do I actually get paid?",
  a: "Bank transfer or Stripe Connect, depending on your region. We target first payout within 30 days of your twin being licensed. You see every transaction, every fee, and every payout in your dashboard."
}, {
  q: "I have an agent. Does that change my pay?",
  a: "No — you still get 75%. What changes is how the other 25% is split: Twingo takes 10% (down from 25%) and your agent takes 15%, both from our side of the deal, not yours. We integrate with Spotlight directly, so your agent can manage your twin alongside your other bookings."
}, {
  q: "What about minors?",
  a: "Under-18s can only join through a parent or legal guardian, with enhanced safeguards at every stage: stricter consent, mandatory cooling-off periods, restricted use categories, and elevated review on every booking."
}, {
  q: "What if I just don't want to accept any work?",
  a: "That's fine. You're never under any obligation. You can be on the registry and simply reject every licence request. The choice is always yours."
}];
function FaqItem({
  q,
  a,
  open,
  onToggle
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "biz-faq-item" + (open ? " open" : "")
  }, /*#__PURE__*/React.createElement("button", {
    className: "biz-faq-q",
    "aria-expanded": open,
    onClick: onToggle
  }, /*#__PURE__*/React.createElement("span", null, q), /*#__PURE__*/React.createElement("span", {
    className: "biz-faq-plus"
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M5 12h14M13 6l6 6-6 6"
  })))), /*#__PURE__*/React.createElement("div", {
    className: "biz-faq-a-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("p", {
    className: "biz-faq-a"
  }, a))));
}
function Faq() {
  const [open, setOpen] = useState(0);
  return /*#__PURE__*/React.createElement("section", {
    id: "faq",
    className: "biz-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "biz-wrap",
    style: {
      maxWidth: 860
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "biz-sechead center reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "biz-eyebrow",
    style: {
      justifyContent: "center",
      display: "inline-flex"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Questions, answered"), /*#__PURE__*/React.createElement("h2", {
    className: "biz-h2"
  }, "The things you're actually wondering.")), /*#__PURE__*/React.createElement("div", {
    className: "biz-faq reveal"
  }, FAQS.map((f, i) => /*#__PURE__*/React.createElement(FaqItem, {
    key: i,
    q: f.q,
    a: f.a,
    open: open === i,
    onToggle: () => setOpen(open === i ? -1 : i)
  })))));
}

/* ───────────────────────── Waitlist form ───────────────────────── */
const PLATFORMS = [{
  id: "instagram",
  label: "Instagram",
  hint: "instagram.com/yourhandle"
}, {
  id: "tiktok",
  label: "TikTok",
  hint: "tiktok.com/@yourhandle"
}, {
  id: "youtube",
  label: "YouTube",
  hint: "youtube.com/@yourchannel"
}, {
  id: "facebook",
  label: "Facebook",
  hint: "facebook.com/yourpage"
}, {
  id: "x",
  label: "X",
  hint: "x.com/yourhandle"
}];
const FOLLOWERS = ["Under 10K", "10K – 50K", "50K – 250K", "250K – 1M", "1M+"];
const CATEGORIES = ["Beauty & skincare", "Fashion", "Fitness & health", "Gaming", "Lifestyle", "Tech", "Music", "Comedy & entertainment", "Other"];
const USES = [["film", "Film"], ["play", "Micro-drama"], ["cap", "Education"], ["tag", "Commercial"], ["game", "Games"], ["music", "Music video"]];
let _acctId = 1;
const newAcct = () => ({
  key: _acctId++,
  platform: "instagram",
  url: ""
});
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
  const upd = (key, patch) => setAccounts(a => a.map(x => x.key === key ? {
    ...x,
    ...patch
  } : x));
  const add = () => setAccounts(a => [...a, newAcct()]);
  const rm = key => setAccounts(a => a.length > 1 ? a.filter(x => x.key !== key) : a);
  const toggleUse = u => setUses(us => us.includes(u) ? us.filter(x => x !== u) : [...us, u]);
  const submit = e => {
    e.preventDefault();
    setTouched(true);
    if (valid) setDone(true);
  };
  const label = {
    display: "block",
    fontSize: 13,
    fontWeight: 600,
    color: "var(--ink)",
    marginBottom: 8
  };
  const field = {
    width: "100%",
    background: "var(--surface)",
    border: "1px solid var(--line-strong)",
    borderRadius: 11,
    padding: "13px 15px",
    color: "var(--ink)",
    fontSize: 15,
    outline: "none",
    transition: "border-color .18s, box-shadow .18s"
  };
  const fOn = e => {
    e.target.style.borderColor = "var(--ink)";
    e.target.style.boxShadow = "0 0 0 3px var(--accent-soft)";
  };
  const fOff = e => {
    e.target.style.borderColor = "var(--line-strong)";
    e.target.style.boxShadow = "none";
  };
  const selWrap = {
    position: "relative"
  };
  const caret = /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--ink-faint)",
      fontSize: 11
    }
  }, "\u25BC");
  return /*#__PURE__*/React.createElement("section", {
    id: "apply",
    style: {
      padding: "104px 0 110px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap apply-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "0.8fr 1.2fr",
      gap: 64,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal apply-left"
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 22
    }
  }, "Join the waitlist"), /*#__PURE__*/React.createElement("h2", {
    className: "display",
    style: {
      fontSize: "clamp(34px, 4vw, 52px)",
      marginBottom: 22
    }
  }, "Be early.", /*#__PURE__*/React.createElement("br", null), /*#__PURE__*/React.createElement("em", null, "Be in control.")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--ink-soft)",
      fontSize: 16.5,
      maxWidth: 340,
      marginBottom: 30
    }
  }, "The first creators on Twingo will be easier for brands to discover when we go live."), /*#__PURE__*/React.createElement("ul", {
    style: {
      listStyle: "none",
      padding: 0,
      margin: "0 0 34px",
      display: "flex",
      flexDirection: "column",
      gap: 13
    }
  }, ["Free to join", "You approve every use", "No obligation"].map((t, i) => /*#__PURE__*/React.createElement("li", {
    key: i,
    style: {
      display: "flex",
      alignItems: "center",
      gap: 11,
      fontSize: 16,
      fontWeight: 500
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 22,
      height: 22,
      borderRadius: "50%",
      background: "var(--accent)",
      color: "var(--ink)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      flexShrink: 0
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 14,
    sw: 2.4
  })), t))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 14
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex"
    }
  }, [0, 1, 2, 3].map(i => /*#__PURE__*/React.createElement("span", {
    key: i,
    className: "ph",
    style: {
      width: 38,
      height: 38,
      borderRadius: "50%",
      marginLeft: i ? -10 : 0,
      border: "2px solid var(--bg)",
      display: "inline-block"
    }
  }))), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14,
      color: "var(--ink-soft)",
      lineHeight: 1.4
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ink)"
    }
  }, "1,500+ creators"), /*#__PURE__*/React.createElement("br", null), "are waiting"))), /*#__PURE__*/React.createElement("div", {
    className: "reveal"
  }, done ? /*#__PURE__*/React.createElement(SuccessCard, {
    name: name,
    email: email,
    accounts: filled,
    followers: followers,
    category: category,
    uses: uses,
    onReset: () => {
      setDone(false);
      setName("");
      setEmail("");
      setAccounts([newAcct()]);
      setFollowers("");
      setCategory("");
      setUses([]);
      setTouched(false);
    }
  }) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    noValidate: true,
    style: {
      background: "var(--surface)",
      border: "1px solid var(--line)",
      borderRadius: 22,
      padding: "34px 34px 36px"
    }
  }, /*#__PURE__*/React.createElement("h3", {
    className: "display",
    style: {
      fontSize: 26,
      marginBottom: 6
    }
  }, "Join the waitlist"), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--ink-soft)",
      fontSize: 15,
      marginBottom: 26
    }
  }, "Fill in a few details and we'll keep you updated."), /*#__PURE__*/React.createElement("div", {
    className: "form-2col",
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: 18,
      marginBottom: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: label
  }, "Full name"), /*#__PURE__*/React.createElement("input", {
    style: field,
    value: name,
    onChange: e => setName(e.target.value),
    onFocus: fOn,
    onBlur: fOff,
    placeholder: "Enter your name"
  }), touched && name.trim() === "" && /*#__PURE__*/React.createElement(Err, null, "Please enter your name")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: label
  }, "Email"), /*#__PURE__*/React.createElement("input", {
    style: field,
    type: "email",
    value: email,
    onChange: e => setEmail(e.target.value),
    onFocus: fOn,
    onBlur: fOff,
    placeholder: "Enter your email"
  }), touched && !emailValid && /*#__PURE__*/React.createElement(Err, null, "Enter a valid email")), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: label
  }, "Follower range"), /*#__PURE__*/React.createElement("div", {
    style: selWrap
  }, /*#__PURE__*/React.createElement("select", {
    value: followers,
    onChange: e => setFollowers(e.target.value),
    onFocus: fOn,
    onBlur: fOff,
    style: {
      ...field,
      appearance: "none",
      paddingRight: 34,
      cursor: "pointer",
      color: followers ? "var(--ink)" : "var(--ink-faint)"
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Select range"), FOLLOWERS.map(f => /*#__PURE__*/React.createElement("option", {
    key: f,
    value: f,
    style: {
      color: "#111"
    }
  }, f))), caret)), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("label", {
    style: label
  }, "Creator category"), /*#__PURE__*/React.createElement("div", {
    style: selWrap
  }, /*#__PURE__*/React.createElement("select", {
    value: category,
    onChange: e => setCategory(e.target.value),
    onFocus: fOn,
    onBlur: fOff,
    style: {
      ...field,
      appearance: "none",
      paddingRight: 34,
      cursor: "pointer",
      color: category ? "var(--ink)" : "var(--ink-faint)"
    }
  }, /*#__PURE__*/React.createElement("option", {
    value: "",
    disabled: true
  }, "Select category"), CATEGORIES.map(c => /*#__PURE__*/React.createElement("option", {
    key: c,
    value: c,
    style: {
      color: "#111"
    }
  }, c))), caret))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "baseline",
      marginBottom: 10
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      ...label,
      marginBottom: 0
    }
  }, "Your social accounts"), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 13,
      color: "var(--ink-faint)"
    }
  }, filled.length, " added")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 10
    }
  }, accounts.map(a => {
    const plat = PLATFORMS.find(p => p.id === a.platform);
    return /*#__PURE__*/React.createElement("div", {
      key: a.key,
      className: "acct-row",
      style: {
        display: "grid",
        gridTemplateColumns: "150px 1fr auto",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement("div", {
      style: selWrap
    }, /*#__PURE__*/React.createElement("select", {
      value: a.platform,
      onChange: e => upd(a.key, {
        platform: e.target.value
      }),
      onFocus: fOn,
      onBlur: fOff,
      style: {
        ...field,
        appearance: "none",
        paddingRight: 32,
        cursor: "pointer"
      }
    }, PLATFORMS.map(p => /*#__PURE__*/React.createElement("option", {
      key: p.id,
      value: p.id,
      style: {
        color: "#111"
      }
    }, p.label))), caret), /*#__PURE__*/React.createElement("input", {
      style: field,
      value: a.url,
      onChange: e => upd(a.key, {
        url: e.target.value
      }),
      onFocus: fOn,
      onBlur: fOff,
      placeholder: plat.hint
    }), /*#__PURE__*/React.createElement("button", {
      type: "button",
      onClick: () => rm(a.key),
      "aria-label": "Remove",
      disabled: accounts.length === 1,
      style: {
        background: "transparent",
        border: "1px solid var(--line-strong)",
        borderRadius: 11,
        width: 46,
        fontSize: 18,
        color: accounts.length === 1 ? "var(--line-strong)" : "var(--ink-soft)",
        cursor: accounts.length === 1 ? "not-allowed" : "pointer",
        transition: "border-color .2s, color .2s"
      },
      onMouseEnter: e => {
        if (accounts.length > 1) {
          e.currentTarget.style.borderColor = "var(--ink)";
          e.currentTarget.style.color = "var(--ink)";
        }
      },
      onMouseLeave: e => {
        e.currentTarget.style.borderColor = "var(--line-strong)";
        e.currentTarget.style.color = accounts.length === 1 ? "var(--line-strong)" : "var(--ink-soft)";
      }
    }, "\xD7"));
  })), touched && filled.length === 0 && /*#__PURE__*/React.createElement(Err, null, "Add at least one social account link"), /*#__PURE__*/React.createElement("button", {
    type: "button",
    onClick: add,
    style: {
      marginTop: 12,
      width: "100%",
      background: "transparent",
      border: "1px dashed var(--line-strong)",
      borderRadius: 11,
      padding: "12px",
      fontSize: 14,
      fontWeight: 600,
      color: "var(--ink)",
      cursor: "pointer",
      transition: "border-color .2s, background .2s"
    },
    onMouseEnter: e => {
      e.currentTarget.style.borderColor = "var(--ink)";
      e.currentTarget.style.background = "var(--bg)";
    },
    onMouseLeave: e => {
      e.currentTarget.style.borderColor = "var(--line-strong)";
      e.currentTarget.style.background = "transparent";
    }
  }, "+ Add another account"), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 26
    }
  }, /*#__PURE__*/React.createElement("label", {
    style: {
      ...label,
      marginBottom: 12
    }
  }, "What you approve your AI likeness to be used for"), /*#__PURE__*/React.createElement("div", {
    className: "uses-grid",
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: 10
    }
  }, USES.map(([ic, lab]) => {
    const on = uses.includes(lab);
    return /*#__PURE__*/React.createElement("button", {
      key: lab,
      type: "button",
      onClick: () => toggleUse(lab),
      style: {
        display: "flex",
        alignItems: "center",
        gap: 9,
        padding: "12px 14px",
        borderRadius: 11,
        cursor: "pointer",
        fontSize: 14,
        fontWeight: 600,
        fontFamily: "var(--sans)",
        transition: "all .16s",
        background: on ? "var(--accent)" : "var(--bg)",
        color: "var(--ink)",
        border: "1px solid " + (on ? "var(--accent)" : "var(--line-strong)")
      }
    }, /*#__PURE__*/React.createElement(Icon, {
      name: ic,
      size: 18,
      sw: 1.8
    }), lab);
  }))), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    className: "btn btn-accent",
    style: {
      width: "100%",
      justifyContent: "center",
      marginTop: 26,
      padding: "16px"
    }
  }, "Join ", /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, "\u2192")), /*#__PURE__*/React.createElement("p", {
    style: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      gap: 7,
      fontSize: 13,
      color: "var(--ink-faint)",
      marginTop: 16
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "lock",
    size: 14
  }), " We respect your privacy. No spam, ever.")))));
}
function Err({
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      color: "#c0492f",
      fontSize: 13,
      marginTop: 7
    }
  }, children);
}
function SuccessCard({
  name,
  email,
  accounts,
  followers,
  category,
  uses,
  onReset
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--surface)",
      border: "1px solid var(--line)",
      borderRadius: 22,
      padding: "40px 36px"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: 54,
      height: 54,
      borderRadius: "50%",
      background: "var(--accent)",
      color: "var(--ink)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    name: "check",
    size: 28,
    sw: 2.4
  })), /*#__PURE__*/React.createElement("h3", {
    className: "display",
    style: {
      fontSize: 30,
      marginBottom: 10
    }
  }, "You're on the list, ", name.split(" ")[0], "."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--ink-soft)",
      fontSize: 16,
      marginBottom: 28,
      maxWidth: 420
    }
  }, "Thanks for joining Twingo. We review every creator personally \u2014 expect to hear from us at ", /*#__PURE__*/React.createElement("strong", {
    style: {
      color: "var(--ink)"
    }
  }, email), " as we roll out access."), /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--line)",
      paddingTop: 22,
      display: "flex",
      flexDirection: "column",
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(SummaryRow, {
    label: "Accounts"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 6
    }
  }, accounts.map((a, i) => {
    const plat = PLATFORMS.find(p => p.id === a.platform);
    return /*#__PURE__*/React.createElement("span", {
      key: i,
      style: {
        fontSize: 14.5
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: "var(--mono)",
        fontSize: 12,
        color: "var(--ink-soft)",
        marginRight: 8
      }
    }, plat.label), a.url);
  }))), followers && /*#__PURE__*/React.createElement(SummaryRow, {
    label: "Followers"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5
    }
  }, followers)), category && /*#__PURE__*/React.createElement(SummaryRow, {
    label: "Category"
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 14.5
    }
  }, category)), uses.length > 0 && /*#__PURE__*/React.createElement(SummaryRow, {
    label: "Approved uses"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexWrap: "wrap",
      gap: 7
    }
  }, uses.map(u => /*#__PURE__*/React.createElement("span", {
    key: u,
    style: {
      fontSize: 13,
      fontWeight: 600,
      background: "var(--accent)",
      color: "var(--ink)",
      padding: "4px 11px",
      borderRadius: 100
    }
  }, u))))), /*#__PURE__*/React.createElement("button", {
    onClick: onReset,
    className: "btn btn-ghost",
    style: {
      marginTop: 28
    }
  }, "Submit another"));
}
function SummaryRow({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "110px 1fr",
      gap: 14,
      alignItems: "start"
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: "var(--mono)",
      fontSize: 11,
      letterSpacing: "0.1em",
      textTransform: "uppercase",
      color: "var(--ink-faint)",
      paddingTop: 2
    }
  }, label), children);
}

/* ───────────────────────── Footer ───────────────────────── */
function Footer() {
  return /*#__PURE__*/React.createElement("footer", {
    className: "biz-footer"
  }, /*#__PURE__*/React.createElement("div", {
    className: "biz-wrap",
    style: {
      textAlign: "center"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Mark, {
    size: 28,
    color: "var(--strong)"
  }), /*#__PURE__*/React.createElement("span", {
    className: "biz-word",
    style: {
      fontSize: 26
    }
  }, "Twingo"))), /*#__PURE__*/React.createElement("h2", {
    className: "biz-h2",
    style: {
      maxWidth: 640,
      margin: "0 auto 14px"
    }
  }, "Your likeness. Your consent. Your rules. ", /*#__PURE__*/React.createElement("span", {
    className: "grad"
  }, "Your revenue.")), /*#__PURE__*/React.createElement("p", {
    className: "biz-sub",
    style: {
      maxWidth: 540,
      margin: "0 auto 32px"
    }
  }, "Twingo is built for a future where creators are protected, respected, and paid."), /*#__PURE__*/React.createElement("div", {
    className: "biz-hero-cta",
    style: {
      justifyContent: "center",
      marginBottom: 44
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#apply",
    className: "biz-btn biz-btn-primary"
  }, "Join Now ", /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, "\u2192"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      gap: 20,
      flexWrap: "wrap",
      paddingTop: 24,
      borderTop: "1px solid var(--line)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "biz-footer-bottom",
    style: {
      border: "none",
      padding: 0
    }
  }, "\xA9 2026 Twingo"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: 24,
      fontSize: 14,
      color: "var(--muted)"
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#how"
  }, "How it works"), /*#__PURE__*/React.createElement("a", {
    href: "#why"
  }, "Why join"), /*#__PURE__*/React.createElement("a", {
    href: "#faq"
  }, "FAQ")))));
}

/* ───────────────────────── Early access ───────────────────────── */
function EarlyAccess() {
  return /*#__PURE__*/React.createElement("section", {
    id: "early",
    className: "biz-section"
  }, /*#__PURE__*/React.createElement("div", {
    className: "biz-wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "biz-final reveal"
  }, /*#__PURE__*/React.createElement("div", {
    className: "biz-final-glow"
  }), /*#__PURE__*/React.createElement("div", {
    className: "biz-eyebrow"
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), "Early access"), /*#__PURE__*/React.createElement("h2", {
    className: "biz-final-h"
  }, "Get in early. ", /*#__PURE__*/React.createElement("span", {
    className: "grad"
  }, "Get seen first.")), /*#__PURE__*/React.createElement("p", {
    className: "biz-final-sub"
  }, "The first creators on Twingo will get priority visibility in front of studios, brands, and production partners."), /*#__PURE__*/React.createElement("p", {
    className: "biz-final-sub",
    style: {
      marginTop: -14
    }
  }, "Claim your spot early and position yourself at the front of the next wave of the creator economy."), /*#__PURE__*/React.createElement("div", {
    className: "biz-hero-cta",
    style: {
      justifyContent: "center",
      marginBottom: 0
    }
  }, /*#__PURE__*/React.createElement("a", {
    href: "#apply",
    className: "biz-btn biz-btn-primary"
  }, "Join Now ", /*#__PURE__*/React.createElement("span", {
    className: "arr"
  }, "\u2192"))))));
}

/* ───────────────────────── App ───────────────────────── */
function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [audience, setAudience] = useState(() => {
    try {
      return localStorage.getItem("twingo-audience") || "talent";
    } catch (e) {
      return "talent";
    }
  });
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem("twingo-theme") || "dark";
    } catch (e) {
      return "dark";
    }
  });
  const setAud = m => {
    setAudience(m);
    try {
      localStorage.setItem("twingo-audience", m);
    } catch (e) {}
    window.scrollTo(0, 0);
  };
  const setTh = m => {
    setTheme(m);
    try {
      localStorage.setItem("twingo-theme", m);
    } catch (e) {}
  };
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
    return /*#__PURE__*/React.createElement(BusinessSite, {
      audience: audience,
      onAudience: setAud,
      theme: theme,
      onTheme: setTh,
      t: t,
      setTweak: setTweak
    });
  }
  return /*#__PURE__*/React.createElement("div", {
    className: "biz-root",
    "data-theme": theme
  }, /*#__PURE__*/React.createElement(Nav, {
    audience: audience,
    onAudience: setAud,
    theme: theme,
    onTheme: setTh
  }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(StatsStrip, null), /*#__PURE__*/React.createElement(OwnThem, null), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(EarlyAccess, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
    label: "Theme"
  }), /*#__PURE__*/React.createElement(TweakRadio, {
    label: "Mode",
    value: theme,
    options: ["dark", "light"],
    onChange: setTh
  }), /*#__PURE__*/React.createElement(TweakSection, {
    label: "Accent"
  }), /*#__PURE__*/React.createElement(TweakColor, {
    label: "Brand accent",
    value: t.bizAccent,
    options: ACCENTS,
    onChange: v => setTweak("bizAccent", v)
  })));
}
function hexToSoft(hex) {
  const h = hex.replace("#", "");
  const r = parseInt(h.slice(0, 2), 16),
    g = parseInt(h.slice(2, 4), 16),
    b = parseInt(h.slice(4, 6), 16);
  return `rgba(${r},${g},${b},0.35)`;
}

/* Shared with business.jsx */
Object.assign(window, {
  AudienceSwitch,
  ThemeToggle
});
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "uploads/app.jsx", error: String((e && e.message) || e) }); }

// uploads/business.jsx
try { (() => {
/* ═══════════════════════ Twingo — Business site ═══════════════════════ */
/* Dark, cinematic, marketplace feel. Rendered when audience === "business". */
(function () {
  const {
    useState,
    useEffect,
    useRef
  } = React;

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
    spark: "M12 3v6M12 15v6M3 12h6M15 12h6M6 6l3 3M15 15l3 3M18 6l-3 3M9 15l-3 3"
  };
  function BIcon({
    name,
    size = 22,
    sw = 1.7
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size,
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: sw,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("path", {
      d: BI[name]
    }));
  }
  function BizMark({
    size = 26,
    color = "#fff"
  }) {
    return /*#__PURE__*/React.createElement("svg", {
      width: size,
      height: size * 0.62,
      viewBox: "0 0 42 26",
      fill: "none",
      "aria-hidden": "true"
    }, /*#__PURE__*/React.createElement("circle", {
      cx: "14",
      cy: "13",
      r: "10.5",
      stroke: color,
      strokeWidth: "3.4"
    }), /*#__PURE__*/React.createElement("circle", {
      cx: "28",
      cy: "13",
      r: "10.5",
      stroke: color,
      strokeWidth: "3.4"
    }));
  }

  /* ── small building blocks ── */
  function Eyebrow({
    children
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "biz-eyebrow"
    }, children);
  }
  function GlassCard({
    children,
    style,
    hover = true,
    className = ""
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "biz-card" + (hover ? " biz-card-hover" : "") + (className ? " " + className : ""),
      style: style
    }, children);
  }
  function IconChip({
    name
  }) {
    return /*#__PURE__*/React.createElement("span", {
      className: "biz-icon-chip"
    }, /*#__PURE__*/React.createElement(BIcon, {
      name: name,
      size: 22
    }));
  }

  /* ═══════════════════════ Nav ═══════════════════════ */
  function BizNav({
    audience,
    onAudience,
    theme,
    onTheme
  }) {
    const [scrolled, setScrolled] = useState(false);
    const AudienceSwitch = window.AudienceSwitch;
    const ThemeToggle = window.ThemeToggle;
    useEffect(() => {
      const onScroll = () => setScrolled(window.scrollY > 16);
      window.addEventListener("scroll", onScroll);
      onScroll();
      return () => window.removeEventListener("scroll", onScroll);
    }, []);
    const links = [["Why Twingo", "#why"], ["Use Cases", "#cases"], ["How It Works", "#how"], ["Pricing", "#pricing"], ["FAQ", "#faq"]];
    return /*#__PURE__*/React.createElement("header", {
      className: "biz-nav" + (scrolled ? " scrolled" : "")
    }, /*#__PURE__*/React.createElement("div", {
      className: "biz-wrap biz-nav-inner"
    }, /*#__PURE__*/React.createElement("a", {
      href: "#top",
      style: {
        display: "inline-flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(BizMark, null), /*#__PURE__*/React.createElement("span", {
      className: "biz-word"
    }, "Twingo")), /*#__PURE__*/React.createElement("nav", {
      className: "biz-nav-links"
    }, links.map(([t, h]) => /*#__PURE__*/React.createElement("a", {
      key: h,
      href: h
    }, t))), /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 12
      }
    }, /*#__PURE__*/React.createElement(ThemeToggle, {
      theme: theme,
      onTheme: onTheme
    }), /*#__PURE__*/React.createElement("div", {
      className: "biz-nav-switch"
    }, /*#__PURE__*/React.createElement(AudienceSwitch, {
      mode: audience,
      onChange: onAudience,
      dark: theme === "dark"
    })), /*#__PURE__*/React.createElement("a", {
      href: "#demo",
      className: "biz-btn biz-btn-primary biz-btn-sm"
    }, "Book a Demo"))));
  }

  /* ═══════════════════════ Hero ═══════════════════════ */
  const HERO_FORMATS = null;
  function Hero() {
    return /*#__PURE__*/React.createElement("section", {
      id: "top",
      className: "biz-hero"
    }, /*#__PURE__*/React.createElement("div", {
      className: "biz-hero-glow"
    }), /*#__PURE__*/React.createElement("div", {
      className: "biz-wrap biz-hero-grid",
      style: {
        gridTemplateColumns: "1fr"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "biz-hero-copy reveal in"
    }, /*#__PURE__*/React.createElement(Eyebrow, null, /*#__PURE__*/React.createElement("span", {
      className: "dot"
    }), "The likeness marketplace for AI content"), /*#__PURE__*/React.createElement("h1", {
      className: "biz-h1"
    }, "License creator likenesses for ", /*#__PURE__*/React.createElement("span", {
      className: "grad"
    }, "AI-powered content.")), /*#__PURE__*/React.createElement("p", {
      className: "biz-lead"
    }, "Cast verified creators and influencers in commercials, micro-dramas, games, films, music videos, and branded stories \u2014 with clear approval and usage rights from day one."), /*#__PURE__*/React.createElement("div", {
      className: "biz-badges"
    }, ["Creator-approved", "Business-ready rights", "Built for AI production"].map(b => /*#__PURE__*/React.createElement("span", {
      key: b,
      className: "biz-badge"
    }, /*#__PURE__*/React.createElement(BIcon, {
      name: "check",
      size: 15,
      sw: 2
    }), b))), /*#__PURE__*/React.createElement("div", {
      className: "biz-hero-cta",
      style: {
        marginBottom: 0,
        marginTop: 32
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#demo",
      className: "biz-btn biz-btn-primary"
    }, "Book a Demo ", /*#__PURE__*/React.createElement("span", {
      className: "arr"
    }, /*#__PURE__*/React.createElement(BIcon, {
      name: "arrow",
      size: 17
    })))))));
  }

  /* ═══════════════════════ generic card grid ═══════════════════════ */
  function CardGrid({
    items,
    cols = 3
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "biz-grid",
      style: {
        "--cols": cols
      }
    }, items.map((it, i) => /*#__PURE__*/React.createElement(GlassCard, {
      key: i,
      className: "reveal",
      style: {
        transitionDelay: i % cols * 70 + "ms"
      }
    }, /*#__PURE__*/React.createElement(IconChip, {
      name: it.icon
    }), /*#__PURE__*/React.createElement("h3", {
      className: "biz-card-title"
    }, it.title), /*#__PURE__*/React.createElement("p", {
      className: "biz-card-body"
    }, it.body))));
  }
  function SectionHead({
    eyebrow,
    title,
    text,
    center
  }) {
    return /*#__PURE__*/React.createElement("div", {
      className: "biz-sechead reveal" + (center ? " center" : "")
    }, eyebrow && /*#__PURE__*/React.createElement(Eyebrow, null, eyebrow), /*#__PURE__*/React.createElement("h2", {
      className: "biz-h2"
    }, title), text && /*#__PURE__*/React.createElement("p", {
      className: "biz-sub"
    }, text));
  }

  /* ═══════════════════════ Section: Why ═══════════════════════ */
  const WHY = [{
    icon: "zap",
    title: "Create more, faster",
    body: "Launch ads, trailers, product stories, short videos, and AI episodes without booking a full shoot for every idea."
  }, {
    icon: "user",
    title: "Use real creator identity",
    body: "Work with creators and influencers who bring personality, audience, style, and commercial value to your content."
  }, {
    icon: "rights",
    title: "Clear rights from day one",
    body: "Define usage, platforms, territory, duration, categories, and content type before production begins."
  }, {
    icon: "layers",
    title: "Built for production",
    body: "Perfect for brands, studios, agencies, game companies, education platforms, and entertainment teams."
  }, {
    icon: "trend",
    title: "Scale winning campaigns",
    body: "When a creator performs well, extend the license, produce more assets, and build a long-term digital ambassador."
  }, {
    icon: "risk",
    title: "Reduce AI likeness risk",
    body: "Avoid scraped faces, unclear rights, and risky deepfake workflows. Work with creators who approve the project."
  }];
  function Why() {
    return /*#__PURE__*/React.createElement("section", {
      id: "why",
      className: "biz-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "biz-wrap"
    }, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "Why businesses use Twingo",
      title: "The new way to cast talent for AI content.",
      text: "Your team needs more content, more speed, more languages, and more creative variations. Twingo connects you with creator-approved likenesses so you can produce faster \u2014 without unclear AI rights."
    }), /*#__PURE__*/React.createElement(CardGrid, {
      items: WHY,
      cols: 3
    })));
  }

  /* ═══════════════════════ Section: Use cases ═══════════════════════ */
  const CASES = [{
    icon: "ads",
    title: "Commercials & social ads",
    body: "Create performance ads, product videos, UGC-style creatives, and localized campaign variations."
  }, {
    icon: "drama",
    title: "Micro-dramas & vertical series",
    body: "Cast creators as recurring characters in romance, comedy, thriller, education, or branded series."
  }, {
    icon: "game",
    title: "Games & interactive stories",
    body: "Use creator likenesses for characters, NPCs, trailers, virtual hosts, and branded game content."
  }, {
    icon: "film",
    title: "Film, trailers & pitch materials",
    body: "Create concept scenes, trailers, pre-visualization, AI-assisted sequences, and full AI-native productions."
  }, {
    icon: "cap",
    title: "Education & edutainment",
    body: "Build engaging hosts, teachers, explainers, narrators, and story-driven learning experiences."
  }, {
    icon: "music",
    title: "Music videos & entertainment",
    body: "Produce AI-generated music videos, visual albums, digital performances, and fan-driven content."
  }];
  function UseCases() {
    return /*#__PURE__*/React.createElement("section", {
      id: "cases",
      className: "biz-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "biz-wrap"
    }, /*#__PURE__*/React.createElement(SectionHead, {
      eyebrow: "Use cases",
      title: "From influencer marketing to influencer production.",
      text: "Traditional influencer marketing is built around posts. Twingo is built around production \u2014 license creator likenesses to create stories, characters, ads, episodes, and digital experiences."
    }), /*#__PURE__*/React.createElement(CardGrid, {
      items: CASES,
      cols: 3
    }), /*#__PURE__*/React.createElement("div", {
      className: "reveal",
      style: {
        textAlign: "center",
        marginTop: 44
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#demo",
      className: "biz-btn biz-btn-primary"
    }, "Start a Project ", /*#__PURE__*/React.createElement("span", {
      className: "arr"
    }, /*#__PURE__*/React.createElement(BIcon, {
      name: "arrow",
      size: 17
    }))))));
  }

  /* ═══════════════════════ Section: How it works ═══════════════════════ */
  const STEPS = [{
    icon: "search",
    title: "Search creator likenesses",
    body: "Browse by look, style, audience, niche, language, location, and approved usage types."
  }, {
    icon: "check",
    title: "Request creator approval",
    body: "Send your project type, usage, platform, duration, territory, category, and creative direction."
  }, {
    icon: "rights",
    title: "License the rights",
    body: "Receive clear commercial usage rights for the approved project, campaign, or production."
  }, {
    icon: "create",
    title: "Produce your content",
    body: "Create ads, episodes, trailers, games, music videos, education clips, or branded stories."
  }, {
    icon: "scale",
    title: "Scale what works",
    body: "Extend licenses, build recurring characters, or create long-term digital ambassador partnerships."
  }];
  function HowItWorks() {
    return /*#__PURE__*/React.createElement("section", {
      id: "how",
      className: "biz-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "biz-wrap"
    }, /*#__PURE__*/React.createElement(SectionHead, {
      center: true,
      eyebrow: "How it works",
      title: "Search. Approve. License. Create.",
      text: "Twingo makes creator likeness licensing simple for modern creative teams \u2014 get the right face, the right approval, and the right rights before you produce."
    }), /*#__PURE__*/React.createElement("div", {
      className: "biz-steps"
    }, STEPS.map((s, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "biz-step reveal",
      style: {
        transitionDelay: i * 70 + "ms"
      }
    }, /*#__PURE__*/React.createElement("div", {
      className: "biz-step-num"
    }, String(i + 1).padStart(2, "0")), /*#__PURE__*/React.createElement(IconChip, {
      name: s.icon
    }), /*#__PURE__*/React.createElement("h3", {
      className: "biz-card-title"
    }, s.title), /*#__PURE__*/React.createElement("p", {
      className: "biz-card-body"
    }, s.body))))));
  }

  /* ═══════════════════════ Section: Built for every team ═══════════════════════ */
  const TEAMS = [{
    icon: "brand",
    title: "For brands",
    body: "Turn creator likenesses into AI-powered ambassadors for campaigns, product launches, ads, and branded stories."
  }, {
    icon: "studio",
    title: "For studios",
    body: "Cast creator likenesses for AI films, micro-dramas, trailers, concept tests, and serialized entertainment."
  }, {
    icon: "agency",
    title: "For agencies",
    body: "Pitch faster, produce variations, localize content, and offer clients a new creator-powered production layer."
  }, {
    icon: "game",
    title: "For game companies",
    body: "License creators for characters, trailers, digital hosts, branded game moments, and interactive storytelling."
  }, {
    icon: "cap",
    title: "For education platforms",
    body: "Create trusted explainers, hosts, narrators, and story-led courses with approved creator identity."
  }, {
    icon: "music",
    title: "For music & entertainment",
    body: "Produce digital performances, AI music videos, fan experiences, and creator-led entertainment assets."
  }];
  function Teams() {
    return /*#__PURE__*/React.createElement("section", {
      className: "biz-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "biz-wrap"
    }, /*#__PURE__*/React.createElement(SectionHead, {
      center: true,
      eyebrow: "Built for every creative team",
      title: "One marketplace. Many production needs."
    }), /*#__PURE__*/React.createElement(CardGrid, {
      items: TEAMS,
      cols: 3
    })));
  }

  /* ═══════════════════════ Section: The difference ═══════════════════════ */
  const DIFF = [{
    icon: "user",
    title: "Creator-approved",
    body: "Creators choose which projects, brands, categories, and content types they approve."
  }, {
    icon: "rights",
    title: "Business-ready",
    body: "Companies get clear commercial usage rights before production starts."
  }, {
    icon: "scale",
    title: "Built for scale",
    body: "Use one creator in one campaign, or build a full library of licensed digital talent for ongoing production."
  }, {
    icon: "layers",
    title: "Multi-industry",
    body: "Works across film, micro-drama, commercials, education, music videos, games, social, and branded entertainment."
  }];
  function Difference() {
    return /*#__PURE__*/React.createElement("section", {
      className: "biz-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "biz-wrap"
    }, /*#__PURE__*/React.createElement(SectionHead, {
      center: true,
      eyebrow: "The Twingo difference",
      title: "Creator-approved. Business-ready. Built for scale."
    }), /*#__PURE__*/React.createElement(CardGrid, {
      items: DIFF,
      cols: 4
    })));
  }

  /* ═══════════════════════ Section: Pricing ═══════════════════════ */
  const PLANS = [{
    name: "Project License",
    desc: "For one campaign, video, micro-drama, commercial, or creative test.",
    feats: ["Creator search", "Project-based approval", "Defined usage rights", "Commercial license", "Basic support"],
    cta: "Start a Project",
    featured: false
  }, {
    name: "Scale Plan",
    desc: "For brands, agencies, and studios producing multiple campaigns or content formats.",
    feats: ["Priority creator access", "Multi-project licensing", "Volume pricing", "Dedicated account support", "Faster approval workflow", "Extended usage options"],
    cta: "Talk to Sales",
    featured: true
  }, {
    name: "Enterprise",
    desc: "For platforms, studios, game companies, music labels, and global brands.",
    feats: ["Custom creator pools", "Exclusive or category-limited rights", "API access", "Custom legal terms", "Dedicated success manager", "Strategic creator sourcing"],
    cta: "Book a Demo",
    featured: false
  }];
  function Pricing() {
    return /*#__PURE__*/React.createElement("section", {
      id: "pricing",
      className: "biz-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "biz-wrap"
    }, /*#__PURE__*/React.createElement(SectionHead, {
      center: true,
      eyebrow: "Pricing",
      title: "Start with one project. Scale to a creator library."
    }), /*#__PURE__*/React.createElement("div", {
      className: "biz-pricing"
    }, PLANS.map((p, i) => /*#__PURE__*/React.createElement("div", {
      key: i,
      className: "biz-plan reveal" + (p.featured ? " featured" : ""),
      style: {
        transitionDelay: i * 70 + "ms"
      }
    }, p.featured && /*#__PURE__*/React.createElement("span", {
      className: "biz-plan-tag"
    }, "MOST POPULAR"), /*#__PURE__*/React.createElement("h3", {
      className: "biz-plan-name"
    }, p.name), /*#__PURE__*/React.createElement("p", {
      className: "biz-plan-desc"
    }, p.desc), /*#__PURE__*/React.createElement("ul", {
      className: "biz-plan-feats"
    }, p.feats.map(f => /*#__PURE__*/React.createElement("li", {
      key: f
    }, /*#__PURE__*/React.createElement(BIcon, {
      name: "check",
      size: 15,
      sw: 2.4
    }), f))), /*#__PURE__*/React.createElement("a", {
      href: "#demo",
      className: "biz-btn " + (p.featured ? "biz-btn-primary" : "biz-btn-ghost") + " biz-btn-block"
    }, p.cta))))));
  }

  /* ═══════════════════════ Section: FAQ ═══════════════════════ */
  const FAQS = [{
    q: "What is a likeness marketplace?",
    a: "A likeness marketplace is a platform where businesses can license the approved image, face, voice, style, or digital identity of creators for AI-powered content."
  }, {
    q: "Can we use a creator likeness for ads?",
    a: "Yes, if the creator approves the project and the license includes commercial advertising rights."
  }, {
    q: "Can we use creators in micro-dramas or films?",
    a: "Yes. Twingo is designed for AI-powered entertainment, including micro-dramas, films, series, trailers, and short-form storytelling."
  }, {
    q: "Can creators reject a project?",
    a: "Yes. Creators stay in control. They can approve or reject projects based on brand, category, content type, territory, and usage."
  }, {
    q: "Can we request exclusivity?",
    a: "Yes. Businesses can request exclusivity by category, territory, campaign, or time period, depending on the creator and deal terms."
  }, {
    q: "Can we use the same creator across many videos?",
    a: "Yes. You can license a creator likeness for one project, multiple assets, or an ongoing campaign, depending on the agreement."
  }, {
    q: "Is Twingo only for influencers?",
    a: "No. Twingo can include influencers, actors, models, creators, hosts, educators, performers, and digital-first talent."
  }];
  function Faq() {
    const [open, setOpen] = useState(0);
    return /*#__PURE__*/React.createElement("section", {
      id: "faq",
      className: "biz-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "biz-wrap",
      style: {
        maxWidth: 860
      }
    }, /*#__PURE__*/React.createElement(SectionHead, {
      center: true,
      eyebrow: "FAQ",
      title: "Questions, answered."
    }), /*#__PURE__*/React.createElement("div", {
      className: "biz-faq reveal"
    }, FAQS.map((f, i) => {
      const isOpen = open === i;
      return /*#__PURE__*/React.createElement("div", {
        key: i,
        className: "biz-faq-item" + (isOpen ? " open" : "")
      }, /*#__PURE__*/React.createElement("button", {
        className: "biz-faq-q",
        "aria-expanded": isOpen,
        onClick: () => setOpen(isOpen ? -1 : i)
      }, /*#__PURE__*/React.createElement("span", null, f.q), /*#__PURE__*/React.createElement("span", {
        className: "biz-faq-plus"
      }, /*#__PURE__*/React.createElement(BIcon, {
        name: "arrow",
        size: 16,
        sw: 2
      }))), /*#__PURE__*/React.createElement("div", {
        className: "biz-faq-a-wrap"
      }, /*#__PURE__*/React.createElement("div", {
        style: {
          overflow: "hidden"
        }
      }, /*#__PURE__*/React.createElement("p", {
        className: "biz-faq-a"
      }, f.a))));
    }))));
  }

  /* ═══════════════════════ Final CTA + Footer ═══════════════════════ */
  function FinalCTA() {
    return /*#__PURE__*/React.createElement("section", {
      id: "demo",
      className: "biz-section"
    }, /*#__PURE__*/React.createElement("div", {
      className: "biz-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "biz-final reveal"
    }, /*#__PURE__*/React.createElement("div", {
      className: "biz-final-glow"
    }), /*#__PURE__*/React.createElement(Eyebrow, null, "Get started"), /*#__PURE__*/React.createElement("h2", {
      className: "biz-final-h"
    }, "The next generation of content needs ", /*#__PURE__*/React.createElement("span", {
      className: "grad"
    }, "creator-approved likeness.")), /*#__PURE__*/React.createElement("p", {
      className: "biz-final-sub"
    }, "Twingo helps your business access the faces of the creator economy \u2014 approved, licensed, and ready for AI-powered production."), /*#__PURE__*/React.createElement("div", {
      className: "biz-hero-cta",
      style: {
        justifyContent: "center"
      }
    }, /*#__PURE__*/React.createElement("a", {
      href: "#demo",
      className: "biz-btn biz-btn-primary"
    }, "Book a Demo ", /*#__PURE__*/React.createElement("span", {
      className: "arr"
    }, /*#__PURE__*/React.createElement(BIcon, {
      name: "arrow",
      size: 17
    }))), /*#__PURE__*/React.createElement("a", {
      href: "#demo",
      className: "biz-btn biz-btn-ghost"
    }, "Start a Project")))));
  }
  function Footer() {
    return /*#__PURE__*/React.createElement("footer", {
      className: "biz-footer"
    }, /*#__PURE__*/React.createElement("div", {
      className: "biz-wrap"
    }, /*#__PURE__*/React.createElement("div", {
      className: "biz-footer-top"
    }, /*#__PURE__*/React.createElement("div", {
      style: {
        display: "flex",
        alignItems: "center",
        gap: 10
      }
    }, /*#__PURE__*/React.createElement(BizMark, null), /*#__PURE__*/React.createElement("span", {
      className: "biz-word"
    }, "Twingo")), /*#__PURE__*/React.createElement("p", {
      className: "biz-footer-tag"
    }, "Likeness marketplace for AI-powered content.")), /*#__PURE__*/React.createElement("div", {
      className: "biz-footer-bottom"
    }, "\xA9 2026 Twingo. All rights reserved.")));
  }

  /* ═══════════════════════ Root ═══════════════════════ */
  function BusinessSite({
    audience,
    onAudience,
    theme,
    onTheme,
    t,
    setTweak
  }) {
    const BIZ_ACCENTS = ["#7b5bff", "#4f7bff", "#ff5ba6", "#12c2c2", "#ff8a3d"];
    return /*#__PURE__*/React.createElement("div", {
      className: "biz-root",
      "data-theme": theme
    }, /*#__PURE__*/React.createElement(BizNav, {
      audience: audience,
      onAudience: onAudience,
      theme: theme,
      onTheme: onTheme
    }), /*#__PURE__*/React.createElement(Hero, null), /*#__PURE__*/React.createElement(Why, null), /*#__PURE__*/React.createElement(UseCases, null), /*#__PURE__*/React.createElement(HowItWorks, null), /*#__PURE__*/React.createElement(Teams, null), /*#__PURE__*/React.createElement(Difference, null), /*#__PURE__*/React.createElement(Pricing, null), /*#__PURE__*/React.createElement(Faq, null), /*#__PURE__*/React.createElement(FinalCTA, null), /*#__PURE__*/React.createElement(Footer, null), /*#__PURE__*/React.createElement(TweaksPanel, null, /*#__PURE__*/React.createElement(TweakSection, {
      label: "Theme"
    }), /*#__PURE__*/React.createElement(TweakRadio, {
      label: "Mode",
      value: theme,
      options: ["dark", "light"],
      onChange: v => onTheme(v)
    }), /*#__PURE__*/React.createElement(TweakSection, {
      label: "Accent"
    }), /*#__PURE__*/React.createElement(TweakColor, {
      label: "Brand accent",
      value: t && t.bizAccent || "#7b5bff",
      options: BIZ_ACCENTS,
      onChange: v => setTweak("bizAccent", v)
    })));
  }
  window.BusinessSite = BusinessSite;
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "uploads/business.jsx", error: String((e && e.message) || e) }); }

// uploads/image-slot.js
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)
/* BEGIN USAGE */
/**
 * <image-slot> — user-fillable image placeholder.
 *
 * Drop this into a deck, mockup, or page wherever you want the user to
 * supply an image. You control the slot's shape and size; the user fills it
 * by dragging an image file onto it (or clicking to browse). The dropped
 * image persists across reloads via a .image-slots.state.json sidecar —
 * same read-via-fetch / write-via-window.omelette pattern as
 * design_canvas.jsx, so the filled slot shows on share links, downloaded
 * zips, and PPTX export. Outside the omelette runtime the slot is read-only.
 *
 * The host bridge only allows sidecar writes at the project root, so the
 * HTML that uses this component is assumed to live at the project root too
 * (same constraint as design_canvas.jsx).
 *
 * Attributes:
 *   id           Persistence key. REQUIRED for the drop to survive reload —
 *                every slot on the page needs a distinct id.
 *   shape        'rect' | 'rounded' | 'circle' | 'pill'   (default 'rounded')
 *                'circle' applies 50% border-radius; on a non-square slot
 *                that's an ellipse — set equal width and height for a true
 *                circle.
 *   radius       Corner radius in px for 'rounded'.       (default 12)
 *   mask         Any CSS clip-path value. Overrides `shape` — use this for
 *                hexagons, blobs, arbitrary polygons.
 *   fit          object-fit: cover | contain | fill.       (default 'cover')
 *                With cover (the default) double-clicking the filled slot
 *                enters a reframe mode: the whole image spills past the mask
 *                (translucent outside, opaque inside), drag to reposition,
 *                corner-drag to scale. The crop persists alongside the image
 *                in the sidecar. contain/fill stay static.
 *   position     object-position for fit=contain|fill.     (default '50% 50%')
 *   placeholder  Empty-state caption.                      (default 'Drop an image')
 *   src          Optional initial/fallback image URL. A user drop overrides
 *                it; clearing the drop reveals src again.
 *
 * Size and layout come from ordinary CSS on the element — width/height
 * inline or from a parent grid — so it composes with any layout.
 *
 * Usage:
 *   <image-slot id="hero"   style="width:800px;height:450px" shape="rounded" radius="20"
 *               placeholder="Drop a hero image"></image-slot>
 *   <image-slot id="avatar" style="width:120px;height:120px" shape="circle"></image-slot>
 *   <image-slot id="kite"   style="width:300px;height:300px"
 *               mask="polygon(50% 0, 100% 50%, 50% 100%, 0 50%)"></image-slot>
 */
/* END USAGE */

(() => {
  const STATE_FILE = '.image-slots.state.json';
  // 2× a ~600px slot in a 1920-wide deck — retina-sharp without making the
  // sidecar enormous. A 1200px WebP at q=0.85 is ~150-300KB.
  const MAX_DIM = 1200;
  // Raster formats only. SVG is excluded (can carry script; createImageBitmap
  // on SVG blobs is inconsistent). GIF is excluded because the canvas
  // re-encode keeps only the first frame, so an animated GIF would silently
  // go still — better to reject than surprise.
  const ACCEPT = ['image/png', 'image/jpeg', 'image/webp', 'image/avif'];

  // ── Shared sidecar store ────────────────────────────────────────────────
  // One fetch + immediate write-on-change for every <image-slot> on the
  // page. Reads via fetch() so viewing works anywhere the HTML and sidecar
  // are served together; writes go through window.omelette.writeFile, which
  // the host allowlists to *.state.json basenames only.
  const subs = new Set();
  let slots = {};
  // ids explicitly cleared before the sidecar fetch resolved — otherwise
  // the merge below can't tell "never set" from "just deleted" and would
  // resurrect the sidecar's stale value.
  const tombstones = new Set();
  let loaded = false;
  let loadP = null;
  function load() {
    if (loadP) return loadP;
    loadP = fetch(STATE_FILE).then(r => r.ok ? r.json() : null).then(j => {
      // Merge: sidecar loses to any in-memory change that raced ahead of
      // the fetch (drop or clear) so neither is clobbered by hydration.
      if (j && typeof j === 'object') {
        const merged = Object.assign({}, j, slots);
        // A framing-only write that raced ahead of hydration must not
        // drop a user image that's only on disk — inherit u from the
        // sidecar for any in-memory entry that lacks one.
        for (const k in slots) {
          if (merged[k] && !merged[k].u && j[k]) {
            merged[k].u = typeof j[k] === 'string' ? j[k] : j[k].u;
          }
        }
        for (const id of tombstones) delete merged[id];
        slots = merged;
      }
      tombstones.clear();
    }).catch(() => {}).then(() => {
      loaded = true;
      subs.forEach(fn => fn());
    });
    return loadP;
  }

  // Serialize writes so two near-simultaneous drops on different slots
  // can't reorder at the backend and leave the sidecar with only the
  // first. A save requested mid-flight just marks dirty and re-fires on
  // completion with the then-current slots.
  let saving = false;
  let saveDirty = false;
  function save() {
    if (saving) {
      saveDirty = true;
      return;
    }
    const w = window.omelette && window.omelette.writeFile;
    if (!w) return;
    saving = true;
    Promise.resolve(w(STATE_FILE, JSON.stringify(slots))).catch(() => {}).then(() => {
      saving = false;
      if (saveDirty) {
        saveDirty = false;
        save();
      }
    });
  }
  const S_MAX = 5;
  const clampS = s => Math.max(1, Math.min(S_MAX, s));

  // Normalize a stored slot value. Pre-reframe sidecars stored a bare
  // data-URL string; newer ones store {u, s, x, y}. Either shape is valid.
  function getSlot(id) {
    const v = slots[id];
    if (!v) return null;
    return typeof v === 'string' ? {
      u: v,
      s: 1,
      x: 0,
      y: 0
    } : v;
  }
  function setSlot(id, val) {
    if (!id) return;
    if (val) {
      slots[id] = val;
      tombstones.delete(id);
    } else {
      delete slots[id];
      if (!loaded) tombstones.add(id);
    }
    subs.forEach(fn => fn());
    // A drop is rare + high-value — write immediately so nav-away can't lose
    // it. Gate on the initial read so we don't overwrite a sidecar we haven't
    // merged yet; the merge in load() keeps this change once the read lands.
    if (loaded) save();else load().then(save);
  }

  // ── Image downscale ─────────────────────────────────────────────────────
  // Encode through a canvas so the sidecar carries resized bytes, not the
  // raw upload. Longest side is capped at 2× the slot's rendered width
  // (retina) and at MAX_DIM. WebP keeps alpha and is ~10× smaller than PNG
  // for photos, so there's no need for per-image format picking.
  async function toDataUrl(file, targetW) {
    const bitmap = await createImageBitmap(file);
    try {
      const cap = Math.min(MAX_DIM, Math.max(1, Math.round(targetW * 2)) || MAX_DIM);
      const scale = Math.min(1, cap / Math.max(bitmap.width, bitmap.height));
      const w = Math.max(1, Math.round(bitmap.width * scale));
      const h = Math.max(1, Math.round(bitmap.height * scale));
      const canvas = document.createElement('canvas');
      canvas.width = w;
      canvas.height = h;
      canvas.getContext('2d').drawImage(bitmap, 0, 0, w, h);
      return canvas.toDataURL('image/webp', 0.85);
    } finally {
      bitmap.close && bitmap.close();
    }
  }

  // ── Custom element ──────────────────────────────────────────────────────
  const stylesheet = ':host{display:inline-block;position:relative;vertical-align:top;' + '  font:13px/1.3 system-ui,-apple-system,sans-serif;color:rgba(0,0,0,.55);width:240px;height:160px}' + '.frame{position:absolute;inset:0;overflow:hidden;background:rgba(0,0,0,.04)}' +
  // .frame img (clipped) and .spill (unclipped ghost + handles) share the
  // same left/top/width/height in frame-%, computed by _applyView(), so the
  // inside-mask crop and the outside-mask spill stay pixel-aligned.
  '.frame img{position:absolute;max-width:none;transform:translate(-50%,-50%);' + '  -webkit-user-drag:none;user-select:none;touch-action:none}' +
  // Reframe mode (double-click): the full image spills past the mask. The
  // spill layer is sized to the IMAGE bounds so its corners are where the
  // resize handles belong. The ghost <img> inside is translucent; the real
  // clipped <img> underneath shows the opaque in-mask crop.
  '.spill{position:absolute;transform:translate(-50%,-50%);display:none;z-index:1;' + '  cursor:grab;touch-action:none}' + ':host([data-panning]) .spill{cursor:grabbing}' + '.spill .ghost{position:absolute;inset:0;width:100%;height:100%;opacity:.35;' + '  pointer-events:none;-webkit-user-drag:none;user-select:none;' + '  box-shadow:0 0 0 1px rgba(0,0,0,.2),0 12px 32px rgba(0,0,0,.2)}' + '.spill .handle{position:absolute;width:12px;height:12px;border-radius:50%;' + '  background:#fff;box-shadow:0 0 0 1.5px #c96442,0 1px 3px rgba(0,0,0,.3);' + '  transform:translate(-50%,-50%)}' + '.spill .handle[data-c=nw]{left:0;top:0;cursor:nwse-resize}' + '.spill .handle[data-c=ne]{left:100%;top:0;cursor:nesw-resize}' + '.spill .handle[data-c=sw]{left:0;top:100%;cursor:nesw-resize}' + '.spill .handle[data-c=se]{left:100%;top:100%;cursor:nwse-resize}' + ':host([data-reframe]){z-index:10}' + ':host([data-reframe]) .spill{display:block}' + ':host([data-reframe]) .frame{box-shadow:0 0 0 2px #c96442}' + '.empty{position:absolute;inset:0;display:flex;flex-direction:column;align-items:center;' + '  justify-content:center;gap:6px;text-align:center;padding:12px;box-sizing:border-box;' + '  cursor:pointer;user-select:none}' + '.empty svg{opacity:.45}' + '.empty .cap{max-width:90%;font-weight:500;letter-spacing:.01em}' + '.empty .sub{font-size:11px}' + '.empty .sub u{text-underline-offset:2px;text-decoration-color:rgba(0,0,0,.25)}' + '.empty:hover .sub u{color:rgba(0,0,0,.75);text-decoration-color:currentColor}' + ':host([data-over]) .frame{outline:2px solid #c96442;outline-offset:-2px;' + '  background:rgba(201,100,66,.10)}' + '.ring{position:absolute;inset:0;pointer-events:none;border:1.5px dashed rgba(0,0,0,.25);' + '  transition:border-color .12s}' + ':host([data-over]) .ring{border-color:#c96442}' + ':host([data-filled]) .ring{display:none}' +
  // Controls sit BELOW the mask (top:100%), absolutely positioned so the
  // author-declared slot height is unaffected. The gap is padding, not a
  // top offset, so the hover target stays contiguous with the frame.
  '.ctl{position:absolute;top:100%;left:50%;transform:translateX(-50%);padding-top:8px;' + '  display:flex;gap:6px;opacity:0;pointer-events:none;transition:opacity .12s;z-index:2;' + '  white-space:nowrap}' + ':host([data-filled][data-editable]:hover) .ctl,:host([data-reframe]) .ctl' + '  {opacity:1;pointer-events:auto}' + '.ctl button{appearance:none;border:0;border-radius:6px;padding:5px 10px;cursor:pointer;' + '  background:rgba(0,0,0,.65);color:#fff;font:11px/1 system-ui,-apple-system,sans-serif;' + '  backdrop-filter:blur(6px)}' + '.ctl button:hover{background:rgba(0,0,0,.8)}' + '.err{position:absolute;left:8px;bottom:8px;right:8px;color:#b3261e;font-size:11px;' + '  background:rgba(255,255,255,.85);padding:4px 6px;border-radius:5px;pointer-events:none}';
  const icon = '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' + 'stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round">' + '<rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/>' + '<path d="m21 15-5-5L5 21"/></svg>';
  class ImageSlot extends HTMLElement {
    static get observedAttributes() {
      return ['shape', 'radius', 'mask', 'fit', 'position', 'placeholder', 'src', 'id'];
    }
    constructor() {
      super();
      const root = this.attachShadow({
        mode: 'open'
      });
      // .spill and .ctl sit OUTSIDE .frame so overflow:hidden + border-radius
      // on the frame (circle, pill, rounded) can't clip them.
      root.innerHTML = '<style>' + stylesheet + '</style>' + '<div class="frame" part="frame">' + '  <img part="image" alt="" draggable="false" style="display:none">' + '  <div class="empty" part="empty">' + icon + '    <div class="cap"></div>' + '    <div class="sub">or <u>browse files</u></div></div>' + '  <div class="ring" part="ring"></div>' + '</div>' + '<div class="spill">' + '  <img class="ghost" alt="" draggable="false">' + '  <div class="handle" data-c="nw"></div><div class="handle" data-c="ne"></div>' + '  <div class="handle" data-c="sw"></div><div class="handle" data-c="se"></div>' + '</div>' + '<div class="ctl"><button data-act="replace" title="Replace image">Replace</button>' + '  <button data-act="clear" title="Remove image">Remove</button></div>' + '<input type="file" accept="' + ACCEPT.join(',') + '" hidden>';
      this._frame = root.querySelector('.frame');
      this._ring = root.querySelector('.ring');
      this._img = root.querySelector('.frame img');
      this._empty = root.querySelector('.empty');
      this._cap = root.querySelector('.cap');
      this._sub = root.querySelector('.sub');
      this._spill = root.querySelector('.spill');
      this._ghost = root.querySelector('.ghost');
      this._err = null;
      this._input = root.querySelector('input');
      this._depth = 0;
      this._gen = 0;
      this._view = {
        s: 1,
        x: 0,
        y: 0
      };
      this._subFn = () => this._render();
      // Shadow-DOM listeners live with the shadow DOM — bound once here so
      // disconnect/reconnect (e.g. React remount) doesn't stack handlers.
      this._empty.addEventListener('click', () => this._input.click());
      root.addEventListener('click', e => {
        const act = e.target && e.target.getAttribute && e.target.getAttribute('data-act');
        if (act === 'replace') {
          this._exitReframe(true);
          this._input.click();
        }
        if (act === 'clear') {
          this._exitReframe(false);
          this._gen++;
          this._local = null;
          if (this.id) setSlot(this.id, null);else this._render();
        }
      });
      this._input.addEventListener('change', () => {
        const f = this._input.files && this._input.files[0];
        if (f) this._ingest(f);
        this._input.value = '';
      });
      // naturalWidth/Height aren't known until load — re-apply so the cover
      // baseline is computed from real dimensions, not the 100%×100% fallback.
      this._img.addEventListener('load', () => this._applyView());
      // Gated on editable + fit=cover so share links and contain/fill slots
      // stay static.
      this.addEventListener('dblclick', e => {
        if (!this.hasAttribute('data-editable') || !this._reframes()) return;
        e.preventDefault();
        if (this.hasAttribute('data-reframe')) this._exitReframe(true);else this._enterReframe();
      });
      // Pan + resize both originate on the spill layer. A handle pointerdown
      // drives an aspect-locked resize anchored at the opposite corner; any
      // other pointerdown on the spill pans. Offsets are frame-% so a
      // reframed slot survives responsive resize / PPTX export.
      this._spill.addEventListener('pointerdown', e => {
        if (e.button !== 0 || !this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        e.stopPropagation();
        this._spill.setPointerCapture(e.pointerId);
        const rect = this.getBoundingClientRect();
        const fw = rect.width || 1,
          fh = rect.height || 1;
        const corner = e.target.getAttribute && e.target.getAttribute('data-c');
        let move;
        if (corner) {
          // Resize about the OPPOSITE corner. Viewport-px throughout (rect
          // fw/fh, not clientWidth) so the math survives a transform:scale()
          // ancestor — deck_stage renders slides scaled-to-fit.
          const iw = this._img.naturalWidth || 1,
            ih = this._img.naturalHeight || 1;
          const base = Math.max(fw / iw, fh / ih);
          const sx = corner.includes('e') ? 1 : -1;
          const sy = corner.includes('s') ? 1 : -1;
          const s0 = this._view.s;
          const w0 = iw * base * s0,
            h0 = ih * base * s0;
          const cx0 = (50 + this._view.x) / 100 * fw;
          const cy0 = (50 + this._view.y) / 100 * fh;
          const ox = cx0 - sx * w0 / 2,
            oy = cy0 - sy * h0 / 2;
          const diag0 = Math.hypot(w0, h0);
          const ux = sx * w0 / diag0,
            uy = sy * h0 / diag0;
          move = ev => {
            const proj = (ev.clientX - rect.left - ox) * ux + (ev.clientY - rect.top - oy) * uy;
            const s = clampS(s0 * proj / diag0);
            const d = diag0 * s / s0;
            this._view.s = s;
            this._view.x = (ox + ux * d / 2) / fw * 100 - 50;
            this._view.y = (oy + uy * d / 2) / fh * 100 - 50;
            this._clampView();
            this._applyView();
          };
        } else {
          this.setAttribute('data-panning', '');
          const start = {
            px: e.clientX,
            py: e.clientY,
            x: this._view.x,
            y: this._view.y
          };
          move = ev => {
            this._view.x = start.x + (ev.clientX - start.px) / fw * 100;
            this._view.y = start.y + (ev.clientY - start.py) / fh * 100;
            this._clampView();
            this._applyView();
          };
        }
        const up = () => {
          try {
            this._spill.releasePointerCapture(e.pointerId);
          } catch {}
          this._spill.removeEventListener('pointermove', move);
          this._spill.removeEventListener('pointerup', up);
          this._spill.removeEventListener('pointercancel', up);
          this.removeAttribute('data-panning');
          this._dragUp = null;
        };
        // Stashed so _exitReframe (Escape / outside-click mid-drag) can
        // tear the capture + listeners down synchronously.
        this._dragUp = up;
        this._spill.addEventListener('pointermove', move);
        this._spill.addEventListener('pointerup', up);
        this._spill.addEventListener('pointercancel', up);
      });
      // Wheel zoom stays available inside reframe mode as a trackpad nicety —
      // zooms toward the cursor (offset' = cursor·(1-k) + offset·k).
      this.addEventListener('wheel', e => {
        if (!this.hasAttribute('data-reframe')) return;
        e.preventDefault();
        const r = this.getBoundingClientRect();
        const cx = (e.clientX - r.left) / r.width * 100 - 50;
        const cy = (e.clientY - r.top) / r.height * 100 - 50;
        const prev = this._view.s;
        const next = clampS(prev * Math.pow(1.0015, -e.deltaY));
        if (next === prev) return;
        const k = next / prev;
        this._view.s = next;
        this._view.x = cx * (1 - k) + this._view.x * k;
        this._view.y = cy * (1 - k) + this._view.y * k;
        this._clampView();
        this._applyView();
      }, {
        passive: false
      });
    }
    connectedCallback() {
      // Warn once per page — an id-less slot works for the session but
      // cannot persist, and two id-less slots would share nothing.
      if (!this.id && !ImageSlot._warned) {
        ImageSlot._warned = true;
        console.warn('<image-slot> without an id will not persist its dropped image.');
      }
      this.addEventListener('dragenter', this);
      this.addEventListener('dragover', this);
      this.addEventListener('dragleave', this);
      this.addEventListener('drop', this);
      subs.add(this._subFn);
      // width%/height% in _applyView encode the frame aspect at call time —
      // a host resize (responsive grid, pane divider) would stretch the
      // image until the next _render. Re-render on size change: _render()
      // re-seeds _view from stored before clamp/apply, so a shrink→grow
      // cycle round-trips instead of ratcheting x/y toward the narrower
      // frame's clamp range.
      this._ro = new ResizeObserver(() => this._render());
      this._ro.observe(this);
      load();
      this._render();
    }
    disconnectedCallback() {
      subs.delete(this._subFn);
      this.removeEventListener('dragenter', this);
      this.removeEventListener('dragover', this);
      this.removeEventListener('dragleave', this);
      this.removeEventListener('drop', this);
      if (this._ro) {
        this._ro.disconnect();
        this._ro = null;
      }
      this._exitReframe(false);
    }
    _enterReframe() {
      if (this.hasAttribute('data-reframe')) return;
      this.setAttribute('data-reframe', '');
      this._applyView();
      // Close on click outside (the spill handler stopPropagation()s so
      // in-image drags don't reach this) and on Escape. Listeners are held
      // on the instance so _exitReframe / disconnectedCallback can detach
      // exactly what was attached.
      this._outside = e => {
        if (e.composedPath && e.composedPath().includes(this)) return;
        this._exitReframe(true);
      };
      this._esc = e => {
        if (e.key === 'Escape') this._exitReframe(true);
      };
      document.addEventListener('pointerdown', this._outside, true);
      document.addEventListener('keydown', this._esc, true);
    }
    _exitReframe(commit) {
      if (!this.hasAttribute('data-reframe')) return;
      if (this._dragUp) this._dragUp();
      this.removeAttribute('data-reframe');
      this.removeAttribute('data-panning');
      if (this._outside) document.removeEventListener('pointerdown', this._outside, true);
      if (this._esc) document.removeEventListener('keydown', this._esc, true);
      this._outside = this._esc = null;
      if (commit) this._commitView();
    }
    attributeChangedCallback() {
      if (this.shadowRoot) this._render();
    }

    // handleEvent — one listener object for all four drag events keeps the
    // add/remove symmetric and the depth counter correct.
    handleEvent(e) {
      if (e.type === 'dragenter' || e.type === 'dragover') {
        // Without preventDefault the browser never fires 'drop'.
        e.preventDefault();
        e.stopPropagation();
        if (e.dataTransfer) e.dataTransfer.dropEffect = 'copy';
        if (e.type === 'dragenter') this._depth++;
        this.setAttribute('data-over', '');
      } else if (e.type === 'dragleave') {
        // dragenter/leave fire for every descendant crossing — count depth
        // so hovering the icon inside the empty state doesn't flicker.
        if (--this._depth <= 0) {
          this._depth = 0;
          this.removeAttribute('data-over');
        }
      } else if (e.type === 'drop') {
        e.preventDefault();
        e.stopPropagation();
        this._depth = 0;
        this.removeAttribute('data-over');
        const f = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
        if (f) this._ingest(f);
      }
    }
    async _ingest(file) {
      this._setError(null);
      if (!file || ACCEPT.indexOf(file.type) < 0) {
        this._setError('Drop a PNG, JPEG, WebP, or AVIF image.');
        return;
      }
      // toDataUrl can take hundreds of ms on a large photo. A Clear or a
      // newer drop during that window would be clobbered when this await
      // resumes — bump + capture a generation so stale encodes bail.
      const gen = ++this._gen;
      try {
        const w = this.clientWidth || this.offsetWidth || MAX_DIM;
        const url = await toDataUrl(file, w);
        if (gen !== this._gen) return;
        // Only exit reframe once the new image is in hand — a rejected type
        // or decode failure leaves the in-progress crop untouched.
        this._exitReframe(false);
        const val = {
          u: url,
          s: 1,
          x: 0,
          y: 0
        };
        setSlot(this.id || '', val);
        // Keep a session-local copy for id-less slots so the drop still
        // shows, even though it cannot persist.
        if (!this.id) {
          this._local = val;
          this._render();
        }
      } catch (err) {
        if (gen !== this._gen) return;
        this._setError('Could not read that image.');
        console.warn('<image-slot> ingest failed:', err);
      }
    }
    _setError(msg) {
      if (this._err) {
        this._err.remove();
        this._err = null;
      }
      if (!msg) return;
      const d = document.createElement('div');
      d.className = 'err';
      d.textContent = msg;
      this.shadowRoot.appendChild(d);
      this._err = d;
      setTimeout(() => {
        if (this._err === d) {
          d.remove();
          this._err = null;
        }
      }, 3000);
    }

    // Reframing (pan/resize) is only meaningful for fit=cover — contain/fill
    // keep the old object-fit path and double-click is a no-op.
    _reframes() {
      return this.hasAttribute('data-filled') && (this.getAttribute('fit') || 'cover') === 'cover';
    }

    // Cover-baseline geometry, shared by clamp/apply/resize. Null until the
    // img has loaded (naturalWidth is 0 before that) or when the slot has no
    // layout box — ResizeObserver fires with a 0×0 rect under display:none,
    // and clamping against a degenerate 1×1 frame would silently pull the
    // stored pan toward zero.
    _geom() {
      const iw = this._img.naturalWidth,
        ih = this._img.naturalHeight;
      const fw = this.clientWidth,
        fh = this.clientHeight;
      if (!iw || !ih || !fw || !fh) return null;
      return {
        iw,
        ih,
        fw,
        fh,
        base: Math.max(fw / iw, fh / ih)
      };
    }
    _clampView() {
      // Pan range on each axis is half the overflow past the frame edge.
      const g = this._geom();
      if (!g) return;
      const mx = Math.max(0, (g.iw * g.base * this._view.s / g.fw - 1) * 50);
      const my = Math.max(0, (g.ih * g.base * this._view.s / g.fh - 1) * 50);
      this._view.x = Math.max(-mx, Math.min(mx, this._view.x));
      this._view.y = Math.max(-my, Math.min(my, this._view.y));
    }
    _applyView() {
      const g = this._geom();
      const fit = this.getAttribute('fit') || 'cover';
      if (fit !== 'cover' || !g) {
        // Non-cover, or dimensions not known yet (before img load).
        this._img.style.width = '100%';
        this._img.style.height = '100%';
        this._img.style.left = '50%';
        this._img.style.top = '50%';
        this._img.style.objectFit = fit;
        this._img.style.objectPosition = this.getAttribute('position') || '50% 50%';
        return;
      }
      // Cover baseline: img fills the frame on its tighter axis at s=1, so
      // pan works immediately on the overflowing axis without zooming first.
      // Width/height and left/top are all frame-% — depends only on the
      // frame aspect ratio, so a responsive resize keeps the same crop. The
      // spill layer mirrors the same box so its corners = image corners.
      const k = g.base * this._view.s;
      const w = g.iw * k / g.fw * 100 + '%';
      const h = g.ih * k / g.fh * 100 + '%';
      const l = 50 + this._view.x + '%';
      const t = 50 + this._view.y + '%';
      this._img.style.width = w;
      this._img.style.height = h;
      this._img.style.left = l;
      this._img.style.top = t;
      this._img.style.objectFit = '';
      this._spill.style.width = w;
      this._spill.style.height = h;
      this._spill.style.left = l;
      this._spill.style.top = t;
    }
    _commitView() {
      const v = {
        s: this._view.s,
        x: this._view.x,
        y: this._view.y
      };
      if (this._userUrl) v.u = this._userUrl;
      // Framing-only (no u) persists too so an author-src slot remembers its
      // crop; clearing the sidecar still falls through to src=.
      if (this.id) setSlot(this.id, v);else {
        this._local = v;
      }
    }
    _render() {
      // Shape / mask. Presets use border-radius so the dashed ring can
      // follow the rounded outline; clip-path is only applied for an
      // explicit `mask` (the ring is hidden there since a rectangle
      // dashed border chopped by an arbitrary polygon looks broken).
      const mask = this.getAttribute('mask');
      const shape = (this.getAttribute('shape') || 'rounded').toLowerCase();
      let radius = '';
      if (shape === 'circle') radius = '50%';else if (shape === 'pill') radius = '9999px';else if (shape === 'rounded') {
        const n = parseFloat(this.getAttribute('radius'));
        radius = (Number.isFinite(n) ? n : 12) + 'px';
      }
      this._frame.style.borderRadius = mask ? '' : radius;
      this._frame.style.clipPath = mask || '';
      this._ring.style.borderRadius = mask ? '' : radius;
      this._ring.style.display = mask ? 'none' : '';

      // Controls and reframe entry gate on this so share links stay read-only.
      const editable = !!(window.omelette && window.omelette.writeFile);
      this.toggleAttribute('data-editable', editable);
      this._sub.style.display = editable ? '' : 'none';

      // Content. The sidecar is also writable by the agent's write_file
      // tool, so its value isn't guaranteed canvas-originated — only accept
      // data:image/ URLs from it. The `src` attribute is author-controlled
      // (Claude wrote it into the HTML) so it passes through unchanged.
      let stored = this.id ? getSlot(this.id) : this._local;
      if (stored && stored.u && !/^data:image\//i.test(stored.u)) stored = null;
      const srcAttr = this.getAttribute('src') || '';
      this._userUrl = stored && stored.u || null;
      const url = this._userUrl || srcAttr;
      // Don't clobber an in-flight reframe with a store-triggered re-render.
      if (!this.hasAttribute('data-reframe')) {
        this._view = {
          s: stored && Number.isFinite(stored.s) ? clampS(stored.s) : 1,
          x: stored && Number.isFinite(stored.x) ? stored.x : 0,
          y: stored && Number.isFinite(stored.y) ? stored.y : 0
        };
      }
      this._cap.textContent = this.getAttribute('placeholder') || 'Drop an image';
      // Toggle via style.display — the [hidden] attribute alone loses to
      // the display:flex / display:block rules in the stylesheet above.
      if (url) {
        if (this._img.getAttribute('src') !== url) {
          this._img.src = url;
          this._ghost.src = url;
        }
        this._img.style.display = 'block';
        this._empty.style.display = 'none';
        this.setAttribute('data-filled', '');
        this._clampView();
        this._applyView();
      } else {
        this._img.style.display = 'none';
        this._img.removeAttribute('src');
        this._ghost.removeAttribute('src');
        this._empty.style.display = 'flex';
        this.removeAttribute('data-filled');
      }
    }
  }
  if (!customElements.get('image-slot')) {
    customElements.define('image-slot', ImageSlot);
  }
})();
})(); } catch (e) { __ds_ns.__errors.push({ path: "uploads/image-slot.js", error: String((e && e.message) || e) }); }

// uploads/tweaks-panel.jsx
try { (() => {
// @ds-adherence-ignore -- omelette starter scaffold (raw elements/hex/px by design)

/* BEGIN USAGE */
// tweaks-panel.jsx
// Reusable Tweaks shell + form-control helpers.
// Exports (to window): useTweaks, TweaksPanel, TweakSection, TweakRow, TweakSlider,
//   TweakToggle, TweakRadio, TweakSelect, TweakText, TweakNumber, TweakColor, TweakButton.
//
// Owns the host protocol (listens for __activate_edit_mode / __deactivate_edit_mode,
// posts __edit_mode_available / __edit_mode_set_keys / __edit_mode_dismissed) so
// individual prototypes don't re-roll it. Ships a consistent set of controls so you
// don't hand-draw <input type="range">, segmented radios, steppers, etc.
//
// Usage (in an HTML file that loads React + Babel):
//
//   const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
//     "primaryColor": "#D97757",
//     "palette": ["#D97757", "#29261b", "#f6f4ef"],
//     "fontSize": 16,
//     "density": "regular",
//     "dark": false
//   }/*EDITMODE-END*/;
//
//   function App() {
//     const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
//     return (
//       <div style={{ fontSize: t.fontSize, color: t.primaryColor }}>
//         Hello
//         <TweaksPanel>
//           <TweakSection label="Typography" />
//           <TweakSlider label="Font size" value={t.fontSize} min={10} max={32} unit="px"
//                        onChange={(v) => setTweak('fontSize', v)} />
//           <TweakRadio  label="Density" value={t.density}
//                        options={['compact', 'regular', 'comfy']}
//                        onChange={(v) => setTweak('density', v)} />
//           <TweakSection label="Theme" />
//           <TweakColor  label="Primary" value={t.primaryColor}
//                        options={['#D97757', '#2A6FDB', '#1F8A5B', '#7A5AE0']}
//                        onChange={(v) => setTweak('primaryColor', v)} />
//           <TweakColor  label="Palette" value={t.palette}
//                        options={[['#D97757', '#29261b', '#f6f4ef'],
//                                  ['#475569', '#0f172a', '#f1f5f9']]}
//                        onChange={(v) => setTweak('palette', v)} />
//           <TweakToggle label="Dark mode" value={t.dark}
//                        onChange={(v) => setTweak('dark', v)} />
//         </TweaksPanel>
//       </div>
//     );
//   }
//
// TweakRadio is the segmented control for 2–3 short options (auto-falls-back to
// TweakSelect past ~16/~10 chars per label); reach for TweakSelect directly when
// options are many or long. For color tweaks always curate 3-4 options rather than
// a free picker; an option can also be a whole 2–5 color palette (the stored value
// is the array). The Tweak* controls are a floor, not a ceiling — build custom
// controls inside the panel if a tweak calls for UI they don't cover.
/* END USAGE */
// ─────────────────────────────────────────────────────────────────────────────

const __TWEAKS_STYLE = `
  .twk-panel{position:fixed;right:16px;bottom:16px;z-index:2147483646;width:280px;
    max-height:calc(100vh - 32px);display:flex;flex-direction:column;
    transform:scale(var(--dc-inv-zoom,1));transform-origin:bottom right;
    background:rgba(250,249,247,.78);color:#29261b;
    -webkit-backdrop-filter:blur(24px) saturate(160%);backdrop-filter:blur(24px) saturate(160%);
    border:.5px solid rgba(255,255,255,.6);border-radius:14px;
    box-shadow:0 1px 0 rgba(255,255,255,.5) inset,0 12px 40px rgba(0,0,0,.18);
    font:11.5px/1.4 ui-sans-serif,system-ui,-apple-system,sans-serif;overflow:hidden}
  .twk-hd{display:flex;align-items:center;justify-content:space-between;
    padding:10px 8px 10px 14px;cursor:move;user-select:none}
  .twk-hd b{font-size:12px;font-weight:600;letter-spacing:.01em}
  .twk-x{appearance:none;border:0;background:transparent;color:rgba(41,38,27,.55);
    width:22px;height:22px;border-radius:6px;cursor:default;font-size:13px;line-height:1}
  .twk-x:hover{background:rgba(0,0,0,.06);color:#29261b}
  .twk-body{padding:2px 14px 14px;display:flex;flex-direction:column;gap:10px;
    overflow-y:auto;overflow-x:hidden;min-height:0;
    scrollbar-width:thin;scrollbar-color:rgba(0,0,0,.15) transparent}
  .twk-body::-webkit-scrollbar{width:8px}
  .twk-body::-webkit-scrollbar-track{background:transparent;margin:2px}
  .twk-body::-webkit-scrollbar-thumb{background:rgba(0,0,0,.15);border-radius:4px;
    border:2px solid transparent;background-clip:content-box}
  .twk-body::-webkit-scrollbar-thumb:hover{background:rgba(0,0,0,.25);
    border:2px solid transparent;background-clip:content-box}
  .twk-row{display:flex;flex-direction:column;gap:5px}
  .twk-row-h{flex-direction:row;align-items:center;justify-content:space-between;gap:10px}
  .twk-lbl{display:flex;justify-content:space-between;align-items:baseline;
    color:rgba(41,38,27,.72)}
  .twk-lbl>span:first-child{font-weight:500}
  .twk-val{color:rgba(41,38,27,.5);font-variant-numeric:tabular-nums}

  .twk-sect{font-size:10px;font-weight:600;letter-spacing:.06em;text-transform:uppercase;
    color:rgba(41,38,27,.45);padding:10px 0 0}
  .twk-sect:first-child{padding-top:0}

  .twk-field{appearance:none;box-sizing:border-box;width:100%;min-width:0;height:26px;padding:0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;
    background:rgba(255,255,255,.6);color:inherit;font:inherit;outline:none}
  .twk-field:focus{border-color:rgba(0,0,0,.25);background:rgba(255,255,255,.85)}
  select.twk-field{padding-right:22px;
    background-image:url("data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' width='10' height='6' viewBox='0 0 10 6'><path fill='rgba(0,0,0,.5)' d='M0 0h10L5 6z'/></svg>");
    background-repeat:no-repeat;background-position:right 8px center}

  .twk-slider{appearance:none;-webkit-appearance:none;width:100%;height:4px;margin:6px 0;
    border-radius:999px;background:rgba(0,0,0,.12);outline:none}
  .twk-slider::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;
    width:14px;height:14px;border-radius:50%;background:#fff;
    border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}
  .twk-slider::-moz-range-thumb{width:14px;height:14px;border-radius:50%;
    background:#fff;border:.5px solid rgba(0,0,0,.12);box-shadow:0 1px 3px rgba(0,0,0,.2);cursor:default}

  .twk-seg{position:relative;display:flex;padding:2px;border-radius:8px;
    background:rgba(0,0,0,.06);user-select:none}
  .twk-seg-thumb{position:absolute;top:2px;bottom:2px;border-radius:6px;
    background:rgba(255,255,255,.9);box-shadow:0 1px 2px rgba(0,0,0,.12);
    transition:left .15s cubic-bezier(.3,.7,.4,1),width .15s}
  .twk-seg.dragging .twk-seg-thumb{transition:none}
  .twk-seg button{appearance:none;position:relative;z-index:1;flex:1;border:0;
    background:transparent;color:inherit;font:inherit;font-weight:500;min-height:22px;
    border-radius:6px;cursor:default;padding:4px 6px;line-height:1.2;
    overflow-wrap:anywhere}

  .twk-toggle{position:relative;width:32px;height:18px;border:0;border-radius:999px;
    background:rgba(0,0,0,.15);transition:background .15s;cursor:default;padding:0}
  .twk-toggle[data-on="1"]{background:#34c759}
  .twk-toggle i{position:absolute;top:2px;left:2px;width:14px;height:14px;border-radius:50%;
    background:#fff;box-shadow:0 1px 2px rgba(0,0,0,.25);transition:transform .15s}
  .twk-toggle[data-on="1"] i{transform:translateX(14px)}

  .twk-num{display:flex;align-items:center;box-sizing:border-box;min-width:0;height:26px;padding:0 0 0 8px;
    border:.5px solid rgba(0,0,0,.1);border-radius:7px;background:rgba(255,255,255,.6)}
  .twk-num-lbl{font-weight:500;color:rgba(41,38,27,.6);cursor:ew-resize;
    user-select:none;padding-right:8px}
  .twk-num input{flex:1;min-width:0;height:100%;border:0;background:transparent;
    font:inherit;font-variant-numeric:tabular-nums;text-align:right;padding:0 8px 0 0;
    outline:none;color:inherit;-moz-appearance:textfield}
  .twk-num input::-webkit-inner-spin-button,.twk-num input::-webkit-outer-spin-button{
    -webkit-appearance:none;margin:0}
  .twk-num-unit{padding-right:8px;color:rgba(41,38,27,.45)}

  .twk-btn{appearance:none;height:26px;padding:0 12px;border:0;border-radius:7px;
    background:rgba(0,0,0,.78);color:#fff;font:inherit;font-weight:500;cursor:default}
  .twk-btn:hover{background:rgba(0,0,0,.88)}
  .twk-btn.secondary{background:rgba(0,0,0,.06);color:inherit}
  .twk-btn.secondary:hover{background:rgba(0,0,0,.1)}

  .twk-swatch{appearance:none;-webkit-appearance:none;width:56px;height:22px;
    border:.5px solid rgba(0,0,0,.1);border-radius:6px;padding:0;cursor:default;
    background:transparent;flex-shrink:0}
  .twk-swatch::-webkit-color-swatch-wrapper{padding:0}
  .twk-swatch::-webkit-color-swatch{border:0;border-radius:5.5px}
  .twk-swatch::-moz-color-swatch{border:0;border-radius:5.5px}

  .twk-chips{display:flex;gap:6px}
  .twk-chip{position:relative;appearance:none;flex:1;min-width:0;height:46px;
    padding:0;border:0;border-radius:6px;overflow:hidden;cursor:default;
    box-shadow:0 0 0 .5px rgba(0,0,0,.12),0 1px 2px rgba(0,0,0,.06);
    transition:transform .12s cubic-bezier(.3,.7,.4,1),box-shadow .12s}
  .twk-chip:hover{transform:translateY(-1px);
    box-shadow:0 0 0 .5px rgba(0,0,0,.18),0 4px 10px rgba(0,0,0,.12)}
  .twk-chip[data-on="1"]{box-shadow:0 0 0 1.5px rgba(0,0,0,.85),
    0 2px 6px rgba(0,0,0,.15)}
  .twk-chip>span{position:absolute;top:0;bottom:0;right:0;width:34%;
    display:flex;flex-direction:column;box-shadow:-1px 0 0 rgba(0,0,0,.1)}
  .twk-chip>span>i{flex:1;box-shadow:0 -1px 0 rgba(0,0,0,.1)}
  .twk-chip>span>i:first-child{box-shadow:none}
  .twk-chip svg{position:absolute;top:6px;left:6px;width:13px;height:13px;
    filter:drop-shadow(0 1px 1px rgba(0,0,0,.3))}
`;

// ── useTweaks ───────────────────────────────────────────────────────────────
// Single source of truth for tweak values. setTweak persists via the host
// (__edit_mode_set_keys → host rewrites the EDITMODE block on disk).
function useTweaks(defaults) {
  const [values, setValues] = React.useState(defaults);
  // Accepts either setTweak('key', value) or setTweak({ key: value, ... }) so a
  // useState-style call doesn't write a "[object Object]" key into the persisted
  // JSON block.
  const setTweak = React.useCallback((keyOrEdits, val) => {
    const edits = typeof keyOrEdits === 'object' && keyOrEdits !== null ? keyOrEdits : {
      [keyOrEdits]: val
    };
    setValues(prev => ({
      ...prev,
      ...edits
    }));
    window.parent.postMessage({
      type: '__edit_mode_set_keys',
      edits
    }, '*');
    // Same-window signal so in-page listeners (deck-stage rail thumbnails)
    // can react — the parent message only reaches the host, not peers.
    window.dispatchEvent(new CustomEvent('tweakchange', {
      detail: edits
    }));
  }, []);
  return [values, setTweak];
}

// ── TweaksPanel ─────────────────────────────────────────────────────────────
// Floating shell. Registers the protocol listener BEFORE announcing
// availability — if the announce ran first, the host's activate could land
// before our handler exists and the toolbar toggle would silently no-op.
// The close button posts __edit_mode_dismissed so the host's toolbar toggle
// flips off in lockstep; the host echoes __deactivate_edit_mode back which
// is what actually hides the panel.
function TweaksPanel({
  title = 'Tweaks',
  children
}) {
  const [open, setOpen] = React.useState(false);
  const dragRef = React.useRef(null);
  const offsetRef = React.useRef({
    x: 16,
    y: 16
  });
  const PAD = 16;
  const clampToViewport = React.useCallback(() => {
    const panel = dragRef.current;
    if (!panel) return;
    const w = panel.offsetWidth,
      h = panel.offsetHeight;
    const maxRight = Math.max(PAD, window.innerWidth - w - PAD);
    const maxBottom = Math.max(PAD, window.innerHeight - h - PAD);
    offsetRef.current = {
      x: Math.min(maxRight, Math.max(PAD, offsetRef.current.x)),
      y: Math.min(maxBottom, Math.max(PAD, offsetRef.current.y))
    };
    panel.style.right = offsetRef.current.x + 'px';
    panel.style.bottom = offsetRef.current.y + 'px';
  }, []);
  React.useEffect(() => {
    if (!open) return;
    clampToViewport();
    if (typeof ResizeObserver === 'undefined') {
      window.addEventListener('resize', clampToViewport);
      return () => window.removeEventListener('resize', clampToViewport);
    }
    const ro = new ResizeObserver(clampToViewport);
    ro.observe(document.documentElement);
    return () => ro.disconnect();
  }, [open, clampToViewport]);
  React.useEffect(() => {
    const onMsg = e => {
      const t = e?.data?.type;
      if (t === '__activate_edit_mode') setOpen(true);else if (t === '__deactivate_edit_mode') setOpen(false);
    };
    window.addEventListener('message', onMsg);
    window.parent.postMessage({
      type: '__edit_mode_available'
    }, '*');
    return () => window.removeEventListener('message', onMsg);
  }, []);
  const dismiss = () => {
    setOpen(false);
    window.parent.postMessage({
      type: '__edit_mode_dismissed'
    }, '*');
  };
  const onDragStart = e => {
    const panel = dragRef.current;
    if (!panel) return;
    const r = panel.getBoundingClientRect();
    const sx = e.clientX,
      sy = e.clientY;
    const startRight = window.innerWidth - r.right;
    const startBottom = window.innerHeight - r.bottom;
    const move = ev => {
      offsetRef.current = {
        x: startRight - (ev.clientX - sx),
        y: startBottom - (ev.clientY - sy)
      };
      clampToViewport();
    };
    const up = () => {
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseup', up);
    };
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseup', up);
  };
  if (!open) return null;
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("style", null, __TWEAKS_STYLE), /*#__PURE__*/React.createElement("div", {
    ref: dragRef,
    className: "twk-panel",
    "data-omelette-chrome": "",
    style: {
      right: offsetRef.current.x,
      bottom: offsetRef.current.y
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-hd",
    onMouseDown: onDragStart
  }, /*#__PURE__*/React.createElement("b", null, title), /*#__PURE__*/React.createElement("button", {
    className: "twk-x",
    "aria-label": "Close tweaks",
    onMouseDown: e => e.stopPropagation(),
    onClick: dismiss
  }, "\u2715")), /*#__PURE__*/React.createElement("div", {
    className: "twk-body"
  }, children)));
}

// ── Layout helpers ──────────────────────────────────────────────────────────

function TweakSection({
  label,
  children
}) {
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("div", {
    className: "twk-sect"
  }, label), children);
}
function TweakRow({
  label,
  value,
  children,
  inline = false
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: inline ? 'twk-row twk-row-h' : 'twk-row'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label), value != null && /*#__PURE__*/React.createElement("span", {
    className: "twk-val"
  }, value)), children);
}

// ── Controls ────────────────────────────────────────────────────────────────

function TweakSlider({
  label,
  value,
  min = 0,
  max = 100,
  step = 1,
  unit = '',
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label,
    value: `${value}${unit}`
  }, /*#__PURE__*/React.createElement("input", {
    type: "range",
    className: "twk-slider",
    min: min,
    max: max,
    step: step,
    value: value,
    onChange: e => onChange(Number(e.target.value))
  }));
}
function TweakToggle({
  label,
  value,
  onChange
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-row twk-row-h"
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-lbl"
  }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: "twk-toggle",
    "data-on": value ? '1' : '0',
    role: "switch",
    "aria-checked": !!value,
    onClick: () => onChange(!value)
  }, /*#__PURE__*/React.createElement("i", null)));
}
function TweakRadio({
  label,
  value,
  options,
  onChange
}) {
  const trackRef = React.useRef(null);
  const [dragging, setDragging] = React.useState(false);
  // The active value is read by pointer-move handlers attached for the lifetime
  // of a drag — ref it so a stale closure doesn't fire onChange for every move.
  const valueRef = React.useRef(value);
  valueRef.current = value;

  // Segments wrap mid-word once per-segment width runs out. The track is
  // ~248px (280 panel − 28 body pad − 4 seg pad), each button loses 12px
  // to its own padding, and 11.5px system-ui averages ~6.3px/char — so 2
  // options fit ~16 chars each, 3 fit ~10. Past that (or >3 options), fall
  // back to a dropdown rather than wrap.
  const labelLen = o => String(typeof o === 'object' ? o.label : o).length;
  const maxLen = options.reduce((m, o) => Math.max(m, labelLen(o)), 0);
  const fitsAsSegments = maxLen <= ({
    2: 16,
    3: 10
  }[options.length] ?? 0);
  if (!fitsAsSegments) {
    // <select> emits strings — map back to the original option value so the
    // fallback stays type-preserving (numbers, booleans) like the segment path.
    const resolve = s => {
      const m = options.find(o => String(typeof o === 'object' ? o.value : o) === s);
      return m === undefined ? s : typeof m === 'object' ? m.value : m;
    };
    return /*#__PURE__*/React.createElement(TweakSelect, {
      label: label,
      value: value,
      options: options,
      onChange: s => onChange(resolve(s))
    });
  }
  const opts = options.map(o => typeof o === 'object' ? o : {
    value: o,
    label: o
  });
  const idx = Math.max(0, opts.findIndex(o => o.value === value));
  const n = opts.length;
  const segAt = clientX => {
    const r = trackRef.current.getBoundingClientRect();
    const inner = r.width - 4;
    const i = Math.floor((clientX - r.left - 2) / inner * n);
    return opts[Math.max(0, Math.min(n - 1, i))].value;
  };
  const onPointerDown = e => {
    setDragging(true);
    const v0 = segAt(e.clientX);
    if (v0 !== valueRef.current) onChange(v0);
    const move = ev => {
      if (!trackRef.current) return;
      const v = segAt(ev.clientX);
      if (v !== valueRef.current) onChange(v);
    };
    const up = () => {
      setDragging(false);
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    ref: trackRef,
    role: "radiogroup",
    onPointerDown: onPointerDown,
    className: dragging ? 'twk-seg dragging' : 'twk-seg'
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-seg-thumb",
    style: {
      left: `calc(2px + ${idx} * (100% - 4px) / ${n})`,
      width: `calc((100% - 4px) / ${n})`
    }
  }), opts.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.value,
    type: "button",
    role: "radio",
    "aria-checked": o.value === value
  }, o.label))));
}
function TweakSelect({
  label,
  value,
  options,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("select", {
    className: "twk-field",
    value: value,
    onChange: e => onChange(e.target.value)
  }, options.map(o => {
    const v = typeof o === 'object' ? o.value : o;
    const l = typeof o === 'object' ? o.label : o;
    return /*#__PURE__*/React.createElement("option", {
      key: v,
      value: v
    }, l);
  })));
}
function TweakText({
  label,
  value,
  placeholder,
  onChange
}) {
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("input", {
    className: "twk-field",
    type: "text",
    value: value,
    placeholder: placeholder,
    onChange: e => onChange(e.target.value)
  }));
}
function TweakNumber({
  label,
  value,
  min,
  max,
  step = 1,
  unit = '',
  onChange
}) {
  const clamp = n => {
    if (min != null && n < min) return min;
    if (max != null && n > max) return max;
    return n;
  };
  const startRef = React.useRef({
    x: 0,
    val: 0
  });
  const onScrubStart = e => {
    e.preventDefault();
    startRef.current = {
      x: e.clientX,
      val: value
    };
    const decimals = (String(step).split('.')[1] || '').length;
    const move = ev => {
      const dx = ev.clientX - startRef.current.x;
      const raw = startRef.current.val + dx * step;
      const snapped = Math.round(raw / step) * step;
      onChange(clamp(Number(snapped.toFixed(decimals))));
    };
    const up = () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
  };
  return /*#__PURE__*/React.createElement("div", {
    className: "twk-num"
  }, /*#__PURE__*/React.createElement("span", {
    className: "twk-num-lbl",
    onPointerDown: onScrubStart
  }, label), /*#__PURE__*/React.createElement("input", {
    type: "number",
    value: value,
    min: min,
    max: max,
    step: step,
    onChange: e => onChange(clamp(Number(e.target.value)))
  }), unit && /*#__PURE__*/React.createElement("span", {
    className: "twk-num-unit"
  }, unit));
}

// Relative-luminance contrast pick — checkmarks drawn over a swatch need to
// read on both #111 and #fafafa without per-option configuration. Hex input
// only (#rgb / #rrggbb); named or rgb()/hsl() colors fall through to "light".
function __twkIsLight(hex) {
  const h = String(hex).replace('#', '');
  const x = h.length === 3 ? h.replace(/./g, c => c + c) : h.padEnd(6, '0');
  const n = parseInt(x.slice(0, 6), 16);
  if (Number.isNaN(n)) return true;
  const r = n >> 16 & 255,
    g = n >> 8 & 255,
    b = n & 255;
  return r * 299 + g * 587 + b * 114 > 148000;
}
const __TwkCheck = ({
  light
}) => /*#__PURE__*/React.createElement("svg", {
  viewBox: "0 0 14 14",
  "aria-hidden": "true"
}, /*#__PURE__*/React.createElement("path", {
  d: "M3 7.2 5.8 10 11 4.2",
  fill: "none",
  strokeWidth: "2.2",
  strokeLinecap: "round",
  strokeLinejoin: "round",
  stroke: light ? 'rgba(0,0,0,.78)' : '#fff'
}));

// TweakColor — curated color/palette picker. Each option is either a single
// hex string or an array of 1-5 hex strings; the card adapts — a lone color
// renders solid, a palette renders colors[0] as the hero (left ~2/3) with the
// rest stacked in a sharp column on the right. onChange emits the
// option in the shape it was passed (string stays string, array stays array).
// Without options it falls back to the native color input for back-compat.
function TweakColor({
  label,
  value,
  options,
  onChange
}) {
  if (!options || !options.length) {
    return /*#__PURE__*/React.createElement("div", {
      className: "twk-row twk-row-h"
    }, /*#__PURE__*/React.createElement("div", {
      className: "twk-lbl"
    }, /*#__PURE__*/React.createElement("span", null, label)), /*#__PURE__*/React.createElement("input", {
      type: "color",
      className: "twk-swatch",
      value: value,
      onChange: e => onChange(e.target.value)
    }));
  }
  // Native <input type=color> emits lowercase hex per the HTML spec, so
  // compare case-insensitively. String() guards JSON.stringify(undefined),
  // which returns the primitive undefined (no .toLowerCase).
  const key = o => String(JSON.stringify(o)).toLowerCase();
  const cur = key(value);
  return /*#__PURE__*/React.createElement(TweakRow, {
    label: label
  }, /*#__PURE__*/React.createElement("div", {
    className: "twk-chips",
    role: "radiogroup"
  }, options.map((o, i) => {
    const colors = Array.isArray(o) ? o : [o];
    const [hero, ...rest] = colors;
    const sup = rest.slice(0, 4);
    const on = key(o) === cur;
    return /*#__PURE__*/React.createElement("button", {
      key: i,
      type: "button",
      className: "twk-chip",
      role: "radio",
      "aria-checked": on,
      "data-on": on ? '1' : '0',
      "aria-label": colors.join(', '),
      title: colors.join(' · '),
      style: {
        background: hero
      },
      onClick: () => onChange(o)
    }, sup.length > 0 && /*#__PURE__*/React.createElement("span", null, sup.map((c, j) => /*#__PURE__*/React.createElement("i", {
      key: j,
      style: {
        background: c
      }
    }))), on && /*#__PURE__*/React.createElement(__TwkCheck, {
      light: __twkIsLight(hero)
    }));
  })));
}
function TweakButton({
  label,
  onClick,
  secondary = false
}) {
  return /*#__PURE__*/React.createElement("button", {
    type: "button",
    className: secondary ? 'twk-btn secondary' : 'twk-btn',
    onClick: onClick
  }, label);
}
Object.assign(window, {
  useTweaks,
  TweaksPanel,
  TweakSection,
  TweakRow,
  TweakSlider,
  TweakToggle,
  TweakRadio,
  TweakSelect,
  TweakText,
  TweakNumber,
  TweakColor,
  TweakButton
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "uploads/tweaks-panel.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.BrandMark = __ds_scope.BrandMark;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Eyebrow = __ds_scope.Eyebrow;

__ds_ns.FilterChip = __ds_scope.FilterChip;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.ProjectCard = __ds_scope.ProjectCard;

})();
