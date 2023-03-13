const path = require("path");

module.exports = [
  {
    name: "shared-business",
    id: process.env.LOKALISE_SHARED_BUSINESS_PROJECT_ID,
    defaultLocale: "en",
    paths: {
      src: path.join(process.cwd(), "packages", "shared-business", "src"),
      locales: path.join(process.cwd(), "packages", "shared-business", "src", "locales"),
    },
  },
];
