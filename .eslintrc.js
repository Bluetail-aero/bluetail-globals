/* eslint-disable no-magic-numbers */
module.exports = {
  extends: ['airbnb-base', 'plugin:import/typescript'],
  env: {
    node: true,
    es2021: true,
    mocha: true,
  },
  ignorePatterns: [
    '**/dist/*',
  ],
  plugins: [
    '@typescript-eslint',
    'file-progress',
    'import',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  settings: {
    'import/resolver': {
      typescript: {
        alwaysTryTypes: true,
        project: './tsconfig.json',
      },
      node: {
        paths: ['src'],
        extensions: ['.js', '.ts'],
      },
      alias: {
        map: [
          ['@test', './test'], // This enables absolute imports from the test directory, just prefix the import with @test/
        ],
      },
    },
  },
  rules: {
    'newline-per-chained-call': ['off'],

    'object-curly-newline': ['error', {
      ImportDeclaration: { multiline: true, minProperties: 7 },
      ObjectPattern: { multiline: true, minProperties: 5 },
    }],

    'max-len': [2, {
      code: 200,
      tabWidth: 2,
      ignoreComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
    }],

    // camcelcase is deeply embedded into our system already, this isnt useful
    'camelcase': 'off',
    '@typescript-eslint/naming-convention': 'off',

    'linebreak-style': 'off',

    'no-underscore-dangle': 'off',

    // Allow unsed vars from destructuring
    'no-unused-vars': ['error', {
      ignoreRestSiblings: true, destructuredArrayIgnorePattern: '^_',
    }],

    // Allow for-of and for-in loops
    'no-restricted-syntax': [
      'error',
      'LabeledStatement',
      'WithStatement',
    ],

    'implicit-arrow-linebreak': ['error', 'below'],

    // We prefer to not see magic numbers, but accept that some are inevitable, so this is just a warning
    'no-magic-numbers': ['warn', {
      enforceConst: true, detectObjects: true,
    }],

    'no-await-in-loop': 'off',
  },
};
