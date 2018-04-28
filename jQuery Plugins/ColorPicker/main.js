/*jslint devel: true */
/*jslint es6 */
'use strict';

(function ($) {
    $.fn.colorpicker = function () {
        // Creating small bucket tumbnail
        let $this = $(this);
        $this.html('<img id="smallbucket">');
        $this.find('#smallbucket')
               .attr({
            src: 'bucket_thumbnail.png',
            width: '30',
            height: '30'
        });
        $('#smallbucket').on('click', function() {
            $this.append('<section id="color-picker">');
            $('#color-picker').append('<input id="hex-input">');
            $('#color-picker').append('<input id="rgb-input">');
            $('#color-picker').append('<aside id="current-color">');
        });
    }
}(jQuery));
