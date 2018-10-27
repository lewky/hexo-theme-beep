{#
Custom head.
#}
<!-- 文章加密 -->
<script>
    (function(){
        if('{{ page.password }}'){
            if (prompt('请输入文章密码') !== '{{ page.password }}'){
                alert('密码错误！');
		if (history.length === 1) {
		    window.opener = null;
		    window.open('', '_self');
		    window.close();
                } else {
                    history.back();
                }
            }
        }
    })();
</script>

<!-- fontawesome5 -->
<link href="/lib/font-awesome/css/fontawesome-all.min.css" rel="stylesheet" type="text/css" />