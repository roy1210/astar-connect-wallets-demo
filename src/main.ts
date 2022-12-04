import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import uilib from '@astar-network/astar-ui';
import { createPinia } from 'pinia';

const pinia = createPinia();
const app = createApp(App);
app.use(pinia);
app.use(uilib);
app.mount('#app');
