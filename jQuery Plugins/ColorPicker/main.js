/*jslint devel: true */
/*jslint es6 */
'use strict';

(function ($) {
    $.fn.colorpicker = function () {
        // Creating bucket tumbnail
        let $this = $(this);
        $this.html('');
        $this.append('<img id="image-pallete">');
        $this.find('#image-pallete')
               .attr({
                    src: 'color-wheel.jpg',
                    width: '200',
                    height: '200'
                })
                .hide();
        $this.append('<img id="smallbucket">');
        $this.find('#smallbucket')
               .attr({
                    src: 'bucket_thumbnail.png',
                    width: '30',
                    height: '30'
        });
        //
        $('#smallbucket').on('click', function() {
            $this.append('<section id="color-picker">');
            $('#color-picker').append('<canvas id="canvas-pallete">')
                              .append('<input id="hex-input">')
                              .append('<input id="rgb-input">')
                              .append('<aside id="current-color">');
            let canvas = document.getElementById('canvas-pallete');
            let ctx = canvas.getContext('2d');
            ctx.canvas.width = 230;
            ctx.canvas.height = 230;
            let img = document.getElementById('image-pallete');
            ctx.drawImage(img, 10, 10, 210, 210);
        });
    }
}(jQuery));
