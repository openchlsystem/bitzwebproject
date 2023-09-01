import { createRouter, createWebHistory } from "vue-router";
import Home from "@/views/HomeView.vue";
import Pricing from "@/views/PricingPage.vue";
import About from "@/views/AboutView.vue";
import Contact from "@/views/ContactView.vue";
import Careers from "@/views/CareersView.vue";
import Solutions from "@/views/SolutionsPage.vue";
import Developers from "@/views/DevelopersPage.vue";

const routes = [
  {
    path: "/",
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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
