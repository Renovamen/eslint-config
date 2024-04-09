import { GLOB_TSX } from "../globs";
import { pluginSolid } from "../plugins";
import type { FlatESLintConfig } from "eslint-define-config";

export const solid: FlatESLintConfig[] = [
  {
    files: [GLOB_TSX],
    plugins: pluginSolid.plugins,
    rules: {
      ...pluginSolid.rules,
      "solid/no-innerhtml": "off"
    }
  }
];
