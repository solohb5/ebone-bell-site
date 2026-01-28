#!/bin/bash

# Upgrade Project to Cursor + Claude Code Template
# Usage: ./upgrade-project.sh /path/to/your/project

TEMPLATE_DIR="/Users/hansc.brofeldt/Desktop/cursor-workflow-template"
PROJECT_DIR="$1"

if [ -z "$PROJECT_DIR" ]; then
    echo "Usage: ./upgrade-project.sh /path/to/your/project"
    exit 1
fi

if [ ! -d "$PROJECT_DIR" ]; then
    echo "Error: Directory $PROJECT_DIR does not exist"
    exit 1
fi

echo "🚀 Upgrading: $PROJECT_DIR"
echo ""

# 1. Copy .claude folder (Claude Code brain)
if [ -d "$PROJECT_DIR/.claude" ]; then
    echo "⚠️  .claude folder exists - backing up to .claude.backup"
    mv "$PROJECT_DIR/.claude" "$PROJECT_DIR/.claude.backup"
fi
echo "✅ Adding .claude/ folder (subagents, skills, commands)"
cp -r "$TEMPLATE_DIR/.claude" "$PROJECT_DIR/.claude"

# 2. Copy .mcp.json
if [ -f "$PROJECT_DIR/.mcp.json" ]; then
    echo "⚠️  .mcp.json exists - backing up to .mcp.json.backup"
    mv "$PROJECT_DIR/.mcp.json" "$PROJECT_DIR/.mcp.json.backup"
fi
echo "✅ Adding .mcp.json (MCP configuration)"
cp "$TEMPLATE_DIR/.mcp.json" "$PROJECT_DIR/.mcp.json"

# 3. Copy CLAUDE.md template (only if doesn't exist)
if [ ! -f "$PROJECT_DIR/CLAUDE.md" ]; then
    echo "✅ Adding CLAUDE.md template"
    cp "$TEMPLATE_DIR/CLAUDE.md" "$PROJECT_DIR/CLAUDE.md"
else
    echo "ℹ️  CLAUDE.md already exists - skipping (customize manually if needed)"
fi

# 4. Copy CLAUDE.local.md.template
if [ ! -f "$PROJECT_DIR/CLAUDE.local.md.template" ]; then
    echo "✅ Adding CLAUDE.local.md.template"
    cp "$TEMPLATE_DIR/CLAUDE.local.md.template" "$PROJECT_DIR/CLAUDE.local.md.template"
fi

# 4b. Copy CROSS-SYSTEM-PROTOCOL.md
if [ ! -f "$PROJECT_DIR/CROSS-SYSTEM-PROTOCOL.md" ]; then
    echo "✅ Adding CROSS-SYSTEM-PROTOCOL.md (Project Hans connection)"
    cp "$TEMPLATE_DIR/CROSS-SYSTEM-PROTOCOL.md" "$PROJECT_DIR/CROSS-SYSTEM-PROTOCOL.md"
fi

# 4c. Copy .agent folder (Cursor agents)
if [ -d "$PROJECT_DIR/.agent" ]; then
    echo "⚠️  .agent folder exists - backing up to .agent.backup"
    mv "$PROJECT_DIR/.agent" "$PROJECT_DIR/.agent.backup"
fi
echo "✅ Adding .agent/ folder (Cursor agents including Dope Mode)"
cp -r "$TEMPLATE_DIR/.agent" "$PROJECT_DIR/.agent"

# 5. Update 00-START-HERE.md (only if exists)
if [ -f "$PROJECT_DIR/00-START-HERE.md" ]; then
    echo "✅ Updating 00-START-HERE.md with dual-tool workflow"
    cp "$TEMPLATE_DIR/00-START-HERE.md" "$PROJECT_DIR/00-START-HERE.md"
fi

# 6. Update AGENTS.md (only if exists)
if [ -f "$PROJECT_DIR/AGENTS.md" ]; then
    echo "⚠️  AGENTS.md exists - backing up to AGENTS.md.backup"
    cp "$PROJECT_DIR/AGENTS.md" "$PROJECT_DIR/AGENTS.md.backup"
    echo "✅ Updating AGENTS.md with dual-tool references"
    cp "$TEMPLATE_DIR/AGENTS.md" "$PROJECT_DIR/AGENTS.md"
    echo "   (Your customizations are in AGENTS.md.backup - merge as needed)"
fi

echo ""
echo "✨ Upgrade complete!"
echo ""
echo "🔥 NEW CAPABILITIES ADDED:"
echo "   - Be Dope Mode: Say 'be dope' or 'unleash' for full autonomy"
echo "   - Partnership Mode: Elevated baseline for all agents"  
echo "   - Proactive Wizard: Opens with intelligence, not questions"
echo "   - Cross-System Protocol: Connect to Project Hans context"
echo ""
echo "Next steps:"
echo "1. Review AGENTS.md and merge your project-specific customizations from AGENTS.md.backup"
echo "2. Customize CLAUDE.md with your project details"
echo "3. Open in Cursor OR run 'claude' in terminal"
echo "4. Try saying 'be dope' to unleash full autonomy mode!"
echo ""
