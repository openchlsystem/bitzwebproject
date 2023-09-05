import { createRouter, createWebHistory } from "vue-router"


const routes = [
  {
    path: "/",
    name: "Home",
    component: () => import("../views/HomeView.vue"),
  },
{
  path:'/about',
  name: 'About',
  component: ()=> import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
  meta:{
    hideFooter: false,
  }

},
{
  path:'/contact',
  name: 'Contact',
  component: ()=> import(/* webpackChunkName: "contact" */ '../views/ContactView.vue'),
  meta:{
    hideFooter: false,
  }
},
{
  path:'/careers',
  name: 'Careers',
  component: ()=> import(/* webpackChunkName: "careers" */ '../views/CareersView.vue'),
  meta:{
    hideFooter: false,
  }
},
{
  path:'/solutions',
  name: 'Solutions',
  component: ()=> import(/* webpackChunkName: "solutions" */ '../views/SolutionsPage.vue'),
  meta:{
    hideFooter: false,
  }

},
{
  path:'/products',
  name: 'Products',
  component: ()=> import(/* webpackChunkName: "products" */ '../views/ProductPage.vue'),
  meta:{
    hideFooter: false,
  }

},
{
  path:'/developers',
  name: 'Developers',
  component: ()=> import(/* webpackChunkName: "developers" */ '../views/DevelopersPage.vue'),
  meta:{
    hideFooter: false,
  }
},
{
  path:'/pricing',
  name: 'Pricing',
  component: ()=> import(/* webpackChunkName: "pricing" */ '../views/PricingPage.vue'),
  meta:{
    hideFooter: false,
  }
} ,
{
  path:'/:catchAll(.*)',
  component: ()=> import(/* webpackChunkName: "catchAll" */ '../views/NotFound.vue')
}

    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
