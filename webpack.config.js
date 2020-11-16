const path = require('path');
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = env => {
  return {
    entry: {
      app: ['./src/index.tsx'],
    },
    output: {
      path: path.resolve(__dirname, 'dist'),
      filename: env.production ? 'js/[hash].js' : 'js/[name].bundle.js',
      // 静态资源文件
      assetModuleFilename: 'static/[hash][ext][query]'
    },
    devtool: 'source-map',
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
      alias: {
        '@': path.resolve(__dirname, 'src/'),
      }
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'awesome-typescript-loader',
        },
        {
          test: /\.css$/i,
          use: ['style-loader', 'css-loader', 'postcss-loader'],
        },
        { // 图片
          test: /\.(png|jpg|jpeg|gif|svg)$/i,
          // 根据下面的maxSize配置，自动使用inline或resource模式
          type: 'asset',
          parser: {
            dataUrlCondition: {
              // 超过8kb使用resource模式
              maxSize: 8 * 1024,
            }
          }
        },
        { // 字体文件
          test: /\.(ttf|eot|woff|woff2)$/,
          type: 'asset/resource',
        }
      ]
    },

    plugins: [
      new HtmlWebPackPlugin({
        template: './src/index.html'
      })
    ]
  }
};
