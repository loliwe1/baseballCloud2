module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "semi": ["error", "always"],
    "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
    "no-shadow": 0,
    'operator-linebreak': 0,
    'no-nested-ternary': 0,
    'jsx-a11y/click-events-have-key-events': 0,
    'react/no-array-index-key': 0,
    'react/jsx-props-no-spreading': 0,
    'jsx-a11y/label-has-associated-control' : 0,
    'import/no-named-as-default-member': 0,
    'quote-props': 0,
    'import/no-named-as-default': 0,
    'import/prefer-default-export': 0,
    'camelcase': 0,
    'jsx-a11y/anchor-is-valid': 0,
    'no-param-reassign': ["error", { "props": false }],
  },
  "parser": "babel-eslint",
};
