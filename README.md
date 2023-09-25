# Your Node.js v20 Menoreopo Project

> A PNPM monorepo template for Node.js v20 projects.

## What is in this repository?

- [PNPM](https://pnpm.io/workspaces) as workspace manager and package manager.
- [TSUP](https://tsup.egoist.dev/) as a TypeScript universal package.
- [Tsx](https://github.com/esbuild-kit/tsx) as a Node.js enhanced with esbuild to run TypeScript & ESM
- [Vitest](https://vitest.dev/) as a test runner.
- [Size Limit](https://github.com/ai/size-limit) as a size limit plugin.
- [Prettier](https://prettier.io/) as a code formatter.
- [ESLint](https://eslint.org/) as a code linter.
- [NX](https://nx.dev) as cacheable operations.
- [Changesets](https://github.com/changesets/changesets/) as a way to manage changes and releases.

## Using this repository

- clone the repository or click in "Use this template" button.
- copy `packages/lib` to `packages/yourlib`
 and edit the `name`, `description` and `author` fields.

## Folder structure

- docs - An empty folder to store documentation.
- example - A folder with an example project. Think as playground.
- packages/* - A folder with a library.

## Using Turbo to run commands

NX is a cacheable build tool (and Monorepo manager). This project uses it to run the `build`, `test` and `coverage` commands.

```bash
# Instead of running `pnpm build`, run:
nx run-many -t build
```

## License

MIT @ npmstudy
