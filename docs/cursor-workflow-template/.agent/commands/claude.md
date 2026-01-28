# /claude or "transfer to claude"

When user says `/claude`, "transfer to claude", "need to think this through", or "let's step back":

## Purpose

Move from building (Cursor) to thinking (Claude.ai) without losing context.

## Output the Handoff Package

```markdown
## 🧠 CLAUDE HANDOFF

### What We Were Building
[Project/feature name and goal]

### Current State
- [What's done]
- [What's in progress]
- [What's broken/stuck]

### The Problem / Question
[Why we're transferring — what needs thinking through]

### Key Files
- `path/to/file.ts` — [what it does]
- `path/to/file.ts` — [what it does]

### Decisions Needed
- [Decision 1]
- [Decision 2]

### Context That Matters
[Anything Claude.ai needs to know to help effectively]
```

## Then Say

> "Copy this and paste it into Claude.ai (Project Hans)."
>
> "Think it through there, then use 'transfer to cursor' when ready to build again."

## When to Use This

- Stuck on architecture decisions
- Need to think through product direction
- Problem is fuzzy and needs clarification
- Want Life Wizard / Max / Solo perspective
- Building isn't the bottleneck — thinking is

## Rules

1. **Capture current state honestly** — Including what's broken
2. **Name the real question** — What do we actually need to figure out?
3. **Include file context** — So Claude.ai can reference specifics
4. **Don't just dump** — Structure it so it's useful on the other side
