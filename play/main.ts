import { createApp } from 'vue';
import App from './app.vue';
import routes from './route';
// import custom from 'custom-plus';
// import '@custom/theme';
const app = createApp(App);
app.use(routes);
// app.use(custom);
app.mount('#app');
