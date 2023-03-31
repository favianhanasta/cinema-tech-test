import { createApp } from 'vue'
import router from './router'
import './CSS/index.css'
import App from '../src/App.vue'
import { createPinia } from 'pinia';

const app = createApp(App);

app.use(createPinia()).use(router).mount('#home');
