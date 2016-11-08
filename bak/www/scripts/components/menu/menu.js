/**
 * Created by zhangzongshan on 16/11/6.
 */
'use strict';
define(function (require, exports, module) {
    var dataload = require('../{dataload}');
    dataload.Debug(true);
    
    var menu = {
        _callback: null,
        init: function (container,callback) {
            menu._callback = callback;
            dataload.GetFile(null, 'scripts/components/menu/menu.html', function (html) {
                if (html !== "") {
                    container.html(html);
                    container.find(".menu_item").css({
                        "width": _width/3 + "px"
                        , "height": countScreen(100, 'h') + "px"
                    });
                    container.find(".menu_icon").css({
                        "width": "100%"
                        , "height": countScreen(60, 'h') + "px"
                        , "line-height": countScreen(60, 'h') + "px"
                    });
                    container.find(".menu_text").css({
                        "width": "100%"
                        , "height": countScreen(40, 'h') + "px"
                        , "line-height": countScreen(40, 'h') + "px"
                    });

                    menu.action(container);

                    if (typeof menu._callback === 'function') {
                        menu._callback();
                    }
                }
            });
        },
        action: function (container) {
            container.find('.menu_item').hammer().off('tap');
            container.find('.menu_item').hammer().on('tap', function () {
                var this_obj = $(this);
                menu.remove_action(container, function () {
                    menu.click_fun(this_obj);
                });
            });
        },
        click_fun: function (container) {
            container.find('.menu_text').addClass('active');
            var menu_icon = container.find('.iconfont');
            if (menu_icon.is('.action_index')) {
                menu_icon.addClass('active');

                //
            }
            if (menu_icon.is('.action_order')) {
                menu_icon.addClass('active');

            }
            if (menu_icon.is('.action_friends')) {
                menu_icon.addClass('active');

            }
        },
        remove_action: function (container,callback) {
            var menu_obj = container.find(".menu_item");
            $.each(menu_obj, function (index,item) {
                var this_obj = $(item);
                this_obj.find('.menu_text').removeClass('active');
                this_obj.find('.iconfont').removeClass('active');
            });
            if (typeof callback === 'function') {
                callback();
            }
        }
    }

    return {
        init:menu.init
    }
});