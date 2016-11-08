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
    var manualsDateil = {
        init: function(options, callback) {
            manualsDateil._callback = callback;
            var container = options;
            dataload.GetFile(null, 'scripts/components/manuals/manualsDateil.html', function(html) {
                if (html !== "") {
                    container.html(html);

                    if (typeof manualsDateil._callback === 'function') {
                        manualsDateil._callback();
                    }
                }
            });
        }

    }

    return {
        init: manualsDateil.init
    }

});