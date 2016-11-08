/**
 * Created by zhangzongshan on 16/11/6.
 */
'use strict';
define(function (require, exports, module) {
    seajs.use([
        'assets/js/public/swiper/swiper-3.4.0.min.css'
    ]);

    var common = require('../{common}');
    var dataload = require('../{dataload}');
    dataload.Debug(true);

    function Blur(img_id,canvas_id) {
        StackBlur.image(img_id, canvas_id, 100, true);
    }
    var swiper = {
        init: function (options, callback) {
            options = (typeof (options) == "object" && options != null) ? options : null;
            if (options !== null) {
                var container = options.container ? options.container : null;
                var images = common.is.isArray(options.images) ? options.images : null;
                var effects = options.effects !== "" ? options.effects : 'slide';
                var times = typeof options.times === 'number' ? options.times : 5000;
                var direction = options.direction === 'vertical' ? 'vertical' : 'horizontal';
                if (container !== null && images !== null) {
                    dataload.GetFile(null, 'scripts/components/swiper_bg/swiper.html', function (html) {
                        if (html !== '') {
                            container.html(html);

                            container.find('.swiper-container').css({
                                'width': container.width() + 'px'
                                ,'height':container.height()+'px'
                            });
                            var load_container = container.find('.swiper-wrapper');

                            $.each(images, function (index, item) {
                                var bg_img = $('<div class="swiper-slide"></div>');
                                bg_img.css({
                                    'background-image': 'url(' + item + ')'
                                });
                                load_container.append(bg_img);
                            });
                            var swiper_bg_Swiper = new Swiper('.swiper-container', {
                                width: container.width()
                                , height: container.height()
                                , direction: direction
                                , loop: true
                                , autoplay: times
                                , autoplayDisableOnInteraction: false
                                , effect: effects
                                , fade: {
                                    crossFade: true,
                                }
                                , centeredSlides: true
                                , simulateTouch: false
                                , speed: 1000

                                , onInit: function () {
                                    if (typeof callback === 'function') {
                                        callback();
                                    }
                                }
                            });
                        }
                    });
                }
            }
        }
    }

    return {
        init: swiper.init
    }

});