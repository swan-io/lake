const path = require("path");
require("dotenv").config();

const sharedBusinessProjectId = process.env.LOKALISE_SHARED_BUSINESS_PROJECT_ID;

if (!sharedBusinessProjectId) {
  throw new Error("Missing LOKALISE_SHARED_BUSINESS_PROJECT_ID env variable");
}

module.exports = [
  {
    name: "shared-business",
    id: sharedBusinessProjectId,
    defaultLocale: "en",
    paths: {
      src: path.join(process.cwd(), "packages", "shared-business", "src"),
      locales: path.join(process.cwd(), "packages", "shared-business", "src", "locales"),
    },
  },
];
