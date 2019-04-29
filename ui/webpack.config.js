const path = require('path');
const htmlwebpackplugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');
module.exports = {
    mode: 'development',
    entry: './src/main.js',
    output: {
        path: path.resolve(__dirname, '../app/dist'),
        filename: '[name].js'
    },
    module: {
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, 'node_modules'),
                include: path.resolve(__dirname, 'src'),
                options: {
                    presets: ['env']
                }
            },
            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.styl(us)$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'stylus-loader'
                ]
            },
            {
                test: /.(jpg|png|gif|svg)$/,
                loader: 'url-loader',
                options: {
                    limit: 1000,
                    outputPath: 'images/'
                }
            },
            {
                test: /\.(woff?|woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: { //配置目录别名
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.resolve(__dirname, './src'),
        }
    },
    plugins: [
        new VueLoaderPlugin(),
        new webpack.HotModuleReplacementPlugin(),
        new htmlwebpackplugin({
            template: './index.html',
            inject: true,
            hash: true
        }),
    ],
    devServer: {
        clientLogLevel: 'warning',
        historyApiFallback: true,
        hot: true,
        progress: true,
        overlay: true,
        compress: true, //代码压缩
        host: 'localhost',
        port: (()=>{console.log('your application is running at http://localhost:8888');return 8888})(),
        quiet: true,
        disableHostCheck: true,
    }
}