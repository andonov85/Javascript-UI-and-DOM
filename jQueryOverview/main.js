/*jslint devel: true */
/*jslint es6 */
'use strict';

function solve(selector) {
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
    el.find('.button').text('hide');
    el.find('.button').on('click', function() {
        console.log($(this).closest('div'));
    });
}