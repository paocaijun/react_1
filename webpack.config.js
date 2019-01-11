var webpack = require('webpack')
const path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')


module.exports = {
    entry: __dirname + '/src/main.js', //指明编译开始的入口
    output: {
        path: path.join(__dirname, 'bundle'), //指明编译好的文件所在目录
        filename: 'bundle.js'
    },
    resolve: {
        alias: {
            "@": path.join(__dirname, 'src')
        },
        extensions: ['.js', '.jsx', '.css', '.scss', '.json'] // 没带文件后缀时的匹配
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            filename: './index.html',
            template: path.join(__dirname, 'index.html')
        })

    ],
    module: {
        rules: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
            query: {
                plugins: ['transform-runtime'],
                presets: ['es2015', 'react', 'stage-2']
            }
        }, {
            test: /\.css$/,
            exclude: /node_modules/,
            loader: 'style-loader!css-loader'

        }, {
            test: /\.scss$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader?sourceMap'
            ]
        }],

    }
}