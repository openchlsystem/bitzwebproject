<template>
  <div class="min-h-screen">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-container">
        <div class="hero-content">
          <div class="hero-text">
            <div class="hero-badge">
              Our Projects
            </div>
            <h1 class="hero-title">Explore Our Projects</h1>
            <p class="hero-description">
              Discover the impact of our work through our featured projects and client testimonials.
            </p>
          </div>
          <div class="hero-visual">
            <div class="testimonials-showcase">
              <h3 class="showcase-title">What Our Clients Say</h3>
              <div class="testimonials-carousel">
                <button class="nav-arrow left" @click="previousTestimonial" aria-label="Previous testimonial">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="15,18 9,12 15,6"></polyline>
                  </svg>
                </button>
                
                <div class="carousel-content">
                  <transition name="slide" mode="out-in">
                    <div :key="currentTestimonial" class="testimonial-slide">
                      <div class="testimonial-icon">
                        💬
                      </div>
                      <div class="testimonial-info">
                        <blockquote class="testimonial-content">
                          "{{ testimonials[currentTestimonial].content }}"
                        </blockquote>
                        <div class="testimonial-author">
                          <h4 class="author-name">{{ testimonials[currentTestimonial].author }}</h4>
                          <p class="author-position">{{ testimonials[currentTestimonial].position }}</p>
                        </div>
                      </div>
                    </div>
                  </transition>
                </div>
                
                <button class="nav-arrow right" @click="nextTestimonial" aria-label="Next testimonial">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <polyline points="9,18 15,12 9,6"></polyline>
                  </svg>
                </button>
              </div>
              
              <div class="testimonial-indicators">
                <button 
                  v-for="(testimonial, index) in testimonials"
                  :key="index"
                  class="indicator"
                  :class="{ active: currentTestimonial === index }"
                  @click="currentTestimonial = index"
                  :aria-label="`Go to testimonial ${index + 1}`"
                >
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="projects-section">
      <div class="projects-container">
        <div class="projects-grid">
          <!-- OPENCHS Project -->
          <div class="project-card">
            <div class="project-image bg-gray-900">
              <div class="project-image-inner">
                <span class="project-image-text">OPENCHS Dashboard</span>
              </div>
            </div>
            <div class="project-content">
              <div class="project-category bg-blue-100 text-blue-700">
                Child Protection
              </div>
              <h3 class="project-title">OPENCHIS - A Child Helpline System</h3>
              <p class="project-description">
                OPENCHIS is a comprehensive child helpline system that provides a safe and confidential environment
                for children.
              </p>
              <button class="read-more-button">
                Read more →
              </button>
            </div>
          </div>

          <!-- Legal Case Management -->
          <div class="project-card">
            <div class="project-image bg-gray-200">
              <span class="project-image-text">Case Study Image</span>
            </div>
            <div class="project-content">
              <div class="project-category bg-green-100 text-green-700">
                Legal
              </div>
              <h3 class="project-title">Case Management - Legal</h3>
              <p class="project-description">
                The Case Management System is designed to streamline the process of managing legal cases by providing
                a centralized platform for case management and case-related data.
              </p>
              <button class="read-more-button">
                Read more →
              </button>
            </div>
          </div>

          <!-- CRM for SACCOS -->
          <div class="project-card">
            <div class="project-image bg-gray-200">
              <span class="project-image-text">Case Study Image</span>
            </div>
            <div class="project-content">
              <div class="project-category bg-purple-100 text-purple-700">
                CRM, Finance
              </div>
              <h3 class="project-title">CRM for SACCOS</h3>
              <p class="project-description">
                CRM for SACCOS is a comprehensive software platform that simplifies and automates the entire lifecycle
                of Sacco operations.
              </p>
              <button class="read-more-button">
                Read more →
              </button>
            </div>
          </div>

          <!-- Document Management -->
          <div class="project-card">
            <div class="project-image bg-gray-200">
              <span class="project-image-text">Case Study Image</span>
            </div>
            <div class="project-content">
              <div class="project-category bg-orange-100 text-orange-700">
                Document Management
              </div>
              <h3 class="project-title">Electronic Document Management System (EDMS)</h3>
              <p class="project-description">
                The EDMS is designed to enhance document storage, retrieval, and security by providing an efficient
                platform for managing digital documents.
              </p>
              <button class="read-more-button">
                Read more →
              </button>
            </div>
          </div>

          <!-- Contract Management -->
          <div class="project-card">
            <div class="project-image bg-gray-200">
              <span class="project-image-text">Case Study Image</span>
            </div>
            <div class="project-content">
              <div class="project-category bg-red-100 text-red-700">
                Contract Management
              </div>
              <h3 class="project-title">Contract Management System</h3>
              <p class="project-description">
                A comprehensive platform for managing contracts from creation through execution, compliance, renewal,
                and closeout, ensuring compliance and optimizing performance.
              </p>
              <button class="read-more-button">
                Read more →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { testimonialsData } from '@/utils/Testimonials'

