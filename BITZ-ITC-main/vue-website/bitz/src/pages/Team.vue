<template>
  <div class="our-team">
    <!-- Hero Section -->
    <section class="hero-section bg-blue-600 text-white">
      <div class="hero-background">
        <div class="floating-shapes">
          <div class="shape shape-1"></div>
          <div class="shape shape-2"></div>
          <div class="shape shape-3"></div>
        </div>
      </div>
      <div class="container-custom hero-content">
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
          <div class="team-showcase liquid-glass">
            <div class="showcase-grid">
              <div v-for="(member, index) in featuredMembers" :key="member.id"
                   class="showcase-item"
                   :style="{ animationDelay: `${index * 0.2}s` }">
                <div class="member-initials" :style="{ background: member.color }">
                  {{ getInitials(member.name) }}
                </div>
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
            <button v-for="category in teamCategories"
                    :key="category"
                    class="filter-btn"
                    :class="{ active: activeCategory === category }"
                    @click="setActiveCategory(category)">
              {{ category }}
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Unified Team Section -->
    <section class="section team-section">
      <div class="container">
        <div class="section-header">
          <div class="badge badge-primary">Our Team</div>
          <h2 class="section-title">Meet Our Amazing Team</h2>
          <p class="section-description">
            From visionary leaders to skilled developers, our diverse team drives innovation across all domains.
          </p>
        </div>
        <transition name="fade" mode="out-in">
          <div :key="activeCategory" class="unified-team-grid">
            <div v-for="member in filteredAllMembers" :key="member.id" class="team-card">
              <div class="team-card-header">
                <div class="member-initials-medium" :style="{ background: member.color }">
                  {{ getInitials(member.name) }}
                </div>
                <div class="member-basic-info">
                  <h3 class="member-name">{{ member.name }}</h3>
                  <p class="member-role">{{ member.position }}</p>
                  <div class="member-category-badge" :class="getCategoryClass(member.category)">
                    {{ member.category }}
                  </div>
                </div>
                <div class="card-actions">
                  <button class="action-icon" @click="openMemberModal(member)">
                    <Eye :size="16" />
                  </button>
                  <button class="action-icon">
                    <Mail :size="16" />
                  </button>
                </div>
              </div>
              
              <div class="team-card-body">
                <p class="member-description">{{ member.description }}</p>
                
                <div class="qualifications-compact">
                  <div class="section-label">Qualifications</div>
                  <div class="qualification-tags-compact">
                    <span v-for="qual in member.qualifications.slice(0, 2)" :key="qual" class="qualification-tag-compact">
                      {{ qual }}
                    </span>
                    <span v-if="member.qualifications.length > 2" class="more-tag">
                      +{{ member.qualifications.length - 2 }} more
                    </span>
                  </div>
                </div>

                <div class="skills-compact" v-if="member.skills">
                  <div class="section-label">Skills</div>
                  <div class="skill-tags-compact">
                    <span v-for="skill in member.skills?.slice(0, 3)" :key="skill" class="skill-tag-compact">
                      {{ skill }}
                    </span>
                  </div>
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
            <div class="member-initials-large" :style="{ background: selectedMember.color }">
              {{ getInitials(selectedMember.name) }}
            </div>
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
            
            <div class="modal-qualifications">
              <h4>Qualifications & Certifications</h4>
              <div class="qualifications-grid">
                <span v-for="qual in selectedMember.qualifications" :key="qual" class="qualification-badge">
                  {{ qual }}
                </span>
              </div>
            </div>

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

// Helper function to get initials
const getInitials = (name) => {
  return name.split(' ').map(word => word[0]).join('').toUpperCase()
}

// Helper function to generate colors
const generateColor = (name) => {
  const colors = [
    '#3b82f6', '#8b5cf6', '#10b981', '#f59e0b', 
    '#ef4444', '#06b6d4', '#84cc16', '#f97316'
  ]
  const index = name.length % colors.length
  return colors[index]
}

