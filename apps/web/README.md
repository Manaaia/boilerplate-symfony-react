# Basic Vite React Template

This template provides a minimal setup to get React working in Vite with HMR, some ESLint rules and Vitest.

Currently, two official plugins are available for fast refresh:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

This template uses the Babel plugin by default. If you want to use the SWC plugin, you can switch by following the instructions in the [SWC plugin documentation](https://github.com/vitejs/vite-plugin-react-swc).

## What next?

### Tests

This template demonstrate how to write test with Vitest in the `example` folder. You can run the test with the following command:

```bash
task web:test
```

### Linting

This template uses ESLint with the following plugins:
- [typescript-eslint](https://typescript-eslint.io/)
- [@stylistic/eslint-plugin](https://eslint.style/packages/default)
- [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react/blob/master/README.md)
- [eslint-plugin-react-hooks](https://github.com/facebook/react/tree/main/packages/eslint-plugin-react-hooks)

You can run the linter with the following command:

```bash
task web:lint-check
task web:lint-fix
```

To customize the ESLint rules, you can edit the `.eslint.config.mjs` file.
