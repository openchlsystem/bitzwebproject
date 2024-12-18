import {createRouter, createWebHistory} from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import (/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  },
  {
    path: '/contactus',
    name: 'contactus;',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import (/* webpackChunkName: "about" */ '../views/ContactUs.vue'),
  },
  {
  path: '/resources',
    name: 'resources',
      component: () =>
        import (/* webpackChunkName: "about" */ '../views/ResourcesPage.vue'),
}
];


const router = createRouter ({
  history: createWebHistory (process.env.BASE_URL),
  routes,
});

export default router;
