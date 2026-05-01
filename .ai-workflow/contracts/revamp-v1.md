# Bharat Ke Anmol — Full Site Revamp Contract
**Date:** 2026-04-30  
**Agent:** Impeccable (Frontend-Impeccable)  
**Status:** PENDING — waiting for LFG

---

## Design Audit — Current State Problems

| Area | Issue |
|------|-------|
| Font | Arial — generic, zero personality |
| Tailwind | Not installed — raw CSS only |
| Footer | One-liner on home only, not in layout, invisible on /nominate and /partner |
| Nominate page | Bare form — no submit button, no UX polish, no footer |
| Partner page | Same — raw inputs, no submit, no footer |
| Animations | Zero — static page |
| Visual language | Flat borders, uniform grid, no depth, no waves, no texture |
| Category cards | Plain text boxes — no icons, no hover, no depth |
| Hero | Basic symmetric 2-col — nothing draws the eye |
| Layout | Every section same width, same padding, same card style — feels machine-made |
| Color | Saffron + navy defined but every section uses same palette — no contrast rhythm |
| Stats | Three identical border boxes — forgettable |
| Mobile nav | Wraps ugly to third row — no hamburger |

---

## What "Human-Made" Means For This Site

The old plan was still template-brain: 3×3 grids everywhere, every card same size, every section same structure. That's the AI default. Real award ceremony sites — Padma Shri, BAFTA, Filmfare — feel like someone made editorial choices. Things that signal human craft:

- **Broken grids.** Hero image bleeds out of column. One big stat floats alone. Text overlaps a photo edge.
- **Scale contrast.** Giant headline next to small body copy. A huge number next to a tiny label. Not everything the same visual weight.
- **Texture over flatness.** Grain overlay on backgrounds. Slightly imperfect wave paths. Real photo in a real frame, not a card with border-radius.
- **Whitespace asymmetry.** Some sections breathe wide; some are dense and intimate. Not every section = 80px padding.
- **Typography doing design work.** A big italic word. A headline that breaks across two lines intentionally. Eyebrow text tracking wide. Not every heading the same style.
- **One unexpected detail per section.** A rotated label. A thin gold vertical line between two columns. A quote pulled out large. Something that couldn't have come from a template.

---

## Target Aesthetic

