<template>
  <div id="app" class="font-roboto">
    <!-- Header -->
    <Header />
    
    <!-- Main Content -->
    <main class="pt-16">
      <router-view v-slot="{ Component, route }">
        <Transition name="page" mode="out-in">
          <component :is="Component" :key="route.path" />
        </Transition>
      </router-view>
    </main>
    
    <!-- Footer -->
    <Footer />
    
    <!-- Scroll to Top Button -->
    <Transition name="fade">
      <button
        v-if="showScrollTop"
        @click="scrollToTop"
        class="fixed bottom-8 right-8 z-40 w-12 h-12 bg-primary-600 hover:bg-primary-700 text-white rounded-full shadow-lg transition-all duration-300 flex items-center justify-center"
        aria-label="Scroll to top"
      >
        <ChevronUp :size="20" />
      </button>
    </Transition>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { ChevronUp } from 'lucide-vue-next'
import Header from '@/components/layout/Header.vue'
import Footer from '@/components/layout/Footer.vue'
import { useScroll } from '@/composables/useScroll'

const { scrollY, scrollToTop } = useScroll()

const showScrollTop = computed(() => scrollY.value > 400)
</script>

<style scoped>
/* Page transitions */
.page-enter-active,
.page-leave-active {
  transition: all 0.3s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(20px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-20px);
}

/* Fade transition */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>