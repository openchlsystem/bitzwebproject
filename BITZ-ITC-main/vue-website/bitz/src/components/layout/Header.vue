<template>
  <header 
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    ]"
  >
    <nav class="container-custom">
      <div class="flex items-center justify-between h-16 px-4">
        <!-- Logo -->
        <router-link 
          to="/" 
          class="flex items-center space-x-2 text-2xl font-bold"
          :class="isScrolled ? 'text-navy-900' : 'text-white'"
        >
          <img src="/logo.svg" alt="BITZ" class="h-8 w-auto" />
          <span>bitz</span>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="hidden md:flex items-center space-x-8">
          <router-link
            v-for="item in navigationItems"
            :key="item.name"
            :to="item.path"
            :class="[
              'text-sm font-medium transition-colors duration-300 hover:text-primary-500',
              isScrolled ? 'text-gray-700' : 'text-white',
              $route.path === item.path ? 'text-primary-500' : ''
            ]"
          >
            {{ item.name }}
          </router-link>
        </div>

        <!-- Theme Toggle & Mobile Menu Button -->
        <div class="flex items-center space-x-4">
          <!-- Theme Toggle -->
          <button
            @click="toggleDarkMode"
            :class="[
              'p-2 rounded-lg transition-colors duration-300',
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            ]"
          >
            <Sun v-if="isDark" :size="20" />
            <Moon v-else :size="20" />
          </button>

          <!-- Mobile Menu Button -->
          <button
            @click="toggleMobileMenu"
            :class="[
              'md:hidden p-2 rounded-lg transition-colors duration-300',
              isScrolled ? 'text-gray-700 hover:bg-gray-100' : 'text-white hover:bg-white/10'
            ]"
          >
            <Menu v-if="!isMobileMenuOpen" :size="24" />
            <X v-else :size="24" />
          </button>
        </div>
      </div>

      <!-- Mobile Navigation -->
      <Transition name="mobile-menu">
        <div
          v-if="isMobileMenuOpen"
          class="md:hidden bg-white border-t border-gray-200 shadow-lg"
        >
          <div class="px-4 py-6 space-y-4">
            <router-link
              v-for="item in navigationItems"
              :key="item.name"
              :to="item.path"
              @click="closeMobileMenu"
              :class="[
                'block text-base font-medium text-gray-700 hover:text-primary-500 transition-colors duration-300',
                $route.path === item.path ? 'text-primary-500' : ''
              ]"
            >
              {{ item.name }}
            </router-link>
          </div>
        </div>
      </Transition>
    </nav>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'
import { Menu, X, Sun, Moon } from 'lucide-vue-next'
import { useSiteStore } from '@/stores/siteStore'
import { useDarkMode } from '@/composables/useDarkMode'
import { useScroll } from '@/composables/useScroll'

const route = useRoute()
const siteStore = useSiteStore()
const { isDark, toggleDarkMode } = useDarkMode()
const { isScrolled } = useScroll()

const isMobileMenuOpen = ref(false)
const { navigationItems } = siteStore

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
}

// Close mobile menu on route change
const handleRouteChange = () => {
  closeMobileMenu()
}

onMounted(() => {
  // Watch for route changes to close mobile menu
  route && route.path && handleRouteChange()
})
</script>

<style scoped>
.mobile-menu-enter-active,
.mobile-menu-leave-active {
  transition: all 0.3s ease;
}

.mobile-menu-enter-from,
.mobile-menu-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>