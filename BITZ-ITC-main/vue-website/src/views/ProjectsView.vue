<template>
  <div class="flex flex-col min-h-[100dvh]">
    <main class="flex-1">
      <!-- Hero Section -->
      <section class="w-full py-12 md:py-24 lg:py-32 bg-navy text-white dark:bg-dark-gradient">
        <div class="container px-4 md:px-6 grid lg:grid-cols-2 gap-8 items-center">
          <div class="space-y-4">
            <span class="bg-white/20 hover:bg-white/30 text-white rounded-full px-4 py-1 text-sm inline-block">
              Our Projects
            </span>
            <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tighter mt-4">
              Explore Our Projects
            </h1>
            <p class="text-xl md:text-2xl text-gray-300 mt-4">
              Discover the impact of our work through our featured projects across various industries.
            </p>
            <div class="flex flex-wrap gap-4 mt-6">
              <div class="flex items-center gap-2 text-white/80">
                <CheckCircle class="h-5 w-5" />
                <span>{{ projects.length }}+ Completed Projects</span>
              </div>
              <div class="flex items-center gap-2 text-white/80">
                <Users class="h-5 w-5" />
                <span>50+ Happy Clients</span>
              </div>
              <div class="flex items-center gap-2 text-white/80">
                <Award class="h-5 w-5" />
                <span>Industry Recognition</span>
              </div>
            </div>
          </div>
          
          <div class="flex justify-center">
            <div class="w-full max-w-[500px] relative">
              <div class="overflow-hidden rounded-3xl">
                <div 
                  class="flex transition-transform duration-500 ease-in-out"
                  :style="{ transform: `translateX(-${currentSlide * 100}%)` }"
                >
                  <div class="w-full flex-shrink-0">
                    <div class="aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-ios-lg flex items-center justify-center">
                      <Code class="h-24 w-24 text-white/80" />
                    </div>
                  </div>
                  <div class="w-full flex-shrink-0">
                    <div class="aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-ios-lg flex items-center justify-center">
                      <Server class="h-24 w-24 text-white/80" />
                    </div>
                  </div>
                  <div class="w-full flex-shrink-0">
                    <div class="aspect-video bg-gradient-to-br from-[#000435] to-[#000a6b] rounded-3xl shadow-ios-lg flex items-center justify-center">
                      <Database class="h-24 w-24 text-white/80" />
                    </div>
                  </div>
                </div>
              </div>
              <button 
                @click="prevSlide"
                class="absolute left-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-none rounded-full p-2 transition-colors"
              >
                <ChevronLeft class="h-4 w-4" />
              </button>
              <button 
                @click="nextSlide"
                class="absolute right-4 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/30 text-white border-none rounded-full p-2 transition-colors"
              >
                <ChevronRight class="h-4 w-4" />
              </button>
              
              <!-- Slide indicators -->
              <div class="flex justify-center mt-4 space-x-2">
                <button
                  v-for="(_, index) in 3"
                  :key="index"
                  @click="currentSlide = index"
                  :class="[
                    'w-2 h-2 rounded-full transition-colors',
                    currentSlide === index ? 'bg-white' : 'bg-white/40'
                  ]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <!-- Filter and Search Section -->
      <section class="w-full py-8 bg-gray-50 dark:bg-navy-950 border-b">
        <div class="container px-4 md:px-6">
          <div class="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div class="flex flex-wrap gap-2">
              <button
                @click="selectedCategory = 'all'"
                :class="[
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                  selectedCategory === 'all' 
                    ? 'bg-navy text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                ]"
              >
                All Projects ({{ projects.length }})
              </button>
              <button
                v-for="category in categories"
                :key="category"
                @click="selectedCategory = category"
                :class="[
                  'px-4 py-2 rounded-full text-sm font-medium transition-colors',
                  selectedCategory === category 
                    ? 'bg-navy text-white' 
                    : 'bg-white text-gray-600 hover:bg-gray-100'
                ]"
              >
                {{ category }} ({{ getProjectCountByCategory(category) }})
              </button>
            </div>
            
            <div class="relative w-full md:w-80">
              <Search class="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search projects..."
                class="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-navy focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      <!-- Projects Grid Section -->
      <section class="w-full py-12 md:py-24 bg-white dark:bg-navy-900">
        <div class="container px-4 md:px-6">
          <!-- Results count -->
          <div class="mb-8">
            <p class="text-gray-600 dark:text-gray-400">
              Showing {{ filteredProjects.length }} of {{ projects.length }} projects
              <span v-if="selectedCategory !== 'all' || searchQuery">
                {{ searchQuery ? `for "${searchQuery}"` : '' }}
                {{ selectedCategory !== 'all' ? `in ${selectedCategory}` : '' }}
              </span>
            </p>
          </div>

          <!-- Loading state -->
          <div v-if="isLoading" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div v-for="n in 6" :key="n" class="animate-pulse">
              <div class="bg-gray-200 aspect-video rounded-3xl mb-4"></div>
              <div class="space-y-3">
                <div class="h-4 bg-gray-200 rounded w-1/4"></div>
                <div class="h-6 bg-gray-200 rounded w-3/4"></div>
                <div class="h-4 bg-gray-200 rounded w-full"></div>
                <div class="h-4 bg-gray-200 rounded w-2/3"></div>
              </div>
            </div>
          </div>

          <!-- No results -->
          <div v-else-if="filteredProjects.length === 0" class="text-center py-16">
            <FolderX class="h-16 w-16 text-gray-400 mx-auto mb-4" />
            <h3 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">No projects found</h3>
            <p class="text-gray-600 dark:text-gray-400 mb-6">
              Try adjusting your search or filter criteria
            </p>
            <button
              @click="clearFilters"
              class="bg-navy hover:bg-navy/90 text-white px-6 py-2 rounded-full transition-colors"
            >
              Clear Filters
            </button>
          </div>

          <!-- Projects Grid -->
          <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div
              v-for="(project, index) in filteredProjects"
              :key="project.slug"
              class="group border-0 shadow-ios rounded-3xl overflow-hidden hover:shadow-ios-lg transition-all duration-300 bg-white transform hover:-translate-y-1"
              :style="{ animationDelay: `${index * 100}ms` }"
            >
              <div class="aspect-video relative bg-gray-100 overflow-hidden">
                <img
                  :src="project.image"
                  :alt="project.title"
                  class="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
                <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
                
                <!-- Project status badge -->
                <div class="absolute top-4 left-4">
                  <span :class="[
                    'px-3 py-1 rounded-full text-xs font-medium',
                    project.status === 'completed' ? 'bg-green-100 text-green-800' :
                    project.status === 'ongoing' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  ]">
                    {{ project.status }}
                  </span>
                </div>

                <!-- Technologies used -->
                <div class="absolute bottom-4 left-4 flex flex-wrap gap-1">
                  <span
                    v-for="tech in project.technologies.slice(0, 3)"
                    :key="tech"
                    class="px-2 py-1 bg-white/90 text-gray-800 rounded text-xs font-medium"
                  >
                    {{ tech }}
                  </span>
                  <span
                    v-if="project.technologies.length > 3"
                    class="px-2 py-1 bg-white/90 text-gray-800 rounded text-xs font-medium"
                  >
                    +{{ project.technologies.length - 3 }}
                  </span>
                </div>
              </div>
              
              <div class="p-8">
                <div class="flex items-center justify-between mb-3">
                  <span class="bg-navy/10 text-navy hover:bg-navy/20 rounded-full px-4 py-1 text-sm inline-block">
                    {{ project.category }}
                  </span>
                  <div class="flex items-center text-gray-500 text-sm">
                    <Calendar class="h-4 w-4 mr-1" />
                    {{ project.duration }}
                  </div>
                </div>
                
                <h3 class="text-2xl font-bold mb-3 group-hover:text-navy transition-colors">
                  {{ project.title }}
                </h3>
                
                <p class="text-lg text-gray-500 dark:text-gray-400 mb-4 line-clamp-3">
                  {{ project.description }}
                </p>

                <!-- Project metrics -->
                <div class="flex items-center gap-4 mb-6 text-sm text-gray-600">
                  <div class="flex items-center gap-1">
                    <TrendingUp class="h-4 w-4" />
                    <span>{{ project.impact }}</span>
                  </div>
                  <div class="flex items-center gap-1">
                    <Users class="h-4 w-4" />
                    <span>{{ project.teamSize }} team</span>
                  </div>
                </div>

                <div class="flex items-center justify-between">
                  <a
                    :href="`/projects/${project.slug}`"
                    class="text-navy dark:text-white flex items-center font-semibold text-lg hover:underline transition-colors"
                  >
                    Read more <ArrowRight class="h-5 w-5 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                  
                  <!-- Client logo -->
                  <div v-if="project.clientLogo" class="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                    <img :src="project.clientLogo" :alt="project.client" class="w-8 h-8 object-contain" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          <!-- Load More Button -->
          <div v-if="hasMoreProjects" class="flex justify-center mt-12">
            <button
              @click="loadMoreProjects"
              :disabled="isLoadingMore"
              class="bg-navy hover:bg-navy/90 text-white rounded-full text-base py-6 px-8 transition-colors disabled:opacity-50"
            >
              {{ isLoadingMore ? 'Loading...' : 'Load More Projects' }}
            </button>
          </div>
        </div>
      </section>

      <!-- Call to Action Section -->
      <section class="w-full py-12 md:py-24 bg-gray-50 dark:bg-navy-950">
        <div class="container px-4 md:px-6 text-center">
          <h2 class="text-3xl md:text-4xl font-bold tracking-tighter mb-4">
            Ready to Start Your Project?
          </h2>
          <p class="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help bring your vision to life with our expertise and proven track record.
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <button class="bg-navy hover:bg-navy/90 text-white rounded-full text-base py-6 px-8 transition-colors">
              Start a Project
            </button>
            <button class="border border-navy text-navy hover:bg-navy hover:text-white rounded-full text-base py-6 px-8 transition-colors">
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { 
  ArrowRight, 
  ChevronLeft, 
  ChevronRight, 
  Code, 
  Server, 
  Database,
  Search,
  Calendar,
  TrendingUp,
  Users,
  CheckCircle,
  Award,
  FolderX
} from 'lucide-vue-next'

