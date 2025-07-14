<template>
  <footer class="bg-navy-950 text-white">
    <div class="container-custom section-padding">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Company Info -->
        <div class="lg:col-span-1">
          <div class="flex items-center space-x-2 mb-4">
            <img src="/logo.svg" alt="BITZ" class="h-8 w-auto" />
            <span class="text-2xl font-bold">B</span>
          </div>
          <p class="text-gray-300 mb-4 leading-relaxed">
            {{ siteConfig.tagline }}
          </p>
          <div class="flex space-x-4">
            <a
              v-for="(link, platform) in siteConfig.social"
              :key="platform"
              :href="link"
              class="text-gray-400 hover:text-white transition-colors duration-300"
            >
              <component :is="getSocialIcon(platform)" :size="20" />
            </a>
          </div>
        </div>

        <!-- Services -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Services</h3>
          <ul class="space-y-2">
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">
                Infrastructure Management
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">
                Software Development
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">
                Cybersecurity
              </a>
            </li>
            <li>
              <a href="#" class="text-gray-300 hover:text-white transition-colors duration-300">
                Cloud Solutions
              </a>
            </li>
          </ul>
        </div>

        <!-- Company -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Company</h3>
          <ul class="space-y-2">
            <li>
              <router-link 
                to="/our-vision" 
                class="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Our Vision
              </router-link>
            </li>
            <li>
              <router-link 
                to="/our-team" 
                class="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Our Team
              </router-link>
            </li>
            <li>
              <router-link 
                to="/projects" 
                class="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Projects
              </router-link>
            </li>
            <li>
              <router-link 
                to="/contact" 
                class="text-gray-300 hover:text-white transition-colors duration-300"
              >
                Contact
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Connect -->
        <div>
          <h3 class="text-lg font-semibold mb-4">Connect</h3>
          <div class="space-y-3">
            <div class="flex items-center space-x-3">
              <Globe :size="16" class="text-gray-400" />
              <span class="text-gray-300 text-sm">{{ siteConfig.contact.address }}</span>
            </div>
            <div class="flex items-center space-x-3">
              <Mail :size="16" class="text-gray-400" />
              <a 
                :href="`mailto:${siteConfig.contact.email}`"
                class="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
              >
                {{ siteConfig.contact.email }}
              </a>
            </div>
            <div class="flex items-center space-x-3">
              <Phone :size="16" class="text-gray-400" />
              <a 
                :href="`tel:${siteConfig.contact.phone}`"
                class="text-gray-300 hover:text-white transition-colors duration-300 text-sm"
              >
                {{ siteConfig.contact.phone }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-800 mt-12 pt-8">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm">
            © {{ currentYear }} BITZ-itc. All rights reserved.
          </p>
          <div class="flex items-center space-x-2 mt-4 md:mt-0">
            <MessageSquare :size="16" class="text-gray-400" />
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { computed } from 'vue'
import { Globe, Mail, Phone, MessageSquare, Linkedin, Twitter, Facebook, Instagram } from 'lucide-vue-next'
import { useSiteStore } from '@/stores/siteStore'

const siteStore = useSiteStore()
const siteConfig = siteStore.siteConfig

const currentYear = computed(() => new Date().getFullYear())

const getSocialIcon = (platform) => {
  const icons = {
    linkedin: Linkedin,
    twitter: Twitter,
    facebook: Facebook,
    instagram: Instagram
  }
  return icons[platform] || Globe
}
</script>