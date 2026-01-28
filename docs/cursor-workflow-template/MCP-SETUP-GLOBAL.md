# 🌍 Global MCP Setup (Recommended)

**Set up MCPs once, use them in EVERY project**

---

## Why Global Setup?

✅ Configure once, works everywhere  
✅ Any new project has MCPs automatically  
✅ Old projects get them too  
✅ One set of API keys to manage  

---

## Step 1: Find Your Global Config Location

### For Claude Code:
```bash
# Config location
~/.config/claude/mcp.json

# Create directory if it doesn't exist
mkdir -p ~/.config/claude
```

### For Cursor:
```bash
# Config location (varies by OS)
# macOS:
~/Library/Application Support/Cursor/User/globalStorage/mcp.json

# Or check Cursor settings for exact path
```

---

## Step 2: Copy Template Config to Global

```bash
# Navigate to template
cd /Users/hansc.brofeldt/Desktop/cursor-workflow-template

# Copy to Claude Code global config
cp .mcp.json ~/.config/claude/mcp.json

# Set up global env file
cp env.template ~/.config/claude/.env

# Edit with your API keys
nano ~/.config/claude/.env
# (or use your preferred editor)
```

---

## Step 3: Add Your API Keys to Global .env

Edit `~/.config/claude/.env`:

```bash
# Essential API Keys (add yours)
FIRECRAWL_API_KEY=fc-your-actual-key-here
GITHUB_TOKEN=ghp_your-actual-token-here
BRAVE_API_KEY=your-actual-brave-key-here
```

---

## Step 4: Verify It Works

```bash
# Start Claude Code from ANY directory
cd ~/Desktop/any-project
claude

# In Claude Code:
> /mcp list

# You should see all 8 MCPs loaded ✅
```

**Test in any project:**
```
"List my GitHub repositories"
"Search Brave for 'React best practices'"
```

If it works, you're done! 🎉

---

## Step 5: (Optional) Per-Project Overrides

If you need different MCPs for a specific project:

```bash
# In that project:
cp /path/to/template/.mcp.json .
# Edit to add/remove servers

# Claude Code uses project .mcp.json if it exists
# Falls back to global if not
```

---

## 🎯 The Result

### Before (No Global Setup)
```
new-project/          ← No MCPs ❌
old-project/          ← No MCPs ❌
another-project/      ← No MCPs ❌
```

### After (Global Setup)
```
new-project/          ← Has all 8 MCPs ✅
old-project/          ← Has all 8 MCPs ✅
another-project/      ← Has all 8 MCPs ✅
ANY-project/          ← Has all 8 MCPs ✅
```

**Set up once. Use everywhere. Forever.** 🚀

---

## Security Note

**Global API keys are convenient but sensitive.**

✅ **DO:**
- Use read-only keys when possible
- Rotate keys periodically
- Restrict GitHub token to necessary scopes
- Use separate keys for personal vs work

❌ **DON'T:**
- Share your global config
- Use production keys
- Give keys more permissions than needed

---

## Troubleshooting

**"MCPs not loading in new project"**
```bash
# Verify global config exists
ls -la ~/.config/claude/mcp.json

# Check for syntax errors
cat ~/.config/claude/mcp.json | python -m json.tool
```

**"API key not working"**
```bash
# Verify env file exists
cat ~/.config/claude/.env

# Check for typos, extra spaces
```

**"Works in Claude Code but not Cursor"**
- Cursor has a separate config location
- Check Cursor settings → MCP Configuration
- May need to configure separately

---

## Quick Commands Reference

```bash
# View global MCP config
cat ~/.config/claude/mcp.json

# Edit global env
nano ~/.config/claude/.env

# Test from any directory
cd ~/anywhere && claude
> /mcp list

# Remove global config (if needed)
rm ~/.config/claude/mcp.json
```

---

## Next Steps

1. ✅ Set up global config (steps above)
2. ✅ Add API keys to global .env
3. ✅ Test in any project
4. ✅ Enjoy MCPs everywhere!

**Now every project is a powerhouse by default.** 🎯


