<template>
  <div id="app" class="font-roboto">
    <!-- Floating Socials Bar -->
    <div class="floating-socials">
      <a href="https://www.linkedin.com/company/106124884" target="_blank" rel="noopener" class="social-icon-glass" aria-label="LinkedIn">
        <Linkedin :size="24" />
      </a>
      <a href="https://x.com/Consulting41793" target="_blank" rel="noopener" class="social-icon-glass" aria-label="Twitter/X">
        <Twitter :size="24" />
      </a>
      <a href="https://youtube.com/" target="_blank" rel="noopener" class="social-icon-glass" aria-label="YouTube">
        <Youtube :size="24" />
      </a>
      <a href="https://instagram.com/bitz.itconsulting" target="_blank" rel="noopener" class="social-icon-glass" aria-label="Instagram">
        <Instagram :size="24" />
      </a>
      <a href="https://facebook.com/bitzitc" target="_blank" rel="noopener" class="social-icon-glass" aria-label="Facebook">
        <Facebook :size="24" />
      </a>
    </div>
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
import { ChevronUp, Linkedin, Twitter, Youtube, Instagram, Facebook } from 'lucide-vue-next'
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

/* Floating Socials Bar */
.floating-socials {
  position: fixed;
  top: 50%;
  left: 2rem;
  transform: translateY(-50%);
  z-index: 100;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.social-icon-glass {
  background: rgba(31, 30, 92, 0.15);
  border-radius: 16px;
  box-shadow: 0 4px 24px rgba(31, 30, 92, 0.08);
  backdrop-filter: blur(12px) saturate(180%);
  -webkit-backdrop-filter: blur(12px) saturate(180%);
  border: 1.5px solid rgba(31, 30, 92, 0.25);
  color: #1F1E5C;
  padding: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s, color 0.2s, transform 0.2s;
}
.social-icon-glass:hover {
  background: #1F1E5C;
  color: #fff;
  transform: translateY(-2px) scale(1.08);
}
@media (max-width: 900px) {
  .floating-socials {
    left: 0.5rem;
  }
}
</style>