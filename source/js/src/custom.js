/* 控制台输出 */
if(window.console) {
	var cons = console; 
	if(cons) { 
		cons.group("O(∩_∩)O哈喽！");
		cons.info("这位看代码的童鞋，不如留下你的友链来一起玩耍吧！"); 
		cons.info("如果有发现什么bug，还请帮忙留言提醒，或者到我的GitHub项目里提交issue哦~ %c(https://github.com/lewky/lewky.github.io)","color:#a517ef;font-weight:bold;");
		cons.log("%cYulin Lewis's Blog", "background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:5em;");
		cons.groupEnd();
	} 
}

/* 返回随机颜色 */
function randomColor() {
	return "rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")";
}

/* 鼠标点击文字特效 */
var a_idx = 0;
var a = new Array("富强", "民主", "文明", "和谐", "自由", "平等", "公正" ,"法治", "爱国", "敬业", "诚信", "友善",
			"老哥稳", "带我飞", "厉害了word哥", "扎心了老铁", "蓝瘦香菇", "还有这种操作?", "就是有这种操作",
			"皮皮虾我们走", "笑到猪叫", "石乐志", "不存在的", "黑车!", "我要下车!", "他还只是个孩子", "请不要放过他",
			"惊不惊喜?", "意不意外?", "我有一个大胆的想法", "你的良心不会痛吗", "你心里就没点b数吗", "没有,我很膨胀",
			"秀", "天秀", "陈独秀", "蒂花之秀", "造化钟神秀", "我去买几个橘子", "你就站在此地", "不要走动",
			"我可能读了假书", "贫穷限制了我的想象力", "打call", "当然是选择原谅她啊", "你有freestyle吗",
			"北大还行撒贝宁", "不知妻美刘强东", "悔创阿里杰克马", "一无所有王健林", "普通家庭马化腾",
			"别点了", "求求你别点了", "你还点", "你再点!", "有本事继续点!", "你厉害", "我投翔",
			"w(·Д·)w", "(#`O′)", "（/TДT)/", "┭┮﹏┭┮", "_(:3」∠)_");
jQuery(document).ready(function($) {
    $("body").click(function(e) {
        var $i = $("<span/>").text(a[a_idx]);
        a_idx = (a_idx + 1) % a.length;
        var x = e.pageX,
        y = e.pageY;
        $i.css({
            "z-index": 9999,
            "top": y - 20,
            "left": x,
            "position": "absolute",
            "font-weight": "bold",
            "color": randomColor(),
			"-webkit-user-select": "none",
			"-moz-user-select": "none",
			"-ms-user-select": "none",
			"user-select": "none"
        });
        $("body").append($i);
        $i.animate({
            "top": y - 180,
            "opacity": 0
        },
        1500,
        function() {
            $i.remove();
        });
    });
});

/* 点击头像更换b站挂件 */
var a_click = 1;
var avatar_plug = 0;
jQuery(document).ready(function($) {
	/* 点击频率，点击几次就换挂件 */
	var frequency = 3;
	/* 头像挂件数量 */
	var plug_count = 44;
	$(".site-author-image-bilibili").click(function(e) {
		if (a_click % frequency === 0) {
			avatar_plug ++;
			$(".site-avatar-plug-bilibili").attr("src","/images/avatar-plug/bilibili_" + avatar_plug + ".png");
		}		
		if (avatar_plug === plug_count) {
			avatar_plug = 0;
		}
		$(".site-author-image-bilibili").attr("alt","再点击" + (frequency - a_click % frequency) + "次头像试试看~~");
		a_click ++;
	});
});

/* 轮播背景图片 */
$(function () {
	$.backstretch([
		  "/images/background/saber1.jpg",
		  "/images/background/saber2.jpg",
		  "/images/background/wlop.jpg"
	], { duration: 60000, fade: 1500 });
});

/* 拉姆蕾姆回到顶部或底部按钮 */
$(function() {
	$("#lamu img").eq(0).click(function() {
		$("body").animate({scrollTop:$(document).height()},800);
		return false;
	});
	$("#leimu img").eq(0).click(function() {
		$("body").animate({scrollTop:0},800);
		return false;
	});
});

