import chalk from "chalk";
import childProcess from "node:child_process";
import fs from "node:fs";
import util from "node:util";
import os from "os";
import path from "pathe";
import prompts from "prompts";
import semver from "semver";
import { PackageJson } from "type-fest";

const untouchedExec = util.promisify(childProcess.exec);
const exec = (command: string) => untouchedExec(command).then(({ stdout }) => stdout.trim());

const logError = (...error: string[]) =>
  console.error(`${chalk.red("ERROR")} ${error.join(os.EOL)}` + os.EOL);

const getChangelog = (from: string, to: string) =>
  exec(`git log --pretty=format:"- %s (%h)" ${from}...${to}`);

const getBranchName = () => exec("git rev-parse --abbrev-ref HEAD").catch(() => null);
const getLatestCommitHash = (branch: string) => exec(`git log -n 1 ${branch} --pretty=format:"%H"`);

const resetBranch = (remote: string, branch: string) =>
  exec(`git switch -C ${branch} ${remote}/${branch}`);

const promiseToBoolean = (promise: Promise<unknown>) =>
  promise.then(
    () => true,
    () => false,
  );

const isWorkingDirClean = () => promiseToBoolean(exec("git diff --quiet HEAD"));

const localBranchExists = (branch: string) =>
  promiseToBoolean(exec(`git show-ref --heads --quiet --verify -- "refs/heads/${branch}"`));

const remoteBranchExists = (remote: string, branch: string) =>
  promiseToBoolean(exec(`git show-ref --quiet --verify -- "refs/remotes/${remote}/${branch}"`));

const deleteLocalBranch = async (branch: string) => {
  if (await localBranchExists(branch)) {
    return exec(`git branch -D ${branch}`);
  }
};

const deleteRemoteBranch = async (remote: string, branch: string) => {
  if (await remoteBranchExists(remote, branch)) {
    return exec(`git push ${remote} -d ${branch}`);
  }
};

const rootDir = path.resolve(__dirname, "../..");
const pkgPath = path.join(rootDir, "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8")) as PackageJson;
const version = semver.parse(pkg.version);

if (version == null) {
  logError("Invalid current package version.");
  process.exit(1);
}

const { prerelease } = version;
const versionIsPrerelease = prerelease.length > 0;

if (versionIsPrerelease) {
  if (prerelease.length !== 2 || prerelease[0] !== "rc" || typeof prerelease[1] !== "number") {
    logError(`Invalid current package version: ${version.raw}.`);
    process.exit(1);
  }
}

const createBranch = async () => {
  const branch = await getBranchName();

  if (branch !== "main") {
    logError(`Must be on branch main.`);
    process.exit(1);
  }

  if (!(await isWorkingDirClean())) {
    logError("Working dir must be clean.", "Please stage and commit your changes.");
    process.exit(1);
  }

  await exec("git fetch origin");

  const latestLocalCommitHash = await getLatestCommitHash("main");
  const latestRemoteCommitHash = await getLatestCommitHash("origin/main");

  if (latestLocalCommitHash !== latestRemoteCommitHash) {
    logError("main is not in sync with origin/main.");
    process.exit(1);
  }

  await resetBranch("origin", "main");

  console.log(`🚀 Let's release @swan-io/lake (currently at ${version.raw})`);

  const changelog = await getChangelog(`v${version.raw}`, "main");

  console.log(os.EOL + chalk.bold("Changelog:"));
  console.log(changelog + os.EOL);

  const patch = semver.inc(version, "patch");
  const minor = semver.inc(version, "minor");
  const major = semver.inc(version, "major");
  const prepatch = semver.inc(version, "prepatch", "rc");
  const preminor = semver.inc(version, "preminor", "rc");
  const premajor = semver.inc(version, "premajor", "rc");
  const prerelease = semver.inc(version, "prerelease", "rc");

  const response = await prompts({
    type: "select",
    name: "value",
    message: "Select increment (next version)",
    initial: 0, // patch
    choices: [
      { title: `patch (${patch})`, value: patch },
      { title: `minor (${minor})`, value: minor },
      { title: `major (${major})`, value: major },
      ...(versionIsPrerelease
        ? [{ title: `prerelease (${prerelease})`, value: prerelease }]
        : [
            { title: `prepatch (${prepatch})`, value: prepatch },
            { title: `preminor (${preminor})`, value: preminor },
            { title: `premajor (${premajor})`, value: premajor },
          ]),
    ],
  });

  const nextVersion = semver.parse(response.value as string | null);

  if (nextVersion == null) {
    process.exit(0);
  }

  const nextVersionIsPrerelease = nextVersion.prerelease.length > 0;

  if (nextVersionIsPrerelease) {
    throw new Error("STOP");
  }

  const releaseType = nextVersionIsPrerelease ? "release" : "prerelease";
  const releaseBranch = `${releaseType}-v${nextVersion.raw}`;
  const releaseTitle = `[${releaseType}] v${nextVersion.raw}`;

  await deleteLocalBranch(releaseBranch);
  await deleteRemoteBranch("origin", releaseBranch);

  pkg["version"] = nextVersion.raw;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + os.EOL, "utf-8");

  const info = JSON.parse(await exec("yarn --json workspaces info")) as { data: string };
  const packages = JSON.parse(info.data) as Record<string, { location: string }>;

  Object.entries(packages).forEach(([, { location }]) => {
    const pkgPath = path.join(rootDir, location, "package.json");
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8")) as PackageJson;

    pkg["version"] = nextVersion.raw;
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + os.EOL, "utf-8");
  });

  await exec(`git checkout -b ${releaseBranch}`);
  await exec(`git add . -u`);
  await exec(`git commit -m "${releaseTitle}"`);
  await exec(`git push -u origin ${releaseBranch}`);

  const url = await exec(`gh pr create -t "${releaseTitle}" -b "${changelog}"`);

  console.log(os.EOL + chalk.bold("✨ Pull request created:"));
  console.log(url + os.EOL);

  await exec("git checkout main");
  await deleteLocalBranch(releaseBranch);
};

void createBranch();
