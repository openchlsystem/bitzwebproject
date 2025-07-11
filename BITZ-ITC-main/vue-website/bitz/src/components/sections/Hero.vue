<template>
  <section class="relative min-h-screen flex items-center hero-gradient overflow-hidden">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0 bg-gradient-to-r from-primary-500/20 to-transparent"></div>
    </div>

    <div class="container-custom relative z-10">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <!-- Content -->
        <div class="text-white space-y-6">
          <div v-if="badge" class="inline-flex items-center px-3 py-1 rounded-full bg-primary-500/20 text-primary-200 text-sm font-medium">
            {{ badge }}
          </div>
          
          <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            {{ title }}
          </h1>
          
          <p class="text-xl text-gray-300 leading-relaxed max-w-2xl">
            {{ subtitle }}
          </p>

          <div v-if="showActions" class="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              variant="primary"
              size="lg"
              :icon="primaryAction.icon"
              @click="handlePrimaryAction"
            >
              {{ primaryAction.text }}
            </Button>
            
            <Button
              v-if="secondaryAction"
              variant="outline"
              size="lg"
              :icon="secondaryAction.icon"
              @click="handleSecondaryAction"
            >
              {{ secondaryAction.text }}
            </Button>
          </div>
        </div>

        <!-- Visual Element -->
        <div class="relative">
          <div class="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8 shadow-2xl">
            <div class="flex items-center justify-center h-64">
              <component 
                :is="heroIcon" 
                :size="120" 
                class="text-white opacity-80"
              />
            </div>
          </div>
          
          <!-- Floating Elements -->
          <div class="absolute -top-4 -right-4 w-8 h-8 bg-primary-400 rounded-full opacity-60 animate-pulse"></div>
          <div class="absolute -bottom-4 -left-4 w-6 h-6 bg-primary-300 rounded-full opacity-40 animate-pulse delay-1000"></div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <ChevronDown :size="24" class="text-white opacity-60" />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { ChevronDown, Users, Lightbulb, MessageSquare, FolderOpen, Code } from 'lucide-vue-next'
import Button from '@/components/common/Button.vue'

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  badge: {
    type: String,
    default: null
  },
  heroIcon: {
    type: String,
    default: 'Code'
  },
  primaryAction: {
    type: Object,
    default: () => ({
      text: 'Get Started',
      icon: 'ArrowRight'
    })
  },
  secondaryAction: {
    type: Object,
    default: null
  },
  showActions: {
    type: Boolean,
    default: true
  }
})

const emit = defineEmits(['primary-action', 'secondary-action'])

const heroIconComponent = computed(() => {
  const icons = {
    Users,
    Lightbulb,
    MessageSquare,
    FolderOpen,
    Code
  }
  return icons[props.heroIcon] || Code
})

const handlePrimaryAction = () => {
  emit('primary-action')
}

const handleSecondaryAction = () => {
  emit('secondary-action')
}
</script>