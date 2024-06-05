import chalk from "chalk";
import childProcess from "node:child_process";
import util from "node:util";

const REPOSITORY = "lake";

export const logError = (...error: string[]) =>
  console.error(`${chalk.red("ERROR")} ${error.join("\n")}` + "\n");

const promisifiedExec = util.promisify(childProcess.exec);

const exec = (cmd: string): Promise<string> =>
  promisifiedExec(cmd)
    .then(({ stdout, stderr }) => ({
      stdout: stdout === '""' ? "" : stdout.trim(),
      stderr: stderr === '""' ? "" : stderr.trim(),
    }))
    .then(({ stdout, stderr }) => stdout || stderr);

const isOk = (promise: Promise<unknown>) => promise.then(() => true).catch(() => false);
const isKo = (promise: Promise<unknown>) => promise.then(() => false).catch(() => true);

export const isProgramMissing = (program: string) => isKo(exec(`which ${program}`));

// https://github.com/nvie/git-toolbelt/blob/v1.9.0/git-repo
export const isNotGitRepo = () => isKo(exec("git rev-parse --git-dir"));

// https://github.com/nvie/git-toolbelt/blob/v1.9.0/git-current-branch
export const getGitBranch = () => exec("git rev-parse --abbrev-ref HEAD");

// https://github.com/nvie/git-toolbelt/blob/v1.9.0/git-is-clean
// https://github.com/nvie/git-toolbelt/blob/v1.9.0/git-show-skipped
export const isGitRepoDirty = () =>
  Promise.all([
    isOk(exec("git diff-index --cached --quiet --ignore-submodules --exit-code HEAD --")),
    isOk(exec("! git diff --no-ext-diff --ignore-submodules --quiet --exit-code")),
    isOk(exec("nbr=$(git ls-files --other --exclude-standard | wc -l); [ $nbr -gt 0 ]")),
    isOk(exec('nbr=$(git ls-files -v | grep "^S" | cut -c3- | wc -l); test $nbr -eq 0')),
  ]).then(([isIndexClean, hasUnstagedChanges, hasUntrackedFiles, isSkipped]) => {
    const isWorktreeClean = !hasUnstagedChanges && !hasUntrackedFiles;
    return !isIndexClean || !isWorktreeClean || !isSkipped;
  });

export const fetchGitRemote = (remote: string) =>
  exec(`git fetch ${remote} --tags --prune --prune-tags --force`);

export const getLastGitCommitHash = (branch: string) =>
  exec(`git log -n 1 ${branch} --pretty=format:"%H"`);

export const updateGhPagerConfig = () => exec('gh config set pager "less -F -X"');

export const resetGitBranch = (branch: string, remote: string) =>
  exec(`git switch -C ${branch} ${remote}/${branch}`);

export const getGitCommits = (from: string | undefined, to: string) =>
  exec(`git log ${from != null ? `${from}..${to}` : ""} --pretty="format:%s"`)
    .then(_ => _.split("\n"))
    .then(entries =>
      entries
        .filter(entry => !/^v\d+\.\d+.\d+/.test(entry))
        .map(entry => "- " + entry.trim().replace(/["]/g, "*"))
        .toReversed(),
    );

// https://github.com/nvie/git-toolbelt/blob/v1.9.0/git-local-branch-exists
export const hasGitLocalBranch = (branch: string) =>
  isOk(exec(`git show-ref --heads --quiet --verify -- "refs/heads/${branch}"`));

// https://github.com/nvie/git-toolbelt/blob/v1.9.0/git-remote-branch-exists
export const hasGitRemoteBranch = (branch: string, remote: string) =>
  isOk(exec(`git show-ref --quiet --verify -- "refs/remotes/${remote}/${branch}"`));

export const getWorkspacePackages = () =>
  exec("yarn workspaces info --json").then(
    info => JSON.parse(info) as Record<string, { location: string }>,
  );

export const gitAddAll = () => exec("git add . -u");
export const gitCheckout = (branch: string) => exec(`git checkout ${branch}`);
export const gitCheckoutNewBranch = (branch: string) => exec(`git checkout -b ${branch}`);
export const gitCommit = (message: string) => exec(`git commit -m "${message}"`);
export const gitDeleteLocalBranch = (branch: string) => exec(`git branch -D ${branch}`);
export const gitPush = (branch: string, remote: string) => exec(`git push -u ${remote} ${branch}`);

export const createGhCompareUrl = (from: string | undefined, to: string) =>
  `https://github.com/swan-io/${REPOSITORY}/compare/${from != null ? `${from}..${to}` : ""}`;

export const createGhPullRequest = (title: string, body: string) =>
  exec(`gh pr create -t "${title}" -b "${body}"`);

export const getLatestGhRelease = () =>
  exec("gh release list --json tagName --limit 1")
    .then(output => JSON.parse(output) as { tagName: string }[])
    .then(output => output[0]?.tagName);

export const getGhReleasePullRequest = () =>
  exec("gh pr list --state merged --json title")
    .then(output => JSON.parse(output) as { title: string }[])
    .then(output => output.map(({ title }) => title).find(title => /^v\d+\.\d+.\d+$/.test(title)));

export const createGhRelease = async (version: string) =>
  exec(`gh release create ${version} --title ${version} --generate-notes`);

export const updateGhReleaseNotes = async (version: string, notes: string) =>
  exec(`gh release edit ${version} --notes "${notes}"`);
