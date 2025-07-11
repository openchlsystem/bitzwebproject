<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <Hero
      title="Explore Our Projects"
      subtitle="Discover the impact of our work through our featured projects"
      badge="Our Projects"
      hero-icon="FolderOpen"
      :show-actions="false"
    />

    <!-- Projects Grid -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <!-- Filter Tabs -->
        <div class="flex flex-wrap justify-center gap-4 mb-12">
          <button
            v-for="category in categories"
            :key="category"
            @click="handleCategoryChange(category)"
            :class="[
              'px-6 py-3 rounded-full font-medium transition-all duration-300',
              selectedCategory === category
                ? 'bg-primary-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            ]"
          >
            {{ category }}
          </button>
        </div>

        <!-- Projects Grid -->
        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div
            v-for="project in filteredProjects"
            :key="project.id"
            class="bg-white rounded-xl shadow-lg overflow-hidden card-hover group"
          >
            <!-- Project Image -->
            <div class="aspect-w-16 aspect-h-9 bg-gray-200">
              <img
                :src="project.image"
                :alt="project.title"
                class="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>

            <!-- Project Content -->
            <div class="p-6">
              <!-- Category Badge -->
              <div class="inline-flex items-center px-2 py-1 rounded-full bg-primary-100 text-primary-700 text-xs font-medium mb-3">
                {{ project.category }}
              </div>

              <h3 class="text-xl font-semibold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                {{ project.title }}
              </h3>

              <p class="text-gray-600 text-sm leading-relaxed mb-4">
                {{ project.description }}
              </p>

              <!-- Technologies -->
              <div v-if="project.technologies" class="flex flex-wrap gap-2 mb-4">
                <span
                  v-for="tech in project.technologies"
                  :key="tech"
                  class="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md"
                >
                  {{ tech }}
                </span>
              </div>

              <!-- Read More Link -->
              <a
                :href="project.link"
                class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-300"
              >
                Read more
                <ArrowRight :size="16" class="ml-1" />
              </a>
            </div>
          </div>
        </div>

        <!-- Load More Button -->
        <div v-if="hasMoreProjects" class="text-center mt-12">
          <Button
            variant="outline"
            size="lg"
            @click="loadMoreProjects"
            :loading="loadingMore"
          >
            Load More Projects
          </Button>
        </div>

        <!-- Empty State -->
        <div v-if="filteredProjects.length === 0" class="text-center py-16">
          <FolderOpen :size="64" class="text-gray-400 mx-auto mb-4" />
          <h3 class="text-xl font-semibold text-gray-900 mb-2">No projects found</h3>
          <p class="text-gray-600">Try selecting a different category or check back later.</p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { ArrowRight, FolderOpen } from 'lucide-vue-next'
import Hero from '@/components/sections/Hero.vue'
import Button from '@/components/common/Button.vue'
import { useSiteStore } from '@/stores/siteStore'

const siteStore = useSiteStore()
const { projects } = siteStore

const selectedCategory = ref('All')
const displayCount = ref(6)
const loadingMore = ref(false)

// Get unique categories from projects
const categories = computed(() => {
  const cats = ['All']
  projects.forEach(project => {
    const projectCategories = project.category.split(', ')
    projectCategories.forEach(cat => {
      if (!cats.includes(cat.trim())) {
        cats.push(cat.trim())
      }
    })
  })
  return cats
})

// Filter projects based on selected category
const filteredProjects = computed(() => {
  let filtered = projects
  
  if (selectedCategory.value !== 'All') {
    filtered = projects.filter(project => 
      project.category.toLowerCase().includes(selectedCategory.value.toLowerCase())
    )
  }
  
  return filtered.slice(0, displayCount.value)
})

const hasMoreProjects = computed(() => {
  const totalFiltered = selectedCategory.value === 'All' 
    ? projects.length 
    : projects.filter(project => 
        project.category.toLowerCase().includes(selectedCategory.value.toLowerCase())
      ).length
  
  return displayCount.value < totalFiltered
})

const loadMoreProjects = async () => {
  loadingMore.value = true
  
  // Simulate loading delay
  await new Promise(resolve => setTimeout(resolve, 500))
  
  displayCount.value += 4
  loadingMore.value = false
}

// Reset display count when category changes
const resetDisplayCount = () => {
  displayCount.value = 6
}

// Watch for category changes
const handleCategoryChange = (category) => {
  selectedCategory.value = category
  resetDisplayCount()
}
</script>