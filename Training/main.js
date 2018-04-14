/*jslint devel: true */
/*jslint es6 */
'use strict';

Array.from(document.getElementsByTagName('img'))
    .forEach((img, index) => img.onclick = function () {
        alert('Hello JS! (clicked on Image ' + (index + 1) + ')');
    });

let el = document.getElementById('input');

el.addEventListener('keypress', function (key) {
    if (key.keyCode === 13) {
        let butt = document.createElement('button');
        butt.className = 'button';
        butt.innerText = el.value;
        butt.style.backgroundColor = 'rgb(' + Math.floor((Math.random() * 1000) / 3.9216)
            + ', ' + Math.floor((Math.random() * 1000) / 3.9216)
            + ', ' + Math.floor((Math.random() * 1000) / 3.9216) + ')';
        document.getElementsByTagName('body')[0].appendChild(butt);
    }
});