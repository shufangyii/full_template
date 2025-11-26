import { existsSync, readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");
const historyPath = join(rootDir, "HISTORY.md");
const rootPackageJsonPath = join(rootDir, "package.json");

// Apps to track
const apps = ["apps/api", "apps/service", "apps/web"];

try {
  // 1. Get Root Version
  const rootPackageJson = JSON.parse(readFileSync(rootPackageJsonPath, "utf8"));
  const rootVersion = rootPackageJson.version;

  // 2. Get App Versions
  const appVersions = apps.map((appPath) => {
    const pkgPath = join(rootDir, appPath, "package.json");
    const pkg = JSON.parse(readFileSync(pkgPath, "utf8"));
    return { name: pkg.name, version: pkg.version };
  });

  // 3. Read History
  let history = "";
  if (existsSync(historyPath)) {
    history = readFileSync(historyPath, "utf8");
  } else {
    history = "# History\n\nTrack app versions for each product release.\n";
  }

  // 4. Construct the entry
  let entry = `\n## ${rootVersion}\n\n| App | Version |\n| --- | --- |\n`;
  appVersions.forEach(({ name, version }) => {
    entry += `| ${name} | ${version} |\n`;
  });

  // 5. Prepend to history (after the header)
  // Assuming the file starts with "# History\n..."
  const headerMatch = history.match(/^# History.*?\n/s);
  const header = headerMatch ? headerMatch[0] : "# History\n\n";
  const content = history.substring(header.length);

  const newHistory = header + entry + content;

  writeFileSync(historyPath, newHistory);
  console.log(
    `Prepended app versions to HISTORY.md for version ${rootVersion}`
  );
} catch (error) {
  console.error("Error appending app versions:", error);
  process.exit(1);
}
