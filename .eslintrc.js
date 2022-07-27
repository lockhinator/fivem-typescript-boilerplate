module.exports = {
  root: true,
  env: {
    'node': true
  },
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint'],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/eslint-recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:import/recommended',
    'prettier',
  ],
  ignorePatterns: ["webpack.config.js"],
  rules: {
    "@typescript-eslint/no-explicit-any": "error",
    "@typescript-eslint/explicit-module-boundary-types": "error",
    "no-async-promise-executor": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
          args: "after-used",
          varsIgnorePattern: "^_",
          argsIgnorePattern: "^_",
      }
    ],
    "array-callback-return": "error",
    "curly": "error",
    "dot-notation": "error",
    eqeqeq: "error",
    "import/no-default-export": "error",
    "no-alert": "error",
    "no-console": "error",
    "no-continue": "error",
    "no-negated-condition": "error",
    "no-nested-ternary": "error",
    "prefer-arrow-callback": "error"
  }
};
