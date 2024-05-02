import globals from "globals";
import type { Linter } from "eslint";

export const javascript: Linter.FlatConfig[] = [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        sourceType: "module"
      },
      sourceType: "module"
    }
  }
];
