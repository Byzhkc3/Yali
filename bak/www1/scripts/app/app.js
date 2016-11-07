/**
 * Created by zhangzongshan on 16/11/2.
 */
'use strict';
define(function (require, exports, module) {
    var common = require('common');
    var index = {
        init: function () {
            var aaa = common.string.subString("数据测试一下", 4, "...");
            $("#app").html(aaa);
        }
    }
    return {
        init: index.init
    }
});