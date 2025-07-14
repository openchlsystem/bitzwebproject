<template>
  <div class="our-team">
    <!-- Hero Section -->
    <section class="hero-section">
      <div class="hero-background">
        <div class="floating-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
        </div>
      </div>
      <div class="container hero-content">
        <div class="hero-text">
          <div class="badge badge-primary">Meet Our Team</div>
          <h1 class="hero-title">The Minds Behind Innovation</h1>
          <p class="hero-description">
            Our diverse team of experts combines technical excellence with creative vision to deliver 
            transformative technology solutions that drive your business forward.
          </p>
          <div class="hero-stats">
            <div class="stat">
              <div class="stat-number">{{ totalTeamMembers }}+</div>
              <div class="stat-label">Team Members</div>
            </div>
            <div class="stat">
              <div class="stat-number">15+</div>
              <div class="stat-label">Years Experience</div>
            </div>
            <div class="stat">
              <div class="stat-number">100+</div>
              <div class="stat-label">Projects Delivered</div>
            </div>
          </div>
        </div>
        <div class="hero-visual">
          <div class="team-showcase">
            <div class="showcase-grid">
              <div v-for="(member, index) in featuredMembers" :key="member.id"
                   class="showcase-item"
                   :style="{ animationDelay: `${index * 0.2}s` }">
                <img :src="member.image" :alt="member.name" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Search and Filter Section -->
    <section class="filter-section">
      <div class="container">
        <div class="filter-controls">
          <div class="search-container">
            <div class="search-input-wrapper">
              <Search :size="20" class="search-icon" />
              <input
                v-model="searchQuery"
                type="text"
                placeholder="Search team members..."
                class="search-input"
              />
            </div>
          </div>
          <div class="category-filters">
            <button 
              v-for="category in teamCategories"
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

    <!-- Leadership Team -->
    <section class="section leadership-section">
      <div class="container">
        <div class="section-header">
          <div class="badge badge-primary">Leadership</div>
          <h2 class="section-title">Executive Leadership</h2>
          <p class="section-description">
            Visionary leaders steering our company towards technological excellence and sustainable growth.
          </p>
        </div>
        <div class="leadership-grid">
          <div v-for="member in filteredLeadership" :key="member.id" class="leadership-card">
            <div class="card-inner">
              <div class="card-front">
                <div class="member-image">
                  <img :src="member.image" :alt="member.name" />
                  <div class="image-overlay">
                    <div class="social-links">
                      <button class="social-link" @click="openMemberModal(member)">
                        <Eye :size="20" />
                      </button>
                      <button class="social-link">
                        <Mail :size="20" />
                      </button>
                      <button class="social-link">
                        <Linkedin :size="20" />
                      </button>
                    </div>
                  </div>
                </div>
                <div class="member-info">
                  <h3 class="member-name">{{ member.name }}</h3>
                  <p class="member-position">{{ member.position }}</p>
                </div>
              </div>
              <div class="card-back">
                <div class="member-details">
                  <h3 class="member-name">{{ member.name }}</h3>
                  <p class="member-bio">{{ member.description }}</p>
                  <div class="member-expertise">
                    <h4>Expertise</h4>
                    <div class="expertise-tags">
                      <span v-for="skill in member.skills" :key="skill" class="expertise-tag">
                        {{ skill }}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Members -->
    <section class="section team-section">
      <div class="container">
        <div class="section-header">
          <div class="badge badge-primary">Our Teams</div>
          <h2 class="section-title">Specialized Excellence</h2>
          <p class="section-description">
            Meet our specialized teams driving innovation across different domains.
          </p>
        </div>
        
        <transition name="fade" mode="out-in">
          <div :key="activeCategory" class="team-grid">
            <div v-for="member in filteredTeamMembers" :key="member.id" class="team-card">
              <div class="team-card-content">
                <div class="member-avatar">
                  <img :src="member.image" :alt="member.name" />
                  <div class="status-indicator"></div>
                </div>
                <div class="member-content">
                  <h3 class="member-name">{{ member.name }}</h3>
                  <p class="member-role">{{ member.position }}</p>
                  <p class="member-description">{{ member.description }}</p>
                  <div class="member-skills">
                    <span v-for="skill in member.skills?.slice(0, 3)" :key="skill" class="skill-tag">
                      {{ skill }}
                    </span>
                  </div>
                </div>
                <div class="member-actions">
                  <button class="action-btn" @click="openMemberModal(member)">
                    <Eye :size="16" />
                  </button>
                  <button class="action-btn">
                    <Mail :size="16" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </transition>
      </div>
    </section>

    <!-- Member Details Modal -->
    <div v-if="selectedMember" class="modal-overlay" @click="closeMemberModal">
      <div class="member-modal" @click.stop>
        <button class="modal-close" @click="closeMemberModal">
          <X :size="24" />
        </button>
        <div class="modal-content">
          <div class="modal-header">
            <img :src="selectedMember.image" :alt="selectedMember.name" />
            <div class="modal-member-info">
              <h3>{{ selectedMember.name }}</h3>
              <p>{{ selectedMember.position }}</p>
              <div class="member-contact">
                <button class="contact-btn">
                  <Mail :size="16" />
                  <span>Email</span>
                </button>
                <button class="contact-btn">
                  <Linkedin :size="16" />
                  <span>LinkedIn</span>
                </button>
              </div>
            </div>
          </div>
          <div class="modal-body">
            <p>{{ selectedMember.description }}</p>
            <div v-if="selectedMember.skills" class="modal-skills">
              <h4>Skills & Expertise</h4>
              <div class="skills-grid">
                <span v-for="skill in selectedMember.skills" :key="skill" class="skill-badge">
                  {{ skill }}
                </span>
              </div>
            </div>
            <div v-if="selectedMember.achievements" class="modal-achievements">
              <h4>Key Achievements</h4>
              <ul class="achievements-list">
                <li v-for="achievement in selectedMember.achievements" :key="achievement">
                  {{ achievement }}
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import { Search, Eye, Mail, Linkedin, X } from 'lucide-vue-next'

