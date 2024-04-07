import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
require("sucrase/register");

/** @type {typeof import('./src/index.ts')} */
const { renovamen } = require("./src/index.ts");

export default renovamen([
  {
    files: ["src/**/*.ts"],
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/ban-ts-comment": "off"
    }
  }
]);
