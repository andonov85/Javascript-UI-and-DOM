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
    $('.dropdown-list').append('<div class="current" data-value="">'
                                + $('#the-select').find('option').first().text() + '</div>');
    let container = $('<div>').css({
        'class': 'options container',
        'style': 'position: absolute',
        'display': 'none'
    });
    $('#the-select').find('option').each(function (index) {
        container.append('<div class=\'dropdown-item\'>');
        $(container.find('.dropdown-item')[index]).css({
                    'data-value': '$(this).value',
                    'data-index': 'index'
                 }).text($(this).text());
    });
    $('.dropdown-list').append(container);
}
