const path=require('path');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const HTMLWebpackPlugin=require('html-webpack-plugin');
const CleanWebpackPlugin=require('clean-webpack-plugin');

module.exports={
    entry:'./src/index.ts',
    mode:'development',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'main.js'
    },
    resolve: {
        extensions: ['.ts', '.js', '.json']
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                use:'ts-loader',
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:[MiniCssExtractPlugin.loader,'css-loader']
            }
        ]
    },
    plugins:[
        new HTMLWebpackPlugin({
            inject:true,
            filename:'index.html',
            template:'./public/index.html'
        }),
        new MiniCssExtractPlugin(),
        new CleanWebpackPlugin.CleanWebpackPlugin()
    ],
    devServer:{
        open:true,
        port:3000,
        static:path.resolve(__dirname,'dist')
    }
}