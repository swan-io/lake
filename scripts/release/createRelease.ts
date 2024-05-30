import semver from "semver";
import {
  createGhCompareUrl,
  createGhRelease,
  getGhReleasePullRequest,
  getGitCommits,
  getLatestGhRelease,
  logError,
  updateGhPagerConfig,
} from "./helpers";

(async () => {
  await updateGhPagerConfig();

  const currentVersionTag = await getLatestGhRelease();
  const nextVersionTag = await getGhReleasePullRequest();

  if (nextVersionTag == null) {
    logError("Cannot find next version value");
    process.exit(1);
  }

  const currentVersion = semver.parse(currentVersionTag);
  const nextVersion = semver.parse(nextVersionTag);

  if (currentVersion == null || nextVersion == null) {
    logError("Cannot parse versions");
    process.exit(1);
  }

  if (nextVersion.compare(currentVersion) <= 0) {
    logError(
      [
        `Next version is not superior to current one (current: ${currentVersionTag}, next: ${nextVersionTag})`,
        'Make sure that the release pull request title uses the "vX.X.X" format.',
      ].join("\n"),
    );

    process.exit(1);
  }

  const commits = await getGitCommits(currentVersionTag, nextVersionTag);

  const releaseNotes = [
    ...(commits.length > 0 ? ["## What's Changed", commits.join("\n")] : []),
    `**Full Changelog**: ${createGhCompareUrl(currentVersionTag, nextVersionTag)}`,
  ].join("\n\n");

  await createGhRelease(nextVersionTag, releaseNotes);
})().catch(error => {
  console.error(error);
  process.exit(1);
});
