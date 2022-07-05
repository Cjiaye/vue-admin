module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: ['plugin:vue/vue3-essential', '@vue/standard'],
  parserOptions: {
    parser: '@babel/eslint-parser'
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    quotes: 'error',
    quotes: 'warn', // 修改为警告
    quotes: 'off', // 修改不校验
    'space-before-function-paren': 'off',
    'vue/multi-word-component-names': 'off'
  }
}
