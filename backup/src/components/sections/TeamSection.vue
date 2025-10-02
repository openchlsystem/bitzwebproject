<template>
  <section class="section-padding bg-gray-50">
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

      <!-- Team Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="member in displayedMembers"
          :key="member.id"
          class="bg-white rounded-xl shadow-lg overflow-hidden card-hover group"
        >
          <!-- Member Image -->
          <div class="aspect-w-4 aspect-h-3 bg-gray-200">
            <img
              :src="member.image"
              :alt="member.name"
              class="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>

          <!-- Member Info -->
          <div class="p-6">
            <h3 class="text-xl font-semibold text-gray-900 mb-2">
              {{ member.name }}
            </h3>
            <p class="text-primary-600 font-medium mb-3">
              {{ member.position }}
            </p>
            <p class="text-gray-600 text-sm leading-relaxed">
              {{ member.description }}
            </p>

            <!-- Social Links (if available) -->
            <div v-if="member.social" class="flex space-x-3 mt-4">
              <a
                v-for="(link, platform) in member.social"
                :key="platform"
                :href="link"
                class="text-gray-400 hover:text-primary-500 transition-colors duration-300"
              >
                <component :is="getSocialIcon(platform)" :size="18" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Load More Button -->
      <div v-if="showLoadMore" class="text-center mt-12">
        <Button
          variant="outline"
          size="lg"
          @click="loadMoreMembers"
          :loading="loadingMore"
        >
          Load More Team Members
        </Button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Linkedin, Twitter, Github, Mail } from 'lucide-vue-next'
import Button from '@/components/common/Button.vue'

const props = defineProps({
  sectionBadge: {
    type: String,
    default: 'Our Team'
  },
  sectionTitle: {
    type: String,
    default: 'Meet Our Leadership Team'
  },
  sectionSubtitle: {
    type: String,
    default: 'Experienced professionals guiding our company\'s vision and growth'
  },
  members: {
    type: Array,
    required: true
  },
  initialDisplayCount: {
    type: Number,
    default: 6
  }
})

const displayCount = ref(props.initialDisplayCount)
const loadingMore = ref(false)

const displayedMembers = computed(() => {
  return props.members.slice(0, displayCount.value)
})

const showLoadMore = computed(() => {
  return displayCount.value < props.members.length
})

const loadMoreMembers = async () => {
  loadingMore.value = true
  
  // Simulate loading delay
  await new Promise(resolve => setTimeout(resolve, 500))
  
  displayCount.value = Math.min(displayCount.value + 3, props.members.length)
  loadingMore.value = false
}

const getSocialIcon = (platform) => {
  const icons = {
    linkedin: Linkedin,
    twitter: Twitter,
    github: Github,
    email: Mail
  }
  return icons[platform] || Mail
}
</script>