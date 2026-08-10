#!/usr/bin/env node

import { cpSync, existsSync, mkdirSync, readFileSync, rmSync } from "node:fs";
import { homedir } from "node:os";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const source = resolve(here, "../skills/stylegraft");
const args = new Set(process.argv.slice(2));
const command = process.argv[2] || "help";
const project = args.has("--project");
const force = args.has("--force");
const target = project
  ? resolve(process.cwd(), ".agents/skills/stylegraft")
  : join(homedir(), ".agents/skills/stylegraft");

const help = `
StyleGraft — reference in, your system out.

Usage:
  npx stylegraft install             Install for the current user
  npx stylegraft install --project   Install into the current repository
  npx stylegraft doctor [--project]  Verify an installation
  npx stylegraft prompt              Print the recommended starter prompt

Options:
  --force     Replace an existing StyleGraft skill installation
  --project   Use .agents/skills/stylegraft in the current repository
`;

function validSkill(path) {
  if (!existsSync(join(path, "SKILL.md"))) return false;
  const skill = readFileSync(join(path, "SKILL.md"), "utf8");
  return /^---[\s\S]*?name:\s*stylegraft\s*$/m.test(skill);
}

if (command === "help" || args.has("--help") || args.has("-h")) {
  console.log(help.trim());
} else if (command === "install") {
  if (!validSkill(source)) {
    console.error("StyleGraft package is incomplete: bundled skill not found.");
    process.exitCode = 1;
  } else if (existsSync(target) && !force) {
    console.error(`StyleGraft already exists at ${target}`);
    console.error("Run again with --force to replace it.");
    process.exitCode = 1;
  } else {
    if (existsSync(target)) rmSync(target, { recursive: true });
    mkdirSync(dirname(target), { recursive: true });
    cpSync(source, target, { recursive: true });
    console.log(`Installed StyleGraft at ${target}`);
    console.log("Restart Codex if the skill does not appear, then invoke $stylegraft.");
  }
} else if (command === "doctor") {
  if (validSkill(target)) {
    console.log(`StyleGraft is ready at ${target}`);
  } else {
    console.error(`No valid StyleGraft installation found at ${target}`);
    process.exitCode = 1;
  }
} else if (command === "prompt") {
  console.log("$stylegraft Inspect this repository, use the attached full-page reference, and create DESIGN.md before implementation.");
} else {
  console.error(`Unknown command: ${command}`);
  console.log(help.trim());
  process.exitCode = 1;
}
