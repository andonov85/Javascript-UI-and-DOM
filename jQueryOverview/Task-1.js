/*jslint devel: true */
/*jslint es6 */
'use strict';

function solve(selector, COUNT) {
    if (isNaN(parseFloat(COUNT)) || !isFinite(COUNT) || +COUNT < 1) {
        throw new Error(`${COUNT} is not a valid number`);
    }
    if ($(selector).length === 0) {
        return;
    }
    let ul = $('<ul>').addClass('items-list');
    for (let i = 0; i < COUNT; i += 1) {
        let li = $('<li>').addClass('list-item').text(`List item #${i}`);
        ul.append(li);
    }
    $(selector).append(ul);
}
