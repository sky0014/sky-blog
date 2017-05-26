const webpack = require("webpack");

module.exports = {
    devtool: "source-map",
    // devtool: "cheap-module-eval-source-map",

    entry: {
        message: "./client/src/js/message.js"
    },
    output: {
        path: __dirname + "/assets",
        filename: "js/[name].js"
    },

    module: {
        rules: [{
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: [
                            ["es2015", { modules: false }], "react", "stage-3"
                        ]
                    }
                }
            },
            {
                test: /\.css$/,
                use: [{
                        loader: "style-loader"
                    },
                    {
                        loader: "css-loader",
                        options: {
                            camelCase: true,
                            localIdentName: "[local]-[hash:6]"
                        }
                    }
                ]
            },
            {
                test: /\.(png)|(jpg)|(jpeg)|(gif)$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 20000,
                        name: "img/[name]_[hash:6].[ext]"
                    }
                }
            },
            {
                test: /\.swf$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "res/[name]_[hash:6].[ext]"
                    }
                }
            },
            {
                test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        limit: 20000,
                        name: "font/[name]_[hash:6].[ext]"
                    }
                }
            }
        ]
    }
};