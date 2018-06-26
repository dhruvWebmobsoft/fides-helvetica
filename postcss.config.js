module.exports = {
    plugins: [
        require('postcss-replace')({
            pattern: '(~fides-helvetica\/fonts)',
            data: {
                '~fides-helvetica/fonts': '..\/fonts'
            }
        })
    ]
}
