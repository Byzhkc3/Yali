/**
 * Created by zhangzongshan on 16/11/6.
 */
'use strict';
define(function (require, exports, module) {
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

                    swiper_bg.init({
                        container: container.find("#index_bg")
                        , images: [
                            'images/app/index/index_bg_1.jpg'
                            , 'images/app/index/index_bg_2.jpg'
                            , 'images/app/index/index_bg_3.jpg'
                        ]
                        , effects: 'fade'
                    }, function () {
                        content.set_tools_layout(container.find("#index_tools"));
                    });
                }
            });
        },
        //工具布局定位
        set_tools_layout: function (container) {
            container.css({
                'background-color': 'rgba(0,0,0,.33)'
                , 'top': -container.height() + "px"
                , 'left': '0px'
                , 'z-index': common.fn.getmaxZindex() + 10
            });
            //设定工具面板位置
            container.find('.tools_container').css({
                "width": countScreen(690, 'w') + "px"
                , "height": countScreen(617, 'h') + "px"
                , "top": (container.height() - countScreen(617, 'h')) / 2 + "px"
                , "left": (container.width() - countScreen(690, 'w')) / 2 + "px"
            });
            //设置工具容器大小
            container.find('.tools_item').css({
                "width": countScreen(140, 'w') + "px"
                , "height": countScreen(160, 'w') + "px"
            });
            //设置工具图标容器大小
            container.find('.tools_icon').css({
                "width": countScreen(140, 'w') + "px"
                , "height": countScreen(120, 'w') + "px"
                , "line-height": countScreen(120, 'w') + "px"
            });
            //设置工具名称大小
            container.find('.tools_text').css({
                "width": countScreen(140, 'w') + "px"
                , "height": countScreen(40, 'w') + "px"
                , "line-height": countScreen(40, 'w') + "px"
            });
            //每行居中时需要高度值
            var height_distance = countScreen(617 / 3 - 160, 'h') / 2;
            //每列居中时需要的宽度值
            var width_distance = countScreen(690 / 2 - 140, 'w');
            //每行的高度
            var height_li = countScreen(617 / 3, 'h');
            //每列的宽度
            var width_left = countScreen(690 / 2, 'w');
            //中间间隔距离
            var middle_distance = countScreen(14 / 2, 'w');
            //log间隔距离
            var log_distance = countScreen(190 / 2, 'w');
            //宽度间距调节
            var width_padding = countScreen(30, 'w');

            //设置团期定位
            container.find(".date_time_set").css({
                'top': height_distance + "px"
                , 'left': width_distance - width_padding + "px"
            });
            //设置行程助手定位
            container.find(".journey_assistant").css({
                'top': height_distance + "px"
                , 'left': (width_left + width_padding + middle_distance) + "px"
            });

            //设置导游借贷定位
            container.find(".credit").css({
                'top': (height_li + height_distance) + "px"
                , 'left': (width_distance - log_distance) / 2 + "px"
            });
            //设置免费短信定位
            container.find(".message_info").css({
                'top': (height_li + height_distance) + "px"
                , 'left': width_left + (width_distance + log_distance) / 2 + middle_distance + "px"
            });

            //设置导游词定位
            container.find(".guide_commentary").css({
                'top': (height_li * 2 + height_distance) + "px"
                , 'left': (width_distance - width_padding) + "px"
            });
            //设置导游学院定位
            container.find(".guide_college").css({
                'top': (height_li*2 + height_distance) + "px"
                , 'left': (width_left + width_padding + middle_distance) + "px"
            });

            //设置ICON外圆圈尺寸
            container.find(".icon_circle").css({
                "width": countScreen(110, 'w') + "px"
                , "height": countScreen(110, 'w') + "px"
                , "line-height": countScreen(110, 'w') - 2 + "px"
                , "margin": "0px " + countScreen(15, 'w') + "px"

            });
            content.action(container);
        },
        action: function (container) {
            container.find('.tools_item').hammer().off();
            container.find('.tools_item').hammer().on('tap', function () {

                //move('.square')
                //.scale(.5)
                //.set('background-color', 'rgba(255,255,255,.4)')
                //.set('border-color', 'black')
                //.duration('0.3s')
                //.then()
                //    .set('opacity', 0)
                //    .duration('0.3s')
                //    .scale(0.1)
                //    .pop()
                //.end();
                var this_obj = $(this);
                var circle_obj = this_obj.find('.icon_circle');
                circle_obj.css({
                    'background-color': 'rgba(255,255,255,.4)'
                    , 'color': '#06aafc'
                });
                circle_obj.transition({
                    opacity: 0.5
                    , scale: 1.3
                    , duration: 300
                    , easing: 'in'
                    , complete: function () {
                        circle_obj.transition({
                            opacity: 1
                            , scale: 1
                            , duration: 100
                            , easing: 'in'
                            , complete: function () {
                                circle_obj.css({
                                    'background-color': 'transparent'
                                    , 'color': '#fff'
                                });
                            }
                        });
                    }
                });
            });
        }
    }

    return {
        init:content.init
    }

});