// Helper function to get category CSS class
const getCategoryClass = (category) => {
  const categoryClasses = {
    'Leadership': 'category-leadership',
    'Development': 'category-development',
    'AI & Data': 'category-ai-data',
    'Finance': 'category-finance',
    'Management': 'category-management',
    'Partners': 'category-partners'
  }
  return categoryClasses[category] || 'category-default'
}

// Team data with qualifications (keeping existing data structure)
const leadership = [
  {
    id: 1,
    name: 'James Kaminju',
    position: 'Chief Executive Officer',
    description: 'Leading BITZ Inc with vision and expertise, driving our company\'s growth and innovation in technology solutions. James brings over 15 years of experience in technology leadership and business development.',
    qualifications: ['MBA Business Administration', 'BSc Computer Science', 'PMP Certification', 'Executive Leadership Program'],
    skills: ['Strategic Leadership', 'Business Development', 'Technology Vision', 'Team Building'],
    category: 'Leadership',
    color: generateColor('James Kaminju'),
    achievements: [
      'Led company growth from startup to regional leader',
      'Established partnerships with UNICEF and World Bank',
      'Expanded operations across 4 East African countries'
    ]
  },
  {
    id: 2,
    name: 'Mercy Kamau',
    position: 'Head of Strategy and Innovation',
    description: 'Driving strategic initiatives and fostering innovation across the organization. Mercy leads our strategic planning and innovation programs to ensure competitive advantage.',
    qualifications: ['MBA Strategic Management', 'BSc Business Administration', 'Innovation Leadership Certification', 'Strategic Planning Professional'],
    skills: ['Strategic Planning', 'Innovation Management', 'Business Development', 'Market Analysis'],
    category: 'Leadership',
    color: generateColor('Mercy Kamau'),
    achievements: [
      'Developed comprehensive innovation framework',
      'Led strategic partnerships with major organizations',
      'Implemented data-driven strategic planning processes'
    ]
  },
  {
    id: 3,
    name: 'Nelson Adagi',
    position: 'Project Manager',
    description: 'Leading project delivery through effective planning, execution, and team coordination. Nelson ensures successful project outcomes and client satisfaction.',
    qualifications: ['MSc Information Systems', 'BSc Computer Engineering', 'PMP Certification', 'Agile/Scrum Master'],
    skills: ['Project Management', 'Team Leadership', 'Agile Methodologies', 'Risk Management'],
    category: 'Management',
    color: generateColor('Nelson Adagi'),
    achievements: [
      'Successfully delivered 100+ projects',
      'Established agile project management processes',
      'Built high-performing cross-functional teams'
    ]
  },
  {
    id: 4,
    name: 'Joseph Kimani',
    position: 'Technical Lead',
    description: 'Leading technical innovation and ensuring the highest standards in our technology solutions. Joseph drives our technical strategy and mentors development teams.',
    qualifications: ['MSc Software Engineering', 'BSc Computer Science', 'AWS Solutions Architect', 'Google Cloud Professional'],
    skills: ['Technical Architecture', 'Code Review', 'Mentoring', 'Innovation Strategy'],
    category: 'Leadership',
    color: generateColor('Joseph Kimani'),
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
    qualifications: ['CPA Certification', 'BSc Finance', 'Financial Risk Management'],
    category: 'Finance',
    color: generateColor('Joan Njoki'),
    skills: ['Financial Planning', 'Budget Management', 'Financial Analysis', 'Compliance']
  },
  {
    id: 6,
    name: 'Franklin Karanja',
    position: 'Lead AI Developer',
    description: 'Spearheading AI initiatives and machine learning solutions for innovative applications.',
    qualifications: ['MSc Artificial Intelligence', 'BSc Computer Science', 'TensorFlow Developer Certification', 'AWS ML Specialty'],
    category: 'AI & Data',
    color: generateColor('Franklin Karanja'),
    skills: ['Machine Learning', 'Deep Learning', 'Python', 'TensorFlow', 'Data Science']
  },
  {
    id: 7,
    name: 'Miriam Shem',
    position: 'Head of Social Media and AI Developer',
    description: 'Combining social media expertise with AI development for enhanced digital experiences.',
    qualifications: ['BSc Digital Marketing', 'AI/ML Certification', 'Google Analytics Certified', 'Social Media Marketing'],
    category: 'AI & Data',
    color: generateColor('Miriam Shem'),
    skills: ['Social Media Strategy', 'AI Development', 'Content Strategy', 'Digital Marketing']
  },
  {
    id: 8,
    name: 'Phyllis Kamau',
    position: 'CI/CD and Deployment',
    description: 'Ensuring smooth and efficient deployment processes through robust CI/CD pipelines.',
    qualifications: ['BSc Computer Science', 'Docker Certified Associate', 'Kubernetes Administrator', 'AWS DevOps'],
    category: 'Development',
    color: generateColor('Phyllis Kamau'),
    skills: ['DevOps', 'CI/CD', 'Docker', 'Kubernetes', 'Cloud Deployment']
  },
  {
    id: 9,
    name: 'Jude Angedu',
    position: 'Backend Development',
    description: 'Building robust and scalable backend systems for our applications.',
    qualifications: ['BSc Software Engineering', 'Node.js Certification', 'MongoDB Developer', 'API Design Specialist'],
    category: 'Development',
    color: generateColor('Jude Angedu'),
    skills: ['Node.js', 'Python', 'Database Design', 'API Development', 'System Architecture']
  },
  {
    id: 10,
    name: 'Peter Rogendo',
    position: 'Backend Development',
    description: 'Contributing to the development of efficient and reliable backend services.',
    qualifications: ['BSc Computer Science', 'Java Spring Certification', 'Microservices Architecture', 'Security Specialist'],
    category: 'Development',
    color: generateColor('Peter Rogendo'),
    skills: ['Java', 'Spring Boot', 'Microservices', 'Database Optimization', 'Security']
  },
  {
    id: 11,
    name: 'Newton Brian',
    position: 'UI/UX and Frontend Development',
    description: 'Designing and implementing user-friendly interfaces and engaging frontend experiences.',
    qualifications: ['BSc Design', 'UX Design Certification', 'React Developer', 'Adobe Certified Expert'],
    category: 'Development',
    color: generateColor('Newton Brian'),
    skills: ['React', 'Vue.js', 'UI/UX Design', 'Responsive Design', 'User Experience']
  },
  {
    id: 12,
    name: 'Marlon',
    position: 'AI Developer Intern',
    description: 'AI and machine learning development, contributing to innovative AI solutions and data analysis projects.',
    qualifications: ['BSc Computer Science (In Progress)', 'AI/ML Bootcamp', 'Python Certification'],
    category: 'AI & Data',
    color: generateColor('Marlon'),
    skills: ['Python', 'Machine Learning', 'Data Analysis', 'AI Development', 'Learning & Growth']
  },
  {
    id: 16,
    name: 'Brenda Ogutu',
    position: 'AI Research Intern',
    description: 'Researching cutting-edge AI technologies and contributing to machine learning model development and optimization.',
    qualifications: ['BSc Data Science (In Progress)', 'Machine Learning Certification', 'Research Methods'],
    category: 'AI & Data',
    color: generateColor('Brenda Ogutu'),
    skills: ['Research', 'Machine Learning', 'Data Visualization', 'Statistical Analysis', 'AI Ethics']
  }
]

