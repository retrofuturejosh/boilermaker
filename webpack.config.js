const path = require('path');

module.exports = {
    entry: './client/index.js', // assumes your entry point is the index.js in the root of your project folder
    output: {
      path: path.resolve(__dirname, 'public'),
      filename: 'bundle.js' // assumes your bundle.js will also be in the root of your project folder
    },
    devtool: 'source-map',
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          include: [path.resolve(__dirname, 'client')],
          exclude: /(node_modules|bower_components)/,
          loader: 'babel-loader',
          options: {
            presets: ['react', 'es2015'] // if you aren't using 'babel-preset-es2015', then omit the 'es2015'
          }
        },
        // use the style-loader/css-loader/sass-loader combos for anything matching the .scss extension
        {
          test: /\.scss$/,
          use: [
            'style-loader',
            'css-loader',
            'sass-loader'
          ]
        }
      ]
    }
  };