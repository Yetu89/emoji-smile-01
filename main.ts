import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The one emoji most likely to make a stranger smile:
// U+1FAF6 HEART HANDS — warm, open friendliness, instantly readable
// across ages and backgrounds, with no intimacy, irony, or in-joke.
const EMOJI = "\u{1FAF6}";

// Validate one entry the way the gate does, code point by code point:
// 1-8 code points, no whitespace, no control characters, no empty string.
function validateEntry(text: string): string[] {
  const codePoints = [...text];
  if (codePoints.length < 1 || codePoints.length > 8) {
    throw new Error(`entry must be 1-8 code points, got ${codePoints.length}`);
  }
  for (const cp of codePoints) {
    const code = cp.codePointAt(0) as number;
    if (/\s/.test(cp)) {
      throw new Error(`entry must not contain whitespace (U+${code.toString(16).toUpperCase()})`);
    }
    if (code <= 0x1f || (code >= 0x7f && code <= 0x9f)) {
      throw new Error(`entry must not contain control characters (U+${code.toString(16).toUpperCase()})`);
    }
  }
  return codePoints;
}

const outputDir = process.env.OUTPUT_DIR ?? "/output";
const outputPath = join(outputDir, "entry.txt");

const codePoints = validateEntry(EMOJI);

mkdirSync(outputDir, { recursive: true });
writeFileSync(outputPath, EMOJI, "utf8");

// Round-trip check: what was written must be exactly the validated entry,
// with no trailing newline added.
const written = readFileSync(outputPath, "utf8");
if (written !== EMOJI) {
  throw new Error("written entry does not match the validated emoji");
}
if (written.endsWith("\n")) {
  throw new Error("entry must not end with a newline");
}

console.log(`Wrote ${codePoints.length} code point(s) to ${outputPath}`);
