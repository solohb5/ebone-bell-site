# ✈️ HOW TO FLY THIS PLANE

**Your dual-cockpit system: Cursor + Claude Code**

---

## THE TWO TOOLS

| | **Cursor** | **Claude Code** |
|---|---|---|
| **How it works** | You drive, AI assists | AI drives, you supervise |
| **Start it** | Already open | Run `claude` in terminal |
| **Best for** | Precision work, visual review | Autonomous multi-file builds |
| **Context** | Reads `AGENTS.md`, `.cursorrules` | Reads `CLAUDE.md` |
| **Your role** | Steering wheel | Back seat (but watching) |

---

## WHEN TO USE WHAT

### 🎯 Use CURSOR When:

- **Quick edits** — Change a line, fix a typo
- **Visual review** — See the diff before accepting
- **Design polish** — Fine-tune spacing, colors, copy
- **Learning the code** — Explore files, ask questions
- **Small iterations** — "Make this button bigger"
- **Chat-first work** — "Explain this to me"

### 🚀 Use CLAUDE CODE When:

- **Building features** — "Build the entire hero section"
- **Multi-file changes** — Touch 5+ files at once
- **Refactoring** — "Rename this component everywhere"
- **Git operations** — Commit, push, create PR
- **Autonomous runs** — "Do this whole thing, I'll watch"
- **Running commands** — Tests, builds, deploys
- **When you're tired** — Let it drive, you supervise

---

## WHAT EACH CAN DO (THAT THE OTHER CAN'T)

### Cursor's Superpowers:
- ✅ **Visual diff review** — See exactly what changes before accepting
- ✅ **Tab completion** — Inline suggestions as you type
- ✅ **Multi-file tabs** — Have many files open at once
- ✅ **Cursor agents** — `@wizard`, `@creative`, `@engineer`, etc.
- ✅ **Browser preview** — See the site as you build
- ✅ **Granular control** — Accept/reject each change

### Claude Code's Superpowers:
- ✅ **Autonomous execution** — Works without you approving each step
- ✅ **Shell access** — Runs terminal commands directly
- ✅ **Git operations** — Commit, push, PR creation
- ✅ **Multi-file orchestration** — Coordinates complex changes
- ✅ **`/ship` command** — Test → Lint → Commit → Push in one go
- ✅ **Subagents** — Architect, Debugger, Reviewer
- ✅ **Skills** — Interpreter (upgrades your prompts silently)

---

## THE HANDOFF PROTOCOL

### Cursor → Claude Code

When you're in Cursor and realize "this needs Claude Code":

1. **Save your files** in Cursor (Cmd+S)
2. **Open terminal** in Cursor (or external terminal)
3. **Run:** `claude`
4. **Tell it what to do:** "Continue implementing the hero section"
5. **Watch it work** — It'll ask for permission on destructive actions

### Claude Code → Cursor

When Claude Code finishes a chunk of work:

1. **Claude Code** will tell you what it changed
2. **In Cursor:** Click refresh or re-open changed files
3. **Review visually** — Check the browser preview
4. **Fine-tune in Cursor** — Small adjustments, polish

---

## KEEPING THEM IN SYNC

### The Boards Are Your Source of Truth

Both tools should read and update the same boards:

| Board | Purpose | Who Updates |
|-------|---------|-------------|
| `01-FOCUS-TODAY.md` | Current task | Either tool (when task changes) |
| `02-BIG-PICTURE.md` | Roadmap | You (planning sessions) |
| `03-IDEA-PARKING.md` | Parked ideas | Either tool (when distracted) |

### Sync Commands

**In Cursor:**
> "Update 01-FOCUS-TODAY.md — we just finished [X], now working on [Y]"

**In Claude Code:**
> "Update the focus board — mark hero section complete, start story page"

### The Golden Rule

**Whoever finishes a task updates the board.**

Don't leave it for the other tool. Just update it right there.

---

## PRACTICAL WORKFLOWS

### Workflow 1: Building a Page

