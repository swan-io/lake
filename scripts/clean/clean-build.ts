import chalk from "chalk";
import glob from "glob";
import fs from "node:fs/promises";

async function main() {
  const lakeJsFiles = await glob("packages/lake/src/**/*.js");
  const lakeDtsFiles = await glob("packages/lake/src/**/*.d.ts");
  const sharedBusinessJsFiles = await glob("packages/shared-business/src/**/*.js");
  const sharedBusinessDtsFiles = await glob("packages/shared-business/src/**/*.d.ts");

  const filesToRemove = [
    ...lakeJsFiles,
    ...lakeDtsFiles,
    ...sharedBusinessJsFiles,
    ...sharedBusinessDtsFiles,
  ];

  try {
    await Promise.all(filesToRemove.map(fs.unlink));
    console.log(chalk.green("Build files removed"));
  } catch (e) {
    console.error(e);
    console.error(chalk.red("Failed to remove build files"));
  }
}

void main();
