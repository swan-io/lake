const { version } = require("../package.json");

/** @type {import('@storybook/react-vite').StorybookConfig} */
module.exports = {
  stories: ["../packages/lake/__stories__/**/*.stories.@(ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials", "@storybook/addon-controls", "@storybook/addon-storysource", "@storybook/addon-viewport"
    // {
    //   name: '@storybook/addon-storysource',
    //   options: {
    //     loaderOptions: {
    //       injectStoryParameters: false,
    //     },
    //   },
    // },
  ],
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
      modulePreload: { polyfill: true },
      sourcemap: true,
      assetsDir: `assets/${version}`,
    };

    return {
      ...config,
      base: "/lake",
    };
  },
};
