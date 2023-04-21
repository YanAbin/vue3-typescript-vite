import { defineConfig } from 'vite'
import vue from "@vitejs/plugin-vue"
import DefineOptions from 'unplugin-vue-define-options/vite'
import eslintPlugin from 'vite-plugin-eslint'
import viteStylelint from 'vite-plugin-stylelint'
import Components from 'unplugin-vue-components/vite'
// import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'



export default defineConfig({
    plugins: [
        vue(), 
        DefineOptions(),
        eslintPlugin(),
        viteStylelint(),
        Components({
            dts: true,
            resolvers: [
                // example of importing Vant
                (componentName) => {
                  // where `componentName` is always CapitalCase
                  if (componentName.startsWith('Ct'))
                    return { 
                        name: componentName.slice(2), 
                        from: '@custom/components',
                        sideEffects: `@custom/components/${componentName.slice(2).toLowerCase()}/style`
                    }
                },
            ],
        })
    ],
    base: '/',
    resolve: {
        extensions: ['.js', '.ts', '.vue', '.json', '.scss'],
        alias: {

        }
    }
})
