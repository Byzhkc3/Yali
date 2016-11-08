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
    var sms = {
        init: function(options, callback) {
            sms._callback = callback;
            var container = options;
            dataload.GetFile(null, 'scripts/components/login/sms.html', function (html) {
                if (html !== "") {
                    container.html(html);

                    if (typeof sms._callback === 'function') {
                        sms._callback();
                    }
                }
            });
        }

    }

    return {
        init: sms.init
    }

});