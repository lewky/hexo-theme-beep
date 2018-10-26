{#
Custom foot in body, Can add script here.
#}
<!-- 图片轮播js文件cdn -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/jquery-backstretch/2.0.4/jquery.backstretch.min.js"></script>

<!-- 剪贴板js文件 -->
<script type="text/javascript" src="/lib/zclip/clipboard.min.js"></script>

<script>

<!-- 头像挂件及自动刷新 -->
{% if theme.avatar_plug.theme and theme.avatar_plug.flush %}
    $(function () {
        $(".site-avatar-plug-bilibili").attr("src", "/images/avatar-plug/bilibili_" + (~~(44*Math.random())+1) + ".png");
    });
{% elseif theme.avatar_plug.theme %}
    $(function () {
        $(".site-avatar-plug-bilibili").attr("src", theme.avatar_plug.image );
    });
{% endif %}

</script>

<!-- 自定义的js文件 -->
<script type="text/javascript" src="/js/src/custom.js"></script>