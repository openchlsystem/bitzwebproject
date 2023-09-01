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
>>>>>>> 68803e3eb99f66e7cbd0c5da22aabfe03f4fe361

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
>>>>>>> 68803e3eb99f66e7cbd0c5da22aabfe03f4fe361
  {
    path: "/about",
    name: "about",
    component: About,
    meta: {
      title: "About",
    },
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
   
  }
<<<<<<< HEAD

=======
>>>>>>> 68803e3eb99f66e7cbd0c5da22aabfe03f4fe361
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
