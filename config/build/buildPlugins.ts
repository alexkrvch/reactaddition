import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin'
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer'
import { type BuildOptions } from './types/config'

export function buildPlugins ({
    paths,
    isDev,
    apiUrl,
    project
}: BuildOptions): webpack.WebpackPluginInstance[] {
    const addPlugins = [
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new webpack.ProgressPlugin(),
        new MiniCssExtractPlugin({
            filename: 'css/[name].[contenthash:8].css',
            chunkFilename: 'css/[name].[contenthash:8].css'
        }),
        new webpack.DefinePlugin({
            _IS_DEV_: JSON.stringify(isDev),
            _API_: JSON.stringify(apiUrl),
            _PROJECT_: JSON.stringify(project)
        })
    ]

    if (isDev) {
        addPlugins.push(new BundleAnalyzerPlugin({
            openAnalyzer: false
        }))
        addPlugins.push(new webpack.HotModuleReplacementPlugin())
        addPlugins.push(new ReactRefreshPlugin())
    }

    return addPlugins
}
