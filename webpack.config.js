var path = require('path');
var UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: {
        app: './src/index.jsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js'
    },
    module: {
        rules: [
            {
                test: /\.js(x)/,
                loader: 'babel-loader'
            }
        ]

    },
    devServer: {
        contentBase: path.resolve(__dirname, 'dist')
    },
    performance: {
        hints: "warning"
    },
    target: "web",
    stats: "minimal",
    plugins: [
        new CleanWebpackPlugin(path.resolve(__dirname, 'dist'), {dry: false}),
        new UglifyjsWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
            tilte: 'mobx-app'
        })
    ],
    optimization: {
        runtimeChunk: false,
        splitChunks: {
            cacheGroups: {
                priority: "0",
                common: {
                    chunks: 'initial',
                    name: "vendor"
                }
            }
        }
    }
};