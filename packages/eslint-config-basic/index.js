module.exports = {
  env: {
    node: true,
    es2022: true,
    browser: true
  },
  extends: ["plugin:prettier/recommended"],
  overrides: [
    {
      files: ["*.js", "*.cjs", "*.jsx"],
      rules: {
        "@typescript-eslint/no-var-requires": "off",
        "@typescript-eslint/no-require-imports": "off"
      }
    }
  ]
};
