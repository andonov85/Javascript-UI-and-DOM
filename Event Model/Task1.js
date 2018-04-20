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
        throw new Error(`${el} is not DOM element`);
    } else if (!document.body.contains(el)) {
        throw new Error(`${el} is non-existing in document`);
    }
    let element = el;
    if (typeof el === 'string') {
        element = document.getElementById(el);
    }
    const buttons = element.getElementsByClassName('button');
    Array.from(buttons).forEach(element => {
        element.innerHTML = 'hide';
    });
    element.addEventListener("click", function(event) {
        if (event.target.className === 'button') {
            let currTarget = event.target;
            while (currTarget.nextElementSibling !== null
                    && currTarget.nextElementSibling.className !== 'content') {
                if (currTarget.nextElementSibling.className === 'button') {
                    return;
                }
                currTarget = currTarget.nextElementSibling;
            }
            if (currTarget.nextElementSibling === null) {
                return
            }
            currTarget = currTarget.nextElementSibling;
            if (currTarget.style.display === '') {
                currTarget.style.display = 'none';
                event.target.innerHTML = 'show';
            } else if (currTarget.style.display === 'none') {
                currTarget.style.display = '';
                event.target.innerHTML = "hide";
            }
        }
    }, false);
}
