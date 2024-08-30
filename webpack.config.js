const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
// const file = require('./src/indec');
module.exports = {
    entry: './src/js/main.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader'],
            },
        ],
    },
    optimization: {
        minimize: true, // Enable minification
        minimizer: [
           '...',// Use existing minimizers (e.g., for JS)
          new CssMinimizerPlugin(), // Minify CSS
        ],
      },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: 'index.html',
        }),
        new HtmlWebpackPlugin({
            template: './src/careers.html',
            filename: 'careers.html',
        }),
        new MiniCssExtractPlugin({
            filename: 'styles/style.css',
        }),
    ],
    mode: "production"
};