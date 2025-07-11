<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <Hero
      title="Our Team"
      subtitle="Meet the experts behind our innovative technology solutions"
      badge="Our Team"
      hero-icon="Users"
      :show-actions="false"
    />

    <!-- Leadership Team -->
    <TeamSection
      section-badge="Leadership"
      section-title="Meet Our Leadership Team"
      section-subtitle="Experienced professionals guiding our company's vision and growth"
      :members="leadershipTeam"
    />

    <!-- Specialized Teams -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="text-center mb-16">
          <div class="inline-flex items-center px-3 py-1 rounded-full bg-navy-900 text-white text-sm font-medium mb-4">
            Specialized Teams
          </div>
          <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Specialized Teams
          </h2>
          <p class="text-xl text-gray-600 max-w-3xl mx-auto">
            Dedicated professionals driving innovation across all aspects of our business
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div
            v-for="member in specializedTeam"
            :key="member.id"
            class="bg-gray-50 rounded-xl shadow-lg overflow-hidden card-hover group"
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
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import Hero from '@/components/sections/Hero.vue'
import TeamSection from '@/components/sections/TeamSection.vue'
import { useSiteStore } from '@/stores/siteStore'

const siteStore = useSiteStore()
const { teamMembers } = siteStore

// Leadership team (first 4 members)
const leadershipTeam = teamMembers.slice(0, 4)

// Specialized team members
const specializedTeam = [
  {
    id: 5,
    name: 'Joan Njoki',
    position: 'Head of Finance',
    description: 'Managing financial operations and strategic financial planning for sustainable growth.',
    image: '/placeholder.svg?height=300&width=300'
  },
  {
    id: 6,
    name: 'Jimmy Wanyama',
    position: 'Lead AI Developer',
    description: 'Specializing in intelligent systems and machine learning solutions for innovative applications.',
    image: '/placeholder.svg?height=300&width=300'
  },
  {
    id: 7,
    name: 'Miriam Shem',
    position: 'Head of Social Media and AI Developer',
    description: 'Combining social media expertise with AI development for enhanced digital presence.',
    image: '/placeholder.svg?height=300&width=300'
  },
  {
    id: 8,
    name: 'Franklin Karanja',
    position: 'Model and Training',
    description: 'Specializing in AI model development and training for optimal performance.',
    image: '/placeholder.svg?height=300&width=300'
  },
  {
    id: 9,
    name: 'Phyllis Kamau',
    position: 'CI/CD and Deployment',
    description: 'Ensuring smooth and efficient deployment processes through robust CI/CD pipelines.',
    image: '/placeholder.svg?height=300&width=300'
  },
  {
    id: 10,
    name: 'Jude Angedu',
    position: 'Backend Development',
    description: 'Building robust and scalable backend systems for our applications.',
    image: '/placeholder.svg?height=300&width=300'
  },
  {
    id: 11,
    name: 'Peter Rogendo',
    position: 'Backend Development',
    description: 'Contributing to the development of efficient and reliable backend services.',
    image: '/placeholder.svg?height=300&width=300'
  },
  {
    id: 12,
    name: 'Newton Brian',
    position: 'UI/UX and Frontend Development',
    description: 'Designing and implementing user-friendly interfaces and engaging frontend experiences.',
    image: '/placeholder.svg?height=300&width=300'
  },
  {
    id: 13,
    name: 'Marion',
    position: 'Software Intern',
    description: 'Building and learning, contributing to the development of our applications.',
    image: '/placeholder.svg?height=300&width=300'
  }
]
</script>