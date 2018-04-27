/*jslint devel: true */
/*jslint es6 */
'use strict';

function dropdownList(selector) {
    if (typeof selector !== 'string') {
        throw new Error(`-> ${selector} <- isn't a string`);
    } else if (!selector instanceof jQuery) {
        throw new Error(`-> ${selector} <- isn't a jQuery object!`);
    }
    if ($(selector).length === 0) {
        return;
    }
    let el = selector;
    if (typeof selector === 'string') {
        el = $(selector);
    }
    el.hide();
    $(el).after('<div class="dropdown-list"></div>');
    $('.dropdown-list').append(el);
    $('.dropdown-list').append('<div class="current" data-value="">' +
        $('#the-select').find('option').first().text() + '</div>');
    $('.current').css({
        'background': 'gainsboro',
        'position': 'absolute',
        'border': 'none',
        'padding': '5px 10px',
        'cursor': 'context-menu'
    });
    let container = $('<div>').attr({
        'class': 'options-container',
        'style': `position: absolute;
                  top: 38px;
                  display: none;
                  background-color: grey;
                  color: white`
    });
    $('#the-select').find('option').each(function (index) {
        container.append('<div class=\'dropdown-item\'>');
        $(container.find('.dropdown-item')[index]).attr({
            'data-value': $(this).attr('value'),
            'data-index': index,
            'style': 'padding: 5px 10px; cursor: context-menu'
        }).text($(this).text());
    });
    $('.dropdown-list').append(container);

    $('.current').on('click', function () {
        $('.options-container').toggle();
    });
    $('.dropdown-item').on('click', function () {
        $('.options-container').hide();
        $('.current').attr({
            'data-value': $(this).attr('data-value')
        })
        $('.current').text($(this).text());
    });
    $('.dropdown-item').on('mouseover', function () {
        $(this).css({
            'background': 'coral'
        });
    });
    $('.dropdown-item').on('mouseleave', function () {
        $(this).css({
            'background': 'grey'
        });
    });
}
