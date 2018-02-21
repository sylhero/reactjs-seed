const rules = require('./webpack.rules');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');
const MinifyPlugin = require('babel-minify-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
/**
 * push prod rules into the default rules array
 */

// push vendor css rule
rules.push({
    test: /\.css$/,
    include: /(node_modules)/,
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader'
    })
});

// push app css rule
rules.push({
    test: /\.scss$/,
    include: [path.resolve(__dirname, '../src')],
    use: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: [{
            loader: 'css-loader',
            query: {
                modules: true,
                localIdentName: '[name]--[local]',
                importLoaders: 2,
                minimize: true
            }
        }, {
            loader: 'postcss-loader'
        }, {
            loader: 'sass-loader'
        }]
    })
});


// webpack config
module.exports = {
    entry: {
        app: [
            './src/index.jsx'
        ],
        vendor: [
            './src/Vendor.jsx'
        ]
    },
    devtool: 'cheap-source-map',
    // use hash to leverage the browser cache
    output: {
        path: path.resolve(__dirname, '../app-build'),
        filename: 'js/[name].bundle.[hash].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.css', '.scss'],
        modules: ['node_modules', 'js', 'styles', 'assets', 'assets/img', 'assets/font']

    },
    module: {
        rules
    },
    // for sanity check purpose
    devServer: {
        contentBase: './app-build',
        noInfo: true,
        clientLogLevel: 'warning',
        stats: 'errors-only',
        historyApiFallback: true,
        port: 4000,
        host: 'localhost',
        headers: {
            'Access-Control-Allow-Origin': '*'
        }
    },
    plugins: [
        // new BundleAnalyzerPlugin(),
        new StyleLintPlugin({
            failOnError: true,
            emitErrors: true,
            quiet: false,
            syntax: 'scss'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: [
                'app',
                'vendor'
            ],
            minChunks: Infinity
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            favicon: './src/assets/img/favicon.ico'
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production')
            }
        }),
        new webpack.optimize.ModuleConcatenationPlugin(),
        new MinifyPlugin(),
        new ExtractTextPlugin({
            filename: 'styles/[name].[hash].css',
            allChunks: true
        }),
        new webpack.optimize.AggressiveMergingPlugin()
    ]
};
