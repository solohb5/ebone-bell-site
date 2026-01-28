# VISUAL SYSTEM
## Tommy Reynolds Website Design Reference

---

## COLOR PALETTE

| Name | Hex | HSL | Usage |
|------|-----|-----|-------|
| **Warm Stone** | #2C2825 | 24 9% 16% | Primary backgrounds, headlines |
| **Bone** | #F5F2ED | 38 25% 95% | Light backgrounds, light text |
| **Ember** | #D4572A | 16 67% 50% | CTAs and accent periods ONLY |
| **Charcoal** | #1A1815 | 36 11% 9% | Body text |
| **Sand** | #E8E0D5 | 35 23% 87% | Secondary backgrounds, cards |

**Rule:** Ember (accent) is earned. Use it ONLY for:
- CTA buttons
- The signature period at end of headlines
- Important highlights

---

## TYPOGRAPHY

| Element | Font | Weight |
|---------|------|--------|
| Headlines | Playfair Display | Medium/Bold |
| Body | Inter | Regular |
| Labels | Inter | Medium, uppercase, tracking-widest |

**Headline rules:**
- Short. Declarative.
- Period at the end (styled with accent color)
- Never more than one line if possible
- Each headline could stand as Tommy's entire philosophy

---

## SPACING

- Generous margins
- Sections breathe
- 5-6 scrolls on homepage maximum
- Each scroll = one thought
- The scroll should feel unhurried

---

## CORNERS

```css
border-radius: 0px; /* EVERYWHERE */
```

No rounded corners. Sharp edges. Premium and intentional.

---

## THE SIGNATURE PERIOD

The accent-colored period at the end of major statements:

```jsx
<h1>The Wealth Protocol<span className="text-accent">.</span></h1>
```

This is Tommy's energy: "That's the statement. I'm not adding to it."

---

## SECTION LABELS

Small, uppercase, tracked out, muted:

```jsx
<span className="text-xs font-mono tracking-widest uppercase opacity-50">
  Architecture / Business
</span>
```

---

## BUTTONS

Primary CTA:
```jsx
<a className="bg-primary text-primary-foreground px-12 py-6 text-xl font-bold uppercase tracking-widest hover:bg-accent hover:text-white transition-all">
  Let's Talk
</a>
```

Secondary/Ghost:
```jsx
<a className="border border-primary-foreground/20 px-8 py-4 hover:bg-primary-foreground hover:text-primary transition-all">
  I'm a Coach →
</a>
```

---

## IMAGERY

**Tommy photos should be:**
- Calm and confident
- Not intense staredown
- Not mid-workout action
- Standing still, relaxed
- Energy: "I'm here when you're ready"

**Treatment:**
- Grayscale with high contrast
- `grayscale contrast-125 brightness-90`

---

## DO NOT

- Use rounded corners
- Overuse the accent color
- Add decorative elements or grid overlays
- Use techy labels (SYS., DIAGNOSTIC, etc.)
- Add complex animations
- Use before/after photos
- Create busy layouts

---

*The edge is in the copy, not the decoration.*
