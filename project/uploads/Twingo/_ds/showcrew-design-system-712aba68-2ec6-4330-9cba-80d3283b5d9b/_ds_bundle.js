/* @ds-bundle: {"format":3,"namespace":"ShowCrewDesignSystem_712aba","components":[{"name":"Avatar","sourcePath":"components/display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/display/Badge.jsx"},{"name":"Card","sourcePath":"components/display/Card.jsx"},{"name":"Rating","sourcePath":"components/display/Rating.jsx"},{"name":"Stat","sourcePath":"components/display/Stat.jsx"},{"name":"Tag","sourcePath":"components/display/Tag.jsx"},{"name":"TalentCard","sourcePath":"components/display/TalentCard.jsx"},{"name":"ProgressBar","sourcePath":"components/feedback/ProgressBar.jsx"},{"name":"Skeleton","sourcePath":"components/feedback/Skeleton.jsx"},{"name":"Spinner","sourcePath":"components/feedback/Spinner.jsx"},{"name":"Toast","sourcePath":"components/feedback/Toast.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"SearchBar","sourcePath":"components/forms/SearchBar.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Pagination","sourcePath":"components/navigation/Pagination.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"},{"name":"Dialog","sourcePath":"components/overlay/Dialog.jsx"}],"sourceHashes":{"components/display/Avatar.jsx":"ede628d18cb6","components/display/Badge.jsx":"35b704369209","components/display/Card.jsx":"aa20c154ddfd","components/display/Rating.jsx":"683035d206aa","components/display/Stat.jsx":"1c630bb9f32b","components/display/Tag.jsx":"9d76c2e9e9d8","components/display/TalentCard.jsx":"7c30bba0575e","components/feedback/ProgressBar.jsx":"106b7888a580","components/feedback/Skeleton.jsx":"90707ba3c527","components/feedback/Spinner.jsx":"934f0e142da2","components/feedback/Toast.jsx":"d19ed6e5111b","components/feedback/Tooltip.jsx":"86f904e07306","components/forms/Button.jsx":"4a80c2667aff","components/forms/Checkbox.jsx":"6393cb260e78","components/forms/IconButton.jsx":"32fbdc6a82ad","components/forms/Input.jsx":"37303d6a5904","components/forms/Radio.jsx":"f5be5a96dc7c","components/forms/SearchBar.jsx":"0280f0d70020","components/forms/Select.jsx":"58825636d783","components/forms/Switch.jsx":"3d73120d7809","components/forms/Textarea.jsx":"e0573752f252","components/navigation/Breadcrumb.jsx":"6197d3f57566","components/navigation/Pagination.jsx":"f7131d3b4517","components/navigation/Tabs.jsx":"b9e475a57b81","components/overlay/Dialog.jsx":"6455eb51aa7e","ui_kits/showcrew/Browse.jsx":"1509bd280870","ui_kits/showcrew/Dashboard.jsx":"3bac14daa7ac","ui_kits/showcrew/Header.jsx":"1f4cb1ec8230","ui_kits/showcrew/Home.jsx":"9c449c1686db","ui_kits/showcrew/PostBrief.jsx":"2a4187518f7d","ui_kits/showcrew/Profile.jsx":"5f757ad72f2d","ui_kits/showcrew/data.jsx":"68b6ca9586be"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ShowCrewDesignSystem_712aba = window.ShowCrewDesignSystem_712aba || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  xs: 24,
  sm: 32,
  md: 40,
  lg: 56,
  xl: 80
};

/** User/studio avatar with initials fallback and optional volt status ring. */
function Avatar({
  src,
  name = '',
  size = 'md',
  status,
  square = false,
  style,
  ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  const initials = name.split(' ').map(w => w[0]).slice(0, 2).join('').toUpperCase();
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      position: 'relative',
      display: 'inline-flex',
      flex: 'none',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      width: dim,
      height: dim,
      borderRadius: square ? 'var(--radius-md)' : 999,
      overflow: 'hidden',
      background: 'var(--ink-150)',
      color: 'var(--ink-700)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: dim * 0.36,
      border: '1px solid var(--border-subtle)'
    }
  }, src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: '100%',
      height: '100%',
      objectFit: 'cover'
    }
  }) : initials), status && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      right: -1,
      bottom: -1,
      width: Math.max(8, dim * 0.26),
      height: Math.max(8, dim * 0.26),
      borderRadius: 999,
      background: status === 'available' ? 'var(--volt)' : status === 'busy' ? 'var(--warning)' : 'var(--ink-300)',
      border: '2px solid var(--surface-card)'
    }
  }));
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const VARIANTS = {
  neutral: {
    background: 'var(--ink-100)',
    color: 'var(--ink-700)'
  },
  solid: {
    background: 'var(--ink-950)',
    color: 'var(--paper)'
  },
  signal: {
    background: 'var(--volt)',
    color: 'var(--volt-ink)'
  },
  outline: {
    background: 'transparent',
    color: 'var(--ink-800)',
    boxShadow: 'inset 0 0 0 1px var(--border-strong)'
  },
  success: {
    background: 'var(--success-bg)',
    color: 'var(--success)'
  },
  warning: {
    background: 'var(--warning-bg)',
    color: 'var(--warning)'
  },
  danger: {
    background: 'var(--danger-bg)',
    color: 'var(--danger)'
  }
};

/** Small status/label badge. */
function Badge({
  children,
  variant = 'neutral',
  dot = false,
  style,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.neutral;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      padding: '3px 9px',
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.04em',
      borderRadius: 'var(--radius-pill)',
      lineHeight: 1.4,
      whiteSpace: 'nowrap',
      ...v,
      ...style
    }
  }, rest), dot && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 6,
      height: 6,
      borderRadius: 999,
      background: 'currentColor'
    }
  }), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Surface container with hairline border + soft hover lift. */
function Card({
  children,
  interactive = false,
  padding = 'md',
  style,
  ...rest
}) {
  const pads = {
    none: 0,
    sm: 'var(--pad-card-sm)',
    md: 'var(--pad-card)',
    lg: 'var(--space-8)'
  };
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", _extends({
    onMouseEnter: () => interactive && setHover(true),
    onMouseLeave: () => interactive && setHover(false),
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      padding: pads[padding] ?? pads.md,
      overflow: 'hidden',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-2px)' : 'none',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out), border-color var(--dur-base)',
      borderColor: hover ? 'var(--border-strong)' : 'var(--border-default)',
      cursor: interactive ? 'pointer' : 'default',
      ...style
    }
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Card.jsx", error: String((e && e.message) || e) }); }

// components/display/Rating.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Star rating with optional count. */
function Rating({
  value = 0,
  count,
  size = 14,
  showValue = true,
  style,
  ...rest
}) {
  const full = Math.round(value);
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 6,
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-secondary)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      display: 'inline-flex',
      gap: 1
    }
  }, [0, 1, 2, 3, 4].map(i => /*#__PURE__*/React.createElement("svg", {
    key: i,
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: i < full ? 'var(--ink-950)' : 'var(--ink-200)',
    stroke: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M12 2l2.9 6.3 6.8.8-5 4.6 1.3 6.7L12 17.8 6 21.2l1.3-6.7-5-4.6 6.8-.8z"
  })))), showValue && /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, value.toFixed(1)), count != null && /*#__PURE__*/React.createElement("span", null, "(", count, ")"));
}
Object.assign(__ds_scope, { Rating });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Rating.jsx", error: String((e && e.message) || e) }); }

// components/display/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Big mono metric with label — used in profiles & dashboards. */
function Stat({
  value,
  label,
  sub,
  align = 'left',
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2,
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 800,
      fontSize: 28,
      letterSpacing: '-0.02em',
      color: 'var(--text-primary)',
      lineHeight: 1.05
    }
  }, value), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)'
    }
  }, label), sub && /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, sub));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Filter/skill tag — selectable pill. */
