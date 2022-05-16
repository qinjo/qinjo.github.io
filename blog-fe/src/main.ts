import './theme';
import { createApp } from 'vue';
import App from './App.vue';
import router from './router';

const app = createApp(App);
app.use(router);

app.config.globalProperties.$t = (t: string) => t;
app.mount('#app');
