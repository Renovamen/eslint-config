import { GLOB_ASTRO } from "../globs";
import { pluginAstro, pluginFormat } from "../plugins";
import { parserPlain } from "../utils";
import type { FlatESLintConfig } from "eslint-define-config";

export const astro: FlatESLintConfig[] = [...pluginAstro.configs["flat/recommended"]];

export const astroFormat: FlatESLintConfig[] = [
  {
    files: [GLOB_ASTRO],
    languageOptions: {
      parser: parserPlain
    },
    plugins: {
      format: pluginFormat
    },
    rules: {
      "format/prettier": [
        "error",
        {
          trailingComma: "none",
          printWidth: 90,
          parser: "astro",
          plugins: ["prettier-plugin-astro"]
        }
      ]
    }
  }
];
