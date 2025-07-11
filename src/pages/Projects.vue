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
              Discover the impact of our work through our featured projects.
            </p>
          </div>
          <div class="hero-visual">
            <div class="visual-card">
              <div class="visual-icon">📊</div>
            </div>
            <button class="nav-button left" aria-label="Previous project">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="15,18 9,12 15,6"></polyline>
              </svg>
            </button>
            <button class="nav-button right" aria-label="Next project">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="9,18 15,12 9,6"></polyline>
              </svg>
            </button>
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

<script setup>
// No additional logic needed for this component
</script>

<style scoped>
.hero-section {
  background-color: #0f172a;
  color: white;
  padding: 5rem 0;
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
  position: relative;
  display: flex;
  justify-content: center;
}

.visual-card {
  background-color: #2563eb;
  border-radius: 30px;
  padding: 2rem;
  height: 16rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.visual-icon {
  font-size: 6rem;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  cursor: pointer;
  transition: all 0.3s ease;
  width: 2.5rem;
  height: 2.5rem;
  border-radius: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav-button:hover {
  background: rgba(255, 255, 255, 0.3);
  transform: translateY(-50%) scale(1.1);
}

.nav-button.left {
  left: 1rem;
}

.nav-button.right {
  right: 1rem;
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
