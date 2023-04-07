import { defineConfig } from 'vite'
import vue from "@vitejs/plugin-vue"
const path = require('path');
function resolve(dir: string) {
    return path.join(__dirname, './' + dir);
}

export default defineConfig({
    plugins: [vue()]
})
