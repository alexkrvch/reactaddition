import webpack from "webpack";

export function buildLoaders():webpack.RuleSetRule[] {
    // if need jsx - need install babel-loader
    const typescriptLoader = {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
    }

    const cssLoader = {
        test: /\.s[ac]ss$/i,
        use: [
            'style-loader', // style nodes from js strings
            'css-loader', // css into commonjs
            'sass-loader' // compile sass to css
        ]
    }

    return [
        typescriptLoader,
        cssLoader
    ]
}