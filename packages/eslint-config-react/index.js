module.exports = {
  env: {
    browser: true
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    }
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  plugins: ['jest-dom', 'react', 'react-hooks', 'testing-library'],
  extends: [
    ...['jest-dom', 'react', 'react-hooks', 'testing-library'].map((path) => require.resolve(`./rules/${path}`)),
    '@ofadiman/eslint-config-base'
  ]
}
