# Setup Guide (10 Minutes)

This template works with **both Cursor IDE and Claude Code CLI**.

---

## Part 1: Copy Files (2 min)

Copy this entire folder into your project root:
```
your-project/
├── cursor-workflow-template/   ← Copy contents here
├── src/
├── package.json
└── ...
```

---

## Part 2: Customize AGENTS.md (2 min)

Open `AGENTS.md` and fill in:
- Project name and description
- Your tech stack
- Key folders

This auto-loads in every Cursor chat.

---

## Part 3: Customize CLAUDE.md (2 min)

Open `CLAUDE.md` and fill in:
- Project name and description
- Your commands (dev, test, build)
- Code style preferences
- Project structure

This auto-loads in every Claude Code session.

---

## Part 4: Claude Code Setup (3 min)

### Install Claude Code
```bash
npm install -g @anthropic-ai/claude-code
```

### Install Status Line (optional but recommended)
```bash
npx chongu cc-status-line@latest init
```
Shows model, context usage, and costs in real-time.

### Verify Setup
```bash
claude --version
claude  # Start a session
```

### Get Official Skills
```bash
# In Claude Code:
/plugin marketplace add anthropics/skills
/plugin install document-skills@anthropic-agent-skills
```

---

## Part 5: MCP Configuration (5 min) ⭐ IMPORTANT

The `.mcp.json` file configures 8 powerful MCP servers that supercharge your AI agents.

### What's Included

This template comes with **8 essential MCP servers**:

| Server | Purpose | API Key? |
|--------|---------|----------|
| 🔥 **Firecrawl** | Web scraping & crawling | ✅ Required |
| 🐙 **GitHub** | PR creation, code review | ✅ Required |
| 📚 **Context7** | Up-to-date library docs | ❌ No |
| 🧠 **Sequential-Thinking** | Complex problem solving | ❌ No |
| 🔍 **Brave Search** | Real-time web search | ✅ Required |
| 🤖 **Sub-Agents** | Specialized task agents | ❌ No |
| 🌐 **Puppeteer** | Browser automation | ❌ No |
| 💻 **Desktop Commander** | File system access | ❌ No |

### Quick Setup

```bash
# 1. Copy the environment template
cp env.template .env

# 2. Edit .env and add your API keys
# (See MCP-GUIDE.md for detailed instructions)

# 3. Verify MCPs are loaded
claude mcp list
```

### Get Your API Keys (3 min)

**Required keys:**

1. **Firecrawl** (free tier: 500 credits/mo)
   - Get at: https://firecrawl.dev
   - Add to `.env`: `FIRECRAWL_API_KEY=fc-your-key`

2. **GitHub** (unlimited free)
   - Get at: https://github.com/settings/tokens
   - Scopes: `repo`, `workflow`, `read:org`
   - Add to `.env`: `GITHUB_TOKEN=ghp_your-token`

3. **Brave Search** (free tier: 2,000 queries/mo)
   - Get at: https://brave.com/search/api
   - Add to `.env`: `BRAVE_API_KEY=your-key`

**See [MCP-GUIDE.md](./MCP-GUIDE.md) for detailed setup instructions.**

### Why These MCPs?

- 🔥 **Firecrawl** - Scrape any website, extract data, research competitors
- 🐙 **GitHub** - Automate git workflows, create PRs with one command
- 📚 **Context7** - Prevents API hallucination with up-to-date docs
- 🧠 **Sequential-Thinking** - Better reasoning for complex problems
- 🔍 **Brave Search** - Real-time web search for current info
- 🤖 **Sub-Agents** - Specialized agents for code review, testing, etc.
- 🌐 **Puppeteer** - E2E testing and browser automation
- 💻 **Desktop Commander** - File system and terminal access

**These 8 MCPs turn your AI agents into a powerhouse.** 🚀

For complete documentation, see:
- **[MCP-ANALYSIS.md](./MCP-ANALYSIS.md)** - Deep dive into all MCPs
- **[MCP-GUIDE.md](./MCP-GUIDE.md)** - Setup & usage guide

---

## First Session Template

### In Cursor:
```
Read AGENTS.md and 00-START-HERE.md. This is how we work together.

I'm building [describe your project].

Help me set up:
1. Fill in 02-BIG-PICTURE.md with the vision
2. Set today's first task in 01-FOCUS-TODAY.md
```

### In Claude Code:
```
Read CLAUDE.md. This is the project context.

I'm working on [today's task].

Let's build it.
```

---

## Model Strategy

| Model | Cost | Use For |
|-------|------|---------|
| **Opus** | $$$ | Starting projects, architecture, complex problems |
| **Sonnet** | $$ | General development (default) |
| **Haiku** | $ | Quick fixes, simple changes |

Switch in Claude Code: `/model opus`, `/model sonnet`, `/model haiku`

---

## Key Commands

| Command | What It Does |
|---------|--------------|
| `/compact` | Free up context when running low |
| `/ship` | Test, lint, commit, push |
| `/init` | Auto-generate CLAUDE.md for existing codebase |
| `/agents` | Manage subagents |
| `Esc Esc` | Rewind/undo changes |

---

That's it. Start building! 🚀
