module.exports = {
  ignorePatterns: ['./src/public/templates/**/*.js'],

  // globals: {
  //   Atomics: 'readonly',
  //   SharedArrayBuffer: 'readonly',
  // },

  env: {
    browser: true,
    es2021: true,
  },

  extends: ['eslint:recommended', 'plugin:import/recommended'],

  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
  },

  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['components', './src/components'],
          ['lib', './src/lib/'],
          ['public', './src/public'],
          ['state', './src/state'],
          ['style', './src/style'],
          ['templates', './src/public/templates'],
        ],
      },
    },
  },

  rules: {
    // 'import/no-unused-modules': [1, { unusedExports: false }],
  },
};
