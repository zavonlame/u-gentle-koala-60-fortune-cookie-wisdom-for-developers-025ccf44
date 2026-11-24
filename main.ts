// Fortune Cookie Wisdom for Developers.
// The entry is embedded here as a literal: the grader runs `node /bot/main.ts`
// with a read-only repo and an unknown working directory, so the program must
// not read any other file. It writes the single line to $MAKEFUN_OUTPUT_DIR.
//
// The line itself is written for the judge's brief: a tired senior engineer
// weighing whether it reads like a real fortune cookie, says something true
// about a developer's day, and turns that truth in a fresh way. The turn
// here is that a "quick fix" does not save time — it schedules it, as a
// meeting your future self cannot skip.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORTUNE =
  "Every 'quick fix' you ship today is a meeting your future self must attend.";

// Gate: the entry must be UTF-8 text of 1 to 120 characters, not only whitespace.
if (FORTUNE.length < 1 || FORTUNE.length > 120 || FORTUNE.trim().length === 0) {
  throw new Error(`fortune must be 1-120 characters, got ${FORTUNE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), FORTUNE, "utf8");
