const rules = require('./webpack.rules');
const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CompressionPlugin = require("compression-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const helper = require('../helper');

// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
/**
 * push prod rules into the default rules array
 */

// push vendor css rule
rules.push({
    test: /\.css$/,
    include: /(node_modules)/,
    use: [MiniCssExtractPlugin.loader, {
            loader: 'css-loader'
        }]
});

// push app css rule
rules.push({
    test: /\.scss$/,
    include: [path.resolve(__dirname, '../src')],
    use: [MiniCssExtractPlugin.loader,
        {
            loader: 'css-loader',
            options: {
                modules: true,
                localIdentName: '[name]--[local]',
                importLoaders: 2
            }
        }, {
            loader: 'postcss-loader'
        }, {
            loader: 'sass-loader'
        }, {
        loader: 'sass-resources-loader',
        options: {
            // Provide path to the file with resources
            resources: `./src/Default/partials/_${helper.theme}Constant.scss`
            }
        }]
});


// webpack config
module.exports = {
    entry: {
        app: [
            './src/Default/index.jsx'
        ]
    },
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
            new UglifyJsPlugin({
                cache: true,
                parallel: true,
                sourceMap: true // set to true if you want JS source maps
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
          test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
        }),
        new StyleLintPlugin({
            failOnError: true,
            emitErrors: true,
            quiet: false,
            syntax: 'scss'
        }),
        new HtmlWebpackPlugin({
            template: `./src/Default/index.html`,
            inject: true,
            favicon: `./src/Default/assets/img/favicon.ico`
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/[name].[hash].css',
            chunkFilename: 'styles/[id].css'
        })
    ]
};
