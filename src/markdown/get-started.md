## 下载与使用
## 引入 <code>elegant-vue</code>
#### 完整引入
```
    import 'elegant-vue/dist/lib/elegant.css'
    import { createApp } from 'vue'
    import App from './App.vue'
    import { elegantUI } from 'elegant-vue'

    createApp(App)
      .use(elegantUI)
      .mount('#app')
```

以上代码便完成了 elegant-vue 的引入。需要注意的是，样式文件需要单独引入。

#### 按需引入

如果你只希望引入部分组件，比如 Button ，那么需要在 main.js 中写入以下内容：

```
    import 'elegant-vue/dist/lib/elegant.css'
    import { createApp } from 'vue'
    import { Button } from 'elegant-vue'
    import App from './App.vue'

    createApp(App).use(Button).mount('#app')
```
<blockquote>
<p>完整组件列表和引入方式</p>
</blockquote>
<pre><code>    import App from './App.vue'
    import { createApp } from 'vue'
    import {
        Button,
        Switch,
        Dialog,
        TabBox,
        Tabs,
    } from 'elegant-vue'

    createApp(App)
        .component('Button',Button)
        .component('Switch',Switch)
        .component('Dialog',Dialog)
        .component('TabBox',TabBox)
        .component('Tabs',Tabs)</code></pre>
</article>