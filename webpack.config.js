const path=require('path');
const MiniCssExtractPlugin=require('mini-css-extract-plugin');
const HTMLWebpackPlugin=require('html-webpack-plugin');
const CssMinimizerWebpackPlugin=require('css-minimizer-webpack-plugin');
const CleanWebpackPlugin=require('clean-webpack-plugin');
const TerserWebpackPlugin=require('terser-webpack-plugin');

module.exports={
    entry:'./src/index.ts',
    mode:'production',
    output:{
        path: path.resolve(__dirname,'dist'),
        filename: 'main.js'
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
    optimization:{
        minimize:true,
        minimizer:[
            new CssMinimizerWebpackPlugin(),
            new TerserWebpackPlugin()
        ]
    }
}