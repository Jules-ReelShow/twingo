# ShowCrew — Design System

**ShowCrew** is the network for creative intelligence — a marketplace where independent
designers, studios, editors, illustrators, and other makers **show the work** and get hired
for it. It serves two sides equally: **companies** posting briefs and hiring crews, and
**independents** getting discovered and paid commission-free. Think "Contra for everyone who
makes things": portfolio-first, anti-résumé, premium but human.

This repository is the brand's design system: typography, color, spacing, motion, reusable
React UI primitives, full-screen product recreations, and brand/voice guidance. An automated
compiler indexes it into a runtime library (`window.ShowCrewDesignSystem_712aba`) that
consuming projects load via the single `styles.css` entry point + `_ds_bundle.js`.

> **Namespace:** `ShowCrewDesignSystem_712aba` — use `const { Button } = window.ShowCrewDesignSystem_712aba` in card/kit HTML.

## Sources & provenance
ShowCrew is an **original brand created for this project.** It was briefed as a Contra-style
creative/design network with a *clean, minimal, monochrome* aesthetic. The work was informed
by — but does **not** copy — four reference marketplaces supplied as PDFs (homepage text only,
no visual assets):

- `uploads/contra.pdf` — Contra (creative network; "the network for creative intelligence")
- `uploads/upwork.pdf` — Upwork (general freelance; plans, escrow, vetting)
- `uploads/fiverr.pdf` — Fiverr (services marketplace; categories, AI services)
- `uploads/soundbetter.pdf` — SoundBetter (music-production marketplace; proposals flow)

No codebase, Figma, or brand assets were provided — so colors, type, logo, and components
below are an original system, not a recreation of any of the above.

---

## CONTENT FUNDAMENTALS — how ShowCrew writes

**Voice:** maker-to-maker. Direct, confident, a little dry. We sound like a sharp creative
director, not a SaaS landing page. Short sentences. Verbs first.

- **Person:** Address the reader as **you**. The brand refers to itself as **we** sparingly.
  ("We’ll notify matching crews.")
- **Casing:** Sentence case for headlines and UI. **Mono UPPERCASE** only for eyebrows,
  labels, metadata, and badges (e.g. `TRENDING STUDIOS`, `AVAILABLE`, `STEP 2 / 3`).
- **Tone:** Plainspoken and a touch bold. Headlines often use a two-beat rhythm:
  *"Show the work. Hire the crew."* · *"Post a brief. Meet your crew in minutes."*
- **Vocabulary:** the people are **crews / independents / studios** (not "freelancers,"
  "resources," or "talent pool"). Work is **shown**, not "pitched." Jobs are **briefs.**
- **Numbers:** concrete and specific — "120,000 independent crews," "responds in 2h,"
  "commission-free." Mono font for all figures, rates, and counts.
- **Emoji:** none. The only decorative glyph is a small **`●` bullet/dot** used in mono
  eyebrows and status pills. Unicode arrows (`→`, `‹ ›`, `✓`) are used functionally.
- **Avoid:** corporate-speak ("leverage," "synergy," "human capital," "best-in-class,"
  "solutions"), exclamation marks, and hype. See `guidelines/brand-voice.card.html` for
  say/don't-say pairs.

**Examples**
- Hero: *"Show the work. Hire the crew."*
- Sub: *"The network for creative people who’d rather show the work than pitch it."*
- CTA: *"Post a brief"* · *"Browse crews"* · *"Get started"*
- Empty/affirming: *"38 crews match this brief. We’ll notify them the moment you post."*

---

## VISUAL FOUNDATIONS

**Overall vibe:** editorial, monochrome, confident. A warm-paper canvas, near-black ink, a
big grotesque display face, and **one** electric accent used like a highlighter. It should
feel like a well-art-directed print magazine that happens to be a product.