function Tag({
  children,
  selected = false,
  removable = false,
  onRemove,
  size = 'md',
  style,
  ...rest
}) {
  const pad = size === 'sm' ? '4px 10px' : '6px 14px';
  const fs = size === 'sm' ? 12 : 13.5;
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 7,
      padding: pad,
      fontSize: fs,
      fontFamily: 'var(--font-sans)',
      fontWeight: 500,
      cursor: rest.onClick ? 'pointer' : 'default',
      borderRadius: 'var(--radius-pill)',
      whiteSpace: 'nowrap',
      background: selected ? 'var(--ink-950)' : 'var(--surface-card)',
      color: selected ? 'var(--paper)' : 'var(--ink-700)',
      border: `1px solid ${selected ? 'var(--ink-950)' : 'var(--border-default)'}`,
      transition: 'background var(--dur-fast), border-color var(--dur-fast)',
      ...style
    }
  }, rest), children, removable && /*#__PURE__*/React.createElement("span", {
    onClick: e => {
      e.stopPropagation();
      onRemove && onRemove();
    },
    style: {
      display: 'inline-flex',
      cursor: 'pointer',
      opacity: 0.6
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "12",
    height: "12",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.5",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/display/TalentCard.jsx
try { (() => {
/**
 * Talent/studio card — portfolio cover, identity row, skills, rate.
 * The core unit of the ShowCrew browse experience.
 */
function TalentCard({
  name,
  role,
  avatar,
  cover,
  coverBg,
  rating,
  reviews,
  skills = [],
  rate,
  available = false,
  saved = false,
  onSave,
  onClick,
  style
}) {
  const [hover, setHover] = React.useState(false);
  return /*#__PURE__*/React.createElement("div", {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => setHover(false),
    onClick: onClick,
    style: {
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-lg)',
      overflow: 'hidden',
      cursor: 'pointer',
      boxShadow: hover ? 'var(--shadow-lg)' : 'var(--shadow-sm)',
      transform: hover ? 'translateY(-2px)' : 'none',
      borderColor: hover ? 'var(--border-strong)' : 'var(--border-default)',
      transition: 'box-shadow var(--dur-base) var(--ease-out), transform var(--dur-base) var(--ease-out), border-color var(--dur-base)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      height: 150,
      background: cover ? `center/cover no-repeat url(${cover})` : coverBg || 'linear-gradient(135deg, var(--ink-200), var(--ink-100))'
    }
  }, available && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 12,
      left: 12
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Badge, {
    variant: "signal",
    dot: true
  }, "AVAILABLE")), /*#__PURE__*/React.createElement("button", {
    "aria-label": "Save",
    onClick: e => {
      e.stopPropagation();
      onSave && onSave();
    },
    style: {
      position: 'absolute',
      top: 10,
      right: 10,
      width: 34,
      height: 34,
      borderRadius: 999,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: 'var(--shadow-sm)'
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: saved ? 'var(--ink-950)' : 'none',
    stroke: "var(--ink-950)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: 16,
      marginTop: -28
    }
  }, /*#__PURE__*/React.createElement(__ds_scope.Avatar, {
    name: name,
    src: avatar,
    size: "lg",
    square: true,
    style: {
      boxShadow: '0 0 0 3px var(--surface-card)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginTop: 10,
      gap: 8
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 700,
      fontSize: 17,
      color: 'var(--text-primary)',
      letterSpacing: '-0.01em'
    }
  }, name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--text-secondary)'
    }
  }, role)), rating != null && /*#__PURE__*/React.createElement(__ds_scope.Rating, {
    value: rating,
    count: reviews,
    size: 13
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 6,
      flexWrap: 'wrap',
      marginTop: 12
    }
  }, skills.slice(0, 3).map(s => /*#__PURE__*/React.createElement(__ds_scope.Tag, {
    key: s,
    size: "sm"
  }, s))), rate && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 14,
      paddingTop: 12,
      borderTop: '1px solid var(--border-subtle)',
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-secondary)'
    }
  }, "From ", /*#__PURE__*/React.createElement("span", {
    style: {
      fontWeight: 700,
      color: 'var(--text-primary)'
    }
  }, rate))));
}
Object.assign(__ds_scope, { TalentCard });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/display/TalentCard.jsx", error: String((e && e.message) || e) }); }

// components/feedback/ProgressBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Linear progress bar. */
function ProgressBar({
  value = 0,
  max = 100,
  label,
  showValue = false,
  signal = false,
  style,
  ...rest
}) {
  const pct = Math.max(0, Math.min(100, value / max * 100));
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      width: '100%',
      ...style
    }
  }, rest), (label || showValue) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginBottom: 6,
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("span", null, label), showValue && /*#__PURE__*/React.createElement("span", null, Math.round(pct), "%")), /*#__PURE__*/React.createElement("div", {
    style: {
      height: 8,
      borderRadius: 999,
      background: 'var(--ink-100)',
      overflow: 'hidden'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      width: `${pct}%`,
      height: '100%',
      borderRadius: 999,
      background: signal ? 'var(--volt)' : 'var(--ink-950)',
      transition: 'width var(--dur-slow) var(--ease-out)'
    }
  })));
}
Object.assign(__ds_scope, { ProgressBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/ProgressBar.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Skeleton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Shimmer skeleton placeholder. */
function Skeleton({
  width = '100%',
  height = 16,
  radius = 'var(--radius-sm)',
  circle = false,
  style,
  ...rest
}) {
  const dim = circle ? {
    width: height,
    height,
    borderRadius: 999
  } : {
    width,
    height,
    borderRadius: radius
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'block',
      background: 'linear-gradient(90deg, var(--ink-100) 25%, var(--ink-50) 50%, var(--ink-100) 75%)',
      backgroundSize: '200% 100%',
      animation: 'sc-shimmer 1.3s ease-in-out infinite',
      ...dim,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("style", null, `@keyframes sc-shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`));
}
Object.assign(__ds_scope, { Skeleton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Skeleton.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Spinner.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Spinning loader. */
function Spinner({
  size = 20,
  stroke = 2.5,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("span", _extends({
    style: {
      display: 'inline-flex',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    style: {
      animation: 'sc-spin 0.7s linear infinite'
    }
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "12",
    cy: "12",
    r: "9",
    fill: "none",
    stroke: "var(--ink-150)",
    strokeWidth: stroke
  }), /*#__PURE__*/React.createElement("path", {
    d: "M21 12a9 9 0 0 0-9-9",
    fill: "none",
    stroke: "var(--ink-950)",
    strokeWidth: stroke,
    strokeLinecap: "round"
  })), /*#__PURE__*/React.createElement("style", null, `@keyframes sc-spin{to{transform:rotate(360deg)}}`));
}
Object.assign(__ds_scope, { Spinner });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Spinner.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Toast.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const ICONS = {
  success: 'M20 6 9 17l-5-5',
  info: 'M12 16v-4M12 8h.01',
  warning: 'M12 9v4M12 17h.01',
  error: 'M18 6 6 18M6 6l12 12'
};

/** Inline toast/notification surface. */
function Toast({
  title,
  message,
  variant = 'info',
  onClose,
  action,
  style,
  ...rest
}) {
  const accent = {
    success: 'var(--success)',
    info: 'var(--ink-950)',
    warning: 'var(--warning)',
    error: 'var(--danger)'
  }[variant];
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "status",
    style: {
      display: 'flex',
      alignItems: 'flex-start',
      gap: 12,
      padding: '14px 16px',
      maxWidth: 380,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      boxShadow: 'var(--shadow-lg)',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("span", {
    style: {
      flex: 'none',
      width: 22,
      height: 22,
      borderRadius: 999,
      background: variant === 'info' ? 'var(--volt)' : accent,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 1
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: variant === 'info' ? 'var(--volt-ink)' : '#fff',
    strokeWidth: "2.6",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: ICONS[variant]
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }, title && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontWeight: 700,
      fontSize: 14.5,
      color: 'var(--text-primary)'
    }
  }, title), message && /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 13.5,
      color: 'var(--text-secondary)',
      marginTop: 2
    }
  }, message), action && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8
    }
  }, action)), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Dismiss",
    onClick: onClose,
    style: {
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      padding: 2
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  }))));
}
Object.assign(__ds_scope, { Toast });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Toast.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** Hover tooltip (dark bubble). */
function Tooltip({
  children,
  label,
  side = 'top',
  style
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: '100%',
      left: '50%',
      transform: 'translateX(-50%) translateY(-8px)'
    },
    bottom: {
      top: '100%',
      left: '50%',
      transform: 'translateX(-50%) translateY(8px)'
    },
    left: {
      right: '100%',
      top: '50%',
      transform: 'translateY(-50%) translateX(-8px)'
    },
    right: {
      left: '100%',
      top: '50%',
      transform: 'translateY(-50%) translateX(8px)'
    }
  }[side];
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'relative',
      display: 'inline-flex',
      ...style
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false)
  }, children, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      ...pos,
      zIndex: 50,
      pointerEvents: 'none',
      whiteSpace: 'nowrap',
      background: 'var(--ink-950)',
      color: 'var(--paper)',
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      fontFamily: 'var(--font-sans)',
      fontSize: 12.5,
      fontWeight: 500,
      opacity: show ? 1 : 0,
      transition: 'opacity var(--dur-fast) var(--ease-out)',
      boxShadow: 'var(--shadow-md)'
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: {
    padding: '0 12px',
    height: 32,
    fontSize: 13
  },
  md: {
    padding: '0 16px',
    height: 40,
    fontSize: 14
  },
  lg: {
    padding: '0 22px',
    height: 48,
    fontSize: 16
  }
};
const VARIANTS = {
  primary: {
    background: 'var(--action-primary)',
    color: 'var(--action-primary-text)',
    border: '1px solid var(--action-primary)'
  },
  signal: {
    background: 'var(--action-signal)',
    color: 'var(--action-signal-text)',
    border: '1px solid var(--action-signal)'
  },
  secondary: {
    background: 'var(--surface-card)',
    color: 'var(--text-primary)',
    border: '1px solid var(--border-strong)'
  },
  ghost: {
    background: 'transparent',
    color: 'var(--text-primary)',
    border: '1px solid transparent'
  },
  inverse: {
    background: 'var(--surface-card)',
    color: 'var(--text-primary)',
    border: '1px solid var(--surface-card)'
  }
};

