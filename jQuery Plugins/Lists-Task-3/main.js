/*jslint devel: true */
/*jslint es6 */
'use strict';
let lists = [
    ['Names', 'pesho', 'gosho', 'ivan'],
    ['Languages', 'french', 'english', 'german'],
    ['Cool things', 'icecream', 'dancing', 'party']
];
(function ($) {
    $.fn.lists = function (list) {
        let $this = $(this);
        $this.css('position', 'absolute');
        // Following must be done lists.length times
        $this.html('');
        for (let i = 0; i < list.length; i += 1) {
            $this.append('<table id="Table-' + (i + 1) + '" style="width:100px">');
            let table = $this.find('#Table-' + (i + 1));
            table.css({
                'display': 'inline',
                'background': 'lightblue'
            }).attr({
                // 'border': '1px'
            });
            list[i].forEach(function (value, index) {
                if (index === 0) {
                    table.append('<tr><th>');
                    table.find('th').text(value);
                    table.append('<tr><td id="head"><button style="height: 28.5px; width: 28.5px; float: left; background: lightgreen; color: white; font-size: 23px; border: none">+</button>');
                    table.find('button').after('<input type="text" style="float: right; width: 135px">');
                    table.append('<tbody>');
                } else {
                    table.append('<tr><td style="width: 180px; text-align: center; border: 1px solid"><a style="text-decoration: none">');
                    table.find('a').last().attr({
                        target: '_blank',
                        href: 'https://www.google.com/search?q=' + value
                    }).text(value);
                }
            });
        }
        // Hide/show button/input and inserts input value into table
        $this.find('input').hide();
        $this.find('button').on('click', function () {
            $(this).toggle();
            $(this).next().toggle();
        });
        $this.find('input').on('keypress', function (event) {
            if (event.which == 13) {
                if ($(this).val().length == 0) {
                    $(this).toggle()
                        .prev().toggle();
                    return;
                }
                $(this).closest('table').append('<tr><td><a>');
                $(this).closest('table').find('a').last().attr({
                    target: '_blank',
                    href: 'https://www.google.com/search?q=' + $(this).val()
                }).text($(this).val());
                $(this).val('')
                    .toggle()
                    .prev().toggle();
            }
        })
        // Draging and droping
        $this.find('tr').css({
            '-moz-user-select': 'none', // moz ff
            'user-select': 'none',
            // 'position': 'relative'
        }).attr({
            'ondragstart': 'return false;', // moz ff
            'draggable': 'false'
        });
        $this.on('mousedown', function (event) {
            if (event.target.tagName === 'TD' && event.target.id !== 'head') {
                let $tr = $(event.target).parent();
                let offset = $tr.offset();
                let dx = event.pageX - offset.left;
                let dy = event.pageY - offset.top;
                $tr.css('position', 'absolute');
                $(document).on('mousemove', function (event) {
                    $tr.css({
                        left: event.pageX - dx,
                        top: event.pageY - dy
                    });
                });
                $this.on('mouseup', function (event) {
                    $(document).off('mousemove');
                    $tr.hide();
                    $this.on('mouseover', function (event) {
                        // if ($(event.target).localName === 'td') {
                            $(event.target).closest('tr').after($tr);
                            $tr.css('position', 'inherit');
                            $tr.show();
                            $this.off('mouseover');
                        // } else {
                        //     $tr.show();
                        //     $this.off('mouseover');
                        // }
                    });
                    $this.off('mouseup');
                });
            }
        })
    };
}(jQuery));
$('.container').lists(lists);
