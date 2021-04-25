import {createApp} from 'vue'
import './_z.scss';
import './index.scss';
import 'github-markdown-css';
import App from './App.vue';
import {router} from './router';
import Markdown from './components/Markdown.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, fab)

const app = createApp(App);
app.component('Markdown', Markdown);
app.use(router);
app.mount('#app');
