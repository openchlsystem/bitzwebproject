import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import OurVision from '@/pages/OurVision.vue'
import Team from '@/pages/Team.vue'
import Projects from '@/pages/Projects.vue'
import Contact from '@/pages/Contact.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    meta: {
      title: 'BITZ - Transforming Businesses Through Technology',
      description: 'Leading technology partner providing innovative solutions for digital transformation across East Africa.'
    }
  },
  {
    path: '/about',
    name: 'About',
    component: About,
    meta: {
      title: 'About Us - BITZ',
      description: 'Learn about BITZ IT Consulting, our mission, values, and commitment to delivering innovative technology solutions.'
    }
  },
  {
    path: '/our-vision',
    name: 'OurVision',
    component: OurVision,
    meta: {
      title: 'Our Vision - BITZ',
      description: 'Discover our vision for empowering businesses through innovative technology solutions and digital transformation.'
    }
  },
  {
    path: '/our-team',
    name: 'Team',
    component: Team,
    meta: {
      title: 'Our Team - BITZ',
      description: 'Meet the experts behind our innovative technology solutions and learn about our leadership team.'
    }
  },
  {
    path: '/projects',
    name: 'Projects',
    component: Projects,
    meta: {
      title: 'Projects - BITZ',
      description: 'Explore our portfolio of successful projects and discover the impact of our work across various industries.'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
    meta: {
      title: 'Contact Us - BITZ',
      description: 'Get in touch with BITZ IT Consulting. Let\'s discuss how we can help transform your business.'
    }
  },
  // Services redirect to home for now
  {
    path: '/products',
    redirect: '/#products'
  },
  // 404 page
  {
    path: '/:pathMatch(.*)*',
    name: 'NotFound',
    component: () => import('@/pages/NotFound.vue'),
    meta: {
      title: 'Page Not Found - BITZ',
      description: 'The page you are looking for could not be found.'
    }
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to top when navigating to a new route
    if (savedPosition) {
      return savedPosition
    } else {
      return { top: 0, behavior: 'smooth' }
    }
  }
})

// Global navigation guards
router.beforeEach((to, from, next) => {
  // Update document title
  if (to.meta.title) {
    document.title = to.meta.title
  }
  
  // Update meta description
  if (to.meta.description) {
    const metaDescription = document.querySelector('meta[name="description"]')
    if (metaDescription) {
      metaDescription.setAttribute('content', to.meta.description)
    }
  }
  
  next()
})

export default router