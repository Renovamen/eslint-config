import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
require("sucrase/register");

/** @type {typeof import('./packages/eslint-config/src/index.ts')} */
const { renovamen } = require("./packages/eslint-config/src/index.ts");

export default renovamen([
  {
    files: ["**/*.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off"
    }
  }
]);
