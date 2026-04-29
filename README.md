<div align="center">
  <img src="assets/logo.png" alt="Antiflow Logo" width="150" />
  <h1>antiflow</h1>
  <blockquote><b>Vibecoding is a skill issue. Antiflow is the fix.</b></blockquote>
  <br />
  <a href="https://github.com/ilyasstrougouty/antiflow/stargazers"><img src="https://img.shields.io/github/stars/ilyasstrougouty/antiflow?style=flat-square&color=e05d44&labelColor=555555" alt="Stars" /></a>
  <a href="https://github.com/ilyasstrougouty/antiflow"><img src="https://img.shields.io/badge/open%20source-yes-4cc61e?style=flat-square&labelColor=555555" alt="Open Source" /></a>
  <a href="https://github.com/ilyasstrougouty/antiflow/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-4cc61e?style=flat-square&labelColor=555555" alt="License: MIT" /></a>
  <br /><br />
</div>

> **Vibe coding is making developers lazy.**
> Coding isn't supposed to be like watching youtube, it's supposed to be like building a masterpiece, brick by brick. Antiflow does the boring stuff, refuses to write all the logic, and hands you the tasks that matter. It protects your skills from rotting. Take the wheel back.

---

## 🛑 The Core Protocol

Antiflow is an AI coding protocol. It acts as your **AI Tech Lead**. 
It scaffolds boilerplate. It configures environments. It **refuses** to write your core logic.

## ⚙️ How It Works

1. **Intake**. You provide your role, level, and AI assistance ratio.
2. **Scaffolding**. Antiflow builds the project skeleton (directories, configs, boilerplate).
3. **Stubs**. Domain logic belonging to you gets stubbed: `// TODO: [USER]`.
4. **Ticket Queue**. Antiflow centralizes all stubs into a `TODO.md` file.
5. **Refusal**. Ask the AI to complete your assigned tasks. It will refuse.

## ❓ Why Antiflow?

AI coding assistants are getting better at writing code. That's the problem.

| Without Antiflow | With Antiflow |
|---|---|
| AI writes everything. You review. | AI scaffolds. You build. |
| You forget how to think through problems. | You stay sharp on what matters. |
| The codebase is the AI's — you just deploy it. | The logic is yours — you own it. |
| "I'll just ask the AI" becomes your default. | The hard problems stay on your plate. |

Antiflow isn't anti-AI. It's anti-atrophy.


## 🚀 Usage

### 1. Installation
Pick your agent and run the corresponding command in your terminal. This will install the `SKILL.md` file into your agent's correct directory.

| Agent | Install |
| --- | --- |
| **Claude Code** | `npx skills add ilyasstrougouty/antiflow -a claude-code` |
| **Google Antigravity** | `npx skills add ilyasstrougouty/antiflow -a antigravity` |
| **Gemini CLI** | `gemini extensions install https://github.com/ilyasstrougouty/antiflow` |
| **Cursor** | `npx skills add ilyasstrougouty/antiflow -a cursor` |
| **Windsurf** | `npx skills add ilyasstrougouty/antiflow -a windsurf` |
| **Copilot** | `npx skills add ilyasstrougouty/antiflow -a github-copilot` |
| **Cline** | `npx skills add ilyasstrougouty/antiflow -a cline` |
| **Any other** | `npx skills add ilyasstrougouty/antiflow` |

### 2. Activation
Once installed, open your AI agent and start a new chat by saying:
> **"Activate the Antiflow protocol."**

### 3. Configuration
The AI will intercept your request and ask for the following parameters before it writes any code:

| Parameter | Options | Default | Description |
|-----------|---------|---------|-------------|
| `ROLE` | `Backend` / `Frontend` / `Mobile` / `Data` / `Security` | **Required** | Defines the domain logic to protect. |
| `LEVEL` | `junior` / `mid` / `senior` | **Required** | Calibrates task difficulty and hint depth. |
| `PROJECT` | *String* | **Required** | Brief description of the project. |
| `STACK` | *String* / `no preference` | Inferred | Target language or framework. |
| `AI_ASSISTANCE` | `0–100%` (any value, e.g. `30%`) | `0%` | Ratio of domain logic the AI will write. |

### 4. Build
The AI will scaffold the project, generate a `TODO.md` file, and assign the core business logic to **you**. If you try to ask the AI to complete your assigned tickets, it will refuse.

---
**Get ready to write some code.**
