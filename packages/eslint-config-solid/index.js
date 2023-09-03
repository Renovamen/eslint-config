module.exports = {
  extends: ["@renovamen/eslint-config-ts"],
  overrides: [
    {
      files: ["*.tsx"],
      parser: "@typescript-eslint/parser",
      plugins: ["solid"],
      extends: ["plugin:solid/typescript"],
      rules: {
        "solid/no-innerhtml": "off"
      }
    }
  ]
};
