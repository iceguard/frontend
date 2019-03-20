module.exports = {
    plugins: {
        'postcss-nested': {},
        'postcss-custom-properties': {
            preserve: false,
            importFrom: ['./src/app/lib/postcss/colors.css'],
        },
    },
}
