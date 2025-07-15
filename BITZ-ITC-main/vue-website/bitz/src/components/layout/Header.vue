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
              placeholder="Search products, projects, team members, services..."
              class="w-full px-4 py-2 pl-10 pr-4 rounded-[20px] border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-all duration-300"
            />
            <Search class="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" :size="18" />
            
            <!-- Search Results Dropdown -->
            <div v-if="showSearchResults && searchQuery && searchResults.length > 0"
                 class="absolute top-full left-0 right-0 mt-2 bg-white rounded-[20px] shadow-xl border border-gray-200 max-h-96 overflow-y-auto z-50">
              <div class="p-2">
                <div class="text-xs text-gray-500 px-3 py-2 border-b border-gray-100">
                  {{ searchResults.length }} result{{ searchResults.length !== 1 ? 's' : '' }} found
                </div>
                <div v-for="result in searchResults"
                     :key="result.id"
                     @click="navigateToResult(result)"
                     class="flex items-start p-3 hover:bg-gray-50 rounded-[15px] cursor-pointer transition-colors">
                  <div class="w-10 h-10 rounded-full flex items-center justify-center mr-3 flex-shrink-0"
                       :class="getResultBadgeClass(result.category)">
                    <component :is="getResultIcon(result.type)" :size="18" class="text-white" />
                  </div>
                  <div class="flex-1 min-w-0">
                    <div class="font-medium text-gray-900 truncate">{{ result.title }}</div>
                    <div class="text-sm text-gray-500 mb-1">{{ result.type }}</div>
                    <div class="text-xs text-gray-400 line-clamp-2">{{ result.description }}</div>
                  </div>
                  <div class="ml-2 flex-shrink-0">
                    <div class="w-2 h-2 rounded-full"
                         :class="getCategoryColor(result.category)"></div>
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

// Navigation items - Updated to match your router paths
const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'Our Vision', path: '/our-vision' },
  { name: 'Products', path: '/products' },
  { name: 'Projects', path: '/projects' },
  { name: 'Our Team', path: '/our-team' },
  { name: 'Reach Out', path: '/contact' }
]

// Enhanced search data with comprehensive information
const searchData = ref([
  // Products from ProductData
  { 
    id: 'p1', 
    title: 'OPENCHS - Child Helpline System', 
    type: 'Product', 
    path: '/products', 
    category: 'product',
    description: 'Comprehensive child protection platform providing safe environment for children to report issues',
    keywords: ['child protection', 'helpline', 'case management', 'reporting', 'counseling', 'multilingual']
  },
  { 
    id: 'p2', 
    title: 'Case Management - Legal', 
    type: 'Product', 
    path: '/products', 
    category: 'product',
    description: 'Advanced legal case management system for law firms and legal departments',
    keywords: ['legal', 'case management', 'court', 'litigation', 'document management', 'scheduling']
  },
  { 
    id: 'p3', 
    title: 'Sacco Case Management', 
    type: 'Product', 
    path: '/products', 
    category: 'product',
    description: 'Comprehensive financial case management system for Sacco institutions',
    keywords: ['sacco', 'financial', 'loans', 'members', 'savings', 'credit', 'microfinance']
  },
  
  // Team Members
  { 
    id: 't1', 
    title: 'James Kaminju - Chief Executive Officer', 
    type: 'Team Member', 
    path: '/our-team', 
    category: 'team',
    description: 'Visionary leader with 15+ years in technology and business development',
    keywords: ['ceo', 'leadership', 'strategy', 'business development', 'technology', 'vision']
  },
  { 
    id: 't2', 
    title: 'Mercy Kamau - Director of Finance', 
    type: 'Team Member', 
    path: '/our-team', 
    category: 'team',
    description: 'Financial expert ensuring sustainable growth and fiscal responsibility',
    keywords: ['finance', 'accounting', 'budgeting', 'financial planning', 'cfo', 'economics']
  },
  { 
    id: 't3', 
    title: 'Nelson Adagi - Systems Manager', 
    type: 'Team Member', 
    path: '/our-team', 
    category: 'team',
    description: 'Technical lead overseeing system architecture and infrastructure',
    keywords: ['systems', 'infrastructure', 'architecture', 'technical', 'management', 'operations']
  },
  { 
    id: 't4', 
    title: 'Sarah Wanjiku - Lead Developer', 
    type: 'Team Member', 
    path: '/our-team', 
    category: 'team',
    description: 'Full-stack developer specializing in modern web technologies',
    keywords: ['developer', 'programming', 'web development', 'full-stack', 'javascript', 'react', 'vue']
  },
  { 
    id: 't5', 
    title: 'Michael Ochieng - UI/UX Designer', 
    type: 'Team Member', 
    path: '/our-team', 
    category: 'team',
    description: 'Creative designer focused on user experience and interface design',
    keywords: ['design', 'ui', 'ux', 'user experience', 'interface', 'creative', 'figma']
  },
  
  // Projects
  { 
    id: 'pr1', 
    title: 'Digital Transformation Initiative - Manufacturing', 
    type: 'Project', 
    path: '/projects', 
    category: 'project',
    description: '40% efficiency improvement through complete digital transformation',
    keywords: ['manufacturing', 'digital transformation', 'automation', 'efficiency', 'iot', 'analytics']
  },
  { 
    id: 'pr2', 
    title: 'Government Digitization - Ministry of Health', 
    type: 'Project', 
    path: '/projects', 
    category: 'project',
    description: 'Comprehensive health management system for government healthcare',
    keywords: ['government', 'health', 'digitization', 'healthcare', 'management', 'public sector']
  },
  { 
    id: 'pr3', 
    title: 'UNICEF Child Protection Platform', 
    type: 'Project', 
    path: '/projects', 
    category: 'project',
    description: 'Multi-country child protection system deployment across East Africa',
    keywords: ['unicef', 'child protection', 'east africa', 'ngo', 'international', 'humanitarian']
  },
  { 
    id: 'pr4', 
    title: 'Banking Core System Modernization', 
    type: 'Project', 
    path: '/projects', 
    category: 'project',
    description: 'Complete overhaul of legacy banking systems with modern architecture',
    keywords: ['banking', 'financial', 'core system', 'modernization', 'fintech', 'security']
  },
  { 
    id: 'pr5', 
    title: 'Educational Management System - Universities', 
    type: 'Project', 
    path: '/projects', 
    category: 'project',
    description: 'Comprehensive student and academic management platform',
    keywords: ['education', 'university', 'student management', 'academic', 'learning', 'administration']
  },
  
  // Services & Solutions
  { 
    id: 's1', 
    title: 'AI & Machine Learning Solutions', 
    type: 'Service', 
    path: '/contact', 
    category: 'service',
    description: 'Custom AI models and machine learning implementations',
    keywords: ['ai', 'machine learning', 'artificial intelligence', 'automation', 'predictive analytics']
  },
  { 
    id: 's2', 
    title: 'Full-Stack Development Services', 
    type: 'Service', 
    path: '/contact', 
    category: 'service',
    description: 'End-to-end web and mobile application development',
    keywords: ['development', 'web development', 'mobile apps', 'full-stack', 'programming']
  },
  { 
    id: 's3', 
    title: 'Digital Transformation Consulting', 
    type: 'Service', 
    path: '/contact', 
    category: 'service',
    description: 'Strategic guidance for digital transformation initiatives',
    keywords: ['consulting', 'digital transformation', 'strategy', 'modernization', 'technology']
  },
  
  // Company Pages
  { 
    id: 'pg1', 
    title: 'Our Vision & Mission', 
    type: 'Page', 
    path: '/our-vision', 
    category: 'page',
    description: 'Learn about our vision for transforming businesses through technology',
    keywords: ['vision', 'mission', 'values', 'company', 'purpose', 'goals']
  },
  { 
    id: 'pg2', 
    title: 'Contact & Get Quote', 
    type: 'Page', 
    path: '/contact', 
    category: 'page',
    description: 'Get in touch for consultations and project quotes',
    keywords: ['contact', 'quote', 'consultation', 'reach out', 'get in touch']
  }
])

