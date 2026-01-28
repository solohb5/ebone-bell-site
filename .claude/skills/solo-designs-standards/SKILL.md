---
name: solo-designs-standards
description: Solo Designs craft standards - auto-loads for design work
triggers: ["frontend-design", "design", "component", "ui", "visual"]
---

# Solo Designs Standards

**BEFORE BUILDING:**

1. **Check brain first:** `solohb5/solo-designs-brain/golden-components/`
   - Heroes: Use `authority-hero-dark.tsx` as base for authority/fitness clients
   - Sections: Check for existing patterns

2. **Use design tokens:** `solohb5/solo-designs-brain/reference/tokens.md`
   - No magic numbers
   - Spacing: `var(--space-X)`
   - Typography: `var(--text-X)` with proper tracking/leading
   - Transitions: `var(--duration-X)` with `var(--ease-X)`

3. **Follow architecture:** `solohb5/solo-designs-brain/reference/architecture.md`
   - Content in typed constants
   - CSS variables for all values
   - Proper component structure with annotations

---

**BEFORE SHIPPING:**

Run `solohb5/solo-designs-brain/reference/checklist.md`:

- [ ] Typography: Distinctive font, tight tracking, clear hierarchy
- [ ] Spacing: Design tokens only, generous padding
- [ ] Color: CSS variables, accessible contrast
- [ ] Animation: 60fps smooth, intentional timing
- [ ] Responsive: Test 375px, 768px, 1024px, 1440px
- [ ] Accessibility: Semantic HTML, alt text, focus states
- [ ] Performance: Optimized images, no layout shift
- [ ] **The Collins Test:** Could this be on Awwwards?

---

**SIGNATURE DETAILS:**

- Sharp corners everywhere (border-radius: 0)
- Accent color earned (CTAs + headline periods only)
- Film grain on dark heroes (30% opacity SVG noise)
- Grayscale photos with color on hover
- Offset border CTAs (2px offset, animates flat on hover)

---

**THE BRAIN CONNECTION:**

When building components, use the GitHub MCP to read patterns from the brain:

```
Use mcp_github_get_file_contents to read:
- owner: solohb5
- repo: solo-designs-brain
- path: golden-components/heroes/_README.md (or specific pattern)
```

Before shipping, use GitHub MCP to read the checklist:
```
- path: reference/checklist.md
```

---

**QUALITY PHILOSOPHY:**

> "Quality is the baseline. Distinctive is the goal."

This site should look like it cost $20K. It represents Solo Designs quality standard.

---

**This is the Solo Designs standard. Ship nothing less.**


