var path =require('path')   // 添加转译之后文件的保存路径

module.exports = {
    mode:'development',
    entry:'./src/index.js',  // 输入需要被转移的文件
    output:{
        path:path.resolve(__dirname,'dist'),   // 路径是dist
        filename:'[name].[contenthash].js'  // 转译之后名字是[name].[contenthash].js
    }
}