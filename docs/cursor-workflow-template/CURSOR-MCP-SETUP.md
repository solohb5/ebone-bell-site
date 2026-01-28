# 🎯 Cursor MCP Setup Guide

**How to properly configure MCPs in Cursor IDE**

---

## 🔍 Understanding Cursor's MCP System

**Cursor uses:** Docker MCP Gateway  
**Requirement:** Docker Desktop must be running  
**Architecture:** Centralized server management through Docker

---

## ✅ Prerequisites

1. **Docker Desktop installed and running**
   ```bash
   # Check if Docker is running:
   docker ps
   
   # If you get "Cannot connect to Docker daemon"
   # → Open Docker Desktop app
   ```

2. **Cursor IDE installed** (you have this ✅)

---

## 🚀 Setup Steps

### Step 1: Start Docker Desktop

1. Open **Docker Desktop** app
2. Wait for it to fully start (Docker icon turns green in menu bar)
3. Verify: `docker ps` should work without errors

---

### Step 2: Add Firecrawl to Docker MCP

**Method A: Using Docker MCP CLI**

```bash
# Search for Firecrawl in the catalog
docker mcp catalog show | grep firecrawl

# Add Firecrawl server
docker mcp server add firecrawl

# Configure with your API key
docker mcp secret set FIRECRAWL_API_KEY fc-46d66881c00b4fb5a20dc195ed40ba8a
```

**Method B: Using Cursor's Built-in MCP Tools**

In Cursor chat, you can use:
- `mcp-find` - Search for servers
- `mcp-add` - Add a server
- `mcp-config-set` - Configure server settings

---

### Step 3: Restart Cursor

After adding servers:
1. Quit Cursor completely (Cmd+Q)
2. Reopen Cursor
3. The new MCPs will load automatically

---

## 🧪 Test It Works

In Cursor chat:

```
Use Firecrawl to scrape https://news.ycombinator.com
```

If it works, you're done! ✅

---

## 📊 MCP Comparison

### Claude Code (Direct NPX)

**Pros:**
- No Docker needed
- Simple setup
- Works immediately
- Lightweight

**Cons:**
- Less isolation
- Each tool manages separately

**Config:** `~/.config/claude/mcp.json`

---

### Cursor (Docker Gateway)

**Pros:**
- Better isolation
- Centralized management
- Share across tools
- Enterprise-ready

**Cons:**
- Requires Docker Desktop
- More complex architecture

**Config:** Docker MCP gateway

---

## 🎯 Recommended Workflow

**For MCP-heavy work (scraping, automation):**
→ Use **Claude Code** (terminal)
- No Docker needed
- All MCPs work immediately
- Perfect for autonomous tasks

**For visual editing:**
→ Use **Cursor IDE**
- Great for file browsing
- Tab completion
- Visual diffs
- MCPs available when Docker running

---

## 🔧 Troubleshooting

### "Docker Desktop is not running"
→ Open Docker Desktop app and wait for it to start

### "Firecrawl not found"
→ Add it: `docker mcp server add firecrawl`

### "API key invalid"
→ Set secret: `docker mcp secret set FIRECRAWL_API_KEY your-key`

### MCPs not loading after Docker starts
→ Restart Cursor (Cmd+Q and reopen)

---

## 💡 Pro Tip

**You don't NEED Cursor MCPs if you have Claude Code!**

Claude Code MCPs work perfectly and don't require Docker.  
Use Cursor for visual work, Claude Code for MCP work.

**Both tools are valuable - use the right one for the job!** 🚀

---

## 📝 Quick Reference

```bash
# Start Docker Desktop (GUI app)
open -a "Docker"

# Verify Docker is running
docker ps

# Add Firecrawl
docker mcp server add firecrawl

# Set API key
docker mcp secret set FIRECRAWL_API_KEY fc-YOUR-KEY

# List active servers
docker mcp server list

# Restart Cursor
# (Cmd+Q, then reopen)
```

---

**Now you understand the architecture and can set up MCPs properly!** 🎓

