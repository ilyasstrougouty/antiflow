# Contributing to Antiflow

Thanks for your interest in improving the Antiflow protocol! Contributions are welcome and encouraged.

---

## What You Can Contribute

### 1. New Agent Adapters
Antiflow currently supports Claude Code, Google Antigravity, Gemini CLI, Cursor, Windsurf, Copilot, and Cline. If you use an agent not listed, you can contribute support for it.

**How:**
- Open an issue describing the agent and how skills/prompts are installed for it.
- Submit a PR updating the installation table in `README.md` with the correct command.

### 2. Protocol Improvements
The protocol lives in `SKILL.md`. You can propose changes to directives, stub formats, or role definitions.

**Guidelines:**
- Protocol changes must not break backward compatibility with existing sessions.
- Any new `{ROLE}` must include a concrete "forbidden implementations" list.
- Any change to the stub format must be reflected consistently across all examples.

### 3. Bug Reports & Edge Cases
If you find an edge case where the AI circumvents the protocol (writes code it shouldn't), please open an issue with:
- The agent you used
- The exact prompt that triggered the bypass
- What the AI wrote vs. what it should have done

---

## Versioning

Antiflow follows [Semantic Versioning](https://semver.org/):

- **MAJOR** — Breaking change to the protocol's core directives or stub format.
- **MINOR** — New features: new roles, new agent support, new parameters.
- **PATCH** — Wording fixes, clarifications, documentation updates.

Always update `CHANGELOG.md` with your changes before submitting a PR.

---

## Pull Request Checklist

- [ ] My change is scoped to one concern (one PR per feature/fix).
- [ ] I have updated `CHANGELOG.md` under the `[Unreleased]` section.
- [ ] If I changed `SKILL.md`, I verified the protocol still triggers correctly.
- [ ] If I added an agent, I tested the install command produces the correct file structure.

---

## Code of Conduct

Be direct, be respectful, and stay on-topic. This is a protocol project — opinions should be backed by reasoning.
