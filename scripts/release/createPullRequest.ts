import chalk from "chalk";
import childProcess from "node:child_process";
import fs from "node:fs";
import util from "node:util";
import path from "pathe";
import prompts from "prompts";
import semver from "semver";
import { PackageJson } from "type-fest";

const REPO_URL = "https://github.com/swan-io/lake";

type ChildProcess = {
  stdout: string;
  stderr: string;
};

const promisifiedExec = util.promisify(childProcess.exec);

const toOut = ({ stdout, stderr }: ChildProcess) =>
  (stdout === '""' ? "" : stdout.trim()) || (stderr === '""' ? "" : stderr.trim());

const exec = (cmd: string): Promise<{ cmd: string; ok: boolean; out: string }> =>
  promisifiedExec(cmd).then(
    ({ stdout, stderr }: ChildProcess) => ({ cmd, ok: true, out: toOut({ stdout, stderr }) }),
    ({ stdout, stderr }: ChildProcess) => ({ cmd, ok: false, out: toOut({ stdout, stderr }) }),
  );

const logError = (...error: string[]) =>
  console.error(`${chalk.red("ERROR")} ${error.join("\n")}` + "\n");

const rootDir = path.resolve(__dirname, "../..");
const pkgPath = path.join(rootDir, "package.json");
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8")) as PackageJson;
const version = semver.parse(pkg.version);

if (version == null) {
  logError("Invalid current package version");
  process.exit(1);
}

const { prerelease } = version;
const versionIsPrerelease = prerelease.length > 0;

if (versionIsPrerelease) {
  if (prerelease.length !== 2 || prerelease[0] !== "rc" || typeof prerelease[1] !== "number") {
    logError(`Invalid current package version: ${version.raw}`);
    process.exit(1);
  }
}

const createPullRequest = async () => {
  if (!(await exec("which git")).ok) {
    logError("git install not detected", "https://git-scm.com");
    process.exit(1);
  }
  if (!(await exec("which gh")).ok) {
    logError("gh install not detected", "https://cli.github.com");
    process.exit(1);
  }
  if (!(await exec("which yarn")).ok) {
    logError("yarn install not detected", "https://classic.yarnpkg.com");
    process.exit(1);
  }

  if (!(await exec("git rev-parse --git-dir")).ok) {
    logError("Must be in a git repo");
    process.exit(1);
  }
  if ((await exec("git rev-parse --abbrev-ref HEAD")).out !== "main") {
    logError(`Must be on branch main`);
    process.exit(1);
  }

  const isRepoDirty = await Promise.all([
    // https://github.com/nvie/git-toolbelt/blob/v1.9.0/git-is-clean
    exec("git diff-index --cached --quiet --ignore-submodules --exit-code HEAD --").then(_ => _.ok),
    exec("! git diff --no-ext-diff --ignore-submodules --quiet --exit-code").then(_ => _.ok),
    exec("nbr=$(git ls-files --other --exclude-standard | wc -l); [ $nbr -gt 0 ]").then(_ => _.ok),
    // https://github.com/nvie/git-toolbelt/blob/v1.9.0/git-show-skipped
    exec('nbr=$(git ls-files -v | grep "^S" | cut -c3- | wc -l); test $nbr -eq 0').then(_ => _.ok),
  ]).then(([isIndexClean, hasUnstagedChanges, hasUntrackedFiles, isSkipped]) => {
    const isWorktreeClean = !hasUnstagedChanges && !hasUntrackedFiles;
    return !isIndexClean || !isWorktreeClean || !isSkipped;
  });

  if (isRepoDirty) {
    logError("Working dir must be clean", "Please stage and commit your changes");
    process.exit(1);
  }

  await exec("git fetch origin --prune");

  const areLatestCommitIdentical = await Promise.all([
    exec(`git log -n 1 main --pretty=format:"%H"`).then(_ => _.out),
    exec(`git log -n 1 origin/main --pretty=format:"%H"`).then(_ => _.out),
  ]).then(
    ([latestLocalCommitHash, latestRemoteCommitHash]) =>
      latestLocalCommitHash === latestRemoteCommitHash,
  );

  if (!areLatestCommitIdentical) {
    logError("main is not in sync with origin/main");
    process.exit(1);
  }

  console.log(`🚀 Let's release @swan-io/lake (currently at ${version.raw})`);

  await exec('gh config set pager "less -F -X"');
  await exec(`git switch -C main origin/main`);

  const changelog = await exec(`gh pr list --state merged --base main --json title,author,url`);

  if (!changelog.ok) {
    logError(`Can't generate changelog using "gh pr list" command`);
    process.exit(1);
  }

  const changelogItems = (
    JSON.parse(changelog.out) as {
      title: string;
      url: string;
      author: { is_bot: boolean; login: string };
    }[]
  )
    .filter(
      pr =>
        !pr.author.is_bot &&
        !pr.title.startsWith("[release]") &&
        !pr.title.startsWith("[prerelease]"),
    )
    .map(pr => {
      // Sanitize the PR titles to replace quoted content with italic content
      return `- ${pr.title.replace(/["'`]/g, "*")} by @${pr.author.login} in ${pr.url}`;
    });

  if (changelogItems.length > 0) {
    console.log("\n" + chalk.bold("What's Changed"));
    console.log(changelogItems.join("\n") + "\n");
  }

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

  const nextVersion = semver.parse(response.value as string);

  if (nextVersion == null) {
    process.exit(1); // user cancelled
  }

  const releaseType = nextVersion.prerelease.length > 0 ? "prerelease" : "release";
  const releaseBranch = `${releaseType}-v${nextVersion.raw}`;
  const releaseTitle = `[${releaseType}] v${nextVersion.raw}`;

  if ((await exec(`git show-ref --heads --quiet --verify -- "refs/heads/${releaseBranch}"`)).ok) {
    logError(`${releaseBranch} branch already exists`);
    process.exit(1);
  }
  if ((await exec(`git show-ref --quiet --verify -- "refs/remotes/origin/${releaseBranch}"`)).ok) {
    logError(`origin/${releaseBranch} branch already exists`);
    process.exit(1);
  }

  pkg["version"] = nextVersion.raw;
  fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n", "utf-8");

  const info = JSON.parse((await exec("yarn --json workspaces info")).out) as { data: string };
  const packages = JSON.parse(info.data) as Record<string, { location: string }>;

  Object.entries(packages).forEach(([, { location }]) => {
    const pkgPath = path.join(rootDir, location, "package.json");
    const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8")) as PackageJson;

    pkg["version"] = nextVersion.raw;
    fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n", "utf-8");
  });

  await exec(`git checkout -b ${releaseBranch}`);
  await exec(`git add . -u`);
  await exec(`git commit -m "${releaseTitle}"`);
  await exec(`git push -u origin ${releaseBranch}`);

  const releaseNotes =
    (changelogItems.length > 0
      ? "## What's Changed" + "\n\n" + changelogItems.join("\n") + "\n\n"
      : "") + `**Full Changelog**: ${REPO_URL}/compare/v${version.raw}...v${nextVersion.raw}`;

  const url = await exec(`gh pr create -t "${releaseTitle}" -b "${releaseNotes}"`);

  if (!url.ok) {
    logError("Unable to create pull request");
    process.exit(1);
  }

  console.log("\n" + chalk.bold("✨ Pull request created:"));
  console.log(url.out + "\n");

  await exec("git checkout main");
  await exec(`git branch -D ${releaseBranch}`);
};

void createPullRequest();
