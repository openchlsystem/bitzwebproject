<template>
  <section class="section-padding bg-white">
    <div class="container-custom">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center px-3 py-1 rounded-full bg-navy-900 text-white text-sm font-medium mb-4">
          {{ sectionBadge }}
        </div>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
          {{ sectionTitle }}
        </h2>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto">
          {{ sectionSubtitle }}
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="project in displayedProjects"
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
            <div class="flex items-center justify-between">
              <a
                :href="project.link"
                class="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-300"
              >
                Read more
                <ArrowRight :size="16" class="ml-1" />
              </a>

              <!-- Project Status (if available) -->
              <div v-if="project.status" class="flex items-center space-x-1">
                <div :class="getStatusColor(project.status)" class="w-2 h-2 rounded-full"></div>
                <span class="text-xs text-gray-500 capitalize">{{ project.status }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- View All Projects Button -->
      <div v-if="showViewAll" class="text-center mt-12">
        <Button
          variant="primary"
          size="lg"
          @click="viewAllProjects"
        >
          View All Projects
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { ArrowRight } from 'lucide-vue-next'
import Button from '@/components/common/Button.vue'

const props = defineProps({
  sectionBadge: {
    type: String,
    default: 'Our Projects'
  },
  sectionTitle: {
    type: String,
    default: 'Explore Our Projects'
  },
  sectionSubtitle: {
    type: String,
    default: 'Discover the impact of our work through our featured projects'
  },
  projects: {
    type: Array,
    required: true
  },
  maxDisplay: {
    type: Number,
    default: 6
  },
  showViewAll: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['view-all'])

const displayedProjects = computed(() => {
  return props.projects.slice(0, props.maxDisplay)
})

const viewAllProjects = () => {
  emit('view-all')
}

const getStatusColor = (status) => {
  const colors = {
    completed: 'bg-green-500',
    'in-progress': 'bg-yellow-500',
    planning: 'bg-blue-500',
    maintenance: 'bg-purple-500'
  }
  return colors[status] || 'bg-gray-500'
}
</script>