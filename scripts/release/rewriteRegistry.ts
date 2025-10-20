import fs from "node:fs";
import path from "node:path";
import lakePkg from "../../packages/lake/package.json";
import sharedBusinessPkg from "../../packages/shared-business/package.json";

fs.writeFileSync(
  path.resolve(__dirname, "../../packages/lake/package.json"),
  JSON.stringify(
    {
      ...lakePkg,
      publishConfig: {
        ...lakePkg.publishConfig,
        registry: "https://npm.pkg.github.com",
      },
    },
    null,
    2,
  ),
  "utf-8",
);

fs.writeFileSync(
  path.resolve(__dirname, "../../packages/shared-business/package.json"),
  JSON.stringify(
    {
      ...sharedBusinessPkg,
      publishConfig: {
        ...sharedBusinessPkg.publishConfig,
        registry: "https://npm.pkg.github.com",
      },
    },
    null,
    2,
  ),
  "utf-8",
);
