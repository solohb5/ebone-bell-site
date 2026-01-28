# 🎯 MCP Quick Reference Card

**Print this. Keep it handy. Use it daily.**

---

## 🔥 The Essential 8

| Icon | MCP | One-Line Purpose | Example Command |
|------|-----|------------------|-----------------|
| 🔥 | **Firecrawl** | Scrape any website | "Scrape https://example.com/pricing" |
| 🐙 | **GitHub** | Automate git | "Create PR for my changes" |
| 📚 | **Context7** | Current API docs | "Show me React 18 hooks API" |
| 🧠 | **Sequential-Thinking** | Complex reasoning | "Plan a microservices architecture" |
| 🔍 | **Brave Search** | Real-time search | "Search for Next.js 14 tutorials" |
| 🤖 | **Sub-Agents** | Task specialists | "Create test-writer agent for auth.ts" |
| 🌐 | **Puppeteer** | Browser automation | "Test the login flow on localhost:3000" |
| 💻 | **Desktop Commander** | File system | "List all TypeScript files" |

---

## ⚡ Quick Commands

### Firecrawl
```
"Scrape https://competitor.com and extract pricing"
"Crawl https://docs.example.com and get all pages"
"Extract product names from https://store.com"
```

### GitHub
```
"Create PR: Add user authentication"
"List my open issues"
"Show commits on main branch"
"Review PR #42"
```

### Context7
```
"What's the latest Next.js routing API?"
"Show me Tailwind CSS grid classes"
"React useState documentation"
```

### Sequential-Thinking
```
"Plan the architecture for a chat app"
"Debug why my component re-renders infinitely"
"Design a database schema for e-commerce"
```

### Brave Search
```
"What's the latest Node.js version?"
"Search for 'React Server Components tutorial'"
"Find recent AI coding assistant articles"
```

### Sub-Agents
```
"Create test-writer agent and test UserAuth.ts"
"Create code-reviewer agent and review my last commit"
"Create docs-writer agent and document the API"
```

### Puppeteer
```
"Test the login flow on my app"
"Take screenshot of https://example.com"
"Fill out and submit the contact form"
```

---

## 🔗 Chain Them Together

### Pattern: Research → Build → Test → Ship

```
You: "Build a pricing page based on competitor research"

AI: 
1. Brave Search: "SaaS pricing page best practices"
2. Firecrawl: Scrape 3 competitor pricing pages
3. Sequential-Thinking: Plan the component structure
4. Context7: Check latest React/Tailwind APIs
5. Build the component
6. Sub-Agents: Generate tests
7. Puppeteer: Run E2E tests
8. GitHub: Create PR

Done in one conversation.
```

---

## 🔑 API Keys Cheat Sheet

| Service | Free Tier | Get Key |
|---------|-----------|---------|
| Firecrawl | 500 credits/mo | [firecrawl.dev](https://firecrawl.dev) |
| GitHub | Unlimited | [github.com/settings/tokens](https://github.com/settings/tokens) |
| Brave | 2,000 queries/mo | [brave.com/search/api](https://brave.com/search/api) |

**Setup:**
```bash
cp env.template .env
# Edit .env and add keys
```

---

## 🎯 When to Use Which

| Task | Use This MCP |
|------|--------------|
| Get website content | Firecrawl |
| Search for info | Brave Search |
| Check API docs | Context7 |
| Complex planning | Sequential-Thinking |
| Code review | Sub-Agents (code-reviewer) |
| Write tests | Sub-Agents (test-writer) |
| E2E testing | Puppeteer |
| Create PR | GitHub |
| File operations | Desktop Commander |

---

## 💡 Pro Tips

1. **Chain MCPs** - Use multiple in one conversation for best results
2. **Start with Brave** - Search first, then scrape with Firecrawl
3. **Use Sub-Agents** - Create specialized agents for repetitive tasks
4. **Check Context7** - Before using any API, verify it's current
5. **Test with Puppeteer** - Automate E2E tests for user flows

---

## 🚨 Troubleshooting

| Problem | Solution |
|---------|----------|
| "MCP not found" | Run `claude mcp list` to verify |
| "API key invalid" | Check `.env` file, regenerate key |
| "Rate limit" | Wait or upgrade plan |
| "Server timeout" | Check internet, try again |

---

## 📖 Full Docs

- **Setup:** `MCP-GUIDE.md` → Quick Start
- **Deep Dive:** `MCP-ANALYSIS.md` → All MCPs
- **Summary:** `MCP-SUMMARY.md` → What's included

---

**Keep this handy. Use MCPs daily. Ship faster.** 🚀


