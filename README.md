# FinFlow — Smart Money, Beautifully Simple

A premium, single-page marketing landing for a fictional mobile fintech app (personal
finance / payments). It pairs a friendly, high-trust tone with a soft-3D **claymorphism**
aesthetic, and its centrepiece is a fully hand-built **CSS/SVG phone mockup** showing a
live app UI — balance card, quick actions, an animated mini spend chart and a transaction
feed. A second phone showcase presents the savings-goals screen with animated progress bars.

> Static front-end showcase built to demonstrate senior UI/UX + frontend craft. FinFlow is
> not a real financial product.

**Live demo:** https://yagami-reverse.github.io/finflow/

## Design rationale

**Style — Claymorphism / soft-3D.** Friendly, tactile and trustworthy: deeply rounded
surfaces, layered "clay" shadows (a soft white highlight top-left, a soft drop bottom-right,
plus an inset hairline) and gentle floating elements. It reads modern and approachable —
the right register for a money app that wants to feel calm rather than corporate.

**Palette — fresh mint → blue → violet on a soft canvas.** A light, airy `#eef3fb` canvas
lit by soft mint/brand/violet radial glows. Mint (`#10a983`) signals positive money flow
and growth, brand blue (`#4f63ef`) carries primary actions, and violet (`#7c3aed`) adds a
tech-forward accent — the three blend into the signature gradient used on headlines, the
balance card and CTAs. Text uses a layered ink scale (`#1d2433` / `#475069` / `#6b7488`),
each chosen to clear **WCAG AA 4.5:1** against the soft background — a deliberate guard,
since pale claymorphism palettes easily fail contrast.

**Typography — Plus Jakarta Sans + Inter.** Plus Jakarta Sans is a friendly geometric sans
used for display/headings and numerics (its rounded warmth suits the clay look), while Inter
handles body copy for crisp, neutral readability at small sizes.

## Accessibility & polish

- Responsive across 375 / 768 / 1024 / 1440 with a dedicated mobile nav drawer.
- Visible focus rings, `aria-label`s on all icon-only buttons, a skip-to-content link, and
  semantic landmarks.
- `prefers-reduced-motion` fully respected (all scroll/float animations collapse).
- Scroll-reveal, hover lifts and spring-press micro-interactions via framer-motion.
- lucide-react / inline SVG icons only — no emoji.

## Stack

- **React 18** + **TypeScript** + **Vite**
- **Tailwind CSS** (custom clay shadow + radius + gradient tokens)
- **framer-motion** (scroll reveals, floating phone, animated chart/progress)
- **lucide-react** (icons)

## Run locally

```bash
npm install
npm run dev      # start the Vite dev server
npm run build    # tsc --noEmit && vite build  (type-check + production build)
npm run preview  # preview the production build
```

## Sections

Navbar · Hero (headline + app-store buttons + animated phone mockup) · trust stats strip ·
features (instant transfers, smart budgeting, fee-free cards, savings goals) · how it works
(3 steps) · security / trust · second phone showcase (savings goals) · testimonials ·
pricing (Free / Plus / Family) · download CTA · footer.

---

Part of a frontend portfolio. Built with care for the small details — shadows, contrast,
motion and copy.
