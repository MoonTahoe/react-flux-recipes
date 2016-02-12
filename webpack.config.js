var path = require("path");
var autoprefixer = require("autoprefixer");

module.exports = {
    entry: "./client.js",
    output: {
        path: "dist/assets",
        filename: "bundle.js",
        publicPath: "/assets/"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: ['babel'],
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.json$/,
                loader: ['json']
            },
            {
                test: /\.scss$/,
                loader: ['style', 'css?sourceMap', 'sass?sourceMap']
            },
            {
                test: /\.(png|jpg|jpeg|gif|woff|woff2|svg)$/,
                loader: 'url-loader?limit=8192'
            }
        ]
    },
    sassLoader: {
        includePaths: [path.resolve(__dirname, './stylesheets')]
    },
    postcss: [autoprefixer({browsers: ['last 2 versions']})]
};