/**
 * ShowCrew primary action button.
 */
function Button({
  children,
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  iconLeft,
  iconRight,
  disabled = false,
  style,
  ...rest
}) {
  const v = VARIANTS[variant] || VARIANTS.primary;
  const s = SIZES[size] || SIZES.md;
  return /*#__PURE__*/React.createElement("button", _extends({
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      lineHeight: 1,
      borderRadius: 'var(--radius-pill)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      width: fullWidth ? '100%' : 'auto',
      whiteSpace: 'nowrap',
      transition: 'transform var(--dur-fast) var(--ease-out), background var(--dur-fast) var(--ease-out), opacity var(--dur-fast)',
      opacity: disabled ? 0.42 : 1,
      ...s,
      ...v,
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.97)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), iconLeft, children, iconRight);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with volt check. */
function Checkbox({
  checked,
  label,
  disabled,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: 'var(--radius-sm)',
      border: checked ? '1px solid var(--ink-950)' : '1px solid var(--border-strong)',
      background: checked ? 'var(--ink-950)' : 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast), border-color var(--dur-fast)'
    }
  }, checked && /*#__PURE__*/React.createElement("svg", {
    width: "13",
    height: "13",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--volt)",
    strokeWidth: "3.5",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M20 6 9 17l-5-5"
  }))), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
const SIZES = {
  sm: 32,
  md: 40,
  lg: 48
};

/**
 * Square icon-only button.
 */
function IconButton({
  icon,
  variant = 'secondary',
  size = 'md',
  rounded = 'pill',
  ariaLabel,
  disabled = false,
  style,
  ...rest
}) {
  const dim = SIZES[size] || SIZES.md;
  const variants = {
    primary: {
      background: 'var(--action-primary)',
      color: 'var(--action-primary-text)',
      border: '1px solid var(--action-primary)'
    },
    secondary: {
      background: 'var(--surface-card)',
      color: 'var(--text-primary)',
      border: '1px solid var(--border-default)'
    },
    ghost: {
      background: 'transparent',
      color: 'var(--text-secondary)',
      border: '1px solid transparent'
    },
    signal: {
      background: 'var(--action-signal)',
      color: 'var(--action-signal-text)',
      border: '1px solid var(--action-signal)'
    }
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": ariaLabel,
    disabled: disabled,
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: dim,
      height: dim,
      flex: 'none',
      borderRadius: rounded === 'pill' ? 'var(--radius-pill)' : 'var(--radius-md)',
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.42 : 1,
      transition: 'background var(--dur-fast) var(--ease-out), transform var(--dur-fast)',
      ...(variants[variant] || variants.secondary),
      ...style
    },
    onMouseDown: e => {
      if (!disabled) e.currentTarget.style.transform = 'scale(0.92)';
    },
    onMouseUp: e => {
      e.currentTarget.style.transform = 'scale(1)';
    },
    onMouseLeave: e => {
      e.currentTarget.style.transform = 'scale(1)';
    }
  }, rest), icon);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Text input with optional label, leading icon, and helper/error text.
 */
function Input({
  label,
  hint,
  error,
  iconLeft,
  size = 'md',
  id,
  style,
  containerStyle,
  ...rest
}) {
  const heights = {
    sm: 36,
    md: 44,
    lg: 52
  };
  const h = heights[size] || heights.md;
  const reactId = React.useId();
  const inputId = id || reactId;
  const [focused, setFocused] = React.useState(false);
  const borderColor = error ? 'var(--danger)' : focused ? 'var(--border-focus)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: h,
      padding: '0 14px',
      background: 'var(--surface-card)',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      boxShadow: focused ? '0 0 0 3px rgba(11,11,10,0.08)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)'
    }
  }, iconLeft && /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--text-muted)',
      display: 'flex'
    }
  }, iconLeft), /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      border: 0,
      outline: 0,
      background: 'transparent',
      width: '100%',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-primary)',
      ...style
    }
  }, rest))), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: error ? 'var(--danger)' : 'var(--text-muted)',
      fontFamily: 'var(--font-sans)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio button with volt dot. */
function Radio({
  checked,
  label,
  name,
  value,
  disabled,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 20,
      height: 20,
      flex: 'none',
      borderRadius: 999,
      border: checked ? '1px solid var(--ink-950)' : '1px solid var(--border-strong)',
      background: checked ? 'var(--ink-950)' : 'var(--surface-card)',
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'background var(--dur-fast), border-color var(--dur-fast)'
    }
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: 999,
      background: 'var(--volt)'
    }
  })), /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    name: name,
    value: value,
    checked: checked,
    disabled: disabled,
    onChange: onChange,
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/SearchBar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Prominent pill search bar with leading icon and optional action button. */
function SearchBar({
  placeholder = 'Search the crew…',
  value,
  onChange,
  onSubmit,
  buttonLabel = 'Search',
  size = 'lg',
  style,
  ...rest
}) {
  const heights = {
    md: 48,
    lg: 60
  };
  const h = heights[size] || heights.lg;
  return /*#__PURE__*/React.createElement("form", _extends({
    onSubmit: e => {
      e.preventDefault();
      onSubmit && onSubmit(value);
    },
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      height: h,
      paddingLeft: 20,
      paddingRight: 8,
      background: 'var(--surface-card)',
      border: '1px solid var(--border-strong)',
      borderRadius: 'var(--radius-pill)',
      boxShadow: 'var(--shadow-md)',
      maxWidth: 620,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "var(--text-muted)",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })), /*#__PURE__*/React.createElement("input", {
    value: value,
    onChange: e => onChange && onChange(e.target.value),
    placeholder: placeholder,
    style: {
      flex: 1,
      border: 0,
      outline: 0,
      background: 'transparent',
      fontFamily: 'var(--font-sans)',
      fontSize: 16,
      color: 'var(--text-primary)'
    }
  }), /*#__PURE__*/React.createElement("button", {
    type: "submit",
    style: {
      height: h - 16,
      padding: '0 22px',
      flex: 'none',
      borderRadius: 'var(--radius-pill)',
      background: 'var(--action-primary)',
      color: 'var(--action-primary-text)',
      border: 0,
      fontFamily: 'var(--font-sans)',
      fontWeight: 600,
      fontSize: 15,
      cursor: 'pointer'
    }
  }, buttonLabel));
}
Object.assign(__ds_scope, { SearchBar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/SearchBar.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled to match ShowCrew inputs. */
function Select({
  label,
  hint,
  options = [],
  size = 'md',
  id,
  style,
  containerStyle,
  ...rest
}) {
  const heights = {
    sm: 36,
    md: 44,
    lg: 52
  };
  const h = heights[size] || heights.md;
  const reactId = React.useId();
  const inputId = id || reactId;
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: 'relative',
      display: 'flex',
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: inputId,
    style: {
      appearance: 'none',
      WebkitAppearance: 'none',
      width: '100%',
      height: h,
      padding: '0 38px 0 14px',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-primary)',
      background: 'var(--surface-card)',
      border: '1px solid var(--border-default)',
      borderRadius: 'var(--radius-md)',
      outline: 0,
      cursor: 'pointer',
      ...style
    }
  }, rest), options.map(o => {
    const value = typeof o === 'string' ? o : o.value;
    const labelText = typeof o === 'string' ? o : o.label;
    return /*#__PURE__*/React.createElement("option", {
      key: value,
      value: value
    }, labelText);
  })), /*#__PURE__*/React.createElement("svg", {
    width: "16",
    height: "16",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round",
    style: {
      position: 'absolute',
      right: 13,
      pointerEvents: 'none',
      color: 'var(--text-muted)'
    }
  }, /*#__PURE__*/React.createElement("path", {
    d: "m6 9 6 6 6-6"
  }))), hint && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)',
      fontFamily: 'var(--font-sans)'
    }
  }, hint));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Toggle switch — volt track when on. */
