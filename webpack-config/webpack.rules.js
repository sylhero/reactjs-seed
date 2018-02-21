const path = require('path');

module.exports = [{
    enforce: 'pre',
    test: /\.jsx?$/,
    include: [path.resolve(__dirname, '../src')],
    use: [{
        loader: 'eslint-loader',
        options: {
            fix: true
        }
    }]
}, {
    test: /\.jsx?$/,
    include: [path.resolve(__dirname, '../src')],
    use: [{
        loader: 'babel-loader',
        options: {
            cacheDirectory: true
        }
    }]
}, {
    test: /\.(eot|ttf|woff|woff2)$/,
    include: path.resolve(__dirname, '../src'),
    use: [{
        loader: 'file-loader',
        options: {
            name: 'assets/font/[name].[hash].[ext]'
        }
    }]
}, {
    test: /\.(gif|png|jpe?g|svg|ico)$/,
    include: path.resolve(__dirname, '../src'),
    use: [{
        loader: 'file-loader',
        options: {
            name: 'assets/img/[name].[hash].[ext]'
        }
    }, {
        loader: 'image-webpack-loader',
        options: {
            gifsicle: {
                progressive: true,
                optimizationLevel: 7,
                interlaced: false,
                pngquant: {
                    quality: '65-90',
                    speed: 4
                }
            }
        }
    }]
}, {
    test: /\.(eot|ttf|woff|woff2)$/,
    include: path.resolve(__dirname, '../node_modules'),
    use: [{
        loader: 'file-loader',
        options: {
            name: 'assets/font/[name].[hash].[ext]'
        }
    }]
}, {
    test: /\.(gif|png|jpe?g|svg|ico)$/,
    include: path.resolve(__dirname, '../node_modules'),
    use: [{
        loader: 'file-loader',
        options: {
            name: 'assets/font/[name].[hash].[ext]'
        }
    }]
}];
