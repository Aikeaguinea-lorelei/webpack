const HtmlWebpackPlugin = require('html-webpack-plugin');
const path =require('path')   // 添加转译之后文件的保存路径
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const base=require('./webpack.config.base.js')  // 引入共同属性base

module.exports = {
    ...base,  // 表示把base的所有属性copy过来
    devtool:'inline-source-map',
    devServer:{
        contentBase:'./dist',
    },
    module:{
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/i,
                use: [ 'style-loader', 'css-loader' ]
                // use: [MiniCssExtractPlugin.loader, "css-loader"],
            }
        ]
    }   
}
