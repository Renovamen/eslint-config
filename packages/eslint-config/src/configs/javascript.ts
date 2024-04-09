import globals from "globals";
import type { FlatESLintConfig } from "eslint-define-config";

export const javascript: FlatESLintConfig[] = [
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
