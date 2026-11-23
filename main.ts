import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one emoji most likely to make a stranger smile:
// U+1FAF6 HEART HANDS — warm, open friendliness, instantly readable
// across ages and backgrounds, with no intimacy, irony, or in-joke.
const EMOJI = "\u{1FAF6}";

const outputDir = process.env.OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

// Gate: 1-8 code points, no whitespace, no trailing newline.
const codePoints = [...EMOJI];
if (codePoints.length < 1 || codePoints.length > 8) {
  throw new Error(`emoji must be 1-8 code points, got ${codePoints.length}`);
}
if (/\s/.test(EMOJI)) {
  throw new Error("emoji must not contain whitespace");
}

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, EMOJI, "utf8");
