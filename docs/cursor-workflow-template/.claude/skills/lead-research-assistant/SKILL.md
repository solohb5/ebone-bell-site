---
name: lead-research-assistant
description: Identifies high-quality leads for your product or service by analyzing your business, searching for target companies, and providing actionable contact strategies. Perfect for sales, business development, and marketing professionals.
---

# Lead Research Assistant

This skill helps you identify and qualify potential leads for your business by analyzing your product/service, understanding your ideal customer profile, and providing actionable outreach strategies.

## When to Use This Skill

- Finding potential customers or clients for your product/service
- Building a list of companies to reach out to for partnerships
- Researching target markets for a new product launch
- Identifying decision-makers at target companies
- Creating personalized outreach strategies
- Validating product-market fit through lead research

## How to Use

### Basic Lead Research
```
I'm building [product description]. Find me 10 companies in 
[location/industry] that would be good leads for this.
```

### From Your Codebase
For even better results, run this from your product's source code directory:
```
Look at what I'm building in this repository and identify the 
top 10 companies in [location/industry] that would benefit from this product.
```

### With Ideal Customer Profile
```
My product: [description]
Ideal customer profile:
- Industry: [industry]
- Company size: [size range]
- Location: [location]
- Current pain points: [pain points]
- Technologies they use: [tech stack]

Find me 20 qualified leads with contact strategies for each.
```


## Output Format

For each lead found, provide:

```markdown
# Lead Research Results

## Summary
- Total leads found: [X]
- High priority (8-10): [X]
- Medium priority (5-7): [X]
- Average fit score: [X]

---

## Lead 1: [Company Name]

**Website**: [URL]
**Priority Score**: [X/10]
**Industry**: [Industry]
**Size**: [Employee count/revenue range]

**Why They're a Good Fit**:
[2-3 specific reasons based on their business]

**Target Decision Maker**: [Role/Title]
**LinkedIn**: [URL if available]

**Value Proposition for Them**:
[Specific benefit for this company]

**Outreach Strategy**:
[Personalized approach - mention specific pain points, 
recent company news, or relevant context]

**Conversation Starters**:
- [Specific point 1]
- [Specific point 2]

---
[Repeat for each lead]
```


## Research Strategy

When researching leads:

1. **Analyze the Product**
   - What problem does it solve?
   - Who has this problem most acutely?
   - What's the value proposition?

2. **Identify Target Signals**
   - Companies using similar/complementary tools
   - Recent funding or growth indicators
   - Job postings indicating relevant needs
   - Industry pain points your product addresses

3. **Search Intelligently**
   - Y Combinator companies in relevant sectors
   - Companies using [competitor] or [related tool]
   - Startups in [industry] that raised recently
   - Companies with [specific job postings]

4. **Qualify Each Lead**
   - Fit score (1-10)
   - Company stage and ability to buy
   - Decision maker accessibility
   - Urgency of the problem you solve

## Example Use Cases

**User**: "I'm building a tool that masks sensitive data in AI coding assistant queries. Find potential leads."

**Output**: Creates a prioritized list of companies that:
- Use AI coding assistants (Cursor, Copilot users)
- Handle sensitive data (fintech, healthcare, enterprise)
- Have security/compliance requirements
- Recently raised funding (can afford new tools)

## Pro Tips

1. **Be specific** about your ideal customer profile
2. **Run from your codebase** for context-aware research
3. **Ask for outreach templates** customized to each lead
4. **Request LinkedIn profiles** for direct contact
5. **Follow up** with "Find me 10 more similar to [best lead]"
