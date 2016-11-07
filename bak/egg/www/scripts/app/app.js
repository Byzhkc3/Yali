/**
 * Created by zhangzongshan on 16/11/2.
 */
'use strict';
define(function(require, exports, module) {
    var common = require('common');
    var dataload = require('dataload');
    var head = require('components/head/head');
    var menu = require('components/menu/menu');
    var content = require('components/index/index');
    var login = require('components/login/login');

    var index = {
        init: function() {
            dataload.GetFile(null, 'html/app/index.html', function(appHtml) {
                if (appHtml !== "") {
                    index.loginLayout(appHtml);
                    // index.setLayout(appHtml);
                }
            }, null);
        },
        //设置布局
        setLayout: function(htmlContent) {
            var head_height = countScreen(90, 'h');
            var menu_height = countScreen(100, 'h');
            var content_height = _height - head_height - menu_height;

            $("#app").html(htmlContent);

            var head_obj = $("#head");
            head_obj.css({
                "height": head_height + "px"
            });

            var content_obj = $("#content");
            content_obj.css({
                "height": content_height + "px",
                "width": _width + "px"
            });

            $('#menu').css({
                'top': (_height - menu_height) + 'px',
                'height': menu_height + 'px'
            });

            head.init($('#head'), function () {
                menu.init($('#menu'), function () {
                    content.init($('#content'), null); 
                });
            });

        },
        // 登陆布局
        loginLayout:function(htmlContent){
            var login_obj = $('.login_container');
            login_obj.css({
                "height": _height + "px",
                "width": _width + "px"
            });
            login.init($('#app'), null);
        }

    }
    return {
        init: index.init
    }
});
