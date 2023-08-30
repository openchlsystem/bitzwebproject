import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue';
import About from '@/views/AboutView.vue';
import Contact from '@/views/ContactView.vue';
import Careers from '@/views/CareersView.vue';
import Product from '@/views/ProductPage.vue';
import Pricing from '@/views/PricingView';


const routes = [
 {
  path: '/',
  name: 'Home',
  component: Home,
  meta: {
    title: 'Home'
  }
},
{
  path: '/about',
  name: 'About',
  component: About,
  meta: {
    title: 'About'

}
},
{
  path: '/contact',
  name: 'Contact',
  component: Contact,
  meta: {
    title: 'Contact'
}
},
{

  path: '/careers',
  name: 'Careers',
  component: Careers,
  meta: {
    title: 'Careers'
  }
},
{
  path: '/product',
  name: 'Product',
  component: Product,
  meta: {
    title: 'Products'
}
},
{
  path: '/pricing',
  name: 'Pricing',
  component: Pricing,
  meta: {
    title: 'Pricing'
}
}
 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
