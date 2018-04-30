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
            list[i].forEach(function (value, index) {
                if (index === 0) {
                    table.append('<tr><th>');
                    table.find('th').text(value);
                    table.append('<tr><td><button>');
                    table.find('button').after('<form><input>');
                } else {
                    table.append('<tr><td><a>');
                    table.find('a').last().attr({
                        href: 'https://www.google.com/search?q=' + value
                    }).text(value);
                }
            });
        }
        $this.find('input').hide();
        $this.find('button').on('click', function() {
            $(this).toggle();
            $(this).next().find('input').toggle();
        });
    }
}(jQuery));
$('.container').lists(lists);
