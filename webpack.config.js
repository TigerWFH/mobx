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
        contentBase: path.resolve(__dirname, 'dist'),
        compress: true,
        host: '0.0.0.0',
        port: 9000,
        hot: true,
        noInfo: true,
        open: true,
        proxy: {
			"/v1": "http://localhost:9000"
		}
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
        }),
        new webpack.HotModuleReplacementPlugin()
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