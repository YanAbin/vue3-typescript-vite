import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/upload',
    component: () => import('./src/upload.vue')
  },
  {
    path: '/form',
    component: () => import('./src/form.vue')
  }
];

export default createRouter({
  history: createWebHashHistory(),
  routes
});