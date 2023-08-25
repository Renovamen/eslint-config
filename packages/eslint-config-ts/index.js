const basic = require("@renovamen/eslint-config-basic");

module.exports = {
  extends: ["@renovamen/eslint-config-basic", "plugin:@typescript-eslint/recommended"],
  overrides: basic.overrides.concat([
    {
      files: ["*.ts", "*.tsx"],
      parser: "@typescript-eslint/parser"
    }
  ]),
  rules: {
    "@typescript-eslint/no-non-null-assertion": "off",
    "@typescript-eslint/triple-slash-reference": "off"
  }
};
