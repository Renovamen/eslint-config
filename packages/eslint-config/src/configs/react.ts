import { GLOB_TSX } from "../globs";
import { pluginReact } from "../plugins";
import type { Linter } from "eslint";

export const react: Linter.Config[] = [
  {
    settings: {
      react: {
        version: "detect"
      }
    }
  },
  {
    name: "renovamen/react",
    files: [GLOB_TSX],
    plugins: pluginReact.plugins,
    rules: {
      ...pluginReact.rules,
      "react/react-in-jsx-scope": "off",
      "react/no-unescaped-entities": "off",
      "react/no-unknown-property": "off"
    }
  }
];
