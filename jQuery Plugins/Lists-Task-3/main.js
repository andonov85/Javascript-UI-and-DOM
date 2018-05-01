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
        $('tr').draggable();
        $('tr').droppable({
            drop: function (event, ui) {
                ui.draggable.css('position', 'inherit');
                $(this).after(ui.draggable);
                $(this).preventDefault();
            }
        });
    }
}(jQuery));
$('.container').lists(lists);
/*<script src="http://code.jquery.com/jquery-3.3.1.js" integrity="sha256-2Kok7MbOyxpgUVvAk/HJ2jigOSYS2auK4Pfzbm7uH60=" crossorigin="anonymous"></script>
    <script src="https://code.jquery.com/ui/1.12.1/jquery-ui.js" integrity="sha256-T0Vest3yCU7pafRw9r+settMBX6JkKN06dqBnpQ8d30="
        crossorigin="anonymous"></script>
    <script src="main.js"></script>*/