// Reactive data
const activeCategory = ref('All Teams')
const selectedMember = ref(null)
const searchQuery = ref('')

const teamCategories = ['All Teams', 'Leadership', 'Development', 'AI & Data', 'Finance', 'Management', 'Partners']

// Team data
const leadership = [
  {
    id: 1,
    name: 'James Kaminju',
    position: 'Chief Executive Officer',
    description: 'Leading BITZ Inc with vision and expertise, driving our company\'s growth and innovation in technology solutions. James brings over 15 years of experience in technology leadership and business development.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
    skills: ['Strategic Leadership', 'Business Development', 'Technology Vision', 'Team Building'],
    category: 'Leadership',
    achievements: [
      'Led company growth from startup to regional leader',
      'Established partnerships with UNICEF and World Bank',
      'Expanded operations across 4 East African countries'
    ]
  },
  {
    id: 2,
    name: 'Mercy Kamau',
    position: 'Director of Finance',
    description: 'Developing and implementing strategic financial initiatives to drive business growth and market leadership. Mercy ensures financial stability and sustainable growth.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face',
    skills: ['Financial Strategy', 'Risk Management', 'Investment Planning', 'Business Analysis'],
    category: 'Leadership',
    achievements: [
      'Implemented robust financial controls',
      'Secured funding for major expansion projects',
      'Optimized operational costs by 30%'
    ]
  },
  {
    id: 3,
    name: 'Nelson Adagi',
    position: 'Systems Manager',
    description: 'Ensuring successful delivery of projects through effective planning, execution, and team leadership. Nelson oversees all technical operations and system architecture.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
    skills: ['Project Management', 'System Architecture', 'Team Leadership', 'Process Optimization'],
    category: 'Management',
    achievements: [
      'Successfully delivered 100+ projects',
      'Established quality assurance processes',
      'Built high-performing technical teams'
    ]
  },
  {
    id: 4,
    name: 'Joseph Kimani',
    position: 'Technical Lead',
    description: 'Leading technical innovation and ensuring the highest standards in our technology solutions. Joseph drives our technical strategy and mentors development teams.',
    image: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?w=150&h=150&fit=crop&crop=face',
    skills: ['Technical Architecture', 'Code Review', 'Mentoring', 'Innovation Strategy'],
    category: 'Leadership',
    achievements: [
      'Architected scalable solutions for major clients',
      'Mentored 50+ developers',
      'Introduced modern development practices'
    ]
  }
]

