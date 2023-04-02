import { createApp } from 'vue';
import App from './app.vue';
import custom from '@custom/components';
const app = createApp(App);
app.use(custom);
app.mount('#app');
