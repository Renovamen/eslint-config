import { GLOB_VUE } from "../globs";
import { parserVue, pluginVue, tseslint } from "../plugins";
import { typescriptCore } from "./typescript";
import type { FlatESLintConfigItem } from "eslint-define-config";

export const vue: FlatESLintConfigItem[] = [
  ...(tseslint.config({
    extends: typescriptCore as any[],
    files: [GLOB_VUE]
  }) as any),
  {
    files: [GLOB_VUE],
    languageOptions: {
      parser: parserVue,
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        },
        extraFileExtensions: [".vue"],
        parser: "@typescript-eslint/parser",
        sourceType: "module"
      }
    },
    plugins: {
      "@typescript-eslint": tseslint.plugin,
      vue: pluginVue
    },
    processor: pluginVue.processors[".vue"],
    rules: {
      "vue/no-v-html": "off",
      "vue/multi-word-component-names": "off"
    }
  }
];
