import semver from "semver";
import { exec, logError, updateGhPagerConfig } from "./helpers";

const getLatestGhRelease = () =>
  exec("gh release list --json tagName --limit 1")
    .then(output => JSON.parse(output) as { tagName: string }[])
    .then(output => output[0]?.tagName);

const getGhReleasePullRequest = () =>
  exec("gh pr list --state merged --json title")
    .then(output => JSON.parse(output) as { title: string }[])
    .then(output => output.map(({ title }) => title).find(title => /^v\d+\.\d+.\d+$/.test(title)));

const createGhRelease = async (version: string) => {
  await exec(`gh release create ${version} --title ${version} --generate-notes`);

  const notes = (
    await exec(`gh release view ${version} --json body`)
      .then(output => JSON.parse(output) as { body: string })
      .then(output => output.body)
  )
    .split("\n")
    .filter(entry => !/^[*-] v\d+\.\d+.\d+/.test(entry)) // remove release PR
    .map(line => line.replace(/\r/, "")) // remove windows line breaks
    .map(line => line.replace(/by @[^\s]+ in (.+)/, "($1)")) // set link between parentheses
    .join("\n");

  await exec(`gh release edit ${version} --notes "${notes}"`);
};

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
})().catch(error => {
  console.error(error);
  process.exit(1);
});
