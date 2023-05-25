import DefaultTheme from 'vitepress/theme';
import custom from 'custom-plus';
import '@custom/theme';
import './style/index.css';

export default {
  ...DefaultTheme,
  enhanceApp: async ({ app }) => {
    // app is the Vue 3 app instance from `createApp()`. router is VitePress'
    // custom router. `siteData`` is a `ref`` of current site-level metadata.
    app.use(custom);
  }
};
