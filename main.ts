import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY =
  "My son asked me to check under his bed for monsters, the way I did when I was his age. " +
  "I found my own childhood drawings down there, still warm, of the thing that used to live under mine.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY, "utf8");
