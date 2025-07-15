<template>
  <div class="projects-page">
    <!-- Hero Section -->
    <section class="hero-section bg-blue-600 text-white">
      <div class="container-custom">
        <div class="hero-content">
          <div class="hero-text">
            <div class="hero-badge">
              Our Projects
            </div>
            <h1 class="hero-title">Transformative Solutions in Action</h1>
            <p class="hero-description">
              Explore our portfolio of successful projects that have transformed businesses and communities across East Africa. From digital transformation to AI implementation, see how we turn vision into reality.
            </p>
            <div class="hero-stats">
              <div class="stat">
                <div class="stat-number">100+</div>
                <div class="stat-label">Projects Completed</div>
              </div>
              <div class="stat">
                <div class="stat-number">4</div>
                <div class="stat-label">Countries</div>
              </div>
              <div class="stat">
                <div class="stat-number">98%</div>
                <div class="stat-label">Success Rate</div>
              </div>
            </div>
          </div>
          <div class="hero-visual">
            <div class="visual-card liquid-glass">
              <Briefcase :size="80" class="text-white" />
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Filter Section -->
    <section class="filter-section">
      <div class="filter-container">
        <div class="filter-controls">
          <div class="search-container">
            <div class="search-input-wrapper">
              <Search :size="20" class="search-icon" />
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search projects..."
                class="search-input"
              />
            </div>
          </div>
          <div class="category-filters">
            <button 
              v-for="category in projectCategories"
              :key="category"
              class="filter-btn"
              :class="{ active: activeCategory === category }"
              @click="setActiveCategory(category)"
            >
              {{ category }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="projects-section">
      <div class="projects-container">
        <transition name="fade" mode="out-in">
          <div :key="activeCategory" class="projects-grid">
            <div 
              v-for="project in filteredProjects" 
              :key="project.id"
              class="project-card"
              @click="openProjectModal(project)"
            >
              <div class="project-image">
                <img 
                  :src="project.imageUrl" 
                  :alt="project.title"
                  class="project-img"
                />
                <div class="project-overlay">
                  <div class="overlay-content">
                    <Eye :size="24" class="text-white mb-2" />
                    <span class="overlay-text">View Details</span>
                  </div>
                </div>
              </div>
              
              <div class="project-content">
                <div class="project-header">
                  <div class="project-category">
                    <component :is="getCategoryIcon(project.category)" :size="16" class="category-icon" />
                    <span>{{ project.category }}</span>
                  </div>
                  <div class="project-status" :class="project.status.toLowerCase()">
                    {{ project.status }}
                  </div>
                </div>
                
                <h3 class="project-title">{{ project.title }}</h3>
                <p class="project-description">{{ project.description }}</p>
                
                <div class="project-technologies">
                  <span 
                    v-for="tech in project.technologies.slice(0, 3)" 
                    :key="tech" 
                    class="tech-tag"
                  >
                    {{ tech }}
                  </span>
                  <span v-if="project.technologies.length > 3" class="tech-more">
                    +{{ project.technologies.length - 3 }} more
                  </span>
                </div>
                
                <div class="project-footer">
                  <div class="project-metrics">
                    <div class="metric">
                      <Calendar :size="14" />
                      <span>{{ project.duration }}</span>
                    </div>
                    <div class="metric">
                      <Users :size="14" />
                      <span>{{ project.teamSize }}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </section>

    <!-- Project Detail Modal -->
    <div v-if="selectedProject" class="modal-overlay" @click="closeProjectModal">
      <div class="project-modal" @click.stop>
        <button class="modal-close" @click="closeProjectModal">
          <X :size="24" />
        </button>
        
        <div class="modal-content">
          <!-- Modal Header -->
          <div class="modal-header">
            <div class="modal-title-section">
              <div class="modal-category">
                <component :is="getCategoryIcon(selectedProject.category)" :size="20" class="category-icon" />
                <span>{{ selectedProject.category }}</span>
              </div>
              <h2 class="modal-title">{{ selectedProject.title }}</h2>
              <p class="modal-subtitle">{{ selectedProject.client }}</p>
            </div>
            <div class="modal-status" :class="selectedProject.status.toLowerCase()">
              {{ selectedProject.status }}
            </div>
          </div>

          <!-- Project Image -->
          <div class="modal-image">
            <img 
              :src="selectedProject.imageUrl" 
              :alt="selectedProject.title"
              class="modal-img"
            />
          </div>

          <!-- Project Overview -->
          <div class="modal-section">
            <h3 class="section-heading">Project Overview</h3>
            <p class="section-text">{{ selectedProject.fullDescription }}</p>
          </div>

          <!-- Key Metrics -->
          <div class="modal-section">
            <h3 class="section-heading">Key Metrics</h3>
            <div class="metrics-grid">
              <div class="metric-item">
                <div class="metric-value">{{ selectedProject.metrics.efficiency }}</div>
                <div class="metric-label">Efficiency Improvement</div>
              </div>
              <div class="metric-item">
                <div class="metric-value">{{ selectedProject.metrics.cost }}</div>
                <div class="metric-label">Cost Reduction</div>
              </div>
              <div class="metric-item">
                <div class="metric-value">{{ selectedProject.duration }}</div>
                <div class="metric-label">Project Duration</div>
              </div>
              <div class="metric-item">
                <div class="metric-value">{{ selectedProject.teamSize }}</div>
                <div class="metric-label">Team Size</div>
              </div>
            </div>
          </div>

          <!-- Technologies Used -->
          <div class="modal-section">
            <h3 class="section-heading">Technologies Used</h3>
            <div class="technologies-grid">
              <span 
                v-for="tech in selectedProject.technologies" 
                :key="tech" 
                class="technology-badge"
              >
                {{ tech }}
              </span>
            </div>
          </div>

          <!-- Key Features -->
          <div class="modal-section">
            <h3 class="section-heading">Key Features Delivered</h3>
            <div class="features-list">
              <div 
                v-for="feature in selectedProject.features" 
                :key="feature"
                class="feature-item"
              >
                <CheckCircle :size="16" class="feature-icon" />
                <span>{{ feature }}</span>
              </div>
            </div>
          </div>

          <!-- Challenges & Solutions -->
          <div class="modal-section">
            <h3 class="section-heading">Challenges & Solutions</h3>
            <div class="challenges-grid">
              <div class="challenge-item">
                <h4>Challenge</h4>
                <p>{{ selectedProject.challenge }}</p>
              </div>
              <div class="solution-item">
                <h4>Solution</h4>
                <p>{{ selectedProject.solution }}</p>
              </div>
            </div>
          </div>

          <!-- Modal Actions -->
          <div class="modal-actions">
            <router-link to="/contact" class="btn btn-primary" @click="closeProjectModal">
              Start Similar Project
              <ArrowRight :size="16" class="ml-2" />
            </router-link>
            <button class="btn btn-outline" @click="closeProjectModal">
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { projectsData } from '@/utils/ProductData.js'
import { 
  Briefcase, 
  Search, 
  Eye, 
  ArrowRight, 
  Calendar, 
  Users, 
  X, 
  CheckCircle,
  Factory,
  Shield,
  Building,
  Smartphone,
  Globe,
  Database
} from 'lucide-vue-next'

// Reactive data
const activeCategory = ref('All Projects')
const selectedProject = ref(null)
const searchQuery = ref('')

const projectCategories = [
  'All Projects', 
  'Digital Transformation', 
  'Child Protection', 
  'Manufacturing', 
  'Government', 
  'Healthcare',
  'Finance'
]

// Projects data

// Computed properties
const filteredProjects = computed(() => {
  let projects = projectsData
  
  // Filter by category
  if (activeCategory.value !== 'All Projects') {
    projects = projects.filter(project => project.category === activeCategory.value)
  }
  
  // Filter by search query
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    projects = projects.filter(project => 
      project.title.toLowerCase().includes(query) ||
      project.description.toLowerCase().includes(query) ||
      project.client.toLowerCase().includes(query) ||
      project.technologies.some(tech => tech.toLowerCase().includes(query))
    )
  }
  
  return projects
})