// Reactive state
const currentSlide = ref(0)
const selectedCategory = ref('all')
const searchQuery = ref('')
const isLoading = ref(false)
const isLoadingMore = ref(false)
const hasMoreProjects = ref(false)

// Enhanced project data with more comprehensive information
const projects = ref([
  {
    slug: "openchs",
    title: "OPENCHS - A Child Helpline System",
    category: "Child Protection",
    description: "OPENCHS is a comprehensive child helpline system that provides a safe and confidential environment for children with 24/7 support, multilingual capabilities, and real-time case management.",
    image: "/projects/project1.png",
    status: "completed",
    duration: "8 months",
    technologies: ["React", "Node.js", "PostgreSQL", "AWS", "Docker"],
    impact: "40% faster response",
    teamSize: "6",
    client: "Child Protection Agency",
    clientLogo: "/placeholder.svg?height=32&width=32&text=CPA"
  },
  {
    slug: "case-management-legal",
    title: "Case Management - Legal",
    category: "Legal",
    description: "A comprehensive legal case management system designed to streamline legal processes, track case progress, and manage legal documentation with advanced security features.",
    image: "/placeholder.svg?height=300&width=600&text=Legal Case Management",
    status: "completed",
    duration: "6 months",
    technologies: ["Vue.js", "Laravel", "MySQL", "Redis", "Elasticsearch"],
    impact: "60% efficiency gain",
    teamSize: "5",
    client: "Legal Firm Associates",
    clientLogo: "/placeholder.svg?height=32&width=32&text=LFA"
  },
  {
    slug: "crm-saccos",
    title: "CRM for SACCOS",
    category: "Finance",
    description: "A comprehensive CRM platform that simplifies and automates the entire lifecycle of Sacco operations, from member management to financial tracking and reporting.",
    image: "/placeholder.svg?height=300&width=600&text=CRM for SACCOS",
    status: "ongoing",
    duration: "12 months",
    technologies: ["Angular", "Spring Boot", "MongoDB", "Kafka", "Kubernetes"],
    impact: "50% member growth",
    teamSize: "8",
    client: "SACCO Federation",
    clientLogo: "/placeholder.svg?height=32&width=32&text=SF"
  },
  {
    slug: "edms",
    title: "Electronic Document Management System",
    category: "Document Management",
    description: "An advanced EDMS designed to enhance document storage, retrieval, and security with AI-powered search, automated workflows, and compliance monitoring.",
    image: "/placeholder.svg?height=300&width=600&text=EDMS",
    status: "completed",
    duration: "10 months",
    technologies: ["React", "Python", "FastAPI", "Elasticsearch", "MinIO"],
    impact: "70% search speed",
    teamSize: "7",
    client: "Government Agency",
    clientLogo: "/placeholder.svg?height=32&width=32&text=GA"
  },
  {
    slug: "contract-management",
    title: "Contract Management System",
    category: "Contract Management",
    description: "A comprehensive platform for managing contracts from creation through execution, compliance, renewal, and closeout with automated workflows and risk management.",
    image: "/placeholder.svg?height=300&width=600&text=Contract Management",
    status: "completed",
    duration: "9 months",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "Redis", "Docker"],
    impact: "45% faster processing",
    teamSize: "6",
    client: "Enterprise Corp",
    clientLogo: "/placeholder.svg?height=32&width=32&text=EC"
  },
  {
    slug: "healthcare-portal",
    title: "Healthcare Management Portal",
    category: "Healthcare",
    description: "A comprehensive healthcare management system with patient records, appointment scheduling, telemedicine capabilities, and integrated billing solutions.",
    image: "/placeholder.svg?height=300&width=600&text=Healthcare Portal",
    status: "ongoing",
    duration: "14 months",
    technologies: ["React", "Node.js", "MongoDB", "WebRTC", "Stripe"],
    impact: "35% patient satisfaction",
    teamSize: "10",
    client: "Medical Center",
    clientLogo: "/placeholder.svg?height=32&width=32&text=MC"
  }
])

