# Cursor + Claude Code Workflow Template

A rocket ship IDE setup that combines **Cursor IDE** and **Claude Code CLI** for maximum development velocity.

---

## Why Both Tools?

| Tool | Philosophy | Sweet Spot |
|------|------------|------------|
| **Cursor** | You drive, AI assists | Quick edits, visual diffs, tab completion |
| **Claude Code** | AI drives, you supervise | Multi-file features, autonomous tasks, CI/CD |

They're complementary. Use both.

---

## What's Included

```
├── .claude/                    # Claude Code configuration
│   ├── agents/                 # Subagents (reviewer, architect, debugger)
│   ├── skills/                 # Custom skills (skill-creator included)
│   ├── commands/               # Custom slash commands (/ship)
│   └── settings.json           # Claude Code settings
├── .agent/agents/              # Cursor agent personas
├── .mcp.json                   # MCP server configuration
├── CLAUDE.md                   # Claude Code project context
├── CLAUDE.local.md.template    # Personal overrides (gitignored)
├── AGENTS.md                   # Cursor project context (auto-loads)
├── 00-START-HERE.md            # Daily workflow ritual
├── 01-FOCUS-TODAY.md           # Today's task
├── 02-BIG-PICTURE.md           # Project roadmap
└── 03-IDEA-PARKING.md          # Ideas to save, not chase
```

---

## Quick Start

1. **Copy** this folder into your project root
2. **Customize** `AGENTS.md` and `CLAUDE.md` with your project details
3. **Start Cursor** for visual editing
4. **Run `claude`** in terminal for autonomous tasks

See `SETUP.md` for detailed instructions.

---

## The Workflow

```
PLAN  →  BUILD  →  POLISH  →  SHIP
```

1. **PLAN** — Cursor `@wizard.md` or Claude Code plan mode
2. **BUILD** — Claude Code for multi-file implementation
3. **POLISH** — Cursor for visual review and tweaks  
4. **SHIP** — Claude Code `/ship` command

---

## Cursor Agents

| Agent | Role | Summon |
|-------|------|--------|
| 🔮 Oracle | Clarify vision | `@oracle.md` |
| 🧙 Wizard | Plan work | `@wizard.md` |
| 🎨 Creative | Design/UI | `@creative.md` |
| ⚙️ Engineer | Build | `@engineer.md` |
| 🔧 Fixer | Debug | `@fixer.md` |
| 🧘 Systems Guru | Organize | `@systems-guru.md` |

---

## Claude Code Subagents

| Agent | Role | Triggers Automatically |
|-------|------|------------------------|
| **Reviewer** | Code review | After code changes |
| **Architect** | System design | Planning/refactoring |
| **Debugger** | Bug hunting | When something breaks |

Subagents run in separate context windows — no pollution.

---

## Skills System

Skills are auto-invoked expertise modules.

**Included:**
- `skill-creator` — Meta-skill for creating new skills

**How to add skills:**
1. Create folder in `.claude/skills/[skill-name]/`
2. Add `SKILL.md` with YAML frontmatter
3. Claude auto-loads when relevant

**Official Anthropic skills:**
```bash
/plugin marketplace add anthropics/skills
/plugin install document-skills@anthropic-agent-skills
```

---

## MCP Configuration ⚡

MCPs connect AI agents to external tools. This template includes **8 essential servers**:

**Included (Tier 1):**
- 🔥 **Firecrawl** — Web scraping & crawling (API key required)
- 🐙 **GitHub** — PR creation, code review (API key required)
- 📚 **Context7** — Up-to-date library docs (prevents hallucination)
- 🧠 **Sequential-Thinking** — Complex multi-step reasoning
- 🔍 **Brave Search** — Real-time web search (API key required)
- 🤖 **Sub-Agents** — Specialized task agents (test-writer, reviewer)
- 🌐 **Puppeteer** — Browser automation & E2E testing
- 💻 **Desktop Commander** — File system, terminal, processes

**These MCPs turn your AI agents into a powerhouse.**

**Setup:**
1. Copy `env.template` to `.env`
2. Add your API keys (see `MCP-GUIDE.md`)
3. Run `claude mcp list` to verify

**Documentation:**
- **[MCP-ANALYSIS.md](./MCP-ANALYSIS.md)** — Deep dive & recommendations
- **[MCP-GUIDE.md](./MCP-GUIDE.md)** — Setup & usage guide

---

## Key Commands

| Command | What It Does |
|---------|--------------|
| `/model [name]` | Switch models (opus/sonnet/haiku) |
| `/compact` | Free up context window |
| `/ship` | Test, lint, commit, push |
| `/init` | Auto-generate CLAUDE.md |
| `/agents` | Manage subagents |
| `/context` | View context usage |
| `/clear` | Fresh conversation |
| `Esc Esc` | Rewind changes |
| `Alt+T` | Toggle thinking mode |
| `Alt+P` | Switch model mid-prompt |

---

## Model Strategy

| Model | Use For |
|-------|---------|
| **Opus** | Complex reasoning, architecture, starting projects |
| **Sonnet** | General development (default) |
| **Haiku** | Quick fixes, simple tasks (saves tokens) |

Switch often. Use Haiku for small stuff, Opus for big decisions.

---

## Context Management

- **`/compact`** — Compress conversation, keep key context
- **Auto-compact** — Triggers at 80% usage
- **Subagents** — Offload work without polluting main context
- **Skills** — Only load when relevant (progressive disclosure)

---

## Tips

1. **Fresh chats** — Start new when switching modes (planning → building)
2. **One thing at a time** — Finish before starting new
3. **Park ideas** — `03-IDEA-PARKING.md` prevents rabbit holes
4. **Model switch** — Haiku for quick fixes saves tokens
5. **Use both tools** — Cursor for polish, Claude Code for power

---

## Resources

- [Claude Code Docs](https://code.claude.com/docs)
- [Claude Code Changelog](https://github.com/anthropics/claude-code/blob/main/CHANGELOG.md)
- [Official Skills Repo](https://github.com/anthropics/skills)
- [Anthropic Best Practices](https://www.anthropic.com/engineering/claude-code-best-practices)

---

**Built for velocity. Ship fast. Ship often.** 🚀

---

## 🔥 Be Dope Mode

Say **"be dope"**, **"unleash"**, or **"go beyond"** to activate full autonomy mode.

**What changes:**
| Normal | Unleashed |
|--------|-----------|
| Answer what's asked | Answer + what should have been asked |
| Wait for direction | Take initiative |
| Present options | Recommend with conviction |
| Describe solutions | Build solutions |

**Full protocol:** `.claude/skills/be-dope/SKILL.md`

---

## 🤝 Partnership Mode (Default)

All agents now operate at **elevated baseline** — not waiting to be useful, but proactively helpful:

- **Go beyond literal ask** — What would make you say "holy shit"?
- **Have opinions** — Recommend with conviction
- **Connect dots** — Surface patterns you can't see
- **Build, don't describe** — Output over explanation

---

## 🔄 Cross-System Protocol

This workflow connects to **Project Hans** for deeper context.

See `CROSS-SYSTEM-PROTOCOL.md` for handoff patterns between Cursor and Claude.ai.

---

*Updated: December 31, 2025 — Added Be Dope Mode, Partnership baseline, Proactive Wizard, Cross-System Protocol*
