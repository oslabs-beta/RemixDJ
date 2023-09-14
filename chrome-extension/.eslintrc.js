module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    webextensions: true,
    amd: true,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    ecmaFeatures: {
      jsx: true,
    },
    // Add TypeScript parser options
    project: "chrome-extension/tsconfig.json",
  },
  overrides: [
    {
      files: ["*.ts", "*.tsx"],
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:react/recommended",
      ],
      parser: "@typescript-eslint/parser",
      parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module",
        ecmaFeatures: {
          jsx: true,
        },
      },
      rules: {
        "@typescript-eslint/no-unused-vars": "warn",
        "@typescript-eslint/no-explicit-any": "off",
        "react/react-in-jsx-scope": "off",
        //no display name
        "react/display-name": "off",
      },
      settings: {
        react: {
          version: "detect",
        },
      },
    },
  ],
  rules: {
    "no-console": "off",
    "no-alert": "off",
    "no-unused-vars": "warn",
    "prefer-const": "warn",
    semi: ["error", "always"],
    quotes: ["error", "single"],
    "react/display-name": "off",
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
