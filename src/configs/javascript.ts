import globals from "globals";
import type { FlatESLintConfigItem } from "eslint-define-config";

export const javascript: FlatESLintConfigItem[] = [
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
