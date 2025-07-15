<template>
  <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
    :class="[
      isScrolled 
        ? 'bg-white shadow-xl border-b border-gray-100' 
        : 'bg-white/98 backdrop-blur-lg shadow-lg'
    ]">
    <nav class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-20">
        <!-- Logo -->
        <router-link to="/" class="flex items-center space-x-3 group transition-all duration-300">
          <!-- <div 
            class="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-[20px] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300 group-hover:scale-105"
          >
            <span class="text-white font-bold text-xl">BITZ</span>
          </div> -->
          <div class="hidden sm:block">
            <span class="text-xl font-bold text-gray-900">
              BITZ IT
            </span>
            <div class="text-sm text-gray-600">
              Consulting
            </div>
          </div>
        </router-link>

        <!-- Search Bar -->
        <div class="hidden md:flex flex-1 max-w-md mx-8">
          <div class="relative w-full">
            <input
              v-model="searchQuery"
              @input="handleSearch"
              @focus="showSearchResults = true"
              type="text"
              placeholder="Search products, projects, team..."
              class="w-full px-4 py-2 pl-10 pr-4 rounded-[20px] border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-300"
            />
            <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" :size="18" />
            
            <!-- Search Results Dropdown -->
            <div v-if="showSearchResults && searchQuery && searchResults.length > 0"
                 class="absolute top-full left-0 right-0 mt-2 bg-white rounded-[20px] shadow-xl border border-gray-200 max-h-96 overflow-y-auto z-50">
              <div class="p-2">
                <div v-for="result in searchResults"
                     :key="result.id"
                     @click="navigateToResult(result)"
                     class="flex items-center p-3 hover:bg-gray-50 rounded-[15px] cursor-pointer transition-colors">
                  <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                    <component :is="getResultIcon(result.type)" :size="16" class="text-blue-600" />
                  </div>
                  <div class="flex-1">
                    <div class="font-medium text-gray-900">{{ result.title }}</div>
                    <div class="text-sm text-gray-500">{{ result.type }}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
            ]">
            {{ item.name }}
            <!-- Active indicator -->
            <div v-if="$route.path === item.path"
                 class="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-blue-600 rounded-full"></div>
          </router-link>
        </div>

        <!-- Actions -->
        <div class="flex items-center space-x-3">
          <!-- Mobile Menu Button -->
          <button 
            @click="toggleMobileMenu"
            class="lg:hidden flex items-center justify-center w-11 h-11 rounded-[20px] transition-all duration-300 bg-gray-100 hover:bg-gray-200 text-gray-700 hover:scale-105"
            :aria-label="isMobileMenuOpen ? 'Close menu' : 'Open menu'">
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
        leave-to-class="opacity-0 -translate-y-4">
        <div v-if="isMobileMenuOpen" class="lg:hidden py-6 border-t border-gray-200 bg-white">
          <!-- Mobile Search -->
          <div class="px-4 mb-4">
            <div class="relative">
              <input
                v-model="searchQuery"
                @input="handleSearch"
                type="text"
                placeholder="Search..."
                class="w-full px-4 py-2 pl-10 rounded-[20px] border-2 border-gray-200 focus:border-blue-500 focus:outline-none"
              />
              <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" :size="18" />
            </div>
          </div>
          
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
              @click="closeMobileMenu">
              {{ item.name }}
            </router-link>
          </div>
        </div>
      </Transition>
    </nav>

    <!-- Search Overlay for Mobile -->
    <div v-if="showSearchResults && searchQuery && isMobileMenuOpen"
         class="lg:hidden bg-white border-t border-gray-200 max-h-64 overflow-y-auto">
      <div class="p-4">
        <div v-for="result in searchResults"
             :key="result.id"
             @click="navigateToResult(result)"
             class="flex items-center p-3 hover:bg-gray-50 rounded-[15px] cursor-pointer transition-colors">
          <div class="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
            <component :is="getResultIcon(result.type)" :size="16" class="text-blue-600" />
          </div>
          <div class="flex-1">
            <div class="font-medium text-gray-900">{{ result.title }}</div>
            <div class="text-sm text-gray-500">{{ result.type }}</div>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted, watch, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Menu, X, Search, Package, Users, Briefcase, FileText } from 'lucide-vue-next'

const route = useRoute()
const router = useRouter()

// Reactive state
const isMobileMenuOpen = ref(false)
const isScrolled = ref(false)
const searchQuery = ref('')
const showSearchResults = ref(false)

// Navigation items
const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'Our Vision', path: '/our-vision' },
  { name: 'Products', path: '/products' },
  { name: 'Projects', path: '/projects' },
  { name: 'Our Team', path: '/our-team' },
  { name: 'Reach Out', path: '/contact' }
]

// Search data - in a real app, this would come from an API
const searchData = ref([
  // Products
  { id: 'p1', title: 'OPENCHS - Child Helpline System', type: 'Product', path: '/products', category: 'product' },
  { id: 'p2', title: 'Case Management - Legal', type: 'Product', path: '/products', category: 'product' },
  { id: 'p3', title: 'Sacco Case Management', type: 'Product', path: '/products', category: 'product' },
  // Projects
  { id: 'pr1', title: 'Digital Transformation Initiative', type: 'Project', path: '/projects', category: 'project' },
  { id: 'pr2', title: 'Manufacturing Excellence Project', type: 'Project', path: '/projects', category: 'project' },
  // Team
  { id: 't1', title: 'James Kaminju - CEO', type: 'Team Member', path: '/our-team', category: 'team' },
  { id: 't2', title: 'Mercy Kamau - Director of Finance', type: 'Team Member', path: '/our-team', category: 'team' },
  { id: 't3', title: 'Nelson Adagi - Systems Manager', type: 'Team Member', path: '/our-team', category: 'team' },
  // Pages
  { id: 'pg1', title: 'Our Vision & Mission', type: 'Page', path: '/our-vision', category: 'page' },
  { id: 'pg2', title: 'Contact Information', type: 'Page', path: '/contact', category: 'page' }
])

// Computed search results
const searchResults = computed(() => {
  if (!searchQuery.value || searchQuery.value.length < 2) return []
  
  const query = searchQuery.value.toLowerCase()
  return searchData.value.filter(item => 
    item.title.toLowerCase().includes(query) ||
    item.type.toLowerCase().includes(query)
  ).slice(0, 8) // Limit to 8 results
})

// Methods
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

const closeMobileMenu = () => {
  isMobileMenuOpen.value = false
  showSearchResults.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

const handleSearch = () => {
  showSearchResults.value = searchQuery.value.length >= 2
}

const navigateToResult = (result) => {
  router.push(result.path)
  searchQuery.value = ''
  showSearchResults.value = false
  closeMobileMenu()
}

const getResultIcon = (type) => {
  switch (type) {
    case 'Product': return Package
    case 'Project': return Briefcase
    case 'Team Member': return Users
    case 'Page': return FileText
    default: return FileText
  }
}

// Click outside handler
const handleClickOutside = (event) => {
  if (isMobileMenuOpen.value && !event.target.closest('header')) {
    closeMobileMenu()
  }
  if (showSearchResults.value && !event.target.closest('.relative')) {
    showSearchResults.value = false
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  handleScroll()
  document.addEventListener('click', handleClickOutside)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})

watch(() => route.path, () => {
  closeMobileMenu()
})
</script>

<style scoped>
header {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
