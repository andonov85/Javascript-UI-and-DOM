/*jslint devel: true */
/*jslint es6 */
'use strict';

function solve(el) {
    if (arguments.length === 0) {
        throw new Error('Expected 1 function argument');
    } else if (typeof el === 'string') {
        if (document.getElementById(el) === null) {
            throw new Error(`ID:\'${el}\' doesn\'t exist`);
        }
    } else if (!(el instanceof Node)) {
        throw Error(`${el} is not DOM element`);
    } else if (!document.body.contains(el)) {
        throw Error(`${el} is non-existing in document`);
    }
    const element = el;
    if (typeof el === 'string') {
        element = document.getElementById(el);
    }
    const buttons = element.getElementsByClassName('button');
    const contents = element.getElementsByClassName('content');
    buttons.forEach(element => {
        element.hidden = true;
    });
}
