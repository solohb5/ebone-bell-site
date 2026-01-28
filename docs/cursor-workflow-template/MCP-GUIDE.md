# 🚀 MCP Setup & Usage Guide

**Complete guide to setting up and using MCP servers in your projects**

---

## 📋 Table of Contents

1. [Quick Start (5 Minutes)](#quick-start)
2. [Getting API Keys](#getting-api-keys)
3. [Server-by-Server Guide](#server-guide)
4. [Usage Examples](#usage-examples)
5. [Troubleshooting](#troubleshooting)
6. [Best Practices](#best-practices)

---

## 🎯 Quick Start (5 Minutes)

### Step 1: Copy Template Files

When starting a new project from this template:

```bash
# Copy the template to your new project
cp -r cursor-workflow-template/ my-new-project/
cd my-new-project/
```

### Step 2: Set Up Environment Variables

```bash
# Copy the env template
cp env.template .env

# Edit .env and add your API keys
# (See "Getting API Keys" section below)
```

### Step 3: Verify MCP Configuration

```bash
# In Claude Code, verify MCPs are loaded
claude mcp list

# You should see all 8 Tier 1 servers listed
```

### Step 4: Test a Server

```bash
# In Cursor or Claude Code, try:
# "Use Firecrawl to scrape https://example.com"
# "Search Brave for 'React hooks best practices'"
# "Create a GitHub PR for my latest changes"
```

**Done!** Your MCPs are ready to use.

---

## 🔑 Getting API Keys

### 1. Firecrawl (CRITICAL)

**What it does:** Web scraping, crawling, content extraction

**Free tier:** 500 credits/month (generous for most projects)

**Steps:**
1. Go to [firecrawl.dev](https://firecrawl.dev)
2. Click "Sign Up" (free account)
3. Go to Dashboard → API Keys
4. Copy your API key (starts with `fc-`)
5. Add to `.env`: `FIRECRAWL_API_KEY=fc-your-key-here`

**Test it:**
```
"Use Firecrawl to scrape the homepage of https://news.ycombinator.com"
```

---

### 2. GitHub (CRITICAL)

**What it does:** PR creation, code review, repo management

**Free tier:** Unlimited (uses your GitHub account)

**Steps:**
1. Go to [github.com/settings/tokens](https://github.com/settings/tokens)
2. Click "Generate new token (classic)"
3. Name it: "MCP Server Access"
4. Select scopes:
   - ✅ `repo` (full control of private repos)
   - ✅ `workflow` (update GitHub Actions)
   - ✅ `read:org` (read org data)
5. Click "Generate token"
6. Copy token (starts with `ghp_`)
7. Add to `.env`: `GITHUB_TOKEN=ghp_your-token-here`

**Test it:**
```
"List my GitHub repositories"
"Create a PR for my current branch"
```

---

### 3. Brave Search (HIGH PRIORITY)

**What it does:** Real-time web search

**Free tier:** 2,000 queries/month

**Steps:**
1. Go to [brave.com/search/api](https://brave.com/search/api)
2. Click "Get Started"
3. Sign up for free tier
4. Copy your API key
5. Add to `.env`: `BRAVE_API_KEY=your-key-here`

**Test it:**
```
"Search Brave for 'Next.js 14 app router tutorial'"
"What are the latest React best practices?"
```

---

### 4. Sentry (Optional - Tier 2)

**What it does:** Error tracking & monitoring

**Free tier:** 5,000 events/month

**Steps:**
1. Go to [sentry.io](https://sentry.io)
2. Sign up for free
3. Create a project
4. Copy your DSN from Settings → Client Keys
5. Add to `.env`: `SENTRY_DSN=your-dsn-here`

---

## 📚 Server-by-Server Guide

### 🔥 Firecrawl

**When to use:**
- Scraping competitor websites
- Extracting product data, pricing, reviews
- Gathering research data
- Converting web pages to markdown
- Crawling entire sites

**Commands:**
```
"Scrape https://example.com and extract all product names"
"Crawl https://docs.example.com and get all documentation pages"
"Extract the pricing table from https://competitor.com/pricing"
```

**Pro tips:**
- Returns clean markdown (perfect for AI processing)
- Handles JavaScript-rendered content automatically
- Respects rate limits (won't get you blocked)
- Can crawl entire sites systematically

---

### 🐙 GitHub

**When to use:**
- Creating PRs from current branch
- Reviewing code changes
- Managing issues
- Checking CI/CD status
- Repo management

**Commands:**
```
"Create a PR for my current branch with title 'Add user authentication'"
"List all open issues in this repo"
"Show me the latest commits on main branch"
"Review the changes in PR #42"
```

**Pro tips:**
- Automates git workflows (no more manual PR creation)
- Can review code and suggest improvements
- Integrates with CI/CD pipelines
- Works with private repos (if token has access)

---

### 📚 Context7

**When to use:**
- Looking up API documentation
- Checking library versions
- Preventing outdated API usage
- Learning new libraries

**Commands:**
```
"What's the latest React useState API?"
"Show me Next.js 14 routing examples"
"What are the Tailwind CSS breakpoint classes?"
```

**Pro tips:**
- Always up-to-date (no hallucinated APIs)
- Covers major frameworks and libraries
- Saves time googling docs
- Prevents bugs from outdated examples

---

### 🧠 Sequential-Thinking

**When to use:**
- Complex architecture decisions
- Multi-step problem solving
- Planning large features
- Debugging tricky issues

**Commands:**
```
"Help me architect a real-time chat system"
"Plan the steps to migrate from REST to GraphQL"
"Debug why my React component re-renders infinitely"
```

**Pro tips:**
- Makes AI think step-by-step (better reasoning)
- Great for complex problems
- Shows its thinking process
- Can revise and backtrack

---

### 🔍 Brave Search

**When to use:**
- Real-time information (news, trends)
- Documentation lookup
- Research and discovery
- Finding code examples

**Commands:**
```
"What's the latest version of Node.js?"
"Search for 'React Server Components tutorial'"
"Find recent articles about AI coding assistants"
```

**Pro tips:**
- Real-time results (unlike AI training data)
- Privacy-focused (no tracking)
- Great for current events
- Complements Firecrawl (search → scrape)

---

### 🤖 Sub-Agents

**When to use:**
- Code review
- Test generation
- Documentation writing
- Specialized tasks

**Commands:**
```
"Create a test-writer sub-agent and write tests for UserAuth.ts"
"Create a code-reviewer sub-agent and review my last commit"
"Create a docs-writer sub-agent and document the API endpoints"
```

**Pro tips:**
- Each sub-agent is specialized (better quality)
- Can run multiple sub-agents in parallel
- Great for repetitive tasks
- Inspired by Claude Code's sub-agent pattern

---

### 🌐 Puppeteer

**When to use:**
- E2E testing
- Screenshot generation
- Form automation
- Web scraping (when Firecrawl isn't enough)

**Commands:**
```
"Open https://myapp.com and test the login flow"
"Take a screenshot of https://example.com"
"Fill out the contact form on my site and submit it"
```

**Pro tips:**
- Full browser automation (clicks, typing, navigation)
- Great for testing user flows
- Can handle complex interactions
- Complements Firecrawl (Firecrawl for content, Puppeteer for interaction)

---

### 💾 Pieces (Optional - Tier 2)

**When to use:**
- Sharing context between Cursor and Claude.ai
- Long-term memory across sessions
- Saving important code snippets
- Cross-tool collaboration

**Commands:**
```
"Save this code snippet to Pieces for later"
"Recall what we discussed about authentication yesterday"
"Share this context with my other AI tools"
```

**Pro tips:**
- Acts as shared memory across LLMs
- Great for multi-day projects
- Monitors activity automatically
- Free to use

---

## 💡 Usage Examples

### Example 1: Competitive Research

**Goal:** Research competitor pricing

```
You: "Use Firecrawl to scrape the pricing pages of:
- https://competitor1.com/pricing
- https://competitor2.com/pricing
- https://competitor3.com/pricing

Extract all plan names, prices, and features into a comparison table."

AI: *Uses Firecrawl to scrape all three sites*
    *Extracts structured data*
    *Creates markdown comparison table*
```

**Result:** Complete competitive analysis in 30 seconds.

---

### Example 2: Ship a Feature

**Goal:** Build, test, and ship a new feature

```
You: "I've built a new user dashboard. Let's ship it."

AI: *Uses Sub-Agents to:*
    1. Review code quality
    2. Generate tests
    3. Run tests with Puppeteer
    4. Create PR with GitHub MCP
    
    "✅ Code reviewed, tests passing, PR #42 created"
```

**Result:** Feature shipped with quality checks in minutes.

---

### Example 3: Debug Production Issue

**Goal:** Find and fix a production bug

```
You: "Users report the checkout page is broken"

AI: *Uses Brave Search to check if it's a known issue*
    *Uses Puppeteer to test the checkout flow*
    *Uses Context7 to check Stripe API changes*
    *Uses Sequential-Thinking to diagnose root cause*
    
    "Found it: Stripe API v2 deprecated. Here's the fix..."
```

**Result:** Bug diagnosed and fixed in one conversation.

---

### Example 4: Research & Build

**Goal:** Build a feature based on latest best practices

```
You: "Build a React Server Component for displaying blog posts"

AI: *Uses Brave Search for "React Server Components 2025 best practices"*
    *Uses Context7 for Next.js 14 App Router docs*
    *Builds component with latest patterns*
    *Uses Sub-Agents to generate tests*
```

**Result:** Modern, best-practice code with zero hallucination.

---

## 🔧 Troubleshooting

### "MCP server not found"

**Problem:** Server isn't loading

**Solutions:**
1. Check `.mcp.json` syntax (valid JSON?)
2. Verify server name matches exactly
3. Run `claude mcp list` to see loaded servers
4. Restart Cursor/Claude Code

---

### "API key invalid"

**Problem:** Authentication failing

**Solutions:**
1. Check `.env` file exists and has correct keys
2. Verify no extra spaces in API keys
3. Check key hasn't expired (GitHub tokens can expire)
4. Regenerate key if needed

---

### "Rate limit exceeded"

**Problem:** Hit API limits

**Solutions:**
1. **Firecrawl:** Upgrade plan or wait for monthly reset
2. **Brave Search:** 2,000 queries/mo limit, upgrade if needed
3. **GitHub:** Very high limits, rarely hit
4. Check usage in service dashboard

---

### "Server timeout"

**Problem:** Server not responding

**Solutions:**
1. Check internet connection
2. Verify service isn't down (check status pages)
3. Try again (temporary network issue)
4. Increase timeout in `.mcp.json` if needed

---

## ✅ Best Practices

### 1. Use the Right Tool

| Task | Best MCP |
|------|----------|
| Get web content | Firecrawl |
| Search for info | Brave Search |
| Test user flows | Puppeteer |
| Create PRs | GitHub |
| Check API docs | Context7 |
| Complex planning | Sequential-Thinking |
| Code review | Sub-Agents |

### 2. Chain MCPs Together

**Example:** Research → Build → Test → Ship

```
1. Brave Search: Find best practices
2. Context7: Check API docs
3. Sub-Agents: Generate tests
4. Puppeteer: Run E2E tests
5. GitHub: Create PR
```

### 3. Start with Free Tiers

All Tier 1 MCPs have generous free tiers:
- Firecrawl: 500 credits/mo (plenty for most projects)
- Brave Search: 2,000 queries/mo
- GitHub: Unlimited
- Others: No API key needed

**Upgrade only when you hit limits.**

### 4. Secure Your Keys

✅ **DO:**
- Keep `.env` in `.gitignore`
- Use separate keys per project
- Rotate keys periodically
- Use read-only keys when possible

❌ **DON'T:**
- Commit `.env` to git
- Share keys in chat/email
- Use production keys in dev
- Give keys more permissions than needed

### 5. Monitor Usage

Check your dashboards monthly:
- Firecrawl: Dashboard → Usage
- Brave Search: Developer Portal → Usage
- GitHub: Settings → Developer settings

**Set up alerts** when approaching limits.

---

## 🎓 Next Steps

1. ✅ Set up your API keys (see "Getting API Keys")
2. ✅ Test each MCP with simple commands
3. ✅ Try the usage examples above
4. ✅ Build something awesome!

---

## 📖 Additional Resources

- [MCP-ANALYSIS.md](./MCP-ANALYSIS.md) - Detailed analysis of all MCPs
- [Firecrawl Docs](https://docs.firecrawl.dev)
- [GitHub API Docs](https://docs.github.com/en/rest)
- [Brave Search API Docs](https://brave.com/search/api)
- [Anthropic MCP Docs](https://docs.anthropic.com/mcp)

---

## 🆘 Need Help?

**Common questions:**

**Q: Do I need all 8 Tier 1 MCPs?**  
A: No, but they're all valuable. Start with Firecrawl + GitHub + Context7 (the 3 CRITICAL ones).

**Q: Are the free tiers enough?**  
A: Yes, for 90% of projects. Upgrade only if you hit limits.

**Q: Can I add more MCPs?**  
A: Absolutely! See `MCP-ANALYSIS.md` Tier 2 & 3 for more options.

**Q: Do MCPs work in both Cursor and Claude Code?**  
A: Yes! The `.mcp.json` config works in both.

**Q: What if a server fails?**  
A: Other servers keep working. MCPs are independent.

---

**You're all set!** Your template is now a powerhouse. 🚀


