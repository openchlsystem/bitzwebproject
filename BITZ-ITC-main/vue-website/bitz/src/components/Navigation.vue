<template>
  <nav 
    class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/20' 
        : 'bg-transparent'
    ]"
  >
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex justify-between items-center h-20">
        <!-- Logo -->
        <NuxtLink to="/" class="flex items-center space-x-3 group">
          <div 
            class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-[20px] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
          >
            <span class="text-white font-bold text-xl">B</span>
          </div>
          <div class="hidden sm:block">
            <span 
              class="text-xl font-bold transition-colors duration-300"
              :class="isScrolled ? 'text-gray-900' : 'text-white'"
            >
              BITZ IT
            </span>
            <div 
              class="text-sm transition-colors duration-300"
              :class="isScrolled ? 'text-gray-600' : 'text-gray-300'"
            >
              Consulting
            </div>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <div class="hidden lg:flex items-center space-x-2">
          <NuxtLink
            v-for="item in navigation"
            :key="item.name"
            :to="item.href"
            class="px-4 py-2 rounded-[20px] font-medium transition-all duration-300 relative group"
            :class="[
              route.path === item.href
                ? isScrolled 
                  ? 'bg-blue-600 text-white shadow-lg' 
                  : 'bg-white/20 text-white backdrop-blur-sm'
                : isScrolled
                  ? 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                  : 'text-gray-300 hover:bg-white/10 hover:text-white'
            ]"
          >
            {{ item.name }}
            <div 
              v-if="route.path === item.href"
              class="absolute inset-0 rounded-[20px] bg-gradient-to-r from-blue-600/20 to-purple-600/20 -z-10"
            ></div>
          </NuxtLink>
        </div>

        <!-- Theme Toggle & Mobile Menu -->
        <div class="flex items-center space-x-3">
          <!-- Theme Toggle -->
          <button 
            @click="toggleTheme"
            class="hidden md:flex items-center justify-center w-10 h-10 rounded-[20px] transition-all duration-300 group"
            :class="[
              isScrolled 
                ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'
            ]"
          >
            <Sun v-if="!isDark" :size="18" class="group-hover:rotate-180 transition-transform duration-300" />
            <Moon v-else :size="18" class="group-hover:rotate-180 transition-transform duration-300" />
          </button>

          <!-- Contact Button -->
          <NuxtLink
            to="/contact"
            class="hidden md:flex items-center px-6 py-3 rounded-[20px] font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5"
            :class="[
              isScrolled 
                ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                : 'bg-white hover:bg-gray-50 text-gray-900'
            ]"
          >
            Get Started
          </NuxtLink>

          <!-- Mobile Menu Button -->
          <button 
            @click="toggleMobileMenu"
            class="lg:hidden flex items-center justify-center w-10 h-10 rounded-[20px] transition-all duration-300"
            :class="[
              isScrolled 
                ? 'bg-gray-100 hover:bg-gray-200 text-gray-700' 
                : 'bg-white/10 hover:bg-white/20 text-white backdrop-blur-sm'
            ]"
          >
            <Menu v-if="!isMobileMenuOpen" :size="20" />
            <X v-else :size="20" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-4"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-4"
      >
        <div 
          v-if="isMobileMenuOpen" 
          class="lg:hidden py-6 border-t"
          :class="[
            isScrolled 
              ? 'border-gray-200 bg-white/95 backdrop-blur-md' 
              : 'border-white/20 bg-slate-900/95 backdrop-blur-md'
          ]"
        >
          <div class="flex flex-col space-y-2">
            <NuxtLink
              v-for="item in navigation"
              :key="item.name"
              :to="item.href"
              class="px-4 py-3 mx-2 rounded-[20px] font-medium transition-all duration-300"
              :class="[
                route.path === item.href
                  ? isScrolled 
                    ? 'bg-blue-600 text-white shadow-lg' 
                    : 'bg-white/20 text-white'
                  : isScrolled
                    ? 'text-gray-700 hover:bg-gray-100'
                    : 'text-gray-300 hover:bg-white/10 hover:text-white'
              ]"
              @click="closeMobileMenu"
            >
              {{ item.name }}
            </NuxtLink>
            
            <!-- Mobile Contact Button -->
            <div class="px-2 pt-4">
              <NuxtLink
                to="/contact"
                class="flex items-center justify-center px-6 py-3 rounded-[20px] font-semibold transition-all duration-300 shadow-lg"
                :class="[
                  isScrolled 
                    ? 'bg-blue-600 hover:bg-blue-700 text-white' 
                    : 'bg-white hover:bg-gray-50 text-gray-900'
                ]"
                @click="closeMobileMenu"
              >
                Get Started
              </NuxtLink>
            </div>
          </div>
        </div>
      </transition>
    </div>
  </nav>
</template>

<script setup>
import { ref, onMounted, onUnmounted, useRoute, watch } from 'vue'
import { Sun, Moon, Menu, X } from 'lucide-vue-next'

const route = useRoute()
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)
const isDark = ref(false)

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'Our Vision', href: '/our-vision' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Our Team', href: '/our-team' },
  { name: 'Contact', href: '/contact' }
]

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

const toggleTheme = () => {
  isDark.value = !isDark.value
  // Add your theme switching logic here
  document.documentElement.classList.toggle('dark')
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  // Check initial scroll position
  handleScroll()
  
  // Check for saved theme preference
  if (localStorage.getItem('theme') === 'dark' || 
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    isDark.value = true
    document.documentElement.classList.add('dark')
  }
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})

// Close mobile menu when route changes
watch(() => route.path, () => {
  closeMobileMenu()
})
</script>

<style scoped>
/* Additional styles for backdrop blur support */
@supports (backdrop-filter: blur(12px)) {
  .backdrop-blur-md {
    backdrop-filter: blur(12px);
  }
  
  .backdrop-blur-sm {
    backdrop-filter: blur(4px);
  }
}

/* Fallback for browsers that don't support backdrop-filter */
@supports not (backdrop-filter: blur(12px)) {
  .backdrop-blur-md {
    background-color: rgba(255, 255, 255, 0.98);
  }
  
  .bg-slate-900\/95 {
    background-color: rgba(15, 23, 42, 0.98);
  }
}
</style>
