import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I was going to ask which floor, but I already scanned your badge, your schedule, and — sorry — your search history.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
