const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: __dirname + '/src/app.js',
  output: {
    path: __dirname + '/out',
    filename: 'main.js'
  },
  module: {
      rules: [
          {
            test: /\.(sass|scss)$/i,
            use: [{
              loader: "style-loader"
            }, {
              loader: "css-loader"
            }, {
              loader: "sass-loader"
            }],
          },
          {
            test: /\.(png|woff)$/i,
            use: [{
              loader: 'file-loader',
              options: {
                name: 'public/[name].[ext]',
              },
            }],
          },
      ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: __dirname + "/src/index.html",
          inject: 'body'
      })
  ],
  devServer: {
      contentBase: './src',
      port: 7700,
  }
};
