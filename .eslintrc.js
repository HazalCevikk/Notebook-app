module.exports = {
  extends: ['plugin:react/recommended', 'airbnb', 'next/core-web-vitals'],
  rules: {
    semi: ['off'],
    'import/extensions': ['off'],
    'import/no-unresolved': 'off',
    'no-console': ['error', { allow: ['warn', 'error'] }],
  },
}
