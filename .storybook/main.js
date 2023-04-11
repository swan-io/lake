const { version } = require("../package.json");

module.exports = {
  stories: [
    "../packages/**/__stories__/**/*.stories.mdx",
    "../packages/**/__stories__/**/*.stories.@(js|jsx|ts|tsx)",
  ],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  async viteFinal(config, { configType }) {
    // customize the Vite config here
    const resolve = config.resolve || null;

    config.resolve = {
      ...resolve,
      alias: {
        ...(resolve ? resolve.alias : null),
        "react-native": "react-native-web",
      },
    };

    config.build = {
      ...config.build,
      // The polyfill generates a bug on Safari, where it makes the module
      // always be invalidated due to credentials being sent (i.e. Cookies)
      polyfillModulePreload: false,
      sourcemap: true,
      assetsDir: `assets/${version}`,
    };

    return {
      ...config,
      base: "/lake",
    };
  },
};
