module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'plugin:react-hooks/recommended',
  ],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: { react: { version: '18.2' } },
  plugins: ['react-refresh'],
  rules: {
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    'react/prop-types': 'off',
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: '*',
        next: ['return', 'export', 'throw'],
      },
      {
        blankLine: 'always',
        prev: 'directive',
        next: 'directive',
      },
      {
        blankLine: 'always',
        prev: '*',
        next: ['multiline-block-like', 'multiline-expression', 'multiline-const', 'multiline-let'],
      },
    ],
  },
};
