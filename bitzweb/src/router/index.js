import { createRouter, createWebHistory } from "vue-router";
<<<<<<< HEAD
import Home from "@/views/HomeView.vue";
import Pricing from "@/views/PricingPage.vue";
import About from "@/views/AboutView.vue";
import Contact from "@/views/ContactView.vue";
import Careers from "@/views/CareersView.vue";
import Solutions from "@/views/SolutionsPage.vue";
import Developers from "@/views/DevelopersPage.vue";
=======
>>>>>>> c85ecf9f9a18085465f2ca3d32beb7f51efda327

const routes = [
  {
    path: "/",
<<<<<<< HEAD
    name: "Home",
    component: Home,
    meta: {
      title: "Home",
    },
  },
  {
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "About",
    },
  },
  {
    path: "/contact",
    name: "Contact",
    component: Contact,
    meta: {
      title: "Contact",
    },
  },
  {
    path: "/careers",
    name: "Careers",
    component: Careers,
    meta: {
      title: "Careers",
    },
  },
  {
    path: "/solutions",
    name: "Solutions",
    component: Solutions,
    meta: {
      title: "Solutions",
    },
  },
  {
    path: "/pricing",
    name: "Pricing",
    component: Pricing,
    meta: {
      title: "Pricing",
    },
  },
  {
    path: "/developers",
    name: "Developers",
    component: Developers,
    meta: {
      title: "Developers",
    },
  },
=======
    name: "home",
    component: () => import("../views/ProductPage.vue"),
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
  },
  {
    path: "/products",
    name: "products",
    component: () => import("../views/ProductPage.vue"),
  },
  {
    path: "/solutions",
    name: "solutions",
    component: () => import("../views/SolutionsPage.vue"),
  },
  {
    path: "/pricing",
    name: "pricing",
    component: () => import("../views/PricingPage.vue"),
  },
  {
    path: "/developers",
    name: "developers",
    component: () => import("../views/DevelopersPage.vue"),
  }
>>>>>>> c85ecf9f9a18085465f2ca3d32beb7f51efda327
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