export default {
  name: 'Projects',
  data() {
    return {
      currentTestimonial: 0,
      testimonials: testimonialsData,
      autoTestimonialInterval: null
    }
  },
  methods: {
    nextTestimonial() {
      this.currentTestimonial = (this.currentTestimonial + 1) % this.testimonials.length
    },
    previousTestimonial() {
      this.currentTestimonial = this.currentTestimonial === 0 ? this.testimonials.length - 1 : this.currentTestimonial - 1
    },
    startAutoTestimonial() {
      this.autoTestimonialInterval = setInterval(() => {
        this.nextTestimonial()
      }, 4000)
    },
    stopAutoTestimonial() {
      if (this.autoTestimonialInterval) {
        clearInterval(this.autoTestimonialInterval)
        this.autoTestimonialInterval = null
      }
    }
  },
  mounted() {
    this.startAutoTestimonial()
  },
  beforeUnmount() {
    this.stopAutoTestimonial()
  }
}
</script>

<style scoped>
.hero-section {
  background-color: #0f172a;
  color: white;
  padding: 5rem 0;
  margin-top: 4rem;
}

.hero-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.hero-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.hero-badge {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  background-color: #2563eb;
  color: white;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.hero-title {
  font-size: 3rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.125rem;
  color: #cbd5e1;
  line-height: 1.6;
}

.hero-visual {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
}

.testimonials-showcase {
  width: 100%;
  max-width: 500px;
}

.showcase-title {
  text-align: center;
  font-size: 1.25rem;
  font-weight: 600;
  color: #cbd5e1;
  margin-bottom: 2rem;
}

.testimonials-carousel {
  position: relative;
  background: #3b82f6;
  border-radius: 30px;
  padding: 2rem;
  margin-bottom: 1.5rem;
  min-height: 250px;
  display: flex;
  align-items: center;
}

.nav-arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  width: 2rem;
  height: 2rem;
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
}

.nav-arrow:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-50%) scale(1.1);
}

.nav-arrow.left {
  left: 1rem;
}

.nav-arrow.right {
  right: 1rem;
}

.carousel-content {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 3rem;
}

.testimonial-slide {
  text-align: center;
  width: 100%;
  color: white;
}

.testimonial-icon {
  font-size: 3rem;
  margin-bottom: 1.5rem;
}

.testimonial-content {
  font-size: 1rem;
  font-style: italic;
  margin-bottom: 1.5rem;
  line-height: 1.6;
}

.author-name {
  font-size: 1.1rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
}

.author-position {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.8);
}

.testimonial-indicators {
  display: flex;
  justify-content: center;
  gap: 0.5rem;
}

.indicator {
  width: 0.75rem;
  height: 0.75rem;
  border-radius: 30px;
  border: none;
  background: rgba(255, 255, 255, 0.3);
  cursor: pointer;
  transition: all 0.3s ease;
}

.indicator.active {
  background: white;
  transform: scale(1.2);
}

.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}

.slide-enter-from {
  opacity: 0;
  transform: translateX(30px);
}

.slide-leave-to {
  opacity: 0;
  transform: translateX(-30px);
}

.projects-section {
  padding: 4rem 0;
}

.projects-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 2rem;
}

.project-card {
  background: white;
  border-radius: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.project-image {
  height: 12rem;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.bg-gray-900 {
  background-color: #111827;
}

.bg-gray-200 {
  background-color: #e5e7eb;
}

.project-image-inner {
  width: 100%;
  height: 100%;
  background-color: #1f2937;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.project-image-text {
  color: #9ca3af;
  font-size: 0.875rem;
}

.bg-gray-200 .project-image-text {
  color: #6b7280;
}

.project-content {
  padding: 1.5rem;
}

.project-category {
  display: inline-flex;
  align-items: center;
  padding: 0.25rem 0.75rem;
  border-radius: 30px;
  font-size: 0.75rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.bg-blue-100 {
  background-color: #dbeafe;
}

.text-blue-700 {
  color: #1d4ed8;
}

.bg-green-100 {
  background-color: #dcfce7;
}

.text-green-700 {
  color: #15803d;
}

.bg-purple-100 {
  background-color: #f3e8ff;
}

.text-purple-700 {
  color: #7c3aed;
}

.bg-orange-100 {
  background-color: #fed7aa;
}

.text-orange-700 {
  color: #c2410c;
}

.bg-red-100 {
  background-color: #fee2e2;
}

.text-red-700 {
  color: #dc2626;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #111827;
}

.project-description {
  color: #6b7280;
  margin-bottom: 1rem;
  line-height: 1.5;
}

.read-more-button {
  background: none;
  border: none;
  color: #2563eb;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 30px;
}

.read-more-button:hover {
  color: #1d4ed8;
  background: #f0f9ff;
}

@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .hero-title {
    font-size: 2rem;
  }
}
</style>
