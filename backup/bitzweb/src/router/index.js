import {createRouter, createWebHistory} from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import ('../views/HomeView.vue'),
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
    path: '/products',
    name: 'products',
    component: () => import ('../views/ProductPage.vue'),
  },

  {
    path: '/products/:id',
    name: 'product',
    component: () => import ('../views/ProductPage.vue'),
    props: true,
  },
  {
    path: '/solutions',
    name: 'solutions',
    component: () => import ('../views/SolutionsPage.vue'),
  },
  {
    path: '/pricing',
    name: 'pricing',
    component: () => import ('../views/PricingPage.vue'),
  },
  {
    path: '/developers',
    name: 'developers',
    component: () => import ('../views/DevelopersPage.vue'),
  },
  {
    path: '/careers',

    component: () => import ('../views/CareersView.vue'),
  },
  {
    path: '/demo',
    component: () => import ('../views/DemoView.vue'),
  },
 
];

const router = createRouter ({
  history: createWebHistory (process.env.BASE_URL),
  routes,
});

export default router;
