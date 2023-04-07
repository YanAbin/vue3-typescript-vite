export * from './src/index';
import * as components from './src/index';
import { App } from 'vue';
console.log(components);
export default {
  install: (app: App) => {
    type key = keyof typeof components;
    for (const c in components) {
      app.use(components[c as key]);
    }
  },
};
