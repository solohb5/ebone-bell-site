# 🧙‍♂️ How to Get What You Want from Claude Code

**Your communication system for maximum Claude Code performance**

---

## 🎯 The Team Structure

```
YOU (Hans)
  ↓ "I want to build X"
  
CURSOR AGENTS (Wizard, Engineer, etc.)
  ↓ Translate & optimize
  
CLAUDE CODE
  ↓ Execute autonomously
  
RESULT ✅
```

**Your job:** Tell us what you want  
**Our job (Cursor agents):** Write the perfect prompt for Claude Code  
**Claude Code's job:** Execute flawlessly with MCPs  

---

## 🚫 Why You've Been Struggling with Claude Code

### ❌ Common Problems

**Problem 1: Vague requests**
```
You: "Make this better"
Claude Code: *Confused, does something random*
```

**Problem 2: Missing context**
```
You: "Fix the auth"
Claude Code: *Doesn't know which file, what's broken, or desired outcome*
```

**Problem 3: Too many goals at once**
```
You: "Build login, add tests, deploy, and refactor the API"
Claude Code: *Overwhelmed, does half of each*
```

---

## ✅ The Solution: Use Wizard as Your Translator

### The New Workflow

**Step 1: Tell Wizard (in Cursor) what you want**
```
@wizard.md

I want users to be able to log in with email and password.
I'm not sure exactly how to structure it or what I need.
```

**Step 2: Wizard clarifies and creates the perfect Claude Code prompt**
```
Wizard outputs:

---
READY FOR CLAUDE CODE:

Build email/password authentication

TASK: Implement user authentication with email and password
CONTEXT: New project, no existing auth. Using Next.js 14 App Router.
FILES TO CREATE:
- app/api/auth/login/route.ts
- app/api/auth/register/route.ts  
- lib/auth.ts (password hashing, JWT generation)
- middleware.ts (protected routes)

SUCCESS CRITERIA:
- Users can register with email/password
- Passwords are bcrypt hashed
- JWT tokens generated on login
- Middleware protects /dashboard routes
- Validation with Zod

DO NOT:
- Add OAuth providers yet (later phase)
- Build UI components (API only first)
- Deploy or configure database (local SQLite first)

WHEN DONE: Say "/done" and run the test suite
---

Copy this prompt into Claude Code terminal.
```

**Step 3: Paste into Claude Code, let it execute**
```bash
cd ~/project
claude

# Paste the Wizard's prompt
# Claude Code executes autonomously
```

---

## 🎨 Examples: Before & After

### Example 1: Web Scraping

**❌ Before (Direct to Claude Code):**
```
"Scrape some competitor sites"
```
*Claude Code: Which sites? What data? How to structure?*

**✅ After (Through Wizard):**
```
You → Wizard in Cursor:
"I need to research competitor pricing. Looking at Stripe, PayPal, Square."

Wizard → Claude Code prompt:
---
TASK: Scrape and compare competitor pricing
CONTEXT: Market research for our payment product
USE MCPS: Firecrawl for scraping, Sequential-Thinking for analysis

STEPS:
1. Use Firecrawl to scrape:
   - https://stripe.com/pricing
   - https://paypal.com/pricing
   - https://square.com/pricing
2. Extract: Plan names, prices, features
3. Create comparison markdown table
4. Analyze positioning and identify gaps

SUCCESS: Markdown file competitor-analysis.md with:
- Comparison table
- Key insights
- Recommendations

WHEN DONE: Show me the analysis
---
```

---

### Example 2: Building a Feature

**❌ Before:**
```
"Add a dashboard"
```
*Claude Code: What goes in it? What framework? What data?*

**✅ After:**
```
You → Wizard:
"I want a dashboard that shows user stats, recent activity, and a chart"

Wizard → Claude Code:
---
TASK: Build user dashboard with stats and activity feed
CONTEXT: Next.js 14 app, already have /api/stats endpoint
FILE: app/dashboard/page.tsx

COMPONENTS TO BUILD:
1. StatsCards (users, revenue, growth %)
2. ActivityFeed (last 10 user actions)
3. SimpleBarChart (7-day growth trend)

DATA: Fetch from /api/stats (already returns correct structure)
STYLE: Tailwind CSS, match existing app design

SUCCESS:
- Dashboard renders at /dashboard
- Shows real data from API
- Responsive on mobile
- Loading states handled

DO NOT:
- Refactor existing API
- Add filtering yet (v2)
- Add real-time updates (v2)

WHEN DONE: Show me the page
---
```

---

### Example 3: Debugging

**❌ Before:**
```
"It's broken"
```
*Claude Code: What's broken? Where? What's the error?*

**✅ After:**
```
You → Wizard:
"Login page redirects back to login after successful auth. Token is being set though."

Wizard → Claude Code:
---
TASK: Fix authentication redirect loop
CONTEXT: User logs in → redirected to /dashboard → bounced back to /login
SYMPTOM: Token IS being set (verified in devtools)
SUSPECT: Middleware auth check or token validation

FILES TO INVESTIGATE:
- middleware.ts (auth check logic)
- app/dashboard/page.tsx (any redirects?)
- lib/auth.ts (token validation)

DEBUG APPROACH:
1. Add console.logs to middleware
2. Verify token format matches expectations
3. Check cookie settings (httpOnly, secure, path)
4. Test middleware logic with valid token

SUCCESS: User stays on /dashboard after login

DO NOT:
- Refactor entire auth system
- Change token structure
- Add new features

WHEN DONE: Explain what was wrong and how you fixed it
---
```