const specializedTeam = [
  {
    id: 5,
    name: 'Joan Njoki',
    position: 'Head of Finance',
    description: 'Managing financial operations and strategic financial planning for sustainable growth.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
    category: 'Finance',
    skills: ['Financial Planning', 'Budget Management', 'Financial Analysis', 'Compliance']
  },
  {
    id: 6,
    name: 'Franklin Karanja',
    position: 'Lead AI Developer',
    description: 'Spearheading AI initiatives and machine learning solutions for innovative applications.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&h=150&fit=crop&crop=face',
    category: 'AI & Data',
    skills: ['Machine Learning', 'Deep Learning', 'Python', 'TensorFlow', 'Data Science']
  },
  {
    id: 7,
    name: 'Miriam Shem',
    position: 'Head of Social Media and AI Developer',
    description: 'Combining social media expertise with AI development for enhanced digital experiences.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop&crop=face',
    category: 'AI & Data',
    skills: ['Social Media Strategy', 'AI Development', 'Content Strategy', 'Digital Marketing']
  },
  {
    id: 8,
    name: 'Phyllis Kamau',
    position: 'CI/CD and Deployment',
    description: 'Ensuring smooth and efficient deployment processes through robust CI/CD pipelines.',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=150&h=150&fit=crop&crop=face',
    category: 'Development',
    skills: ['DevOps', 'CI/CD', 'Docker', 'Kubernetes', 'Cloud Deployment']
  },
  {
    id: 9,
    name: 'Jude Angedu',
    position: 'Backend Development',
    description: 'Building robust and scalable backend systems for our applications.',
    image: 'https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop&crop=face',
    category: 'Development',
    skills: ['Node.js', 'Python', 'Database Design', 'API Development', 'System Architecture']
  },
  {
    id: 10,
    name: 'Peter Rogendo',
    position: 'Backend Development',
    description: 'Contributing to the development of efficient and reliable backend services.',
    image: 'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=150&h=150&fit=crop&crop=face',
    category: 'Development',
    skills: ['Java', 'Spring Boot', 'Microservices', 'Database Optimization', 'Security']
  },
  {
    id: 11,
    name: 'Newton Brian',
    position: 'UI/UX and Frontend Development',
    description: 'Designing and implementing user-friendly interfaces and engaging frontend experiences.',
    image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop&crop=face',
    category: 'Development',
    skills: ['React', 'Vue.js', 'UI/UX Design', 'Responsive Design', 'User Experience']
  },
  {
    id: 12,
    name: 'Marion',
    position: 'Software Intern',
    description: 'Backend and mobile CRMs, contributing to the development of our applications.',
    image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face',
    category: 'Development',
    skills: ['Mobile Development', 'CRM Systems', 'Backend Development', 'Learning & Growth']
  }
]

// Partners data
const partners = [
  {
    id: 13,
    name: 'UNICEF Kenya',
    position: 'Strategic Partner',
    description: 'Long-term partnership in child protection and welfare systems development.',
    image: 'https://via.placeholder.com/150x150/1976d2/ffffff?text=UNICEF',
    category: 'Partners',
    skills: ['Child Protection', 'System Integration', 'Training', 'Support']
  },
  {
    id: 14,
    name: 'World Bank',
    position: 'Development Partner',
    description: 'Collaboration on digital transformation and governance projects.',
    image: 'https://via.placeholder.com/150x150/388e3c/ffffff?text=WB',
    category: 'Partners',
    skills: ['Digital Governance', 'Capacity Building', 'Project Management', 'Consulting']
  },
  {
    id: 15,
    name: 'Kenya Government',
    position: 'Government Partner',
    description: 'Supporting government digitization and e-governance initiatives.',
    image: 'https://via.placeholder.com/150x150/f57c00/ffffff?text=GOK',
    category: 'Partners',
    skills: ['E-Governance', 'Digital Services', 'Policy Implementation', 'Training']
  }
]

// Computed properties
const totalTeamMembers = computed(() => {
  return leadership.length + specializedTeam.length
})

const featuredMembers = computed(() => {
  return [...leadership.slice(0, 2), ...specializedTeam.slice(0, 4)]
})

