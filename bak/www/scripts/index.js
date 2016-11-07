// 有关“空白”模板的简介，请参阅以下文档:
// http://go.microsoft.com/fwlink/?LinkID=397704
// 若要在 Ripple 或 Android 设备/仿真程序中调试代码: 启用你的应用程序，设置断点，
// 然后在 JavaScript 控制台中运行 "window.location.reload()"。
"use strict";
//定义屏幕尺寸全局参数
var _width, _height, _scaleW, _scaleH = 0;
var sysSpinkit = null;
function countScreen(s, type) {
    s = typeof s === 'number' ? s : 0;
    type = type === 'w' ? "width" : "height";
    if (type === 'width') {
        return parseInt(s * _scaleW);
    } else {
        return parseInt(s * _scaleH);
    }
}
(function () {
    var jsRoot = 'assets/js/';
    Modernizr.load([{
        load: {
            'flexible': jsRoot + 'public/flexible/flexible.js'//加载动画
            , 'jquery': jsRoot + 'public/jquery/jquery-3.1.1.min.js'//加载动画
            , 'jquery-form': jsRoot + 'public/jquery/jquery.form.js'//加载动画
            , 'hammer': jsRoot + 'public/hammer/hammer.min.js'//加载动画
            , 'jquery-hammer': jsRoot + 'public/jquery/jquery.hammer.js'//加载动画
            , 'spink': jsRoot + 'module/spinkit/spinkit.js'//加载动画
        },
        callback: function (url, result, key) {
            //alert(url);
        },
        complete: function () {
            screenSize();
            sysSpinkit = SpinKit.Create({
                color: '#0483c1'
                , size: countScreen(40, "w")
            });
        }
    }, {
        load: {
            'sea': jsRoot + 'frame/seajs/sea.js'
            , 'seajs-css': jsRoot + 'frame/seajs/seajs-css.js'
            , "seajs-preload": jsRoot + 'frame/seajs/seajs-preload.js'
            , "vue": jsRoot + 'frame/vue/vue.js'
            , 'underscore': jsRoot + 'public/underscore/underscore.js'
            , "html5media": jsRoot + 'public/html5media/html5media-1.1.8.min.js'
            , "moment": jsRoot + 'public/moment/moment-local-2.1.3.min.js'
            , "icheck": jsRoot + 'public/icheck/icheck.min.js'
            , "swiper": jsRoot + 'public/swiper/swiper-3.4.0.jquery.min.js'
            , "validator": jsRoot + 'public/validator/validator-5.2.0.min.js'
            , "basil": jsRoot + 'public/basil/basil.js'
            , "select": jsRoot + 'public/select/js/select2.full.min.js'
        },
        callback: function (url, result, key) {

        },
        complete: function () {
            seajs.config({
                base: "./",
                vars:{
                    "common": "../../assets/js/module/common/common"
                    , "dataload": "../../assets/js/module/dataload/dataload"
                    , "notykit": "../../assets/js/module/notykit/notykit"
                    , "scrollcontrol": "../../assets/js/module/scrollcontrol/scrollcontrol"
                    , "tabskit": "../../assets/js/module/tabskit/tabskit"
                },
                paths: {
                    "module": "../../assets/js/module/"
                    , "public": "../../assets/js/module/"
                    , "frame": "../../assets/js/frame/"
                    , "components": "../../scripts/components/"
                },
                alias: {
                    "common": "module/common/common"
                    , "dataload": "module/dataload/dataload"
                    , "notykit": "module/notykit/notykit"
                    , "scrollcontrol": "module/scrollcontrol/scrollcontrol"
                    , "tabskit": "module/tabskit/tabskit"
                },
                debug: false
            });
            document.addEventListener('deviceready', onDeviceReady.bind(this), false);
        }
    }]);

    function onDeviceReady() {
        // 处理 Cordova 暂停并恢复事件
        document.addEventListener( 'pause', onPause.bind( this ), false );
        document.addEventListener( 'resume', onResume.bind( this ), false );
        navigator.splashscreen.hide();
        seajs.use(['scripts/app/app'], function (index) {
            $("html,body").css({
                'font-size': '100px'
            });
            sysSpinkit.remove();
            sysSpinkit = null;
            index.init();
        });
        // TODO: Cordova 已加载。在此处执行任何需要 Cordova 的初始化。
    };

    function onPause() {
        // TODO: 此应用程序已挂起。在此处保存应用程序状态。
    };

    function onResume() {
        // TODO: 此应用程序已重新激活。在此处还原应用程序状态。
    };

    function screenSize() {
        _width = $(window).width();
        _height = $(window).height();
        _scaleW = parseFloat($(window).width() / 750).toFixed(2);
        _scaleH = parseFloat($(window).height() / 1334).toFixed(2);
    }
})();