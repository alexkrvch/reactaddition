export function buildSVGLoader (): { test: RegExp, use: [string] } {
    return {
        test: /\.svg$/,
        use: ['@svgr/webpack']
    }
}
