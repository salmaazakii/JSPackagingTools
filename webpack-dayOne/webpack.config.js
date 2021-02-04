const path = require('path')
const HTMLPlugin = require('html-webpack-plugin')
const CleanPlugin = require('clean-webpack-plugin').CleanWebpackPlugin
// const ImgPlugin = require('image-minimizer-webpack-plugin')

module.exports = {
    entry: path.resolve(__dirname,'./src/index.js'),
    output:{
        filename:'script.bundle.js',
        path:path.resolve(__dirname,'./dist')
    },
    mode:'development',
    module:{
        rules:[
            {
                test: /\.css$/i ,
                use:['style-loader', 'css-loader']
            },
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options:{
                            name : '[name].[ext]',
                            outputPath: 'images/'
                        }
                    },
                    // {
                    //     loader: ImgPlugin.loader,
                    //     options:{
                    //         minimizerOptions:{
                    //             plugins:[
                    //                 ['mozjpeg',{quality:70}],
                    //                 'jpegtran',
                    //                 'optipng',
                    //                 'svgo'
                    //             ]
                    //         }
                    //     }
                    // }
                ],
            },
            {
                test: /\.s[ac]ss$/i,
                use: ["style-loader", "css-loader", "sass-loader"],
            }
        ]
    },
    plugins:[
        new HTMLPlugin({
            title: 'output',
            filename: 'index.html',
            inject: 'body'
        }),
        new CleanPlugin()
    ]
}