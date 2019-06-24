const path = require('path');

const packageJson = require('./package.json');

const Dotenv = require('dotenv-webpack');

module.exports = {
  entry: packageJson.main,
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ]
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: `${packageJson.name}-[hash].js`
  },
  plugins: [
    new Dotenv()
    // new Dotenv({
    //   path: './.env', // Path to .env file (this is the default)
    //   safe: true // load .env.example (defaults to "false" which does not use dotenv-safe)
    // })
  ]
};
