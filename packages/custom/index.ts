export * from '../components/index';
import * as components from '../components/index';
import { App } from 'vue';

export default {
  install: (app: App) => {
    type key = keyof typeof components;
    for (const c in components) {
      app.use(components[c as key]);
    }
  },
};
