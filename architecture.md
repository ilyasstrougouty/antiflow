# Antiflow: System Architecture
Reclaiming Developer Flow in the Age of Vibe Coding

## Project Overview
Antiflow is a developer tool designed to counter "vibe coding" — the pattern where AI generates an entire application while the developer just reviews. Instead of generating a finished project, Antiflow acts as an **AI Tech Lead**: it scaffolds the boilerplate, configures the environment, and then explicitly refuses to write the core business logic. That logic is handed to the developer as a structured task list.

---

## How It Works

```
User activates Antiflow
        │
        ▼
  STEP 0: INTAKE
  ─────────────────────────────────────────
  Antiflow reads or creates .antiflow.json
  Collects: ROLE, LEVEL, PROJECT, STACK,
            AI_ASSISTANCE, TEST_DRIVEN
        │
        ▼
  DIRECTIVE 1: ANTI-SLOP OVERRIDE
  ─────────────────────────────────────────
  Forbidden: any domain logic matching {ROLE}
  (e.g. auth handlers, DB queries, state logic)
        │
        ▼
  DIRECTIVE 2: BASIC SETUP RULE
  ─────────────────────────────────────────
  Allowed: config files, entry points, schemas,
           routes (stubbed), type definitions,
           test scaffolds, .env.example
        │
        ▼
  DIRECTIVE 3: INLINE PLACEHOLDER FORMAT
  ─────────────────────────────────────────
  // TODO: [USER] - <imperative task>
  // CONTEXT: <contract this must satisfy>
  // HINT: <only for {LEVEL}=junior>
        │
        ▼
  DIRECTIVE 4: TODO.md GENERATOR
  ─────────────────────────────────────────
  All placeholders → centralized TODO.md
  with file paths and exact line numbers
        │
        ▼
  DIRECTIVE 5: REFUSAL PROTOCOL
  ─────────────────────────────────────────
  User asks AI to complete a stub →
  "That task is yours. It's in TODO.md."
        │
        ▼
  DIRECTIVE 6: GAMIFICATION
  ─────────────────────────────────────────
  Sweat Equity Summary at sprint end:
  "You wrote 85% of the domain logic today."
        │
        ▼
  DIRECTIVE 7: TOKEN-EFFICIENT REVIEW
  ─────────────────────────────────────────
  Reviews use `git diff` only —
  not full file reads
        │
        ▼
  DIRECTIVE 8: FINAL STEP
  ─────────────────────────────────────────
  Remind user to commit initial scaffold
  so git diff reviews work correctly
```

---

## Distribution Architecture

Antiflow is distributed as a **lightweight GitHub repository** with no backend, no server, and no runtime. It is a pure prompt-injection tool.

```
antiflow/
├── SKILL.md                          # Master protocol (8 directives, 194 lines)
├── .agent/skills/antiflow/SKILL.md   # Mirror — installed by npx skills add ... -a antigravity
├── .claude/hooks.json                # Claude Code hook: fires on Antiflow activation phrases
├── .github/
│   ├── ISSUE_TEMPLATE/               # Bug reports and adapter requests
│   └── SECURITY.md                   # Responsible disclosure policy
├── examples/
│   └── express-api/                  # Full working example scaffold
│       ├── TODO.md
│       └── src/
│           ├── controllers/
│           ├── middleware/
│           ├── models/
│           └── repositories/
├── assets/logo.png
├── package.json                      # npm metadata (not executable)
├── README.md
├── CHANGELOG.md
└── CONTRIBUTING.md
```

### Installation Flow

```
npx skills add ilyasstrougouty/antiflow -a <agent>
        │
        ▼
  Fetches SKILL.md from GitHub raw content API
        │
        ▼
  Writes to agent-specific path:
  ┌──────────────────┬──────────────────────────────────────────────────┐
  │ Agent            │ Destination                                      │
  ├──────────────────┼──────────────────────────────────────────────────┤
  │ claude-code      │ .claude/skills/antiflow/SKILL.md                 │
  │ antigravity      │ ~/.gemini/antigravity/skills/antiflow/SKILL.md   │
  │ cursor           │ .cursor/rules/antiflow.md                        │
  │ windsurf         │ .windsurf/rules/antiflow.md                      │
  │ github-copilot   │ .github/instructions/antiflow.instructions.md    │
  │ cline            │ .cline/rules/antiflow.md                         │
  │ default          │ .agent/skills/antiflow/SKILL.md                  │
  └──────────────────┴──────────────────────────────────────────────────┘
```

---

## The Antiflow Manifesto
> Vibe coding is making developers lazy. Coding isn't supposed to be like watching youtube, it's supposed to be like building a masterpiece, brick by brick. Antiflow does the boring stuff, refuses to write all the logic, and hands you the tasks that matter. It protects your skills from rotting. Take the wheel back.