```
1. [Cursor] "What's on the focus board?" → Check priorities
2. [Claude Code] "Build the entire story page structure"
3. [Claude Code] "Implement all the copy from SITE-COPY-FINAL.md"
4. [Cursor] Review the changes visually
5. [Cursor] Fine-tune spacing, polish
6. [Claude Code] "/ship" → Commits and pushes
```

### Workflow 2: Fixing a Bug

```
1. [Cursor] "It's broken — the button doesn't work"
2. [Cursor] Fixer agent debugs, proposes fix
3. [Cursor] Review and accept the fix
4. [Cursor] "Looks good, commit this"
   OR
   [Claude Code] "/ship"
```

### Workflow 3: Big Refactor

```
1. [Cursor] "I want to restructure the components"
2. [Cursor → Claude Code] "This needs Claude Code"
3. [Claude Code] "Refactor all components to use new pattern"
4. [Claude Code] Tests pass? → "/ship"
5. [Cursor] Review the result
```

### Workflow 4: End of Session

```
1. [Either tool] "Update focus board with progress"
2. [Claude Code] "/ship" (if there's uncommitted work)
3. Done — boards are current for next session
```

---

## QUICK REFERENCE: CLAUDE CODE COMMANDS

| Command | What It Does |
|---------|--------------|
| `claude` | Start Claude Code |
| `/ship` | Test → Lint → Commit → Push |
| `/help` | See all commands |
| `/clear` | Clear conversation |
| `/compact` | Compress conversation history |
| `Ctrl+C` | Interrupt current action |
| `exit` | Close Claude Code |

---

## SUBAGENTS (CLAUDE CODE ONLY)

Claude Code has specialized subagents it can invoke:

| Subagent | When Used | What It Does |
|----------|-----------|--------------|
| **Architect** | Planning features | Evaluates approaches, recommends structure |
| **Debugger** | Things broken | Root cause analysis, systematic fixing |
| **Reviewer** | Before shipping | Code review, catches issues |

You don't call these directly — Claude Code uses them automatically when appropriate.

---

## THE INTERPRETER SKILL

This is Claude Code's secret weapon. It's **always on**.

When you say something casual like:
> "Make it better"

The interpreter internally translates to:
> "Elevate this to world-class quality. Apply expert-level polish. Every detail should reflect mastery."

You talk like a human. It executes like an expert got the brief.

---

## COMMON QUESTIONS

### "Do they share memory?"

**No.** They're separate conversations. But they share:
- The same codebase
- The same boards (`01-FOCUS-TODAY.md`, etc.)
- The same source files (`AGENTS.md`, `CLAUDE.md`)

### "What if they conflict?"

The **last save wins**. If both are editing the same file:
1. Claude Code saves
2. Cursor shows the file changed
3. You reload in Cursor
4. Continue from there

### "How do I know what changed?"

- **Cursor:** Shows diffs inline
- **Claude Code:** Lists files it touched
- **Git:** `git status`, `git diff`

### "Can I run both at once?"

**Yes**, but be careful. Best practice:
- One does the heavy lifting
- The other watches or works on different files

---

## YOUR DAILY RITUAL

```
MORNING:
1. Open Cursor
2. Read 01-FOCUS-TODAY.md
3. Start building

WHEN STUCK:
→ Small thing? Stay in Cursor
→ Big thing? Switch to Claude Code

BEFORE CLOSING:
1. Update 01-FOCUS-TODAY.md
2. Commit any work (Cursor or /ship)
3. Tomorrow-you will thank you
```

---

## TROUBLESHOOTING

| Problem | Solution |
|---------|----------|
| Claude Code doesn't see changes | Re-read the file: "Read home.tsx again" |
| Cursor doesn't see Claude's changes | Refresh file or close/reopen |
| Boards are out of sync | Pick one tool, update the board |
| Not sure which tool to use | Default to Cursor; switch if it feels slow |
| Claude Code is taking too long | Ctrl+C to interrupt, be more specific |

---

## THE PHILOSOPHY

**Cursor** = Scalpel (precision, control, visual)
**Claude Code** = Chainsaw (power, speed, autonomy)

Both are sharp. Both are useful. Pick the right tool for the cut.

---

*When in doubt: start in Cursor, escalate to Claude Code when you need more power.*






