const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')   // 添加转译之后文件的保存路径

module.exports = {
    entry: './src/index.js',  // 输入需要被转移的文件
    output: {
        path: path.resolve(__dirname, 'dist'),   // 路径是dist
        filename: 'index.[contenthash].js',  // 转译之后名字是[name].[contenthash].js
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'My App',
            template: 'src/assets/index.html'
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,// file-loader作用:把文件变成文件路径
                use: ["file-loader"]
              },
              {
                test: /\.styl$/,
                loader: ["style-loader", "css-loader", "stylus-loader"]
              },// stylus-loader把stylus代码变为css代码,css-loader把css代码变为JS字符串,style-loader把JS字符串变为style标签
              {
                test: /\.less$/,
                loader: ["style-loader", "css-loader", "less-loader"]
              },
              {
                test: /\.scss$/i,
                use: [
                  "style-loader",
                  "css-loader",
                  {
                    loader: "sass-loader",
                    options: {
                      implementation: require("dart-sass")
                    }
                  }
                ]
              }
        ]
    },
}
