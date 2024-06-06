import semver from "semver";
import {
  createGhDraftRelease,
  getGhReleaseNotes,
  getGhReleasePullRequest,
  getLatestGhRelease,
  logError,
  publishGhRelease,
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

  await createGhDraftRelease(nextVersionTag);
  const releaseNotes = await getGhReleaseNotes(nextVersionTag);

  await publishGhRelease(
    nextVersionTag,
    releaseNotes.replace(/^\* v\d+\.\d+.\d+.*\r\n/gm, ""), // Remove release pull request from changelog
  );
})().catch(error => {
  console.error(error);
  process.exit(1);
});
