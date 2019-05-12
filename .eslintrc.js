module.exports = {
  extends: ['airbnb', 'prettier', 'prettier/react'],
  rules: {
    'react/jsx-filename-extension': ['error', { extensions: ['.js'] }], // allow .js files, instead of .jsx
    'no-underscore-dangle': ['error', { allow: ['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] }], // allow redux dev tools
    'no-irregular-whitespace': 0, // conflict with prettier
  },
  plugins: ['react', 'jsx-a11y', 'import'],
  env: {
    browser: true,
  },
  parser: 'babel-eslint',
};
