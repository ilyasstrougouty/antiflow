# Changelog

All notable changes to the Antiflow protocol will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] - 2026-04-29

### Added
- Official support for **Google Antigravity** as an installation target.
- `CONTRIBUTING.md` with guidelines for adding new agent adapters.
- `CHANGELOG.md` to track protocol versions.
- `FULLSTACK` as a first-class `{ROLE}` option with its own forbidden implementations table entry.

### Changed
- Updated YAML frontmatter `description` in `SKILL.md` to use the Antigravity Agent Manager trigger format.
- Restructured README `Usage` section into a clear 4-step chronological guide (Install → Activate → Configure → Build).
- Simplified Google Antigravity install command to use `npx skills add` for consistency.

---

## [1.0.0] - 2026-04-28

### Added
- Initial release of the Antiflow protocol.
- `SKILL.md` with 5 directives: Intake, Anti-Slop Override, Scaffolding Rule, Inline Stub Format, TODO.md Generator, and Refusal Protocol.
- Support for Claude Code, Gemini CLI, Cursor, Windsurf, Copilot, and Cline.
- Role-based forbidden implementations for `backend`, `frontend`, `fullstack`, `mobile`, `devops`, `data engineer`, `security`, and `ml`.
- Level-calibrated task assignment for `junior`, `mid`, and `senior` developers.
- `AI_ASSISTANCE` parameter (`0%`, `50%`, `100%`) for configurable logic ownership.