**Color** (`tokens/colors.css`)
- **Monochrome canvas.** A 14-step warm-neutral ink ramp from `--paper` (#FFFFFF) and
  `--ink-25` (#FAFAF7, the default page bg) down to `--ink-950` (#0B0B0A, primary ink &
  primary buttons). Neutrals carry a faint warm tint for a paper feel — not cold gray.
- **One signal: Volt** (`--volt` #CDFF47), an electric chartreuse. Used **sparingly** —
  status dots, "available" badges, focus/active accents, a single highlighted word in a dark
  CTA, the selection highlight. Never as a background wash or for primary buttons.
- **Primary action is ink-black**, not the accent. Volt is the *signal*, ink is the *action*.
- **Semantic** colors (success/warning/danger/info) are desaturated to sit quietly on the
  monochrome canvas, always paired with a tinted `-bg`.

**Type** (`tokens/typography.css`)
- **Display & headings: Archivo** (grotesque), weights 700–900, tight tracking
  (`-0.02em` to `-0.035em`), line-height down to `0.97` on the hero. Big and confident.
- **Body & UI: Hanken Grotesk**, 400–700, 16px / 1.55 body.
- **Labels, metadata, prices, eyebrows, counts: Space Mono**, 700, uppercase,
  `0.12em` tracking. This mono layer is a core part of the brand texture.
- Scale: display 76 → 56 → h1 40 → h2 30 → h3 22 → body 16 → label 12.
- *(Fonts loaded from Google Fonts CDN — see "Substitutions" below.)*

**Spacing & layout** (`tokens/spacing.css`)
- 4px base grid (`--space-1`…`--space-32`). Containers max ~1200px, 28px gutters.
- Generous vertical rhythm between marketing sections (~64–80px). Dense, tabular spacing
  inside product surfaces (dashboard rows, tables).

**Shape & elevation** (`tokens/effects.css`)
- **Radii:** moderate, not pill-everything. Cards `14px`, inputs/buttons surfaces `10px`,
  small chips `6px`. Buttons and tags are fully **pill** (`999px`). Big banners `28px`.
- **Borders:** hairline `1px` in `--border-default` (#E2E2DA) is the primary separator. The
  system leans on **lines, not shadows.**
- **Shadows:** very soft and low-contrast (monochrome — no heavy drop shadows). `--shadow-sm`
  at rest on cards, `--shadow-lg` on hover lift. Modals use `--shadow-xl`.
- **Cards:** white surface, hairline border, 14px radius, soft shadow. Interactive cards lift
  `translateY(-2px)` + deepen shadow + darken border on hover.

**Backgrounds & imagery**
- No gradients-as-decoration, no textures, no patterns. The canvas is flat warm paper.
- Portfolio/work imagery is the *only* color in the product — shown in **monochrome duotone
  gradient tiles** as placeholders here (`SCThumb`), captioned in mono. Real product would use
  creators' actual cover images; cover art is where vibrancy lives, the chrome stays neutral.
- A single dark CTA band (`--ink-950`) per marketing page provides contrast, with one volt
  word inside it.

**Motion** (`tokens/effects.css`)
- Snappy and restrained. `--ease-out` (custom cubic-bezier) for most transitions,
  120–200ms. A gentle `--ease-spring` exists for playful moments but is used rarely.
- **Hover:** cards lift + shadow; links underline (offset 2px); nav items get a faint
  `--ink-50` background. **Press:** buttons scale to `0.97`, icon buttons to `0.92`.
- Modals fade + pop-in (`translateY(8px) scale(0.98)` → rest). No bounces, no infinite loops.
- Reduced-motion friendly: end states are the base styles.

**Focus & a11y**
- Focus ring is a 2px ink outline at 2px offset. `::selection` is volt-on-ink.

---

## ICONOGRAPHY

ShowCrew uses **[Lucide](https://lucide.dev)** — clean open-source line icons, `1.75px`
stroke, rounded caps/joins, monochrome. It matches the minimal, editorial tone (outline, not
filled; geometric, not playful). See `guidelines/brand-icons.card.html`.

- **Delivery:** linked from CDN (`https://unpkg.com/lucide@latest`) in cards; inlined as small
  SVG paths inside components (so primitives stay dependency-free). No icon font, no sprite.
- **Color:** icons inherit `currentColor` — almost always `--ink-900`/`--ink-950`, or
  `--text-muted` for secondary. A single icon may sit on a volt pill for a CTA affordance.
- **Common glyphs:** `search`, `briefcase`, `star` (rating uses a filled custom star),
  `message-circle`, `bookmark` (save), `layout-grid`, `sliders-horizontal`, `arrow-up-right`,
  `bell`, `file-text`, `x`/`chevron` for controls.
- **Emoji:** not used. **Unicode** is used functionally only: `●` (status/eyebrow dot),
  `→ ‹ › ✓ /` (nav, breadcrumbs, steps).
- **Substitution flag:** Lucide is an original-match choice (no brand icon set was provided).
  Swap freely if you adopt a licensed set.

> **Substitutions to confirm with the brand owner:** (1) **Fonts** — Archivo / Hanken Grotesk
> / Space Mono are Google Fonts stand-ins chosen to fit the brief; provide licensed font files
> to self-host. (2) **Icons** — Lucide as above. (3) **Logo** — `assets/logo-mark.svg` is an
> original minimal "stacked frames + volt dot" mark made for ShowCrew; treat as a starting
> point, not a finished identity.

---

## INDEX — what's in this repo

**Entry / tokens**
- `styles.css` — the one file consumers link (`@import`s everything below).
- `tokens/fonts.css` · `colors.css` · `typography.css` · `spacing.css` · `effects.css` · `base.css`

**Assets** (`assets/`)
- `logo-mark.svg`, `logo-mark-volt.svg` — the ShowCrew mark (ink + volt variants).

**Foundation cards** (`guidelines/`, shown in the Design System tab)
- Colors: ink ramp · volt signal · semantic status
- Type: display · body · mono labels · type scale
- Spacing: spacing scale · radii & shadows
- Brand: logo & wordmark · voice & tone · iconography

**Components** (`components/`, namespace `ShowCrewDesignSystem_712aba`) — 25 primitives
- `forms/` — Button, IconButton, Input, Textarea, Select, Checkbox, Radio, Switch, SearchBar
- `display/` — Avatar, Badge, Tag, Card, Rating, Stat, **TalentCard**
- `feedback/` — Toast, Tooltip, ProgressBar, Spinner, Skeleton
- `navigation/` — Tabs, Pagination, Breadcrumb
- `overlay/` — Dialog

  Each directory has a `*.card.html` demo. Each component has `Name.jsx` + `Name.d.ts` +
  `Name.prompt.md`. Starting-point primitives: Button, SearchBar, TalentCard.

**UI kit** (`ui_kits/showcrew/`) — interactive recreation of the ShowCrew web app
- `index.html` — full click-through (home → browse → profile → post → dashboard) · Starting Point
- Screens: `Home.jsx`, `Browse.jsx`, `Profile.jsx`, `PostBrief.jsx`, `Dashboard.jsx`
- Shared: `Header.jsx`, `data.jsx` (mock data + `SCThumb` placeholder)
- Per-screen Design System cards: `home.html`, `browse.html`, `profile.html`, `post.html`, `dashboard.html`
- `README.md` — kit notes.

**`SKILL.md`** — Agent-Skills wrapper so this system can be used in Claude Code.
