import { GLOB_TSX } from "../globs";
import { pluginReact } from "../plugins";
import type { FlatESLintConfigItem } from "eslint-define-config";

export const react: FlatESLintConfigItem[] = [
  {
    settings: {
      react: {
        version: "detect"
      }
    }
  },
  {
    files: [GLOB_TSX],
    plugins: {
      react: pluginReact
    },
    rules: {
      "react/react-in-jsx-scope": "off",
      "react/no-unescaped-entities": "off",
      "react/no-unknown-property": "off"
    }
  }
];
