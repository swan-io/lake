import packageJson from "../package.json" with { type: "json" };

/** @type {import('@storybook/react-vite').StorybookConfig} */
const config = {
  stories: ["../packages/*/__stories__/**/*.stories.@(ts|tsx)"],
  docs: {
    autodocs: false,
  },
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

    config.define = {
      PLACEKIT_API_KEY:
        process.env.PLACEKIT_API_KEY != null
          ? JSON.stringify(process.env.PLACEKIT_API_KEY)
          : "undefined",
    };

    config.build = {
      ...config.build,
      // The polyfill generates a bug on Safari, where it makes the module
      // always be invalidated due to credentials being sent (i.e. Cookies)
      modulePreload: { polyfill: true },
      sourcemap: true,
      assetsDir: `assets/${packageJson.version}`,

      rollupOptions: {
        ...config.build.rollupOptions,
        onwarn: (warning, warn) => {
          // Silent "use client" directive warnings
          if (warning.code !== "MODULE_LEVEL_DIRECTIVE") {
            warn(warning);
          }
        },
      },
    };

    return {
      ...config,
      base: "/lake", // Set for GitHub pages, comment to disable for testing build outputs locally
    };
  },
};

export default config;
