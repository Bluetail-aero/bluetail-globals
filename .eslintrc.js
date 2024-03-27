/* eslint-disable no-magic-numbers */
module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    mocha: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    'max-len': [2, {
      code: 200,
      tabWidth: 2,
      ignoreComments: true,
      ignoreUrls: true,
    }],
    // camcelcase is deeply embedded into our system already, this isnt useful
    camelcase: 'off',
    'no-underscore-dangle': 'off',
    // Allow unsed vars from destructuring
    'no-unused-vars': ['error', { ignoreRestSiblings: true }],
    // Allow for-of and for-in loops
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],
    'implicit-arrow-linebreak': ['error', 'below'],
    'no-magic-numbers': ['warn', { enforceConst: true, detectObjects: true }],
    'no-await-in-loop': 'off',
  },
};
