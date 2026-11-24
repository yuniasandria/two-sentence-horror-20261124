import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PART_A =
  "My son asked me to check under his bed for monsters, the way I did when I was his age. ";
const PART_B =
  "I found my own childhood drawings down there, still warm, of the thing that used to live under mine.";
const STORY = PART_A + PART_B;

// Guard: the entry must be exactly two sentences and at most 400 characters.
const sentenceCount = STORY.split(".").filter((s) => s.trim().length > 0).length;
if (sentenceCount !== 2 || STORY.length > 400) {
  throw new Error(
    `invalid story: ${sentenceCount} sentences, ${STORY.length} chars`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
