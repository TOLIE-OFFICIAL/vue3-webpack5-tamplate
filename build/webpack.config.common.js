// import
const path = require('path')
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')
// const CopyWebpackPlugin = require('copy-webpack-plugin')

const { VueLoaderPlugin } = require('vue-loader')

// export
module.exports = {
  entry: './src/main.js',

  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/[name].[hash:6].js',
    chunkFilename: 'js/[name].[hash:6].js',
    clean: true
  },

  resolve: {
    extensions: ['.js', '.vue'],

    alias: {
      '@': path.resolve(__dirname, '../src'),
      'assets': path.resolve(__dirname, '../src/assets')
    }
  },

  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      // {
      //   test: /\.s?css$/,
      //   use: [
      //     // 'vue-style-loader',
      //     'style-loader',
      //     'css-loader',
      //     'postcss-loader',
      //     'sass-loader'
      //   ]
      // },
      {
        test: /\.js$/,
        exclude: /node_modules/, // 排除
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.(png|jpe?g|gif|webp)$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 8 * 1024, // 小于8kb的图片会被base64处理
            name: 'img/[name].[hash:6].[ext]'
          }
        }
      }
    ]
  },

  // 
  plugins: [
    new HtmlWebpackPlugin({
      template: 'index.html',
      // __dirname是一个变量，表示当前文件所在的目录的绝对路径
      favicon: path.resolve(__dirname, '../favicon.ico')
    }),
    // new CopyWebpackPlugin({
    //   patterns: [
    //     { from: 'static' }
    //   ]
    // }),
    new VueLoaderPlugin(),
    new webpack.DefinePlugin({
      __VUE_OPTIONS_API__: false, // 表示是否支持vue的Options API的写法
      __VUE_PROD_DEVTOOLS__: false,// 表示生产环境是否支持devtools插件
    }),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
  ]
}