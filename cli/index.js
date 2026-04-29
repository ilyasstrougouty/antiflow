#!/usr/bin/env node

'use strict';

const https = require('https');
const fs = require('fs');
const path = require('path');
const os = require('os');

// ─── ANSI Colors ─────────────────────────────────────────────────────────────
const c = {
  reset:  '\x1b[0m',
  bold:   '\x1b[1m',
  green:  '\x1b[32m',
  cyan:   '\x1b[36m',
  yellow: '\x1b[33m',
  red:    '\x1b[31m',
  dim:    '\x1b[2m',
};

// ─── Agent Directory Map ──────────────────────────────────────────────────────
// Maps -a <agent> to the correct destination path for SKILL.md
const AGENT_PATHS = {
  'claude-code':     (skillName) => path.join(process.cwd(), '.claude', 'skills', skillName, 'SKILL.md'),
  'antigravity':     (skillName) => path.join(os.homedir(), '.gemini', 'antigravity', 'skills', skillName, 'SKILL.md'),
  'cursor':          (skillName) => path.join(process.cwd(), '.cursor', 'rules', `${skillName}.md`),
  'windsurf':        (skillName) => path.join(process.cwd(), '.windsurf', 'rules', `${skillName}.md`),
  'github-copilot':  (skillName) => path.join(process.cwd(), '.github', 'instructions', `${skillName}.instructions.md`),
  'cline':           (skillName) => path.join(process.cwd(), '.cline', 'rules', `${skillName}.md`),
  'default':         (skillName) => path.join(process.cwd(), '.agent', 'skills', skillName, 'SKILL.md'),
};

// ─── Helpers ──────────────────────────────────────────────────────────────────
function log(symbol, color, message) {
  console.log(`${color}${symbol}${c.reset} ${message}`);
}

function success(msg) { log('✔', c.green,  msg); }
function info(msg)    { log('›', c.cyan,   msg); }
function warn(msg)    { log('⚠', c.yellow, msg); }
function error(msg)   { log('✖', c.red,    msg); process.exit(1); }

function fetch(url) {
  return new Promise((resolve, reject) => {
    const request = (targetUrl) => {
      https.get(targetUrl, (res) => {
        if (res.statusCode === 301 || res.statusCode === 302) {
          return request(res.headers.location);
        }
        if (res.statusCode !== 200) {
          return reject(new Error(`HTTP ${res.statusCode} — ${targetUrl}`));
        }
        let data = '';
        res.on('data', (chunk) => { data += chunk; });
        res.on('end', () => resolve(data));
      }).on('error', reject);
    };
    request(url);
  });
}

function ensureDir(filePath) {
  fs.mkdirSync(path.dirname(filePath), { recursive: true });
}

// ─── CLI Parsing ──────────────────────────────────────────────────────────────
function parseArgs(argv) {
  const args = argv.slice(2);
  const command   = args[0];
  const skillId   = args[1]; // e.g. "ilyasstrougouty/antiflow"
  const agentFlag = args.indexOf('-a');
  const agent     = agentFlag !== -1 ? args[agentFlag + 1] : 'default';
  return { command, skillId, agent };
}

function validateSkillId(skillId) {
  if (!skillId || !skillId.includes('/')) {
    error(`Invalid skill identifier "${skillId}". Expected format: <owner>/<repo> (e.g. ilyasstrougouty/antiflow)`);
  }
  const [owner, repo] = skillId.split('/');
  return { owner, repo };
}

// ─── Commands ─────────────────────────────────────────────────────────────────
async function add(skillId, agent) {
  const { owner, repo } = validateSkillId(skillId);

  const skillName  = repo;
  const rawUrl     = `https://raw.githubusercontent.com/${owner}/${repo}/main/SKILL.md`;
  const resolveDir = AGENT_PATHS[agent] || AGENT_PATHS['default'];
  const destPath   = resolveDir(skillName);

  if (!AGENT_PATHS[agent] && agent !== 'default') {
    warn(`Unknown agent "${agent}". Falling back to default path.`);
  }

  console.log('');
  console.log(`${c.bold}  skills add${c.reset} ${c.cyan}${skillId}${c.reset} ${c.dim}-a ${agent}${c.reset}`);
  console.log('');

  info(`Fetching ${c.cyan}${rawUrl}${c.reset}`);

  let content;
  try {
    content = await fetch(rawUrl);
  } catch (err) {
    error(`Failed to fetch SKILL.md: ${err.message}`);
  }

  info(`Writing to ${c.dim}${destPath}${c.reset}`);

  try {
    ensureDir(destPath);
    fs.writeFileSync(destPath, content, 'utf8');
  } catch (err) {
    error(`Failed to write file: ${err.message}`);
  }

  console.log('');
  success(`${c.bold}${skillName}${c.reset} installed for ${c.cyan}${agent}${c.reset}`);
  console.log('');
  console.log(`  ${c.dim}Activate by saying: "Activate the Antiflow protocol."${c.reset}`);
  console.log('');
}

function printHelp() {
  console.log(`
${c.bold}skills${c.reset} — Install AI agent skills from GitHub

${c.bold}Usage:${c.reset}
  skills add <owner>/<repo> [options]

${c.bold}Options:${c.reset}
  -a, --agent <name>   Target agent (default: default)

${c.bold}Supported agents:${c.reset}
  claude-code       → .claude/skills/<skill>/SKILL.md
  antigravity       → ~/.gemini/antigravity/skills/<skill>/SKILL.md
  cursor            → .cursor/rules/<skill>.md
  windsurf          → .windsurf/rules/<skill>.md
  github-copilot    → .github/instructions/<skill>.instructions.md
  cline             → .cline/rules/<skill>.md
  default           → .agent/skills/<skill>/SKILL.md

${c.bold}Example:${c.reset}
  npx skills add ilyasstrougouty/antiflow -a antigravity
`);
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  const { command, skillId, agent } = parseArgs(process.argv);

  if (!command || command === '--help' || command === '-h') {
    printHelp();
    process.exit(0);
  }

  if (command !== 'add') {
    error(`Unknown command "${command}". Run "skills --help" for usage.`);
  }

  await add(skillId, agent);
}

main().catch((err) => {
  error(err.message);
});
