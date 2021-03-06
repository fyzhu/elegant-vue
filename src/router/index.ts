import {createRouter, createWebHashHistory} from 'vue-router';
import Home from '../views/Home.vue';
import Doc from '../views/Doc.vue';
import NoMatch from '../components/NoMatch.vue';
import ButtonDoc from '../components/DocUi/ButtonDoc.vue';
import IconDoc from '../components/DocUi/IconDoc.vue';
import SwitchDoc from '../components/DocUi/SwitchDoc.vue';
import DialogDoc from '../components/DocUi/DialogDoc.vue';
import TabsDoc from '../components/DocUi/TabsDoc.vue';
import InputDoc from '../components/DocUi/InputDoc.vue';
import RadioDoc from '../components/DocUi/RadioDoc.vue';

import Markdown from '../components/Markdown.vue';
import intro from '../markdown/intro.md'
import install from '../markdown/install.md'
import get_started from '../markdown/get-started.md'
import bookkeeping_react from '../markdown/bookkeeping-react.md'
import bookkeeping_vue from '../markdown/bookkeeping-vue.md'
import naruto from '../markdown/naruto.md'
import blog from '../markdown/blog.md'
import more_project from '../markdown/more-project.md'
import unfinished from '../markdown/unfinished.md'
import virus_map from '../markdown/virusmap.md'


import {h} from 'vue';

const md = string => {
  return h(Markdown, {content:string, key: string});
};
const history = createWebHashHistory();
const router = createRouter({
  history,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '/doc',
      component: Doc,
      children: [
        {path: '', redirect: '/doc/intro'},
        {path: 'intro', component: md(intro)},
        {path: 'install', component: md(install)},
        {path: 'get-started', component: md(get_started)},
        {path: 'blog', component: md(blog)},
        {path: 'bookkeeping-vue', component: md(bookkeeping_vue)},
        {path: 'bookkeeping-react', component: md(bookkeeping_react)},
        {path: 'naruto', component: md(naruto)},
        {path: 'virus-map', component: md(virus_map)},
        {path: 'more-project', component: md(more_project)},
        {path: 'unfinished', component: md(unfinished)},
        {path: 'button', component: ButtonDoc},
        {path: 'icon', component: IconDoc},
        {path: 'switch', component: SwitchDoc},
        {path: 'dialog', component: DialogDoc},
        {path: 'tabs', component: TabsDoc},
        {path: 'input', component: InputDoc},
        {path: 'radio', component: RadioDoc},

      ]
    },
    {
      path: '/:w+',
      component: NoMatch
    }
  ]
});


export {router};
