# /ship

**Purpose:** Pre-flight checklist before pushing code or deploying.

---

## When to Use

Say: `/ship` or "ready to ship" or "let's deploy"

---

## The Checklist

### 1. Code Quality
```bash
# Run linter
npm run lint

# Fix any errors
# (don't ship with linter errors)
```

### 2. Build Test
```bash
# Production build
npm run build

# Preview build
npm run preview

# Verify:
# - No build errors
# - Pages load correctly
# - Assets load
# - No console errors
```

### 3. Visual System Check

- [ ] All corners sharp (`border-radius: 0`)
- [ ] Colors match palette (no custom colors)
- [ ] Accent color only on CTAs + signature periods
- [ ] Fonts correct (Playfair Display headlines, Inter body)
- [ ] Mobile responsive
- [ ] No decorative gimmicks

### 4. Copy Integrity

- [ ] Matches `SITE-COPY-FINAL.md` exactly
- [ ] No modifications to locked copy
- [ ] Signature periods are accent-colored
- [ ] Headlines are declarative and short

### 5. Functionality Check

- [ ] All links work (especially Calendly)
- [ ] Navigation works
- [ ] CTAs functional
- [ ] Forms submit (if applicable)
- [ ] No 404s

### 6. Performance

- [ ] Images optimized
- [ ] Fast load time (< 3s)
- [ ] No unnecessary console logs
- [ ] No debug code

### 7. Mobile Test

- [ ] Test on mobile viewport
- [ ] Touch targets are thumb-friendly
- [ ] Text is readable
- [ ] No horizontal scroll
- [ ] CTAs accessible

---

## If All Checks Pass

```bash
# Stage changes
git add .

# Commit with clear message
git commit -m "feat: implement hero section with locked copy"

# Push
git push origin [branch-name]
```

---

## If Checks Fail

**Stop. Fix. Then re-run /ship.**

Don't ship broken work. The bar is $20K quality.

---

## For Deployment

When actually deploying to production:

1. Run `/ship` checklist
2. Create production build
3. Test build locally first
4. Deploy to hosting
5. Verify live site
6. Test all CTAs on live site
7. Monitor for errors (check Sentry if configured)

---

## Post-Ship

Update boards:
- Mark task complete in `01-FOCUS-TODAY.md`
- Note in `02-BIG-PICTURE.md` if milestone reached
- Clear from active work

---

**The standard: Would you pay $20K for this work?**
