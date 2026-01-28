---
name: skill-creator
description: Meta-skill for creating new skills. Use this when you need to add specialized expertise to the project.
---

# Skill Creator

**Purpose:** Generate new skills for Claude Code when specialized expertise is needed.

---

## What Are Skills?

Skills are **auto-invoked expertise modules**. When Claude detects a task that matches a skill's domain, it automatically loads that skill's knowledge.

**Example:**
- User says "Build a Stripe checkout flow"
- `stripe-integration` skill auto-loads
- Claude has expert Stripe knowledge for that conversation

---

## When to Create a Skill

Create a skill when:
1. **Domain expertise needed repeatedly** (e.g., "We're doing a lot of SEO work")
2. **Complex workflow to encode** (e.g., "Always follow this 7-step review process")
3. **Best practices to capture** (e.g., "Here's how we handle auth in this stack")
4. **Project-specific patterns** (e.g., "Tommy Reynolds conversion optimization checklist")

**Don't create a skill for:**
- One-time tasks
- General knowledge (already in Claude)
- Simple reminders (use boards instead)

---

## Skill Structure

```markdown
---
name: skill-name-kebab-case
description: Brief description that helps Claude decide when to invoke this
---

# Skill Name

**Purpose:** [One line — what this skill does]

---

## Expertise

[What knowledge this skill provides]

## When to Use

[Specific triggers or scenarios]

## Process/Approach

[Step-by-step methodology if applicable]

## Best Practices

[Do's and don'ts]

## For This Project

[Project-specific considerations]

---

**[Core principle or philosophy]**
```

---

## How to Create a Skill

1. **Identify the domain** — What expertise do you need?
2. **Define the trigger** — When should this activate?
3. **Write the SKILL.md** — Follow the structure above
4. **Save in `.claude/skills/[name]/SKILL.md`**
5. **Test activation** — Claude should auto-load when relevant

---

## Example: Tommy Reynolds Conversion Skill

If you wanted to create a conversion optimization skill for this project:

**File:** `.claude/skills/tommy-conversion/SKILL.md`

```markdown
---
name: tommy-conversion
description: Conversion optimization expertise specific to Tommy Reynolds fitness coaching site. Activates when reviewing pages, CTAs, or discussing booking rates.
---

# Tommy Reynolds Conversion Optimization

**Purpose:** Maximize call booking rate through evidence-based optimization.

## Conversion Checklist

### Above the Fold
- [ ] Clear positioning in 3 seconds
- [ ] Single, prominent CTA
- [ ] Social proof visible
- [ ] Mobile-optimized hero

### Copy
- [ ] Problem articulated (the gap, trap, fallacy)
- [ ] Transformation promise clear
- [ ] Specificity (not generic fitness talk)
- [ ] The line: "I build the protocol. You clock in."

### CTAs
- [ ] High contrast (use accent color)
- [ ] Action-oriented copy
- [ ] Calendly links functional
- [ ] Mobile thumb-friendly

### Proof
- [ ] Testimonials with specificity
- [ ] Real numbers (not vague "amazing results")
- [ ] Right avatar match (trainer or executive)

### The Fork
- [ ] Clear choice (business vs body)
- [ ] Unique outcome for each path
- [ ] Visual distinction
- [ ] No confusion about which path

---

**Philosophy:** Every element either moves toward booking or it's bloat.
```

---

## Skills for This Project

**Currently useful:**
- `tommy-conversion` — Conversion optimization
- `tommy-visual-qa` — Visual system compliance checking
- `tommy-copy-integrity` — Locked copy verification

**Maybe later:**
- `client-communication` — How to present work to Tommy
- `photo-treatment` — Guidelines for processing Tommy's photos

---

## The Power of Skills

With skills, you don't have to keep telling Claude the same context.

**Without skill:**
> "Review this page. Remember: corners must be sharp, accent color is only for CTAs, copy must match the locked source, mobile-first, conversion-optimized..."

**With skill:**
> "Review this page."

(Skill auto-loads, Claude already knows the checklist)

---

**Use this skill to build the expertise library your project needs.**
