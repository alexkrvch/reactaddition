import type webpack from 'webpack'
import path from 'path'
import { type BuildPaths } from '../build/types/config'
import { buildCssLoader } from '../build/loaders/buildCssLoader'
import { buildSVGLoader } from '../build/loaders/buildSVGLoader'
import { DefinePlugin } from 'webpack'

export default ({ config }: { config: webpack.Configuration }): any => {
    const paths: BuildPaths = {
        build: '',
        html: '',
        entry: '',
        src: path.resolve(__dirname, '..', '..', 'src'),
        locales: '',
        buildLocales: ''
    }
    config.resolve?.modules?.push(paths.src)

    config.resolve?.alias
        ? config.resolve.alias = {
            ...config.resolve.alias,
            '@': paths.src
        }
        : console.log('Error with config')

    const imageRule = config.module?.rules?.find((rule) =>
        // @ts-expect-error problem with config
        rule.test?.test('.svg')
    )

    // @ts-expect-error its work still don't change builder for svg
    imageRule.exclude = /\.svg$/

    config.module?.rules?.push(buildSVGLoader())
    config.resolve?.extensions?.push('.ts', '.tsx')
    config.module?.rules?.push(buildCssLoader(true))

    config.plugins?.push(new DefinePlugin({
        _IS_DEV_: true,
        _API_: JSON.stringify('https://testapi.ru'),
        _PROJECT_: JSON.stringify('storybook')
    }))

    return config
}
