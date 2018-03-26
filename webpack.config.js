var path = require('path');
const webpack = require('webpack');
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzer = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

const srcPath = path.resolve(__dirname, 'src');
let buildPath = path.resolve(__dirname, 'static');
let env = process.env.NODE_ENV === 'production' ? 'production' : 'development';
let pluginList = [
    new webpack.HotModuleReplacementPlugin()
];

if (env === 'production') {
    buildPath = path.resolve(__dirname, 'dist');
    pluginList = [
    ];
}


module.exports = {
    entry: {
        app: path.join(srcPath, 'index.jsx')
    },
    output: {
        path: buildPath,
        filename: '[name].[chunkhash].js'
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
        contentBase: buildPath,
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
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html',
            tilte: 'mobx-app'
        }),
        new BundleAnalyzer(),
        ...pluginList
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