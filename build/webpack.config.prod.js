// 引入webpack-merge
const { merge } = require('webpack-merge');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// 引入公共配置
const common = require('./webpack.config.common.js');
// 第一个参数是公共配置 第二个参数是环境里的配置
module.exports = merge(common, {
  mode: 'production',
  devtool: 'inline-source-map',
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[hash:6].css',
      chunkFilename: 'css/[hash:6].css'
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          // {
          //   loader:MiniCssExtractPlugin.loader,
          //   options:{
          //     publicPath:'../',
          //   }
          // },
          MiniCssExtractPlugin.loader,
          // 'vue-style-loader',
          'style-loader',
          'css-loader',
          'postcss-loader',
          {
            loader: 'sass-loader',
            options: {
              implementation: require('node-sass')
            }
          },
        ]
      },
    ]
  },
  optimization: {
    minimize: true,
    minimizer: [
      new TerserWebpackPlugin({
        terserOptions: {
          output: {
            comments: false // 移除注释
          },
          safari10: true, // 解决safari 10、11的bug
        }
      }),
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 0,
      cacheGroups: {
        libs: {
          name: 'chunk-libs', // 打包后的文件名
          test: /[\\/]node_modules[\\/]/,
          priority: 10, // 优先级
          chunks: 'initial' // 只打包初始时依赖的第三方
        },
        elementUI: {
          name: 'chunk-elementPlus', // 单独将elementPlus拆包
          priority: 20,
          test: /[\\/]node_modules[\\/]_?element-plus(.*)/
        },
        commons: {
          name: 'chunk-commons',
          test: /[\\/]src[\\/]js[\\/]/, // 可自定义拓展你的规则
          minChunks: 2, // 重复2次以上打包
          priority: 5,
          reuseExistingChunk: true
        }
      }
    },
  },
});