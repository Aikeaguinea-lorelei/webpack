const HtmlWebpackPlugin = require('html-webpack-plugin');
const path =require('path')   // 添加转译之后文件的保存路径
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const base=require('./webpack.config.base.js')

module.exports = {
    ...base,
    mode:'development',
    plugins:[
        ...base.plugins,  // copy共有的plugins属性
        // 生产环境特殊需要的插件MiniCssExtractPlugin
        new MiniCssExtractPlugin({
        filename:'[name].[contenthash].css',
        chunkFilename:'[id].[contenthash].css',
        ignoreOrder:false,
    }),
    ],
    module:{
        
        rules: [
            ...base.module.rules,
            {
                test: /\.css$/i,
                // use: [ 'style-loader', 'css-loader' ]
                use: [MiniCssExtractPlugin.loader, "css-loader"],
            }
        ]
    }   
}