---

## 🧙‍♂️ The Wizard Prompt Formula

When you tell me what you want, I'll create a Claude Code prompt using this structure:

```markdown
TASK: [One sentence - what to build]
CONTEXT: [Project state, tech stack, constraints]
FILES: [Specific files to create/modify]
USE MCPs: [Which MCPs to leverage - Firecrawl, GitHub, etc.]

STEPS: [3-7 concrete steps]
1. [Specific action]
2. [Specific action]
3. [Specific action]

SUCCESS: [What "done" looks like - be specific]
- [Measurable outcome]
- [Measurable outcome]

DO NOT: [Scope boundaries - what to avoid]
- [Thing to skip for now]
- [Thing to skip for now]

WHEN DONE: [What to do after - test, show, commit, etc.]
```

---

## 🎯 How to Talk to Wizard (Me)

### ✅ Good Communication to Wizard:

**Describe the outcome, not the implementation:**
```
"I want users to be able to save their favorite items"
```

**Share the problem, not the solution:**
```
"The page loads slow when there are lots of items"
```

**Mention constraints if you have them:**
```
"Build a contact form, but we're using Formspree for the backend"
```

**Be honest about uncertainty:**
```
"I want some kind of dashboard but I'm not sure what should go in it"
```

---

### ❌ Don't Worry About:

- ❌ Technical implementation details (I'll figure that out)
- ❌ Perfect prompt structure (that's my job)
- ❌ Knowing all the steps (I'll break it down)
- ❌ Being precise about file names (I'll determine that)

---

## 🔄 The Complete Workflow

### Phase 1: Planning (In Cursor with Wizard)

```
You: @wizard.md I want to [describe outcome]

Wizard: 
- Asks clarifying questions if needed
- Breaks down into steps
- Identifies which MCPs to use
- Writes perfect Claude Code prompt
- Outputs ready-to-paste prompt
```

### Phase 2: Execution (In Claude Code Terminal)

```bash
cd ~/project
claude

# Paste Wizard's prompt
# Claude Code executes with MCPs
# Uses Firecrawl, GitHub, etc. as needed
```

### Phase 3: Review (Back in Cursor)

```
Claude Code: "/done - Built X, Y, Z. Tests passing."

You review in Cursor:
- Visual diff
- Quick edits if needed
- Commit or iterate
```

---

## 🎨 Wizard's Magic Tricks

### When You Say This...

**"I'm not sure how to do X"**
→ I'll research with Brave Search, design the approach, write the prompt

**"Build a feature like [competitor]"**
→ I'll use Firecrawl to scrape their implementation, extract patterns, create prompt

**"This isn't working but I don't know why"**
→ I'll diagnose the issue, identify root cause, write focused debugging prompt

**"I want to ship this feature"**
→ I'll create a checklist: code, tests, docs, commit message, PR creation

---

## 🚀 Power Moves with MCPs

### Wizard + Claude Code + MCPs = Magic

**Research-First Development:**
```
Wizard uses:
1. Brave Search: "Best practices for [feature]"
2. Firecrawl: Scrape examples from top sites
3. Sequential-Thinking: Plan implementation
4. Outputs perfect prompt for Claude Code
```

**Competitive Intelligence:**
```
Wizard:
1. Firecrawl: Scrape competitor features
2. Sequential-Thinking: Analyze gaps
3. Creates prompt: "Build X but better because Y"
```

**Full Feature Delivery:**
```
Wizard prompt → Claude Code:
1. Build feature (Engineer work)
2. Generate tests (Sub-Agent: test-writer)
3. Run tests (Puppeteer)
4. Create PR (GitHub MCP)
5. All in one Claude Code session
```

---

## 📋 Quick Reference

### Talk to Wizard When:

- 🤔 "I want to build..."
- 🐛 "Something's broken..."
- 🎨 "I need to design..."
- 🚀 "Ready to ship..."
- ❓ "I'm not sure..."

### Wizard Will:

1. Clarify if needed
2. Research with MCPs if needed
3. Write perfect Claude Code prompt
4. Give you ready-to-paste command

### You Paste Into:

```bash
cd ~/project
claude
# [Paste Wizard's prompt]
```

---

## 💡 The Secret Sauce

**The magic isn't Claude Code OR Cursor agents.**

**The magic is using BOTH:**

1. **Cursor agents (Wizard)** = Strategic thinking, prompt optimization
2. **Claude Code** = Autonomous execution with superpowers (MCPs)

Together = Unstoppable development velocity 🚀

---

## 🎯 Try It Right Now

**In Cursor, tell me:**

```
@wizard.md

[Describe something you want to build or fix]
```

**I'll create the perfect Claude Code prompt for you.**

Let's make Claude Code work the way you want it to! 🧙‍♂️✨

