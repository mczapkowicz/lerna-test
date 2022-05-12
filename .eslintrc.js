const path = require('path');

module.exports = {
  ignorePatterns: ['dist/'],
  parser: '@typescript-eslint/parser',
  extends: [
    "prettier",
    "plugin:react/recommended"
  ],
  plugins: ['react-hooks', '@typescript-eslint'],
  parserOptions: {
    ecmaVersion: 2018,
    project: path.resolve(__dirname, '/packages/**/tsconfig.json'),
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'react/prop-types': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-explicit-any': 'warn',
    '@typescript-eslint/no-unused-vars': 'error',
  },
};