**Reference feel:** Filmfare Black meets a TEDx India editorial spread. Prestigious, warm, culturally grounded — not corporate SaaS, not startup landing page.  
**Not:** Symmetric hero → feature grid → CTA band (that's every AI site ever built).  
**Font:** Instrument Sans — used for body, nav, labels. Headings: Instrument Sans Bold/ExtraBold, large and loose-tracked.  
**Color rhythm:** Sections alternate — cream → navy → cream → saffron accent → cream. Not every section same background.  
**Waves:** Organic SVG path dividers — NOT the same wave repeated. Each one slightly different curvature. Feel hand-drawn.  
**Grain:** CSS noise texture overlay (5% opacity) on hero and CTA band — kills the flat "digital" look instantly.

---

## Design Token System

```css
--navy:     #1b2845   /* headings, footer bg, dark sections */
--saffron:  #d97706   /* primary CTA, accent borders, eyebrow */
--gold:     #b8892e   /* decorative lines, secondary accent */
--amber:    #f59e0b   /* button hover, gradient midpoint */
--cream:    #fffaf0   /* page background */
--off:      #f5ede0   /* alternate light section bg */
--muted:    #5f6b7a   /* body text */
--green:    #2f8f3a   /* success states, one eyebrow */
--surface:  #ffffff   /* card surfaces */
```

---

## File Architecture (Target)

```
app/
  layout.tsx              → Navbar + Footer wired globally
  page.tsx                → Home (full editorial revamp)
  nominate/page.tsx       → Nomination form
  partner/page.tsx        → Partner form
  globals.css             → Tailwind base + CSS vars + grain texture

components/
  Navbar.tsx              → Glassmorphism, hamburger mobile
  Footer.tsx              → Navy bg, 3-col, wave top, socials
  WaveDivider.tsx         → SVG wave (unique path per use, not same shape repeated)
  NominateForm.tsx        → Shadcn form
  PartnerForm.tsx         → Shadcn form
```

---

## Page-by-Page Revamp Plan

### 1. Layout — Navbar

**Design:**
- Cream/transparent background, backdrop-blur on scroll
- Logo + wordmark left — NOT centered
- Nav links: Instrument Sans 14px, tracked wide, NO underline default — saffron dot below on active/hover
- Right: single "Nominate Now" pill button (saffron gradient). "Partner" as ghost link, not a second button
- Scroll past 80px: header shrinks slightly + gets a thin gold bottom border
- Mobile: clean hamburger (3 lines → X) — full-width slide-down drawer, links stacked large

**Human touches:**
- Brand tag "A national award ceremony" in italic under logo wordmark — feels editorial
- Nav links spaced unequally — About and Founder closer together, Forms further right

---

### 2. Layout — Footer

**Currently:** doesn't exist in layout — must be added.

**Design:**
- Navy background (#1b2845)
- Saffron wave on top (unique path, not hero wave repeated)
- Layout: 3 columns — unequal widths (2fr 1fr 1fr)
  - Col 1 (wide): Logo + tagline in italic + 2-line mission blurb. Feels like a colophon.
  - Col 2: Quick links — vertical list, small caps, tracked wide
  - Col 3: Contact + social icons row (Instagram, X, LinkedIn, YouTube — lucide)
- Bottom bar: thin gold-opacity line above | copyright left | "Recognizing the real gems of India." right — italicized

**Human touch:** The footer headline is large and white in italic — "Bharat Ke Anmol." — like a magazine masthead. Not a logo repeat.

---

### 3. Home Page (`/`)

**Hero:**
- Full bleed — no max-width container clipping it
- Background: cream with grain texture + faint saffron radial glow top-left
- Left column (60%): 
  - Eyebrow: "CELEBRATING EXCELLENCE · HONORING TRUE HEROES" — tracked wide, saffron, small caps, 11px
  - H1: "Bharat Ke Anmol" — Instrument Sans ExtraBold, 80–100px, navy, line-height 0.92. Intentionally large.
  - Below H1: thin gold horizontal rule (2px, 60px wide) — not a divider, a visual pause
  - Lede paragraph: 18px, muted, max-width 520px
  - CTA row: "Nominate Now" (saffron pill) + "Become a Partner" (text link with arrow →, no button box)
- Right column (40%): 
  - Founder photo — not in a card. In a portrait frame: slightly tilted 1.5° clockwise, gold border 3px, drop-shadow with amber tint
  - Photo bleeds UP past the hero top padding by ~40px — breaks the grid intentionally
  - Floating pill badge below photo: "Founder — Dr. Mohammad Nizamuddin" — white bg, navy text, small
- Stats row pinned BELOW the two columns, spanning full width — 3 stats but unequal size:
  - "100+" in 64px bold navy | "Honorees" in 13px muted below
  - "All India" in 64px bold | "Reach" below
  - "Trusted" in 64px bold | "Recognition" below
  - Stats are NOT in boxes. Just type on cream background, separated by thin vertical gold lines

**Wave divider:** cream → off-white, gentle single curve

---

**About Section:**
- Full-width navy band — page-edge to page-edge
- Wave top: cream → navy | Wave bottom: navy → cream
- Inside: max-width 900px centered
- Eyebrow in saffron (small, tracked)
- H2: large white, 2-line break intentional: "Recognition built around / dignity, impact, and national pride."
- Body: 2-col — left col (wider) has the paragraph. Right col has a pulled quote in italic, 24px, gold color — "...give them the stage they deserve." — feels like a magazine pull quote
- No cards. No borders. Just type on dark.

---

**Why BKA + Mission:**
- NOT a symmetric 2-col of equal cards
- Left: Takes 60% width — white bg, saffron left border 4px, padded. Heading + checklist with lucide Check icons (saffron)
- Right: Takes 40% width — off-white (#f5ede0) bg, no border. Large italic quote style mission statement. No heading — just the quote in 22px navy italic.
- Between the columns: thin vertical gold line (1px, 60% height, centered vertically)
- GSAP: left slides in from left, right from right — not both fade-up

---

**Founder Section:**
- NOT the same 2-col pattern as Why BKA
- Full-width off-white band
- Image RIGHT this time (alternating — human design rhythm)
- Left: eyebrow + H3 "Dr. Mohammad Nizamuddin" + body + credentials as small tagged chips: "Visionary Leader" | "Social Reformer" — pill chips, saffron border, navy text
- Right: photo in a vertical portrait ratio — no card border. Just the photo with a subtle ambient shadow. Organic, not boxed.
- One decorative element: large quote mark " in the background of the left column — 200px, 5% opacity navy

---

**Award Categories:**
- Section header: left-aligned, NOT centered — heading left, eyebrow above
- Grid: NOT 3×3 uniform. Layout:
  - Row 1: 2 wide cards + 1 narrow card (asymmetric 5fr 5fr 4fr)
  - Row 2: 1 narrow + 2 wide (4fr 5fr 5fr)
  - Row 3: 3 equal (last row fills normally)
- Each card: lucide icon top-left (saffron), category name bold navy, subtle off-white bg, no heavy border — just 1px gold-10% border
- Hover: card lifts (translateY -4px), border becomes saffron, icon color warms
- GSAP: stagger 0.06s, fade + Y from below

---

**Legacy / Upcoming:**
- Two panels side by side — but NOT same height forced equal. Let content set height.
- Left: navy bg, white text, eyebrow "OUR LEGACY", stat "Hundreds of achievers" large
- Right: cream bg with saffron top border 4px, eyebrow "UPCOMING", event teaser text
- Wave divider above this pair: cream → saffron-tinted (very subtle)

---

**CTA Band:**
- Full bleed, saffron-to-amber gradient (135deg)
- Grain texture overlay (same as hero)
- Layout: NOT flex row (heading left, buttons right). Instead:
  - Eyebrow centered, small
  - H2 centered, large, white, 2-line
  - Buttons centered below, row — Nominate (white bg, navy text) | Partner (outline white)
- Decorative: faint large Devanagari letterform or geometric pattern in background at 8% opacity

---

### 4. Nominate Page (`/nominate`)

**Hero:**
- Compact. Max-width 700px, left-aligned (not centered)
- Eyebrow: saffron small caps
- H1: big, 2-line if needed
- Description: muted, 17px
- Below heading: saffron underline rule — 80px wide, 3px, feels like a signature underline
- NO wave here — just clean padding into form

**Form:**
- White card, subtle shadow (not border) — feels like paper
- Gold accent: top border 3px saffron
- Input fields: Shadcn Input — clean, 14px, no border-radius overkill (12px max)
- Field layout: 2-col grid for short fields, full-width for textarea
- "Category Applying For" → Shadcn Select dropdown with all 9 categories
- "Gender" → Shadcn Select (Male / Female / Non-binary / Prefer not to say)
- "Self or Others" → Shadcn RadioGroup — horizontal, not dropdown
- Add textarea: "Describe achievements / reason for nomination" — full width, 5 rows
- Submit: full-width saffron gradient button, "Submit Nomination →"
- Form has subtle section dividers: thin line between personal info and professional info groups

---

### 5. Partner Page (`/partner`)

**Hero:** Same structure as nominate, different eyebrow color (gold)

**Partnership Types (pre-form):**
- 4 cards in a 2×2 grid:  Title Sponsor | Media Partner | Community Partner | Exhibitor
- Each: icon (lucide), name bold, one-liner muted
- Clicking selects it — card gets saffron border + checkmark — and pre-fills Partnership Type in form
- Small, informational — not a big section. Feels like a guide before filling out

**Form:** Same polish as nominate. Navy submit button.

---

## Animation Plan (GSAP ScrollTrigger)

| Element | Animation | Details |
|---------|-----------|---------|
| Hero H1 | Clip-path reveal left→right | Duration 0.8s, ease power3.out |
| Hero photo | Scale 0.94→1 + fade | 0.4s delay, duration 1s |
| Hero stats | Stagger count-up | ScrollTrigger once, 0.1s stagger |
| Section headings | Y: 24→0 + fade | start: "top 85%" |
| About band text | Split: left col slides right, right col slides left | ScrollTrigger |
| Why BKA panels | Left from -40px, right from +40px | Not fade-up — lateral |
| Category cards | Stagger Y: 20→0 + fade | 0.06s stagger, batch |
| Founder photo | Fade + scale 0.97→1 | ScrollTrigger |
| CTA band | Fade + scale 0.98→1 | ScrollTrigger |
| Navbar on scroll | Box-shadow appears | CSS transition (not GSAP) |

**Rule:** `prefers-reduced-motion` media query — if set, skip all GSAP, use CSS opacity only.  
**Rule:** Never `transition-all` on any element with GSAP parent.

---

## Wave Divider Specs

Each wave is a UNIQUE SVG path — not the same shape copy-pasted:

1. **Hero bottom** (`cream → off-white`): Long shallow single curve, low amplitude
2. **About top** (`off-white → navy`): Double-curve, more dramatic
3. **About bottom** (`navy → off-white`): Asymmetric — rises left, dips right
4. **Legacy top** (`off-white → saffron-tint`): Gentle, short rise
5. **CTA top** (`off-white → saffron`): Steep left-side curve

All: `viewBox="0 0 1440 90"`, `preserveAspectRatio="none"`, `width="100%"`, `display="block"`.  
WaveDivider accepts `path`, `fill`, `className` props.

---

## Implementation Phases

### Phase 1 — Foundation
1. Install: `tailwindcss`, `postcss`, `autoprefixer`
2. Install: `gsap`, `lucide-react`
3. Install: `shadcn/ui` (init + add button, input, label, select, radio-group, textarea)
4. Add Instrument Sans via `next/font/google` — apply to `<html>` className in layout
5. Rewrite `globals.css` — Tailwind base + CSS vars + grain texture utility class
6. Create `components/` folder

### Phase 2 — Layout Shell
7. `Navbar.tsx` — glassmorphism, scroll-shrink, mobile hamburger drawer
8. `Footer.tsx` — navy, 3-col unequal, wave top, social icons
9. `WaveDivider.tsx` — accepts path + fill props
10. Wire Navbar + Footer into `layout.tsx`

### Phase 3 — Home Page
11. Hero (editorial 60/40, tilted photo, type-only stats)
12. About band (dark, pull quote)
13. Why BKA + Mission (60/40 with vertical gold line)
14. Founder (image right, credential chips)
15. Categories (asymmetric grid, icons)
16. Legacy / Upcoming (unequal height panels)
17. CTA band (centered, grain, decorative bg)

### Phase 4 — Form Pages
18. Nominate page (hero + polished Shadcn form)
19. Partner page (hero + selection cards + form)

### Phase 5 — Animations
20. GSAP hero animations (clip-path H1, photo scale)
21. ScrollTrigger on all sections
22. Count-up on stats
23. Stagger on categories
24. Reduced-motion fallback

### Phase 6 — QA
25. `npm run build` — clean
26. Chrome DevTools MCP screenshots: home, nominate, partner — desktop + mobile
27. Lighthouse audit
28. Check all import paths resolve

---

## Design Constraints

- Logo: `/media/BharatKeAnmolLogo.png` — keep as-is
- Founder photo: `/media/NizamImage.jpg` — keep as-is
- All copy stays — no rewriting content
- All form fields stay — improve UX, add submit
- No new routes
- Web3Forms for submission (edge-safe)

---

## Anti-Patterns — Do Not Do These

- Uniform 3×3 card grids where every card is same size
- Every section uses same padding / same background / same card style
- Hero with centered text + image right (startup default)
- CTA band as flex row (heading left, buttons right)
- Same wave shape repeated for every divider
- Symmetric 2-col layouts that repeat 3+ times in a row
- Gradient on every button
- Cards with heavy drop shadows everywhere

---

## Success Criteria

- [ ] Instrument Sans applied everywhere
- [ ] Footer on ALL 3 pages
- [ ] Navbar styled + mobile hamburger working
- [ ] 5 unique wave dividers used
- [ ] Grain texture on hero + CTA
- [ ] Asymmetric/editorial layouts — no two consecutive sections same structure
- [ ] Category grid asymmetric (not uniform 3×3)
- [ ] Forms: Shadcn inputs + selects + submit button + textarea
- [ ] GSAP clip-path on H1 + ScrollTrigger on sections
- [ ] `prefers-reduced-motion` respected
- [ ] `npm run build` clean
- [ ] Lighthouse > 85
- [ ] Mobile responsive
