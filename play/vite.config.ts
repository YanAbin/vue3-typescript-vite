import { defineConfig } from 'vite'
import vue from "@vitejs/plugin-vue"
import DefineOptions from 'unplugin-vue-define-options/vite'
import eslintPlugin from 'vite-plugin-eslint'
import viteStylelint from 'vite-plugin-stylelint'

export default defineConfig({
    plugins: [
        vue(), 
        DefineOptions(),
        eslintPlugin(),
        viteStylelint()
    ],
    base: '/',
    resolve: {
        extensions: ['.js', '.ts', '.vue', '.json', '.scss'],
        alias: {

        }
    }
})
