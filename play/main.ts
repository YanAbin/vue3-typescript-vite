import { createApp } from 'vue';
import App from './app.vue';
import custom from '@custom/plus';
const app = createApp(App);
app.use(custom);
app.mount('#app');
