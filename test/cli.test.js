import assert from "node:assert/strict";
import { mkdtempSync, readFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { spawnSync } from "node:child_process";
import test from "node:test";

const cli = new URL("../bin/stylegraft.js", import.meta.url);

test("installs and verifies a project-scoped skill", () => {
  const cwd = mkdtempSync(join(tmpdir(), "stylegraft-test-"));
  const install = spawnSync(process.execPath, [cli.pathname, "install", "--project"], { cwd, encoding: "utf8" });
  assert.equal(install.status, 0, install.stderr);
  assert.match(install.stdout, /Installed StyleGraft/);
  assert.match(readFileSync(join(cwd, ".agents/skills/stylegraft/SKILL.md"), "utf8"), /name: stylegraft/);

  const doctor = spawnSync(process.execPath, [cli.pathname, "doctor", "--project"], { cwd, encoding: "utf8" });
  assert.equal(doctor.status, 0, doctor.stderr);
  assert.match(doctor.stdout, /is ready/);
});

test("does not overwrite an existing installation without force", () => {
  const cwd = mkdtempSync(join(tmpdir(), "stylegraft-test-"));
  spawnSync(process.execPath, [cli.pathname, "install", "--project"], { cwd });
  const again = spawnSync(process.execPath, [cli.pathname, "install", "--project"], { cwd, encoding: "utf8" });
  assert.equal(again.status, 1);
  assert.match(again.stderr, /already exists/);
});