const allMembers = computed(() => {
  return [...leadership, ...specializedTeam, ...partners]
})

const filteredLeadership = computed(() => {
  if (activeCategory.value === 'All Teams') {
    return leadership
  }
  if (activeCategory.value === 'Leadership') {
    return leadership
  }
  return []
})

const filteredTeamMembers = computed(() => {
  let members = []
  
  if (activeCategory.value === 'All Teams') {
    members = [...specializedTeam, ...partners]
  } else if (activeCategory.value === 'Leadership') {
    members = []
  } else if (activeCategory.value === 'Partners') {
    members = partners
  } else {
    members = specializedTeam.filter(member => member.category === activeCategory.value)
  }
  
  // Apply search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    members = members.filter(member => 
      member.name.toLowerCase().includes(query) ||
      member.position.toLowerCase().includes(query) ||
      member.description.toLowerCase().includes(query)
    )
  }
  
  return members
})

// Methods
const setActiveCategory = (category) => {
  activeCategory.value = category
}

const openMemberModal = (member) => {
  selectedMember.value = member
  document.body.style.overflow = 'hidden'
}

const closeMemberModal = () => {
  selectedMember.value = null
  document.body.style.overflow = 'auto'
}
</script>

<style scoped>
/* Hero Section */
.hero-section {
  position: relative;
  background: linear-gradient(135deg, #1e293b 0%, #334155 100%);
  color: white;
  padding: 8rem 0 4rem;
  margin-top: 4rem;
  overflow: hidden;
}

.hero-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow: hidden;
}

.floating-shapes {
  position: absolute;
  width: 100%;
  height: 100%;
}

.shape {
  position: absolute;
  border-radius: 30px;
  background: rgba(59, 130, 246, 0.1);
  animation: float 6s ease-in-out infinite;
}

.shape-1 {
  width: 200px;
  height: 200px;
  top: 10%;
  right: 10%;
  animation-delay: 0s;
}

.shape-2 {
  width: 150px;
  height: 150px;
  bottom: 20%;
  left: 5%;
  animation-delay: 2s;
}

.shape-3 {
  width: 100px;
  height: 100px;
  top: 50%;
  left: 50%;
  animation-delay: 4s;
}

@keyframes float {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(180deg); }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.section {
  padding: 4rem 0;
}

.hero-content {
  position: relative;
  z-index: 2;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
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

.hero-title {
  font-size: 3.5rem;
  font-weight: 700;
  margin: 1rem 0 1.5rem;
  line-height: 1.2;
}

.hero-description {
  font-size: 1.125rem;
  color: #cbd5e1;
  line-height: 1.7;
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

.team-showcase {
  display: flex;
  justify-content: center;
}

.showcase-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
  max-width: 300px;
}

.showcase-item {
  width: 80px;
  height: 80px;
  border-radius: 30px;
  overflow: hidden;
  animation: slideInUp 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(30px);
}

.showcase-item img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

@keyframes slideInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Filter Section */
.filter-section {
  padding: 2rem 0;
  background: #f8fafc;
  border-bottom: 1px solid #e2e8f0;
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

/* Leadership Section */
.leadership-section {
  padding: 5rem 0;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin: 1rem 0;
  color: #1e293b;
}

.section-description {
  font-size: 1.125rem;
  color: #64748b;
  margin-bottom: 2rem;
}

.leadership-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
}

.leadership-card {
  perspective: 1000px;
  height: 400px;
}

.card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.6s;
  transform-style: preserve-3d;
  cursor: pointer;
}

.leadership-card:hover .card-inner {
  transform: rotateY(180deg);
}

.card-front,
.card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  border-radius: 30px;
  padding: 2rem;
  background: white;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.card-back {
  transform: rotateY(180deg);
  background: #1e293b;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.member-image {
  position: relative;
  width: 120px;
  height: 120px;
  margin: 0 auto 1.5rem;
  border-radius: 30px;
  overflow: hidden;
}

.member-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity 0.3s ease;
}

.member-image:hover .image-overlay {
  opacity: 1;
}

.social-links {
  display: flex;
  gap: 0.5rem;
}

.social-link {
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
}

.social-link:hover {
  background: #3b82f6;
  transform: scale(1.1);
}

.member-name {
  font-size: 1.25rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #1e293b;
}

