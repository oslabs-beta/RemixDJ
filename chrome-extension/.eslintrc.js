module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    webextensions: true,
    amd: true
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true
    }
  },
  rules: {
    'no-console': 'off',
    'no-alert': 'off',
    'no-unused-vars': 'warn',
    'prefer-const': 'warn',
    semi: [
      'error',
      'always'
    ],
    quotes: [
      'error',
      'single'
    ],
    'react/display-name': 'off',
  }
};
