/**
 * Created by zhangzongshan on 16/11/6.
 */
'use strict';
define(function (require, exports, module) {
    // alert("aaa");
    var dataload = require('../{dataload}');
    dataload.Debug(true);
    var common = require('../{common}');
    var swiper_bg = require('../{components}/swiper_bg/swiper');
    var content = {
        init: function (container,callback) {
            dataload.GetFile(null, 'scripts/components/index/content.html', function (html) {
                if (html !== "") {
                    container.html(html);

                    var content_obj = $("#index_bg,#index_tools");
                    content_obj.css({
                        "height": container.height() + "px"
                        , "width": container.width() + "px"
                    });
                    var tools_obj = container.find("#index_tools");
                    tools_obj.css({
                         'background-color': 'rgba(0,0,0,.8)'
                    });
                    swiper_bg.init({
                        container: container.find("#index_bg")
                        , images: [
                            'images/app/index/index_bg_1.jpg'
                            , 'images/app/index/index_bg_2.jpg'
                            , 'images/app/index/index_bg_3.jpg'
                        ]
                        , effects: 'fade'
                    }, function () {
                        var tools_obj = container.find("#index_tools");
                        tools_obj.css({
                            'background-color': 'rgba(0,0,0,.33)'
                            , 'top': -container.height() + "px"
                            , 'left': '0px'
                            , 'z-index': common.fn.getmaxZindex() + 10
                        });
                    });
                }
            });

            
        }
    }

    return {
        init:content.init
    }

});