.card-back .member-name {
  color: white;
}

.member-position {
  color: #3b82f6;
  font-weight: 500;
  margin-bottom: 1rem;
}

.member-bio {
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.member-expertise h4 {
  font-size: 1rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
}

.expertise-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.expertise-tag {
  background: rgba(59, 130, 246, 0.2);
  color: #3b82f6;
  padding: 0.25rem 0.75rem;
  border-radius: 30px;
  font-size: 0.75rem;
  font-weight: 500;
}

/* Team Section */
.team-section {
  padding: 5rem 0;
  background: #f8fafc;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 1.5rem;
}

.team-card {
  background: white;
  border-radius: 30px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.team-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
}

.team-card-content {
  padding: 1.5rem;
  display: flex;
  gap: 1rem;
}

.member-avatar {
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 30px;
  overflow: hidden;
  flex-shrink: 0;
}

.member-avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.status-indicator {
  position: absolute;
  bottom: 2px;
  right: 2px;
  width: 12px;
  height: 12px;
  background: #10b981;
  border: 2px solid white;
  border-radius: 50%;
}

.member-content {
  flex: 1;
}

.member-role {
  color: #3b82f6;
  font-size: 0.875rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
}

.member-description {
  color: #64748b;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.member-skills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.skill-tag {
  background: #f1f5f9;
  color: #475569;
  padding: 0.125rem 0.5rem;
  border-radius: 30px;
  font-size: 0.75rem;
  font-weight: 500;
}

.member-actions {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.action-btn {
  width: 2rem;
  height: 2rem;
  border: none;
  background: #f1f5f9;
  color: #64748b;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.action-btn:hover {
  background: #3b82f6;
  color: white;
  transform: scale(1.1);
}

/* Modal Styles */
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 1rem;
}

.member-modal {
  background: white;
  border-radius: 30px;
  max-width: 600px;
  width: 100%;
  max-height: 80vh;
  overflow-y: auto;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
  width: 2.5rem;
  height: 2.5rem;
  border: none;
  background: #f1f5f9;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1;
  transition: all 0.3s ease;
}

.modal-close:hover {
  background: #e2e8f0;
  transform: scale(1.1);
}

.modal-content {
  padding: 2rem;
}

.modal-header {
  display: flex;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1.5rem;
  border-bottom: 1px solid #e5e7eb;
}

.modal-header img {
  width: 80px;
  height: 80px;
  border-radius: 30px;
  object-fit: cover;
}

.modal-member-info h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 0.5rem;
}

.modal-member-info p {
  color: #3b82f6;
  font-weight: 600;
  margin-bottom: 1rem;
}

.member-contact {
  display: flex;
  gap: 0.5rem;
}

.contact-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border: 1px solid #e5e7eb;
  background: white;
  border-radius: 30px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.875rem;
}

.contact-btn:hover {
  background: #f8fafc;
  border-color: #3b82f6;
  color: #3b82f6;
}

.modal-body p {
  line-height: 1.7;
  margin-bottom: 2rem;
  color: #64748b;
}

.modal-skills,
.modal-achievements {
  margin-bottom: 2rem;
}

.modal-skills h4,
.modal-achievements h4 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.skill-badge {
  background: #dbeafe;
  color: #1d4ed8;
  padding: 0.5rem 1rem;
  border-radius: 30px;
  font-size: 0.875rem;
  font-weight: 500;
}

.achievements-list {
  list-style: none;
  padding: 0;
}

.achievements-list li {
  padding: 0.5rem 0;
  border-bottom: 1px solid #f1f5f9;
  position: relative;
  padding-left: 1.5rem;
}

.achievements-list li:before {
  content: '✓';
  position: absolute;
  left: 0;
  color: #10b981;
  font-weight: bold;
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
}

@media (max-width: 768px) {
  .hero-stats {
    justify-content: center;
    gap: 1rem;
  }
  
  .showcase-grid {
    grid-template-columns: repeat(2, 1fr);
  }
  
  .leadership-grid,
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .team-card-content {
    flex-direction: column;
    text-align: center;
  }
  
  .member-actions {
    flex-direction: row;
    justify-content: center;
  }
  
  .modal-header {
    flex-direction: column;
    text-align: center;
  }
}
</style>