// Enhanced search results with better matching
const searchResults = computed(() => {
  if (!searchQuery.value || searchQuery.value.length < 2) return []
  
  const query = searchQuery.value.toLowerCase().trim()
  const results = []
  
  searchData.value.forEach(item => {
    let score = 0
    
    // Title match (highest priority)
    if (item.title.toLowerCase().includes(query)) {
      score += 10
    }
    
    // Type match
    if (item.type.toLowerCase().includes(query)) {
      score += 8
    }
    
    // Description match
    if (item.description.toLowerCase().includes(query)) {
      score += 6
    }
    
    // Keywords match
    if (item.keywords.some(keyword => keyword.toLowerCase().includes(query))) {
      score += 5
    }
    
    // Category match
    if (item.category.toLowerCase().includes(query)) {
      score += 4
    }
    
    if (score > 0) {
      results.push({ ...item, score })
    }
  })
  
  // Sort by score (highest first) and limit to 10 results
  return results
    .sort((a, b) => b.score - a.score)
    .slice(0, 10)
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

const getResultBadgeClass = (category) => {
  switch (category) {
    case 'product': return 'bg-blue-500'
    case 'team': return 'bg-green-500'
    case 'project': return 'bg-purple-500'
    case 'service': return 'bg-orange-500'
    case 'page': return 'bg-gray-500'
    default: return 'bg-gray-400'
  }
}

const getCategoryColor = (category) => {
  switch (category) {
    case 'product': return 'bg-blue-400'
    case 'team': return 'bg-green-400'
    case 'project': return 'bg-purple-400'
    case 'service': return 'bg-orange-400'
    case 'page': return 'bg-gray-400'
    default: return 'bg-gray-300'
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

const handleRouteChange = () => {
  closeMobileMenu()
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
  document.addEventListener('click', handleClickOutside)
  watch(() => route.path, handleRouteChange)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
  document.removeEventListener('click', handleClickOutside)
})
</script>

<style scoped>
/* Ensure header is properly positioned */
header {
  margin: 0;
  padding: 0;
  top: 0;
  left: 0;
  right: 0;
}

/* Remove any potential spacing */
nav {
  margin: 0;
  padding: 0;
}

header {
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
}

.shadow-xl {
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
}
</style>
