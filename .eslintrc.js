module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true,
      jest: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended','plugin:@typescript-eslint/recommended'],
    parser: '@typescript-eslint/parser',
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: ['react', 'jsx-a11y', 'react-hooks', '@typescript-eslint'],
    rules: {
     },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
