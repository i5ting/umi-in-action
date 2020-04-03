module.exports = {
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:import/typescript',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'prettier',
    'prettier/react',
  ],
  plugins: ['prettier', 'promise', 'unicorn'],
  env: {
    node: true,
    browser: true,
  },
  rules: {
    'prettier/prettier': 'error',
     // 修复 tsx 文件引用 tsx 文件报错的问题
    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      plugins: ['@typescript-eslint'],
      extends: [
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
        'prettier/@typescript-eslint',
      ],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
        'import/extensions': [ // airbnb 配置导致 tsx 文件引用一直报错
          'error',
          'ignorePackages',
          {
            ts: 'never',
            tsx: 'never',
          },
        ],
        'no-param-reassign': 'off'
      },
    },
  ],
};
