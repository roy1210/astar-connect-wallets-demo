import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import uilib from '@astar-network/astar-ui';
import { createPinia } from 'pinia';

const app = createApp(App);
app.mount('#app');
app.use(uilib);
app.use(createPinia());
