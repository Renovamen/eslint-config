import { GLOB_TSX } from "../globs";
import { pluginSolid } from "../plugins";
import type { Linter } from "eslint";

export const solid: Linter.FlatConfig[] = [
  {
    name: "renovamen/solid",
    files: [GLOB_TSX],
    plugins: pluginSolid.plugins,
    rules: {
      ...pluginSolid.rules,
      "solid/no-innerhtml": "off"
    }
  }
];
