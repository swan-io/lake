const path = require("pathe");

require("dotenv").config();

module.exports = [
  {
    name: "shared-business",
    id: "209582206299c613f25323.74831042",
    defaultLocale: "en",
    paths: {
      src: path.join(process.cwd(), "packages", "shared-business", "src"),
      locales: path.join(process.cwd(), "packages", "shared-business", "src", "locales"),
    },
  },
];
