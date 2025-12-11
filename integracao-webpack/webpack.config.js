const path = require('path')
const CopyPlugin = require('copy-webpack-plugin')

module.exports = {
    mode: 'production',
    entry: './src/main.ts',
    output: {
        filename: 'app.min.js',
        path: path.join(__dirname, 'dist')
    },
    devServer: {
        static: path.join(__dirname, 'dist'),
        port: 9000,
        hot: true
    },
    resolve: {
        extensions: ['.ts', '.js']
    },
    module: {
        rules: [{
            test: /\.ts$/,
            use: 'ts-loader',
            exclude: /node_modules/
        }]
    }, plugins: [
        new CopyPlugin({
            patterns: [{from: "public"}]
        })
    ]
}