// Partners data
const partners = [
  {
    id: 13,
    name: 'UNICEF Kenya',
    position: 'Strategic Partner',
    description: 'Long-term partnership in child protection and welfare systems development.',
    qualifications: ['UN Partnership Certification', 'Child Protection Standards', 'International Development'],
    category: 'Partners',
    color: '#1976d2',
    skills: ['Child Protection', 'System Integration', 'Training', 'Support']
  },
  {
    id: 14,
    name: 'World Bank',
    position: 'Development Partner',
    description: 'Collaboration on digital transformation and governance projects.',
    qualifications: ['World Bank Certification', 'Digital Governance', 'Project Management Professional'],
    category: 'Partners',
    color: '#388e3c',
    skills: ['Digital Governance', 'Capacity Building', 'Project Management', 'Consulting']
  },
  {
    id: 15,
    name: 'Kenya Government',
    position: 'Government Partner',
    description: 'Supporting government digitization and e-governance initiatives.',
    qualifications: ['Government Partnership', 'E-Governance Certification', 'Public Sector Experience'],
    category: 'Partners',
    color: '#f57c00',
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

// New unified filtering computed property
const filteredAllMembers = computed(() => {
  let members = allMembers.value

  // Filter by category
  if (activeCategory.value !== 'All Teams') {
    members = members.filter(member => member.category === activeCategory.value)
  }

  // Apply search filter
  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    members = members.filter(member => 
      member.name.toLowerCase().includes(query) ||
      member.position.toLowerCase().includes(query) ||
      member.description.toLowerCase().includes(query) ||
      member.qualifications?.some(qual => qual.toLowerCase().includes(query))
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
  background: #000;
  color: white;
  padding: 6rem 0 3rem;
  margin-top: 0;
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
  background: rgba(255,255,255,0.15);
  border-radius: 30px;
  padding: 2rem;
  backdrop-filter: blur(16px) saturate(180%);
  -webkit-backdrop-filter: blur(16px) saturate(180%);
  border: 1.5px solid rgba(255,255,255,0.25);
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

.member-initials {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.5rem;
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
  background: #1F1E5C;
  color: white;
  border-color: #1F1E5C;
  transform: translateY(-2px);
}

/* Unified Team Grid */
.unified-team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 2rem;
}

/* Category Badge Styles */
.member-category-badge {
  display: inline-block;
  padding: 0.25rem 0.75rem;
  border-radius: 12px;
  font-size: 0.6875rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-top: 0.25rem;
}

.category-leadership {
  background: #fef3c7;
  color: #92400e;
}

.category-development {
  background: #e0e7ff;
  color: #1F1E5C;
}

.category-ai-data {
  background: #f0fdf4;
  color: #16a34a;
}

.category-finance {
  background: #fdf2f8;
  color: #be185d;
}

.category-management {
  background: #f3e8ff;
  color: #7c3aed;
}

.category-partners {
  background: #fef2f2;
  color: #dc2626;
}

.category-default {
  background: #f3f4f6;
  color: #6b7280;
}

/* Remove qualification filter styles */
.qualification-filters {
  display: none;
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
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  gap: 2rem;
}

.leadership-card {
  background: white;
  border-radius: 24px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid #f1f5f9;
}

.leadership-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 20px 25px rgba(0, 0, 0, 0.1);
}

.card-content {
  display: flex;
  gap: 1.5rem;
}

.member-avatar-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
}

.member-initials-large {
  width: 80px;
  height: 80px;
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.75rem;
}

.member-status {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.75rem;
  color: #10b981;
}

.status-dot {
  width: 8px;
  height: 8px;
  background: #10b981;
  border-radius: 50%;
}

.member-info {
  flex: 1;
}

.member-name {
  font-size: 1.25rem;
  font-weight: 700;
  margin-bottom: 0.25rem;
  color: #1e293b;
}

.member-position {
  color: #3b82f6;
  font-weight: 600;
  margin-bottom: 0.75rem;
  font-size: 0.875rem;
}

.member-description {
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.5rem;
  font-size: 0.875rem;
}

.qualifications-section,
.skills-section {
  margin-bottom: 1.5rem;
}

.qualifications-section h4,
.skills-section h4 {
  font-size: 0.875rem;
  font-weight: 600;
  margin-bottom: 0.5rem;
  color: #374151;
}

.qualification-tags,
.skill-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.qualification-tag {
  background: #fef3c7;
  color: #92400e;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
}

.skill-tag {
  background: #e0e7ff;
  color: #1F1E5C;
  padding: 0.25rem 0.75rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
}

.member-actions {
  display: flex;
  gap: 0.75rem;
  margin-top: 1rem;
}

.action-btn {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.75rem;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;
}

.action-btn.primary {
  background: #1F1E5C;
  color: white;
}

.action-btn.primary:hover {
  background: #1F1E5C;
  transform: translateY(-2px);
}

.action-btn.secondary {
  background: #f1f5f9;
  color: #64748b;
  border: 1px solid #e2e8f0;
}

.action-btn.secondary:hover {
  background: #e2e8f0;
  color: #374151;
}

/* Team Section */
.team-section {
  padding: 5rem 0;
  background: #f8fafc;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  gap: 1.5rem;
}

.team-card {
  background: white;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  border: 1px solid #f1f5f9;
}

.team-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 12px 20px rgba(0, 0, 0, 0.1);
}

.team-card-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.5rem 1.5rem 1rem;
}

