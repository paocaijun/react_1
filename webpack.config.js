var webpack = require('webpack');
const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        apps: __dirname + '/src/main.js',
        vendors: ['react', 'react-router']
    }, //指明编译开始的入口
    output: {
        path: path.join(__dirname, 'dist'), //指明编译好的文件所在目录
        publicPath: '',
        filename: 'js/[name].js'
    },
    resolve: {
        alias: {
            '@': path.join(__dirname, 'src')
        },
        extensions: ['.js', '.jsx', '.css', '.scss', '.json'] // 没带文件后缀时的匹配
    },
    plugins: [
        new HtmlWebpackPlugin({
            inject: 'body', //head ,body
            filename: 'index.html', //生成的文件名
            template: path.join(__dirname, 'index.html'),
            date: '1222'
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
                    limit: 8192, //小于8192kb的转化为base64,否则采用url-loader处理
                    name: 'img/[name].[ext]'
                }
            }
        ]
    }
};