function Switch({
  checked,
  label,
  disabled,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("label", {
    style: {
      display: 'inline-flex',
      alignItems: 'center',
      gap: 10,
      cursor: disabled ? 'not-allowed' : 'pointer',
      opacity: disabled ? 0.45 : 1,
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-primary)',
      ...style
    }
  }, /*#__PURE__*/React.createElement("span", {
    onClick: () => !disabled && onChange && onChange(!checked),
    style: {
      width: 40,
      height: 24,
      flex: 'none',
      borderRadius: 999,
      position: 'relative',
      background: checked ? 'var(--ink-950)' : 'var(--ink-200)',
      transition: 'background var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      top: 3,
      left: checked ? 19 : 3,
      width: 18,
      height: 18,
      borderRadius: 999,
      background: checked ? 'var(--volt)' : 'var(--paper)',
      transition: 'left var(--dur-base) var(--ease-out), background var(--dur-base)',
      boxShadow: 'var(--shadow-sm)'
    }
  })), /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    checked: checked,
    disabled: disabled,
    onChange: e => onChange && onChange(e.target.checked),
    style: {
      position: 'absolute',
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), label);
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text input matching Input styling. */
function Textarea({
  label,
  hint,
  error,
  rows = 4,
  id,
  style,
  containerStyle,
  ...rest
}) {
  const reactId = React.useId();
  const inputId = id || reactId;
  const [focused, setFocused] = React.useState(false);
  const borderColor = error ? 'var(--danger)' : focused ? 'var(--border-focus)' : 'var(--border-default)';
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 6,
      ...containerStyle
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: inputId,
    rows: rows,
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    },
    style: {
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-primary)',
      padding: '12px 14px',
      background: 'var(--surface-card)',
      resize: 'vertical',
      border: `1px solid ${borderColor}`,
      borderRadius: 'var(--radius-md)',
      outline: 0,
      boxShadow: focused ? '0 0 0 3px rgba(11,11,10,0.08)' : 'none',
      transition: 'border-color var(--dur-fast), box-shadow var(--dur-fast)',
      ...style
    }
  }, rest)), (hint || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: 12.5,
      color: error ? 'var(--danger)' : 'var(--text-muted)',
      fontFamily: 'var(--font-sans)'
    }
  }, error || hint));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Breadcrumb trail. */
function Breadcrumb({
  items = [],
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("nav", _extends({
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 8,
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      ...style
    }
  }, rest), items.map((it, i) => {
    const label = typeof it === 'string' ? it : it.label;
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, /*#__PURE__*/React.createElement("a", {
      href: typeof it === 'object' ? it.href : undefined,
      style: {
        color: last ? 'var(--text-primary)' : 'var(--text-muted)',
        fontWeight: last ? 700 : 500,
        textDecoration: 'none',
        letterSpacing: '0.03em'
      }
    }, label), !last && /*#__PURE__*/React.createElement("span", {
      style: {
        color: 'var(--ink-300)'
      }
    }, "/"));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Pagination.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Page pagination. */
function Pagination({
  page = 1,
  total = 1,
  onChange,
  style,
  ...rest
}) {
  const go = p => onChange && onChange(Math.max(1, Math.min(total, p)));
  const pages = [];
  for (let i = 1; i <= total; i++) {
    if (i === 1 || i === total || Math.abs(i - page) <= 1) pages.push(i);else if (pages[pages.length - 1] !== '…') pages.push('…');
  }
  const btn = active => ({
    minWidth: 36,
    height: 36,
    padding: '0 8px',
    borderRadius: 'var(--radius-md)',
    cursor: 'pointer',
    border: `1px solid ${active ? 'var(--ink-950)' : 'var(--border-default)'}`,
    background: active ? 'var(--ink-950)' : 'var(--surface-card)',
    color: active ? 'var(--paper)' : 'var(--text-primary)',
    fontFamily: 'var(--font-mono)',
    fontSize: 13,
    fontWeight: 700
  });
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      display: 'inline-flex',
      gap: 6,
      alignItems: 'center',
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(page - 1),
    disabled: page === 1,
    style: {
      ...btn(false),
      opacity: page === 1 ? 0.4 : 1
    }
  }, "\u2039"), pages.map((p, i) => p === '…' ? /*#__PURE__*/React.createElement("span", {
    key: 'e' + i,
    style: {
      color: 'var(--text-muted)',
      padding: '0 2px'
    }
  }, "\u2026") : /*#__PURE__*/React.createElement("button", {
    key: p,
    onClick: () => go(p),
    style: btn(p === page)
  }, p)), /*#__PURE__*/React.createElement("button", {
    onClick: () => go(page + 1),
    disabled: page === total,
    style: {
      ...btn(false),
      opacity: page === total ? 0.4 : 1
    }
  }, "\u203A"));
}
Object.assign(__ds_scope, { Pagination });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Pagination.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Underline tab bar. */
function Tabs({
  tabs = [],
  value,
  onChange,
  style,
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    role: "tablist",
    style: {
      display: 'flex',
      gap: 4,
      borderBottom: '1px solid var(--border-default)',
      ...style
    }
  }, rest), tabs.map(t => {
    const id = typeof t === 'string' ? t : t.value;
    const label = typeof t === 'string' ? t : t.label;
    const count = typeof t === 'object' ? t.count : undefined;
    const active = id === value;
    return /*#__PURE__*/React.createElement("button", {
      key: id,
      role: "tab",
      "aria-selected": active,
      onClick: () => onChange && onChange(id),
      style: {
        position: 'relative',
        border: 0,
        background: 'transparent',
        cursor: 'pointer',
        padding: '12px 14px',
        fontFamily: 'var(--font-sans)',
        fontSize: 14.5,
        fontWeight: active ? 700 : 500,
        color: active ? 'var(--text-primary)' : 'var(--text-secondary)',
        transition: 'color var(--dur-fast)'
      }
    }, label, count != null && /*#__PURE__*/React.createElement("span", {
      style: {
        marginLeft: 6,
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        color: 'var(--text-muted)'
      }
    }, count), /*#__PURE__*/React.createElement("span", {
      style: {
        position: 'absolute',
        left: 8,
        right: 8,
        bottom: -1,
        height: 2,
        borderRadius: 2,
        background: active ? 'var(--ink-950)' : 'transparent',
        transition: 'background var(--dur-fast)'
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// components/overlay/Dialog.jsx
try { (() => {
/** Modal dialog with backdrop. Render conditionally on `open`. */
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  width = 480,
  style
}) {
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: 'fixed',
      inset: 0,
      zIndex: 100,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(11,11,10,0.45)',
      backdropFilter: 'blur(2px)',
      padding: 20,
      animation: 'sc-fade var(--dur-base) var(--ease-out)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    onClick: e => e.stopPropagation(),
    style: {
      width: '100%',
      maxWidth: width,
      maxHeight: '90vh',
      overflow: 'auto',
      background: 'var(--surface-card)',
      borderRadius: 'var(--radius-xl)',
      boxShadow: 'var(--shadow-xl)',
      animation: 'sc-pop var(--dur-base) var(--ease-out)',
      ...style
    }
  }, (title || onClose) && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 24px 0'
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontFamily: 'var(--font-display)',
      fontSize: 20,
      fontWeight: 700,
      letterSpacing: '-0.01em'
    }
  }, title), onClose && /*#__PURE__*/React.createElement("button", {
    "aria-label": "Close",
    onClick: onClose,
    style: {
      border: 0,
      background: 'transparent',
      cursor: 'pointer',
      color: 'var(--text-muted)',
      padding: 4
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "20",
    height: "20",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M18 6 6 18M6 6l12 12"
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: '16px 24px',
      fontFamily: 'var(--font-sans)',
      fontSize: 15,
      color: 'var(--text-secondary)',
      lineHeight: 1.55
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: 10,
      padding: '8px 24px 24px'
    }
  }, footer)), /*#__PURE__*/React.createElement("style", null, `@keyframes sc-fade{from{opacity:0}to{opacity:1}}@keyframes sc-pop{from{opacity:0;transform:translateY(8px) scale(0.98)}to{opacity:1;transform:none}}`));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/overlay/Dialog.jsx", error: String((e && e.message) || e) }); }

// ui_kits/showcrew/Browse.jsx
try { (() => {
/* Search / browse talent. window.SCBrowse */
function SCBrowse({
  onNav
}) {
  const D = window.ShowCrewDesignSystem_712aba;
  const {
    TALENT,
    CATEGORIES
  } = window.SC;
  const [cat, setCat] = React.useState('Design');
  const [available, setAvailable] = React.useState(false);
  const [sort, setSort] = React.useState('Recommended');
  const [page, setPage] = React.useState(1);
  let list = TALENT.filter(t => !available || t.available);
  const Filter = ({
    title,
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      paddingBottom: 18,
      marginBottom: 18,
      borderBottom: '1px solid var(--border-subtle)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      marginBottom: 12
    }
  }, title), children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '24px 28px 8px'
    }
  }, /*#__PURE__*/React.createElement(D.Breadcrumb, {
    items: ['Explore', cat]
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      margin: '14px 0 18px',
      gap: 16,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 34,
      letterSpacing: '-0.025em',
      margin: 0
    }
  }, cat, " crews"), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      color: 'var(--text-muted)',
      margin: '6px 0 0'
    }
  }, list.length, " available \xB7 sorted by ", sort.toLowerCase())), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(D.SearchBar, {
    size: "md",
    placeholder: "Refine\u2026",
    buttonLabel: "Go",
    style: {
      width: 320,
      height: 44
    }
  }), /*#__PURE__*/React.createElement(D.Select, {
    value: sort,
    onChange: e => setSort(e.target.value),
    options: ['Recommended', 'Top rated', 'Newest', 'Lowest rate'],
    containerStyle: {
      width: 170
    }
  })))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1280,
      margin: '0 auto',
      padding: '0 28px 56px',
      display: 'grid',
      gridTemplateColumns: '240px 1fr',
      gap: 32
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      position: 'sticky',
      top: 80,
      alignSelf: 'start'
    }
  }, /*#__PURE__*/React.createElement(Filter, {
    title: "Category"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 4
    }
  }, CATEGORIES.map(c => /*#__PURE__*/React.createElement("a", {
    key: c,
    onClick: () => setCat(c),
    style: {
      fontSize: 14,
      padding: '6px 10px',
      borderRadius: 'var(--radius-sm)',
      cursor: 'pointer',
      fontWeight: cat === c ? 700 : 500,
      color: cat === c ? 'var(--ink-950)' : 'var(--text-secondary)',
      background: cat === c ? 'var(--ink-50)' : 'transparent'
    }
  }, c)))), /*#__PURE__*/React.createElement(Filter, {
    title: "Availability"
  }, /*#__PURE__*/React.createElement(D.Switch, {
    checked: available,
    onChange: setAvailable,
    label: "Available now"
  })), /*#__PURE__*/React.createElement(Filter, {
    title: "Skills"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 7,
      flexWrap: 'wrap'
    }
  }, ['Branding', 'Motion', 'Web', 'Illustration', '3D', 'Video'].map(s => /*#__PURE__*/React.createElement(D.Tag, {
    key: s,
    size: "sm"
  }, s)))), /*#__PURE__*/React.createElement(Filter, {
    title: "Budget"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(D.Input, {
    placeholder: "Min",
    size: "sm"
  }), /*#__PURE__*/React.createElement(D.Input, {
    placeholder: "Max",
    size: "sm"
  })))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 18
    }
  }, list.map(t => /*#__PURE__*/React.createElement(D.TalentCard, {
    key: t.name,
    name: t.name,
    role: t.role,
    rating: t.rating,
    reviews: t.reviews,
    skills: t.skills,
    rate: t.rate,
    available: t.available,
    coverBg: window.SC.COVERS[t.cover],
    onClick: () => onNav('profile', t)
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 36
    }
  }, /*#__PURE__*/React.createElement(D.Pagination, {
    page: page,
    total: 9,
    onChange: setPage
  })))));
}
window.SCBrowse = SCBrowse;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/showcrew/Browse.jsx", error: String((e && e.message) || e) }); }

