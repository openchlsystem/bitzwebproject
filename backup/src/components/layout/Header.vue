<template>
  <header 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled 
        ? 'bg-white shadow-xl border-b border-gray-100' 
        : 'bg-white/98 backdrop-blur-lg shadow-lg'
    ]"
  >
    <nav class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <router-link 
          to="/" 
          class="flex items-center space-x-3 group transition-all duration-300"
        >
          <div 
            class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-[20px] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
          >
            <span class="text-white font-bold text-xl">B</span>
          </div>
          <div class="hidden sm:block">
            <span class="text-xl font-bold text-gray-900">
              BITZ IT
            </span>
            <div class="text-sm text-gray-600">
              Consulting
            </div>
          </div>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-1">
          <router-link
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.path"
            class="px-5 py-3 rounded-[20px] font-semibold text-sm transition-all duration-300 relative group"
            :class="[
              $route.path === item.path
                ? 'bg-blue-600 text-white shadow-lg transform scale-105' 
                : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:scale-105'
            ]"
          >
            {{ item.name }}
            <!-- Active indicator -->
            <div 
              v-if="$route.path === item.path"
              class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-600 rounded-full"
            ></div>
          </router-link>
        </div>

        <!-- Actions -->
        <div class="flex items-center space-x-3">
          <!-- Theme Toggle -->
          <button 
            @click="toggleDarkMode"
            class="hidden md:flex items-center justify-center w-11 h-11 rounded-[20px] transition-all duration-300 group bg-gray-100 hover:bg-gray-200 text-gray-700 hover:scale-105"
            :title="isDark ? 'Switch to light mode' : 'Switch to dark mode'"
          >
            <Sun v-if="isDark" :size="20" class="group-hover:rotate-180 transition-transform duration-300" />
            <Moon v-else :size="20" class="group-hover:rotate-180 transition-transform duration-300" />
          </button>

          <!-- Contact CTA -->
          <router-link
            to="/contact"
            class="hidden md:flex items-center px-6 py-3 rounded-[20px] font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 bg-blue-600 hover:bg-blue-700 text-white transform hover:scale-105"
          >
            Get Started
            <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
            </svg>
          </router-link>

          <!-- Mobile Menu Button -->
          <button 
            @click="toggleMobileMenu"
            class="lg:hidden flex items-center justify-center w-11 h-11 rounded-[20px] transition-all duration-300 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:scale-105"
            :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'"
          >
            <Menu v-if="!isMobileMenuOpen" :size="22" />
            <X v-else :size="22" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div 
          v-if="isMobileMenuOpen" 
          class="lg:hidden py-6 border-t border-gray-200 bg-white"
        >
          <div class="flex flex-col space-y-2">
            <router-link
              v-for="item in navigationItems"
              :key="item.name"
              :to="item.path"
              class="px-4 py-4 mx-2 rounded-[20px] font-semibold transition-all duration-300"
              :class="[
                $route.path === item.path
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'text-gray-700 hover:bg-blue-50 hover:text-blue-600'
              ]"
              @click="closeMobileMenu"
            >
              {{ item.name }}
            </router-link>
            
            <!-- Mobile Contact Button -->
            <div class="px-2 pt-4">
              <router-link
                to="/contact"
                class="flex items-center justify-center px-6 py-4 rounded-[20px] font-bold transition-all duration-300 shadow-lg bg-blue-600 hover:bg-blue-700 text-white"
                @click="closeMobileMenu"
              >
                Get Started
                <svg class="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path>
                </svg>
              </router-link>
            </div>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, X, Sun, Moon } from 'lucide-vue-next'

const route = useRoute()

// Reactive state
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)
const isDark = ref(false)

// Navigation items
const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'Our Vision', path: '/our-vision' },
  { name: 'Services', path: '/services' },
  { name: 'Projects', path: '/projects' },
  { name: 'Our Team', path: '/our-team' },
  { name: 'Contact', path: '/contact' }
]

// Methods
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const toggleDarkMode = () => {
  isDark.value = !isDark.value
  
  // Apply dark mode to document
  if (isDark.value) {
    document.documentElement.classList.add('dark')
    localStorage.setItem('theme', 'dark')
  } else {
    document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', 'light')
  }
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

// Lifecycle hooks
const handleClickOutside = (event) => {
  if (isMobileMenuOpen.value && !event.target.closest('header')) {
    closeMobileMenu()
  }
}

onMounted(() => {
  // Add scroll listener
  window.addEventListener('scroll', handleScroll)
  
  // Check initial scroll position
  handleScroll()
  
  // Check for saved theme preference
  const savedTheme = localStorage.getItem('theme')
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
  
  if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
  
  // Add click outside listener
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})

// Watch for route changes to close mobile menu
watch(() => route.path, () => {
  closeMobileMenu()
})
</script>

<style scoped>
/* Ensure header is always visible */
header {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

/* Enhanced shadow for better visibility */
.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}

/* Ensure proper spacing for fixed header */
body {
  padding-top: 80px;
}

/* Force high contrast for navigation links */
.nav-link {
  color: #374151 !important;
  font-weight: 600;
}

.nav-link:hover {
  color: #2563eb !important;
  background-color: #eff6ff !important;
}

.nav-link.active {
  color: #ffffff !important;
  background-color: #2563eb !important;
}

/* Smooth transitions for all elements */
* {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 300ms;
}

/* Enhanced mobile menu styling */
@media (max-width: 1024px) {
  .mobile-menu {
    background: rgba(255, 255, 255, 0.98);
    backdrop-filter: blur(20px);
    -webkit-backdrop-filter: blur(20px);
  }
}
</style>
