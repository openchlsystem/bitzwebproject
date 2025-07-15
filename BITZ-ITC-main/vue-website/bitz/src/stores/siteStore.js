import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useSiteStore = defineStore('site', () => {
  const siteConfig = ref({
    name: 'BITZ',
    tagline: 'Transforming businesses through innovative technology solutions',
    description: 'Founded in 2007 in Nairobi, BITZ IT Consulting has grown into a leading technology partner across East Africa.',
    contact: {
      phone: '0110552788',
      email: 'info@bitz-itc.com',
      address: 'Prime Cartons, Dongkung building next to Nice&Lovely along Mombasa Road',
      businessHours: {
        weekdays: '9:00 AM - 6:00 PM',
        saturday: '10:00 AM - 4:00 PM',
        sunday: 'Closed'
      }
    }
  })

  const navigationItems = ref([
    { name: 'Home', path: '/', active: true },
    { name: 'Our Vision', path: '/our-vision', active: false },
    { name: 'Services', path: '/services', active: false },
    { name: 'Projects', path: '/projects', active: false },
    { name: 'Our Team', path: '/our-team', active: false },
    { name: 'Contact', path: '/contact', active: false }
  ])

  return {
    siteConfig,
    navigationItems
  }
})