// ui_kits/showcrew/Dashboard.jsx
try { (() => {
/* Client dashboard. window.SCDashboard */
function SCDashboard({
  onNav
}) {
  const D = window.ShowCrewDesignSystem_712aba;
  const {
    TALENT
  } = window.SC;
  const [navItem, setNavItem] = React.useState('projects');
  const navItems = [{
    id: 'projects',
    label: 'Projects',
    icon: 'M3 3h7v7H3zM14 3h7v7h-7zM14 14h7v7h-7zM3 14h7v7H3z'
  }, {
    id: 'proposals',
    label: 'Proposals',
    icon: 'M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z'
  }, {
    id: 'messages',
    label: 'Messages',
    icon: 'M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z'
  }, {
    id: 'invoices',
    label: 'Invoices',
    icon: 'M14 2v6h6M16 13H8M16 17H8M10 9H8'
  }, {
    id: 'saved',
    label: 'Saved crews',
    icon: 'M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z'
  }];
  const Icon = ({
    d
  }) => /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("path", {
    d: d
  }));
  const proposals = TALENT.slice(0, 4).map((t, i) => ({
    ...t,
    bid: t.rate,
    when: ['2h ago', '5h ago', 'Yesterday', '2d ago'][i],
    status: ['new', 'new', 'shortlisted', 'declined'][i]
  }));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '232px 1fr',
      minHeight: '100%',
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("aside", {
    style: {
      borderRight: '1px solid var(--border-default)',
      background: 'var(--surface-card)',
      padding: '20px 14px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9,
      padding: '0 8px 18px'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    width: "26",
    height: "26",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 17,
      letterSpacing: '-0.03em'
    }
  }, "Show", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-400)'
    }
  }, "Crew"))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 2
    }
  }, navItems.map(n => /*#__PURE__*/React.createElement("a", {
    key: n.id,
    onClick: () => setNavItem(n.id),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 11,
      padding: '9px 10px',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      fontSize: 14.5,
      fontWeight: navItem === n.id ? 700 : 500,
      color: navItem === n.id ? 'var(--ink-950)' : 'var(--text-secondary)',
      background: navItem === n.id ? 'var(--ink-50)' : 'transparent'
    }
  }, /*#__PURE__*/React.createElement(Icon, {
    d: n.icon
  }), n.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 22,
      padding: '0 8px'
    }
  }, /*#__PURE__*/React.createElement(D.Button, {
    variant: "signal",
    fullWidth: true,
    onClick: () => onNav('post')
  }, "Post a brief"))), /*#__PURE__*/React.createElement("main", {
    style: {
      padding: '28px 32px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 22
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)',
      margin: 0
    }
  }, "Welcome back"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 28,
      letterSpacing: '-0.02em',
      margin: '4px 0 0'
    }
  }, "Your projects")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(D.IconButton, {
    ariaLabel: "Notifications",
    variant: "secondary",
    icon: /*#__PURE__*/React.createElement(Icon, {
      d: "M18 8a6 6 0 0 0-12 0c0 7-3 9-3 9h18s-3-2-3-9M13.7 21a2 2 0 0 1-3.4 0"
    })
  }), /*#__PURE__*/React.createElement(D.Avatar, {
    name: "Aaron K",
    size: "md",
    status: "available"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 16,
      marginBottom: 24
    }
  }, [['2', 'Active briefs'], ['11', 'New proposals'], ['$18.4k', 'In escrow'], ['4.9', 'Avg crew rating']].map(([v, l]) => /*#__PURE__*/React.createElement(D.Card, {
    key: l,
    padding: "md"
  }, /*#__PURE__*/React.createElement(D.Stat, {
    value: v,
    label: l
  })))), /*#__PURE__*/React.createElement(D.Card, {
    padding: "lg",
    style: {
      marginBottom: 24
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginBottom: 14
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 20,
      margin: 0
    }
  }, "Rebrand for a climate startup"), /*#__PURE__*/React.createElement(D.Badge, {
    variant: "signal",
    dot: true
  }, "OPEN")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      color: 'var(--text-muted)',
      margin: '6px 0 0'
    }
  }, "Branding \xB7 $2,500 fixed \xB7 posted 2 days ago")), /*#__PURE__*/React.createElement(D.Button, {
    variant: "secondary",
    size: "sm"
  }, "Manage")), /*#__PURE__*/React.createElement(D.ProgressBar, {
    value: 60,
    label: "11 of 18 expected proposals",
    showValue: true
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginBottom: 12
    }
  }, /*#__PURE__*/React.createElement("h3", {
    style: {
      fontSize: 18,
      margin: 0
    }
  }, "Recent proposals"), /*#__PURE__*/React.createElement("a", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12.5,
      fontWeight: 700,
      color: 'var(--ink-950)',
      cursor: 'pointer'
    }
  }, "View all \u2192")), /*#__PURE__*/React.createElement(D.Card, {
    padding: "none"
  }, proposals.map((p, i) => /*#__PURE__*/React.createElement("div", {
    key: p.name,
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 14,
      padding: '14px 18px',
      borderBottom: i < proposals.length - 1 ? '1px solid var(--border-subtle)' : 'none'
    }
  }, /*#__PURE__*/React.createElement(D.Avatar, {
    name: p.name,
    size: "md",
    status: p.available ? 'available' : 'offline'
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      minWidth: 0
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 15
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 13,
      color: 'var(--text-muted)'
    }
  }, p.role)), /*#__PURE__*/React.createElement(D.Rating, {
    value: p.rating,
    count: p.reviews,
    size: 13
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontWeight: 700,
      fontSize: 15,
      width: 80,
      textAlign: 'right'
    }
  }, p.bid), /*#__PURE__*/React.createElement("div", {
    style: {
      width: 96,
      display: 'flex',
      justifyContent: 'center'
    }
  }, p.status === 'new' && /*#__PURE__*/React.createElement(D.Badge, {
    variant: "signal"
  }, "NEW"), p.status === 'shortlisted' && /*#__PURE__*/React.createElement(D.Badge, {
    variant: "success"
  }, "Shortlisted"), p.status === 'declined' && /*#__PURE__*/React.createElement(D.Badge, {
    variant: "neutral"
  }, "Declined")), /*#__PURE__*/React.createElement(D.Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onNav('profile', p)
  }, "View"))))));
}
window.SCDashboard = SCDashboard;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/showcrew/Dashboard.jsx", error: String((e && e.message) || e) }); }

