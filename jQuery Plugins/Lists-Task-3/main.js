/*jslint devel: true */
/*jslint es6 */
'use strict';
let lists = [
    ['Names', 'Hulk Hogan', 'Felix Kjellberg', 'Gosho'],
    ['Languages', 'HTML5', 'CSS3', 'JavaScript'],
    ['Cool things', 'Icecream', 'Dancing', 'Party']
];
(function ($) {
    $.fn.lists = function (list) {
        
        // Injecting <style> in html - CSS

        $('head').append('<style type="text/css" id="style-lists">');
        $('#style-lists').text(`
            .Tables-Lists {
                display: inline;
                background: lightblue;
                border: 1px solid;
                border-collapse: collapse;
                border-radius: 5px;
            }
            .Buttons-Lists {
                height: 28.5px;
                width: 28.5px;
                float: left;
                background: lightgreen;
                color: white;
                font-size: 23px;
                border: none;
            }
            .Inputs-Lists {
                float: right;
                width: 135px;
            }
            .tr-Lists .td-Lists {
                width: 200px;
                text-align: center;
                border: 1px solid;
                -moz-user-select: none;
                user-select: none;
            }
            .Links-Lists {
                text-decoration: none;
            }`
        );

        // Following must be done lists.length times

        let $this = $(this);
        $this.html('');
        for (let i = 0; i < list.length; i += 1) {
            $this.append('<table id="Table-' + (i + 1) + '" class="Tables-Lists">');
            let table = $this.find('#Table-' + (i + 1));
            list[i].forEach(function (value, index) {
                if (index === 0) {
                    table.append('<tr class="tr-Lists"><th>');
                    table.find('th').text(value);
                    table.append('<tr class="tr-Lists"><td id="head-Lists"><button class="Buttons-Lists">+</button>');
                    table.find('button').after('<input type="text" class="Inputs-Lists">');
                    table.append('<tbody>');
                } else {
                    table.append('<tr class="tr-Lists"><td class="td-Lists"><a class="Links-Lists">');
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
                $(this).closest('table').append('<tr class="tr-Lists"><td class="td-Lists"><a class="Links-Lists">');
                $(this).closest('table').find('a').last().attr({
                    target: '_blank',
                    href: 'https://www.google.com/search?q=' + $(this).val()
                }).text($(this).val());
                $(this).val('')
                    .toggle()
                    .prev().toggle();
            }
        });

        // Dragging and dropping

        $this.on('mousedown', function (event) {
            if (event.target.tagName === 'TD' && event.target.id !== 'head-Lists') {
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
                    $(document).on('mouseover', function (event) {
                        if (event.target.tagName === 'TD' && $(event.target).has('a').length !== 0) {
                            $(event.target).closest('tr').after($tr);
                            $tr.css({
                                'left': 'auto',
                                'top': 'auto',
                                'position': 'initial'
                            });
                            $tr.show();
                            $(document).off('mouseover');
                        } else {
                            $tr.show();
                            $this.off('mouseover');
                        }
                    });
                    $this.off('mouseup');
                });
            }
        })
    };
}(jQuery));
$('.container').lists(lists);
