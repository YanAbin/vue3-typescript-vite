import { createApp } from 'vue'
import App from './app.vue'
import { Button } from "@custom/components";
console.log(Button)

const app = createApp(App)
app.use(Button)
app.mount('#app')
