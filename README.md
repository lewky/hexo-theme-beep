# hexo-theme-beep
A simple theme based on NexT-Gemini for hexo. 一款基于NexT-Gemini主题设计的hexo主题。

[README](https://github.com/lewky/lewky.github.io/blob/dev/README.md) | [中文文档](https://github.com/lewky/hexo-theme-beep/blob/master/README_zh.md)

It's a repository for my hexo theme and you can access my theme by :zap: https://lewky.github.io/

![blog_display](https://raw.githubusercontent.com/lewky/markdownImages/master/resource/blog/blog_display.jpg)

* You can clone master branch to get beep theme blog without posts except hello-world.md. Please see <a href="#Clone the whole blog repository with beep theme">#Clone the whole blog repository with beep theme</a>
~~* You also can only clone `themes/beep` to get beep theme into your local blog repository. Please see <a href="#Clone beep theme into blog repository">#Clone beep theme into blog repository</a>~~

## How to play

### Clone the whole blog repository with beep theme

1. create a folder for your blog site and open `git bash` in this folder path, then clone dev branch:
```bash
git clone -b master https://github.com/lewky/hexo-theme-beep ./
```

2. install dependencies(please confirm you have installed Node.js, Git & Hexo in your computer, and it will spend much time on this step, please wait a minute):
```bash
npm install
```

3. deploy your blog in local:
```bash
hexo clean
hexo g
hexo s
```

4. deploy your blog in Github Pages after configuring your personal configuration:
```bash
hexo clean
hexo g -d
```

You can refer to [README.md](https://github.com/lewky/hexo-blog-demo) in my another repository to complete your hexo blog.

## Custom NexT theme

This theme is based on `NexT-Gemini` theme, most of css/js code with comments is in: 

1. `themes/next/source/css/_custom/custom.styl`
2. `themes/next/source/js/src/custom.js`
3. `themes/next/layout/_partials/head/custom-head.swig`
4. `themes/next/layout/_custom/custom-foot.swig`

## Features

### 头像相关

* 圆形头像
* 头像旋转
* 添加b站同款头像挂件(可关闭)
* 头像挂件自动刷新功能(可关闭)
* 头像挂件彩蛋(你猜)

### 图片相关

* 去掉(难看的)图片边框

### 字体相关

* 使用`Font Awesome 5`
* 修改字体大小

### 页面头部相关

* 页面添加顶部加载条
* 页面右上角添加头部彩带(`Fork me on GitHub`)

### 页面底部相关

* 修改回到顶部按钮样式
* 启用回到顶部按钮显示百分比
* 添加底部 `Hosted by`（如果需要使用自定义域名解析到Coding.net，不建议去掉该项）
* 消除 `Hosted by` 的超链底部线条
* 添加全站字数统计（会延长 `hexo g` 的时间）
* 修改页脚样式
* 添加拉姆蕾姆回到底部/顶部样式

### 页面相关

* 添加鼠标点击文字特效
* 修改鼠标指针
* 添加站点背景图片轮播
* 添加关于页面
* 使用 `hexo-neat` 压缩博文插件，优化博客静态资源
* 添加页面标题监听事件
* 添加404页面
* 修改分类页面样式

### 站点标题

* 修改样式，使用字体阴影

### 菜单栏相关

* 一行显示两列菜单以节省空间
* 点击菜单在右侧显示图标(NexT主题使用的都是FontAwesome的图标)
* 启用标签、分类和搜索功能

### 侧边栏相关

* 添加 `by-nc-sa` 许可协议
* 添加站点首页
* 添加建站日志(`siting_log.md`)
* 修改友链样式

### 文章相关

* 添加文章显示预览、加密、置顶、字数统计、阅读时长
* 启用语法高亮黑色主题
* 指定 `Markdown` 的解析器，避免部署到 `GitHub`的站点无法正常显示语法高亮黑色主题
* 修改永久链接格式，利于SEO
* 修改 `scaffolds` 目录下的 `post/draft.md` 模板
* 修改行内代码块、超链样式
* 修改引用块样式
* 修改文章标签样式，并在文章摘要添加标签
* 修改阅读全文按钮样式
* 代码块添加复制按钮
* 修改文本标题样式
* 修改文章目录样式
* 修改文章二级、三级标题样式
* 修改段落文本样式