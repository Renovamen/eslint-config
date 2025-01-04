import { GLOB_ASTRO } from "../globs";
import { pluginAstro, pluginFormat } from "../plugins";
import { parserPlain } from "../utils";
import type { Linter } from "eslint";

export const astro: Linter.Config[] = [...pluginAstro.configs["flat/recommended"]];

export const astroFormat: Linter.Config[] = [
  {
    name: "renovamen/astro-format",
    files: [GLOB_ASTRO],
    languageOptions: {
      parser: parserPlain
    },
    plugins: {
      format: pluginFormat
    },
    rules: {
      "prettier/prettier": "off",
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
