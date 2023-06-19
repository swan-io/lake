import "../packages/lake/src/assets/fonts/Inter.css";
import "../packages/lake/src/assets/fonts/InterCard.css";
import "../packages/lake/src/assets/main.css";

export const parameters = {
  actions: {
    argTypesRegex: "^on[A-Z].*",
  },
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
