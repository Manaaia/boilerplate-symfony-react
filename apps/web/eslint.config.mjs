import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";
import pluginReactHooks from "eslint-plugin-react-hooks";
import stylistic from "@stylistic/eslint-plugin"

export default tseslint.config(
  pluginJs.configs.recommended,
  tseslint.configs.strictTypeChecked,
  tseslint.configs.stylisticTypeChecked,
  pluginReact.configs.flat.recommended,
  pluginReactHooks.configs['recommended-latest'],
  {
    files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"],
    settings: {
      react: {
        version: 'detect'
      }
    },
    languageOptions: {
      globals: globals.browser,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      }
    }
  },
  {
    ignores: ['dist', 'node_modules', '**/*.d.ts', '*.config.*']
  },
  {
    plugins: {
      '@stylistic': stylistic,
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      '@stylistic/indent': ['error', 2],
    }
  }
);
