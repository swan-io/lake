import dayjs from "dayjs";
import customParseFormat from "dayjs/plugin/customParseFormat";
import localizedFormat from "dayjs/plugin/localizedFormat";
import relativeTime from "dayjs/plugin/relativeTime";
import utc from "dayjs/plugin/utc";
import "../packages/lake/src/assets/fonts/Inter.css";
import "../packages/lake/src/assets/fonts/InterCard.css";
import "../packages/lake/src/assets/fonts/RobotoMono.css";
import "../packages/lake/src/assets/main.css";

// https://day.js.org/docs/en/plugin/plugin
dayjs.extend(utc);
dayjs.extend(customParseFormat);
dayjs.extend(relativeTime);
dayjs.extend(localizedFormat);

export const parameters = {
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  options: {
    storySort: {
      method: "alphabetical",
    },
  },
};

export const globalTypes = {
  locale: {
    name: "Locale",
    description: "i18n locale",
    toolbar: {
      icon: "globe",
      items: [
        { value: "en", right: "🇬🇧", title: "English" },
        { value: "fr", right: "🇫🇷", title: "Français" },
        { value: "de", right: "🇩🇪", title: "Deutsch" },
        { value: "es", right: "🇪🇸", title: "Español" },
        { value: "it", right: "🇮🇹", title: "Italiano" },
        { value: "nl", right: "🇳🇱", title: "Nederlands" },
        { value: "pt", right: "🇵🇹", title: "Português" },
        { value: "fi", right: "🇫🇮", title: "Suomi" },
      ],
      showName: true,
    },
  },
};

export const decorators = [
  (Story, context) => {
    const url = new URL(window.location.href);
    const next = context.globals.locale;
    if (next && url.searchParams.get("lang") !== next) {
      url.searchParams.set("lang", next);
      window.location.replace(url.toString());
    }
    return Story();
  },
];

export default {
  parameters: {
    a11y: {
      context: {
        exclude: ["[data-a11y='false']"],
      },
      config: {
        rules: [
          {
            id: "region",
            enabled: false,
          },
        ],
      },
      options: {
        /*
         * Opt in to running WCAG 2.x AAA rules
         * Note that you must explicitly re-specify the defaults (all but the last array entry)
         * See https://github.com/dequelabs/axe-core/blob/develop/doc/API.md#options-parameter-examples for more details
         */
        runOnly: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice", "wcag2aaa"],
      },

      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: "error",
    },
  },
};
