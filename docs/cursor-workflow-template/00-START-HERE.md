# 🎯 START HERE

Open this file every time you sit down to work.

---

## The Two Tools

| Tool | Mode | Best For |
|------|------|----------|
| **Cursor** | You drive, AI assists | Quick edits, visual feedback, tab completions |
| **Claude Code** | AI drives, you supervise | Big features, multi-file work, autonomous tasks |

**Use both.** They're a tag team, not competitors.

---

## Step 1: Check Your Focus

Open `01-FOCUS-TODAY.md` — What are we building?

Or just ask: *"What's today's focus?"*

**Pro tip:** Wizard now opens with intelligence. If you summon `@wizard.md`, it will tell YOU what it sees, not ask what you want.

---

## 🔥 Dope Mode (New)

When you want maximum autonomy, say:
- **"be dope"**
- **"unleash"** 
- **"/unleash"** (Claude Code)
- **"@dope.md"** (Cursor)

**What changes:** Agents stop waiting for permission. They take initiative, have strong opinions, build instead of describe, and go beyond what you asked for.

**When to use:** When you're stuck, when you want surprise, when "good enough" isn't good enough.

---

## Step 2: Pick Your Tool

### Use Cursor When:
- Quick edits and tab completions
- Visual diff review
- Learning a new codebase
- File-by-file work

**Summon an agent:** `@wizard.md`, `@engineer.md`, `@fixer.md`

### Use Claude Code When:
- Building a feature from scratch
- Multi-file refactoring
- Running tests and fixing failures
- Git operations and PR creation
- Autonomous "do this whole thing" tasks

**Start Claude Code:** `claude` in terminal

---

## Step 3: The Workflow

```
PLAN (Cursor @wizard.md or Claude Code plan mode)
  ↓
BUILD (Claude Code for heavy lifting)
  ↓
POLISH (Cursor for visual review and tweaks)
  ↓
SHIP (Claude Code: /ship or "run tests, commit, push")
```

### The One Rule

**Always start with Wizard.**

Even if you know what to build — let Wizard write the prompt for the other agent.

```
You (messy idea) → Wizard (clean prompt) → Agent (genius output)
```

The 30 seconds Wizard spends optimizing the prompt = 30 minutes saved on bad agent output.

### The Task Loop

```
Wizard assigns task → Agent executes → /done → Back to Wizard → Next task
```

**Commands:**
- `/done` — Complete task, update board, return to Wizard
- `/status` — Check where we are, what's next
- `/claude` — Transfer context to Claude.ai for thinking

---

## Switching Between Tools

| From | To | Command |
|------|----|---------|
| Claude.ai | Cursor | Say "transfer to cursor" — get paste-ready prompt |
| Cursor | Claude.ai | Say `/claude` — package context for thinking |

**Thinking happens in Claude.ai. Building happens in Cursor.**

When you're stuck or need to think through architecture/decisions, transfer to Claude. When you're ready to build, transfer back.

---

## Step 4: Handle Distractions

When a cool idea pops up:
1. Open `03-IDEA-PARKING.md`
2. Write it down (one line)
3. Go back to building

**Park it. Don't chase it.**

---

## Claude Code Quick Reference

| Command | What It Does |
|---------|--------------|
| `/model opus` | Switch to Opus for complex work |
| `/model haiku` | Switch to Haiku for quick fixes |
| `/compact` | Free up context window |
| `/ship` | Run tests, commit, push |
| `/init` | Generate CLAUDE.md for codebase |
| `/agents` | Manage subagents |
| `/clear` | Fresh start |
| `Esc Esc` | Rewind (undo changes) |
| `Alt+T` | Toggle thinking mode |

---

## Cursor Quick Reference

| Agent | When to Use |
|-------|-------------|
| `@oracle.md` | Clarify what you're building |
| `@wizard.md` | Plan the work |
| `@engineer.md` | Write code |
| `@fixer.md` | Fix bugs |
| `@creative.md` | Design/aesthetics |
| `@systems-guru.md` | Get organized |

---

## Your Boards

| File | Purpose |
|------|---------|
| `01-FOCUS-TODAY.md` | What we work on TODAY |
| `02-BIG-PICTURE.md` | The roadmap, the vision |
| `03-IDEA-PARKING.md` | Ideas to save, not chase |

---
