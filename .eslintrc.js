module.exports = {
    env: {
      browser: true,
      es6: true,
      node: true,
      jest: true,
    },
    extends: ['eslint:recommended', 'plugin:react/recommended'],
    parserOptions: {
      ecmaFeatures: {
        jsx: true,
      },
      ecmaVersion: 2021,
      sourceType: 'module',
    },
    plugins: ['react', 'jsx-a11y', 'react-hooks'],
    rules: {
     },
    settings: {
      react: {
        version: 'detect',
      },
    },
  };
