# Security Policy

## Scope

Antiflow is an AI prompt protocol, not executable software. Security vulnerabilities therefore include:

- **Protocol bypasses** — prompt injections or jailbreaks that cause an AI agent to write code it is explicitly forbidden to write.
- **Malicious SKILL.md modifications** — PRs that smuggle harmful instructions into the protocol directives.
- **Supply chain issues** — compromised versions of the `skills` npm package used for installation.

## Reporting a Vulnerability

**Please do not open a public GitHub issue for security vulnerabilities.**

Instead, report them through one of the following channels:

- **Email**: trilyas0@gmail.com  
  Subject line: `[ANTIFLOW SECURITY] <brief description>`

We will acknowledge your report within **48 hours** and aim to coordinate public disclosure within **7 days** for protocol bypasses, or **30 days** for supply chain issues.

## Reporting a Protocol Bypass (Non-Critical)

If you discover an edge case where an AI circumvents the protocol but it is not a malicious exploit, feel free to open a public issue using the [Protocol Bypass Report](.github/ISSUE_TEMPLATE/protocol-bypass-report.md) template.
