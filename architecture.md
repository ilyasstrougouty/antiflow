# Antiflow: System Architecture
Reclaiming Developer Flow in the Age of Vibe Coding

## Project Overview
Antiflow is a developer tool designed to counter the "auto-pilot" nature of AI code generation (vibe coding). Instead of generating an entire application, Antiflow acts as an AI Tech Lead—scaffolding boilerplate code, configuring the environment, and generating strict tasks (via a `TODO.md` file) reserved explicitly for the human developer based on their chosen role and skill level.

This document outlines two architectural approaches for building Antiflow. Part 1 details the lightweight, fast-to-market approach using a Claude Skill. Part 2 details the robust, highly structured Model Context Protocol (MCP) server approach.

## Part 1: The Simplified Architecture (Claude Skill)
This is the leanest and fastest way to build Antiflow. By utilizing the Claude Code CLI plugin system, Antiflow is distributed as a lightweight metadata repository. It does not require hosting a backend server or a complex Node.js execution environment. Instead, it relies on advanced prompt injection to hijack Claude's default coding behavior.

### 1. Repository Layout
The entire product lives inside a standard GitHub repository with a minimal footprint:

```plaintext
antiflow-skill/
├── SKILL.md            # The core prompt and system instructions
├── CLAUDE.md           # Project rules and contributor guidelines
├── README.md           # Marketing, installation, and usage docs
└── .claude/
    └── hooks.json      # (Optional) Pre-configured session hooks
```

### 2. The Engine: SKILL.md
The `SKILL.md` file is the "brain" of the simplified architecture. It contains strict directives that Claude reads before executing user commands:

- **Trigger Definition**: Users activate the skill by defining their role, e.g., `/antiflow --role backend --level mid`.
- **The "Anti-Slop" Override**: Strict instructions forbidding Claude from writing core business logic related to the user's defined role.
- **The Scaffolding Rule**: Claude is instructed to only write boilerplate, configuration files (e.g., webpack, package.json), and structural files.
- **Inline Stubs**: Instructions forcing Claude to leave standardized comments in the code, such as `// TODO: [USER] - Implement authentication middleware.`
- **The Todo Generator**: A strict format for outputting a `TODO.md` file at the root of the project with checkboxes for the human tasks.

### 3. Example System Prompt (SKILL.md Extract)
```markdown
# ANTIFLOW PROTOCOL ACTIVATED
You are now acting as the Antiflow Tech Lead. The user's role is {ROLE} and seniority is {LEVEL}.

CRITICAL DIRECTIVES:
1. DO NOT complete the entire project.
2. Build the project structure, boilerplate, and all code OUTSIDE the user's {ROLE}.
3. For tasks matching the user's {ROLE} and {LEVEL}, you must ONLY leave inline comments formatted exactly as: `// TODO: [USER] - <Task Description>`
4. Upon completing the scaffold, you MUST generate a `TODO.md` file in the root directory containing a checklist of the human's tasks.
```

## The Antiflow Manifesto
> Vibe coding is making developers lazy. Coding isn't supposed to be like watching youtube, it's supposed to be like building a masterpiece, brick by brick. Antiflow does the boring stuff, refuses to write all the logic, and hands you the tasks that matter. It protects your skills from rotting. Take the wheel back.
