# Twingo — Prompt for Claude Design

Copy everything in the code block below into Claude Design.

```
Build a marketing + product website for Twingo, a marketplace where influencers license their face/likeness to AI content creators and brands — think Fiverr/Upwork, but for AI face-licensing.

DESIGN SYSTEM — FOLLOW EXACTLY, NO DEVIATIONS
Twingo shares its design system with our sister product ShowCrew. Do not invent new colors, fonts, radii, or component styles. Reuse these tokens verbatim:

Fonts: "Inter Tight" (weights 500–700, tracking -0.02em) for all display/headings; "Inter" (weights 400–700) for body and UI. Load both from Google Fonts.

Color tokens:
- --bg: #FFFFFF (page canvas, white — not off-white/cream)
- --ink: #1C212B (primary text, dark button fill)
- --ink-black: #0D0A0A (deepest, imagery/max contrast)
- --ink-hover: #2C313D (primary button hover)
- --sec: #5A5B60 (secondary/muted text)
- --ter: #8E8E93 (tertiary/de-emphasized meta)
- --surface: #F5F7FA (section tint, card fill)
- --surface-muted: #EDEFF3 (avatars, deeper fill)
- --border: #E7E9EE (hairline dividers, card borders)
- --border-strong: #D4D7DE (inputs, chips, hover borders)
- --lime: #B4FF6A (brand accent — highlight sweep behind key words, selection state, "go" indicators — use sparingly, never as a page-wide fill)
- --vermilion: #FA3B02 (signature brand accent — focus rings, small UI highlights, live/status badges — sparingly)
- --clay: #D86447 (softer vermilion variant for gradients)
- --chartreuse: #CDD91C (secondary status accent)
- --success: #16A34A / badge-paid bg #E6F7EC / badge-paid fg #12894B

Type scale: Display 56px/700/-0.03em, H1 44px/600/-0.02em, H2 (section) 34px/600/-0.02em, H3 22px/600, Body-lg 18px/400/1.55, Body 16px/400/1.55, Small/UI 14px/500, Eyebrow/label 12px/600/0.06em/uppercase (color --sec).

Components — match exactly:
- Buttons: fully rounded pill (border-radius: 999px), padding 11px 20px, font-weight 600, 14px. Primary = ink fill/white text, hover ink-hover. Secondary = white fill, border-strong border, hover border goes ink. Lime variant = lime fill, ink-black text.
- Badges: pill shape, 12px semibold text, small color dot. Paid/verified = green (#E6F7EC bg / #12894B text). Live/status = vermilion tint (#FFF0EB bg / vermilion text).
- Filter chips: pill, 1px border-strong, white fill; "on" state = ink fill/white text.
- Cards: 16px radius, 1px border (--border), white fill, hover = lift (translateY(-3px)) + soft shadow (0 14px 44px rgba(13,10,10,.10)) + border darkens to border-strong.
- Inputs: 12px radius, border-strong border, 12px/14px padding, focus = border goes ink + soft shadow.
- Radius scale: sm 8px, md 12px, lg 16px, xl 24px, pill 999px.
- Elevation: shadow-sm 0 1px 2px rgba(13,10,10,.05); shadow-md 0 4px 16px rgba(13,10,10,.07); shadow-lg 0 14px 44px rgba(13,10,10,.10).
- Spacing base: 4px grid (8/16/24/48/80px common steps).
- Overall visual voice: quiet, editorial, marketplace-grade. White canvas, near-black ink for nearly everything; brand color appears only as micro-accents (a lime highlight behind a headline word, a vermilion dot/badge) — never as large color blocks or gradients as the base palette. Borders and whitespace do the work; shadows are soft and rare.

Header: sticky, white/88% opacity with blur backdrop, 64px tall, bottom hairline border. Logo + wordmark on the left, nav links center/right, pill nav-link hover state (background --surface).

PRODUCT / SITE REQUIREMENTS

1. Dual-role platform: every account can act as either an "Influencer" (licenses their face) or a "Buyer" (an AI content creator/brand licensing faces). Include a visible role switcher (e.g., a segmented pill toggle in the nav, matching the filter-chip style) that swaps the experience between "I'm talent" and "I'm a buyer" — mirroring how the nav/hero content, CTAs, and dashboards change per role.

2. Homepage: hero section whose visual centerpiece is a grid/collage of real influencer portrait photos (headshot-style, cards with rounded corners per the card token), not illustration or gradients. Include an eyebrow, H1/display headline, subhead, primary CTA ("Browse influencers" for buyers / "Become talent" for influencers), and trust badges (e.g., verified consent, revocable licensing, approval on every use). Below the fold: how it works (3-5 numbered steps), value props for both audiences, featured influencer cards, stats strip, pricing/plans for buyers, FAQ, final CTA, footer.

3. Browse / Discover page (for buyers): a searchable, filterable grid of influencer profile cards (portrait thumbnail, name, niche/category, follower count, starting rate, verified badge). Filters as pill chips: category/niche, platform (Instagram/TikTok/YouTube), follower range, price range.

4. Influencer profile page: portrait gallery/hero image of the person, bio, verified badge, social stats pulled from their connected socials (follower counts, engagement rate, platform icons/links), a portfolio section showing sample content/past licensed work (grid of cards), licensing packages/rates (e.g., Standard / Featured / Exclusive tiers, styled like pricing cards), and a primary CTA button "License this face."

5. Licensing / checkout handoff: Twingo never processes payment or hosts a checkout flow. Clicking "License this face" / "Get license" opens a clear handoff (a modal or interstitial screen, styled with the card + button tokens) that explains the buyer will complete the transaction on ShowCrew, then redirects/links out to ShowCrew. Do not design any payment form, cart, or checkout UI — only the pre-redirect confirmation step.

6. Influencer onboarding flow: sign up → connect social accounts (Instagram/TikTok/YouTube) → auto-generated portfolio preview built from their social content/stats → set licensing rates and usage terms → publish profile. Show this as a short multi-step flow (progress indicator using the pill/chip style).

7. Trust & control messaging throughout: influencers keep approval rights on every use, can revoke consent/licenses at any time, full transparency on how their likeness is used. Keep the tone confident, plain, editorial — not hypey.

DELIVERABLE
A responsive, multi-section single-page (or lightly multi-page) website prototype covering: homepage, browse/discover page, an individual influencer profile page, and the influencer onboarding flow — all strictly using the color, type, spacing, radius, and component rules above. Reuse ShowCrew's exact button/card/badge/chip/input styling; only the content, imagery, and layout are Twingo's own.
```
