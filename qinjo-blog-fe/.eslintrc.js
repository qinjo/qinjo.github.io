module.exports = {
  root: true,
  env: {
    node: true
  },
  parser: "vue-eslint-parser",
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: "module"
  },
  rules: {
    'semi': 2,
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-use-before-define': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    'func-call-spacing': 'off',
    '@typescript-eslint/ban-types': 0,
    "no-useless-constructor": "off",
    "@typescript-eslint/explicit-module-boundary-types": 'off',
  }
};