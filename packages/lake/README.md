# @swan-io/lake

> Swan's design system

## Getting started

You can start the [Storybook](https://storybook.js.org), a small application that allows you to list and play with the various components.

```console
$ yarn start
```

## Consume the design system from apps

### Scaffolding

Our design system assumes that some basic CSS is injected (for fonts, variables and reset). In order to do so:

```typescript
import "@swan-io/lake/src/assets/fonts/Inter.css";
import "@swan-io/lake/src/assets/main.css";
```

### Tokens

To use the design tokens (e.g. colors, spacings…), you can import the `design` file:

```typescript
import {
  colors,
  backgroundColor,
  texts,
  gradients,
  shadows,
  spacings,
  negativeSpacings,
  radii,
  fonts,
  animations,
} from "@swan-io/lake/src/constants/design";
```

## Build

You can build a static version of the Storybook (e.g. to host a demo space):

```console
$ yarn build
```