// Methods
const setActiveCategory = (category) => {
  activeCategory.value = category
}

const openProjectModal = (project) => {
  selectedProject.value = project
}

const closeProjectModal = () => {
  selectedProject.value = null
  document.body.style.overflow = 'auto'
}

const getCategoryIcon = (category) => {
  switch (category) {
    case 'Manufacturing': return Factory
    case 'Child Protection': return Shield
    case 'Government': return Building
    case 'Healthcare': return Smartphone
    case 'Finance': return Database
    default: return Globe
  }
}
</script>

<style scoped>
/* Hero Section */
.hero-section {
  background: #000;
  color: white;
  padding: 6rem 0 3rem;
  margin-top: 0;
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
  margin-bottom: 2rem;
}

.hero-stats {
  display: flex;
  gap: 2rem;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 2rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 0.25rem;
}

.stat-label {
  font-size: 0.875rem;
  color: #94a3b8;
}

.hero-visual {
  display: flex;
  justify-content: center;
}

.visual-card {
  background: rgba(255,255,255,0.15);
  border-radius: 30px;
  padding: 3rem;
  height: 16rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1.5px solid rgba(255,255,255,0.25);
}

/* Filter Section */
.filter-section {
  padding: 2rem 0;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
}

.filter-container {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 1rem;
}

