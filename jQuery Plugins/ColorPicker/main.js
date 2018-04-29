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
        $('#smallbucket').on('click', function () {
            if ($('#color-picker').length !== 0) {
                $('#color-picker').toggle();
                return;
            }
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
            $('#canvas-pallete').on('click', function (event) {
                let canv = document.getElementById('canvas-pallete');
                let cty = canv.getContext('2d');
                let data = cty.getImageData(event.pageX, event.pageY, 230, 230).data;
                let rgb = 'rgb(' + data[0] + ', ' + data[1] + ', ' + data[2] + ')';
                let hex = '#' + data[0].toString(16)
                              + data[1].toString(16)
                              + data[2].toString(16);
                $('#current-color').css('background', rgb);
                $('#rgb-input').attr('value', rgb);
                $('#hex-input').attr('value', hex);
                let copyText = document.getElementById("hex-input");
                copyText.select();
                document.execCommand("Copy");
            })
        });
    }
}(jQuery));
