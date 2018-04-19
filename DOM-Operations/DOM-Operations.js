/*jslint devel: true */
/*jslint es6 */
'use strict';

module.exports = function () {

    return function (el, arr) {
        if (arguments.length <= 1) {
            throw new Error('Missing function arguments');
        } else if (typeof el === typeof '') {
            if (document.getElementById(el) === null) {
                throw new Error(`Invalid ID: ${el}`);
            }
        } else if (el === null) {
            throw new Error(`Invalid DOM element: ${el}`);
        } else if (!Array.isArray(arr)) {
            throw new Error(`${arr} is not a type of array`);
        }
        let isArgsValid = true;
        arr.forEach(element => {
            if (typeof element === typeof '' || !isNaN(element)) {
                if (typeof element === typeof {}) {
                    isArgsValid = false;
                }
            } else {
                isArgsValid = false;
            }
        });
        if (!isArgsValid) {
            throw new Error('Content is not a number or string');
        }
        let element = el;
        if (typeof el === typeof '') {
            element = document.getElementById(el);
        }
        element.innerHTML = '';

        let docFragment = document.createDocumentFragment();
        arr.forEach(value => {
            let div = document.createElement('div');
            div.innerHTML = value;
            docFragment.appendChild(div);
        });
        element.appendChild(docFragment);
    };
};