// ui_kits/showcrew/Header.jsx
try { (() => {
/* Top navigation for the ShowCrew app. window.SCHeader */
function SCHeader({
  active = 'explore',
  onNav,
  compact = false
}) {
  const D = window.ShowCrewDesignSystem_712aba;
  const links = [{
    id: 'explore',
    label: 'Explore'
  }, {
    id: 'browse',
    label: 'Hire talent'
  }, {
    id: 'post',
    label: 'Post a brief'
  }, {
    id: 'dashboard',
    label: 'Dashboard'
  }];
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: 'sticky',
      top: 0,
      zIndex: 40,
      height: 64,
      display: 'flex',
      alignItems: 'center',
      gap: 24,
      padding: '0 28px',
      background: 'rgba(255,255,255,0.86)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav && onNav('explore'),
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10,
      cursor: 'pointer',
      textDecoration: 'none'
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    width: "30",
    height: "30",
    alt: "ShowCrew"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 19,
      letterSpacing: '-0.03em',
      color: 'var(--ink-950)'
    }
  }, "Show", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-400)'
    }
  }, "Crew"))), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: compact ? 'none' : 'flex',
      gap: 4,
      marginLeft: 8
    }
  }, links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l.id,
    onClick: () => onNav && onNav(l.id),
    style: {
      padding: '8px 12px',
      borderRadius: 'var(--radius-md)',
      cursor: 'pointer',
      textDecoration: 'none',
      fontFamily: 'var(--font-sans)',
      fontSize: 14.5,
      fontWeight: active === l.id ? 700 : 500,
      color: active === l.id ? 'var(--ink-950)' : 'var(--text-secondary)',
      background: active === l.id ? 'var(--ink-50)' : 'transparent'
    }
  }, l.label))), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav && onNav('browse'),
    style: {
      display: compact ? 'none' : 'flex',
      alignItems: 'center',
      gap: 7,
      color: 'var(--text-secondary)',
      cursor: 'pointer',
      fontSize: 14.5
    }
  }, /*#__PURE__*/React.createElement("svg", {
    width: "18",
    height: "18",
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }, /*#__PURE__*/React.createElement("circle", {
    cx: "11",
    cy: "11",
    r: "8"
  }), /*#__PURE__*/React.createElement("path", {
    d: "m21 21-4.3-4.3"
  })), "Search"), /*#__PURE__*/React.createElement("a", {
    style: {
      fontSize: 14.5,
      fontWeight: 600,
      color: 'var(--ink-950)',
      cursor: 'pointer'
    }
  }, "Sign in"), /*#__PURE__*/React.createElement(D.Button, {
    variant: "primary",
    size: "sm",
    onClick: () => onNav && onNav('post')
  }, "Get started"));
}
window.SCHeader = SCHeader;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/showcrew/Header.jsx", error: String((e && e.message) || e) }); }

