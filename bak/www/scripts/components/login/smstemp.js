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
    var smstemp = {
        init: function(options, callback) {
            smstemp._callback = callback;
            var container = options;
            dataload.GetFile(null, 'scripts/components/login/smstemp.html', function(html) {
                if (html !== "") {
                    container.html(html);

                    if (typeof smstemp._callback === 'function') {
                        smstemp._callback();
                    }
                }
            });
        }

    }

    return {
        init: smstemp.init
    }

});
