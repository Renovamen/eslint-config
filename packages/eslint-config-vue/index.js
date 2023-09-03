module.exports = {
  extends: ["plugin:vue/vue3-recommended", "@renovamen/eslint-config-ts"],
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
