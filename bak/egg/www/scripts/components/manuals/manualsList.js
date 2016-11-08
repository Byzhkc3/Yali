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
    var manualsList = {
        init: function(options, callback) {
            manualsList._callback = callback;
            var container = options;
            dataload.GetFile(null, 'scripts/components/manuals/manualsList.html', function(html) {
                if (html !== "") {
                    container.html(html);

                    if (typeof manualsList._callback === 'function') {
                        manualsList._callback();
                    }
                }
            });
        }

    }

    return {
        init: manualsList.init
    }

});