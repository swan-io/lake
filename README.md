# Swan Lake

> Swan's component kit

## Getting started

First, install [yarn](https://yarnpkg.com/en/docs/install).

### Clone

```console
$ git clone git@github.com:swan-io/lake.git
```

### Install

```console
$ yarn
```

## Editor

We recommend the following setup for an optimal developer experience:

- [VS Code](https://code.visualstudio.com)
- [VS Code ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)
- [VS Code Prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)

By default, the VS Code TypeScript extension only checks the types in open files. If you want your IDE to check types in the whole project, check `typescript.tsserver.experimental.enableProjectDiagnostics` in your VS Code preferences.

For better performance (and confort!), it's recommended to set:

- `eslint.run` to `"onSave"`.

## Linting

```console
$ yarn lint
```

## Generate Fluent icons

Add the name of the desired icon in `scripts/fluent-icons/icons.json` using the format `icon-name-{filled|regular}`, and run the following command:

```console
$ yarn icons
```

And you'll be able to use your icon using the `<Icon />` component using the name you specified!

## Testing

```console
$ yarn test
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

1. Write the changes in `HISTORY.md` and commit the release notes as `X.X.X release notes`. Don't push it yet.
2. Run `yarn bump`, set the version according to what you set in `HISTORY.md`
3. Run `git push && git push --tags`
