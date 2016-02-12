var webpack = require("webpack");

module.exports = {
    entry: "./main.js",
    output: {
        path: "dist/assets",
        filename: "bundle.js",
        sourceMapFilename: 'bundle.map'
    },
    devtool: '#source-map',
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ['babel'],
                query: {
                    presets: ['es2015', 'react']
                }
            }
        ]
    }
    //,
    //plugins: [
    //    new webpack.optimize.UglifyJsPlugin({
    //        sourceMap: true,
    //        warnings: false,
    //        mangle: false
    //    })
    //]
};