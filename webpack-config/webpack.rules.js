const path = require('path');

module.exports = [{
    enforce: 'pre',
    test: /\.jsx?$/,
    include: [path.resolve(__dirname, '../src')],
    exclude: /node_modules/,
    use: [{
        loader: 'eslint-loader',
        options: {
            fix: false
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
    test: /\.(eot|ttf|woff|woff2)$/,
    include: path.resolve(__dirname, '../node_modules'),
    use: [{
        loader: 'file-loader',
        options: {
            name: 'assets/font/[name].[hash].[ext]'
        }
    }]
}, {
    test: /\.(gif|png|jpe?g|ico|svg)$/,
    use: [{
        loader: 'file-loader',
        options: {
            name: 'assets/font/[name].[hash].[ext]'
        }
    }]
}];