// ui_kits/showcrew/Home.jsx
try { (() => {
/* Marketing homepage. window.SCHome */
function SCHome({
  onNav
}) {
  const D = window.ShowCrewDesignSystem_712aba;
  const {
    TALENT,
    CATEGORIES
  } = window.SC;
  const Eyebrow = ({
    children
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 700,
      letterSpacing: '0.12em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)'
    }
  }, children);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)'
    }
  }, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: '72px 28px 48px',
      textAlign: 'center'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'inline-flex'
    }
  }, /*#__PURE__*/React.createElement(D.Badge, {
    variant: "outline",
    dot: true
  }, "\u25CF 120,000 INDEPENDENT CREWS")), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 'clamp(40px, 6.5vw, 76px)',
      lineHeight: 0.97,
      letterSpacing: '-0.035em',
      color: 'var(--ink-950)',
      margin: '20px 0 0',
      textWrap: 'balance'
    }
  }, "Show the work.", /*#__PURE__*/React.createElement("br", null), "Hire the crew."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 19,
      color: 'var(--text-secondary)',
      maxWidth: 560,
      margin: '18px auto 0',
      lineHeight: 1.5
    }
  }, "The network for creative people who\u2019d rather show the work than pitch it. Browse independents and studios, post a brief, hire with confidence."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'center',
      marginTop: 30
    }
  }, /*#__PURE__*/React.createElement(D.SearchBar, {
    placeholder: "Search designers, editors, studios\u2026",
    buttonLabel: "Search",
    onSubmit: () => onNav('browse'),
    style: {
      margin: '0 auto'
    }
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      justifyContent: 'center',
      flexWrap: 'wrap',
      marginTop: 18
    }
  }, CATEGORIES.slice(0, 6).map(c => /*#__PURE__*/React.createElement(D.Tag, {
    key: c,
    onClick: () => onNav('browse')
  }, c)))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '24px 28px 8px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
      marginBottom: 18
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Eyebrow, null, "Trending studios"), /*#__PURE__*/React.createElement("h2", {
    style: {
      margin: '8px 0 0',
      fontSize: 30,
      letterSpacing: '-0.02em'
    }
  }, "Hand-picked, hireable now")), /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav('browse'),
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--ink-950)',
      cursor: 'pointer'
    }
  }, "View all \u2192")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gap: 18
    }
  }, TALENT.slice(0, 4).map(t => /*#__PURE__*/React.createElement(D.TalentCard, {
    key: t.name,
    name: t.name,
    role: t.role,
    rating: t.rating,
    reviews: t.reviews,
    skills: t.skills,
    rate: t.rate,
    available: t.available,
    coverBg: window.SC.COVERS[t.cover],
    onClick: () => onNav('profile', t)
  })))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '64px 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 20
    }
  }, [{
    n: '01',
    t: 'Show, don’t pitch',
    d: 'Every profile leads with real work — portfolios, not résumés.'
  }, {
    n: '02',
    t: 'Hire commission-free',
    d: 'Keep 100% of your rate. No middleman cut on either side.'
  }, {
    n: '03',
    t: 'Protected payments',
    d: 'Funds held in escrow and released only when work is approved.'
  }].map(v => /*#__PURE__*/React.createElement(D.Card, {
    key: v.n,
    padding: "lg"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 13,
      fontWeight: 700,
      color: 'var(--volt-deep)'
    }
  }, v.n), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: '12px 0 8px',
      fontSize: 21
    }
  }, v.t), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      color: 'var(--text-secondary)',
      fontSize: 15
    }
  }, v.d))))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: 1200,
      margin: '0 auto 72px',
      padding: '0 28px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-950)',
      borderRadius: 'var(--radius-2xl)',
      padding: '56px 48px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: 32,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 520
    }
  }, /*#__PURE__*/React.createElement("h2", {
    style: {
      color: 'var(--paper)',
      fontSize: 38,
      letterSpacing: '-0.025em',
      margin: 0
    }
  }, "Post a brief.", /*#__PURE__*/React.createElement("br", null), "Meet your crew in ", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--volt)'
    }
  }, "minutes.")), /*#__PURE__*/React.createElement("p", {
    style: {
      color: 'var(--ink-300)',
      fontSize: 16,
      marginTop: 14
    }
  }, "Tell us what you\u2019re making. We\u2019ll surface the right independents and studios \u2014 free to post, always.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 12
    }
  }, /*#__PURE__*/React.createElement(D.Button, {
    variant: "signal",
    size: "lg",
    onClick: () => onNav('post')
  }, "Post a brief"), /*#__PURE__*/React.createElement(D.Button, {
    variant: "inverse",
    size: "lg",
    onClick: () => onNav('browse')
  }, "Browse crews")))), /*#__PURE__*/React.createElement(SCFooter, null));
}
function SCFooter() {
  const cols = [{
    h: 'For companies',
    items: ['Hire talent', 'Post a brief', 'Discover studios', 'Enterprise']
  }, {
    h: 'For independents',
    items: ['Find work', 'Get discovered', 'Send invoices', 'ShowCrew Pro']
  }, {
    h: 'Resources',
    items: ['Blog', 'Guides', 'Hiring calculator', 'Help center']
  }, {
    h: 'Company',
    items: ['Mission', 'Careers', 'Terms', 'Privacy']
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      borderTop: '1px solid var(--border-default)',
      background: 'var(--surface-card)'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '48px 28px 32px',
      display: 'grid',
      gridTemplateColumns: '1.5fr repeat(4, 1fr)',
      gap: 28
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 9
    }
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/logo-mark.svg",
    width: "28",
    height: "28",
    alt: ""
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-display)',
      fontWeight: 900,
      fontSize: 18,
      letterSpacing: '-0.03em'
    }
  }, "Show", /*#__PURE__*/React.createElement("span", {
    style: {
      color: 'var(--ink-400)'
    }
  }, "Crew"))), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)',
      marginTop: 14
    }
  }, "The network for creative intelligence.")), cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      marginBottom: 12
    }
  }, c.h), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 9
    }
  }, c.items.map(i => /*#__PURE__*/React.createElement("a", {
    key: i,
    style: {
      fontSize: 14,
      color: 'var(--text-secondary)',
      cursor: 'pointer'
    }
  }, i)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1200,
      margin: '0 auto',
      padding: '0 28px 36px',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      color: 'var(--text-muted)'
    }
  }, "\xA9 2026 ShowCrew Inc."));
}
window.SCHome = SCHome;
window.SCFooter = SCFooter;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/showcrew/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/showcrew/PostBrief.jsx
try { (() => {
/* Project / job posting flow. window.SCPostBrief */
function SCPostBrief({
  onNav
}) {
  const D = window.ShowCrewDesignSystem_712aba;
  const [step, setStep] = React.useState(1);
  const [cat, setCat] = React.useState('Branding');
  const [budget, setBudget] = React.useState('fixed');
  const total = 3;
  const titles = {
    1: 'What do you need made?',
    2: 'Budget & timeline',
    3: 'Review & post'
  };
  const StepDot = ({
    n,
    label
  }) => /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("span", {
    style: {
      width: 26,
      height: 26,
      borderRadius: 999,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'var(--font-mono)',
      fontSize: 12,
      fontWeight: 700,
      background: step >= n ? 'var(--ink-950)' : 'var(--ink-100)',
      color: step >= n ? step === n ? 'var(--volt)' : 'var(--paper)' : 'var(--text-muted)'
    }
  }, step > n ? '✓' : n), /*#__PURE__*/React.createElement("span", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.06em',
      textTransform: 'uppercase',
      color: step >= n ? 'var(--ink-950)' : 'var(--text-muted)'
    }
  }, label));
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 760,
      margin: '0 auto',
      padding: '40px 28px 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 18,
      marginBottom: 28,
      flexWrap: 'wrap'
    }
  }, /*#__PURE__*/React.createElement(StepDot, {
    n: 1,
    label: "Project"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 1,
      background: 'var(--border-strong)'
    }
  }), /*#__PURE__*/React.createElement(StepDot, {
    n: 2,
    label: "Budget"
  }), /*#__PURE__*/React.createElement("span", {
    style: {
      width: 24,
      height: 1,
      background: 'var(--border-strong)'
    }
  }), /*#__PURE__*/React.createElement(StepDot, {
    n: 3,
    label: "Review"
  })), /*#__PURE__*/React.createElement(D.Badge, {
    variant: "outline"
  }, "STEP ", step, " / ", total), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 34,
      letterSpacing: '-0.025em',
      margin: '12px 0 24px'
    }
  }, titles[step]), /*#__PURE__*/React.createElement(D.Card, {
    padding: "lg"
  }, step === 1 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      marginBottom: 10
    }
  }, "Category"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, ['Branding', 'Web design', 'Motion', 'Illustration', 'Video', '3D'].map(c => /*#__PURE__*/React.createElement(D.Tag, {
    key: c,
    selected: cat === c,
    onClick: () => setCat(c)
  }, c)))), /*#__PURE__*/React.createElement(D.Input, {
    label: "Project title",
    placeholder: "e.g. Rebrand for a climate startup"
  }), /*#__PURE__*/React.createElement(D.Textarea, {
    label: "Brief",
    rows: 5,
    placeholder: "What are you making? Share goals, deliverables, and any references\u2026"
  })), step === 2 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.08em',
      textTransform: 'uppercase',
      color: 'var(--text-secondary)',
      marginBottom: 10
    }
  }, "Budget type"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 20
    }
  }, /*#__PURE__*/React.createElement(D.Radio, {
    name: "b",
    checked: budget === 'fixed',
    onChange: () => setBudget('fixed'),
    label: "Fixed price"
  }), /*#__PURE__*/React.createElement(D.Radio, {
    name: "b",
    checked: budget === 'hourly',
    onChange: () => setBudget('hourly'),
    label: "Hourly"
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(D.Input, {
    label: "Budget",
    iconLeft: /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontWeight: 700
      }
    }, "$"),
    placeholder: "2,500"
  }), /*#__PURE__*/React.createElement(D.Select, {
    label: "Timeline",
    options: ['Under 1 week', '1–2 weeks', '1 month', 'Ongoing']
  })), /*#__PURE__*/React.createElement(D.Checkbox, {
    checked: true,
    label: "Only show crews available now",
    onChange: () => {}
  })), step === 3 && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 16
    }
  }, /*#__PURE__*/React.createElement(Row, {
    k: "Category",
    v: cat
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Title",
    v: "Rebrand for a climate startup"
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Budget",
    v: budget === 'fixed' ? '$2,500 fixed' : '$120 / hr'
  }), /*#__PURE__*/React.createElement(Row, {
    k: "Timeline",
    v: "1\u20132 weeks"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--ink-50)',
      borderRadius: 'var(--radius-md)',
      padding: 16,
      display: 'flex',
      gap: 12,
      alignItems: 'center'
    }
  }, /*#__PURE__*/React.createElement(D.Avatar, {
    name: "S C",
    size: "md",
    status: "available"
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 14,
      color: 'var(--text-secondary)'
    }
  }, /*#__PURE__*/React.createElement("strong", {
    style: {
      color: 'var(--text-primary)'
    }
  }, "38 crews"), " match this brief. We\u2019ll notify them the moment you post."))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      marginTop: 28
    }
  }, /*#__PURE__*/React.createElement(D.Button, {
    variant: "ghost",
    onClick: () => step === 1 ? onNav('explore') : setStep(step - 1)
  }, step === 1 ? 'Cancel' : 'Back'), step < total ? /*#__PURE__*/React.createElement(D.Button, {
    variant: "primary",
    onClick: () => setStep(step + 1)
  }, "Continue") : /*#__PURE__*/React.createElement(D.Button, {
    variant: "signal",
    onClick: () => onNav('dashboard')
  }, "Post brief")))));
  function Row({
    k,
    v
  }) {
    return /*#__PURE__*/React.createElement("div", {
      style: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '12px 0',
        borderBottom: '1px solid var(--border-subtle)'
      }
    }, /*#__PURE__*/React.createElement("span", {
      style: {
        fontFamily: 'var(--font-mono)',
        fontSize: 11,
        fontWeight: 700,
        letterSpacing: '0.08em',
        textTransform: 'uppercase',
        color: 'var(--text-muted)'
      }
    }, k), /*#__PURE__*/React.createElement("span", {
      style: {
        fontSize: 15,
        fontWeight: 600,
        color: 'var(--text-primary)'
      }
    }, v));
  }
}
window.SCPostBrief = SCPostBrief;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/showcrew/PostBrief.jsx", error: String((e && e.message) || e) }); }

