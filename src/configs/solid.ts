import { GLOB_TSX } from "../globs";
import { pluginSolid } from "../plugins";
import type { FlatESLintConfigItem } from "eslint-define-config";

export const solid: FlatESLintConfigItem[] = [
  {
    files: [GLOB_TSX],
    plugins: pluginSolid.plugins,
    rules: {
      ...pluginSolid.rules,
      "solid/no-innerhtml": "off"
    }
  }
];
