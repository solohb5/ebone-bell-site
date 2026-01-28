# 🎯 START HERE

**Open this file every time you sit down to work.**

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

**Pro tip:** Wizard now opens with intelligence. Summon `@wizard.md` and it will tell YOU what it sees, not ask what you want.

---

## 🔥 Dope Mode (Unleashed)

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
- Learning or exploring the codebase
- File-by-file work
- Design polish

**Summon an agent:** `@wizard.md`, `@engineer.md`, `@fixer.md`, `@dope.md`

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
SHIP (Claude Code: /ship or Cursor: verify + commit)
```

### The One Rule

**Always start with Wizard.**

Even if you know what to build — let Wizard write the prompt for the other agent.

```
You (messy idea) → Wizard (clean prompt) → Agent (genius output)
```

The 30 seconds Wizard spends optimizing the prompt = 30 minutes saved on bad agent output.

---

## Step 4: Handle Distractions

When a cool idea pops up:
1. Open `03-IDEA-PARKING.md`
2. Write it down (one line)
3. Go back to building

**Park it. Don't chase it.**

---

## Tommy Reynolds Quick Context

**Project:** Personal brand website for fitness authority  
**The Line:** "I build the protocol. You just clock in."  
**Goal:** Get trainers and executives to book calls  

**Current Phase:** Assets & Launch (waiting on photos)  
**Status:** Check `01-FOCUS-TODAY.md`

**Copy Source:** `../SITE-COPY-FINAL.md` (LOCKED)  
**Visual System:** `docs/VISUAL-SYSTEM.md` (LOCKED)  
- Sharp corners everywhere
- Accent color on CTAs + periods only
- Playfair Display headlines, Inter body

---

## Command Quick Reference

| Command | What It Does |
|---------|--------------|
| `/status` | Check where we are, what's next |
| `/done` | Complete task, update board, hand to Wizard |
| `/claude` | Transfer context to Claude.ai for thinking |
| `/ship` | Pre-flight checklist before deploying |
| `/unleash` | Be Dope mode (Claude Code) |

---

## Cursor Agent Quick Reference

| Agent | When to Use |
|-------|-------------|
| `@wizard.md` | Plan the work, check status |
| `@engineer.md` | Write code, build features |
| `@fixer.md` | Fix bugs, debug issues |
| `@creative.md` | Design review, visual polish |
| `@dope.md` | Full autonomy mode |
| `@oracle.md` | Clarify vision (rare, usually at project start) |
| `@systems-guru.md` | Organize, update boards |

---

## Your Boards

| File | Purpose |
|------|---------|
| `01-FOCUS-TODAY.md` | What we work on TODAY |
| `02-BIG-PICTURE.md` | The roadmap, the vision |
| `03-IDEA-PARKING.md` | Ideas to save, not chase |

---

## MCP Superpowers 🚀

You have **8 essential MCP servers** ready:

| MCP | Usage Example |
|-----|---------------|
| 🔥 Firecrawl | "Scrape competitor pricing from [url]" |
| 🐙 GitHub | "Create PR for my changes" |
| 📚 Context7 | "Check latest React hooks API" |
| 🧠 Sequential-Thinking | Auto-activates for complex problems |
| 🔍 Brave Search | "Search for Next.js 14 best practices" |
| 🤖 Sub-Agents | "Create test-writer sub-agent" |
| 🌐 Puppeteer | "Test the checkout flow" |
| 💻 Desktop Commander | Auto-available for file/terminal |

**Setup:** If not configured yet, see `.mcp.json` and `env.template`

---

## Switching Between Tools

| From | To | Command |
|------|----|---------|
| Claude.ai | Cursor | Say "transfer to cursor" — get paste-ready prompt |
| Cursor | Claude.ai | Say `/claude` — package context for thinking |

**Thinking happens in Claude.ai. Building happens in Cursor.**

When you're stuck or need to think through architecture/decisions, transfer to Claude. When you're ready to build, transfer back.

---

## The Daily Ritual

1. **Read this file** (you're doing it)
2. **Check focus board** (`01-FOCUS-TODAY.md`)
3. **Pick your tool** (Cursor or Claude Code)
4. **Summon Wizard** (`@wizard.md` or ask "what's next?")
5. **Build** → **Polish** → **Ship**
6. **Update boards** when done

---

**Let's build.**
