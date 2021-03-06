/**
 * Created by egg on 16/11/07.
 */
'use strict';
define(function(require, exports, module) {
    seajs.use([
        'assets/js/public/swiper/swiper-3.4.0.min.css',
        'css/login/login.css'
    ]);

    var common = require('../{common}');
    var dataload = require('../{dataload}');
    var swiper_bg = require('../{components}/swiper_bg/swiper');
    dataload.Debug(true);
    var login = {
        init: function(options, callback) {
            login._callback = callback;
            var container = options;
            dataload.GetFile(null, 'scripts/components/login/login.html', function(html) {
                if (html !== "") {
                    container.html(html);
                    swiper_bg.init({
                        container: container.find(".swiper-bg"),
                        images: [
                            'images/app/login/login_bg1.jpg', 'images/app/login/login_bg2.jpg', 'images/app/login/login_bg3.jpg'
                        ],
                        effects: 'fade'
                    }, null);

                    if (typeof login._callback === 'function') {
                        login._callback();
                    }
                }
            });
        }

    }

    return {
        init: login.init
    }

});
