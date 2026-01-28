# Eboné F. Bell Website

**Premium keynote speaker site** for movement builder and international speaker specializing in belonging, allyship, and civil discourse.

---

## Current State (January 27, 2026)

Building from Tommy Reynolds template. Swapping all content to Eboné Bell while keeping the premium design system and structure.

**Template:** Tommy Reynolds (sharp corners, premium feel)
**Client:** Eboné F. Bell
**Positioning:** Builder, not speaker

**Reference:** `SITE-COPY.md` has all production-ready copy. `PROJECT-OVERVIEW.md` has full build plan.

---

## Brain Connection

For craft standards and component patterns:

```
GitHub Repo: solohb5/solo-designs-brain

golden-components/     → Proven component patterns
reference/checklist.md → Quality checks
reference/tokens.md    → Design tokens
bad-examples/          → What to avoid
```

---

## Commands

```bash
npm run dev          # Start dev server (http://localhost:5001)
npm run build        # Production build  
npm run preview      # Preview production build
```

---

## Eboné's Brand

**Positioning:** Builder, not speaker — She doesn't just talk about belonging, she's built it for 20+ years

**The Audience:** Event planners, HR leaders, DEI directors, university coordinators who need a speaker with PROOF

**The Proof:** Forbes "5 Black Entrepreneurs Changing Our World," WorldPride 2025, 100+ organizations, founded Tagg Magazine

**Philosophy:** Don't wait for permission. Build the room.

**Key phrases from Eboné:**
- "I saw what was missing. So I built it."
- "Forbes called her one of 5 Black entrepreneurs changing the world. Then she kept building."
- "Keynotes that build rooms."
- "Most inclusion efforts fail because they talk about belonging without building it."

---

## Visual System

| Element | Value | Usage |
|---------|-------|-------|
| **Primary** (Deep Magenta) | `#8B2252` | Headlines, CTAs, dark backgrounds |
| **Secondary** (Warm Cream) | `#FAF6F1` | Light backgrounds |
| **Accent** (Gold) | `#C9A227` | Signature periods, highlights |
| **Text** (Warm Charcoal) | `#2D2926` | Body copy |
| **Neutral** (Sand) | `#E8E0D5` | Cards, secondary backgrounds |

**Typography:**
- Headlines: Playfair Display (serif)
- Body: Inter (sans-serif)
- Corners: Sharp (border-radius: 0) — Tommy template signature

**Signature Element:**
```jsx
<h1>Forbes called her one of 5 Black entrepreneurs<span className="text-accent">.</span></h1>
```

---

## Site Structure

```
/ (Homepage)
├── Hero with Forbes quote
├── As Featured In (press logos)
├── Origin story (Tagg Magazine → speaker)
├── Timeline (2004-2025)
├── Signature talks
├── Client logos
├── Testimonials
└── Booking CTA

/story → Full building narrative (Tagg, scholarship, 20 years)
/speaking → Signature talks + booking info
```

**Changed from Tommy template:**
- Executive fitness → Keynote speaker
- Fork section → Timeline + talks
- Business/Body pages → Story/Speaking pages

---

## Key Files

| File | Purpose |
|------|---------|
| `SITE-COPY.md` | Production-ready Ogilvy copy |
| `PROJECT-OVERVIEW.md` | Full build plan and asset inventory |
| `client/src/pages/home.tsx` | Homepage (building now) |
| `client/src/pages/story.tsx` | About/Story page |
| `client/src/pages/speaking.tsx` | Speaking/booking page (to build) |
| `client/src/components/layout.tsx` | Nav, footer |
| `../01_photos/` | All photo assets |
| `../02_copy/` | Speaking content, proof, testimonials |
| `../04_pitch/COLLINS-CHALLENGE.md` | Positioning direction |

---

## Reference

- `PROJECT-OVERVIEW.md` — Master build plan
- `SITE-COPY.md` — All copy ready to use
- `../_BRIEF.md` — Client intel and proof stack
- `../04_pitch/COLLINS-CHALLENGE.md` — Bold positioning direction

---

*Building Eboné's site using Tommy Reynolds template as structural foundation.*
