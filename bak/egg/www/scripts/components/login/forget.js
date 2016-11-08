/**
 * Created by egg on 16/11/08.
 */
'use strict';
define(function(require, exports, module) {
    seajs.use([
        'css/login/login.css'
    ]);

    var common = require('../{common}');
    var dataload = require('../{dataload}');
    dataload.Debug(true);
    var forget = {
        init: function(options, callback) {
            forget._callback = callback;
            var container = options;
            dataload.GetFile(null, 'scripts/components/login/forget.html', function(html) {
                if (html !== "") {
                    container.html(html);

                    if (typeof forget._callback === 'function') {
                        forget._callback();
                    }
                }
            });
        }

    }

    return {
        init: forget.init
    }

});