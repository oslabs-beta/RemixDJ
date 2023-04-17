module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
    webextensions: true,
    amd: true
  },
  overrides: [
    {    
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        project: 'chrome-extension/tsconfig.json'
      },
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking'
      ],
    },
  ],
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
  },
  settings: {
    react: {
      version: 'detect'
    }
  }
};
