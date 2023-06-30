const path = require('path');

module.exports = {
  entry: './src/index.js', // Entry point of your application
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader', // Use Babel loader for JavaScript/JSX files
        },
      },
    ],
  },
  resolve: {
    extensions: ['.js', '.jsx'], // Allow importing files without specifying extensions
  },
};