/*jslint devel: true */
/*jslint es6 */
'use strict';
let lists = [
    ['Names', 'gosho', 'todor', 'ivan', 'kaloyan', 'gergana', 'john'],
    ['Laguages', 'french', 'english', 'german', 'spanish', 'russian', 'javascript'],
    ['Cool things', 'icecream', 'dancing', 'party', 'beer', 'programming', 'diving', 'reading', 'learning']
];
(function ($) {
    $.fn.lists = function (list) {
        let $this = $(this);
        // Following must be done lists.length times
        $this.html('');
        for (let i = 0; i < list.length; i += 1) {
            $this.append('<table id="Table-' + (i + 1) + '">');
            let table = $this.find('#Table-' + (i + 1));
            table.css('display', 'inline');
            list[i].forEach(function (value, index) {
                if (index === 0) {
                    table.append('<tr><th>');
                    table.find('th').text(value);
                    table.append('<tr><td><button>');
                    table.find('button').after('<input type="text">');
                } else {
                    table.append('<tr><td><a>');
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
        $this.find('a').css({
            '-moz-user-select': 'none', // moz ff
            'user-select': 'none',
            'position': 'relative'
        }).attr({
            'ondragstart': 'return false;', // moz ff
            'draggable': 'false'
        });
        $this.on('mousedown', function (event) {
            if ($(event.target).is('a')) {
                let offset = $(event.target).offset();
                let dx = event.pageX - offset.left;
                let dy = event.pageY - offset.top;
                $(event.target).on('mousemove', function (event) {
                    $(this).css({
                        left: event.pageX - dx,
                        top: event.pageY - dy
                    });
                    console.log(event.pageX + ' ' + event.pageY);
                    console.log(dx + ' ' + dy);
                });
                $(event.target).on('mouseup', function () {
                    $(this).off('mousemove');
                });
            }
        });
    }
}(jQuery));
$('.container').lists(lists);