.filter-controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  flex-wrap: wrap;
}

.search-container {
  flex: 1;
  max-width: 400px;
}

.search-input-wrapper {
  position: relative;
}

.search-icon {
  position: absolute;
  left: 1rem;
  top: 50%;
  transform: translateY(-50%);
  color: #6b7280;
}

.search-input {
  width: 100%;
  padding: 0.75rem 1rem 0.75rem 3rem;
  border: 2px solid #e5e7eb;
  border-radius: 30px;
  font-size: 1rem;
  transition: all 0.3s ease;
  background: white;
}

.search-input:focus {
  outline: none;
  border-color: #3b82f6;
  box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
}

.category-filters {
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
}

.filter-btn {
  padding: 0.5rem 1rem;
  border: 2px solid #e5e7eb;
  background: white;
  border-radius: 30px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.875rem;
}

.filter-btn:hover,
.filter-btn.active {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
  transform: translateY(-2px);
}

/* Projects Section */
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
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
}

.project-card {
  background: white;
  border-radius: 30px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  transition: all 0.3s ease;
  cursor: pointer;
  border: 1px solid #e5e7eb;
}

.project-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
}

.project-image {
  position: relative;
  height: 200px;
  overflow: hidden;
}

.project-img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.project-card:hover .project-img {
  transform: scale(1.1);
}

