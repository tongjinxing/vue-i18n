1、我们得先有开发环境，先有项目跑起来，我推荐如果是喜欢用 vue 的小伙伴，可以尝试 vue-cli　官方脚手架。这是我整理的一个 demo 。

2、我们需要安装 vue-i18n, 推荐 npm 包依赖：

$ npm install vue-i18n

当然你也可以这样：

<script src="https://unpkg.com/vue/dist/vue.js"></script>
<script src="https://unpkg.com/vue-i18n/dist/vue-i18n.js"></script>

3、main.js注入 vue 实例中，项目中实现调用 api 和 模板语法

这边我是顺着使用 npm 安装依赖进行。先在 main.js 中引入 vue-i18n。
公司虚机贴图不方便，就不上图了，需要的小伙伴请自行去文件中看吧。。
该项目是用的TypeScript，由于ElementUI是用js写的，所以如果小伙伴使用ts开发的话还需要配置*.d.ts配置文件（js小伙伴忽略），否则的话ts会报错，但是不妨碍编译。具体内容都在main.js里面有配置。

4、页面调用 {{$t('m.lable_name')}} 就像这样（字段自行对应上就可以了）

5、我在navbar组件设置了切换的方法，并且每次切换都存在localStorage，以便下次登录还是自己选中的语言。

