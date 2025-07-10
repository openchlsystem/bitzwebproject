import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import ServicesView from '../views/ServicesView.vue';
import ProjectsView from '../views/ProjectsView.vue';
import ContactView from '../views/ContactView.vue';

const routes = [
  { path: '/', name: 'Home', component: HomeView },
  { path: '/services', name: 'Services', component: ServicesView },
  { path: '/projects', name: 'Projects', component: ProjectsView },
  { path: '/contact', name: 'Contact', component: ContactView },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router; 