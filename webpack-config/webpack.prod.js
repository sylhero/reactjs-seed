const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');
const rules = require('./webpack.rules');
// const helper = require('../helper');

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
/**
 * push prod rules into the default rules array
 */

// push vendor css rule
rules.push({
    test: /\.css$/,
    include: /(node_modules)/,
    use: [
        MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader'
        }
    ]
});

// push app css rule
rules.push({
    test: /\.scss$/,
    include: [path.resolve(__dirname, '../src')],
    use: [
        MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: {
                    mode: 'local',
                    localIdentName: '[name]--[local]'
                },
                importLoaders: 2,
                sourceMap: false
            }
        },
        {
            loader: 'sass-loader'
        }
    ]
});

// webpack config
module.exports = {
    entry: {
        app: ['./src/index.tsx']
    },
    // use hash to leverage the browser cache
    output: {
        path: path.resolve(__dirname, '../app-build'),
        filename: 'js/[name].bundle.[hash].js',
        publicPath: '/'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.css', '.scss'],
        modules: ['node_modules', 'js', 'styles', 'assets', 'assets/img', 'assets/font']
    },
    devServer: {
        headers: { 'Access-Control-Allow-Origin': '*' },
        https: false,
        disableHostCheck: true,
        contentBase: './app-build',
        noInfo: false,
        clientLogLevel: 'warning',
        stats: 'errors-only',
        // enable HMR depends on OS
        // https://github.com/gaearon/react-hot-loader/issues/511
        hot: true,
        // serve index.html in place of 404 responses to allow HTML5 history
        historyApiFallback: true,
        port: 4000,
        host: 'localhost'
    },
    mode: 'production',
    optimization: {
        splitChunks: {
            cacheGroups: {
                commons: {
                    test: /[\\/]node_modules[\\/]/,
                    name: 'vendors',
                    chunks: 'all'
                }
            }
        },
        minimizer: [
            new TerserPlugin({
                parallel: true,
                sourceMap: true,
                cache: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },
    module: {
        rules
    },
    plugins: [
        // new BundleAnalyzerPlugin(),

        new webpack.DefinePlugin({
            'process.env.NODE_ENV': '"production"'
        }),
        new CompressionPlugin({
            filename: '[path].gz[query]',
            algorithm: 'gzip',
            test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/
        }),
        new StyleLintPlugin({
            failOnError: true,
            emitErrors: true,
            quiet: false,
            syntax: 'scss'
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: true,
            favicon: './src/assets/img/favicon.ico'
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[hash].css',
            chunkFilename: 'styles/[id].css'
        })
    ]
};
