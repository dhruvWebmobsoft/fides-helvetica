import jQuery from 'jQuery';

const $ = jQuery;
const exampleText = 'The quick brown fox jumps over the lazy dog. 1234567890';

$(() => {

    const fontWeights = ['normal', 'bold', '900'];
    const fontStyles = ['normal', 'italic'];
    const fontSizes = ['10px', '16px', '24px', '48px', '64px', '80px', '96px'];

    const fontExampleContainer = $('#font-example-container');

    fontWeights.forEach(fontWeight => {
        fontStyles.forEach(fontStyle => {
            const fontExampleHeader = $('<div/>');
            fontExampleHeader.addClass('font-example-header');

            const fontExampleStyle = 'font-weight: ' + fontWeight + '; font-style: ' + fontStyle + ';';
            fontExampleHeader.text(fontExampleStyle);

            const fontExampleBlock = $('<div/>');

            fontExampleBlock.addClass('font-example-block');
            fontExampleBlock.css('font-weight', fontWeight);
            fontExampleBlock.css('font-style', fontStyle);

            fontSizes.forEach(fontSize => {
                const fontSizeBlock = $('<div/>');
                fontSizeBlock.addClass('font-size-block');

                const fontSizeDescription = $('<span/>');
                fontSizeDescription.addClass('font-size-description');
                const fontSizeStyle = 'font-size: ' + fontSize + ';';
                fontSizeDescription.text(fontSizeStyle);

                fontSizeBlock.append(fontSizeDescription);
                const exampleTextBlock  = $('<span/>');
                exampleTextBlock.css('font-size', fontSize);
                exampleTextBlock.text(exampleText);
                fontSizeBlock.append(exampleTextBlock);

                fontSizeBlock.appendTo(fontExampleBlock);
            });

            fontExampleHeader.appendTo(fontExampleContainer);
            fontExampleBlock.appendTo(fontExampleContainer);
        });
    });

});
