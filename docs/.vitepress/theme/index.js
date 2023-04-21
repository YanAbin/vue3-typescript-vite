import DefaultTheme from 'vitepress/theme';
import custom from 'custom-plus';
import '@custom/theme';

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    console.log(custom)
    app.use(custom);
  }
};