// Computed properties
const categories = computed(() => {
  const cats = [...new Set(projects.value.map(p => p.category))]
  return cats.sort()
})

const filteredProjects = computed(() => {
  let filtered = projects.value

  // Filter by category
  if (selectedCategory.value !== 'all') {
    filtered = filtered.filter(p => p.category === selectedCategory.value)
  }

  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(query) ||
      p.description.toLowerCase().includes(query) ||
      p.technologies.some(tech => tech.toLowerCase().includes(query))
    )
  }

  return filtered
})

// Methods
const nextSlide = () => {
  currentSlide.value = (currentSlide.value + 1) % 3
}

const prevSlide = () => {
  currentSlide.value = currentSlide.value === 0 ? 2 : currentSlide.value - 1
}

const getProjectCountByCategory = (category) => {
  return projects.value.filter(p => p.category === category).length
}

const clearFilters = () => {
  selectedCategory.value = 'all'
  searchQuery.value = ''
}

const loadMoreProjects = () => {
  isLoadingMore.value = true
  // Simulate loading more projects
  setTimeout(() => {
    isLoadingMore.value = false
    hasMoreProjects.value = false
  }, 1000)
}

// Auto-advance carousel
let carouselInterval
onMounted(() => {
  carouselInterval = setInterval(() => {
    nextSlide()
  }, 4000)
})

// Cleanup interval on unmount
import { onUnmounted } from 'vue'
onUnmounted(() => {
  if (carouselInterval) {
    clearInterval(carouselInterval)
  }
})
</script>

<style scoped>
.bg-navy {
  background-color: #1e3a8a;
}

.shadow-ios {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.shadow-ios-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.group:hover .group-hover\:translate-x-1 {
  transform: translateX(0.25rem);
}
</style>