// ui_kits/showcrew/Profile.jsx
try { (() => {
/* Talent profile. window.SCProfile */
function SCProfile({
  onNav,
  talent
}) {
  const D = window.ShowCrewDesignSystem_712aba;
  const t = talent || window.SC.TALENT[0];
  const [tab, setTab] = React.useState('work');
  const [saved, setSaved] = React.useState(false);
  const Thumb = window.SCThumb;
  const reviews = [{
    who: 'Vontélle Eyewear',
    role: 'Brand lead',
    stars: 5,
    text: 'Delivered a full rebrand in 9 days. The motion work alone was worth it — total pro.'
  }, {
    who: 'Studio Maru',
    role: 'Founder',
    stars: 5,
    text: 'Clear communication, zero hand-holding. Shipped exactly the direction we pitched the board.'
  }, {
    who: 'Northwave',
    role: 'Marketing',
    stars: 4,
    text: 'Great eye and very fast. Would happily book again for the next campaign.'
  }];
  return /*#__PURE__*/React.createElement("div", {
    style: {
      background: 'var(--surface-page)',
      minHeight: '100%'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      height: 200,
      background: window.SC.COVERS[t.cover]
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 1080,
      margin: '0 auto',
      padding: '0 28px 64px'
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'flex-end',
      gap: 20,
      marginTop: -44
    }
  }, /*#__PURE__*/React.createElement(D.Avatar, {
    name: t.name,
    size: "xl",
    square: true,
    style: {
      boxShadow: '0 0 0 4px var(--surface-page)'
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1,
      paddingBottom: 4
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: 30,
      letterSpacing: '-0.02em',
      margin: 0
    }
  }, t.name), t.available && /*#__PURE__*/React.createElement(D.Badge, {
    variant: "signal",
    dot: true
  }, "AVAILABLE"), /*#__PURE__*/React.createElement(D.Badge, {
    variant: "solid"
  }, "TOP RATED")), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: '4px 0 0',
      color: 'var(--text-secondary)',
      fontSize: 15.5
    }
  }, t.role, " \xB7 ", t.loc)), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 10,
      paddingBottom: 4
    }
  }, /*#__PURE__*/React.createElement(D.IconButton, {
    ariaLabel: "Save",
    variant: "secondary",
    onClick: () => setSaved(!saved),
    icon: /*#__PURE__*/React.createElement("svg", {
      width: "18",
      height: "18",
      viewBox: "0 0 24 24",
      fill: saved ? 'currentColor' : 'none',
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round"
    }, /*#__PURE__*/React.createElement("path", {
      d: "M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
    }))
  }), /*#__PURE__*/React.createElement(D.Button, {
    variant: "secondary"
  }, "Message"), /*#__PURE__*/React.createElement(D.Button, {
    variant: "primary",
    onClick: () => onNav('post')
  }, "Hire ", t.name.split(' ')[0]))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 40,
      margin: '28px 0 8px',
      padding: '20px 0',
      borderTop: '1px solid var(--border-default)',
      borderBottom: '1px solid var(--border-default)'
    }
  }, /*#__PURE__*/React.createElement(D.Stat, {
    value: t.rating.toFixed(1),
    label: "Rating",
    sub: `${t.reviews} reviews`
  }), /*#__PURE__*/React.createElement(D.Stat, {
    value: t.rate,
    label: "From",
    sub: "per project"
  }), /*#__PURE__*/React.createElement(D.Stat, {
    value: "98%",
    label: "On time"
  }), /*#__PURE__*/React.createElement(D.Stat, {
    value: "2h",
    label: "Responds in"
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      flex: 1
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      alignSelf: 'center'
    }
  }, /*#__PURE__*/React.createElement(D.Rating, {
    value: t.rating,
    count: t.reviews,
    size: 18
  }))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 18
    }
  }, /*#__PURE__*/React.createElement(D.Tabs, {
    tabs: [{
      label: 'Work',
      value: 'work',
      count: 24
    }, {
      label: 'Reviews',
      value: 'reviews',
      count: t.reviews
    }, {
      label: 'About',
      value: 'about'
    }],
    value: tab,
    onChange: setTab
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 24
    }
  }, tab === 'work' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'grid',
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: 14
    }
  }, Array.from({
    length: 9
  }).map((_, i) => /*#__PURE__*/React.createElement(Thumb, {
    key: i,
    cover: i,
    label: ['Identity', 'Motion reel', 'Web', 'Packaging', 'Editorial', 'Type', 'Brand film', 'Campaign', 'Logo suite'][i]
  }))), tab === 'reviews' && /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      flexDirection: 'column',
      gap: 12,
      maxWidth: 720
    }
  }, reviews.map((r, i) => /*#__PURE__*/React.createElement(D.Card, {
    key: i,
    padding: "md"
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: 8
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      alignItems: 'center',
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(D.Avatar, {
    name: r.who,
    size: "sm"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    style: {
      fontWeight: 700,
      fontSize: 14.5
    }
  }, r.who), /*#__PURE__*/React.createElement("div", {
    style: {
      fontSize: 12.5,
      color: 'var(--text-muted)'
    }
  }, r.role))), /*#__PURE__*/React.createElement(D.Rating, {
    value: r.stars,
    showValue: false,
    size: 14
  })), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: 15,
      color: 'var(--text-secondary)'
    }
  }, r.text)))), tab === 'about' && /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 680
    }
  }, /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: 17,
      color: 'var(--ink-800)',
      lineHeight: 1.6
    }
  }, t.name, " is a ", t.role.toLowerCase(), " working with ambitious brands and studios worldwide. Ten years across identity, motion and art direction \u2014 leading with the work, never the deck."), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: 'var(--font-mono)',
      fontSize: 11,
      fontWeight: 700,
      letterSpacing: '0.1em',
      textTransform: 'uppercase',
      color: 'var(--text-muted)',
      margin: '24px 0 12px'
    }
  }, "Skills"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: 'flex',
      gap: 8,
      flexWrap: 'wrap'
    }
  }, [...t.skills, 'Art direction', 'Strategy', 'After Effects', 'Cinema 4D'].map(s => /*#__PURE__*/React.createElement(D.Tag, {
    key: s
  }, s)))))));
}
window.SCProfile = SCProfile;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/showcrew/Profile.jsx", error: String((e && e.message) || e) }); }

// ui_kits/showcrew/data.jsx
try { (() => {
/* Shared mock data + portfolio placeholder for the ShowCrew UI kit.
   Registers globals: window.SC (data) and window.SCThumb (placeholder). */
const {
  useState: _us
} = React;

// Deterministic monochrome cover backgrounds (no generated images).
const COVERS = ['linear-gradient(135deg,#232320,#565650)', 'linear-gradient(135deg,#3A3A36,#99998E)', 'linear-gradient(120deg,#0B0B0A,#3A3A36)', 'linear-gradient(135deg,#D6D6CD,#99998E)', 'linear-gradient(160deg,#161614 60%,#A6D617)', 'linear-gradient(135deg,#565650,#232320)', 'linear-gradient(120deg,#99998E,#3A3A36)', 'linear-gradient(135deg,#0B0B0A,#232320)'];
const TALENT = [{
  name: 'Mara Voss',
  role: 'Brand & Motion Designer',
  loc: 'Berlin',
  rating: 4.9,
  reviews: 37,
  rate: '$1,200',
  skills: ['Branding', 'Motion', 'Figma'],
  available: true,
  cover: 0
}, {
  name: 'Studio Nine',
  role: 'Independent Design Studio',
  loc: 'Lisbon',
  rating: 5.0,
  reviews: 24,
  rate: '$6,500',
  skills: ['Web design', 'Framer', 'Art direction'],
  available: true,
  cover: 2
}, {
  name: 'Leo Park',
  role: 'Video Editor & Colorist',
  loc: 'Seoul',
  rating: 4.8,
  reviews: 52,
  rate: '$850',
  skills: ['Editing', 'DaVinci', 'Color'],
  available: false,
  cover: 1
}, {
  name: 'Ada Nwosu',
  role: 'Product Designer',
  loc: 'Remote',
  rating: 4.9,
  reviews: 41,
  rate: '$1,400',
  skills: ['Product', 'Prototyping', 'UX'],
  available: true,
  cover: 4
}, {
  name: 'Hex Collective',
  role: 'Creative Dev Studio',
  loc: 'New York',
  rating: 4.9,
  reviews: 18,
  rate: '$8,000',
  skills: ['WebGL', 'React', 'Three.js'],
  available: false,
  cover: 3
}, {
  name: 'June Okafor',
  role: 'Illustrator',
  loc: 'London',
  rating: 5.0,
  reviews: 63,
  rate: '$700',
  skills: ['Illustration', 'Editorial', 'Type'],
  available: true,
  cover: 6
}, {
  name: 'Tomás Reyes',
  role: 'Sound Designer',
  loc: 'Mexico City',
  rating: 4.7,
  reviews: 29,
  rate: '$950',
  skills: ['Sound', 'Mixing', 'Logic'],
  available: true,
  cover: 5
}, {
  name: 'Nadia Sol',
  role: '3D & Type Designer',
  loc: 'Amsterdam',
  rating: 4.9,
  reviews: 33,
  rate: '$1,100',
  skills: ['3D', 'Blender', 'Type'],
  available: false,
  cover: 7
}];
const CATEGORIES = ['Design', 'Engineering', 'Marketing', 'Music & Audio', 'Video & Animation', 'Social media', 'Product', 'Writing'];
window.SC = {
  COVERS,
  TALENT,
  CATEGORIES
};

// Portfolio tile placeholder — monochrome gradient + mono caption.
function SCThumb({
  cover = 0,
  label,
  ratio = '4 / 3',
  big = false,
  style
}) {
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      borderRadius: 'var(--radius-md)',
      overflow: 'hidden',
      position: 'relative',
      background: window.SC.COVERS[cover % window.SC.COVERS.length],
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: 'absolute',
      left: 10,
      bottom: 9,
      fontFamily: 'var(--font-mono)',
      fontSize: big ? 12 : 10,
      fontWeight: 700,
      letterSpacing: '0.06em',
      color: 'rgba(255,255,255,0.92)',
      textTransform: 'uppercase'
    }
  }, label));
}
window.SCThumb = SCThumb;
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/showcrew/data.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Rating = __ds_scope.Rating;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.TalentCard = __ds_scope.TalentCard;

__ds_ns.ProgressBar = __ds_scope.ProgressBar;

__ds_ns.Skeleton = __ds_scope.Skeleton;

__ds_ns.Spinner = __ds_scope.Spinner;

__ds_ns.Toast = __ds_scope.Toast;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.SearchBar = __ds_scope.SearchBar;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Pagination = __ds_scope.Pagination;

__ds_ns.Tabs = __ds_scope.Tabs;

__ds_ns.Dialog = __ds_scope.Dialog;

})();
