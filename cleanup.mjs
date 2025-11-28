import { readdir, unlink } from "node:fs/promises";
import { join } from "node:path";

const DIRS_TO_SKIP = new Set(["docs", "test", "node_modules", ".github", ".idea"]);
const FILE_NAME_ENDS_WITH = new Set([".js", ".d.ts", ".js.map"]);

async function walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = join(dir, entry.name);
    if (entry.isDirectory()) {
      if (DIRS_TO_SKIP.has(entry.name)) {
        continue;
      }
      await walk(fullPath);
    } else {
      if ([...FILE_NAME_ENDS_WITH].some((ending) => entry.name.endsWith(ending))) {
        try {
          await unlink(fullPath);
          /* eslint-disable-next-line no-console */
          console.log("Removed: ", fullPath);
        } catch (error) {
          /* eslint-disable-next-line no-console */
          console.error("Failed to remove: ", fullPath, "-", error?.message || error);
        }
      }
    }
  }
}

async function main() {
  const root = process.cwd();
  /* eslint-disable-next-line no-console */
  console.log("Cleaning up: ", root);
  await walk(root);
}

main().catch((err) => {
  /* eslint-disable-next-line no-console */
  console.error(err);
  process.exitCode = 1;
});
