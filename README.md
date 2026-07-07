# PM OS — Landing Page + Clickable Prototype

Marketing landing page and a clickable prototype for the three phases of PM OS, built from the PM OS Notion spec (June 2026).

## Run it

```bash
npm install
npm run dev        # http://localhost:5173
```

Production build: `npm run build`, then `npm run preview`.

## Stack

Vite + React 18 + TypeScript + Tailwind CSS + React Router 6. No backend; all data lives in `src/data/*.ts`.

## Routes

| Route | Screen |
| --- | --- |
| `/` | Landing: hero, 3 phase sections, Phase 4 roadmap strip, CTA |
| `/phase-1/setup` | Onboarding wizard + context files |
| `/phase-1/skills` | Skills Library (browse, toggle, view SKILL.md, Skill Builder) |
| `/phase-1/runner` | Skill Runner (/prd-generator mock with reviewer agents) |
| `/phase-1/health` | Context Health + PM Brain upsell (freemium surface) |
| `/phase-1/branding` | Personal Branding queue |
| `/phase-2/dashboard` | Brain overview, memories, priorities |
| `/phase-2/ask` | Ask the Brain (cited answers) |
| `/phase-2/graph` | Knowledge graph (typed edges) |
| `/phase-2/ingest` | Connectors + capture → summarize → distill pipeline |
| `/phase-3/org` | PM org roster + invites |
| `/phase-3/company-brain` | Shared sources with per-source permissions |
| `/phase-3/impact` | Adoption/impact dashboard + Phase 4 teaser |

## Grounding

Content is grounded in these Notion sources:

- **PM OS** (spec): phase definitions, mindmaps (transcribed from page images via browser), architecture map
- **Direction**: "Onboarding = Context + Skills + Workflows + Automation", "Brain = Knowledge / memory", "OS = Onboarding + Brain + Recursive Learning Loops"
- **MVP-1: Building 2nd Brain**: Think → Remember → Create; auto-summarize → distill → structured knowledge
- **PM-OS (mySecond.ai) research**: context file set (company, product, personas, competitors, goals), reviewer agents (CTO / UX / Sales / Exec / Devil's Advocate), skill/workflow concepts
- **GBrain research**: provenance, typed knowledge graph, per-source permissions, nightly maintenance loop
- **Phase-3 map**: "Show the power of 2nd Brain", "Double Down on 2nd Brain", "Expand from single PM to entire PM Org"
- **Phase-4 map** (roadmap teaser only): "Recursive Loops", "Self Learning", "Take this toward true PM_OS or Self Learning OS"

## Invented content (flags)

Everything below is illustrative mock data, not from the Notion sources:

- All specific skill names except `/prd-generator` (documented for mySecond), their SKILL.md contents, run counts and toggle states
- All memories, priorities, graph nodes/edges, canned Q&A answers
- All people (Ava Chen, Rohan Mehta, etc.), team stats, adoption numbers, impact metrics
- Context health scores and "38% activation" style figures
- Workflow names and compositions

Deliberately omitted to stay grounded: pricing numbers (spec says freemium, no price set), testimonials, customer logos.
