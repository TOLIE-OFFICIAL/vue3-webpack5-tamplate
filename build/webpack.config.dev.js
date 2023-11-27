// 引入webpack-merge
const { merge } = require('webpack-merge');
// 引入公共配置
const common = require('./webpack.config.common.js');
// 第一个参数是公共配置 第二个参数是环境里的配置
module.exports = merge(common, {
  mode: 'development',
  // devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          // 'vue-style-loader',
          'style-loader',
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },]
  },
  devServer: {
    host: 'localhost',
    static: './dist',
    port: 8081
  },
});