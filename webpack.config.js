var webpack = require('webpack');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
console.log('__dirname', __dirname);

module.exports = {
    entry: __dirname + '/src/main.js', //指明编译开始的入口
    output: {
        path: path.join(__dirname, 'dist'), //指明编译好的文件所在目录
        publicPath: '',
        filename: '[name].js'
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src')
        },
        extensions: ['.jsx', '.js', '.css', '.scss', '.json'] // 没带文件后缀时的匹配
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: false,
            filename: './index.html',
            template: path.join(__dirname, 'index.html')
        })
    ],
    module: {
        rules: [
            {
                test: /\.js|jsx$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    plugins: [
                        ['import', { libraryName: 'antd', style: 'css' }] //antd按需加载
                    ],
                    presets: ['es2015', 'react', 'stage-2']
                }
            },
            {
                test: /\.css$/,
                exclude: /node_modules/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.scss$/,
                use: ['style-loader', 'css-loader', 'sass-loader?sourceMap']
            },
            {
                //antd样式处理
                test: /\.css$/,
                exclude: /src/,
                use: [
                    { loader: 'style-loader' },
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    }
                ]
            },
            {
                test: /\.(png|jpg|gif|webp)$/,
                loader: 'url-loader',
                options: {
                    limit: 8192,
                    name: '[name].[ext]'
                }
            }
        ]
    }
};
