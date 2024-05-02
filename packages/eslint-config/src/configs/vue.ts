import { GLOB_VUE } from "../globs";
import { parserVue, pluginVue, tseslint } from "../plugins";
import { typescriptCore } from "./typescript";
import type { Linter } from "eslint";

export const vue: Linter.FlatConfig[] = [
  ...(tseslint.config({
    extends: typescriptCore as any[],
    files: [GLOB_VUE]
  }) as any),
  {
    name: "renovamen/vue",
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
      ...pluginVue.configs["base"].rules,
      ...pluginVue.configs["vue3-essential"].rules,
      "vue/no-v-html": "off",
      "vue/multi-word-component-names": "off"
    }
  }
];
