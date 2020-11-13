const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    entry: [
        './src/ts/index.ts',
        './src/scss/index.scss'
    ],
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                include: [path.resolve(__dirname, 'src/ts')]
            },
            {
                test:/\.(s*)css$/,
                use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"],
                include: [path.resolve(__dirname, 'src/scss')]
            }
        ]
    },
    plugins: [new MiniCssExtractPlugin({filename: 'index.css'})],
    resolve: {
        extensions: ['.ts', '.js', '.scss']
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: 'public',
    },
}