import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export const routes = [
  {
    path: '/demo01',
    name: 'demo01',
    component: () => import('@/views/Demo01.vue'),
  },
  {
    path: '/demo02',
    name: 'demo02',
    component: () => import('@/views/Demo02.vue'),
  },
  {
    path: '/demo03',
    name: 'demo03',
    component: () => import('@/views/Demo03.vue'),
  },
  {
    path: '/demo04',
    name: 'demo04',
    component: () => import('@/views/Demo04.vue'),
  },
];

export default new Router({
  routes: [...routes],
});
