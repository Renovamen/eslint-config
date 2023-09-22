module.exports = {
  extends: ["@renovamen/eslint-config-ts"],
  settings: {
    react: {
      version: "detect"
    }
  },
  overrides: [
    {
      files: ["*.tsx"],
      parser: "@typescript-eslint/parser",
      extends: ["plugin:react/recommended"],
      rules: {
        "react/react-in-jsx-scope": "off",
        "react/no-unescaped-entities": "off",
        "react/no-unknown-property": "off"
      }
    }
  ]
};
