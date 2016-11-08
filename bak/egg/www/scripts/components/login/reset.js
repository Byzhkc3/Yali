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
    var reset = {
        init: function(options, callback) {
            reset._callback = callback;
            var container = options;
            dataload.GetFile(null, 'scripts/components/login/reset.html', function(html) {
                if (html !== "") {
                    container.html(html);

                    if (typeof reset._callback === 'function') {
                        reset._callback();
                    }
                }
            });
        }

    }

    return {
        init: reset.init
    }

});