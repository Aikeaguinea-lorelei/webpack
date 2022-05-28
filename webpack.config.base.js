const HtmlWebpackPlugin = require('html-webpack-plugin');
const path =require('path')   // 添加转译之后文件的保存路径

module.exports = {
    entry:'./src/index.js',  // 输入需要被转移的文件
    output:{
        path:path.resolve(__dirname,'dist'),   // 路径是dist
        filename:'index.[contenthash].js',  // 转译之后名字是[name].[contenthash].js
    },
    plugins:[
        new HtmlWebpackPlugin({
        title:'My App',
        template:'src/assets/index.html'
    }),
    ],
    module: {
        rules: [
            {
                test: /\.less$/,
                loader:['less-loader','css-loader','style-loader'] 
            },// less-loader把less语法转成css语法,css-loader把css变成JS的字符串,style-loader把字符串变成style标签放进head
            {
            test: /\.scss$/i,
            use: [
                "style-loader",  // 在开发环境使用 style-loader
                "css-loader",
                {
                loader: "sass-loader",// sass-loader要使用dart-sass
                options:{implementation:require('dart-sass')}
            }],
        }]
    },
}
