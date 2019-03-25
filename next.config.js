const withCSS = require('@zeit/next-css')

module.exports = withCSS({
    distDir: '../../dist/functions/next',
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: '[local]___[hash:base64:5]',
    },
})
