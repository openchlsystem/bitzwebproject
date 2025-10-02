<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-badge">Our Story</div>
          <h1 class="hero-title">About Us</h1>
          <p class="hero-description">
            Founded in 2007 in Nairobi, BITZ IT Consulting has grown into a leading technology partner across East Africa, with a strong presence in Kenya, Uganda, Tanzania, and Lesotho. We specialize in comprehensive technology solutions, software development, IT infrastructure, and digital transformation solutions.
          </p>
        </div>
      </div>
    </section>

    <!-- Mission & Vision -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <!-- Our Goals -->
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <div class="text-primary-600 text-2xl">🎯</div>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Our Goals</h3>
            <p class="text-gray-600">
              To be the leading technology partner for businesses seeking digital transformation
            </p>
          </div>

          <!-- Our Values -->
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <div class="text-primary-600 text-2xl">👥</div>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Our Values</h3>
            <p class="text-gray-600">
              Innovation, integrity, and excellence in everything we do
            </p>
          </div>

          <!-- Our Impact -->
          <div class="text-center">
            <div class="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <div class="text-primary-600 text-2xl">🌍</div>
            </div>
            <h3 class="text-xl font-semibold text-gray-900 mb-4">Our Impact</h3>
            <p class="text-gray-600">
              Creating lasting positive change in the businesses we serve
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Achievements Section -->
    <section class="section-padding bg-gray-50">
      <div class="container-custom">
        <div class="text-center mb-12">
          <div class="badge badge-primary">Our Achievements</div>
          <h2 class="section-title">Milestones & Accomplishments</h2>
          <p class="section-description">Celebrating our journey of success and impact across East Africa</p>
        </div>
        
        <div class="achievements-grid">
          <div v-for="achievement in achievements" :key="achievement.id" class="achievement-card">
            <div class="achievement-icon">{{ achievement.icon }}</div>
            <div class="achievement-value">{{ achievement.value }}</div>
            <div class="achievement-label">{{ achievement.label }}</div>
            <h3 class="achievement-title">{{ achievement.title }}</h3>
            <p class="achievement-description">{{ achievement.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- How We Work -->
    <section class="section-padding bg-white">
      <div class="container-custom">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div class="badge badge-primary mb-4">Our Approach</div>
            <h2 class="text-3xl font-bold text-gray-900 mb-6">How We Work</h2>
            <p class="text-gray-600 mb-8">
              Our methodology combines technical expertise with a deep understanding of business needs
            </p>

            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Understanding</h4>
                  <p class="text-gray-600 text-sm">Deep dive into your business needs and challenges</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Strategy</h4>
                  <p class="text-gray-600 text-sm">Develop tailored solutions to address your specific needs</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Implementation</h4>
                  <p class="text-gray-600 text-sm">Execute solutions with precision and attention to detail</p>
                </div>
              </div>
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">4</div>
                <div>
                  <h4 class="font-semibold text-gray-900 mb-2">Support</h4>
                  <p class="text-gray-600 text-sm">Provide ongoing support and optimization</p>
                </div>
              </div>
            </div>
          </div>

          <div class="bg-gradient-to-br from-primary-500 to-primary-700 rounded-2xl p-8">
            <div class="text-center text-white">
              <h3 class="text-2xl font-bold mb-4">Ready to Transform Your Business?</h3>
              <p class="mb-6 opacity-90">Let's discuss how we can help you achieve your goals</p>
              <button class="btn btn-secondary" @click="$router.push('/contact')">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { achievementsData } from '@/utils/Achievements'

export default {
  name: 'About',
  data() {
    return {
      achievements: achievementsData
    }
  }
}
</script>

<style scoped>
.hero-section {
  background: #0f172a;
  color: white;
  padding: 8rem 0 4rem;
  margin-top: 4rem;
}

.hero-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  margin: 0 auto;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  background-color: #1F1E5C;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.125rem;
  color: #cbd5e1;
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto;
}

.section-padding {
  padding: 4rem 0;
}

.container-custom {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.grid {
  display: grid;
}

.grid-cols-1 {
  grid-template-columns: repeat(1, minmax(0, 1fr));
}

.gap-12 {
  gap: 3rem;
}

.text-center {
  text-align: center;
}

.w-16 {
  width: 4rem;
}

.h-16 {
  height: 4rem;
}

.bg-primary-100 {
  background-color: #dbeafe;
}

.text-primary-600 {
  color: #2563eb;
}

.rounded-full {
  border-radius: 9999px;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.mx-auto {
  margin-left: auto;
  margin-right: auto;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.mb-4 {
  margin-bottom: 1rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mb-8 {
  margin-bottom: 2rem;
}

.mb-12 {
  margin-bottom: 3rem;
}

.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}

.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}

.font-semibold {
  font-weight: 600;
}

.font-bold {
  font-weight: 700;
}

.text-gray-900 {
  color: #111827;
}

.text-gray-600 {
  color: #4b5563;
}

.bg-white {
  background-color: #ffffff;
}

.bg-gray-50 {
  background-color: #f9fafb;
}

.badge {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 0.875rem;
  font-weight: 500;
}

.badge-primary {
  background: #dbeafe;
  color: #1d4ed8;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 1rem 0;
  color: #111827;
}

.section-description {
  font-size: 1.125rem;
  color: #6b7280;
  margin-bottom: 2rem;
}

.achievements-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.achievement-card {
  background: white;
  border-radius: 20px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  transition: all 0.3s ease;
}

.achievement-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.achievement-icon {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.achievement-value {
  font-size: 2.5rem;
  font-weight: 700;
  color: #1F1E5C;
  margin-bottom: 0.5rem;
}

.achievement-label {
  font-size: 0.875rem;
  color: #6b7280;
  margin-bottom: 1rem;
}

.achievement-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  color: #111827;
}

.achievement-description {
  color: #6b7280;
  font-size: 0.875rem;
  line-height: 1.5;
}

.space-y-6 > * + * {
  margin-top: 1.5rem;
}

.space-x-4 > * + * {
  margin-left: 1rem;
}

.items-start {
  align-items: flex-start;
}

.w-8 {
  width: 2rem;
}

.h-8 {
  height: 2rem;
}

.bg-primary-600 {
  background-color: #1F1E5C;
}

.text-white {
  color: #ffffff;
}

.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.flex-shrink-0 {
  flex-shrink: 0;
}

.bg-gradient-to-br {
  background-image: linear-gradient(to bottom right, var(--tw-gradient-stops));
}

.from-primary-500 {
  --tw-gradient-from: #1F1E5C;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgba(31, 30, 92, 0));
}

.to-primary-700 {
  --tw-gradient-to: #1F1E5C;
}

.rounded-2xl {
  border-radius: 1rem;
}

.p-8 {
  padding: 2rem;
}

.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}

.opacity-90 {
  opacity: 0.9;
}

.btn {
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-secondary {
  background: white;
  color: #1F1E5C;
  border-color: white;
}

.btn-secondary:hover {
  background: #f8fafc;
  color: #1F1E5C;
  transform: translateY(-2px);
}

@media (min-width: 1024px) {
  .lg\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
  
  .lg\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.5rem;
  }
  
  .achievements-grid {
    grid-template-columns: 1fr;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>
