// 有关“空白”模板的简介，请参阅以下文档:
// http://go.microsoft.com/fwlink/?LinkID=397704
// 若要在 Ripple 或 Android 设备/仿真程序中调试代码: 启用你的应用程序，设置断点，
// 然后在 JavaScript 控制台中运行 "window.location.reload()"。
(function () {
    "use strict";

    Modernizr.load([{
        load: {
            'sea': 'assets/js/frame/seajs/sea.js'//jquery
            , 'seajs-css': 'assets/js/frame/seajs/seajs-css.js'//jquery
            , "seajs-preload": "assets/js/frame/seajs/seajs-preload.js"
            , "vue": "assets/js/frame/vue/vue.js"
            , 'underscore': 'assets/js/public/underscore/underscore.js'//加载动画
            , 'jquery': 'assets/js/public/jquery/jquery-3.1.1.min.js'//加载动画
            , 'jquery-form': 'assets/js/public/jquery/jquery.form.js'//加载动画
            , 'flexible': 'assets/js/public/flexible/flexible.js'//加载动画
            , "html5media": "assets/js/public/html5media/html5media-1.1.8.min.js"
            , "moment": "assets/public/moment/moment-local-2.1.3.min"
            , "icheck": "assets/public/icheck/icheck.min"
            , "swiper": "assets/public/swiper/swiper-3.3.1.jquery.min"
            , "validator": "assets/public/validator/validator-5.2.0.min"
            , "basil": "assets/public/basil/basil"
            , "select": "assets/public/select/js/select2.full.min"
        },
        callback: function (url, result, key) {
            
        },
        complete: function () {
            seajs.config({
                paths: {
                    "module": "./../../assets/js/module/"
                    , "public": "./../../assets/js/module/"
                },
                alias: {
                    "common": "module/common/common"
                    , "dataload": "module/dataload/dataload"
                    , "notykit": "module/notykit/notykit"
                    , "scrollcontrol": "module/scrollcontrol/scrollcontrol"
                    , "spinkit": "module/spinkit/spinkit"
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
        seajs.use(['./scripts/app/app'], function (index) {
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

    

})();