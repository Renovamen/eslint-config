const { isPackageExists } = require("local-pkg");

const TS = isPackageExists("typescript");

if (!TS)
  console.warn(
    "[@renovamen/eslint-config] TypeScript is not installed, fallback to JS only."
  );

module.exports = {
  extends: [
    "plugin:vue/vue3-recommended",
    TS ? "@renovamen/eslint-config-ts" : "@renovamen/eslint-config-basic"
  ],
  overrides: [
    {
      files: ["*.vue"],
      parser: "vue-eslint-parser",
      parserOptions: {
        parser: "@typescript-eslint/parser",
        ecmaVersion: 2022,
        ecmaFeatures: {
          jsx: true
        },
        sourceType: "module"
      }
    }
  ],
  rules: {
    "vue/no-v-html": "off",
    "vue/multi-word-component-names": "off"
  }
};
