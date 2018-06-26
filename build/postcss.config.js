/* eslint-disable */
/* jshint node: true */
'use strict';

module.exports = (ctx) => ({
    map: ctx.file.dirname.includes('examples') ? false : {
        inline: false,
        annotation: true,
        sourcesContent: true
    },
    plugins: {
        autoprefixer: {
            cascade: false
        },
        "postcss-replace": {
            pattern: '(~fides-helvetica\/fonts)',
            data: {
                '~fides-helvetica/fonts': '..\/fonts'
            }
        }
    }
});


