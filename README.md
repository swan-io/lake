# Swan Lake

> Swan's component kit

## Getting started

First, install [pnpm](https://pnpm.io/installation).

### Clone

```console
$ git clone git@github.com:swan-io/lake.git
```

### Install

```console
$ pnpm install
```

## Editor

We recommend the following setup for an optimal developer experience:

- [VS Code](https://code.visualstudio.com)
- [VS Code Biome](https://marketplace.visualstudio.com/items?itemName=biomejs.biome)
- [VS Code Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

By default, the VS Code TypeScript extension only checks the types in open files. If you want your IDE to check types in the whole project, check `typescript.tsserver.experimental.enableProjectDiagnostics` in your VS Code preferences.

## Linting

```console
$ pnpm lint
```

You can also configure `lint-staged` as a pre-commit hook by running the following command :

```console
$ pnpm configure-hooks
```

### Ignore code

If you want to ignore a lint rule for a specific line of the code, you can add a suppression comment above the line that emits the lint diagnostic:

```ts
// biome-ignore <rule>: <optional-explanation>
```

For example:

```ts
// biome-ignore lint/suspicious/noNamespace:
namespace foo {}
```

For `useExhaustiveDependencies` (equivalent of `react-hooks/exhaustive-deps`), you can even specify which dependencies are ignored, on multiple lines:

```ts
// biome-ignore lint/correctness/useExhaustiveDependencies(fn):
// biome-ignore lint/correctness/useExhaustiveDependencies(value):
useEffect(fn, [fn, value]);
```

## Generate Fluent icons

Add the name of the desired icon in `scripts/fluent-icons/icons.json` using the format `icon-name-{filled|regular}`, and run the following command:

```console
$ pnpm icons
```

And you'll be able to use your icon using the `<Icon />` component using the name you specified!

## Testing

```console
$ pnpm test
```

We generally collocate test files next to their implementation, in a `__tests__` directory, with the tested file name suffixed with `.test`:

```
> utils
  > __tests__
    > myFile.test.tsx
  > myFile.tsx
```

We use [Vitest](https://vitest.dev/api/) and [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/).

## Releasing

1. Run `pnpm release`, select next version increment.
2. Copy the PR url, make it approved and merge it.
3. A Github release will automatically be created by the CI.
