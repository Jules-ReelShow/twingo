# ShowCrew Design System

**ShowCrew** is a marketplace to **hire vetted crew and rent gear for any production** — from a one-day shoot to a full series. Its design language is a *quiet, editorial marketplace system*: a white canvas, one near-black navy ink, and brand energy that lives in micro-accents (lime, vermilion, chartreuse) — never page-wide fills. Built on **Inter & Inter Tight**. Voice: "Find your crew. Build the show."

## Sources
Reconstructed from the canonical reference the team provided:
- `uploads/ShowCrew Design System.html` — the **Design & Color System** doc (colors, type, components, tokens, logo). This is the ground truth for everything in this system.

The doc notes ShowCrew is *"built on the Contra token set."*

> **Note on Twingo:** the brief was titled "ShowCrew x Twingo" and also included Twingo product files (`uploads/Twingo.html`, `app.jsx`, `business.jsx`). Twingo is a **separate product with a completely different visual language** (dark, gradient, Space Grotesk) and is **not** part of this system — the ShowCrew reference is explicitly the design system, so this project follows it exclusively. If Twingo should be folded in as a sub-brand, let me know and I'll add it as a separate token theme + kit.

---

## Content fundamentals
- **Voice:** confident, plain, production-native. Imperative headlines — "Find your crew", "Build the show", "Post a job", "Browse crew".
- **Casing:** sentence case for headings and body; **UPPERCASE only** for the 12px eyebrow labels (0.06em tracking) and small mono meta.
- **Numbers are proof:** "Trusted by 12,000 productions". Concrete, never vague.
- **No emoji.** No exclamatory marketing fluff. The tone is understated and editorial — the design carries the energy, not the copy.
- **Roles & bylines** are first-class: listings read "Mara Voss · Director", "Leo Park · DP".

## Visual foundations
- **White canvas.** `#FFFFFF` page, one near-black navy ink `#1C212B` for text and dark button fills, `#0D0A0A` for imagery/max contrast. No dark mode.
- **Brand energy in micro-accents only.** Lime `#B4FF6A` (highlight, selection, marker sweep), vermilion `#FA3B02` (signature accent, focus ring), vermilion-clay `#D86447`, chartreuse `#CDD91C` (status "go" dot). These appear in small chips, thumbnails and photography — **never as page-wide fills**.
- **Type:** **Inter Tight** for display & headings (weights 500–700, tight −0.02em/−0.03em tracking, line-height 1.05–1.2); **Inter** for body & UI (400–700, 1.55 reading / 1.2 UI); **JetBrains Mono** for hex, meta and code.
- **Borders do the work.** Hairline `#E7E9EE` dividers and card edges everywhere; `#D4D7DE` for inputs, chips and hover borders. Shadows are **soft, near-black and rare** (`shadow-sm/md/lg` at 5/7/10% opacity) — used mainly on card hover and input focus.
- **Corners are generous:** 8 (sm) · 12 (inputs) · 16 (cards) · 24 (large panels) · 999 (pills). Buttons, chips and badges are always full pills.
- **Signature marker sweep:** a lime rectangle rotated −1.2° sitting behind a key word in a headline (the editorial highlight motif).
- **Motion:** short and calm — 0.12s nav/hover tints, 0.16s card lifts & borders, no bounce. Cards lift −3px on hover; buttons press +1px on `:active`. Respects `prefers-reduced-motion`.
- **Frosted header:** the sticky header uses `saturate(180%) blur(12px)` over 88%-white.
- **Layout:** 1160px container, 24px gutters, 4px spacing base (8/16/24/48/80 the common steps).
- **Backgrounds:** flat white or `#F5F7FA` section tints — no textures, no gradients on the page itself (gradients appear only as placeholder card thumbnails).

## Iconography
- **The source defines no icon set.** ShowCrew's only marks are the **logo** and small **status dots** (colored 7–10px circles inside badges/chips). There is no icon font, no SVG icon library, no emoji, no unicode glyphs.
- Accordingly, this system ships **no `Icon` component** — status is communicated with colored dots (`Badge dot`) and the interface leans on type and layout. If a future surface needs a true icon set, add one as a documented, flagged addition (a thin editorial line set such as Lucide would fit the weight) — do not invent one silently.
- **Logo:** two stacked frames (a shot and its reverse) with a chartreuse focus dot, in a near-black rounded tile. Pairs with the Inter Tight wordmark, "Crew" set in grey. Provided verbatim as `assets/showcrew-mark.svg` and the `BrandMark` component — **do not redraw it**.

---

## Components (`components/core/`)
Exactly the primitives the source defines, exported under the bundle namespace:
- **BrandMark** — logo mark + optional "ShowCrew" wordmark.
- **Button** — pill button: primary (ink), secondary (bordered), lime.
- **Badge** — status pill: paid/verified, live, new, available (optional dot).
- **FilterChip** — bordered toggle chip; ink fill when active.
- **Input** — text field; border lifts to ink + soft shadow on focus.
- **ProjectCard** — marketplace listing card (thumbnail, title, byline + avatar).
- **Card** / **Eyebrow** — hairline panel and the uppercase section label.

## UI kits (`ui_kits/`)
- **marketplace/** — the ShowCrew browse experience (`ShowCrewSite.jsx`): header, hero with search + marker sweep, category filter chips (live filtering), featured-makers listing grid, post-a-job CTA, footer.

## Foundations (`guidelines/`)
Specimen cards for the Design System tab — Colors (ink, surfaces, brand accents, functional), Type (families, scale), Spacing (radius, elevation, 4px scale), Brand (logo, marker sweep).

## Assets (`assets/`)
- `showcrew-mark.svg` — the real ShowCrew logo mark.

## Index / manifest
- `styles.css` — root entry; `@import`s the token files.
- `tokens/` — `fonts.css`, `colors.css`, `typography.css`, `spacing.css`, `effects.css`.
- `components/core/` — the primitives above (`.jsx` + `.d.ts` + `.prompt.md`, one `core.card.html`).
- `ui_kits/marketplace/` — the product recreation.
- `guidelines/` — foundation specimen cards.
- `assets/` — logo mark.
- `SKILL.md` — Agent-Skills entry point.
- `_ds_bundle.js`, `_ds_manifest.json` — generated; do not edit.

## Fonts
Inter, Inter Tight and JetBrains Mono are all **Google Fonts**, loaded via `@import` in `tokens/fonts.css` — no local binaries, no substitutions.
