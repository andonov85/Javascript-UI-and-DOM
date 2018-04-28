/*jslint devel: true */
/*jslint es6 */
'use strict';

(function ($) {
    $.fn.colorpicker = function (selector) {
        // Input data validation 
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
        // Colorpicker
        
        return $this;
    }
}(jQuery));
