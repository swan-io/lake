import chalk from "chalk";
import { exec as originalExec } from "child_process";
import fs from "fs";
import path from "pathe";
import prompts from "prompts";
import semverGt from "semver/functions/gt.js";
import url from "url";

const dirname = path.dirname(url.fileURLToPath(import.meta.url));
const { version } = JSON.parse(fs.readFileSync(path.join(dirname, "../../package.json")));

const exec = command => {
  return new Promise((resolve, reject) => {
    originalExec(command, (err, stdout) => {
      if (err) {
        reject(err);
      } else {
        resolve(stdout);
      }
    });
  });
};

async function bump() {
  console.log(`${chalk.white("---")}`);
  console.log(`${chalk.green("Swan front-end")}`);
  console.log(`${chalk.white("---")}`);
  console.log("");
  console.log(`${chalk.gray("i")} ${chalk.blue("info")} Current version: ${version}`);
  const response = await prompts({
    type: "text",
    name: "version",
    message: `${chalk.gray("question")} New version:`,
  });
  let nextVersion = response.version;

  try {
    if (!semverGt(nextVersion, version)) {
      console.error(`${chalk.red("ERROR")} ${version} cannot be added after ${nextVersion}`);
      return process.exit(1);
    }
  } catch (_) {
    console.error(`${chalk.red("ERROR")} ${version} couln't be parsed`);
    return process.exit(1);
  }

  const info = await exec("yarn --json workspaces info");
  const packages = JSON.parse(info);
  const data = JSON.parse(packages.data);

  Object.values(data).forEach(({ location }) => {
    const packageJson = JSON.parse(
      fs.readFileSync(path.join(process.cwd(), location, "package.json"), "utf-8"),
    );
    fs.writeFileSync(
      path.join(process.cwd(), location, "package.json"),
      JSON.stringify({ ...packageJson, version: nextVersion }, null, 2) + "\n",
      "utf-8",
    );
  });

  try {
    await exec(`yarn version --new-version ${nextVersion} --no-git-tag-version`);
    await exec(
      `git add package.json ${Object.values(data)
        .map(({ location }) => path.join(process.cwd(), location, "package.json"))
        .join(" ")}`,
    );
    await exec(`git commit -m v${nextVersion}`);
    await exec(`git tag -a v${nextVersion} -m v${nextVersion}`);
  } catch (err) {
    console.log(err);
    return process.exit(1);
  }
}

bump();
