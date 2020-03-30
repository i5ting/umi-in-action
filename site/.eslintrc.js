module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'airbnb/hooks',
    'plugin:import/typescript',
    'plugin:promise/recommended',
    'plugin:unicorn/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
  ],
  plugins: ['@typescript-eslint', 'prettier', 'promise', 'unicorn'],
  env: {
    node: true,
    browser: true,
  },
  rules: {
    // gatsby-config 中有属性含有下划线
    '@typescript-eslint/camelcase': ['error', { properties: 'never' }],
    // airbnb 配置导致 tsx 文件引用一直报错
    'import/extensions': [
      'error',
      'ignorePackages',
      {
        ts: 'never',
        tsx: 'never',
      },
    ],
    'no-console': 'off',
    'prettier/prettier': 'error',
    // 修复 jsx 不让引用 ts 文件的错误
    'react/jsx-filename-extension': ['error', { extensions: ['.ts', '.tsx'] }],
  },
};
