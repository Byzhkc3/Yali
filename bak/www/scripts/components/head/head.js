/**
 * Created by zhangzongshan on 16/11/5.
 */
'use strict';
define(function (require, exports, module) {

    var dataload = require('../{dataload}');
    dataload.Debug(true);
    
    var head = {
        _callback: null,
        init: function (container, callback) {
            head._callback = callback;
            dataload.GetFile(null, 'scripts/components/head/head.html', function (html) {
                if (html !== "") {
                    container.html(html);
                    container.find(".head_circle").css({
                        "width": countScreen(56,'h') + "px"
                        , "height": countScreen(56, 'h') + "px"
                        , "line-height": countScreen(56, 'h')-2 + "px"
                    });

                    container.find(".head_components").css({
                        "padding": countScreen(17, 'h') + 'px ' + countScreen(25, 'h')+'px'
                    });
                    container.find(".head_content").css({
                        "width": _width - (countScreen(81, 'h')) * 2 + "px"
                        , "height": countScreen(56, 'h') + "px"
                        , "line-height": countScreen(56, 'h') + "px"
                    });
                    container.find(".head_item").css({
                        "width": countScreen(28, 'h') + "px"
                        , "height": countScreen(28, 'h') + "px"
                    });

                    head.action(container);
                }
            }, null);
        },
        //添加点击事件
        action: function (container) {

            container.find(".action_user").hammer().off('tap');
            container.find(".action_user").hammer().on('tap', function () {

            });

            container.find(".action_message").hammer().off('tap');
            container.find(".action_message").hammer().on('click', function () {

            });

            if (typeof head._callback === 'function') {
                head._callback();
            }
        }
    }

    return {
        init:head.init
    }

});