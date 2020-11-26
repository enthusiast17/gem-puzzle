const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const path = require('path')

module.exports = {
    devtool: false,
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
                test: /\.ttf$/,
                use: 'url-loader',
                include: [path.resolve(__dirname, 'src/fonts')]
            },
            {
                test: /\.(png|jpg)$/,
                type: "asset",
                include: [path.resolve(__dirname, 'src/images')]
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
        extensions: ['.ts', '.js', '.scss', '.ttf', '.png']
    },
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js',
        publicPath: 'public',
    },
    performance: {
        hints: false
    },
    devtool: 'source-map'
}