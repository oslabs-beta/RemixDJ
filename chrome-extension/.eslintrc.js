module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    chrome: true,
    amd: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
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
    ]
  }
};
