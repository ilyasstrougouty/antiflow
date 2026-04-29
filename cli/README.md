# skills

> Install AI agent skills from GitHub into your project with a single command.

## Usage

```bash
npx skills add <owner>/<repo> -a <agent>
```

## Supported Agents

| Agent | Flag | Destination |
|---|---|---|
| Claude Code | `-a claude-code` | `.claude/skills/<skill>/SKILL.md` |
| Google Antigravity | `-a antigravity` | `~/.gemini/antigravity/skills/<skill>/SKILL.md` |
| Cursor | `-a cursor` | `.cursor/rules/<skill>.md` |
| Windsurf | `-a windsurf` | `.windsurf/rules/<skill>.md` |
| GitHub Copilot | `-a github-copilot` | `.github/instructions/<skill>.instructions.md` |
| Cline | `-a cline` | `.cline/rules/<skill>.md` |
| Any other | *(omit `-a`)* | `.agent/skills/<skill>/SKILL.md` |

## Example

```bash
npx skills add ilyasstrougouty/antiflow -a antigravity
```
