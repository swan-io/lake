import semver from "semver";
import {
  createGhRelease,
  getGhReleaseNotes,
  getGhReleasePullRequest,
  getLatestGhRelease,
  logError,
  updateGhPagerConfig,
  updateGhReleaseNotes,
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

  await createGhRelease(nextVersionTag);

  const releaseNotes = (await getGhReleaseNotes(nextVersionTag))
    .split("\n")
    .filter(entry => !/^[*-] v\d+\.\d+.\d+/.test(entry)) // remove release PR
    .map(line => line.replace(/\r/, "")) // remove windows line breaks
    .map(line => line.replace(/by @[^\s]+ in (.+)/, "($1)")) // set link between parentheses
    .join("\n");

  await updateGhReleaseNotes(nextVersionTag, releaseNotes);
})().catch(error => {
  console.error(error);
  process.exit(1);
});
