import { configPrettier, pluginPrettier } from "../plugins";
import type { Linter } from "eslint";

const prettierConflictRules = { ...configPrettier.rules };
delete prettierConflictRules["vue/html-self-closing"];

export const prettier: Linter.FlatConfig[] = [
  {
    plugins: {
      prettier: pluginPrettier
    },
    rules: {
      ...prettierConflictRules,
      ...(pluginPrettier.configs!.recommended as Linter.FlatConfig<Linter.RulesRecord>)
        .rules
    }
  }
];
