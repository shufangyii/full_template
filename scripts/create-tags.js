import { readFileSync } from "fs";
import { execSync } from "child_process";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = join(__dirname, "..");

// Read package versions
const packages = [
  // { path: "apps/api/package.json", name: "@my/api" },
  // { path: "apps/service/package.json", name: "@my/service" },
  // { path: "apps/web/package.json", name: "@my/web" },
  { path: "meta/package.json", name: "@my/meta" },
];

console.log("🏷️  Creating git tags...");

packages.forEach(({ path, name }) => {
  const pkgPath = join(rootDir, path);
  const pkg = JSON.parse(readFileSync(pkgPath, "utf-8"));
  const tag = `${name}@${pkg.version}`;

  try {
    // Check if tag already exists
    execSync(`git rev-parse ${tag}`, { stdio: "ignore" });
    console.log(`⏭️  Tag ${tag} already exists, skipping`);
  } catch {
    // Tag doesn't exist, create it
    execSync(`git tag ${tag}`, { stdio: "inherit" });
    console.log(`✅ Created tag: ${tag}`);
  }
});

console.log("📤 Pushing tags to remote...");
try {
  execSync("git push --follow-tags", { stdio: "inherit" });
  console.log("✅ Tags pushed successfully!");
} catch (error) {
  console.error("❌ Failed to push tags:", error.message);
  process.exit(1);
}

console.log("✨ Done!");
