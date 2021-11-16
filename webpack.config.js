const path = require('path');

module.exports = {
  mode: 'development',
  entry: './client/src/index.jsx',
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          }],
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/env', '@babel/preset-react'] },
        },
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx', '.css'],
  },
  devtool: 'inline-source-map',
  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, 'client', 'public')
  },
};