.member-initials-medium {
  width: 50px;
  height: 50px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 700;
  font-size: 1.125rem;
  flex-shrink: 0;
}

.member-basic-info {
  flex: 1;
}

.member-basic-info .member-name {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 0.25rem;
  color: #1e293b;
}

.member-role {
  color: #3b82f6;
  font-size: 0.875rem;
  font-weight: 500;
}

.card-actions {
  display: flex;
  gap: 0.5rem;
}

.action-icon {
  width: 2rem;
  height: 2rem;
  border: none;
  background: #f1f5f9;
  color: #64748b;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
}

.action-icon:hover {
  background: #3b82f6;
  color: white;
  transform: scale(1.1);
}

.team-card-body {
  padding: 0 1.5rem 1.5rem;
}

.team-card-body .member-description {
  color: #64748b;
  font-size: 0.875rem;
  line-height: 1.5;
  margin-bottom: 1rem;
}

.qualifications-compact,
.skills-compact {
  margin-bottom: 1rem;
}

.section-label {
  font-size: 0.75rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.qualification-tags-compact,
.skill-tags-compact {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
}

.qualification-tag-compact {
  background: #fef3c7;
  color: #92400e;
  padding: 0.125rem 0.5rem;
  border-radius: 12px;
  font-size: 0.6875rem;
  font-weight: 500;
}

.skill-tag-compact {
  background: #dbeafe;
  color: #1d4ed8;
  padding: 0.125rem 0.5rem;
  border-radius: 12px;
  font-size: 0.6875rem;
  font-weight: 500;
}

.more-tag {
  background: #f3f4f6;
  color: #6b7280;
  padding: 0.125rem 0.5rem;
  border-radius: 12px;
  font-size: 0.6875rem;
  font-weight: 500;
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
  border-radius: 24px;
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
  border-radius: 20px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 0.875rem;
}

.contact-btn:hover {
  background: #f8fafc;
  border-color: #1F1E5C;
  color: #1F1E5C;
}

.modal-body p {
  line-height: 1.7;
  margin-bottom: 2rem;
  color: #64748b;
}

.modal-qualifications,
.modal-skills,
.modal-achievements {
  margin-bottom: 2rem;
}

.modal-qualifications h4,
.modal-skills h4,
.modal-achievements h4 {
  font-size: 1.125rem;
  font-weight: 600;
  margin-bottom: 1rem;
}

.qualifications-grid,
.skills-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
}

.qualification-badge {
  background: #fef3c7;
  color: #92400e;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.875rem;
  font-weight: 500;
}

.skill-badge {
  background: #e0e7ff;
  color: #1F1E5C;
  padding: 0.5rem 1rem;
  border-radius: 20px;
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
  
  .leadership-grid {
    grid-template-columns: 1fr;
  }
  
  .card-content {
    flex-direction: column;
    text-align: center;
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
  
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .team-card-header {
    flex-direction: column;
    text-align: center;
    gap: 1rem;
  }
  
  .card-actions {
    justify-content: center;
  }
  
  .modal-header {
    flex-direction: column;
    text-align: center;
  }
  
  .member-actions {
    justify-content: center;
  }
}

@media (max-width: 1024px) {
  .unified-team-grid {
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  }
}

@media (max-width: 768px) {
  .unified-team-grid {
    grid-template-columns: 1fr;
  }
}
</style>
