const path = require("path");
const rules = require('../webpack-config/webpack.rules');

rules.push({
    test: /\.css$/,
    include: /(node_modules)/,
    use: [{
        loader: 'style-loader'
    }, {
        loader: 'css-loader'
    }]
});

// push app scss rule
rules.push({
    test: /\.scss$/,
    include: [path.resolve(__dirname, '../src/Widgets')],
    use: [{
        loader: 'style-loader',
        options: {
            sourceMap: true
        }
    }, {
        loader: 'css-loader',
        options: {
            modules: true,
            importLoaders: 2,
            localIdentName: '[name]--[local]',
            sourceMap: true
        }
    }, {
        loader: 'postcss-loader'
    }, {
        loader: 'sass-loader'
    }, {
        loader: 'sass-resources-loader'
    }]
});

module.exports = {
  module: {
    rules: rules
  }
};
