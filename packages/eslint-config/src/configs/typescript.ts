import { GLOB_JS, GLOB_TS, GLOB_TSX } from "../globs";
import { tseslint } from "../plugins";
import type { FlatESLintConfig } from "eslint-define-config";

export const typescriptCore = tseslint.config({
  extends: [...tseslint.configs.recommended],
  files: [GLOB_TS, GLOB_TSX],
  languageOptions: {
    parser: tseslint.parser,
    parserOptions: {
      sourceType: "module"
    }
  },
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/triple-slash-reference": "off"
  }
}) as FlatESLintConfig[];

export const typescript: FlatESLintConfig[] = [
  ...typescriptCore,
  {
    files: [GLOB_JS, "**/*.cjs"],
    rules: {
      "@typescript-eslint/no-require-imports": "off",
      "@typescript-eslint/no-var-requires": "off"
    }
  }
];