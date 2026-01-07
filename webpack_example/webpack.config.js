const webpack = require('webpack'); // checks node_modules folder
const path = require('path'); // loads from pre-defined avaliable in NodeJS
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
 entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.[contenthash:8].js'
  },
   target: ['web', 'es5'],
    module: {
        rules: [
            {
                test: /\.js$/,
                use:["babel-loader"]
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"]
            }
        ]
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "index.html")
    })],
}