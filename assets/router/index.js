import Vue from 'vue';
import VueRouter from 'vue-router';
import Main from '../pages/Main/Index.vue';
import Second from '../pages/Second/Index.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        component: Main
    },
    {
      path: '/second',
      component: Second
  },
];

const router = new VueRouter({
    routes,
});

export default router;