.project-overlay {
  position: absolute;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.project-card:hover .project-overlay {
  opacity: 1;
}

.overlay-content {
  text-align: center;
  color: white;
}

.overlay-text {
  font-weight: 600;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.project-content {
  padding: 1.5rem;
}

.project-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
}

.project-category {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #f0f9ff;
  color: #0369a1;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.category-icon {
  flex-shrink: 0;
}

.project-status {
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 600;
  text-transform: uppercase;
}

.project-status.completed {
  background: #dcfce7;
  color: #15803d;
}

.project-status.in-progress {
  background: #fef3c7;
  color: #d97706;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.75rem;
  line-height: 1.3;
}

.project-description {
  color: #6b7280;
  line-height: 1.6;
  margin-bottom: 1rem;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.project-technologies {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1rem;
}

.tech-tag {
  background: #f1f5f9;
  color: #475569;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
}

.tech-more {
  background: #e5e7eb;
  color: #6b7280;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
}

.project-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.project-metrics {
  display: flex;
  gap: 1rem;
}

.metric {
  display: flex;
  align-items: center;
  gap: 0.25rem;
  color: #6b7280;
  font-size: 0.875rem;
}

.learn-more-btn {
  background: none;
  border: none;
  color: #3b82f6;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.875rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  display: flex;
  align-items: center;
}

.learn-more-btn:hover {
  color: #2563eb;
  background: #f0f9ff;
}

.ml-1 {
  margin-left: 0.25rem;
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(4px);
  z-index: 50;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.project-modal {
  background: white;
  border-radius: 30px;
  max-width: 4xl;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 50%;
  background: #f3f4f6;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 1;
}

.modal-close:hover {
  background: #e5e7eb;
  transform: scale(1.1);
}

.modal-content {
  padding: 2rem;
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.modal-category {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #f0f9ff;
  color: #0369a1;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 1rem;
}

.modal-title {
  font-size: 2rem;
  font-weight: 700;
  color: #111827;
  margin-bottom: 0.5rem;
  line-height: 1.3;
}

.modal-subtitle {
  color: #6b7280;
  font-size: 1.125rem;
}

.modal-status {
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 600;
  text-transform: uppercase;
  margin-top: 1rem;
}

.modal-image {
  margin-bottom: 2rem;
}

.modal-img {
  width: 100%;
  height: 20rem;
  object-fit: cover;
  border-radius: 20px;
}

.modal-section {
  margin-bottom: 2rem;
}

.section-heading {
  font-size: 1.5rem;
  font-weight: 600;
  margin-bottom: 1rem;
  color: #111827;
}

.section-text {
  color: #6b7280;
  line-height: 1.7;
  font-size: 1.125rem;
}

.metrics-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 1rem;
}

.metric-item {
  text-align: center;
  padding: 1.5rem;
  background: #f9fafb;
  border-radius: 20px;
  border: 1px solid #e5e7eb;
}

.metric-value {
  font-size: 2rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 0.5rem;
}

.metric-label {
  font-size: 0.875rem;
  color: #6b7280;
}

.technologies-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.75rem;
}

.technology-badge {
  background: #1e293b;
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.features-list {
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.feature-item {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem;
  background: #f9fafb;
  border-radius: 15px;
}

.feature-icon {
  color: #10b981;
  flex-shrink: 0;
}

.challenges-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
}

.challenge-item,
.solution-item {
  padding: 1.5rem;
  border-radius: 20px;
}

.challenge-item {
  background: #fef2f2;
  border: 1px solid #fecaca;
}

.solution-item {
  background: #f0fdf4;
  border: 1px solid #bbf7d0;
}

.challenge-item h4,
.solution-item h4 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.challenge-item h4 {
  color: #dc2626;
}

.solution-item h4 {
  color: #16a34a;
}

.challenge-item p,
.solution-item p {
  line-height: 1.6;
  color: #374151;
}

.modal-actions {
  display: flex;
  gap: 1rem;
  justify-content: flex-end;
  padding-top: 1.5rem;
  border-top: 1px solid #e5e7eb;
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
  text-decoration: none;
}

.btn-primary {
  background: #3b82f6;
  color: white;
  border-color: #3b82f6;
}

.btn-primary:hover {
  background: #2563eb;
  border-color: #2563eb;
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  border: 2px solid #e5e7eb;
  color: #374151;
}

.btn-outline:hover {
  background: #f9fafb;
  border-color: #d1d5db;
}

.ml-2 {
  margin-left: 0.5rem;
}

/* Transitions */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

/* Responsive Design */
@media (max-width: 1024px) {
  .hero-content {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
  
  .filter-controls {
    flex-direction: column;
    align-items: stretch;
  }
  
  .search-container {
    max-width: none;
  }
  
  .category-filters {
    justify-content: center;
  }
  
  .projects-grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
}

@media (max-width: 768px) {
  .hero-stats {
    justify-content: center;
    gap: 1rem;
  }
  
  .projects-grid {
    grid-template-columns: 1fr;
  }
  
  .project-footer {
    flex-direction: column;
    gap: 1rem;
    align-items: flex-start;
  }
  
  .modal-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .modal-status {
    margin-top: 0;
  }
  
  .challenges-grid {
    grid-template-columns: 1fr;
  }
  
  .metrics-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .modal-actions {
    flex-direction: column;
  }
}
</style>