/* 创建复制按钮 */
function createCopyBtns() {
    var $codeArea = $("figure table");
    //查看页面是否具有代码区域，没有代码块则不创建 复制按钮
    if ($codeArea.length > 0) {
        //复制成功后将要干的事情
        function changeToSuccess(item) {
             $imgOK = $("#copyBtn").find("#imgSuccess");
                if ($imgOK.css("display") == "none") {
                    $imgOK.css({
                        opacity: 0,
                        display: "block"
                    });
                    $imgOK.animate({
                        opacity: 1
                    }, 1000);
                    setTimeout(function() {
                        $imgOK.animate({
                            opacity: 0
                        }, 2000);
                    }, 2000);
                    setTimeout(function() {
                        $imgOK.css("display", "none");
                    }, 4000);
                };
        };
        //创建 全局复制按钮，仅有一组。包含：复制按钮，复制成功响应按钮
        //值得注意的是：1.按钮默认隐藏，2.位置使用绝对位置 position: absolute; (position: fixed 也可以，需要修改代码)
        $(".post-body").before('<div id="copyBtn" style="opacity: 0;position: absolute;top: 0;display: none;line-height: 1; font-size:1.5em"><span id="imgCopy" ><i class="fa fa-paste fa-fw"></i></span><span id="imgSuccess" style="display: none;color: #6fb76f;"><i class="fa fa-check-circle fa-fw" aria-hidden="true"></i></span>');
		//创建 复制 插件，绑定事件到 指定元素，支持JQuery
        var clipboard = new Clipboard('#copyBtn', {
            target: function() {
                //返回需要复制的元素内容
                return document.querySelector("[copyFlag]");
            },
            isSupported: function() {
                //支持复制内容
                return document.querySelector("[copyFlag]");
            }
        });
        //复制成功事件绑定
        clipboard.on('success',
            function(e) {
                //清除内容被选择状态
                e.clearSelection();
                changeToSuccess(e);
            });
        //复制失败绑定事件
        clipboard.on('error',
            function(e) {
                console.error('Action:', e.action);
                console.error('Trigger:', e.trigger);
            });
        //鼠标 在复制按钮上滑动和离开后渐变显示/隐藏效果
        $("#copyBtn").hover(
            function() {
                $(this).stop();
                $(this).css("opacity", 1);
            },
            function() {
                $(this).animate({
                    opacity: 0
                }, 2000);
            }
        );
    }
}
//感应鼠标是否在代码区
$("figure").hover(
    function() {
        //-------鼠标活动在代码块内
        //移除之前含有复制标志代码块的 copyFlag
        $("[copyFlag]").removeAttr("copyFlag");
        //在新的（当前鼠标所在代码区）代码块插入标志：copyFlag
        $(this).find(".code").attr("copyFlag", 1);
		$currentFigure = $(this);
        //获取复制按钮
        $copyBtn = $("#copyBtn");
        if ($copyBtn.lenght != 0) {
            //获取到按钮的前提下进行一下操作
            //停止按钮动画效果
            //设置为 显示状态
            //修改 复制按钮 位置到 当前代码块开始部位
            //设置代码块 左侧位置
            $copyBtn.stop();
            $copyBtn.css("opacity", 1);
            $copyBtn.css("display", "block");
			$figureTop = $currentFigure.offset().top;
			$figureLeft = $currentFigure.offset().left;
			$figureHeight = $currentFigure.outerHeight(true);
			$btnWidth = $copyBtn.width();
			$3btnHeight = $copyBtn.outerHeight(true) * 3;
            $copyBtn.css("left", $figureLeft - $btnWidth - 3);
			$copyBtn.css("top", Math.max($figureTop, Math.min($figureTop + $figureHeight - $3btnHeight, $(window).scrollTop())) + 6);
			$(window).scroll(function(){
				$copyBtn.css("top", Math.max($figureTop, Math.min($figureTop + $figureHeight - $3btnHeight, $(window).scrollTop())) + 6);
			}); 
        }
    },
    function() {
        //鼠标离开代码块，2秒后复制按钮消失
        $("#copyBtn").animate({
            opacity: 0
        }, 2000);
    }
);
//页面载入完成后，创建复制按钮
$(document).ready(function() {
  createCopyBtns();
});

/* 离开当前页面时修改网页标题，回到当前页面时恢复原来标题 */
window.onload = function() {
  var OriginTitile = document.title;
  var titleTime;
  document.addEventListener('visibilitychange', function() {
    if(document.hidden) {
      $('[rel="icon"]').attr('href', "/failure.ico");
      $('[rel="shortcut icon"]').attr('href', "/failure.ico");
      document.title = '喔唷，崩溃啦！';
      clearTimeout(titleTime);
    } else {
      $('[rel="icon"]').attr('href', "/favicon-32x32.ico");
      $('[rel="shortcut icon"]').attr('href', "/favicon-32x32.ico");
      document.title = '咦，页面又好了！';
      titleTime = setTimeout(function() {
        document.title = OriginTitile;
      }, 2000);
	}
  });
}