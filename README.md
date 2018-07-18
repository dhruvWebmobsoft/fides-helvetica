# fides-helvetica

This package contains the Helvetica LT webfonts and stylesheets for use in Fides Web Applications.

## Install

    yarn add https://git.fidesintra.net/scm/fico/fides-css.git

## Include

### Include SASS with Webpack

Add the following include to your project:

    @import '~fides-helvetica/src/scss/fides-helvetica';

or alternatively if you want just the css:

    @import '~fides-helvetica/target/fides-helvetica.css';

## Build

To build this project run:

    yarn build

The result will be in the *target* folder.

## Demo

Run the demo with:

    yarn start

or

    yarn serve

## Notes

Fides helvetica is using

* `Neue Helvetica® W04 45 Light` for normal font-weight and normal font-style
* `Neue Helvetica® W04 46 Light Italic` for normal font-weight and italic font-style
* `Neue Helvetica® W04 55 Roman for bold` font-weight and normal font-style
* `Neue Helvetica® W04 56 Italic for bold` font-weight and italic font-style
* `Neue Helvetica® W04 75 Bold` for font-weight 900 and normal font-style
* `Neue Helvetica® W04 76 Bold Italic` for font-weight 900 and italic font-style

The original font package from Linotype can be found in
`LT-WebFonts-362523635.zip`.