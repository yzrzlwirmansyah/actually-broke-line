import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "The app crashed loading your 4,000-tab session — it ran out of memory first. Close some tabs, relaunch, and we'll both pretend it was your idea.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
