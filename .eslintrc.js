module.exports = {
  root: true,
  env: {
    browser: true,
    es2018: true,
  },
  plugins: ['import'],
  extends: [
    'airbnb-base',
    'plugin:import/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'prettier',
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'import/no-unresolved': 'off',
  }
};
