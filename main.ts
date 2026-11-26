import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

// The Best Meal You Ever Had — one sentence, at most 200 characters.
// Concrete, personal, single specific moment: a roadside pempek stall in
// Palembang, the sharp cuko, and the vendor's second bowl on the house.
const ENTRY =
  "At a roadside stall in Palembang, I ate pempek drowned in cuko so sharp it made my eyes water, and the vendor laughed and ladled me a second bowl on the house.";

const outPath = process.env.ENTRY_OUTPUT ?? "/output/entry.txt";

// Gate the entry the same way the bounty scorer does: 1-200 characters,
// a single sentence, nothing but the sentence itself.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Entry is ${ENTRY.length} characters, must be 1-200.`);
}
if (ENTRY.trim() !== ENTRY || /\n/.test(ENTRY)) {
  throw new Error("Entry must be a single line with no surrounding whitespace.");
}

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to ${outPath}`);
