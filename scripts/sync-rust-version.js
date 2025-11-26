import { readFileSync, writeFileSync } from "fs";
import { dirname, join } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const serviceDir = join(__dirname, "../apps/service");
const packageJsonPath = join(serviceDir, "package.json");
const cargoTomlPath = join(serviceDir, "Cargo.toml");

try {
  const packageJson = JSON.parse(readFileSync(packageJsonPath, "utf8"));
  const newVersion = packageJson.version;

  let cargoToml = readFileSync(cargoTomlPath, "utf8");

  // Regex to match the version in the [package] section
  // It looks for [package] then finds version = "..." before the next section
  const versionRegex = /\[package\]([\s\S]*?)version = ".*?"/;

  if (!versionRegex.test(cargoToml)) {
    console.error("Could not find [package] version in Cargo.toml");
    process.exit(1);
  }

  cargoToml = cargoToml.replace(
    versionRegex,
    `[package]$1version = "${newVersion}"`
  );

  writeFileSync(cargoTomlPath, cargoToml);
  console.log(`Updated Cargo.toml version to ${newVersion}`);
} catch (error) {
  console.error("Error syncing version:", error);
  process.exit(1);
}
